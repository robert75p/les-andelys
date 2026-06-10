'use client'

import { Share2, Globe, Briefcase } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: '#property', label: t.nav.property },
    { href: '#location', label: t.nav.location },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-[#1A1815] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-cormorant italic text-2xl">Les Andelys</span>
              <span className="font-dm text-xs font-light uppercase tracking-widest text-white/50">
                Immobilier
              </span>
            </div>
            <p className="font-dm text-sm text-white/50 leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-dm text-sm text-white/60 hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="font-dm text-xs uppercase tracking-widest text-white/40 mb-4">Social</p>
            <div className="flex gap-4">
              {[
                { Icon: Share2, label: 'Instagram' },
                { Icon: Globe, label: 'Facebook' },
                { Icon: Briefcase, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-dm text-xs text-white/40">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="font-dm text-xs text-white/40 hover:text-white/70 transition-colors">
              {t.footer.legal}
            </a>
            <a href="#" className="font-dm text-xs text-white/40 hover:text-white/70 transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
