'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
// import AnimatedCircuitLogo from './AnimatedCircuitLogo'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/equipe', label: 'Équipe' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-accent-cyan/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center relative">
            <Image src="/logo.png" alt="CreatrixDev Logo" fill className="object-contain" />
          </div>
          <span className="font-display font-bold text-xl text-gradient-cyan tracking-tight">
            CreatrixDev
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-medium transition-all duration-200 relative group ${
                pathname === link.href
                  ? 'text-accent-cyan'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent-cyan transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary font-display font-semibold text-sm rounded-lg hover:shadow-glow-cyan hover:scale-105 transition-all duration-300"
          >
            Démarrer un projet
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-text-primary p-2 rounded-lg hover:bg-accent-cyan/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-accent-cyan/10 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4" aria-label="Navigation mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-display font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                      pathname === link.href
                        ? 'text-accent-cyan bg-accent-cyan/10'
                        : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary font-display font-semibold text-sm rounded-lg mt-2"
                >
                  Démarrer un projet
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
