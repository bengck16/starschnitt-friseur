import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Unser Team – Friseursalon Starschnitt Chemnitz",
  description:
    "Lernen Sie unser qualifiziertes Team kennen: Friseurmeisterinnen, Kosmetikerinnen, Barber und mehr.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Menschen hinter dem Salon"
        title="Unser Team"
        subtitle="Erfahren, herzlich und immer für Sie da – unser Team besteht aus qualifizierten Fachkräften, die Ihre Wünsche verwirklichen."
      />
      <TeamSection />
    </>
  );
}
