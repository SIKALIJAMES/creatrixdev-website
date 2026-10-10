export interface PortfolioProject {
  title: string
  slug?: string
  category: 'Developpement' | 'Design' | 'Marketing' | 'Contenu' | 'IA et Automatisation'
  description: string
  image: string
  liveUrl?: string
  tags?: string[]
  featured?: boolean
  client?: string
  result?: string
  /** statut: reel = projet reel avec client valide, concept = projet sans client reel verifie */
  statut: 'reel' | 'concept'
}

export const portfolioCategories = ['Tous', 'Developpement', 'IA et Automatisation', 'Design', 'Contenu', 'Marketing']

export const portfolioProjects: PortfolioProject[] = [
  // ─── PROJETS REELS (statut: reel) ─────────────────────────────────────────
  {
    slug: 'sigfot',
    title: 'SIGFOT — Systeme Integre de Gestion de Flotte et des Operations de Transport',
    category: 'Developpement',
    statut: 'reel',
    client: 'SST Sarl · Societe Solution Transport',
    description:
      'Plateforme web collaborative centralisant la gestion de flotte, trajets, carburant, finances, achats, stocks et facturation. 20 modules, 21 tables SQL, 38 migrations en production.',
    result: '20 modules · 38 migrations DB · 21 tables · Multi-comptes bancaires',
    image: '/sigfot-mockup.jpg',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'ExcelJS', 'Recharts'],
    featured: true,
  },
  {
    slug: 'isetag-chatbot',
    title: 'ISETAG Chatbot V2 — Agent Conversationnel Intelligent & Admissions en Ligne',
    category: 'IA et Automatisation',
    statut: 'reel',
    client: 'Institut Superieur Evangelique des Technologies Appliquees et de Gestion (ISETAG)',
    description:
      "Agent omnicanal WhatsApp & Messenger avec transcription vocale (Groq Whisper), recherche documentaire RAG (pgvector), quiz d'orientation en 9 etapes et plateforme de pre-inscription en ligne avec confirmation automatique.",
    result: '2 canaux · STT vocal · RAG vectoriel · Relance 24h · 100% automatise',
    image: '/projects/isetag/dashboard-analytics.png',
    tags: ['Node.js', 'Express', 'React', 'PostgreSQL + pgvector', 'Groq API', 'Redis', 'Docker', 'Railway'],
    liveUrl: 'https://isetagchatbot-production.up.railway.app',
    featured: false,
  },

  // ─── CONCEPTS (statut: concept) — masques du portfolio public ─────────────
  // Ces projets ne sont pas affiches en production (voir scripts/check-content.mjs).
  // Ils ne seront publies qu'apres obtention d'un client reel et valide.
  {
    title: 'Plateforme E-Commerce Next.js',
    category: 'Developpement',
    statut: 'concept',
    description: 'Boutique en ligne moderne avec catalogue dynamique, panier temps reel et passerelle de paiement mobile money.',
    image: '',
    tags: ['Next.js', 'Stripe', 'Mobile Money'],
  },
  {
    title: 'Identite Visuelle & UI/UX Fintech',
    category: 'Design',
    statut: 'concept',
    description: "Refonte de marque complete, charte graphique neon et conception d'application web responsive.",
    image: '',
    tags: ['Figma', 'Branding', 'UI/UX'],
  },
  {
    title: "Campagne d'Acquisition & SEO Local",
    category: 'Marketing',
    statut: 'concept',
    description: 'Strategie de referencement Google Maps et publicite ciblee pour un commerce local.',
    image: '',
    tags: ['SEO', 'Google Ads', 'Analytics'],
  },
  {
    title: 'Production Video & Motion Design',
    category: 'Contenu',
    statut: 'concept',
    description: "Capsules video dynamiques pour le lancement d'une marque sur TikTok et Instagram Reels.",
    image: '',
    tags: ['After Effects', 'Premiere Pro', 'TikTok'],
  },
  {
    title: 'Design System & Maquettes Mobiles',
    category: 'Design',
    statut: 'concept',
    description: 'Bibliotheque de composants Figma avec variantes interactives pour une application mobile.',
    image: '',
    tags: ['Figma', 'Design System', 'React Native'],
  },
]

/** Retourne uniquement les projets reels avec client valide — a utiliser dans le portfolio public. */
export const publicPortfolioProjects = portfolioProjects.filter((p) => p.statut === 'reel')
