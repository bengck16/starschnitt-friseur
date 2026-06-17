"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const branches = [
  {
    name: "Filiale Altchemnitz",
    address: "Annaberger Straße 179",
    city: "09120 Chemnitz",
    phone: "0371 52 11 200",
    phoneHref: "tel:037152112000",
    hours: [
      { day: "Mo – Fr", time: "09:00 – 18:00 Uhr" },
      { day: "Samstag", time: "08:00 – 12:00 Uhr" },
      { day: "So & Feiertage", time: "Geschlossen" },
    ],
    maps: "https://maps.google.com/?q=Annaberger+Straße+179+09120+Chemnitz",
  },
  {
    name: "Filiale Kaßberg",
    address: "Kanzlerstraße 57",
    city: "09112 Chemnitz",
    phone: "0371 300 091",
    phoneHref: "tel:0371300091",
    hours: [
      { day: "Mo – Fr", time: "09:00 – 19:00 Uhr" },
      { day: "Samstag", time: "09:00 – 13:00 Uhr" },
      { day: "So & Feiertage", time: "Geschlossen" },
    ],
    maps: "https://maps.google.com/?q=Kanzlerstraße+57+09112+Chemnitz",
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark px-6" id="kontakt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-brand-bronze text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
            Besuchen Sie uns
          </p>
          <h2
            className="font-display text-brand-cream font-light"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Unsere Filialen
          </h2>
          <div className="mt-4 h-px w-16 bg-brand-bronze" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-brand-bronze/20">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-brand-dark p-8 md:p-12"
            >
              <h3 className="font-display text-2xl md:text-3xl text-brand-cream font-light mb-8">
                {branch.name}
              </h3>

              {/* Address */}
              <div className="mb-8">
                <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase font-sans font-light mb-3">
                  Adresse
                </p>
                <p className="text-brand-taupe font-sans font-light text-base">
                  {branch.address}
                  <br />
                  {branch.city}
                </p>
                <a
                  href={branch.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs tracking-widest uppercase font-sans text-brand-bronze/70 hover:text-brand-bronze transition-colors border-b border-brand-bronze/30 hover:border-brand-bronze pb-px"
                >
                  In Google Maps öffnen →
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase font-sans font-light mb-3">
                  Telefon
                </p>
                <a
                  href={branch.phoneHref}
                  className="text-brand-cream font-sans font-light text-lg hover:text-brand-taupe transition-colors"
                >
                  {branch.phone}
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase font-sans font-light mb-3">
                  Öffnungszeiten
                </p>
                <ul className="space-y-2">
                  {branch.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm font-sans font-light">
                      <span className="text-brand-taupe">{h.day}</span>
                      <span className="text-brand-cream/80">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={branch.phoneHref}
                className="inline-flex items-center gap-3 mt-10 px-6 py-3 border border-brand-bronze/40 text-brand-bronze text-sm tracking-widest uppercase font-sans font-light hover:border-brand-bronze hover:bg-brand-bronze hover:text-brand-cream transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Jetzt anrufen
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
