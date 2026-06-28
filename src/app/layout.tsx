import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adresse-privee.fr'),
  title: {
    default: "Adresse Privée Immobilier — Biens d'Exception en Vente Exclusive",
    template: "%s | Adresse Privée Immobilier",
  },
  description:
    "Sélection exclusive de propriétés d'exception à vendre en France — loft 147 m² à Les Andelys (27700), Normandie et appartement 2 pièces à Paris 15e (75015). Adresse Privée Immobilier.",
  openGraph: {
    siteName: 'Adresse Privée Immobilier',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-dm">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
