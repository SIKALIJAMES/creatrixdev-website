import type { Metadata } from 'next'
import AProposClient from './AProposClient'
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez la vision, la mission et les valeurs de CreatrixDev, entreprise d\'ingénierie logicielle basée à Douala.',
  alternates: {
    canonical: `${siteConfig.url}/a-propos`,
  },
  openGraph: {
    title: 'À propos · CreatrixDev',
    description: 'Ingénierie logicielle et intelligence artificielle sur mesure au Cameroun et en Afrique centrale.',
    url: `${siteConfig.url}/a-propos`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function AProposPage() {
  return <AProposClient />
}
