import type { Metadata } from 'next'
import { Metadata as M } from 'next'
import AProposClient from './AProposClient'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez la vision, la mission et les valeurs de CreatrixDev, startup digitale premium dédiée à l\'excellence numérique.',
}

export default function AProposPage() {
  return <AProposClient />
}
