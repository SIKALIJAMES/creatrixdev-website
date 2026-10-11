'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import SectionDivider from '@/components/SectionDivider'
import { blogPosts } from '@/data/blog'
import { getWhatsAppUrl } from '@/../content/site'
import CTAButton from '@/components/CTAButton'
import { useTranslation } from '@/context/LanguageContext'

export default function BlogClient() {
  const { t, locale } = useTranslation()
  const articles = blogPosts

  const getArticleData = (article: (typeof blogPosts)[0]) => {
    if (locale === 'en') {
      if (article.slug === 'pourquoi-avoir-un-site-web-en-2026-2027') {
        return {
          title: t.blog.posts.post1.title,
          excerpt: t.blog.posts.post1.excerpt,
          category: t.blog.posts.post1.category,
        }
      }
      if (article.slug === 'tendances-design-ui-ux-2026-2027') {
        return {
          title: t.blog.posts.post2.title,
          excerpt: t.blog.posts.post2.excerpt,
          category: t.blog.posts.post2.category,
        }
      }
    }
    return {
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden"
        aria-labelledby="blog-heading"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            {t.blog.heroTag}
          </motion.span>
          <motion.h1
            id="blog-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            {t.blog.heroTitle}{' '}
            <span className="text-gradient-cyan">{t.blog.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            {t.blog.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Articles */}
      <section className="section-alt py-20" aria-label="Liste des articles">
        <div className="container mx-auto px-4 md:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {articles.map((article, i) => {
                const data = getArticleData(article)
                const formattedDate = new Date(article.date).toLocaleDateString(
                  locale === 'en' ? 'en-US' : 'fr-FR',
                  { day: 'numeric', month: 'long', year: 'numeric' }
                )

                return (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group rounded-xl overflow-hidden border border-accent-cyan/10 bg-bg-primary hover:border-accent-cyan/40 hover:shadow-glow-cyan transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-bg-secondary">
                      <Image
                        src={article.image}
                        alt={data.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 font-mono-label text-accent-cyan bg-bg-primary/80 backdrop-blur-sm border border-accent-cyan/30 px-2 py-1 rounded text-[10px]">
                        {data.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-text-muted text-xs font-mono-label mb-3">
                        <span>{formattedDate}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {article.readTime}
                        </span>
                      </div>

                      <h2 className="font-display font-semibold text-text-primary mb-3 leading-snug group-hover:text-accent-cyan transition-colors line-clamp-2">
                        {data.title}
                      </h2>
                      <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                        {data.excerpt}
                      </p>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium hover:gap-3 transition-all duration-200"
                      >
                        {t.blog.readArticle} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg mb-4">{t.blog.emptyTitle}</p>
              <p className="text-text-muted text-sm">{t.blog.emptySubtitle}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <SectionDivider />
      <section
        className="py-20 bg-bg-primary grid-bg"
        aria-labelledby="cta-blog-heading"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              id="cta-blog-heading"
              className="font-display font-bold text-3xl text-text-primary mb-4"
            >
              {t.blog.ctaTitle}
            </h2>
            <p className="text-text-muted max-w-lg mx-auto mb-8">{t.blog.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href={getWhatsAppUrl(
                  locale === 'en'
                    ? "Hello, I read an article on your blog and would like to discuss my project."
                    : "Bonjour, j'ai lu un article sur votre blog et j'aimerais échanger avec vous."
                )}
                external
                variant="primary"
              >
                {t.blog.ctaWhatsapp}
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                {t.blog.ctaContact}
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
