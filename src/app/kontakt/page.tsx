import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt & Filialen – Friseursalon Starschnitt Chemnitz",
  description:
    "Finden Sie unsere zwei Filialen in Chemnitz: Altchemnitz (Annaberger Str. 179) und Kaßberg (Kanzlerstraße 57). Öffnungszeiten und Kontaktdaten.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="So erreichen Sie uns"
        title="Kontakt"
        subtitle="Zwei Filialen in Chemnitz – wir freuen uns auf Ihren Besuch oder Ihren Anruf."
        dark
      />
      <ContactSection />
    </>
  );
}
