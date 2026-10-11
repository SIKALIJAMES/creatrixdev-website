'use client'

import React from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from '@/context/LanguageContext'

export default function FrenchOnlyNotice() {
  const { locale, t } = useTranslation()

  if (locale !== 'en') return null

  return (
    <div
      role="status"
      className="mb-8 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs flex items-center gap-2.5 max-w-3xl"
    >
      <Globe size={16} className="shrink-0 text-blue-400" />
      <span>{t.common.frenchOnlyNotice}</span>
    </div>
  )
}
