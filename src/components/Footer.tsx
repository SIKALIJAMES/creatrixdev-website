'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Github } from 'lucide-react'
// import AnimatedCircuitLogo from './AnimatedCircuitLogo'
import SectionDivider from './SectionDivider'

const services = [
  { label: 'Développement Web & Mobile', href: '/services#developpement' },
  { label: 'Design UI/UX & Branding', href: '/services#design' },
  { label: 'Contenu Digital', href: '/services#contenu-digital' },
  { label: 'Marketing Digital', href: '/services#marketing' },
  { label: 'Support IT', href: '/services#support-it' },
  { label: 'Formation & Coaching', href: '/services#formation' },
]

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/creatrixdev?igsh=cXM3N2VhNTMyendo', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.fb.com/I/6Ip1kJRRR', label: 'Facebook' },
  { icon: Github, href: 'https://github.com/creatrixdevteam-coder', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  // Replacing Twitter with TikTok since user provided TikTok instead
  { icon: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.52 3.23-1.46 4.54-1.57 2.15-4.25 3.3-6.9 3.12-2.73-.18-5.26-1.55-6.84-3.72-1.56-2.13-2.11-4.9-1.44-7.48.66-2.52 2.45-4.63 4.81-5.74 2.37-1.12 5.14-1.25 7.64-.32v4.21c-1.13-.53-2.45-.71-3.69-.43-1.26.29-2.38 1.09-3.03 2.18-.65 1.1-.79 2.46-.38 3.65.4 1.18 1.34 2.12 2.49 2.58 1.15.45 2.48.42 3.58-.09 1.11-.51 1.94-1.48 2.27-2.67.23-.84.22-1.74.22-2.61V.02z" />
    </svg>
  ), href: 'https://www.tiktok.com/@creatrixdev?_r=1&_t=ZS-97VOWI3HOQ1', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-accent-cyan/10">
      <SectionDivider />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 relative">
                <Image src="/logo.png" alt="CreatrixDev Logo" fill className="object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-gradient-cyan">CreatrixDev</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              L&apos;art de coder l&apos;avenir. Nous transformons vos idées en solutions digitales premium.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-accent-cyan/20 flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/60 hover:bg-accent-cyan/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-text-muted hover:text-accent-cyan text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-accent-cyan text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Phone size={15} className="text-accent-cyan mt-0.5 shrink-0" />
                <span>+237 692 280 248<br />+237 676 418 976</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Mail size={15} className="text-accent-cyan mt-0.5 shrink-0" />
                <a href="mailto:creatrixdevteam@gmail.com" className="hover:text-accent-cyan transition-colors">
                  creatrixdevteam@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={15} className="text-accent-cyan mt-0.5 shrink-0" />
                <span>Douala-Cameroon, A village, lieu dit Premier entrée Cogefar</span>
              </li>
            </ul>

            <a
              href="https://wa.me/237692280248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-green-600/20 border border-green-500/30 text-green-400 rounded-lg text-sm font-medium hover:bg-green-600/30 hover:border-green-500/60 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-accent-cyan/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono-label">
            © {new Date().getFullYear()} CreatrixDev — L&apos;art de coder l&apos;avenir
          </p>
          <p className="text-text-muted text-xs">
            Tous droits réservés — Fait avec ❤️ et du code
          </p>
        </div>
      </div>
    </footer>
  )
}
