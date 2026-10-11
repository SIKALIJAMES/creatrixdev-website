'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Code2, Palette, TrendingUp, ArrowRight, Star, Zap, Shield, Users,
  ExternalLink, Search, PenTool, Rocket, BarChart2,
  Monitor, Truck, ChevronRight, MapPin, CheckCircle2, Clock, PhoneCall,
} from 'lucide-react'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import { publicPortfolioProjects } from '@/data/portfolio'
import { homeStats } from '@/../content/stats'
import { getWhatsAppUrl } from '@/../content/site'
import { useTranslation } from '@/context/LanguageContext'

// Données dynamiques pilotées par LanguageContext dans HomePage


function AnimatedCounter({ value }: { value: string }) {
  const [display, setDisplay] = useState('0')
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !triggered) setTriggered(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [triggered])
  useEffect(() => {
    if (!triggered) return
    const num = parseInt(value.replace(/\D/g, ''))
    if (isNaN(num)) { setDisplay(value); return }
    const suffix = value.replace(/[\d]/g, '')
    let start = 0
    const step = Math.ceil(num / 75)
    const timer = setInterval(() => {
      start = Math.min(start + step, num)
      setDisplay(`${start}${suffix}`)
      if (start >= num) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [triggered, value])
  return <div ref={ref}>{display}</div>
}

function ParticleBg() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: number; duration: number }>>([])
  useEffect(() => {
    setParticles([...Array(18)].map(() => ({
      left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
      delay: Math.random() * 4, duration: 4 + Math.random() * 4,
    })))
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-blue-brand rounded-full opacity-20"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.05, 0.3, 0.05] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  const { t } = useTranslation()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -40])

  // ── Données dynamiques pilotées par la locale ──
  const pillars = [
    {
      num: '01',
      label: 'Build',
      title: t.home.pillars.build.title,
      description: t.home.pillars.build.desc,
      services: t.home.pillars.build.services,
      href: '/services',
      borderColor: 'border-blue-border hover:border-blue-brand/40',
      icon: <Code2 size={22} />,
    },
    {
      num: '02',
      label: 'Design',
      title: t.home.pillars.design.title,
      description: t.home.pillars.design.desc,
      services: t.home.pillars.design.services,
      href: '/services#design',
      borderColor: 'border-border-light hover:border-blue-brand/30',
      icon: <Palette size={22} />,
    },
    {
      num: '03',
      label: 'Grow',
      title: t.home.pillars.grow.title,
      description: t.home.pillars.grow.desc,
      services: t.home.pillars.grow.services,
      href: '/services#marketing',
      borderColor: 'border-border-light hover:border-blue-brand/30',
      icon: <TrendingUp size={22} />,
    },
  ]

  const steps = [
    { num: 1, icon: <Search size={26} />, title: t.home.steps.s1.title, desc: t.home.steps.s1.desc },
    { num: 2, icon: <PenTool size={26} />, title: t.home.steps.s2.title, desc: t.home.steps.s2.desc },
    { num: 3, icon: <Code2 size={26} />, title: t.home.steps.s3.title, desc: t.home.steps.s3.desc },
    { num: 4, icon: <Rocket size={26} />, title: t.home.steps.s4.title, desc: t.home.steps.s4.desc },
    { num: 5, icon: <BarChart2 size={26} />, title: t.home.steps.s5.title, desc: t.home.steps.s5.desc },
  ]

  const technologies = [
    { cat: t.home.techCategories.frontend, items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { cat: t.home.techCategories.backend, items: ['Node.js', 'FastAPI', 'Python', 'REST / GraphQL'] },
    { cat: t.home.techCategories.database, items: ['PostgreSQL', 'Supabase', 'MySQL', 'Redis'] },
    { cat: t.home.techCategories.infra, items: ['Railway', 'Vercel', 'Docker', 'GitHub Actions'] },
    { cat: t.home.techCategories.design, items: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'] },
    { cat: t.home.techCategories.mobile, items: ['React Native', 'Expo', 'Android', 'iOS'] },
  ]

  const whyUs = [
    { icon: <Zap size={20} />, title: t.home.whyItems?.speed?.title ?? 'Livraison rapide', desc: t.home.whyItems?.speed?.desc ?? 'Prototypes livrables sous 2 semaines.' },
    { icon: <Shield size={20} />, title: t.home.whyItems?.trust?.title ?? 'Transparence totale', desc: t.home.whyItems?.trust?.desc ?? 'Prix clairs, délais tenus, zéro frais caché.' },
    { icon: <Star size={20} />, title: t.home.whyItems?.quality?.title ?? 'Qualité sans compromis', desc: t.home.whyItems?.quality?.desc ?? 'Chaque livrable est testé et documenté.' },
    { icon: <Users size={20} />, title: t.home.whyItems?.support?.title ?? 'Accompagnement durable', desc: t.home.whyItems?.support?.desc ?? 'Nous restons à vos côtés bien après le lancement.' },
  ]

  const sigfotHighlights = [
    { value: '20', label: t.home.sigfotHighlights?.modules ?? 'Modules' },
    { value: '38', label: t.home.sigfotHighlights?.migrations ?? 'Migrations DB' },
    { value: '24h', label: t.home.sigfotHighlights?.support ?? 'Support' },
    { value: '1', label: t.home.sigfotHighlights?.production ?? 'Prod' },
  ]

  const projectTypes = [
    { emoji: '🖥️', label: t.home.projectTypes?.web ?? 'Applications Web & SaaS' },
    { emoji: '📱', label: t.home.projectTypes?.mobile ?? 'Apps Mobiles' },
    { emoji: '🎨', label: t.home.projectTypes?.design ?? 'Design & Branding' },
    { emoji: '⚙️', label: t.home.projectTypes?.systems ?? 'Systèmes métier sur mesure' },
    { emoji: '📣', label: t.home.projectTypes?.marketing ?? 'Marketing Digital' },
    { emoji: '🗄️', label: t.home.projectTypes?.apis ?? 'APIs & Intégrations' },
  ]

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-bg pt-20" aria-label="Section hero">
        <ParticleBg />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,102,204,0.08) 0%, transparent 70%)' }} aria-hidden="true" />

        <motion.div style={{ y: heroY }} className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-20">

          {/* LEFT — Copy */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono-label text-blue-brand mb-5 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-brand animate-pulse" />
              {t.home.heroTag}
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.05] mb-6">
              {t.home.heroTitlePart1}<br /><span className="text-gradient-cyan">{t.home.heroTitleHighlight}</span><br />{t.home.heroTitlePart2}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-text-muted text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              {t.home.heroSubtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <CTAButton href="/contact" variant="primary">{t.home.heroCtaPrimary} <ArrowRight size={16} /></CTAButton>
              <CTAButton href="/portfolio" variant="outline">{t.home.heroCtaSecondary}</CTAButton>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-blue-border/60">
              {homeStats.map((s) => (
                <div key={s.id} className="text-center lg:text-left">
                  <div className="font-display font-bold text-2xl text-gradient-cyan"><AnimatedCounter value={s.value} /></div>
                  <div className="text-text-muted text-xs font-mono-label mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Real Product Mockup (SIGFOT Dashboard) */}
          <motion.div
            style={{ y: mockupY }}
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
          >
            {/* Glow behind */}
            <div className="absolute -inset-8 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,102,204,0.18) 0%, transparent 70%)' }} aria-hidden="true" />

            {/* Browser frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-blue-border/40"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,102,204,0.15)' }}
            >
              {/* Browser chrome bar */}
              <div className="bg-[#1a1f2e] px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-3 bg-white/10 rounded-md px-3 py-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-white/50 text-[11px] font-mono truncate">{t.home.sigfotBar}</span>
                </div>
              </div>

              {/* Dashboard screenshot */}
              <div className="relative">
                <Image
                  src="/sigfot-mockup.jpg"
                  alt="SIGFOT – Système Intégré de Gestion de Flotte – Application développée par CreatrixDev"
                  width={800}
                  height={500}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 720px"
                  className="w-full object-cover"
                  priority
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#060c18]/60 to-transparent" />
              </div>
            </motion.div>

            {/* Floating badge — SIGFOT */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 md:-left-6 bg-white border border-blue-border rounded-xl px-3 py-2.5 shadow-medium flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 bg-blue-brand rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck size={17} className="text-white" />
              </div>
              <div>
                <p className="text-text-primary font-display font-semibold text-xs leading-tight">{t.home.sigfotBadge.title}</p>
                <p className="text-text-muted text-[10px]">{t.home.sigfotBadge.desc}</p>
              </div>
            </motion.div>

            {/* Floating badge — stack */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute -top-4 -right-4 md:-right-6 bg-white border border-blue-border rounded-xl px-3 py-2.5 shadow-medium z-20"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Monitor size={12} className="text-blue-brand" />
                <p className="text-blue-brand font-display font-bold text-xs">Next.js + Supabase</p>
              </div>
              <p className="text-text-muted text-[10px]">{t.common.inProduction} ✓</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="font-mono-label text-text-muted text-[10px]">{t.home.scrollHint ?? 'Défiler'}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-8 bg-gradient-to-b from-blue-brand/50 to-transparent" />
        </motion.div>
      </section>

      {/* ═══ BARRE DE CONFIANCE & PREUVE SOCIALE ═══ */}
      <section className="bg-navy-dark border-y border-white/10 py-6 relative z-20" aria-label="Garanties et confiance">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-brand/20 border border-blue-brand/40 flex items-center justify-center text-blue-electric shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-display font-semibold text-sm">{t.home.trustBasedIn}</p>
                  <p className="text-text-muted-dark text-xs">{t.home.trustBasedSub}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-white font-display font-semibold text-sm">{t.home.trustProduction}</p>
                  <p className="text-text-muted-dark text-xs">{t.home.trustProductionSub}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-white font-display font-semibold text-sm">{t.home.trustSupport}</p>
                  <p className="text-text-muted-dark text-xs">{t.home.trustSupportSub}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
              <CTAButton href="/contact?sujet=appel-20min" variant="primary" className="text-xs py-2.5 px-4">
                <PhoneCall size={14} /> {t.common.bookCall20Min}
              </CTAButton>
              <CTAButton href={getWhatsAppUrl("Bonjour CreatrixDev, je souhaite échanger à propos de mon projet.")} variant="secondary" external className="text-xs py-2.5 px-4">
                {t.common.whatsAppDirect}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE BUILD ═══ */}
      <SectionDivider />
      <section className="py-14 bg-bg-primary" aria-label="Types de projets">
        <div className="container mx-auto px-4 md:px-8">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center font-mono-label text-text-muted mb-8"
          >
            {t.home.whatWeBuildTitle}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((pt, i) => (
              <motion.span
                key={pt.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-light bg-bg-secondary text-text-muted text-sm hover:border-blue-brand/30 hover:text-blue-brand transition-all duration-300 cursor-default"
              >
                <span>{pt.emoji}</span>{pt.label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BUILD / DESIGN / GROW ═══ */}
      <SectionDivider />
      <section className="section-alt py-24" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono-label text-blue-brand mb-3 block">{t.home.pillarsTag}</motion.span>
            <motion.h2 id="services-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-display font-bold text-3xl md:text-5xl text-text-primary">
              {t.home.pillarsTitle}<br /><span className="text-gradient-cyan">{t.home.pillarsTitleHighlight}</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <Link href={p.href} className="group block h-full">
                  <div className={`h-full relative rounded-2xl border bg-gradient-to-br from-blue-soft to-white p-8 transition-all duration-300 ${p.borderColor} hover:shadow-glow-cyan overflow-hidden`}>
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-display font-bold text-5xl text-blue-brand/10 leading-none select-none">{p.num}</span>
                      <div className="w-12 h-12 rounded-xl bg-blue-brand/10 border border-blue-brand/20 flex items-center justify-center text-blue-brand group-hover:bg-blue-brand group-hover:text-white group-hover:border-blue-brand transition-all duration-300">{p.icon}</div>
                    </div>
                    <p className="font-mono-label text-blue-brand mb-2">{p.label}</p>
                    <h3 className="font-display font-bold text-2xl text-text-primary mb-3">{p.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">{p.description}</p>
                    <ul className="space-y-2 mb-6">
                      {p.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-text-muted text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-brand shrink-0" />{s}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-blue-brand text-sm font-semibold group-hover:gap-3 transition-all duration-300">{t.home.pillarsExplore ?? 'Explorer'} <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO — DARK SECTION ═══ */}
      <SectionDivider />
      <section className="py-24 bg-navy-dark relative overflow-hidden" aria-labelledby="portfolio-heading">
        <div className="absolute inset-0 grid-bg-dark opacity-60" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,102,204,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono-label text-blue-brand mb-3 block">{t.home.portfolioTag ?? 'Travaux sélectionnés'}</motion.span>
              <motion.h2 id="portfolio-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-display font-bold text-3xl md:text-5xl text-white">
                {t.home.portfolioTitlePart1 ?? 'Ce que nous'}<br /><span className="text-gradient-light">{t.home.portfolioTitleHighlight ?? 'avons construit'}</span>
              </motion.h2>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <CTAButton href="/portfolio" variant="secondary">{t.home.portfolioViewAll ?? 'Tout voir'} <ArrowRight size={16} /></CTAButton>
            </motion.div>
          </div>

          {/* FEATURED PROJECT — SIGFOT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}
            className="mb-8 group relative rounded-2xl overflow-hidden border border-white/10 bg-navy-card hover:border-blue-brand/50 transition-all duration-300 hover:shadow-glow-navy"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image
                  src={publicPortfolioProjects[0].image}
                  alt={publicPortfolioProjects[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-card/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card/90 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 tag-pill bg-blue-brand/30 border-blue-brand/50 text-blue-electric text-[10px] font-semibold">
                  ★ {t.home.portfolioFeatured ?? 'Projet phare'}
                </span>
              </div>
              {/* Content side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono-label text-blue-brand/80 text-[10px] mb-3 block">{publicPortfolioProjects[0].client}</span>
                <Link href="/portfolio/sigfot">
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 hover:text-blue-electric transition-colors">
                    {publicPortfolioProjects[0].title}
                  </h3>
                </Link>
                <p className="text-text-muted-dark text-sm leading-relaxed mb-6">{publicPortfolioProjects[0].description}</p>
                {/* Highlights */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {sigfotHighlights.map((h) => (
                    <div key={h.label} className="text-center">
                      <p className="font-display font-bold text-blue-electric text-xl">{h.value}</p>
                      <p className="text-text-muted-dark text-[10px] leading-tight mt-0.5">{h.label}</p>
                    </div>
                  ))}
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {publicPortfolioProjects[0].tags?.map((t) => (
                    <span key={t} className="tag-pill bg-white/5 border-white/15 text-text-muted-dark text-[10px]">{t}</span>
                  ))}
                </div>
                <Link href="/portfolio/sigfot" className="inline-flex items-center gap-2 text-blue-electric text-sm font-medium hover:text-blue-brand transition-colors group/link">
                  <span>{t.common.viewCaseStudy}</span>
                  <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Other projects grid — only real projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicPortfolioProjects.slice(1).map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.12 }} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-navy-card hover:border-blue-brand/50 transition-all duration-300 hover:shadow-glow-navy flex flex-col justify-between">
                <div>
                  <div className="relative h-52 overflow-hidden bg-navy-deep">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                    <span className="absolute top-3 left-3 tag-pill bg-blue-brand/20 border-blue-brand/40 text-blue-electric text-[10px]">{project.category}</span>
                  </div>
                  <div className="p-5">
                    {project.slug ? (
                      <Link href={`/portfolio/${project.slug}`}>
                        <h3 className="font-display font-semibold text-white text-base mb-2 hover:text-blue-electric transition-colors">{project.title}</h3>
                      </Link>
                    ) : (
                      <h3 className="font-display font-semibold text-white text-base mb-2">{project.title}</h3>
                    )}
                    <p className="text-text-muted-dark text-sm leading-relaxed mb-3">{project.description}</p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((t) => (
                          <span key={t} className="tag-pill bg-white/5 border-white/10 text-text-muted-dark text-[9px]">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-auto">
                  {project.slug && (
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-1 text-blue-electric text-xs font-medium hover:text-blue-brand transition-colors">
                      {t.common.viewCaseStudy} <ChevronRight size={12} />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text-muted-dark hover:text-blue-electric text-xs font-medium transition-colors ml-auto">
                      {t.home.viewOnline ?? 'Voir en ligne'} <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESSUS ═══ */}
      <SectionDivider />
      <section className="py-24 bg-bg-primary" aria-labelledby="process-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono-label text-blue-brand mb-3 block">{t.home.stepsTag}</motion.span>
            <motion.h2 id="process-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-display font-bold text-3xl md:text-5xl text-text-primary">
              {t.home.stepsTitle}
            </motion.h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-brand/30 to-transparent" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center text-center group">
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-2xl border-2 border-blue-border bg-bg-secondary flex items-center justify-center text-blue-brand group-hover:border-blue-brand group-hover:bg-blue-brand group-hover:text-white group-hover:shadow-glow-cyan transition-all duration-300">{step.icon}</div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-brand text-white text-[10px] font-bold flex items-center justify-center">{step.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-base mb-2">{step.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI CREATRIXDEV ═══ */}
      <SectionDivider />
      <section className="section-alt py-24" aria-labelledby="why-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="font-mono-label text-blue-brand mb-3 block">{t.home.whyUsTag}</span>
              <h2 id="why-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
                {t.home.whyUsTitlePart1}<br /><span className="text-gradient-cyan">{t.home.whyUsTitleHighlight}</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                {t.home.whyUsDesc1}
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                {t.home.whyUsDesc2}
              </p>
              <CTAButton href="/a-propos" variant="outline">{t.about.ourStory} <ArrowRight size={16} /></CTAButton>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-5 rounded-xl border border-border-light bg-white hover:border-blue-brand/30 hover:shadow-soft transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-lg bg-blue-soft border border-blue-border flex items-center justify-center text-blue-brand mb-4 group-hover:bg-blue-brand group-hover:text-white group-hover:border-blue-brand transition-all duration-300">{item.icon}</div>
                  <h3 className="font-display font-semibold text-text-primary text-base mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES — DARK ═══ */}
      <SectionDivider />
      <section className="py-24 bg-navy-dark relative overflow-hidden" aria-labelledby="tech-heading">
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono-label text-blue-brand mb-3 block">{t.home.stackTag}</motion.span>
            <motion.h2 id="tech-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-display font-bold text-3xl md:text-4xl text-white">
              {t.home.stackTitle} <span className="text-gradient-light">{t.home.stackHighlight}</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((group, i) => (
              <motion.div key={group.cat} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: i * 0.1 }} className="rounded-xl border border-white/10 bg-navy-card p-4 hover:border-blue-brand/40 transition-all duration-300">
                <p className="font-mono-label text-blue-brand text-[10px] mb-3">{group.cat}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-text-muted-dark text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-brand/60 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <SectionDivider />
      <section className="py-28 bg-bg-primary relative overflow-hidden" aria-label="Appel à l'action">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,102,204,0.06) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-mono-label text-blue-brand mb-4 block">{t.home.finalCtaTag}</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary mb-6 leading-tight">
              {t.home.finalCtaTitle}<br /><span className="text-gradient-cyan">{t.home.finalCtaHighlight}</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
              {t.home.finalCtaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">{t.home.heroCtaPrimary} <ArrowRight size={16} /></CTAButton>
              <CTAButton href="https://wa.me/237692280248" variant="secondary" external>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                WhatsApp direct
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
