import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum – Friseursalon Starschnitt Chemnitz",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliche Angaben" title="Impressum" />

      <section className="py-16 md:py-24 bg-brand-bg px-6">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="space-y-10 font-sans font-light text-brand-text">
            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Friseursalon Starschnitt<br />
                Inhaberin: Cindy Emmrich<br />
                Annaberger Straße 179<br />
                09120 Chemnitz
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">Kontakt</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Filiale Altchemnitz:<br />
                Telefon: 0371 52 11 200<br />
                <br />
                Filiale Kaßberg:<br />
                Kanzlerstraße 57, 09112 Chemnitz<br />
                Telefon: 0371 300 091
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">Berufsrechtliche Regelungen</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Berufsbezeichnung: Friseurmeisterin (erworben in Deutschland)<br />
                Zuständige Kammer: Handwerkskammer Chemnitz<br />
                Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">EU-Streitschlichtung</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-bronze hover:text-brand-text underline underline-offset-2"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">Haftung für Inhalte</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">Haftung für Links</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-light text-brand-text mb-3">Urheberrecht</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
