"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "✂",
    title: "Damen & Herren",
    desc: "Klassische und moderne Haarschnitte – individuell abgestimmt auf Ihren Typ.",
  },
  {
    icon: "✦",
    title: "Hochsteckfrisuren & Make-up",
    desc: "Für besondere Anlässe: festliche Frisuren und professionelles Make-up.",
  },
  {
    icon: "◈",
    title: "Haarverlängerung",
    desc: "Natürliche Haarverlängerungen und -verdichtungen für mehr Volumen.",
  },
  {
    icon: "◇",
    title: "Wimpernverlängerung",
    desc: "Professionelle Wimpernverlängerung und -verdichtung für einen ausdrucksstarken Blick.",
  },
  {
    icon: "◉",
    title: "Kosmetik",
    desc: "Bio-Demeter zertifizierte Kosmetikbehandlungen – natürlich und schonend für Ihre Haut.",
  },
  {
    icon: "◈",
    title: "Fußpflege",
    desc: "Entspannende und pflegende Fußpflege für Ihr Wohlbefinden.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-bg px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-brand-bronze text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
            Was wir bieten
          </p>
          <h2 className="font-display text-brand-text font-light" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Unser Angebot
          </h2>
          <div className="mt-4 h-px w-16 bg-brand-bronze" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-surface-2"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="bg-brand-bg p-8 md:p-10 group hover:bg-brand-surface transition-colors duration-300"
            >
              <span className="text-brand-bronze text-2xl block mb-5">{s.icon}</span>
              <h3 className="font-display text-xl md:text-2xl text-brand-text font-light mb-3">
                {s.title}
              </h3>
              <p className="text-brand-muted font-sans font-light text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/angebot"
            className="inline-block text-sm tracking-widest uppercase font-sans font-light text-brand-bronze border-b border-brand-bronze pb-px hover:text-brand-text hover:border-brand-text transition-colors duration-300"
          >
            Alle Leistungen ansehen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
