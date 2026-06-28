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

const contactData: PropertyContactData = {
  formEndpoint: 'https://formspree.io/f/xaqgjpod',
  propertyLabel: 'Le Loft des Andelys — 8 Rue Georges Clémenceau, 27700 Les Andelys',
}

export const metadata: Metadata = {
  title: 'Le Loft des Andelys — Propriété d\'Exception en Normandie',
  description:
    'Loft de caractère à vendre à Les Andelys (27700), Normandie. 147 m², 2/3 chambres, poutres apparentes, plafonds voûtés. €425 000.',
  openGraph: {
    title: 'Le Loft des Andelys',
    description: 'Loft exceptionnel en Normandie — 147 m² · €425 000',
    images: ['/pictures/house/Loft-1.png'],
  },
}

export default function LesAndelysPage() {
  return (
    <>
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
