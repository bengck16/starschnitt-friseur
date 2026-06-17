"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "starschnitt-cookie-consent";

const defaultPrefs: CookiePreferences = {
  necessary: true,
  statistics: false,
  marketing: false,
};

const categories = [
  {
    key: "necessary" as const,
    label: "Notwendige Cookies",
    description:
      "Diese Cookies sind für den Betrieb der Website unerlässlich und können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.",
    alwaysOn: true,
  },
  {
    key: "statistics" as const,
    label: "Statistik-Cookies",
    description:
      "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym erfassen und auswerten.",
    alwaysOn: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing-Cookies",
    description:
      "Diese Cookies werden verwendet, um Besuchern relevante Werbeanzeigen und Marketingkampagnen anzuzeigen.",
    alwaysOn: false,
  },
];

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(defaultPrefs);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setOpen(true);
    }

    const handler = () => setOpen(true);
    window.addEventListener("openCookieSettings", handler);
    return () => window.removeEventListener("openCookieSettings", handler);
  }, []);

  const save = (accepted: CookiePreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...accepted, timestamp: new Date().toISOString() })
    );
    setOpen(false);
  };

  const acceptAll = () =>
    save({ necessary: true, statistics: true, marketing: true });

  const declineAll = () =>
    save({ necessary: true, statistics: false, marketing: false });

  const saveSelection = () => save(prefs);

  const toggle = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-dark/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie-Einstellungen"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:w-full"
          >
            <div className="bg-brand-cream border border-brand-surface-2 shadow-2xl mx-0 md:mx-6">
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-brand-surface-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase font-sans font-light mb-1">
                      Datenschutz
                    </p>
                    <h2 className="font-display text-2xl text-brand-text font-light">
                      Cookie-Einstellungen
                    </h2>
                  </div>
                  <div className="w-8 h-px bg-brand-bronze mt-5 shrink-0" />
                </div>
                <p className="mt-3 text-brand-muted font-sans text-sm font-light leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
                  unserer Website zu bieten. Einige Cookies sind technisch
                  notwendig, andere helfen uns, die Website zu verbessern.{" "}
                  <Link
                    href="/datenschutz"
                    className="text-brand-bronze underline underline-offset-2 hover:text-brand-text transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>

              {/* Categories */}
              <div className="px-6 py-4 space-y-3 max-h-64 overflow-y-auto">
                {categories.map((cat) => (
                  <div
                    key={cat.key}
                    className="flex items-start gap-4 py-3 border-b border-brand-surface last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-sans text-sm font-medium text-brand-text">
                          {cat.label}
                        </span>
                        {cat.alwaysOn && (
                          <span className="text-xs font-sans text-brand-bronze tracking-wide">
                            · Immer aktiv
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-xs font-light text-brand-muted leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    {/* Toggle */}
                    <button
                      onClick={() => toggle(cat.key)}
                      disabled={cat.alwaysOn}
                      aria-checked={prefs[cat.key]}
                      role="switch"
                      aria-label={cat.label}
                      className={`shrink-0 mt-0.5 relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none ${
                        prefs[cat.key]
                          ? "bg-brand-bronze"
                          : "bg-brand-surface-2"
                      } ${cat.alwaysOn ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-brand-cream shadow-sm transition-transform duration-300 ${
                          prefs[cat.key] ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-brand-surface-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={declineAll}
                  className="flex-1 px-4 py-2.5 text-xs tracking-widest uppercase font-sans font-light text-brand-muted border border-brand-surface-2 hover:border-brand-taupe hover:text-brand-text transition-all duration-300"
                >
                  Alle ablehnen
                </button>
                <button
                  onClick={saveSelection}
                  className="flex-1 px-4 py-2.5 text-xs tracking-widest uppercase font-sans font-light text-brand-bronze border border-brand-bronze hover:bg-brand-surface transition-all duration-300"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 text-xs tracking-widest uppercase font-sans font-light bg-brand-bronze text-brand-cream hover:bg-brand-bronze-hover transition-colors duration-300"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
