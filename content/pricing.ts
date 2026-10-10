export interface PricingPlan {
  id: string
  name: string
  target: string
  description: string
  priceFromFcfa: string | 'TODO_A_FOURNIR'
  estimatedDuration: string | 'TODO_A_FOURNIR'
  features: string[]
  recommended?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'site-vitrine',
    name: 'Site Web & Présence Digitale',
    target: 'Entreprises souhaitant valoriser leur savoir-faire et capter des prospects qualifiés',
    description:
      'Conception d’un site web rapide, responsive et optimisé pour le référencement local et Google Maps.',
    priceFromFcfa: 'TODO_A_FOURNIR',
    estimatedDuration: 'TODO_A_FOURNIR',
    features: [
      'Design sur mesure adapté à votre charte',
      'Optimisation mobile prioritaire (Mobile First)',
      'Intégration WhatsApp directe et formulaires sécurisés',
      'Référencement local (SEO Douala / Cameroun)',
      'Hébergement cloud sécurisé avec certificat SSL',
    ],
  },
  {
    id: 'systeme-metier',
    name: 'Système Métier sur Mesure',
    target: 'Sociétés de transport, PME et structures gérant leurs opérations sur des fichiers Excel dispersés',
    description:
      'Application web collaborative pour centraliser la gestion de flotte, stocks, opérations et facturation (modèle SIGFOT).',
    priceFromFcfa: 'TODO_A_FOURNIR',
    estimatedDuration: 'TODO_A_FOURNIR',
    recommended: true,
    features: [
      'Diagnostic approfondi de vos règles métier actuelles',
      'Tableaux de bord opérationnels et alertes automatiques',
      'Exports comptables au format Excel exact de vos équipes',
      'Gestion fine des droits d’accès et rôles utilisateurs',
      'Sauvegardes automatiques et base de données relationnelle sécurisée',
      'Formation des équipes et accompagnement au déploiement',
    ],
  },
  {
    id: 'chatbot-ia',
    name: 'Chatbot WhatsApp & Agent IA',
    target: 'Établissements d’enseignement, entreprises de services et institutions recevant un fort volume de sollicitations',
    description:
      'Assistant omnicanal 24h/24 capable de traiter les notes vocales, d’interroger vos fiches officielles et de qualifier les prospects (modèle ISETAG).',
    priceFromFcfa: 'TODO_A_FOURNIR',
    estimatedDuration: 'TODO_A_FOURNIR',
    features: [
      'Connexion officielle WhatsApp Business Cloud API & Messenger',
      'Compréhension des notes vocales en français et en anglais (Whisper STT)',
      'Recherche documentaire intelligente RAG sur vos programmes et tarifs',
      'Pré-inscription / prise de coordonnées en ligne',
      'Relance automatique des prospects inactifs à 24h',
      'Console d’administration et reprise en main humaine instantanée',
    ],
  },
]

/**
 * Vérifie si le fichier de tarification contient au moins un champ non fourni.
 */
export function hasPricingTodos(): boolean {
  return pricingPlans.some(
    (p) => p.priceFromFcfa === 'TODO_A_FOURNIR' || p.estimatedDuration === 'TODO_A_FOURNIR'
  )
}
