import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Paris15eContent from '@/components/sections/Paris15eContent'

export const metadata: Metadata = {
  title: 'Appartement Paris 15e — 2 pièces lumineux, 38 m²',
  description:
    'Appartement 2 pièces de 38 m² à vendre au 18 Rue Yvart, Paris 15e. Entièrement rénové, cour intérieure, gardien, cave. €445 000.',
  openGraph: {
    title: 'Appartement Paris 15e — 18 Rue Yvart',
    description: 'Appartement lumineux au cœur du 15e — 38 m² · €445 000',
    images: ['/pictures/Paris-15e/living-1.jpeg'],
  },
}

export default function Paris15ePage() {
  return (
    <>
      <Navbar />
      <main>
        <Paris15eContent />
      </main>
      <Footer />
    </>
  )
}
