"use client";

import Link from "next/link";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer>
      <Link href="/">
        <Logo firstName="Alipasha" lastName="Askerov" className="reverse"/>
      </Link>
    </footer>
  );
}
