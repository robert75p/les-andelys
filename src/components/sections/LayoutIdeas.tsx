'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'

const layoutImages = [
  '/pictures/house/layout-a.png',
  '/pictures/house/layout-3.jfif',
  '/pictures/house/layout-2b.png',
]

export default function LayoutIdeas() {
  const { t } = useLanguage()
  const l = t.layouts

  return (
    <section id="layouts" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <FadeInView className="mb-20">
          <SectionLabel>{l.label}</SectionLabel>
          <h2 className="font-cormorant italic text-[clamp(1.75rem,3vw,2.75rem)] text-stone-900 leading-[1.2] max-w-3xl">
            {l.title}
          </h2>
        </FadeInView>

        <div className="flex flex-col gap-20 lg:gap-28">
          {l.ideas.map((idea, i) => (
            <FadeInView key={i} delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div
                  className={`relative aspect-[4/3] rounded-sm overflow-hidden${i % 2 === 1 ? ' lg:order-2' : ''}`}
                >
                  <Image
                    src={layoutImages[i]}
                    alt={idea.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="font-dm text-xs uppercase tracking-widest text-[#C4A882] mb-3 block">
                    {idea.badge}
                  </span>
                  <h3 className="font-cormorant italic text-[clamp(1.4rem,2.2vw,2rem)] text-stone-900 mb-6 leading-[1.2]">
                    {idea.title}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {idea.paragraphs.map((p, j) => (
                      <p key={j} className="font-dm text-stone-600 leading-relaxed text-sm md:text-[0.9375rem]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
