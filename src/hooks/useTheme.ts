"use client";

import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export const useTheme = () => {
  const { isDarkMode, toggle } = useDarkMode();

  const toggleTheme = () => toggle();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]); // isDarkMode dəyişdikdə theme update olunur

  return { currentTheme: isDarkMode ? "dark" : "light", toggleTheme };
};
