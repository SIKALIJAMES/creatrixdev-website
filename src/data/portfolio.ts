export interface PortfolioProject {
  title: string
  category: 'Développement' | 'Design' | 'Marketing' | 'Contenu'
  description: string
  image: string
  liveUrl?: string
}

export const portfolioCategories = ['Tous', 'Développement', 'Design', 'Contenu', 'Marketing']

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Plateforme E-Commerce Next.js',
    category: 'Développement',
    description: 'Boutique en ligne moderne avec catalogue dynamique, panier temps réel et passerelle de paiement mobile money.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format',
    liveUrl: 'https://creatrixdev.com',
  },
  {
    title: 'Identité Visuelle & UI/UX Fintech',
    category: 'Design',
    description: 'Refonte de marque complète, charte graphique néon et conception d\'application web responsive.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format',
    liveUrl: undefined,
  },
  {
    title: 'Campagne d\'Acquisition & SEO Local',
    category: 'Marketing',
    description: 'Stratégie de référencement Google Maps et publicité ciblée multipliant le trafic qualifié par 3.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format',
    liveUrl: undefined,
  },
  {
    title: 'Production Vidéo & Motion Design',
    category: 'Contenu',
    description: 'Série de capsules vidéo dynamiques pour le lancement d\'une marque sur TikTok et Instagram Reels.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&auto=format',
    liveUrl: undefined,
  },
  {
    title: 'Application Web SaaS de Gestion',
    category: 'Développement',
    description: 'Tableau de bord analytics complet avec authentification sécurisée et gestion de stocks.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format',
    liveUrl: undefined,
  },
  {
    title: 'Design System & Maquettes Mobiles',
    category: 'Design',
    description: 'Bibliothèque de composants Figma prête pour développeurs avec variantes interactives.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format',
    liveUrl: undefined,
  },
]
