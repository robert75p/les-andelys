import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Adresse Privée Immobilier — Nos Propriétés',
  description:
    'Adresse Privée Immobilier — deux propriétés d\'exception : un loft en Normandie et un appartement au cœur du 15e arrondissement de Paris.',
}

const properties = [
  {
    slug: 'les-andelys',
    name: 'Le Loft des Andelys',
    location: 'Les Andelys, Normandie (27700)',
    price: '€425 000',
    size: '147 m²',
    rooms: '2/3',
    roomsLabel: 'chambres',
    image: '/pictures/house/loft-1.jfif',
    tags: ['Poutres apparentes', 'Plafonds 6 m', 'Cour privée'],
    description:
      'Loft exceptionnel au cœur de la Normandie médiévale — poutres en chêne massif, plafonds voûtés à 6 m et lumière naturelle abondante.',
  },
  {
    slug: 'paris-15e',
    name: 'Appartement Paris 15e',
    location: '18 Rue Yvart, 75015 Paris',
    price: '€445 000',
    size: '38 m²',
    rooms: '2',
    roomsLabel: 'pièces',
    image: '/pictures/Paris-15e/living-1.jpeg',
    tags: ['Conciergerie', 'Cave aménagée', 'Cour intérieure'],
    description:
      'Appartement 2 pièces lumineux et entièrement rénové au cœur du 15e arrondissement, ouvrant sur une cour intérieure calme.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF8F4]">
        {/* Header */}
        <div className="pt-32 pb-16 text-center px-6">
          <p className="font-dm text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">
            Adresse Privée Immobilier
          </p>
          <h1 className="font-cormorant italic text-[clamp(2.5rem,5vw,4.5rem)] text-stone-900 leading-tight">
            Nos Propriétés
          </h1>
          <p className="font-dm text-sm text-stone-500 mt-4 max-w-md mx-auto leading-relaxed">
            Deux biens d&apos;exception sélectionnés avec soin, en vente en exclusivité.
          </p>
        </div>

        {/* Property grid */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {properties.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group block">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Price badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-sm px-3 py-1.5 shadow-sm">
                      <span className="font-cormorant text-lg text-[#C4A882] font-medium">{p.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h2 className="font-cormorant italic text-2xl text-stone-900 mb-2">{p.name}</h2>

                    <div className="flex items-center gap-1.5 text-stone-400 mb-4">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-dm text-xs">{p.location}</span>
                    </div>

                    <p className="font-dm text-sm text-stone-500 leading-relaxed mb-5">
                      {p.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 border-t border-stone-100 pt-5 mb-5">
                      <div>
                        <p className="font-cormorant text-2xl text-stone-900">{p.size}</p>
                        <p className="font-dm text-xs uppercase tracking-widest text-stone-400 mt-0.5">
                          Surface
                        </p>
                      </div>
                      <div className="w-px h-10 bg-stone-200" />
                      <div>
                        <p className="font-cormorant text-2xl text-stone-900">{p.rooms}</p>
                        <p className="font-dm text-xs uppercase tracking-widest text-stone-400 mt-0.5">
                          {p.roomsLabel}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-dm text-xs bg-[#F0ECE4] text-stone-600 px-3 py-1 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-end gap-2 text-[#C4A882]">
                      <span className="font-dm text-sm">Découvrir</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
