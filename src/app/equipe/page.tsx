import type { Metadata } from 'next'
import EquipeClient from './EquipeClient'
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'Équipe',
  description: 'Rencontrez l\'équipe technique et produit de CreatrixDev à Douala, engagée pour vos systèmes métier.',
  alternates: {
    canonical: `${siteConfig.url}/equipe`,
  },
  openGraph: {
    title: 'Équipe · CreatrixDev',
    description: 'Ingénieurs, développeurs et designers construisant vos solutions digitales à Douala.',
    url: `${siteConfig.url}/equipe`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function EquipePage() {
  return <EquipeClient />
}
