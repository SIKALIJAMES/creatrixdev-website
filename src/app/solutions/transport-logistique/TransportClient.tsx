'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Truck,
  Fuel,
  FileSpreadsheet,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import { getWhatsAppUrl } from '@/../content/site'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import TestimonialBlock from '@/components/TestimonialBlock'
import PricingSection from '@/components/PricingSection'
import FaqAccordion from '@/app/ia-automatisation/FaqAccordion'
import { useTranslation } from '@/context/LanguageContext'

export default function TransportClient() {
  const { t, locale } = useTranslation()

  const whatsappDiagnostic = getWhatsAppUrl(
    locale === 'en'
      ? 'Hello CreatrixDev, I would like to request a free diagnostic for my fleet and fuel operations.'
      : 'Bonjour CreatrixDev, je souhaite demander un diagnostic gratuit pour la gestion de ma flotte et de mon carburant.'
  )

  const challengesList = [
    {
      icon: <Fuel size={22} className="text-rose-500" />,
      titre: t.transport.challenges.c1.title,
      desc: t.transport.challenges.c1.desc,
    },
    {
      icon: <FileSpreadsheet size={22} className="text-amber-500" />,
      titre: t.transport.challenges.c2.title,
      desc: t.transport.challenges.c2.desc,
    },
    {
      icon: <TrendingDown size={22} className="text-orange-500" />,
      titre: t.transport.challenges.c3.title,
      desc: t.transport.challenges.c3.desc,
    },
    {
      icon: <AlertTriangle size={22} className="text-red-500" />,
      titre: t.transport.challenges.c4.title,
      desc: t.transport.challenges.c4.desc,
    },
  ]

  const solutionPillars = [
    {
      titre: t.transport.solutionPillars.p1.title,
      desc: t.transport.solutionPillars.p1.desc,
    },
    {
      titre: t.transport.solutionPillars.p2.title,
      desc: t.transport.solutionPillars.p2.desc,
    },
    {
      titre: t.transport.solutionPillars.p3.title,
      desc: t.transport.solutionPillars.p3.desc,
    },
    {
      titre: t.transport.solutionPillars.p4.title,
      desc: t.transport.solutionPillars.p4.desc,
    },
  ]

  const methodSteps = [
    {
      num: '01',
      titre: t.transport.methodSteps.s1.title,
      desc: t.transport.methodSteps.s1.desc,
    },
    {
      num: '02',
      titre: t.transport.methodSteps.s2.title,
      desc: t.transport.methodSteps.s2.desc,
    },
    {
      num: '03',
      titre: t.transport.methodSteps.s3.title,
      desc: t.transport.methodSteps.s3.desc,
    },
    {
      num: '04',
      titre: t.transport.methodSteps.s4.title,
      desc: t.transport.methodSteps.s4.desc,
    },
  ]

  const faqItems = [
    { q: t.transport.faq.q1.q, a: t.transport.faq.q1.a },
    { q: t.transport.faq.q2.q, a: t.transport.faq.q2.a },
    { q: t.transport.faq.q3.q, a: t.transport.faq.q3.a },
    { q: t.transport.faq.q4.q, a: t.transport.faq.q4.a },
  ]

  return (
    <div className="min-h-screen bg-bg-primary pt-24 md:pt-28 pb-20">
      {/* ═══ HERO SECTION (MOBILE FIRST) ═══ */}
      <section className="container mx-auto px-4 md:px-8 pt-4 md:pt-10 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono-label text-blue-brand mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-brand/10 border border-blue-brand/30 text-xs">
            <Truck size={14} className="text-blue-electric" />
            {t.transport.heroTag}
          </span>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-text-primary leading-[1.1] mb-5">
            {t.transport.heroTitlePart1}{' '}
            <span className="text-gradient-cyan">{t.transport.heroTitleHighlight}</span>
          </h1>

          <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            {t.transport.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <CTAButton
              href={whatsappDiagnostic}
              variant="primary"
              external
              className="w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />{' '}
              {locale === 'en' ? 'Request a free audit' : 'Demander un diagnostic gratuit'}
            </CTAButton>
            <CTAButton
              href="/portfolio/sigfot"
              variant="outline"
              className="w-full sm:w-auto justify-center"
            >
              {locale === 'en' ? 'View SIGFOT case study' : "Voir l'étude de cas SIGFOT"}{' '}
              <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ VOUS RECONNAISSEZ-VOUS ? (4 PROBLÈMES) ═══ */}
      <section className="py-16 md:py-20 bg-bg-secondary" aria-labelledby="challenges-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono-label text-rose-500 text-xs uppercase tracking-wider block mb-2">
              {t.transport.challengesTag}
            </span>
            <h2
              id="challenges-heading"
              className="font-display font-bold text-2xl md:text-4xl text-text-primary"
            >
              {t.transport.challengesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {challengesList.map((item, i) => (
              <div
                key={item.titre}
                className="p-6 rounded-2xl bg-white border border-border-light hover:border-rose-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-bg-secondary border border-border-light flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-text-muted-dark block mb-1">0{i + 1}</span>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                    {item.titre}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LA SOLUTION : UN OUTIL SUR VOS RÈGLES ═══ */}
      <section className="py-20 bg-bg-primary" aria-labelledby="solution-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-2">
              {t.transport.solutionTag}
            </span>
            <h2
              id="solution-heading"
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              {t.transport.solutionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {solutionPillars.map((sol) => (
              <div
                key={sol.titre}
                className="p-8 rounded-2xl bg-bg-secondary border border-border-light hover:border-blue-brand/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    {sol.titre}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-xs font-mono text-emerald-600">
                  <CheckCircle2 size={14} />{' '}
                  {locale === 'en'
                    ? 'Functional module tested in operations'
                    : 'Module fonctionnel testé en exploitation'}
                </div>
              </div>
            ))}
          </div>

          {/* Modules additionnels */}
          <div className="mt-10 p-6 rounded-2xl bg-blue-soft/30 border border-blue-border max-w-5xl mx-auto">
            <p className="font-mono text-xs uppercase text-blue-brand font-semibold mb-2">
              {locale === 'en'
                ? 'Complementary modules included in suite:'
                : 'Modules complémentaires inclus dans la suite :'}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-text-primary">
              {[
                locale === 'en' ? 'Sites & Missions' : 'Chantiers & Missions',
                locale === 'en' ? 'Quotes & Purchase orders' : 'Devis & Bons d’achats',
                locale === 'en' ? 'Warehouse & Spare parts' : 'Magasin & Pièces de rechange',
                locale === 'en' ? 'Invoicing & Bank reconciliation' : 'Facturation & Rapprochement bancaire',
                locale === 'en' ? 'Driver files & Licenses' : 'Fiches chauffeurs & Permis',
              ].map((mod) => (
                <span
                  key={mod}
                  className="px-3 py-1.5 rounded-lg bg-white border border-border-light font-medium"
                >
                  ✦ {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ PREUVE : SIGFOT EN CHIFFRES ═══ */}
      <section
        className="py-20 bg-navy-dark text-white relative overflow-hidden"
        aria-labelledby="sigfot-proof-heading"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <span className="font-mono-label text-blue-electric text-xs uppercase tracking-wider block mb-2">
                  {t.transport.proofTag}
                </span>
                <h2
                  id="sigfot-proof-heading"
                  className="font-display font-bold text-3xl md:text-4xl mb-4"
                >
                  {t.transport.proofTitle}
                </h2>
                <p className="text-text-muted-dark text-base leading-relaxed mb-6">
                  {t.transport.proofDesc}
                </p>

                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-navy-card border border-white/10 text-center mb-6">
                  <div>
                    <p className="font-display font-bold text-2xl text-blue-electric">20</p>
                    <p className="text-text-muted-dark text-[11px] mt-0.5">
                      {t.transport.proofMetrics.modules}
                    </p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-blue-electric">21</p>
                    <p className="text-text-muted-dark text-[11px] mt-0.5">
                      {t.transport.proofMetrics.tables}
                    </p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-blue-electric">38</p>
                    <p className="text-text-muted-dark text-[11px] mt-0.5">
                      {t.transport.proofMetrics.migrations}
                    </p>
                  </div>
                </div>

                <Link
                  href="/portfolio/sigfot"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-brand hover:bg-blue-brand/90 text-white font-display text-sm font-semibold transition-all shadow-glow-cyan"
                >
                  {t.transport.proofCta} <ArrowRight size={16} />
                </Link>
              </div>

              {/* Dashboard capture */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-deep shadow-2xl relative">
                <div className="bg-[#1a1f2e] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="text-white/40 text-[10px] font-mono ml-2">
                    sigfot.sstcameroun.com
                  </span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/projects/sigfot/dashboard.jpg"
                    alt="Tableau de bord SIGFOT en production"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                </div>
              </div>
            </div>

            {/* Témoignage client */}
            <TestimonialBlock projectSlug="sigfot" />
          </div>
        </div>
      </section>

      {/* ═══ COMMENT ON TRAVAILLE (4 ÉTAPES) ═══ */}
      <section className="py-20 bg-bg-secondary" aria-labelledby="steps-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-2">
              {t.transport.methodologyTag}
            </span>
            <h2
              id="steps-heading"
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              {t.transport.methodologyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {methodSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-white border border-border-light relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-bold text-3xl text-blue-brand/20 mb-3 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {step.titre}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMULE SYSTÈME MÉTIER ═══ */}
      <PricingSection specificPlanId="systeme-metier" />

      <SectionDivider />

      {/* ═══ FAQ ACCORDÉON ═══ */}
      <section className="py-20 bg-bg-primary" aria-labelledby="transport-faq-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-2">
              {t.transport.faqTag}
            </span>
            <h2
              id="transport-faq-heading"
              className="font-display font-bold text-3xl md:text-4xl text-text-primary"
            >
              {t.transport.faqTitle}
            </h2>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ═══ APPEL À L'ACTION FINAL ═══ */}
      <section
        className="py-20 bg-navy-dark text-white text-center"
        aria-label="Appel à l'action final"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 leading-tight">
            {t.transport.finalCtaTitle}
          </h2>
          <p className="text-text-muted-dark text-lg mb-8 max-w-xl mx-auto">
            {t.transport.finalCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={whatsappDiagnostic} variant="primary" external>
              <MessageCircle size={16} />{' '}
              {locale === 'en' ? 'Chat on WhatsApp' : 'Écrire sur WhatsApp'}
            </CTAButton>
            <CTAButton href="/contact?sujet=flotte-transport" variant="secondary">
              {locale === 'en' ? 'Request online audit' : 'Demander un diagnostic en ligne'}
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
