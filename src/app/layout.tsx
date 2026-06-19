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
  title: "Le Loft des Andelys — Propriété d'Exception en Normandie",
  description:
    "Loft de caractère à vendre à Les Andelys (27700), Normandie. 130 m², 2/3 chambres, poutres apparentes, plafonds voûtés. €425 000.",
  openGraph: {
    title: "Le Loft des Andelys",
    description: "Loft exceptionnel en Normandie — 130 m² · €425 000",
    images: ["/pictures/house/Loft-1.png"],
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
