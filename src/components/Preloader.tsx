"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false);

  const pathname = usePathname(); // route dəyişməsini izləmək üçün

  const startPreloader = () => {
    setLoading(true);
    setPercent(0);
    setShowLogo(false);
    startedRef.current = false;

    if (intervalRef.current) clearInterval(intervalRef.current);
    percentCounter();
  };

  const percentCounter = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    let start = 0;
    const end = 100;

    intervalRef.current = setInterval(() => {
      start += 1;
      setPercent(start);

      if (start >= end) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;

        setTimeout(() => {
          setShowLogo(true);

          setTimeout(() => {
            setLoading(false);
            startedRef.current = false;
          }, 1500);
        }, 300);
      }
    }, 10);
  };

  // İlk dəfə mount olunanda preloader başlasın
  useEffect(() => {
    startPreloader();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Route dəyişəndə yenidən işə düşsün
  useEffect(() => {
    startPreloader();
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className={`logo-item ${showLogo ? "show" : ""}`}>
        <Logo firstName="Alipasha" lastName="Askerov" />
      </div>

      <div
        className={`percent ${percent === 100 ? "complete" : ""} ${
          showLogo ? "hide" : ""
        }`}
        style={{
          background: `conic-gradient(#000 ${percent}%, #fff ${percent}%)`,
        }}
      >
        <span>{percent}%</span>
      </div>
    </div>
  );
}
