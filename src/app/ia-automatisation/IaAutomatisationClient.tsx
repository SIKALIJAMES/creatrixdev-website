'use client'

import Link from 'next/link'
import {
  MessageSquare,
  Compass,
  Repeat,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lock,
  ChevronRight,
} from 'lucide-react'
import { getWhatsAppUrl } from '@/../content/site'
import SectionDivider from '@/components/SectionDivider'
import CTAButton from '@/components/CTAButton'
import PricingSection from '@/components/PricingSection'
import FaqAccordion from './FaqAccordion'
import { useTranslation } from '@/context/LanguageContext'

export default function IaAutomatisationClient() {
  const { t } = useTranslation()

  const whatsappDiagnostic = getWhatsAppUrl(
    'Bonjour CreatrixDev, je souhaite demander un diagnostic gratuit pour mon organisation (IA & Automatisation).'
  )

  const cards = [
    {
      icon: <MessageSquare size={24} />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
      title: t.aiAutomation.cards.c1.title,
      desc: t.aiAutomation.cards.c1.desc,
      tag: t.aiAutomation.cards.c1.tag,
      tagColor: 'text-emerald-500',
    },
    {
      icon: <Compass size={24} />,
      iconBg: 'bg-blue-brand/10 border-blue-brand/20 text-blue-brand',
      title: t.aiAutomation.cards.c2.title,
      desc: t.aiAutomation.cards.c2.desc,
      tag: t.aiAutomation.cards.c2.tag,
      tagColor: 'text-blue-brand',
    },
    {
      icon: <Repeat size={24} />,
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500',
      title: t.aiAutomation.cards.c3.title,
      desc: t.aiAutomation.cards.c3.desc,
      tag: t.aiAutomation.cards.c3.tag,
      tagColor: 'text-cyan-500',
    },
    {
      icon: <LineChart size={24} />,
      iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-500',
      title: t.aiAutomation.cards.c4.title,
      desc: t.aiAutomation.cards.c4.desc,
      tag: t.aiAutomation.cards.c4.tag,
      tagColor: 'text-indigo-500',
    },
  ]

  const methodSteps = [
    { num: '01', titre: t.aiAutomation.methodSteps.m1.title, desc: t.aiAutomation.methodSteps.m1.desc },
    { num: '02', titre: t.aiAutomation.methodSteps.m2.title, desc: t.aiAutomation.methodSteps.m2.desc },
    { num: '03', titre: t.aiAutomation.methodSteps.m3.title, desc: t.aiAutomation.methodSteps.m3.desc },
    { num: '04', titre: t.aiAutomation.methodSteps.m4.title, desc: t.aiAutomation.methodSteps.m4.desc },
  ]

  const faqData = [
    { q: t.aiAutomation.faq.q1.q, a: t.aiAutomation.faq.q1.a },
    { q: t.aiAutomation.faq.q2.q, a: t.aiAutomation.faq.q2.a },
    { q: t.aiAutomation.faq.q3.q, a: t.aiAutomation.faq.q3.a },
    { q: t.aiAutomation.faq.q4.q, a: t.aiAutomation.faq.q4.a },
  ]

  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-20">
      {/* ═══ HERO ═══ */}
      <section className="container mx-auto px-4 md:px-8 pt-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono-label text-blue-brand mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-brand/10 border border-blue-brand/30">
            <Sparkles size={14} className="text-blue-electric animate-pulse" />
            {t.aiAutomation.heroTag}
          </span>

          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1.08] mb-6">
            {t.aiAutomation.heroTitlePart1}
            <span className="text-gradient-cyan">{t.aiAutomation.heroTitleHighlight}</span>
          </h1>

          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {t.aiAutomation.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href={whatsappDiagnostic} variant="primary" external>
              {t.aiAutomation.requestDiagnostic}
            </CTAButton>
            <CTAButton href="#preuve" variant="outline">
              {t.aiAutomation.viewConcreteExample} <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CAPABILITIES ═══ */}
      <section className="py-20 bg-bg-secondary" aria-labelledby="capabilities-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-blue-brand mb-2 block uppercase text-xs tracking-wider">
              {t.aiAutomation.capabilitiesTag}
            </span>
            <h2 id="capabilities-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
              {t.aiAutomation.capabilitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {cards.map((card) => (
              <div key={card.title} className="p-8 rounded-2xl bg-white border border-border-light hover:border-blue-brand/40 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">{card.title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">{card.desc}</p>
                </div>
                <div className={`mt-6 pt-4 border-t border-border-light text-xs text-text-muted-dark font-mono flex items-center gap-1.5`}>
                  <CheckCircle2 size={13} className={card.tagColor} /> {card.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TARGET AUDIENCE ═══ */}
      <section className="py-14 bg-bg-primary border-y border-border-light" aria-label="Secteurs cibles">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="font-mono-label text-text-muted text-xs uppercase tracking-wider block mb-4">
            {t.aiAutomation.targetAudienceTag}
          </span>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {t.aiAutomation.targets.map((secteur) => (
              <span
                key={secteur}
                className="px-5 py-2.5 rounded-full bg-bg-secondary border border-border-light text-text-primary font-display text-sm font-semibold shadow-xs"
              >
                {secteur}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METHOD ═══ */}
      <section className="py-20 bg-bg-primary" aria-labelledby="process-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-blue-brand mb-2 block uppercase text-xs tracking-wider">
              {t.aiAutomation.methodologyTag}
            </span>
            <h2 id="process-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
              {t.aiAutomation.methodologyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {methodSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-bg-secondary border border-border-light relative flex flex-col justify-between"
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

      <SectionDivider />

      {/* ═══ PROOF — SIGFOT ═══ */}
      <section id="preuve" className="py-20 bg-navy-dark text-white relative overflow-hidden" aria-labelledby="proof-heading">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono-label text-blue-electric text-xs uppercase tracking-wider block mb-2">
              {t.aiAutomation.proofTag}
            </span>
            <h2 id="proof-heading" className="font-display font-bold text-3xl md:text-5xl mb-6">
              {t.aiAutomation.proofTitle}
            </h2>

            <p className="text-text-muted-dark text-base md:text-lg leading-relaxed mb-6">
              {t.aiAutomation.proofDesc}
            </p>

            <div className="p-4 rounded-xl bg-blue-brand/10 border border-blue-brand/30 text-blue-electric text-sm mb-8 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
              <span>{t.aiAutomation.proofTechnicalNote}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-navy-card border border-white/10 mb-8 text-center">
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl text-blue-electric">20</p>
                <p className="text-text-muted-dark text-xs mt-1">{t.aiAutomation.proofMetrics.modules}</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl text-blue-electric">21</p>
                <p className="text-text-muted-dark text-xs mt-1">{t.aiAutomation.proofMetrics.tables}</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl md:text-3xl text-blue-electric">38</p>
                <p className="text-text-muted-dark text-xs mt-1">{t.aiAutomation.proofMetrics.migrations}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/portfolio/sigfot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-brand hover:bg-blue-brand/90 text-white font-display text-sm font-semibold transition-all shadow-glow-cyan"
              >
                {t.aiAutomation.proofReadStudy} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROTOTYPE — ISETAG ═══ */}
      <section className="py-14 bg-bg-primary" aria-label="Prototype en cours">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center shrink-0 mt-1">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="font-mono-label text-amber-700 text-xs uppercase tracking-wider mb-1">{t.aiAutomation.prototypeBadge}</p>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                {t.aiAutomation.prototypeTitle}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                {t.aiAutomation.prototypeDesc}
              </p>
              <Link
                href="/portfolio/isetag-chatbot"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
              >
                {t.aiAutomation.prototypeCta} <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ILLUSTRATIVE SCENARIO ═══ */}
      <section className="py-20 bg-bg-secondary" aria-label="Scénario illustratif">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto rounded-2xl bg-white p-8 md:p-10 border border-border-light shadow-sm">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono mb-4">
              {t.aiAutomation.scenarioTag}
            </div>
            <h3 className="font-display font-bold text-2xl text-text-primary mb-4">
              {t.aiAutomation.scenarioTitle}
            </h3>
            <p className="text-text-muted text-base leading-relaxed mb-4">
              {t.aiAutomation.scenarioDesc}
            </p>
            <p className="text-text-primary font-medium text-sm">
              {t.aiAutomation.scenarioResult}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DATA SECURITY ═══ */}
      <section className="py-16 bg-bg-primary" aria-label="Sécurité">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-blue-soft/30 border border-blue-border flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-brand/10 border border-blue-brand/20 text-blue-brand flex items-center justify-center shrink-0 mt-1">
              <Lock size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                {t.aiAutomation.dataPrivacyTitle}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {t.aiAutomation.dataPrivacyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <PricingSection specificPlanId="chatbot-ia" />

      <SectionDivider />

      {/* ═══ FAQ ═══ */}
      <section className="py-20 bg-bg-secondary" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono-label text-blue-brand mb-2 block uppercase text-xs tracking-wider">
              {t.aiAutomation.faqTag}
            </span>
            <h2 id="faq-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
              {t.aiAutomation.faqTitle}
            </h2>
          </div>
          <FaqAccordion items={faqData} />
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 bg-bg-primary text-center" aria-label="Appel à l'action final">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-4">
            {t.aiAutomation.finalCtaTitle}
          </h2>
          <p className="text-text-muted text-lg mb-8">
            {t.aiAutomation.finalCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={whatsappDiagnostic} variant="primary" external>
              {t.common.whatsAppDirect}
            </CTAButton>
            <CTAButton href="/contact?sujet=diagnostic-ia" variant="outline">
              {t.common.contactUs}
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
