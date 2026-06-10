'use client'

import { Columns2, Sun, UtensilsCrossed, Flower2, Thermometer, Wifi } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'

const icons = [Columns2, Sun, UtensilsCrossed, Flower2, Thermometer, Wifi]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <FadeInView className="mb-16">
          <SectionLabel>{t.features.label}</SectionLabel>
          <h2 className="font-cormorant italic text-[clamp(2rem,4vw,3.5rem)] text-stone-900 max-w-xl leading-[1.1]">
            {t.features.title}
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <FadeInView key={item.title} delay={i * 0.08}>
                <div className="bg-[#F0ECE4] border border-stone-200/60 rounded-sm p-7 h-full hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white mb-5">
                    <Icon className="w-5 h-5 text-[#C4A882]" />
                  </div>
                  <h3 className="font-cormorant text-xl text-stone-900 mb-2">{item.title}</h3>
                  <p className="font-dm text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
