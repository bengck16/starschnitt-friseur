"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, dark }: PageHeroProps) {
  const bg = dark ? "bg-brand-dark" : "bg-brand-surface";
  const textMain = dark ? "text-brand-cream" : "text-brand-text";
  const textSub = dark ? "text-brand-taupe" : "text-brand-muted";
  const textEye = "text-brand-bronze";

  return (
    <section className={`pt-32 pb-16 md:pt-40 md:pb-24 px-6 ${bg}`}>
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-xs tracking-[0.4em] uppercase font-sans font-light mb-4 ${textEye}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-display font-light ${textMain}`}
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 mb-6 h-px w-16 bg-brand-bronze origin-left"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`max-w-xl font-sans font-light text-base md:text-lg leading-relaxed ${textSub}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
