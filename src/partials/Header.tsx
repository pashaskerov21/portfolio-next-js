"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuDataType, PersonalInformationDataType } from "../types";
import { useScrollTo } from "../hooks/useScrollTo";
import { useTheme } from "../hooks/useTheme";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";

interface HeaderProps {
  personalData: PersonalInformationDataType;
  menuData: MenuDataType[];
}

export default function Header({ personalData, menuData }: HeaderProps) {
  const { scrollTo } = useScrollTo();
  const { currentTheme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Sliding indicator under the active desktop link
  const linksRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  // Pill gets a stronger background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section that has reached the header's reading line. IntersectionObserver
  // can report several long sections at once, making the active link depend on callback order.
  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(pathname.startsWith("/projects") ? "projects" : "");
      return;
    }

    const sections = menuData
      .map((menu) => document.getElementById(menu.name))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerBottom =
          document
            .querySelector<HTMLElement>(".site-header")
            ?.getBoundingClientRect().bottom ?? 0;
        const readingLine = headerBottom + 24;
        let current = sections[0];

        for (const section of sections) {
          if (section.getBoundingClientRect().top <= readingLine)
            current = section;
          else break;
        }

        // Keep the final section active when the page cannot scroll any further.
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
        ) {
          current = sections[sections.length - 1];
        }
        setActiveId(current.id);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname, menuData]);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeLink = linksRef.current?.querySelector<HTMLAnchorElement>(
        `a[data-id="${activeId}"]`,
      );
      if (!activeLink) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      const linksContainer = linksRef.current;
      if (!linksContainer) return;
      const linksRect = linksContainer.getBoundingClientRect();
      const activeLinkRect = activeLink.getBoundingClientRect();
      setIndicator({
        left: activeLinkRect.left - linksRect.left,
        width: activeLinkRect.width,
        visible: true,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeId]);

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const maskId = useId();

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}
    >
      <nav className="container" aria-label="Main navigation">
        <div className="nav-pill">
          <div className="glass_effect"></div>
          <div className="nav_layer"></div>
          <Link
            href="/"
            className="nav-logo"
            aria-label="Home"
            onClick={() => setMenuOpen(false)}
          >
            <Logo firstName="Alipasha" />
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links d-none d-lg-flex" ref={linksRef}>
            <span
              className={`nav-indicator ${indicator.visible ? "visible" : ""}`}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
              }}
              aria-hidden="true"
            ></span>
            <ul>
              {menuData.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.name}`}
                    data-id={menu.name}
                    className={activeId === menu.name ? "active" : ""}
                    aria-current={
                      activeId === menu.name ? "location" : undefined
                    }
                    onClick={(e) => scrollTo(`#${menu.name}`, e)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-actions">
            <button
              className={`theme-button ${currentTheme === "dark" ? "show-sun" : "show-moon"}`}
              aria-label={
                currentTheme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              type="button"
              onClick={toggleTheme}
            >
              <svg
                className="theme-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <mask id={maskId}>
                  <rect x="0" y="0" width="24" height="24" fill="white" />
                  <circle
                    className="moon-cut"
                    cx="17"
                    cy="7"
                    r="6"
                    fill="black"
                  />
                </mask>
                <circle
                  className="sun-core"
                  cx="12"
                  cy="12"
                  r="5"
                  fill="currentColor"
                  mask={`url(#${maskId})`}
                />
                <g
                  className="sun-rays"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                  <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                </g>
              </svg>
            </button>

            <a
              href={personalData.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link d-none d-sm-flex"
              aria-label="Alipasha Askerov CV"
            >
              CV
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`menu-button d-lg-none ${menuOpen ? "active" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <svg className="d-none">
        <filter id="liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
        </filter>
        <filter id="liquidBtn">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" />
        </filter>
      </svg>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu d-lg-none ${menuOpen ? "open" : ""}`}
        inert={!menuOpen}
      >
        <div className="container mobile-menu-inner">
          <ul className="mobile-links">
            {menuData.map((menu, i) => (
              <li
                key={menu.id}
                style={{
                  transitionDelay: menuOpen ? `${i * 0.05 + 0.1}s` : "0s",
                }}
              >
                <a
                  href={`#${menu.name}`}
                  className={activeId === menu.name ? "active" : ""}
                  aria-current={activeId === menu.name ? "location" : undefined}
                  onClick={(e) => {
                    setMenuOpen(false);
                    scrollTo(`#${menu.name}`, e);
                  }}
                >
                  <span className="index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="name">{menu.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <SocialIcons personalData={personalData} className="about-icons" />
            <a
              href={personalData.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link"
              aria-label="Alipasha Askerov CV"
            >
              Review CV
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
