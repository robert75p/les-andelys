'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import type { PropertyHeroData } from '@/lib/propertyTypes'

export default function Hero({ data }: { data?: PropertyHeroData }) {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  const region = data?.region ?? t.hero.region
  const title = data?.title ?? t.hero.title
  const subtitle = data?.subtitle ?? t.hero.subtitle
  const bgImage = data?.backgroundImage ?? '/pictures/house/loft-1.jfif'
  const scroll = data?.scroll ?? t.hero.scroll

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden" id="hero">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-dm text-xs tracking-[0.3em] uppercase mb-6 text-white/80"
        >
          {region}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-cormorant italic text-[clamp(3rem,8vw,6rem)] leading-[1.05] mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-dm text-sm md:text-base tracking-wide text-white/80"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="font-dm text-xs tracking-widest uppercase">{scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
