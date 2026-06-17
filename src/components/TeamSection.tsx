"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  { name: "Cindy Emmrich", role: "Inhaberin · Friseurmeisterin" },
  { name: "Susan Patzelt", role: "Friseurmeisterin · Kosmetikerin" },
  { name: "Andrea Springer", role: "Friseurmeisterin" },
  { name: "Nadine Eckardt", role: "Friseurin · Fußpflegerin" },
  { name: "Anja Helfer", role: "Friseurin · Kosmetikerin · Nageldesignerin" },
  { name: "Steven Bengisch", role: "Friseur (Damen & Herren) · Barber" },
  { name: "Lisa Hiekel", role: "Friseurin · Fußpflegerin · Kosmetikerin" },
  { name: "Ronja Donner", role: "Auszubildende" },
  { name: "Jasmin Thurm", role: "Auszubildende" },
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  return (
    <span className="font-display text-2xl font-light text-brand-bronze">
      {parts[0][0]}{parts[1]?.[0]}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-surface px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-brand-bronze text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
            Menschen hinter dem Salon
          </p>
          <h2
            className="font-display text-brand-text font-light"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Unser Team
          </h2>
          <div className="mt-4 h-px w-16 bg-brand-bronze" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-brand-surface-2"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-brand-surface p-6 md:p-8 group hover:bg-brand-bg transition-colors duration-300 flex flex-col"
            >
              {/* Avatar circle */}
              <div className="w-14 h-14 rounded-full border border-brand-bronze/30 flex items-center justify-center mb-5 group-hover:border-brand-bronze transition-colors duration-300">
                <Initials name={member.name} />
              </div>
              <p className="font-display text-base md:text-lg text-brand-text font-light leading-snug mb-1">
                {member.name}
              </p>
              <p className="text-brand-muted font-sans text-xs font-light leading-relaxed">
                {member.role}
              </p>
            </motion.div>
          ))}
          {/* Filler cell for grid alignment */}
          <div className="bg-brand-surface hidden lg:block" />
          <div className="bg-brand-surface hidden lg:block" />
          <div className="bg-brand-surface hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/team"
            className="inline-block text-sm tracking-widest uppercase font-sans font-light text-brand-bronze border-b border-brand-bronze pb-px hover:text-brand-text hover:border-brand-text transition-colors duration-300"
          >
            Team kennenlernen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
