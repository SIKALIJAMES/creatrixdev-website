'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  image: string
  liveUrl?: string
  index?: number
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  liveUrl,
  index = 0,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden border border-accent-cyan/10 bg-bg-secondary hover:border-accent-cyan/40 hover:shadow-glow-cyan transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-bg-primary">
        <Image
          src={image}
          alt={`${title} — ${category}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono-label text-accent-cyan bg-bg-primary/80 backdrop-blur-sm border border-accent-cyan/30 px-2 py-1 rounded text-[10px]">
            {category}
          </span>
        </div>

        {/* Live link */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 bg-bg-primary/80 backdrop-blur-sm border border-accent-cyan/30 rounded-lg flex items-center justify-center text-text-muted hover:text-accent-cyan opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label={`Voir ${title} en ligne`}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
