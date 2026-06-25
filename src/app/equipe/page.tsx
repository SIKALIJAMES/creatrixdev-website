import type { Metadata } from 'next'
import EquipeClient from './EquipeClient'

export const metadata: Metadata = {
  title: 'Équipe',
  description: 'Rencontrez l\'équipe passionnée de CreatrixDev — des talents créatifs et techniques au service de votre digital.',
}

export default function EquipePage() {
  return <EquipeClient />
}
