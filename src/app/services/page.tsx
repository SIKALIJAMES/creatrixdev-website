import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Développement web/mobile, design, contenu digital, marketing, support IT et formation — nos services digitaux premium.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: 'Services · CreatrixDev',
    description: 'Développement web/mobile, design, automatisation et systèmes métier sur mesure à Douala.',
    url: `${siteConfig.url}/services`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
