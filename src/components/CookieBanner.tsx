"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark border-t border-brand-bronze/20 px-6 py-5 md:py-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <p className="text-brand-taupe font-sans text-sm font-light leading-relaxed max-w-2xl">
          Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung auf unserer Website zu bieten.{" "}
          <Link href="/datenschutz" className="text-brand-bronze hover:text-brand-cream underline underline-offset-2 transition-colors">
            Datenschutzerklärung
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-xs tracking-widest uppercase font-sans font-light text-brand-taupe border border-brand-taupe/30 hover:border-brand-taupe hover:text-brand-cream transition-all duration-300"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-xs tracking-widest uppercase font-sans font-light bg-brand-bronze text-brand-cream hover:bg-brand-bronze-hover transition-colors duration-300"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
