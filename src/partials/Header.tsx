"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MenuDataType, PersonalInformationDataType } from "../types";
import { useScrollTo } from "../hooks/useScrollTo";
import { useTheme } from "../hooks/useTheme";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";
import Image from "next/image";

interface HeaderProps {
  personalData: PersonalInformationDataType;
  menuData: MenuDataType[];
}

export default function Header({ personalData, menuData }: HeaderProps) {
  const { scrollTo } = useScrollTo();
  const { currentTheme, toggleTheme } = useTheme();

  // Menu State
  const [menuState, setMenuState] = useState<"closed" | "half" | "full">("closed");
  const startY = useRef(0);
  const currentY = useRef(0);
  const dragging = useRef(false);
  const body = document.querySelector("body");

  useEffect(() => {
    if(body){
      if(menuState !== "closed"){
        body.classList.add("locked");
      }else{
        body.classList.remove("locked");
      }
    }
  },[body, menuState])

  const toggleMenu = () =>
    setMenuState((prev) => (prev === "closed" ? "half" : "closed"));

  const getY = (e: TouchEvent | MouseEvent) =>
    e instanceof TouchEvent ? e.touches[0]?.clientY ?? 0 : (e as MouseEvent).clientY;

  const onDragStart = (e: TouchEvent | MouseEvent) => {
    dragging.current = true;
    startY.current = getY(e);
  };

  const onDragMove = (e: TouchEvent | MouseEvent) => {
    if (!dragging.current) return;
    currentY.current = getY(e);
    const diff = startY.current - currentY.current;

    if (diff > 50) setMenuState("full");
    if (diff < -50) setMenuState("half");
  };

  const onDragEnd = () => {
    dragging.current = false;
  };

  // Click outside to close
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Fixed header on scroll
  const [fixedTop, setFixedTop] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (
        menuState !== "closed" &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuState("closed");
      }
    };
    const onScroll = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollValue(Math.round((pos * 100) / calcHeight));
      setFixedTop(pos > 100);
    };
    document.addEventListener("pointerdown", onClickOutside);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);

    return () => {
      document.removeEventListener("pointerdown", onClickOutside);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, [menuState]);

  return (
    <header>
      <nav className={`general-nav ${fixedTop ? "fixed" : ""}`}>
        <div className="container">
          <div className="inner">
            <Link href="/">
              <Logo firstName="Alipasha" />
            </Link>

            {/* Desktop Menu */}
            <ul className="links-wrapper desktop d-none d-lg-flex">
              {menuData.map((menu, i) => (
                <li
                  key={i}
                  style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                >
                  <a
                    href={`#${menu.name}`}
                    onClick={(e) => scrollTo(`#${menu.name}`, e)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="right">
              <a
                href={personalData.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
                aria-label="Alipasha Askerov CV"
              >
                CV
              </a>

              {/* Version Dropdown */}
              <div className="version-dropdown">
                <div className="active-version">
                  <Image
                    src={currentTheme === "dark" ? "/design/next-js-2.svg" : "/design/next-js.svg"}
                    width={16}
                    height={16}
                    alt="Version Next"
                  />
                </div>
                <ul className="version-menu">
                  <li className="angular">
                    <a href="https://alipashaskerov2.vercel.app/">
                      <Image
                        src="/design/angular-logo.png"
                        width={16}
                        height={16}
                        alt="Version Angular"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://alipashaskerov3.vercel.app/">
                      <Image
                        src="/design/vue-logo.png"
                        width={16}
                        height={16}
                        alt="Version Vue"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Theme Button */}
              <button
                className="theme-button"
                aria-label="Theme toggle button"
                type="button"
                onClick={toggleTheme}
              >
                {currentTheme === "dark" ? (
                  <i className="fa-solid fa-sun" />
                ) : (
                  <i className="fa-solid fa-moon" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                ref={buttonRef}
                className={`menu-button d-lg-none ${menuState !== "closed" ? "active" : ""}`}
                aria-label="Mobile Menu toggle button"
                type="button"
                onClick={toggleMenu}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
        {fixedTop && (
          <div className="header-progress" style={{ width: `${scrollValue}%` }}></div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`mobile-menu d-lg-none ${menuState === "half"
          ? "active"
          : menuState === "full"
            ? "full-height"
            : "hide"
          }`}
        onTouchStart={(e) => onDragStart(e.nativeEvent)}
        onTouchMove={(e) => onDragMove(e.nativeEvent)}
        onTouchEnd={onDragEnd}
      >
        <div className="drag-indigator"></div>
        <div className="menu-inner">
          <div className="inner-top">
            <ul className="links-wrapper mobile">
              {menuData.map((menu, i) => (
                <li
                  key={i}
                  style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                >
                  <a
                    href={`#${menu.name}`}
                    className="menu-link"
                    onClick={(e) => {
                      toggleMenu();
                      scrollTo(`#${menu.name}`, e);
                    }}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <SocialIcons
              personalData={personalData}
              menuOpen={menuState !== "closed"}
              className="menu-icons"
            />
          </div>

          <div className="menu-footer">
            <div className="footer-row">
              <Link href="/">
                <Logo firstName="ALIPASHA" className="reverse" />
              </Link>
              <div className="right">
                <a
                  href={personalData.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                  aria-label="Alipasha Askerov CV"
                >
                  CV
                </a>
                <button
                  className="theme-button"
                  aria-label="Theme toggle button"
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    toggleMenu();
                  }}
                >
                  {currentTheme === "dark" ? (
                    <i className="fa-solid fa-sun" />
                  ) : (
                    <i className="fa-solid fa-moon" />
                  )}
                </button>
              </div>
            </div>

            <ul className="versions">
              <li>
                <a href="https://alipashaskerov.vercel.app/" className="active">Next JS</a>
              </li>
              <li>
                <a href="https://alipashaskerov2.vercel.app/">Angular</a>
              </li>
              <li>
                <a href="https://alipashaskerov3.vercel.app/">
                  Vue
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
