'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  index?: number
}

export default function ServiceCard({ icon, title, description, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block h-full">
        <div className="h-full relative rounded-xl border border-accent-cyan/10 bg-bg-secondary p-6 transition-all duration-300 group-hover:border-accent-cyan/40 group-hover:shadow-glow-cyan overflow-hidden">
          {/* Circuit node hover indicator */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_10px_#2DD4FF]" />

          {/* Background glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-accent-cyan/5 via-transparent to-transparent" />

          {/* Icon */}
          <div className="relative mb-5 w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Content */}
          <h3 className="font-display font-semibold text-text-primary text-lg mb-2 group-hover:text-accent-cyan transition-colors duration-200">
            {title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4">{description}</p>

          {/* Link */}
          <span className="inline-flex items-center gap-1 text-accent-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            En savoir plus <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
