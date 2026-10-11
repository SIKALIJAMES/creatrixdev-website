import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Découvrez les réalisations réelles de CreatrixDev : systèmes métier, applications et plateformes validées.',
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
  openGraph: {
    title: 'Portfolio · CreatrixDev',
    description: 'Études de cas réelles de systèmes de gestion d\'entreprise et d\'applications développés par CreatrixDev.',
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
