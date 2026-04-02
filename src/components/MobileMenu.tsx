"use client";

import Link from "next/link";
import { NAV_LINKS, BLOG_NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isBlog?: boolean;
}

export default function MobileMenu({ isOpen, onClose, isBlog = false }: MobileMenuProps) {
  const links = isBlog ? BLOG_NAV_LINKS : NAV_LINKS;

  const handleClick = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[80px] bg-[#151515] z-[998] flex flex-col items-center justify-center gap-[4rem] lg:hidden">
      {links.map((link, index) => (
        <div
          key={link.label}
          className="animate-navLinkFade"
          style={{
            animation: `navLinkFade 0.5s ease forwards ${0.3 + index / 7}s`,
            opacity: 0,
          }}
        >
          {link.href.startsWith("#") ? (
            <button
              onClick={() => handleClick(link.href)}
              className="text-foreground text-[2.4rem] font-medium hover:text-accent transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ) : (
            <Link
              href={link.href}
              onClick={onClose}
              className="text-foreground text-[2.4rem] font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}
      <style jsx>{`
        @keyframes navLinkFade {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
