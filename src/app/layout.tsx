import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://creatrixdev.com'),
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
    <html
      lang="fr"
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
