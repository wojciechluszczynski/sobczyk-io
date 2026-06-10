"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Oferta", href: "#scope" },
  { label: "Proces", href: "#process" },
  { label: "Cennik", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-2 py-2 ${
          scrolled
            ? "bg-white/80 shadow-lg shadow-dark/5 border border-line/60 backdrop-blur-xl"
            : "bg-white/50 border border-line/30 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center gap-1">
          <a
            href="#"
            className="font-display font-bold text-dark px-4 py-2 text-sm tracking-tight"
          >
            PS
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-dark transition-colors px-3 py-2 rounded-full hover:bg-dark/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-dark transition-colors ml-1"
          >
            Kontakt
          </a>

          <button
            className="md:hidden p-2 ml-1 rounded-full hover:bg-dark/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-5 bg-dark rounded-full transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-dark rounded-full transition-all duration-300 ${
                  open ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-dark rounded-full transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl">
          <div className="h-full flex flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-display font-semibold text-dark hover:text-accent transition-colors"
                style={{
                  animationDelay: `${i * 75}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent text-white text-lg font-medium px-8 py-3.5 rounded-full hover:bg-accent-dark transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </>
  );
}
