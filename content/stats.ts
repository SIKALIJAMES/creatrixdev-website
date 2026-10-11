export interface StatItem {
  id: string
  value: string
  numericValue?: number
  suffix?: string
  label: string
  description?: string
  source: string
}

export const homeStats: StatItem[] = [
  {
    id: 'projets-reels',
    value: '1',
    numericValue: 1,
    label: 'Système métier en production',
    description: 'SIGFOT — Gestion de flotte & carburant pour SST Sarl',
    source: 'Réalisation déployée en production par CreatrixDev pour SST Sarl',
  },
  {
    id: 'sigfot-modules',
    value: '20',
    numericValue: 20,
    label: 'Modules métier (SIGFOT)',
    description: 'Flotte, carburant, maintenance, chauffeurs, trésorerie et facturation',
    source: 'Spécifications et architecture logicielle SIGFOT pour SST Sarl',
  },
  {
    id: 'sigfot-migrations',
    value: '38',
    numericValue: 38,
    label: 'Migrations DB en production',
    description: 'Évolution continue de la base de données sans interruption',
    source: 'Dépôt et historique de migrations Supabase/PostgreSQL SIGFOT',
  },
  {
    id: 'delai-reponse',
    value: '24h',
    numericValue: 24,
    suffix: 'h',
    label: 'Délai de cadrage initial',
    description: 'Premier retour technique et proposition d’orientation',
    source: 'Charte d’engagement de service CreatrixDev',
  },
]

export const sigfotDetailedStats: StatItem[] = [
  {
    id: 'sigfot-modules',
    value: '20',
    numericValue: 20,
    label: 'Modules fonctionnels',
    source: 'Spécification technique SIGFOT v1.0',
  },
  {
    id: 'sigfot-roles',
    value: '5',
    numericValue: 5,
    label: 'Rôles utilisateurs sécurisés',
    source: 'Matrice des droits et permissions RBAC SIGFOT',
  },
  {
    id: 'sigfot-migrations',
    value: '38',
    numericValue: 38,
    label: 'Migrations DB',
    source: 'Historique des migrations PostgreSQL SIGFOT',
  },
  {
    id: 'sigfot-tables',
    value: '21',
    numericValue: 21,
    label: 'Tables SQL relationnelles',
    source: 'Schéma de base de données relationnelle SIGFOT',
  },
]
