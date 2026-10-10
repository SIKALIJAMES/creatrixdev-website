import React from 'react'
import { testimonials } from '@/../content/testimonials'
import { Quote, AlertCircle } from 'lucide-react'

interface TestimonialBlockProps {
  projectSlug?: string
  className?: string
}

export default function TestimonialBlock({ projectSlug, className = '' }: TestimonialBlockProps) {
  const isDev = process.env.NODE_ENV !== 'production'

  const testimonial = projectSlug
    ? testimonials.find((t) => t.projectSlug === projectSlug)
    : testimonials[0]

  if (!testimonial) {
    if (!isDev) return null

    return (
      <div className={`rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 p-5 text-amber-200/90 text-sm ${className}`}>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
          <AlertCircle size={14} />
          TODO_A_FOURNIR · Témoignage client
        </div>
        <p className="text-xs text-amber-300/70">
          En attente de l&apos;accord écrit et de la citation du client ({projectSlug || 'projet'}). Ce bloc d&apos;attente est automatiquement masqué en production.
        </p>
      </div>
    )
  }

  return (
    <div className={`relative rounded-2xl border border-white/10 bg-navy-card p-8 md:p-10 overflow-hidden shadow-glow-navy ${className}`}>
      <div className="absolute -top-4 -right-4 w-28 h-28 bg-blue-brand/10 rounded-full blur-2xl pointer-events-none" />
      <Quote size={36} className="text-blue-brand/30 mb-4" />
      <blockquote className="font-display text-lg md:text-xl text-white italic leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-brand/20 border border-blue-brand/40 flex items-center justify-center font-display font-bold text-blue-electric text-sm">
          {testimonial.author.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-display font-semibold text-white text-sm">{testimonial.author}</p>
          <p className="text-text-muted-dark text-xs">
            {testimonial.role} · <span className="text-blue-electric/90">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
