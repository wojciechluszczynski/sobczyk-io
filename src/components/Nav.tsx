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

  // Two states: over the dark hero (top) the pill is dark glass with light
  // text so it stays readable; once scrolled into the light sections it
  // becomes the light "sticker" pill with dark text.
  const onLight = scrolled || open;
  const barBg = onLight
    ? "bg-paper/95 shadow-[3px_3px_0_0_#241c15] border-2 border-ink backdrop-blur-xl"
    : "bg-ink/40 border border-paper/25 backdrop-blur-xl shadow-lg shadow-ink/20";
  const logoColor = onLight ? "text-ink" : "text-paper";
  const linkColor = onLight
    ? "text-muted hover:text-ink hover:bg-ink/5"
    : "text-paper/80 hover:text-paper hover:bg-paper/10";
  const barColor = onLight ? "bg-ink" : "bg-paper";

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-7 py-3 ${barBg}`}
      >
        <div className="flex items-center gap-4">
          <a
            href="#"
            className={`font-display font-bold px-3 py-2 text-lg tracking-tight transition-colors ${logoColor}`}
          >
            PS<span className="text-yellow">.</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors px-4 py-2.5 rounded-full ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-yellow text-ink text-[15px] font-semibold px-6 py-2.5 rounded-full border-2 border-ink hover:bg-yellow-dark transition-colors ml-2"
          >
            Kontakt
          </a>

          <button
            className={`md:hidden p-2.5 ml-1 rounded-full transition-colors ${
              onLight ? "hover:bg-ink/5" : "hover:bg-paper/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${barColor} ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${barColor} ${
                  open ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${barColor} ${
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
