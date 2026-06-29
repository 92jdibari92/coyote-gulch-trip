"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "The Trip",       href: "#the-trip"        },
  { label: "The Canyon",     href: "#the-canyon"      },
  { label: "Your Guides",    href: "#your-guides"     },
  { label: "Investment",     href: "#investment"      },
  { label: "Podcast",        href: "#podcast"         },
  { label: "Upcoming Trips", href: "/upcoming-trips"  },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when nav becomes hidden (user scrolls back to top)
  useEffect(() => {
    if (!visible) setMenuOpen(false);
  }, [visible]);

  function close() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav
        aria-label="Page navigation"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "border-b border-border bg-[#0d0a07]/95 backdrop-blur-sm",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 h-14 flex items-center justify-between gap-4">

          {/* Logo + name */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Image
              src="/Trails logo.PNG"
              alt="Trails"
              width={120}
              height={32}
              className="h-6 sm:h-7 w-auto object-contain opacity-85 shrink-0"
              priority
            />
            <span className="font-display text-[11px] sm:text-sm text-foreground/40 leading-none truncate">
              Trails of Transformation
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/45 hover:text-foreground/85 font-sans text-[0.7rem] tracking-[0.15em] uppercase whitespace-nowrap px-3 py-1.5 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Apply Now always visible + hamburger on mobile */}
          <div className="flex items-center gap-3">
            <a
              href="#apply"
              onClick={close}
              className="shrink-0 bg-[#c4813d] hover:bg-[#d4924e] text-[#0d0905] font-sans font-semibold text-[0.7rem] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-150"
            >
              Apply Now
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0"
            >
              <span
                className={[
                  "block w-5 h-px bg-foreground/55 transition-all duration-200 origin-center",
                  menuOpen ? "rotate-45 translate-y-[6px]" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-5 h-px bg-foreground/55 transition-all duration-200",
                  menuOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-5 h-px bg-foreground/55 transition-all duration-200 origin-center",
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : "",
                ].join(" ")}
              />
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        <div
          className={[
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            "border-t border-border bg-[#0d0a07]",
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="flex flex-col px-6 py-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-foreground/50 hover:text-foreground/85 font-sans text-[0.75rem] tracking-[0.18em] uppercase py-3.5 border-b border-border/50 last:border-0 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop — tapping outside closes the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}
    </>
  );
}
