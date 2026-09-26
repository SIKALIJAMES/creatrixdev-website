export interface TeamMember {
  name: string
  role: string
  photo: string
  bio: string
  linkedinUrl?: string
  githubUrl?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'TENEFO SIKALI Yvan James',
    role: 'Fondateur & Lead Dev',
    photo: '/team/yvan-james.jpg',
    bio: 'Passionné d\'architecture logicielle, d\'innovation technologique et d\'expériences web d\'excellence.',
    linkedinUrl: 'https://www.linkedin.com/in/james-sikali-744902378/',
  },
  {
    name: 'LEMBOIGNY SENGOUA Nathan',
    role: 'Co-fondateur & Développeur Fullstack',
    photo: '/team/nathan-sengoua.jpg',
    bio: 'Artisan de solutions complètes du front-end au back-end, spécialisé dans les architectures modernes, la conception d\'APIs robustes et les applications scalables.',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    name: 'Membre 3',
    role: 'Designer UI/UX',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format',
    bio: 'Créatrice d\'identités de marque mémorables et d\'interfaces centrées sur l\'utilisateur.',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    name: 'Membre 4',
    role: 'Expert Marketing Digital & SEO',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format',
    bio: 'Spécialiste en acquisition, référencement naturel et croissance de visibilité pour les entreprises.',
    linkedinUrl: 'https://linkedin.com',
  },
]
