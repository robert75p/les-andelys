'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { locales } from '@/lib/i18n'
import clsx from 'clsx'

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentLocale = locales.find((l) => l.code === locale)

  const navLinks = [
    { href: '#property', label: t.nav.property },
    { href: '#location', label: t.nav.location },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-2">
            <span
              className={clsx(
                'font-cormorant italic text-xl leading-none transition-colors',
                scrolled ? 'text-stone-900' : 'text-white'
              )}
            >
              Adresse Privée
            </span>
            <span
              className={clsx(
                'font-dm text-xs font-light uppercase tracking-widest transition-colors',
                scrolled ? 'text-stone-500' : 'text-white/80'
              )}
            >
              Immobilier
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'font-dm text-sm tracking-wide transition-colors hover:opacity-70',
                  scrolled ? 'text-stone-700' : 'text-white'
                )}
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className={clsx(
                  'flex items-center gap-1.5 font-dm text-sm transition-colors hover:opacity-70',
                  scrolled ? 'text-stone-700' : 'text-white'
                )}
                aria-label="Change language"
              >
                <span className="text-base">{currentLocale?.flag}</span>
                <span className="uppercase tracking-wider text-xs">{locale}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-8 bg-white rounded-lg shadow-xl border border-stone-100 overflow-hidden py-1 min-w-[140px]"
                  >
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLocale(l.code); setLangOpen(false) }}
                        className={clsx(
                          'w-full flex items-center gap-2.5 px-4 py-2 text-sm font-dm text-left hover:bg-stone-50 transition-colors',
                          locale === l.code ? 'text-amber-700 font-medium' : 'text-stone-700'
                        )}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className={clsx(
                'font-dm text-sm px-5 py-2 border rounded-full transition-all duration-300',
                scrolled
                  ? 'border-[#C4A882] text-[#C4A882] hover:bg-[#C4A882] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-stone-900'
              )}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={clsx('w-6 h-6', scrolled ? 'text-stone-900' : 'text-white')} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#1A1815] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-cormorant italic text-xl text-white">Adresse Privée</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-cormorant italic text-4xl text-white hover:text-[#C4A882] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 font-dm text-sm px-8 py-3 border border-[#C4A882] text-[#C4A882] rounded-full"
              >
                {t.nav.cta}
              </a>
              {/* Mobile language switcher */}
              <div className="flex gap-4 mt-4">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLocale(l.code); setMobileOpen(false) }}
                    className={clsx(
                      'text-xl transition-opacity',
                      locale === l.code ? 'opacity-100' : 'opacity-40'
                    )}
                    aria-label={l.label}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
