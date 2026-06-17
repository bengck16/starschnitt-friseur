import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Unser Angebot – Friseursalon Starschnitt Chemnitz",
  description:
    "Entdecken Sie unser Leistungsangebot: Damen- und Herrenfrisuren, Kosmetik, Haarverlängerung, Wimpernverlängerung, Fußpflege und mehr.",
};

const extras = [
  {
    title: "Bio-Demeter Kosmetik",
    desc: "Wir setzen auf zertifizierte Bio-Demeter Kosmetikprodukte – für Ihre Haut und für die Natur.",
  },
  {
    title: "Individuelle Beratung",
    desc: "Jeder Mensch ist einzigartig. Wir nehmen uns Zeit für eine persönliche Beratung, die zu Ihnen passt.",
  },
  {
    title: "Barber-Service",
    desc: "Professionelle Herren- und Barber-Services für ein gepflegtes Erscheinungsbild.",
  },
];

export default function AngebotPage() {
  return (
    <>
      <PageHero
        eyebrow="Was wir bieten"
        title="Unser Angebot"
        subtitle="Von klassischen Schnitten bis zu besonderen Anlässen – wir begleiten Sie mit Expertise und Herzlichkeit."
      />
      <ServicesSection />

      {/* Extra info */}
      <section className="py-24 bg-brand-dark px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-bronze text-xs tracking-[0.4em] uppercase font-sans font-light mb-4">
            Unsere Besonderheiten
          </p>
          <h2
            className="font-display text-brand-cream font-light mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Mehr als nur ein Haarschnitt
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-brand-bronze/10">
            {extras.map((item) => (
              <div key={item.title} className="bg-brand-dark p-8 md:p-10">
                <div className="w-8 h-px bg-brand-bronze mb-6" />
                <h3 className="font-display text-xl text-brand-cream font-light mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-taupe font-sans text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-brand-taupe font-sans text-sm font-light">
            Preise auf Anfrage — kontaktieren Sie uns gerne telefonisch oder kommen Sie einfach vorbei.
          </p>
        </div>
      </section>
    </>
  );
}
