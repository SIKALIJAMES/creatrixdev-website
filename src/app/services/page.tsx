import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Développement web/mobile, design, contenu digital, marketing, support IT et formation — tous nos services digitaux premium.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
