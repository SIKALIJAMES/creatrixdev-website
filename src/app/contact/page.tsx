import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez CreatrixDev pour démarrer votre projet digital. Formulaire, WhatsApp, téléphone, email — nous sommes là.',
}

export default function ContactPage() {
  return <ContactClient />
}
