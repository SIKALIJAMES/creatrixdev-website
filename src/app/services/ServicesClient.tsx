'use client'

import { motion } from 'framer-motion'
import {
  Code2, Palette, Film, TrendingUp, Server, GraduationCap, CheckCircle,
} from 'lucide-react'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    id: 'developpement',
    icon: <Code2 size={28} />,
    title: 'Développement Web & Mobile',
    subtitle: 'Des solutions digitales performantes et sur mesure',
    description:
      'Nous concevons et développons des solutions numériques robustes, rapides et évolutives — du site vitrine professionnel à l\'application mobile complexe.',
    services: [
      'Sites vitrines & landing pages',
      'E-commerce (boutiques en ligne)',
      'Applications web progressives (PWA)',
      'Applications mobiles (iOS & Android)',
      'Intégrations API & connecteurs',
      'Solutions sur mesure & plateformes métier',
    ],
  },
  {
    id: 'design',
    icon: <Palette size={28} />,
    title: 'Design UI/UX & Branding',
    subtitle: 'Des interfaces qui séduisent et convertissent',
    description:
      'Le design n\'est pas une option — c\'est ce qui différencie une présence digitale médiocre d\'une expérience mémorable. Nous créons des identités visuelles cohérentes et des interfaces intuitives.',
    services: [
      'UI/UX Design (interfaces web & mobile)',
      'Design graphique',
      'Création de logo & identité visuelle',
      'Chartes graphiques & guidelines',
      'Maquettes & prototypes interactifs',
      'Branding complet',
    ],
  },
  {
    id: 'contenu-digital',
    icon: <Film size={28} />,
    title: 'Contenu Digital',
    subtitle: 'Du contenu qui capte l\'attention et raconte votre histoire',
    description:
      'Dans un monde saturé de contenu, la qualité et la cohérence font la différence. Notre équipe créative produit des contenus qui engagent, impressionnent et convertissent.',
    services: [
      'Création de visuels (posts, stories, bannières)',
      'Montage vidéo professionnel',
      'Motion design & animations',
      'Contenus réseaux sociaux planifiés',
      'Affiches & supports imprimés',
      'Photographe & direction artistique',
    ],
  },
  {
    id: 'marketing',
    icon: <TrendingUp size={28} />,
    title: 'Marketing Digital',
    subtitle: 'Des stratégies qui génèrent de la croissance mesurable',
    description:
      'Visibilité, engagement, conversion — nous pilotons votre présence digitale avec des stratégies data-driven adaptées à votre secteur et vos objectifs.',
    services: [
      'Community management',
      'Gestion des réseaux sociaux',
      'Publicité digitale (Meta Ads, Google Ads)',
      'SEO (référencement naturel)',
      'Email marketing & newsletters',
      'Stratégie digitale globale',
    ],
  },
  {
    id: 'support-it',
    icon: <Server size={28} />,
    title: 'Support IT',
    subtitle: 'Votre infrastructure numérique entre de bonnes mains',
    description:
      'Parce que la technologie doit être un accélérateur et non un frein, nous assurons la maintenance, la sécurité et la disponibilité de vos systèmes informatiques.',
    services: [
      'Maintenance informatique préventive & curative',
      'Support technique utilisateurs',
      'Installation & configuration réseaux',
      'Administration système',
      'Dépannage & diagnostic',
      'Sauvegarde & sécurité des données',
    ],
  },
  {
    id: 'formation',
    icon: <GraduationCap size={28} />,
    title: 'Formation & Coaching',
    subtitle: 'Montez en compétences pour piloter votre digital',
    description:
      'La meilleure technologie ne remplace pas la compétence humaine. Nous formons vos équipes et dirigeants aux outils numériques pour gagner en autonomie et efficacité.',
    services: [
      'Coaching digital personnalisé',
      'Formation aux outils numériques (Google Workspace, CMS, etc.)',
      'Formation développement web (initiation & avancé)',
      'Formation design (Figma, Canva, Adobe)',
      'Formation marketing digital',
      'Ateliers en présentiel & distanciel',
    ],
  },
]

export default function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="services-page-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            ✦ Ce que nous offrons
          </motion.span>
          <motion.h1
            id="services-page-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            Nos <span className="text-gradient-cyan">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto mb-8"
          >
            Six pôles d&apos;expertise pour couvrir l&apos;intégralité de vos besoins digitaux. Du code au contenu, du design à la formation.
          </motion.p>

          {/* Anchor nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Navigation des services"
            className="flex flex-wrap gap-2 justify-center"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-lg border border-accent-cyan/20 text-text-muted hover:text-accent-cyan hover:border-accent-cyan/60 font-mono-label transition-all duration-200 text-xs"
              >
                {s.title.split(' ')[0]}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Service sections */}
      {sections.map((section, idx) => (
        <div key={section.id}>
          <SectionDivider />
          <section
            id={section.id}
            className={`py-20 ${idx % 2 === 0 ? 'section-alt' : 'bg-bg-primary grid-bg'}`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="container mx-auto px-4 md:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 text-accent-cyan">
                    {section.icon}
                  </div>
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-2"
                  >
                    {section.title}
                  </h2>
                  <p className="text-accent-cyan font-mono-label mb-4">{section.subtitle}</p>
                  <p className="text-text-muted leading-relaxed mb-8">{section.description}</p>
                  <CTAButton href="/contact" variant="primary">
                    Demander un devis <ArrowRight size={16} />
                  </CTAButton>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass rounded-2xl p-8 border border-accent-cyan/10"
                >
                  <h3 className="font-display font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-accent-cyan" />
                    Prestations incluses
                  </h3>
                  <ul className="space-y-3">
                    {section.services.map((service) => (
                      <li key={service} className="flex items-start gap-3 text-text-muted text-sm">
                        <CheckCircle size={16} className="text-accent-cyan mt-0.5 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* CTA */}
      <SectionDivider />
      <section className="py-20 bg-bg-primary" aria-label="Appel à l'action services">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Un besoin ? <span className="text-gradient-cyan">Parlons-en.</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              Devis gratuit et sans engagement. Réponse garantie en moins de 24h.
            </p>
            <CTAButton href="/contact" variant="primary">
              Obtenir un devis gratuit <ArrowRight size={16} />
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
