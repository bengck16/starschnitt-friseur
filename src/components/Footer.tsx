"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-bronze/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-brand-cream text-xl tracking-[0.2em] uppercase font-light mb-1">
              Starschnitt
            </p>
            <p className="text-brand-taupe font-sans text-xs font-light tracking-wide">
              Friseursalon · Chemnitz
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-6 md:gap-8">
              {[
                { label: "Angebot", href: "/angebot" },
                { label: "Team", href: "/team" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-taupe text-xs tracking-widest uppercase font-sans font-light hover:text-brand-cream transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-6 h-px bg-brand-bronze/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-brand-taupe/50 font-sans text-xs font-light">
            © {year} Friseursalon Starschnitt. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-6">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-brand-taupe/50 text-xs font-sans font-light hover:text-brand-taupe transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openCookieSettings"))}
                className="text-brand-taupe/50 text-xs font-sans font-light hover:text-brand-taupe transition-colors"
              >
                Cookie-Einstellungen
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
