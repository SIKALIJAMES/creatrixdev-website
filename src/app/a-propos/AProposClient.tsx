'use client'

import { motion } from 'framer-motion'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { ArrowRight, Target, Lightbulb, Heart, Award } from 'lucide-react'

const values = [
  { icon: <Target size={22} />, title: 'Excellence', desc: 'Nous ne faisons pas les choses à moitié. Chaque livrable doit dépasser les attentes du client.' },
  { icon: <Lightbulb size={22} />, title: 'Innovation', desc: 'Veille technologique permanente. Nous intégrons les meilleures pratiques et outils du moment.' },
  { icon: <Heart size={22} />, title: 'Passion', desc: 'Nous aimons ce que nous faisons — et ça se voit dans chaque pixel, chaque ligne de code.' },
  { icon: <Award size={22} />, title: 'Intégrité', desc: 'Transparence totale sur les délais, les prix et les processus. Zéro mauvaise surprise.' },
]

export default function AProposClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="apropos-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            ✦ Notre histoire
          </motion.span>
          <motion.h1
            id="apropos-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            À propos de <span className="text-gradient-cyan">CreatrixDev</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {/* TODO: contenu réel à insérer */}
            Née de la conviction que chaque entreprise mérite une présence digitale à la hauteur de ses ambitions, CreatrixDev est une startup qui transforme l&apos;excellence technique en croissance tangible.
          </motion.p>
        </div>
      </section>

      {/* Vision */}
      <SectionDivider />
      <section className="section-alt py-20" aria-labelledby="vision-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono-label text-accent-cyan mb-3 block">Vision</span>
              <h2 id="vision-heading" className="font-display font-bold text-3xl text-text-primary mb-6">
                Ce que nous <span className="text-gradient-cyan">visons</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                {/* TODO: contenu réel à insérer */}
                Devenir la référence digitale de la région, reconnue pour la qualité irréprochable de ses créations et la profondeur de l&apos;impact qu&apos;elle génère pour ses clients. CreatrixDev, c&apos;est l&apos;ambition de rendre accessible à toute entreprise ce que les grandes marques mondiales ont : une présence digitale qui inspire confiance et génère de la croissance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-accent-cyan/20 p-8 glass"
            >
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-cyan animate-pulse" aria-hidden="true" />
              <span className="font-mono-label text-accent-cyan mb-3 block">Mission</span>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-4">
                Ce que nous <span className="text-gradient-cyan">faisons</span>
              </h3>
              <p className="text-text-muted leading-relaxed">
                {/* TODO: contenu réel à insérer */}
                Accompagner entrepreneurs, PME, startups et créateurs dans leur transformation digitale — en alliant créativité et technologie pour produire des solutions qui durent, qui performent et qui impressionnent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <SectionDivider />
      <section className="py-20 bg-bg-primary grid-bg" aria-labelledby="valeurs-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-accent-cyan mb-3 block">✦ Ce qui nous guide</span>
            <h2 id="valeurs-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
              Nos <span className="text-gradient-cyan">Valeurs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6 border border-accent-cyan/10 hover:border-accent-cyan/40 hover:shadow-glow-cyan transition-all duration-300 group"
              >
                <div className="w-11 h-11 mb-4 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Différenciation */}
      <SectionDivider />
      <section className="section-alt py-20" aria-labelledby="diff-heading">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <span className="font-mono-label text-accent-cyan mb-3 block">✦ Notre positionnement</span>
          <h2 id="diff-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-8">
            Ce qui nous <span className="text-gradient-cyan">distingue</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-muted text-lg leading-relaxed mb-12"
          >
            {/* TODO: contenu réel à insérer */}
            Contrairement aux freelances isolés ou aux grandes agences impersonnelles, CreatrixDev offre l&apos;agilité d&apos;une startup, la profondeur d&apos;une équipe pluridisciplinaire et l&apos;engagement d&apos;un partenaire de confiance. Chaque client est unique — et notre approche l&apos;est aussi.
          </motion.p>
          <CTAButton href="/contact" variant="primary">
            Démarrer notre collaboration <ArrowRight size={16} />
          </CTAButton>
        </div>
      </section>
    </>
  )
}
