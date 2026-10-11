import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import { siteConfig } from '@/../content/site'
import { LanguageProvider } from '@/context/LanguageContext'
import CookieConsentBanner from '@/components/CookieConsentBanner'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Systemes metier sur mesure et agents IA pour les entreprises et institutions d'Afrique centrale. Base a Douala, Cameroun. Diagnostic gratuit.",
  keywords: [
    'developpement logiciel Douala',
    'systeme de gestion sur mesure',
    'chatbot WhatsApp Cameroun',
    'gestion de flotte Cameroun',
    'IA automatisation Afrique',
    'agence digitale Douala',
    'CreatrixDev',
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Systemes metier sur mesure et agents IA pour les entreprises d'Afrique centrale. Diagnostic gratuit a Douala.",
    type: 'website',
    locale: 'fr_FR',
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Systemes metier sur mesure et agents IA pour les entreprises d'Afrique centrale. Diagnostic gratuit a Douala.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

// JSON-LD : Organization + ProfessionalService
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone.raw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Premiere Entree Cogefar, N3',
        addressLocality: 'Douala',
        addressCountry: 'CM',
      },
      sameAs: [
        siteConfig.socials.linkedin,
        siteConfig.socials.github,
        siteConfig.socials.facebook,
        siteConfig.socials.instagram,
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.url}/#service`,
      name: `${siteConfig.name} — Systemes Metier & IA`,
      url: siteConfig.url,
      description:
        "Conception et developpement de systemes de gestion sur mesure, chatbots WhatsApp et agents IA pour les entreprises et institutions d'Afrique centrale.",
      telephone: siteConfig.phone.raw,
      email: siteConfig.email,
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 4.0511,
          longitude: 9.7679,
        },
        geoRadius: '800000',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Premiere Entree Cogefar, N3',
        addressLocality: 'Douala',
        addressCountry: 'CM',
      },
      serviceType: [
        'Systeme de gestion de flotte',
        'Chatbot WhatsApp et Messenger',
        'Agent IA et automatisation',
        'Developpement web sur mesure',
      ],
      parentOrganization: { '@id': `${siteConfig.url}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <CookieConsentBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
