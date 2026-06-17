"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Angebot", href: "/angebot" },
  { label: "Team", href: "/team" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-brand-cream/95 backdrop-blur-sm shadow-sm border-b border-brand-surface"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-xl tracking-[0.2em] uppercase font-light transition-colors duration-300 ${
            transparent ? "text-brand-cream" : "text-brand-text"
          }`}
        >
          Starschnitt
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm tracking-widest uppercase font-light transition-colors duration-300 relative group ${
                  transparent ? "text-brand-cream/80 hover:text-brand-cream" : "text-brand-muted hover:text-brand-text"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                    transparent ? "bg-brand-cream" : "bg-brand-bronze"
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/kontakt"
              className={`text-sm tracking-widest uppercase font-light px-5 py-2 border transition-all duration-300 ${
                transparent
                  ? "border-brand-cream/60 text-brand-cream hover:bg-brand-cream hover:text-brand-dark"
                  : "border-brand-bronze text-brand-bronze hover:bg-brand-bronze hover:text-brand-cream"
              }`}
            >
              Termin
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          className={`md:hidden flex flex-col gap-[5px] p-2 transition-colors ${
            transparent ? "text-brand-cream" : "text-brand-text"
          }`}
        >
          <span
            className={`block h-px w-6 transition-all duration-300 origin-center ${
              transparent ? "bg-brand-cream" : "bg-brand-text"
            } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              transparent ? "bg-brand-cream" : "bg-brand-text"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 origin-center ${
              transparent ? "bg-brand-cream" : "bg-brand-text"
            } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-brand-cream border-t border-brand-surface`}
      >
        <ul className="flex flex-col py-6 px-6 gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors block"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/kontakt"
              className="inline-block text-sm tracking-widest uppercase px-5 py-2 border border-brand-bronze text-brand-bronze hover:bg-brand-bronze hover:text-brand-cream transition-all duration-300"
            >
              Termin vereinbaren
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
