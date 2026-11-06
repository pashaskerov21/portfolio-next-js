"use client";

import { RefObject, useEffect, useRef } from "react";

type Tone = "light" | "dark";
type OverlayEntry = { node: HTMLElement; text: string };

const overlaySelector = ".nav-links a[data-adaptive], .mobile-links a[data-adaptive], .nav-logo[data-adaptive]";
const copiedStyleProperties = [
  "display", "align-items", "justify-content", "flex-direction", "gap", "padding",
  "font-family", "font-size", "font-style", "font-weight", "line-height", "letter-spacing",
  "text-align", "text-transform", "white-space", "word-spacing", "vertical-align",
];

function copyOverlayStyles(source: HTMLElement, target: HTMLElement): void {
  const computed = getComputedStyle(source);
  copiedStyleProperties.forEach((property) => {
    target.style.setProperty(property, computed.getPropertyValue(property));
  });
  Object.assign(target.style, {
    color: "#fff",
    backgroundColor: "transparent",
    borderColor: "transparent",
    opacity: "1",
    animation: "none",
    transition: "none",
    transform: "none",
  });

  const sourceChildren = Array.from(source.children);
  const targetChildren = Array.from(target.children);
  sourceChildren.forEach((child, index) => {
    const clone = targetChildren[index];
    if (child instanceof HTMLElement && clone instanceof HTMLElement) {
      copyOverlayStyles(child, clone);
    }
  });
}

function createOverlay(source: HTMLElement): HTMLElement {
  const overlay = source.cloneNode(true) as HTMLElement;
  overlay.classList.add("adaptive-contrast-overlay");
  overlay.removeAttribute("id");
  overlay.removeAttribute("href");
  overlay.removeAttribute("data-adaptive");
  overlay.removeAttribute("data-tone");
  overlay.removeAttribute("data-surface");
  overlay.setAttribute("aria-hidden", "true");
  overlay.setAttribute("tabindex", "-1");
  overlay.querySelectorAll("[id], [data-adaptive], [data-tone], [data-surface]").forEach((node) => {
    node.removeAttribute("id");
    node.removeAttribute("data-adaptive");
    node.removeAttribute("data-tone");
    node.removeAttribute("data-surface");
  });
  copyOverlayStyles(source, overlay);
  Object.assign(overlay.style, {
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "0px",
    height: "0px",
    zIndex: "10000",
    mixBlendMode: "difference",
    pointerEvents: "none",
    boxSizing: "border-box",
    textDecoration: "none",
    overflow: "visible",
  });
  return overlay;
}

function isVisible(element: HTMLElement): boolean {
  let current: HTMLElement | null = element;
  while (current) {
    const style = getComputedStyle(current);
    if (style.visibility === "hidden" || Number(style.opacity) === 0) return false;
    current = current.parentElement;
  }
  return true;
}

