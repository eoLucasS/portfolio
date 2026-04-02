"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS, BLOG_NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  const links = isBlog ? BLOG_NAV_LINKS : NAV_LINKS;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-[#111111]/80 backdrop-blur-[24px] border-b border-border">
      <div className="max-w-[1140px] mx-auto px-[2.4rem] flex items-center justify-between h-[80px]">
        <Link href="/" className="flex items-center gap-[12px] group">
          <div className="w-[38px] h-[38px] border-2 border-accent rounded-[6px] flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
            <span className="text-accent text-[1.6rem] font-semibold leading-none">LS</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-foreground text-[1.6rem] font-semibold tracking-tight">
              Lucas Silva
            </span>
            <span className="text-gray-text text-[1.1rem] font-normal">
              Security &amp; Blue Team
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-[3.2rem]">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return link.href.startsWith("#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-text hover:text-foreground text-[1.6rem] font-normal transition-colors animated-underline cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[1.6rem] transition-colors animated-underline ${
                  isActive
                    ? "text-accent font-medium"
                    : "text-gray-text hover:text-foreground font-normal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-[40px] h-[40px] gap-[6px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-[24px] h-[2px] bg-white transition-all duration-400 ${
              menuOpen ? "rotate-[-45deg] translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-[24px] h-[2px] bg-white transition-all duration-400 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[24px] h-[2px] bg-white transition-all duration-400 ${
              menuOpen ? "rotate-[45deg] translate-y-[-8px]" : ""
            }`}
          />
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} isBlog={isBlog} />
    </header>
  );
}
