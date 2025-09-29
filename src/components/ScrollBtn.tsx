"use client";

import { useEffect, useState } from "react";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);

  const onWindowScroll = () => {
    const pos = document.documentElement.scrollTop;
    setVisible(pos > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    window.addEventListener("load", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("load", onWindowScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-button ${visible ? "visible" : ""}`}
      aria-label="Scroll top button"
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
