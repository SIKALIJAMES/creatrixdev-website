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
    photo: '/team/yvan-james.png',
    bio: 'Passionné d\'architecture logicielle, d\'innovation technologique et d\'expériences web d\'excellence.',
    linkedinUrl: 'https://www.linkedin.com/in/james-sikali-744902378/',
  },
  {
    name: 'LEMBOIGNY SENGOUA Nathan',
    role: 'Co-fondateur & Développeur Fullstack',
    photo: '/team/nathan-sengoua.jpg',
    bio: 'Artisan de solutions complètes du front-end au back-end, spécialisé dans les architectures modernes, la conception d\'APIs robustes et les applications scalables.',
  },
  {
    name: 'MBATA TCHOUBEUN Yvana Carelle',
    role: 'Directrice Marketing & Communication',
    photo: '/team/yvana-mbata.jpg',
    bio: 'Stratège en communication, experte en infographie, community management et création de contenus percutants.',
    linkedinUrl: 'https://www.linkedin.com/in/yvana-mbata-41260b38b',
  },
  {
    name: 'ATSAMA OWONA Jules Deric',
    role: 'Ingénieur DevOps & Architecte Réseau',
    photo: '/team/atsama-owona.jpg',
    bio: 'Spécialisé en pipelines CI/CD, conteneurisation Docker & Kubernetes, IaC (Terraform, Ansible) et architectures réseau sécurisées. Il garantit des infrastructures résilientes et des déploiements zéro-downtime.',
  },
]
