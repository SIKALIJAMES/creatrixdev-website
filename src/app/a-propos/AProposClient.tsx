'use client'

import { motion } from 'framer-motion'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { ArrowRight, Target, Lightbulb, Heart, Award } from 'lucide-react'
import { useTranslation } from '@/context/LanguageContext'

const valueIcons = [
  <Target key="target" size={22} />,
  <Lightbulb key="lightbulb" size={22} />,
  <Heart key="heart" size={22} />,
  <Award key="award" size={22} />,
]

export default function AProposClient() {
  const { t } = useTranslation()

  const values = [
    { icon: valueIcons[0], title: t.about.values.v1.title, desc: t.about.values.v1.desc },
    { icon: valueIcons[1], title: t.about.values.v2.title, desc: t.about.values.v2.desc },
    { icon: valueIcons[2], title: t.about.values.v3.title, desc: t.about.values.v3.desc },
    { icon: valueIcons[3], title: t.about.values.v4.title, desc: t.about.values.v4.desc },
  ]

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
            ✦ {t.about.heroTag}
          </motion.span>
          <motion.h1
            id="apropos-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            {t.about.heroTitle} <span className="text-gradient-cyan">{t.about.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t.about.heroSubtitle}
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
              <span className="font-mono-label text-accent-cyan mb-3 block">{t.about.visionTag}</span>
              <h2 id="vision-heading" className="font-display font-bold text-3xl text-text-primary mb-6">
                {t.about.visionTitle} <span className="text-gradient-cyan">{t.about.visionHighlight}</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                {t.about.visionDesc}
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
              <span className="font-mono-label text-accent-cyan mb-3 block">{t.about.missionTag}</span>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-4">
                {t.about.missionTitle} <span className="text-gradient-cyan">{t.about.missionHighlight}</span>
              </h3>
              <p className="text-text-muted leading-relaxed">
                {t.about.missionDesc}
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
            <span className="font-mono-label text-accent-cyan mb-3 block">✦ {t.about.valuesTag}</span>
            <h2 id="valeurs-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
              {t.about.valuesTitle} <span className="text-gradient-cyan">{t.about.valuesHighlight}</span>
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

      {/* CTA final */}
      <SectionDivider />
      <section className="section-alt py-20" aria-labelledby="diff-heading">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 id="diff-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
            {t.about.ctaTitle}
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-10">
            {t.about.ctaDesc}
          </p>
          <CTAButton href="/contact" variant="primary">
            {t.common.contactUs} <ArrowRight size={16} />
          </CTAButton>
        </div>
      </section>
    </>
  )
}
