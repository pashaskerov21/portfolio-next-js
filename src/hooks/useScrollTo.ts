"use client";

import { usePathname, useRouter } from "next/navigation";

export const useScrollTo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = async (targetId: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    const scrollToElement = (element: HTMLElement) => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      window.history.replaceState(null, "", targetId);
    };

    if (pathname === "/") {
      const element = document.getElementById(targetId.replace(/^#/, ""));
      if (element) scrollToElement(element);
    } else {
      await router.push("/");

      // Wait for the home route and its sections to commit before looking them up.
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        const element = document.getElementById(targetId.replace(/^#/, ""));
        if (element) scrollToElement(element);
      }));
    }
  };

  return { scrollTo };
};
