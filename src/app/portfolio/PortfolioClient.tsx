'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star } from 'lucide-react'
import PortfolioCard from '@/components/PortfolioCard'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { portfolioCategories, publicPortfolioProjects } from '@/data/portfolio'
import { useTranslation } from '@/context/LanguageContext'

const sigfotStack = [
  'Next.js 16',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'Tailwind CSS',
  'Recharts',
  'ExcelJS',
  'jsPDF',
  'Leaflet',
]

export default function PortfolioClient() {
  const { t } = useTranslation()
  const categories = portfolioCategories
  const projects = publicPortfolioProjects
  const [activeCategory, setActiveCategory] = useState('Tous')

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'Tous':
        return t.portfolio.catAll
      case 'Developpement':
        return t.portfolio.catDev
      case 'IA et Automatisation':
        return t.portfolio.catAi
      case 'Design':
        return t.portfolio.catDesign
      case 'Contenu':
        return t.portfolio.catContent
      case 'Marketing':
        return t.portfolio.catMarketing
      default:
        return cat
    }
  }

  const sigfotMetrics = [
    { label: t.portfolio.metricModules, value: '20' },
    { label: t.portfolio.metricRoles, value: '5' },
    { label: t.portfolio.metricMigrations, value: '38' },
    { label: t.portfolio.metricTables, value: '21' },
  ]

  const sigfotPillars = [
    {
      num: '01',
      title: t.portfolio.pillar1Title,
      desc: t.portfolio.pillar1Desc,
    },
    {
      num: '02',
      title: t.portfolio.pillar2Title,
      desc: t.portfolio.pillar2Desc,
    },
    {
      num: '03',
      title: t.portfolio.pillar3Title,
      desc: t.portfolio.pillar3Desc,
    },
  ]

  const filtered =
    activeCategory === 'Tous'
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === activeCategory && !p.featured)

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden"
        aria-labelledby="portfolio-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,102,204,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-blue-brand mb-4 block"
          >
            {t.portfolio.heroTag}
          </motion.span>
          <motion.h1
            id="portfolio-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            {t.portfolio.heroTitle}{' '}
            <span className="text-gradient-cyan">{t.portfolio.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t.portfolio.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SIGFOT FEATURED CASE STUDY ═══ */}
      <section className="py-20 bg-navy-dark relative overflow-hidden" aria-label="SIGFOT">
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,102,204,0.14) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono-label text-blue-brand mb-2 block">
              {t.portfolio.featuredTag}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              {t.portfolio.caseStudyTitle}{' '}
              <span className="text-gradient-light">{t.portfolio.caseStudyHighlight}</span>
            </h2>
          </motion.div>

          {/* Main case study card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-navy-card mb-12"
            style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Screenshot */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <Image
                  src="/sigfot-mockup.jpg"
                  alt="SIGFOT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-card/70 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card/90 via-transparent to-transparent lg:hidden" />
                {/* Floating label */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-navy-dark/90 border border-white/20 rounded-xl px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-mono">
                    {t.portfolio.inProductionBadge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-blue-brand/20 border border-blue-brand/40 text-blue-electric text-[10px] font-semibold px-3 py-1.5 rounded-full">
                    <Star size={10} /> {t.portfolio.flagshipBadge}
                  </span>
                  <span className="inline-flex items-center bg-white/5 border border-white/15 text-text-muted-dark text-[10px] px-3 py-1.5 rounded-full">
                    {t.portfolio.saasDevBadge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  SIGFOT — Système Intégré de Gestion de Flotte et des Opérations de Transport
                </h3>
                <p className="font-mono-label text-blue-brand/70 text-[10px] mb-4">
                  {t.portfolio.sigfotSubtitle}
                </p>

                <div className="space-y-4 mb-6 text-sm text-text-muted-dark leading-relaxed">
                  <div>
                    <p className="text-white/60 font-mono-label text-[9px] mb-1">
                      {t.portfolio.challengeLabel}
                    </p>
                    <p>{t.portfolio.challengeDesc}</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono-label text-[9px] mb-1">
                      {t.portfolio.solutionLabel}
                    </p>
                    <p>{t.portfolio.solutionDesc}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-navy-deep border border-white/10">
                  {sigfotMetrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-display font-bold text-blue-electric text-2xl">{m.value}</p>
                      <p className="text-text-muted-dark text-[9px] leading-tight mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {sigfotStack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-text-muted-dark text-[10px] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Case Study CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/portfolio/sigfot"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-brand hover:bg-blue-brand/90 text-white font-display text-xs font-semibold shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <span>{t.portfolio.viewFullStudy}</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SIGFOT details — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sigfotPillars.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-xl border border-white/10 bg-navy-card p-6 hover:border-blue-brand/30 transition-all duration-300"
              >
                <span className="font-display font-bold text-4xl text-blue-brand/15 block mb-4 leading-none">
                  {item.num}
                </span>
                <h4 className="font-display font-semibold text-white text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-text-muted-dark text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ OTHER PROJECTS ═══ */}
      <section className="py-16 bg-bg-primary" aria-label="Autres réalisations">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono-label text-blue-brand mb-2 block"
            >
              {t.portfolio.otherTag}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              {t.portfolio.otherTitle}{' '}
              <span className="text-gradient-cyan">{t.portfolio.otherHighlight}</span>
            </motion.h2>
          </div>

          {/* Filter buttons */}
          <div
            className="flex flex-wrap gap-3 justify-center mb-12"
            role="group"
            aria-label="Filtrer par catégorie"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-mono-label text-xs transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-brand text-white shadow-glow-cyan'
                    : 'border border-blue-border/50 text-text-muted hover:border-blue-brand/60 hover:text-blue-brand bg-white'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Grid — dark navy cards */}
          <div className="bg-navy-dark rounded-2xl p-6 md:p-8 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((project, i) => (
                  <PortfolioCard key={project.title + i} {...project} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <p className="text-center text-text-muted-dark py-16">
                {t.portfolio.noProjectsFound}
              </p>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-bg-secondary" aria-label="Démarrer un projet">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono-label text-blue-brand mb-4 block">
              {t.portfolio.ctaTag}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-6">
              {t.portfolio.ctaTitle}
              <br />
              <span className="text-gradient-cyan">{t.portfolio.ctaHighlight}</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
              {t.portfolio.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">
                {t.portfolio.ctaStart} <ChevronRight size={16} />
              </CTAButton>
              <CTAButton href="https://wa.me/237692280248" variant="outline" external>
                {t.portfolio.ctaWhatsapp}
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
