'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  image: string
  liveUrl?: string
  tags?: string[]
  client?: string
  featured?: boolean
  result?: string
  index?: number
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  liveUrl,
  tags,
  client,
  featured,
  index = 0,
}: PortfolioCardProps) {

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group col-span-full rounded-2xl overflow-hidden border border-white/10 bg-navy-card hover:border-blue-brand/50 transition-all duration-300 hover:shadow-glow-navy"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-72 lg:h-auto overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-card/80 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-card/90 via-transparent to-transparent lg:hidden" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-blue-brand/30 border border-blue-brand/50 text-blue-electric text-[10px] font-semibold px-3 py-1.5 rounded-full">
              ★ Projet phare
            </span>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="font-mono-label text-blue-brand/80 text-[10px] mb-3 block">{client ?? category}</span>
            <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 group-hover:text-blue-electric transition-colors">{title}</h3>
            <p className="text-text-muted-dark text-sm leading-relaxed mb-5">{description}</p>
            {tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-text-muted-dark text-[10px] font-medium">{t}</span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-1.5 text-blue-electric text-sm font-medium group/link cursor-pointer">
              <span>Voir l&apos;étude de cas</span>
              <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden border border-white/10 bg-navy-card hover:border-blue-brand/50 hover:shadow-glow-navy transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-navy-deep">
        <Image
          src={image}
          alt={`${title} — ${category}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-card/90 via-navy-card/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="font-mono-label text-blue-electric bg-blue-brand/20 border border-blue-brand/30 px-2.5 py-1 rounded-full text-[10px]">
            {category}
          </span>
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 bg-navy-dark/80 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-text-muted-dark hover:text-blue-electric opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label={`Voir ${title} en ligne`}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
      <div className="p-5">
        {client && <p className="font-mono-label text-blue-brand/70 text-[9px] mb-1">{client}</p>}
        <h3 className="font-display font-semibold text-white mb-2 group-hover:text-blue-electric transition-colors">{title}</h3>
        <p className="text-text-muted-dark text-sm leading-relaxed mb-3">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="inline-flex items-center px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-text-muted-dark text-[9px] font-medium">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
