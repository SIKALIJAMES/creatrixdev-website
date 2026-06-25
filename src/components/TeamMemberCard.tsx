'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

interface TeamMemberCardProps {
  name: string
  role: string
  photo: string
  bio: string
  linkedinUrl?: string
  index?: number
}

export default function TeamMemberCard({
  name,
  role,
  photo,
  bio,
  linkedinUrl,
  index = 0,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      {/* Photo */}
      <div className="relative mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-2 border-accent-cyan/20 group-hover:border-accent-cyan/70 transition-all duration-300 group-hover:shadow-glow-cyan">
        <Image
          src={photo}
          alt={`${name} — ${role}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="128px"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-accent-blue/80 rounded-full flex items-center justify-center text-white"
              aria-label={`LinkedIn de ${name}`}
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="font-display font-semibold text-text-primary text-lg group-hover:text-accent-cyan transition-colors">
        {name}
      </h3>
      <p className="font-mono-label text-accent-cyan mb-3">{role}</p>
      <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">{bio}</p>
    </motion.div>
  )
}
