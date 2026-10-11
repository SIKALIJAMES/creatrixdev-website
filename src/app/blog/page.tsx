import type { Metadata } from 'next'
import BlogClient from './BlogClient'
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles et retours d\'expérience sur l\'ingénierie logicielle, l\'automatisation et le numérique en Afrique.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'Blog · CreatrixDev',
    description: 'Retours d\'expérience technique et conseils pratiques pour digitaliser vos processus métier.',
    url: `${siteConfig.url}/blog`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  return <BlogClient />
}
