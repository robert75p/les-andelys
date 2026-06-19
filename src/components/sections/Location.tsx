'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import clsx from 'clsx'

type TabKey = 'restaurants' | 'marche' | 'culture' | 'shopping' | 'quartier'

const tabImages: Record<TabKey, { src: string; caption: string }[]> = {
  restaurants: [
    { src: '/pictures/Les-Andelys/resto.avif', caption: 'Le Relais de la Seine' },
    { src: '/pictures/Les-Andelys/resto2.jpg', caption: 'Bistrot du Château' },
    { src: '/pictures/Les-Andelys/resto3.jpg', caption: 'La Table Normande' },
    { src: '/pictures/Les-Andelys/resto4.jpg', caption: 'Brasserie des Andelys' },
    { src: '/pictures/Les-Andelys/resto5.jpg', caption: 'Café de la Mairie' },
    { src: '/pictures/Les-Andelys/brasserie.jpg', caption: 'La Grande Brasserie' },
    { src: '/pictures/Les-Andelys/brasserie2.jpg', caption: 'Terrasse du Château' },
    { src: '/pictures/Les-Andelys/brasserie3.jpg', caption: 'Le Normand' },
    { src: '/pictures/Les-Andelys/brasserie4.jpg', caption: 'Brasserie du Vieux Port' },
  ],
  marche: [
    { src: '/pictures/Les-Andelys/Marche.jpg', caption: 'Marché hebdomadaire' },
    { src: '/pictures/Aa/marche-1.jpeg', caption: 'Place du marché en plein air' },
    { src: '/pictures/Aa/marche-2.jpeg', caption: 'Étals de légumes frais' },
    { src: '/pictures/Les-Andelys/marche2.jpg', caption: 'Producteurs locaux' },
    { src: '/pictures/Les-Andelys/marche3.jpg', caption: 'Fromages normands' },
    { src: '/pictures/Les-Andelys/marche4.jpg', caption: 'Fleurs et légumes' },
  ],
  culture: [
    { src: '/pictures/Les-Andelys/chateau.jpg', caption: 'Château Gaillard — Richard Cœur de Lion' },
    { src: '/pictures/Aa/chateau.jfif', caption: 'Forteresse médiévale du XIIe siècle' },
    { src: '/pictures/Aa/chateau-2.jfif', caption: 'Les remparts sur la Seine' },
    { src: '/pictures/Aa/chateau-3.jfif', caption: 'Vestiges du donjon royal' },
    { src: '/pictures/Les-Andelys/musee.webp', caption: 'Musée Nicolas Poussin' },
    { src: '/pictures/Les-Andelys/musee2.webp', caption: 'Patrimoine normand' },
    { src: '/pictures/Les-Andelys/musee3.jpg', caption: 'Collections permanentes' },
    { src: '/pictures/Les-Andelys/musee4.jfif', caption: 'Expositions temporaires' },
    { src: '/pictures/Les-Andelys/musee5.jpg', caption: 'Art & Histoire' },
  ],
  shopping: [
    { src: '/pictures/Les-Andelys/boucher4.avif', caption: 'Boucherie artisanale' },
    { src: '/pictures/Les-Andelys/boucher3.webp', caption: 'Charcuterie du terroir' },
  ],
  quartier: [
    { src: '/pictures/Aa/riviere.jfif', caption: 'La Seine aux Andelys' },
    { src: '/pictures/Aa/eglise.jpeg', caption: 'Collégiale Notre-Dame des Andelys' },
    { src: '/pictures/Aa/mairie.jpeg', caption: 'Hôtel de Ville des Andelys' },
  ],
}

export default function Location() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabKey>('restaurants')
  const bannerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  const tabKeys: TabKey[] = ['restaurants', 'marche', 'culture', 'shopping', 'quartier']

  return (
    <section id="location" className="bg-white">
      {/* Cinematic banner with parallax */}
      <div ref={bannerRef} className="relative h-[40vh] overflow-hidden">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
          <Image
            src="/pictures/Les-Andelys/chateau.jpg"
            alt="Vue aérienne du Château Gaillard et de la Seine à Les Andelys"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-end pb-10 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto left-0 right-0">
          <p className="font-cormorant italic text-white text-2xl md:text-3xl opacity-90">
            Les Andelys, Normandie
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <FadeInView>
            <SectionLabel>{t.location.label}</SectionLabel>
            <h2 className="font-cormorant italic text-[clamp(2rem,4vw,3.5rem)] text-stone-900 leading-[1.1] mb-6">
              {t.location.title}
            </h2>
          </FadeInView>
          <FadeInView delay={0.1} className="flex items-center">
            <p className="font-dm text-stone-600 leading-relaxed text-sm md:text-base">
              {t.location.description}
            </p>
          </FadeInView>
        </div>

        {/* Tabs */}
        <FadeInView>
          <div className="flex gap-1 flex-wrap mb-8 border-b border-stone-200">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={clsx(
                  'font-dm text-sm px-5 py-3 transition-all duration-200 border-b-2 -mb-px',
                  activeTab === key
                    ? 'border-[#C4A882] text-[#C4A882]'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                )}
              >
                {t.location.tabs[key]}
              </button>
            ))}
          </div>
        </FadeInView>

        {/* Carousel */}
        <FadeInView>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {tabImages[activeTab].map((img) => (
              <div
                key={img.src}
                className="relative flex-none w-64 md:w-80 aspect-[3/4] rounded-sm overflow-hidden snap-start group"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-dm text-xs text-white/90 tracking-wide">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Map */}
        <FadeInView delay={0.2} className="mt-16">
          <div className="w-full h-80 rounded-sm overflow-hidden border border-stone-200">
            <iframe
              title={t.location.mapLabel}
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.378%2C49.217%2C1.458%2C49.277&amp;layer=mapnik&amp;marker=49.24694%2C1.41800"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="font-dm text-xs text-stone-400 mt-2 text-center tracking-wide">
            {t.location.mapLabel}
          </p>
        </FadeInView>
      </div>
    </section>
  )
}
