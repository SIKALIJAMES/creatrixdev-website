import { fr } from './fr'
import { en } from './en'
import { Locale, TranslationDictionary } from './types'

export * from './types'
export { fr, en }

export const defaultLocale: Locale = 'fr'
export const supportedLocales: Locale[] = ['fr', 'en']

export function getDictionary(locale: Locale = defaultLocale): TranslationDictionary {
  return locale === 'en' ? en : fr
}
