export interface ServicePillar {
  num: string
  label: string
  title: string
  borderColor: string
  description: string
  services: string[]
  href: string
  iconName: 'Code2' | 'Palette' | 'TrendingUp' | 'Bot'
}

export interface ServiceDetailSection {
  id: string
  title: string
  subtitle: string
  description: string
  iconName: 'Code2' | 'Palette' | 'Film' | 'TrendingUp' | 'Server' | 'GraduationCap' | 'Bot'
  services: string[]
}

export const servicePillars: ServicePillar[] = [
  {
    num: '01',
    label: 'SYSTÈMES MÉTIER',
    title: 'Développement sur Mesure',
    borderColor: 'border-blue-brand/20 hover:border-blue-brand/60',
    description:
      'Logiciels de gestion internes, plateformes web collaboratives, ERP légers, connecteurs API et bases de données robustes adaptées à vos règles de gestion.',
    services: [
      'Gestion de flotte & carburant',
      'Applications web & tableaux de bord',
      'APIs REST & connecteurs sécurisés',
      'Refonte de fichiers Excel dispersés',
    ],
    href: '/services#developpement',
    iconName: 'Code2',
  },
  {
    num: '02',
    label: 'IA & AUTOMATISATION',
    title: 'Agents & Automatisation',
    borderColor: 'border-blue-brand/20 hover:border-blue-brand/60',
    description:
      'Assistants WhatsApp et Messenger, traitement de notes vocales, recherche documentaire RAG, alertes de gestion et automatisation de processus métier répétitifs.',
    services: [
      'Chatbots WhatsApp omnicanaux',
      'Compréhension de notes vocales (STT)',
      'Recherche RAG dans vos règlements & documents',
      'Automatisation de relances et pré-inscriptions',
    ],
    href: '/ia-automatisation',
    iconName: 'Bot',
  },
  {
    num: '03',
    label: 'DESIGN & EXPÉRIENCE',
    title: 'Design UI/UX & Identité',
    borderColor: 'border-blue-brand/20 hover:border-blue-brand/60',
    description:
      'Conception d’interfaces ergonomiques, maquettes interactives testées sur mobile, identités visuelles professionnelles et cohérence de marque.',
    services: [
      'Design d’interfaces web & mobiles',
      'Prototypage interactif Figma',
      'Identité visuelle & chartes graphiques',
      'Optimisation des parcours utilisateurs',
    ],
    href: '/services#design',
    iconName: 'Palette',
  },
]

export const serviceDetailSections: ServiceDetailSection[] = [
  {
    id: 'developpement',
    iconName: 'Code2',
    title: 'Développement Web & Systèmes Métier',
    subtitle: 'Des outils opérationnels conçus selon vos contraintes réelles',
    description:
      'Nous concevons et développons des solutions logicielles robustes, rapides et maintenables, pensées pour les connexions locales et les besoins quotidiens des équipes de terrain.',
    services: [
      'Systèmes de gestion opérationnelle et de flotte (ex. SIGFOT)',
      'Applications web de gestion et portails internes',
      'Refonte et fiabilisation de classeurs Excel critiques',
      'APIs et synchronisation multi-systèmes',
      'Bases de données relationnelles PostgreSQL / Supabase',
      'Exports comptables automatisés au format exact attendu',
    ],
  },
  {
    id: 'ia-automatisation',
    iconName: 'Bot',
    title: 'IA, Chatbots & Automatisation de Processus',
    subtitle: 'Moins d’erreurs de saisie, un accueil 24h/24 et des équipes libérées',
    description:
      'Nous intégrons l’IA là où elle apporte une vraie valeur mesurable : accueil prospect automatique par WhatsApp, transcription de notes vocales, recherche intelligente dans vos documents internes et alertes sur anomalies.',
    services: [
      'Chatbots WhatsApp et Messenger connectés à votre base métier',
      'Transcription instantanée de notes vocales en texte (Whisper)',
      'Recherche documentaire intelligente RAG sur vos règlements et fiches',
      'Relance automatique de prospects après inactivité (nurturing)',
      'Passerelle d’escalade fluide vers un conseiller humain',
      'Tableaux de bord d’administration avec export Excel',
    ],
  },
  {
    id: 'design',
    iconName: 'Palette',
    title: 'Design UI/UX & Ergonomie Logicielle',
    subtitle: 'Des interfaces claires pour que vos équipes adoptent l’outil sans friction',
    description:
      'Le design d’un outil métier doit avant tout faire gagner du temps et éviter les erreurs de saisie. Nous concevons des écrans épurés, lisibles sur mobile et pensés pour le rythme de travail de vos collaborateurs.',
    services: [
      'Conception d’interfaces applicatives complexes (tableaux de bord, formulaires)',
      'Maquettes haute fidélité Figma avec parcours testés',
      'Design adaptatif (Mobile, Tablette, PC bureau)',
      'Identité visuelle, logos vectoriels SVG et chartes graphiques',
      'Design systems réutilisables pour développeurs',
    ],
  },
  {
    id: 'support-it',
    iconName: 'Server',
    title: 'Infrastructure & Déploiement Cloud',
    subtitle: 'Disponibilité, sauvegardes automatiques et sécurité de vos données',
    description:
      'Vos outils métier doivent fonctionner en continu sans mauvaises surprises. Nous configurons des environnements d’hébergement modernes (Railway, Docker, bases gérées) avec sauvegardes régulières.',
    services: [
      'Déploiement conteneurisé Docker sur Railway et Cloud',
      'Configuration et sécurisation de bases PostgreSQL',
      'Mise en place de sauvegardes automatiques',
      'Gestion des noms de domaine et certificats SSL',
      'Surveillance applicative et maintenance corrective',
    ],
  },
]
