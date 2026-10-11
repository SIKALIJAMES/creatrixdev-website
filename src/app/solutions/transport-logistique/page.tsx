import type { Metadata } from 'next'
import { siteConfig } from '@/../content/site'
import TransportClient from './TransportClient'

export const metadata: Metadata = {
  title: 'Gestion de flotte et carburant sur mesure',
  description:
    'Suivez vos camions, trajets, carburant et comptes dans un seul outil sur mesure. Découvrez SIGFOT. Diagnostic gratuit à Douala.',
  alternates: {
    canonical: `${siteConfig.url}/solutions/transport-logistique`,
  },
  openGraph: {
    title: 'Gestion de flotte et carburant sur mesure',
    description:
      'Suivez vos camions, trajets, carburant et comptes dans un seul outil sur mesure. Découvrez SIGFOT. Diagnostic gratuit à Douala.',
    url: `${siteConfig.url}/solutions/transport-logistique`,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/projects/sigfot/dashboard.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tableau de bord de gestion de flotte SIGFOT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion de flotte et carburant sur mesure',
    description:
      'Suivez vos camions, trajets, carburant et comptes dans un seul outil sur mesure. Découvrez SIGFOT. Diagnostic gratuit à Douala.',
    images: [`${siteConfig.url}/projects/sigfot/dashboard.jpg`],
  },
}

const transportFaq = [
  {
    q: 'Peut-on garder nos fichiers Excel ?',
    a: 'Oui. Les exports générés par notre système reproduisent à l’identique les modèles et classeurs de votre comptabilité, évitant toute ressaisie manuelle.',
  },
  {
    q: 'Et si notre flotte est petite ?',
    a: 'Le périmètre technique s’adapte à la taille exacte de votre flotte (de quelques véhicules à plusieurs dizaines de camions). Le devis est établi après diagnostic initial.',
  },
  {
    q: 'Combien de temps et combien ça coûte ?',
    a: 'Chaque projet fait l’objet d’un diagnostic gratuit pour modéliser vos règles exactes. Les délais moyens de livraison d’un premier prototype sont de 3 à 6 semaines selon la complexité des modules.',
  },
  {
    q: 'Nos données sont-elles sécurisées ?',
    a: 'Totalement. Vos bases PostgreSQL bénéficient d’une isolation complète et d’une gestion granulaire des rôles (Row Level Security). Vos données opérationnelles restent strictement confidentielles.',
  },
]

export default function TransportLogistiquePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: transportFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TransportClient />
    </>
  )
}
