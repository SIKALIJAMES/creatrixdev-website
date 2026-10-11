'use client'

import { motion } from 'framer-motion'
import TeamMemberCard from '@/components/TeamMemberCard'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { ArrowRight } from 'lucide-react'
import { teamMembers } from '@/data/team'
import { useTranslation } from '@/context/LanguageContext'

export default function EquipeClient() {
  const { t } = useTranslation()
  const team = teamMembers

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="equipe-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            ✦ {t.team.heroTag}
          </motion.span>
          <motion.h1
            id="equipe-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            {t.team.heroTitle} <span className="text-gradient-cyan">{t.team.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t.team.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Team grid */}
      <section className="section-alt py-20" aria-label="Membres de l&apos;équipe">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <TeamMemberCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <SectionDivider />
      <section className="py-20 bg-bg-primary grid-bg" aria-labelledby="join-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="join-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
              {t.team.joinTitle} <span className="text-gradient-cyan">{t.team.joinHighlight}</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              {t.team.joinDesc}
            </p>
            <CTAButton href="/contact" variant="primary">
              {t.team.applyBtn} <ArrowRight size={16} />
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
