import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Découvrez les réalisations de CreatrixDev : sites web, applications, designs, et campagnes marketing réussis.',
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
