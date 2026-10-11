import type { Metadata } from 'next'
import { siteConfig } from '@/../content/site'
import IaAutomatisationClient from './IaAutomatisationClient'

export const metadata: Metadata = {
  title: 'IA & automatisation sur mesure à Douala',
  description:
    "Chatbots WhatsApp, assistants et automatisations conçus pour les entreprises et institutions d'Afrique centrale. Diagnostic gratuit.",
  alternates: {
    canonical: `${siteConfig.url}/ia-automatisation`,
  },
  openGraph: {
    title: 'IA & automatisation sur mesure à Douala',
    description:
      "Chatbots WhatsApp, assistants et automatisations conçus pour les entreprises et institutions d'Afrique centrale. Diagnostic gratuit.",
    url: `${siteConfig.url}/ia-automatisation`,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'IA & automatisation — CreatrixDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA & automatisation sur mesure à Douala',
    description:
      "Chatbots WhatsApp, assistants et automatisations conçus pour les entreprises et institutions d'Afrique centrale. Diagnostic gratuit.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
}

export default function IaAutomatisationPage() {
  return <IaAutomatisationClient />
}
