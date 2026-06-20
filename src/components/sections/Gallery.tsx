'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageLightbox from '@/components/ui/ImageLightbox'
import type { PropertyGalleryData } from '@/lib/propertyTypes'

const defaultImages = [
  { src: '/pictures/house/Loft-1.png',   alt: 'Loft des Andelys — salon avec poutres et verrières' },
  { src: '/pictures/house/Loft-2.jfif',  alt: 'Loft des Andelys — espace de vie lumineux' },
  { src: '/pictures/house/Loft-3.jfif',  alt: 'Loft des Andelys — cuisine ouverte' },
  { src: '/pictures/house/Loft-4.jfif',  alt: 'Loft des Andelys — chambre principale' },
  { src: '/pictures/house/Loft-5.jfif',  alt: 'Loft des Andelys — salle de bain' },
  { src: '/pictures/house/Loft-6.jfif',  alt: 'Loft des Andelys — détails architecturaux' },
  { src: '/pictures/house/Loft-7.jfif',  alt: 'Loft des Andelys — espace repas' },
  { src: '/pictures/house/Loft-8.jfif',  alt: 'Loft des Andelys — bureau et mezzanine' },
  { src: '/pictures/house/Loft-9.jfif',  alt: 'Loft des Andelys — jardin privé' },
  { src: '/pictures/house/Loft-10.jfif', alt: 'Loft des Andelys — façade et entrée' },
]

function GalleryImage({
  src, alt, className, onClick,
}: {
  src: string; alt: string; className?: string; onClick: () => void
}) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

export default function Gallery({ data }: { data?: PropertyGalleryData }) {
  const { t } = useLanguage()
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const images = data?.images ?? defaultImages
  const quote = data?.quote ?? t.gallery.quote

  const open = (i: number) => setLightboxIdx(i)
  const close = () => setLightboxIdx(null)
  const prev = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % images.length))

  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <FadeInView className="text-center mb-16">
          <SectionLabel>{t.gallery.label}</SectionLabel>
          <h2 className="font-cormorant italic text-[clamp(2.5rem,5vw,4.5rem)] text-stone-900">
            {t.gallery.title}
          </h2>
        </FadeInView>

        {/* Row 1 — full-width hero image */}
        <FadeInView>
          <div className="relative w-full h-[60vh] mb-3 overflow-hidden">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-700"
              sizes="100vw"
              onClick={() => open(0)}
            />
          </div>
        </FadeInView>

        {/* Row 2 — two equal squares */}
        <FadeInView delay={0.1}>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {images.slice(1, 3).map((img, i) => (
              <GalleryImage key={img.src} {...img} className="aspect-square" onClick={() => open(i + 1)} />
            ))}
          </div>
        </FadeInView>

        {/* Row 3 — 3-column asymmetric */}
        <FadeInView delay={0.15}>
          <div className="grid grid-cols-3 gap-3 mb-3" style={{ gridTemplateRows: '360px' }}>
            <GalleryImage {...images[3]} className="aspect-auto" onClick={() => open(3)} />
            <GalleryImage {...images[4]} className="row-span-1" onClick={() => open(4)} />
            <GalleryImage {...images[5]} className="aspect-auto" onClick={() => open(5)} />
          </div>
        </FadeInView>

        {/* Row 4 — 2 images + quote block */}
        <FadeInView delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
            <GalleryImage {...images[6]} className="aspect-[4/3]" onClick={() => open(6)} />
            <GalleryImage {...images[7]} className="aspect-[4/3]" onClick={() => open(7)} />
            <div className="bg-[#F0ECE4] flex items-center justify-center p-8 md:p-10 aspect-[4/3]">
              <p className="font-cormorant italic text-xl md:text-2xl text-stone-700 text-center leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Remaining images */}
        {images.length > 8 && (
          <FadeInView delay={0.1}>
            <div className="grid grid-cols-2 gap-3 mb-12">
              {images.slice(8).map((img, i) => (
                <GalleryImage key={img.src} {...img} className="aspect-[4/3]" onClick={() => open(i + 8)} />
              ))}
            </div>
          </FadeInView>
        )}

        {/* View all CTA */}
        <FadeInView className="text-center">
          <button
            onClick={() => open(0)}
            className="font-dm text-sm px-8 py-3 border border-stone-800 text-stone-800 rounded-full hover:bg-stone-800 hover:text-white transition-all duration-300"
          >
            {t.gallery.viewAll}
          </button>
        </FadeInView>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <ImageLightbox
            images={images}
            index={lightboxIdx}
            onClose={close}
            onPrev={prev}
            onNext={next}
            labels={{ close: t.gallery.close, prev: t.gallery.prev, next: t.gallery.next }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
