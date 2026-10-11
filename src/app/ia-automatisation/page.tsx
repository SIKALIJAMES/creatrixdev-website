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

const iaFaq = [
  {
    q: 'Faut-il changer nos outils actuels ?',
    a: 'Non. Nos automatisations et agents conversationnels se branchent sur vos logiciels existants (WhatsApp, classeurs, bases de données ou ERP) via API sans perturber vos habitudes.',
  },
  {
    q: 'Combien ça coûte ?',
    a: 'Chaque projet fait l’objet d’un diagnostic gratuit pour évaluer vos flux. Les intégrations démarrent sur devis après diagnostic gratuit selon la complexité.',
  },
  {
    q: 'Combien de temps pour déployer ?',
    a: 'Un premier prototype fonctionnel est généralement livrable en 2 à 4 semaines après validation du cahier des charges et des accès techniques.',
  },
  {
    q: 'Nos données restent-elles confidentielles ?',
    a: 'Oui. Vos données métier ne sont jamais utilisées pour réentraîner des modèles publics. Nous déployons des architectures étanches et sécurisées.',
  },
]

export default function IaAutomatisationPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: iaFaq.map((item) => ({
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
      <IaAutomatisationClient />
    </>
  )
}
