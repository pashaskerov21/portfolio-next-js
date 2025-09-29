"use client";

import { usePathname, useRouter } from "next/navigation";

export const useScrollTo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = async (targetId: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    // hazırda ana səhifədəsə scroll et
    if (pathname === "/") {
      const element = document.querySelector(targetId) as HTMLElement;
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", targetId);
      }
    } else {
      // ana səhifəyə yönləndir
      await router.push("/");

      // növbəti tick-də scroll et
      setTimeout(() => {
        const element = document.querySelector(targetId) as HTMLElement;
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 50;
          window.scrollTo({ top, behavior: "smooth" });
          history.replaceState(null, "", targetId);
        }
      }, 50);
    }
  };

  return { scrollTo };
};
