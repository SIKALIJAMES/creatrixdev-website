import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: {
    default: 'CreatrixDev — L\'art de coder l\'avenir',
    template: '%s | CreatrixDev',
  },
  description:
    'CreatrixDev : agence digitale premium spécialisée en développement web/mobile, design UI/UX, contenu digital, marketing digital, support IT et formation. Transformez votre présence digitale.',
  keywords: [
    'développement web',
    'design UI/UX',
    'marketing digital',
    'agence digitale',
    'création site web',
    'application mobile',
    'branding',
    'SEO',
    'CreatrixDev',
  ],
  openGraph: {
    title: 'CreatrixDev — L\'art de coder l\'avenir',
    description: 'Startup digitale premium : développement, design, contenu, marketing et formation.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
