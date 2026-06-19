'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'

export default function PropertyOverview() {
  const { t } = useLanguage()
  const s = t.overview.stats

  const stats = [
    { value: s.size, label: s.sizeLabel },
    { value: s.bedrooms, label: s.bedroomsLabel },
    { value: s.bathrooms, label: s.bathroomsLabel },
    { value: s.terrace, label: s.terraceLabel },
  ]

  return (
    <section id="property" className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Main two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: image + floating card */}
          <FadeInView direction="left">
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/pictures/house/Loft-2.jfif"
                  alt="Loft des Andelys — espace de vie principal"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white shadow-xl rounded-sm p-5 md:p-7 w-52">
                <p className="font-dm text-xs uppercase tracking-widest text-stone-400 mb-3">Le Loft</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-cormorant text-2xl text-stone-900">93 m²</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-stone-100 pt-2">
                    <span className="font-dm text-sm text-stone-600">2/3 {s.bedroomsLabel.toLowerCase()}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-stone-100 pt-2">
                    <span className="font-cormorant text-xl text-[#C4A882]">€485 000</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Right: editorial text */}
          <div className="lg:pt-12">
            <FadeInView delay={0.1}>
              <SectionLabel>{t.overview.label}</SectionLabel>
              <h2 className="font-cormorant italic text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] text-stone-900 mb-6">
                {t.overview.title}
              </h2>
              <p className="font-dm text-stone-600 leading-relaxed mb-8 text-sm md:text-base">
                {t.overview.description}
              </p>
            </FadeInView>

            <div className="flex flex-col gap-3">
              {t.overview.features.map((feat, i) => (
                <FadeInView key={i} delay={0.15 + i * 0.07}>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C4A882] mt-0.5 shrink-0" />
                    <span className="font-dm text-sm text-stone-600">{feat}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <FadeInView delay={0.2}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200 border border-stone-200 rounded-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <p className="font-cormorant text-3xl md:text-4xl text-stone-900 mb-1">{stat.value}</p>
                <p className="font-dm text-xs uppercase tracking-widest text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
