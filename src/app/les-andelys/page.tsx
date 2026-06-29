import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PropertyOverview from '@/components/sections/PropertyOverview'
import Gallery from '@/components/sections/Gallery'
import LayoutIdeas from '@/components/sections/LayoutIdeas'
import Features from '@/components/sections/Features'
import Location from '@/components/sections/Location'
import VirtualTour from '@/components/sections/VirtualTour'
import Contact from '@/components/sections/Contact'
import type { PropertyContactData } from '@/lib/propertyTypes'

export const metadata: Metadata = {
  title: 'Loft à Vendre Les Andelys (27700) — 147 m², Normandie',
  description:
    'Loft atypique 147 m² à vendre à Les Andelys (27700), Normandie. Poutres chêne apparentes, plafonds voûtés 6 m, 2/3 chambres, parking sécurisé. À 2 min du Château Gaillard et de la Seine. €450 000.',
  openGraph: {
    title: "Le Loft des Andelys — Loft d'Exception, Normandie",
    description: 'Loft 147 m² à vendre · Château Gaillard · bords de Seine · Les Andelys 27700 · €450 000',
    images: ['/pictures/house/Loft-1.png'],
    type: 'website',
    url: 'https://adresse-privee.fr/les-andelys/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: "Le Loft des Andelys — Loft d'Exception à Vendre, Les Andelys (27700)",
  description:
    "Loft atypique de 147 m² à vendre à Les Andelys, Normandie (27700). Poutres en chêne apparentes, plafonds voûtés à 6 m, 2/3 chambres, parking sécurisé et cour privée. À deux minutes du Château Gaillard de Richard Cœur de Lion et des rives de la Seine. €450 000.",
  url: 'https://adresse-privee.fr/les-andelys/',
  floorSize: { '@type': 'QuantitativeValue', value: 147, unitCode: 'MTK' },
  numberOfRooms: 3,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8 Rue Georges Clémenceau',
    addressLocality: 'Les Andelys',
    postalCode: '27700',
    addressRegion: 'Normandie',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 49.2458, longitude: 1.4187 },
  image: ['https://adresse-privee.fr/pictures/house/loft-1.jfif'],
  offers: {
    '@type': 'Offer',
    price: '450000',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Adresse Privée Immobilier',
      url: 'https://adresse-privee.fr',
    },
  },
}

const contactData: PropertyContactData = {
  formEndpoint: 'https://formspree.io/f/xaqgjpod',
  propertyLabel: 'Le Loft des Andelys — 8 Rue Georges Clémenceau, 27700 Les Andelys',
}

export default function LesAndelysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <PropertyOverview />
        <Gallery />
        <LayoutIdeas />
        <Features />
        <Location />
        <VirtualTour />
        <Contact data={contactData} />
      </main>
      <Footer />
    </>
  )
}
