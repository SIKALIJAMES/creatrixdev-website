import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  PhoneCall,
  Calendar,
  MessageCircle,
} from 'lucide-react'
import { getAllProjects, getProjectBySlug } from '@/lib/projects'
import { siteConfig, getWhatsAppUrl } from '@/../content/site'
import TestimonialBlock from '@/components/TestimonialBlock'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import FrenchOnlyNotice from '@/components/FrenchOnlyNotice'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Étude de cas introuvable',
    }
  }

  // AGENTS.md: title <= 60 chars, description <= 155 chars
  // Note: layout.tsx template ajoute déjà " | CreatrixDev", on évite donc le doublon
  const rawTitle = `${project.titre.split('—')[0].trim()} · Étude de cas`
  const title = rawTitle.length > 45 ? rawTitle.slice(0, 42) + '...' : rawTitle

  const rawDesc = project.resume
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152) + '...' : rawDesc

  const ogImage = project.images[0]
    ? `${siteConfig.url}${project.images[0]}`
    : `${siteConfig.url}/logo.png`

  const isReel = project.statut === 'reel'

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${project.slug}`,
    },
    robots: {
      index: isReel,
      follow: isReel,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/portfolio/${project.slug}`,
      siteName: siteConfig.name,
      locale: 'fr_FR',
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.titre,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Filtrer les métriques en production pour ne pas afficher de valeur non vérifiée
  const isDev = process.env.NODE_ENV !== 'production'
  const visibleMetrics = project.resultats.filter(
    (r) => isDev || (!r.valeur.includes('TODO_A_FOURNIR') && !r.preuve.includes('TODO_A_FOURNIR'))
  )

  const whatsappMessage = `Bonjour CreatrixDev, j'ai consulté votre étude de cas "${project.titre.split('—')[0].trim()}" et je souhaite échanger à propos d'un projet similaire.`

  return (
    <article className="min-h-screen bg-bg-primary pt-28 pb-20">
      {/* ═══ EN-TÊTE / BREADCRUMB ═══ */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-text-muted hover:text-blue-brand text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} /> Retour au portfolio
        </Link>
        <div className="mt-4">
          <FrenchOnlyNotice />
        </div>
      </div>

      {/* ═══ HERO SECTION ═══ */}
      <section className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            {project.statut === 'reel' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Projet réel
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-500">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Prototype
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-brand/10 border border-blue-brand/30 text-blue-electric">
              <Building2 size={12} /> {project.secteur}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-text-muted-dark">
              <Calendar size={12} /> {new Date(project.date).getFullYear()}
            </span>
          </div>

          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-6">
            {project.titre}
          </h1>

          <p className="font-mono-label text-blue-brand text-sm md:text-base mb-6">
            {project.secteur} &mdash; <span className="font-bold text-text-primary">{project.client}</span>
          </p>

          <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8">
            {project.resume}
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <CTAButton href="/contact?sujet=appel-20min" variant="primary">
              <PhoneCall size={16} /> Réserver un appel de 20 min
            </CTAButton>
            <CTAButton href={getWhatsAppUrl(whatsappMessage)} variant="outline" external>
              <MessageCircle size={16} /> Discuter de ce cas sur WhatsApp
            </CTAButton>
            {project.urlProduction && project.statut === 'reel' && (
              <a
                href={project.urlProduction}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-blue-electric transition-colors underline underline-offset-4"
              >
                Voir en production <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ═══ RÉSULTATS CHIFRÉS & PREUVES ═══ */}
      {visibleMetrics.length > 0 && (
        <section className="bg-navy-dark py-14 border-y border-white/10 mb-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8">
              <span className="font-mono-label text-blue-electric text-xs uppercase tracking-wider block mb-1">
                Indicateurs vérifiés
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Résultats mesurés & données du système
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visibleMetrics.map((res, i) => {
                const isTodo = res.valeur.includes('TODO_A_FOURNIR')
                return (
                  <div
                    key={res.label + i}
                    className="p-6 rounded-2xl bg-navy-card border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-text-muted-dark text-xs font-mono uppercase mb-2">
                        {res.label}
                      </p>
                      <p className="font-display font-bold text-3xl md:text-4xl text-blue-electric mb-3">
                        {isTodo ? (
                          <span className="text-amber-400 text-base font-normal">À valider</span>
                        ) : (
                          res.valeur
                        )}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-text-muted-dark text-xs">
                      <ShieldCheck size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{res.preuve}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CORPS DU PROJET (DÉFI & SOLUTION) ═══ */}
      <section className="container mx-auto px-4 md:px-8 mb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Problème */}
            {project.probleme && (
              <div className="p-8 md:p-10 rounded-2xl bg-bg-secondary border border-border-light">
                <span className="font-mono-label text-rose-500 text-xs uppercase tracking-wider block mb-2">
                  01 · Le Défi initial
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">
                  Le problème à résoudre
                </h2>
                <p className="text-text-muted text-base md:text-lg leading-relaxed">
                  {project.probleme}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="p-8 md:p-10 rounded-2xl bg-blue-soft/50 border border-blue-border">
                <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-2">
                  02 · La Réponse CreatrixDev
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">
                  {project.statut === 'reel' ? 'La solution déployée' : 'La solution conçue'}
                </h2>
                <p className="text-text-muted text-base md:text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Captures d'écran réelles */}
            {project.images.length > 0 && (
              <div>
                <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-2">
                  03 · En images
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-6">
                  Captures réelles de l&apos;interface
                </h2>

                <div className="space-y-8">
                  {project.images.map((img, idx) => (
                    <div
                      key={img}
                      className="rounded-2xl overflow-hidden border border-blue-border/60 bg-navy-dark shadow-xl"
                    >
                      {/* Chrome browser bar */}
                      <div className="bg-[#1a1f2e] px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="flex-1 mx-3 bg-white/10 rounded px-2.5 py-0.5 text-white/50 text-[11px] font-mono truncate">
                          {project.slug === 'sigfot'
                            ? 'sigfot.sstcameroun.com · Production'
                            : 'Tableau de bord · Prototype'}
                        </div>
                      </div>

                      <div className="relative w-full aspect-[16/9] md:aspect-[16/10] bg-navy-deep">
                        <Image
                          src={img}
                          alt={`${project.titre} - Capture ${idx + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 800px"
                          className="object-contain"
                          priority={idx === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Témoignage client */}
            <TestimonialBlock projectSlug={project.slug} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Carte Récapitulative */}
            <div className="p-6 rounded-2xl bg-bg-secondary border border-border-light sticky top-28">
              <h3 className="font-display font-bold text-lg text-text-primary mb-4 pb-3 border-b border-border-light">
                Fiche d&apos;identité du projet
              </h3>

              <div className="space-y-4 text-sm mb-6">
                <div>
                  <span className="text-text-muted text-xs block mb-0.5">Client</span>
                  <span className="font-semibold text-text-primary">{project.client}</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block mb-0.5">Secteur</span>
                  <span className="font-medium text-text-primary">{project.secteur}</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block mb-0.5">Déploiement</span>
                  {project.statut === 'reel' ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold">
                      <CheckCircle2 size={14} /> Projet réel
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-amber-500 font-semibold">
                      <CheckCircle2 size={14} /> Prototype
                    </span>
                  )}
                </div>
              </div>

              {/* Stack technique */}
              <div className="mb-6">
                <span className="text-text-muted text-xs block mb-2">Technologies & Architecture</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white border border-border-light text-text-primary shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions directes */}
              <div className="pt-4 border-t border-border-light space-y-2.5">
                <CTAButton
                  href="/contact?sujet=appel-20min"
                  variant="primary"
                  className="w-full justify-center"
                >
                  <PhoneCall size={14} /> Réserver un appel 20 min
                </CTAButton>
                <CTAButton
                  href={getWhatsAppUrl(whatsappMessage)}
                  variant="outline"
                  external
                  className="w-full justify-center"
                >
                  <MessageCircle size={14} /> Échanger sur WhatsApp
                </CTAButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ FOOTER CTA ═══ */}
      <section className="container mx-auto px-4 md:px-8 text-center pt-10">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono-label text-blue-brand mb-2 block">Passez à l&apos;action</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Un défi similaire dans votre entreprise ?
          </h2>
          <p className="text-text-muted text-base mb-8">
            Nos ingénieurs analysent votre flux de travail actuel et conçoivent un système sur mesure ou un agent intelligent adapté à votre réalité opérationnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Décrire mon projet
            </CTAButton>
            <CTAButton href={getWhatsAppUrl(whatsappMessage)} variant="secondary" external>
              WhatsApp direct
            </CTAButton>
          </div>
        </div>
      </section>
    </article>
  )
}
