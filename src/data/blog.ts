export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  category: string
  date: string
  readTime: string
  image: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'pourquoi-avoir-un-site-web-en-2025',
    title: "Pourquoi votre entreprise a absolument besoin d'un site web en 2025",
    excerpt:
      "Dans un monde où 80% des consommateurs recherchent en ligne avant d'acheter, ne pas avoir de site web c'est laisser vos concurrents vous dépasser. Voici pourquoi et comment agir.",
    category: 'Stratégie',
    date: '2025-01-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format',
    author: {
      name: 'Équipe CreatrixDev',
      role: 'Consultants Digitaux',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format',
    },
    content: [
      "Aujourd'hui, l'absence de présence web équivaut à fermer sa boutique physique au moment où la rue est la plus animée. Même pour une entreprise locale ou B2B, le premier réflexe de tout prospect est de vérifier votre existence sur Google.",
      "1. La crédibilité et la confiance : Un profil sur les réseaux sociaux ne vous appartient pas. Un site internet sur mesure avec votre nom de domaine renvoie immédiatement une image de solidité et de professionnalisme.",
      "2. Une vitrine accessible 24h/24 et 7j/7 : Votre site web travaille même lorsque vos bureaux sont fermés. Il informe vos prospects, met en valeur vos réalisations et recueille des demandes de devis à toute heure.",
      "3. L'optimisation pour le référencement local (SEO) : Avec un site bien structuré, vous captez les recherches géolocalisées (« agence web Douala », « menuiserie moderne Yaoundé », etc.), générant des prospects qualifiés sans frais publicitaires permanents.",
      "4. Maîtrise totale de votre écosystème : Vous contrôlez l'expérience client, vos données analytiques, vos formulaires de conversion et vos intégrations WhatsApp ou CRM.",
      "Conclusion : Investir dans un site web performant, rapide et optimisé pour mobile en 2025 n'est plus une dépense, c'est l'actif le plus rentable pour faire décoller votre chiffre d'affaires.",
    ],
  },
  {
    slug: 'tendances-design-ui-ux-2025',
    title: 'Les tendances UI/UX qui domineront le web en 2025',
    excerpt:
      "Glassmorphism, dark mode immersif, micro-interactions, typographie expressive... Décryptage des tendances visuelles qui façonneront l'expérience utilisateur cette année.",
    category: 'Design',
    date: '2025-01-20',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format',
    author: {
      name: 'Lead UI/UX CreatrixDev',
      role: 'Directeur Créatif',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format',
    },
    content: [
      "Le web design en 2025 marque une rupture avec les interfaces plates et austères des années précédentes. Les utilisateurs recherchent désormais des expériences vivantes, sensorielles et mémorables.",
      "1. Le Dark Mode immersif & les néons de contraste : Les thèmes sombres profonds couplés à des accents cyan et bleus électriques réduisent la fatigue oculaire tout en conférant un cachet haut de gamme et technologique.",
      "2. Le retour du Glassmorphism maîtrisé : Les arrières-plans translucides avec flou gaussien (backdrop-filter) créent une hiérarchie spatiale naturelle sans encombrer la page.",
      "3. Les micro-animations réactives : Un bouton qui réagit au survol, des transitions de cartes fluides et des indicateurs de progression subtils transforment une consultation statique en une interaction gratifiante.",
      "4. La typographie expressive et contrastée : L'association d'une police géométrique futuriste pour les titres et d'une police épurée pour le corps du texte apporte clarté et personnalité.",
      "Chez CreatrixDev, nous intégrons ces tendances non pas par simple effet de mode, mais pour maximiser la conversion et l'engagement de vos visiteurs.",
    ],
  },
]
