'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Code2, Palette, Film, TrendingUp, Server, GraduationCap,
  ArrowRight, Star, Zap, Shield, Users,
} from 'lucide-react'
import AnimatedCircuitLogo from '@/components/AnimatedCircuitLogo'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'

/* ── Data ── */
const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Développement Web & Mobile',
    description: 'Sites vitrines, e-commerce, applications web et mobile sur mesure, intégrations API.',
    href: '/services#developpement',
  },
  {
    icon: <Palette size={22} />,
    title: 'Design UI/UX & Branding',
    description: 'Identité visuelle, maquettes, prototypes et expériences utilisateur mémorables.',
    href: '/services#design',
  },
  {
    icon: <Film size={22} />,
    title: 'Contenu Digital',
    description: 'Montage vidéo, motion design, visuels réseaux sociaux, affiches et bannières.',
    href: '/services#contenu-digital',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Marketing Digital',
    description: 'SEO, community management, publicité digitale et stratégie de croissance.',
    href: '/services#marketing',
  },
  {
    icon: <Server size={22} />,
    title: 'Support IT',
    description: 'Maintenance, support technique, réseaux, dépannage et configuration système.',
    href: '/services#support-it',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Formation & Coaching',
    description: 'Coaching personnalisé, formations aux outils numériques, développement et design.',
    href: '/services#formation',
  },
]

const whyUs = [
  {
    icon: <Zap size={24} />,
    title: 'Approche 360°',
    desc: 'Du code à la communication, nous couvrons tous les aspects de votre présence digitale.',
  },
  {
    icon: <Star size={24} />,
    title: 'Qualité Premium',
    desc: 'Chaque projet est traité avec une exigence de qualité haut de gamme, sans compromis.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Fiabilité & Suivi',
    desc: 'Un accompagnement continu, des délais respectés et une transparence totale à chaque étape.',
  },
  {
    icon: <Users size={24} />,
    title: 'Équipe Passionnée',
    desc: 'Des talents jeunes, créatifs et techniques, toujours à la pointe des dernières tendances.',
  },
]

const portfolioProjects = [
  {
    title: 'Projet 1', /* TODO: contenu réel à insérer */
    category: 'Développement',
    description: 'Description courte du projet réalisé.', /* TODO: contenu réel à insérer */
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format',
    liveUrl: undefined,
  },
  {
    title: 'Projet 2', /* TODO: contenu réel à insérer */
    category: 'Design',
    description: 'Description courte du projet réalisé.', /* TODO: contenu réel à insérer */
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format',
    liveUrl: undefined,
  },
  {
    title: 'Projet 3', /* TODO: contenu réel à insérer */
    category: 'Marketing',
    description: 'Description courte du projet réalisé.', /* TODO: contenu réel à insérer */
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format',
    liveUrl: undefined,
  },
]

/* ── Particle bg component ── */
function ParticleBg() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: number, duration: number}>>([])

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
      }))
    )
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-cyan rounded-full opacity-30"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

/* ── Page ── */
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <>
      {/* ━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-bg pt-20"
        aria-label="Section hero"
      >
        <ParticleBg />

        {/* Radial blur accent */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(45,212,255,0.08) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16 py-20"
        >
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono-label text-accent-cyan mb-4 inline-block"
            >
              ✦ Startup digitale premium
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-tight mb-6"
            >
              L&apos;art de coder{' '}
              <span className="text-gradient-cyan">l&apos;avenir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-text-muted text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              CreatrixDev propulse votre entreprise dans l&apos;ère digitale — développement,
              design, contenu, marketing et formation, sous un même toit d&apos;excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <CTAButton href="/contact" variant="primary">
                Démarrer un projet <ArrowRight size={16} />
              </CTAButton>
              <CTAButton
                href="https://wa.me/237692280248"
                variant="secondary"
                external
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </CTAButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex gap-8 justify-center lg:justify-start"
            >
              {[
                { value: '50+', label: 'Projets livrés' },
                { value: '6', label: 'Services' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display font-bold text-2xl text-gradient-cyan">{stat.value}</div>
                  <div className="text-text-muted text-xs font-mono-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(45,212,255,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
                aria-hidden="true"
              />
              <Image src="/logo.png" alt="CreatrixDev Logo" fill className="object-contain drop-shadow-[0_0_15px_rgba(45,212,255,0.5)]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono-label text-text-muted text-[10px]">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-accent-cyan/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━ SERVICES ━━━━━━━━━━━━━━ */}
      <SectionDivider />
      <section className="section-alt py-24" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono-label text-accent-cyan mb-3 block"
            >
              ✦ Ce que nous faisons
            </motion.span>
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              Nos <span className="text-gradient-cyan">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted mt-4 max-w-2xl mx-auto"
            >
              Une offre complète pour digitaliser, valoriser et faire croître votre entreprise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.href} {...s} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <CTAButton href="/services" variant="secondary">
              Voir tous les services <ArrowRight size={16} />
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ WHY CREATRIXDEV ━━━━━━━━━━━━━━ */}
      <SectionDivider />
      <section className="py-24 bg-bg-primary grid-bg" aria-labelledby="why-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono-label text-accent-cyan mb-3 block"
            >
              ✦ Notre différence
            </motion.span>
            <motion.h2
              id="why-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              Pourquoi <span className="text-gradient-cyan">CreatrixDev</span> ?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:shadow-glow-cyan transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-text-primary text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ PORTFOLIO APERÇU ━━━━━━━━━━━━━━ */}
      <SectionDivider />
      <section className="section-alt py-24" aria-labelledby="portfolio-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono-label text-accent-cyan mb-3 block"
            >
              ✦ Nos réalisations
            </motion.span>
            <motion.h2
              id="portfolio-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              Portfolio <span className="text-gradient-cyan">sélection</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted mt-4 max-w-xl mx-auto"
            >
              Quelques projets qui illustrent notre savoir-faire et notre créativité.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, i) => (
              <PortfolioCard key={project.title + i} {...project} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <CTAButton href="/portfolio" variant="secondary">
              Voir tout le portfolio <ArrowRight size={16} />
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ CTA FINAL ━━━━━━━━━━━━━━ */}
      <SectionDivider />
      <section className="py-24 bg-bg-primary relative overflow-hidden" aria-label="Appel à l'action">
        {/* Bg glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(45,212,255,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono-label text-accent-cyan mb-4 block">✦ Prêt à démarrer ?</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-6">
              Transformons votre vision{' '}
              <span className="text-gradient-cyan">en réalité digitale</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
              Décrivez-nous votre projet. Notre équipe revient vers vous dans les 24h avec une analyse et une proposition sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">
                Nous contacter <ArrowRight size={16} />
              </CTAButton>
              <CTAButton href="/services" variant="outline">
                Découvrir nos services
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
