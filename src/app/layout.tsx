import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Friseursalon Starschnitt Chemnitz",
  description:
    "Ihr Friseursalon in Chemnitz – Starschnitt. Zwei Filialen in Altchemnitz und auf dem Kaßberg. Damen, Herren, Kosmetik, Fußpflege und mehr.",
  keywords:
    "Friseur Chemnitz, Friseursalon Chemnitz, Starschnitt, Haarschnitt, Kosmetik, Kaßberg, Altchemnitz",
  openGraph: {
    title: "Friseursalon Starschnitt Chemnitz",
    description: "Ihr Friseursalon in Chemnitz – zwei Filialen, ein Team.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
