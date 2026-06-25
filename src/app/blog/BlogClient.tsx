'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import SectionDivider from '@/components/SectionDivider'

const articles = [
  {
    slug: 'pourquoi-avoir-un-site-web-en-2025',
    title: 'Pourquoi votre entreprise a absolument besoin d\'un site web en 2025', /* TODO: contenu réel à insérer */
    excerpt: 'Dans un monde où 80% des consommateurs recherchent en ligne avant d\'acheter, ne pas avoir de site web c\'est laisser vos concurrents vous dépasser. Voici pourquoi et comment agir.', /* TODO: contenu réel à insérer */
    category: 'Stratégie',
    date: '2025-01-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format',
  },
  {
    slug: 'tendances-design-ui-ux-2025',
    title: 'Les tendances UI/UX qui domineront le web en 2025', /* TODO: contenu réel à insérer */
    excerpt: 'Glassmorphism, dark mode, micro-interactions, design génératif... Décryptage des tendances visuelles qui façonneront l\'expérience utilisateur cette année.', /* TODO: contenu réel à insérer */
    category: 'Design',
    date: '2025-01-20',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format',
  },
]

export default function BlogClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="blog-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            ✦ Savoir & expertise
          </motion.span>
          <motion.h1
            id="blog-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            Blog <span className="text-gradient-cyan">& Actualités</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Conseils, tendances et insights du digital — partagés par l&apos;équipe CreatrixDev pour vous aider à prendre de meilleures décisions.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Articles */}
      <section className="section-alt py-20" aria-label="Liste des articles">
        <div className="container mx-auto px-4 md:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {articles.map((article, i) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl overflow-hidden border border-accent-cyan/10 bg-bg-primary hover:border-accent-cyan/40 hover:shadow-glow-cyan transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-bg-secondary">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 font-mono-label text-accent-cyan bg-bg-primary/80 backdrop-blur-sm border border-accent-cyan/30 px-2 py-1 rounded text-[10px]">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-text-muted text-xs font-mono-label mb-3">
                      <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                    </div>

                    <h2 className="font-display font-semibold text-text-primary mb-3 leading-snug group-hover:text-accent-cyan transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium hover:gap-3 transition-all duration-200"
                    >
                      Lire l&apos;article <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg mb-4">
                Notre blog est en cours de lancement ! 🚀
              </p>
              <p className="text-text-muted text-sm">
                Revenez bientôt pour découvrir nos premiers articles.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA placeholder */}
      <SectionDivider />
      <section className="py-20 bg-bg-primary grid-bg" aria-labelledby="newsletter-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="newsletter-heading" className="font-display font-bold text-3xl text-text-primary mb-4">
              Restez informé·e
            </h2>
            <p className="text-text-muted max-w-lg mx-auto mb-8">
              {/* TODO: contenu réel à insérer — formulaire newsletter */}
              Abonnez-vous à notre newsletter pour recevoir nos articles, conseils et actualités directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                aria-label="Adresse email pour la newsletter"
                className="flex-1 bg-bg-secondary border border-accent-cyan/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/30 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary font-display font-semibold text-sm rounded-lg hover:shadow-glow-cyan transition-all duration-300 whitespace-nowrap">
                S&apos;abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
