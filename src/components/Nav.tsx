"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Oferta", href: "#scope" },
  { label: "Jak pracuję", href: "#process" },
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
            ? "bg-paper/90 shadow-[3px_3px_0_0_#241c15] border-2 border-ink backdrop-blur-xl"
            : "bg-paper/60 border-2 border-ink/15 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center gap-1">
          <a
            href="#"
            className="font-display font-bold text-ink px-4 py-2 text-sm tracking-tight"
          >
            PS
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors px-3 py-2 rounded-full hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-yellow text-ink text-sm font-semibold px-5 py-2 rounded-full border-2 border-ink hover:bg-yellow-dark transition-colors ml-1"
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
        <div className="fixed inset-0 z-40 bg-paper/97 backdrop-blur-2xl">
          <div className="h-full flex flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-display font-semibold text-ink hover:text-yellow-dark transition-colors"
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
              className="mt-4 bg-yellow text-ink text-lg font-semibold px-8 py-3.5 rounded-full border-2 border-ink hover:bg-yellow-dark transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </>
  );
}
