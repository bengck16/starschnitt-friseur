"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background photo */}
      <Image
        src="/images/hero.jpg"
        alt="Friseursalon Starschnitt"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,21,18,0.55) 0%, rgba(28,21,18,0.65) 100%)",
        }}
      />

      {/* Warm bronze tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(140,115,85,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-taupe text-xs tracking-[0.4em] uppercase mb-8 font-sans font-light"
        >
          Friseursalon · Chemnitz
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-brand-cream font-light leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", letterSpacing: "0.12em" }}
        >
          Starschnitt
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mb-8"
          style={{ height: "1px", width: "80px", background: "#8C7355" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-brand-taupe font-sans font-light text-base md:text-lg tracking-wide max-w-sm mx-auto mb-12"
        >
          Zwei Filialen. Ein Team. Ihr Wohlfühlsalon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:037152112000"
            className="group flex items-center gap-3 px-7 py-3 bg-brand-bronze text-brand-cream text-sm tracking-widest uppercase font-sans font-light hover:bg-brand-bronze-hover transition-colors duration-300"
          >
            <PhoneIcon />
            Altchemnitz
          </a>
          <a
            href="tel:0371300091"
            className="group flex items-center gap-3 px-7 py-3 border border-brand-taupe/40 text-brand-taupe text-sm tracking-widest uppercase font-sans font-light hover:border-brand-cream hover:text-brand-cream transition-colors duration-300"
          >
            <PhoneIcon />
            Kaßberg
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-taupe/50 text-xs tracking-[0.3em] uppercase font-sans">Mehr</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-brand-taupe/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
