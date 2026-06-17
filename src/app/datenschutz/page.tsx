import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Friseursalon Starschnitt Chemnitz",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Datenschutz" title="Datenschutzerklärung" />

      <section className="py-16 md:py-24 bg-brand-bg px-6">
        <div className="max-w-3xl mx-auto space-y-10 font-sans font-light text-brand-text">
          <div>
            <h2 className="font-display text-2xl font-light mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-sm font-sans font-medium text-brand-text mb-2">Allgemeine Hinweise</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
              sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Friseursalon Starschnitt<br />
              Inhaberin: Cindy Emmrich<br />
              Annaberger Straße 179<br />
              09120 Chemnitz<br />
              Telefon: 0371 52 11 200
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-sm font-sans font-medium text-brand-text mb-2">Cookies</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies sind
              erforderlich, damit die Website ordnungsgemäß funktioniert. Sie enthalten keine
              personenbezogenen Daten und werden nicht für Werbezwecke genutzt. Wir speichern lediglich
              Ihre Cookie-Einwilligung im lokalen Speicher Ihres Browsers (localStorage).
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light mb-3">4. Server-Log-Dateien</h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden
              Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light mb-3">5. Ihre Rechte</h2>
            <p className="text-brand-muted text-sm leading-relaxed mb-3">
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="text-brand-muted text-sm leading-relaxed space-y-1 list-none pl-4 border-l border-brand-bronze/20">
              <li>Unentgeltliche Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung oder Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
            <p className="text-brand-muted text-sm leading-relaxed mt-3">
              Außerdem steht Ihnen das Recht zu, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light mb-3">6. Google Maps</h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Auf unserer Website verlinken wir auf Google Maps. Wenn Sie den Link anklicken und die
              Google-Maps-Seite besuchen, gelten die Datenschutzbestimmungen von Google. Weitere
              Informationen finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-bronze hover:text-brand-text underline underline-offset-2"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </div>

          <p className="text-brand-taupe text-xs font-sans">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}
