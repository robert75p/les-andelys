'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import { locales, type Locale } from '@/lib/i18n'
import clsx from 'clsx'
import * as Flags from 'country-flag-icons/react/3x2'

const localeToFlag: Record<Locale, keyof typeof Flags> = {
  fr: 'FR',
  en: 'GB',
  de: 'DE',
  it: 'IT',
  zh: 'CN',
}

function FlagSwitcher({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => {
        const FlagIcon = Flags[localeToFlag[l.code]]
        return (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            title={l.label}
            aria-label={l.label}
            className={clsx(
              'transition-all duration-200 hover:scale-110 rounded-sm overflow-hidden',
              locale === l.code ? 'opacity-100 scale-110 ring-1 ring-[#C4A882]' : 'opacity-35 hover:opacity-70'
            )}
          >
            <FlagIcon className="w-6 h-auto block" />
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          <Link href="/" className="flex items-baseline gap-2">
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
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Back to listings on property pages */}
            {!isHome && (
              <Link
                href="/"
                className={clsx(
                  'flex items-center gap-1 font-dm text-sm transition-colors hover:opacity-70',
                  scrolled ? 'text-stone-500' : 'text-white/70'
                )}
              >
                <ChevronLeft className="w-4 h-4" />
                {t.nav.allProperties}
              </Link>
            )}

            {/* Section links on property pages */}
            {!isHome && navLinks.map((link) => (
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
            <FlagSwitcher locale={locale} setLocale={setLocale} />

            {!isHome && (
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
            )}
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
              {!isHome && (
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1 font-dm text-sm text-white/60"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t.nav.allProperties}
                </Link>
              )}
              {!isHome && navLinks.map((link, i) => (
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
              {isHome && (
                <p className="font-cormorant italic text-2xl text-white/60">{t.nav.allProperties}</p>
              )}
              {!isHome && (
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 font-dm text-sm px-8 py-3 border border-[#C4A882] text-[#C4A882] rounded-full"
                >
                  {t.nav.cta}
                </a>
              )}
              {/* Mobile language switcher */}
              <div className="flex gap-3 mt-4">
                {locales.map((l) => {
                  const FlagIcon = Flags[localeToFlag[l.code]]
                  return (
                    <button
                      key={l.code}
                      onClick={() => { setLocale(l.code); setMobileOpen(false) }}
                      title={l.label}
                      aria-label={l.label}
                      className={clsx(
                        'rounded-sm overflow-hidden transition-all duration-200',
                        locale === l.code ? 'opacity-100 scale-110 ring-1 ring-[#C4A882]' : 'opacity-30'
                      )}
                    >
                      <FlagIcon className="w-8 h-auto block" />
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
