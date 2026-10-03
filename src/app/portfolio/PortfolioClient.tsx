'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, Star } from 'lucide-react'
import PortfolioCard from '@/components/PortfolioCard'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { portfolioCategories, portfolioProjects } from '@/data/portfolio'

const sigfotMetrics = [
  { label: 'Modules fonctionnels', value: '20' },
  { label: 'Rôles utilisateurs', value: '5' },
  { label: 'Migrations DB', value: '38' },
  { label: 'Tables SQL', value: '21' },
]

const sigfotStack = [
  'Next.js 16', 'TypeScript', 'Supabase', 'PostgreSQL',
  'Tailwind CSS', 'Recharts', 'ExcelJS', 'jsPDF', 'Leaflet',
]

export default function PortfolioClient() {
  const categories = portfolioCategories
  const projects = portfolioProjects
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? projects.filter(p => !p.featured)
    : projects.filter((p) => p.category === activeCategory && !p.featured)

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="portfolio-heading">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,102,204,0.08) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-blue-brand mb-4 block"
          >
            ✦ Travaux sélectionnés
          </motion.span>
          <motion.h1
            id="portfolio-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            Ce que nous <span className="text-gradient-cyan">avons construit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Des produits réels, développés par l&apos;équipe CreatrixDev. Des résultats concrets pour de vrais clients.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SIGFOT FEATURED CASE STUDY ═══ */}
      <section className="py-20 bg-navy-dark relative overflow-hidden" aria-label="Étude de cas SIGFOT">
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,102,204,0.14) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono-label text-blue-brand mb-2 block">Projet phare</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Une étude de cas <span className="text-gradient-light">complète</span>
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
                  alt="SIGFOT – Système Intégré de Gestion de Flotte et des Opérations de Transport"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-card/70 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card/90 via-transparent to-transparent lg:hidden" />
                {/* Floating label */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-navy-dark/90 border border-white/20 rounded-xl px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-mono">En production</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-blue-brand/20 border border-blue-brand/40 text-blue-electric text-[10px] font-semibold px-3 py-1.5 rounded-full">
                    <Star size={10} /> Projet phare
                  </span>
                  <span className="inline-flex items-center bg-white/5 border border-white/15 text-text-muted-dark text-[10px] px-3 py-1.5 rounded-full">
                    Développement SaaS
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  SIGFOT — Système Intégré de Gestion de Flotte et des Opérations de Transport
                </h3>
                <p className="font-mono-label text-blue-brand/70 text-[10px] mb-4">
                  SST Sarl · Société Solution Transport · Cameroun
                </p>

                <div className="space-y-4 mb-6 text-sm text-text-muted-dark leading-relaxed">
                  <div>
                    <p className="text-white/60 font-mono-label text-[9px] mb-1">DÉFI</p>
                    <p>SST Sarl gérait toute sa flotte de transport sur des fichiers Excel manuels. Aucune visibilité en temps réel, aucun suivi des marges, et des risques de fraude carburant non détectés.</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono-label text-[9px] mb-1">SOLUTION</p>
                    <p>CreatrixDev a développé SIGFOT : une plateforme web collaborative centralisant la gestion de la flotte, des chantiers, des trajets, du carburant, des opérations financières, des achats, des stocks, de la facturation et du suivi GPS des véhicules.</p>
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
                <div className="flex flex-wrap gap-1.5">
                  {sigfotStack.map((t) => (
                    <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-text-muted-dark text-[10px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* SIGFOT details — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                title: 'Multi-rôles temps réel',
                desc: '5 rôles distincts (Admin, Manager, Comptable, Caissière, Logisticien) avec dashboards adaptés et permissions Row Level Security côté base de données.',
              },
              {
                num: '02',
                title: 'Détection fraude carburant',
                desc: 'Trigger PostgreSQL comparant la consommation réelle vs le référentiel par camion. Alertes automatiques à +10% et +20% d\'écart pour protéger la flotte.',
              },
              {
                num: '03',
                title: 'Exports fidèles au modèle SST',
                desc: 'Bilan multi-feuilles et État Différentiel Annuel en 12 onglets générés via API Next.js + ExcelJS, reproduisant exactement le modèle Excel de la direction.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-xl border border-white/10 bg-navy-card p-6 hover:border-blue-brand/30 transition-all duration-300"
              >
                <span className="font-display font-bold text-4xl text-blue-brand/15 block mb-4 leading-none">{item.num}</span>
                <h4 className="font-display font-semibold text-white text-base mb-2">{item.title}</h4>
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
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono-label text-blue-brand mb-2 block">
              Autres réalisations
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-display font-bold text-3xl md:text-4xl text-text-primary">
              Ce que nous <span className="text-gradient-cyan">savons faire</span>
            </motion.h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12" role="group" aria-label="Filtrer par catégorie">
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
                {cat}
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
                Aucun projet dans cette catégorie pour l&apos;instant.
              </p>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-bg-secondary" aria-label="Démarrer un projet">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-mono-label text-blue-brand mb-4 block">Votre projet</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-6">
              Prêt à construire<br /><span className="text-gradient-cyan">quelque chose de réel ?</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
              Décrivez votre idée. Notre équipe vous revient dans les 24h avec une proposition concrète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">
                Démarrer un projet <ChevronRight size={16} />
              </CTAButton>
              <CTAButton href="https://wa.me/237692280248" variant="outline" external>
                WhatsApp direct
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
