'use client'

import { motion } from 'framer-motion'
import {
  Code2, Palette, Film, TrendingUp, Server, GraduationCap, CheckCircle, ArrowRight,
} from 'lucide-react'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import PricingSection from '@/components/PricingSection'
import { useTranslation } from '@/context/LanguageContext'

export default function ServicesClient() {
  const { t, locale } = useTranslation()

  const sections = [
    {
      id: 'developpement',
      icon: <Code2 size={28} />,
      navLabel: t.services.nav.development,
      title: t.services.sections.dev.title,
      subtitle: t.services.sections.dev.subtitle,
      description: t.services.sections.dev.desc,
      services: t.services.sections.dev.items,
    },
    {
      id: 'design',
      icon: <Palette size={28} />,
      navLabel: t.services.nav.design,
      title: t.services.sections.design.title,
      subtitle: t.services.sections.design.subtitle,
      description: t.services.sections.design.desc,
      services: t.services.sections.design.items,
    },
    {
      id: 'contenu-digital',
      icon: <Film size={28} />,
      navLabel: t.services.nav.content,
      title: t.services.sections.content.title,
      subtitle: t.services.sections.content.subtitle,
      description: t.services.sections.content.desc,
      services: t.services.sections.content.items,
    },
    {
      id: 'marketing',
      icon: <TrendingUp size={28} />,
      navLabel: t.services.nav.marketing,
      title: t.services.sections.marketing.title,
      subtitle: t.services.sections.marketing.subtitle,
      description: t.services.sections.marketing.desc,
      services: t.services.sections.marketing.items,
    },
    {
      id: 'support-it',
      icon: <Server size={28} />,
      navLabel: t.services.nav.itSupport,
      title: t.services.sections.it.title,
      subtitle: t.services.sections.it.subtitle,
      description: t.services.sections.it.desc,
      services: t.services.sections.it.items,
    },
    {
      id: 'formation',
      icon: <GraduationCap size={28} />,
      navLabel: t.services.nav.training,
      title: t.services.sections.training.title,
      subtitle: t.services.sections.training.subtitle,
      description: t.services.sections.training.desc,
      services: t.services.sections.training.items,
    },
  ]

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
            ✦ {t.services.heroTag}
          </motion.span>
          <motion.h1
            id="services-page-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            {t.services.heroTitle} <span className="text-gradient-cyan">{t.services.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto mb-8"
          >
            {t.services.heroSubtitle}
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
                {s.navLabel}
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
                    {t.services.requestQuote} <ArrowRight size={16} />
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
                    {t.services.includedServices}
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

      {/* Formules et Tarifs */}
      <SectionDivider />
      <PricingSection />

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
              {locale === 'en' ? 'Have a project? ' : 'Un besoin ? '}
              <span className="text-gradient-cyan">
                {locale === 'en' ? "Let's talk." : 'Parlons-en.'}
              </span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              {locale === 'en'
                ? 'Free scoping and technical diagnostic. Guaranteed reply under 24 hours.'
                : 'Devis gratuit et sans engagement. Réponse garantie en moins de 24h.'}
            </p>
            <CTAButton href="/contact" variant="primary">
              {t.common.freeDiagnostic} <ArrowRight size={16} />
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
