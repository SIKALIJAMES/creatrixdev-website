export interface SiteConfig {
  name: string
  legalName: string
  tagline: string
  description: string
  domain: string
  url: string
  city: string
  country: string
  address: string
  mapsUrl: string
  email: string
  phone: {
    primary: string
    secondary: string
    raw: string
  }
  whatsapp: {
    number: string
    e164: string
    defaultUrl: string
    defaultMessage: string
  }
  socials: {
    instagram: string
    facebook: string
    github: string
    linkedin: string
    tiktok: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'CreatrixDev',
  legalName: 'CreatrixDev SARL',
  tagline: "L'art de coder l'avenir",
  description:
    "Systèmes métier sur mesure et solutions d'IA et d'automatisation pour les entreprises et institutions d'Afrique centrale. Basé à Douala, Cameroun.",
  domain: 'creatrixdev.com',
  url: 'https://creatrixdev.com',
  city: 'Douala',
  country: 'Cameroun',
  address: 'Première Entrée Cogefar, N3, Douala, Cameroun',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Premi%C3%A8re+Entr%C3%A9e+Cogefar+Douala',
  email: 'creatrixdevteam@gmail.com',
  phone: {
    primary: '+237 692 280 248',
    secondary: '+237 676 418 976',
    raw: '+237692280248',
  },
  whatsapp: {
    number: '+237 692 280 248',
    e164: '237692280248',
    defaultUrl: 'https://wa.me/237692280248',
    defaultMessage: 'Bonjour CreatrixDev, je souhaite échanger à propos de mon projet.',
  },
  socials: {
    instagram: 'https://www.instagram.com/creatrixdev?igsh=cXM3N2VhNTMyendo',
    facebook: 'https://www.facebook.com/profile.php?id=61582897332001',
    github: 'https://github.com/creatrixdevteam-coder',
    linkedin: 'https://www.linkedin.com/company/145245374/',
    tiktok: 'https://www.tiktok.com/@creatrixdev?_r=1&_t=ZS-97VOWI3HOQ1',
  },
}

/**
 * Génère une URL WhatsApp avec message pré-rempli et encodé.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message || siteConfig.whatsapp.defaultMessage
  return `https://wa.me/${siteConfig.whatsapp.e164}?text=${encodeURIComponent(text)}`
}
