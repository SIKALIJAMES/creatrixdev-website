'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PortfolioCard from '@/components/PortfolioCard'
import SectionDivider from '@/components/SectionDivider'

import { portfolioCategories, portfolioProjects } from '@/data/portfolio'

export default function PortfolioClient() {
  const categories = portfolioCategories
  const projects = portfolioProjects
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="portfolio-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            ✦ Nos réalisations
          </motion.span>
          <motion.h1
            id="portfolio-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            Notre <span className="text-gradient-cyan">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Des projets concrets, des résultats mesurables. Chaque réalisation reflète notre engagement envers l&apos;excellence.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Filter + Grid */}
      <section className="section-alt py-16" aria-label="Grille de portfolio filtrée">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12" role="group" aria-label="Filtrer par catégorie">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg font-mono-label text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary shadow-glow-cyan'
                    : 'border border-accent-cyan/20 text-text-muted hover:border-accent-cyan/50 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <PortfolioCard key={project.title + i} {...project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-16">
              Aucun projet dans cette catégorie pour l&apos;instant.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
