'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, TranslationDictionary, getDictionary, defaultLocale } from '@/../content/i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationDictionary
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: getDictionary(defaultLocale),
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('creatrixdev_locale') as Locale
      if (saved && (saved === 'fr' || saved === 'en')) {
        setLocaleState(saved)
        document.documentElement.lang = saved
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem('creatrixdev_locale', newLocale)
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
      document.documentElement.lang = newLocale
    } catch {
      // Ignore storage errors
    }
  }

  const t = getDictionary(locale)

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  return context
}
