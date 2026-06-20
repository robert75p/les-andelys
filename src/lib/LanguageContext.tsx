'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, translations, Translations } from './i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const STORAGE_KEY = 'ap_locale'
const DEFAULT_LOCALE: Locale = 'fr'

function isValidLocale(v: unknown): v is Locale {
  return typeof v === 'string' && v in translations
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Restore persisted locale on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isValidLocale(stored)) setLocaleState(stored)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(STORAGE_KEY, l)
  }

  const t = translations[locale] as Translations

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
