import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez CreatrixDev pour échanger sur votre projet logiciel ou d\'automatisation. Réponse garantie sous 24h.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact · CreatrixDev',
    description: 'Contactez notre équipe à Douala par WhatsApp, formulaire ou téléphone pour un diagnostic gratuit.',
    url: `${siteConfig.url}/contact`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
