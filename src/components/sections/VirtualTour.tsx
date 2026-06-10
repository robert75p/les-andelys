'use client'

import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'

export default function VirtualTour() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#1A1815] py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center">
        <FadeInView>
          <SectionLabel>{t.virtualTour.label}</SectionLabel>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="font-cormorant italic text-[clamp(2rem,5vw,4rem)] text-white leading-[1.1] max-w-3xl mx-auto mb-10">
            &ldquo;{t.virtualTour.quote}&rdquo;
          </h2>
        </FadeInView>
        <FadeInView delay={0.2}>
          <a
            href="#contact"
            className="inline-block font-dm text-sm px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-[#1A1815] transition-all duration-300"
          >
            {t.virtualTour.cta}
          </a>
        </FadeInView>
      </div>
    </section>
  )
}
