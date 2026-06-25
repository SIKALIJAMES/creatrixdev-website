'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  external?: boolean
  className?: string
  onClick?: () => void
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all duration-300 relative overflow-hidden group'

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary hover:shadow-glow-cyan-lg hover:scale-105 active:scale-95',
    secondary:
      'bg-transparent border border-accent-cyan/40 text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/10 hover:shadow-glow-cyan',
    outline:
      'bg-transparent border border-text-muted/30 text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan',
  }

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Shimmer effect */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      {children}
    </motion.span>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    )
  }

  return <Link href={href}>{content}</Link>
}
