"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "The Trip",     href: "#the-trip"    },
  { label: "The Canyon",   href: "#the-canyon"  },
  { label: "Your Guides",  href: "#your-guides" },
  { label: "Investment",   href: "#investment"  },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Page navigation"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "border-b border-border",
        "bg-[#0d0a07]/95 backdrop-blur-sm",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      ].join(" ")}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 h-14 flex items-center justify-between gap-8">

        {/* Wordmark */}
        <span className="font-display text-sm text-foreground/40 shrink-0 hidden sm:block">
          Coyote Gulch
        </span>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-none">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/45 hover:text-foreground/85 font-sans text-[0.7rem] tracking-[0.15em] uppercase whitespace-nowrap px-3 py-1.5 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#apply"
            className="ml-2 shrink-0 bg-[#c4813d] hover:bg-[#d4924e] text-[#0d0905] font-sans font-semibold text-[0.7rem] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-150"
          >
            Apply Now
          </a>
        </div>

      </div>
    </nav>
  );
}
