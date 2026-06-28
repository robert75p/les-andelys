import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Paris15eContent from '@/components/sections/Paris15eContent'

export const metadata: Metadata = {
  title: 'Appartement à Vendre Paris 15e (75015) — 42 m², 2 Pièces',
  description:
    'Appartement 2 pièces 42 m² à vendre Paris 15e (75015), 18 Rue Yvart. Entièrement rénové, séjour sur cour intérieure calme, gardien, cave privative. Métro Convention / Vaugirard. €500 000.',
  openGraph: {
    title: 'Appartement Paris 15e — 18 Rue Yvart, 2 pièces, 42 m²',
    description: 'Appartement 42 m² · Paris 15e · Métro Convention/Vaugirard · Cour intérieure calme · €500 000',
    images: ['/pictures/Paris-15e/living-1.jpeg'],
    type: 'website',
    url: 'https://adresse-privee.fr/paris-15e/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Appartement 2 pièces 42 m² à Vendre — Paris 15e, 18 Rue Yvart (75015)',
  description:
    'Appartement 2 pièces de 42 m² à vendre au 18 Rue Yvart, Paris 15e arrondissement (75015). Entièrement rénové, séjour ouvrant sur cour intérieure calme, gardien, cave privative. À proximité de la Rue du Commerce, du centre Beaugrenelle et des métros Convention / Vaugirard. €500 000.',
  url: 'https://adresse-privee.fr/paris-15e/',
  floorSize: { '@type': 'QuantitativeValue', value: 42, unitCode: 'MTK' },
  numberOfRooms: 2,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Rue Yvart',
    addressLocality: 'Paris',
    postalCode: '75015',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.8368, longitude: 2.3025 },
  image: ['https://adresse-privee.fr/pictures/Paris-15e/living-1.jpeg'],
  offers: {
    '@type': 'Offer',
    price: '500000',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Adresse Privée Immobilier',
      url: 'https://adresse-privee.fr',
    },
  },
}

export default function Paris15ePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Paris15eContent />
      </main>
      <Footer />
    </>
  )
}