const luminance = (red: number, green: number, blue: number) => {
  const linear = [red, green, blue].map((value) => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
};

const colorFrom = (value: string) => {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;
  const channels = match[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
  if (channels.length < 3 || channels.slice(0, 3).some(Number.isNaN)) return null;
  return { channels, alpha: channels[3] ?? 1 };
};

const toneFromColor = (value: string): Tone | null => {
  const color = colorFrom(value);
  if (!color || color.alpha === 0) return null;
  return luminance(...(color.channels.slice(0, 3) as [number, number, number])) >= 0.42
    ? "light"
    : "dark";
};

function surfaceTone(surface: HTMLElement): Tone {
  let current: HTMLElement | null = surface;
  while (current) {
    const tone = toneFromColor(getComputedStyle(current).backgroundColor);
    if (tone) return tone;
    current = current.parentElement;
  }
  return surface.dataset.surface as Tone;
}

function toneAtPoint(x: number, y: number, header: HTMLElement, item: HTMLElement): Tone {
  const stack = document.elementsFromPoint(x, y);
  let nearestMarker: HTMLElement | null = null;
  const backgrounds: NonNullable<ReturnType<typeof colorFrom>>[] = [];

  for (const element of stack) {
    if (!(element instanceof HTMLElement)) continue;

    // Ignore the header itself, while allowing explicitly marked button surfaces through.
    if (header.contains(element)) {
      let current: HTMLElement | null = element;
      while (current && current !== header) {
        if (current !== item && (current.dataset.surface === "light" || current.dataset.surface === "dark")) {
          return current.dataset.surface;
        }
        current = current.parentElement;
      }
      continue;
    }

    let current: HTMLElement | null = element;
    while (current) {
      if (!nearestMarker && (current.dataset.surface === "light" || current.dataset.surface === "dark")) {
        nearestMarker = current;
      }
      current = current.parentElement;
    }

    const parsed = colorFrom(getComputedStyle(element).backgroundColor);
    if (parsed && parsed.alpha > 0) backgrounds.push(parsed);
    if (parsed?.alpha === 1) break;
  }

  if (backgrounds.length) {
    // elementsFromPoint is front-to-back; composite the collected layers from back to front.
    let color = [255, 255, 255];
    for (const background of backgrounds.reverse()) {
      const [red, green, blue] = background.channels;
      color = color.map((under, index) => [red, green, blue][index] * background.alpha + under * (1 - background.alpha));
    }
    return luminance(...(color as [number, number, number])) >= 0.42 ? "light" : "dark";
  }
  if (nearestMarker) return surfaceTone(nearestMarker);
  return toneFromColor(getComputedStyle(document.body).backgroundColor) ?? "light";
}

/** Adapts each [data-adaptive] child to the surface directly behind it. */
export function useAdaptiveHeader<T extends HTMLElement>(): RefObject<T | null> {
  const headerRef = useRef<T | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const getItems = () => Array.from(header.querySelectorAll<HTMLElement>("[data-adaptive]"));
    let frame = 0;
    let animationFrame = 0;
    let animationMonitoring = false;
    const overlays = new Map<HTMLElement, OverlayEntry>();

    const schedule = () => {
      if (!animationMonitoring && !frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          update();
        });
      }
    };

    const update = () => {
      const items = getItems();
      // Read every rectangle before sampling or writing any attributes/styles.
      const measurements = items
        .map((item) => ({ item, rect: item.getBoundingClientRect() }))
        .filter(({ rect }) => rect.width > 0 && rect.height > 0);
      const updates = measurements.map(({ item, rect }) => {
        const y = rect.top + rect.height / 2;
        const inset = Math.min(2, rect.width / 4);
        const points = [
          [rect.left + rect.width / 2, y],
          [rect.left + inset, y],
          [rect.right - inset, y],
        ];
        const tones = points.map(([x, pointY]) => toneAtPoint(x, pointY, header, item));
        const lightVotes = tones.filter((tone) => tone === "light").length;
        return { item, tone: lightVotes >= 2 ? "light" as Tone : "dark" as Tone };
      });
      const overlayPlans = measurements
        .filter(({ item }) => item.matches(overlaySelector) && isVisible(item))
        .map(({ item, rect }) => {
          const text = item.textContent ?? "";
          const existing = overlays.get(item);
          return {
            item,
            rect,
            text,
            node: existing?.text === text ? existing.node : createOverlay(item),
          };
        });

      let surfaceChanged = false;
      updates.forEach(({ item, tone }) => {
        if (item.dataset.tone !== tone) item.dataset.tone = tone;
        // A button's fill becomes the surface seen by any overlapping sibling link.
        if (item.matches("button[data-surface], .cv-link[data-surface]")) {
          const surface = tone === "light" ? "dark" : "light";
          if (item.dataset.surface !== surface) {
            item.dataset.surface = surface;
            surfaceChanged = true;
          }
        }
      });

      const activeOverlays = new Set(overlayPlans.map(({ item }) => item));
      overlays.forEach((entry, item) => {
        if (!activeOverlays.has(item)) {
          entry.node.remove();
          overlays.delete(item);
        }
      });
      overlayPlans.forEach(({ item, rect, text, node }) => {
        let entry = overlays.get(item);
        if (!entry || entry.node !== node) {
          entry?.node.remove();
          entry = { node, text };
          overlays.set(item, entry);
          document.body.appendChild(node);
        }
        Object.assign(entry.node.style, {
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        });
      });
      if (surfaceChanged) schedule();

      if (animationMonitoring) {
        if (document.getAnimations().some((animation) =>
          animation.playState === "running" && animation.effect?.getComputedTiming().iterations !== Infinity
        )) {
          animationFrame = requestAnimationFrame(() => {
            animationFrame = 0;
            update();
          });
        } else {
          animationMonitoring = false;
          animationFrame = 0;
        }
      }
    };

    const startAnimationMonitoring = () => {
      if (reducedMotion.matches || animationMonitoring) return;
      animationMonitoring = true;
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
          animationFrame = 0;
          update();
        });
      }
    };
    const onMotionStart = () => startAnimationMonitoring();
    const onMotionEnd = () => schedule();

    const observer = new ResizeObserver(schedule);
    observer.observe(header);
    document.querySelectorAll<HTMLElement>("[data-surface]").forEach((surface) => observer.observe(surface));
    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(header, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("animationstart", onMotionStart, true);
    document.addEventListener("transitionrun", onMotionStart, true);
    document.addEventListener("animationend", onMotionEnd, true);
    document.addEventListener("transitionend", onMotionEnd, true);
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      mutationObserver.disconnect();
      overlays.forEach(({ node }) => node.remove());
      overlays.clear();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("animationstart", onMotionStart, true);
      document.removeEventListener("transitionrun", onMotionStart, true);
      document.removeEventListener("animationend", onMotionEnd, true);
      document.removeEventListener("transitionend", onMotionEnd, true);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return headerRef;
}
