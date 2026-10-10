'use client'

import React from 'react'
import { useTranslation } from '@/context/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useTranslation()

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 text-xs font-mono ${className}`}
      role="group"
      aria-label="Choix de la langue / Language selection"
    >
      <Globe size={13} className="text-text-muted-dark ml-1.5 mr-0.5" />
      <button
        type="button"
        onClick={() => setLocale('fr')}
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          locale === 'fr'
            ? 'bg-blue-brand text-white font-semibold shadow-xs'
            : 'text-text-muted hover:text-white'
        }`}
        aria-pressed={locale === 'fr'}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          locale === 'en'
            ? 'bg-blue-brand text-white font-semibold shadow-xs'
            : 'text-text-muted hover:text-white'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}
