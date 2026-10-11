import type { Metadata } from 'next'
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
import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'Gestion de flotte et carburant sur mesure',
  description:
    'Suivez vos camions, trajets, carburant et comptes dans un seul outil sur mesure. Découvrez SIGFOT. Diagnostic gratuit à Douala.',
  alternates: {
    canonical: `${siteConfig.url}/solutions/transport-logistique`,
  },
  openGraph: {
    title: 'Gestion de flotte et carburant sur mesure',
    description:
      'Suivez vos camions, trajets, carburant et comptes dans un seul outil sur mesure. Découvrez SIGFOT. Diagnostic gratuit à Douala.',
    url: `${siteConfig.url}/solutions/transport-logistique`,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/projects/sigfot/dashboard.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tableau de bord de gestion de flotte SIGFOT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion de flotte et carburant sur mesure',
    description:
      'Suivez vos camions, trajets, carburant et comptes dans un seul outil sur mesure. Découvrez SIGFOT. Diagnostic gratuit à Douala.',
    images: [`${siteConfig.url}/projects/sigfot/dashboard.jpg`],
  },
}

const transportFaq = [
  {
    q: 'Peut-on garder nos fichiers Excel ?',
    a: 'Oui. Les exports générés par notre système reproduisent à l’identique les modèles et classeurs de votre comptabilité, évitant toute ressaisie manuelle.',
  },
  {
    q: 'Et si notre flotte est petite ?',
    a: 'Le périmètre technique s’adapte à la taille exacte de votre flotte (de quelques véhicules à plusieurs dizaines de camions). Le devis est établi après diagnostic initial.',
  },
  {
    q: 'Combien de temps et combien ça coûte ?',
    a: 'Chaque projet fait l’objet d’un diagnostic gratuit pour modéliser vos règles exactes. Les délais moyens de livraison d’un premier prototype sont de 3 à 6 semaines selon la complexité des modules.',
  },
  {
    q: 'Nos données sont-elles sécurisées ?',
    a: 'Absolument. Vos bases PostgreSQL bénéficient d’une isolation complète, d’une gestion granulaire des rôles (RLS), de sauvegardes automatisées quotidiennes et d’un chiffrement des échanges.',
  },
]

export default function TransportLogistiquePage() {
  const whatsappDiagnostic = getWhatsAppUrl(
    'Bonjour CreatrixDev, je souhaite demander un diagnostic gratuit pour la gestion de ma flotte et de mon carburant.'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: transportFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-bg-primary pt-24 md:pt-28 pb-20">
        {/* ═══ HERO SECTION (MOBILE FIRST) ═══ */}
        <section className="container mx-auto px-4 md:px-8 pt-4 md:pt-10 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono-label text-blue-brand mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-brand/10 border border-blue-brand/30 text-xs">
              <Truck size={14} className="text-blue-electric" />
              Secteur Transport & Logistique
            </span>

            {/* Mobile First: Titre clair, percutant et promesse immédiate */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-text-primary leading-[1.1] mb-5">
              Reprenez le contrôle de votre flotte, de votre carburant{' '}
              <span className="text-gradient-cyan">et de vos comptes.</span>
            </h1>

            <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Un outil sur mesure qui remplace les fichiers Excel dispersés et signale automatiquement les anomalies. Déjà utilisé par une société de transport au Cameroun.
            </p>

            {/* Boutons d'action visibles sur premier écran mobile */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
              <CTAButton href={whatsappDiagnostic} variant="primary" external className="w-full sm:w-auto justify-center">
                <MessageCircle size={16} /> Demander un diagnostic gratuit
              </CTAButton>
              <CTAButton href="/portfolio/sigfot" variant="outline" className="w-full sm:w-auto justify-center">
                Voir l&apos;étude de cas SIGFOT <ArrowRight size={16} />
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
                Les défis du terrain
              </span>
              <h2 id="challenges-heading" className="font-display font-bold text-2xl md:text-4xl text-text-primary">
                Vous reconnaissez-vous dans ces situations ?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                {
                  icon: <Fuel size={22} className="text-rose-500" />,
                  titre: 'Carburant inexpliqué',
                  desc: 'Le carburant disparaît ou les pleins ne correspondent pas aux trajets réels sans explication immédiate.',
                },
                {
                  icon: <FileSpreadsheet size={22} className="text-amber-500" />,
                  titre: 'Excel dispersés',
                  desc: 'Vos données d’exploitation, de stocks et de dépenses sont éparpillées dans des feuilles de calcul ingérables.',
                },
                {
                  icon: <TrendingDown size={22} className="text-orange-500" />,
                  titre: 'Rentabilité invisible',
                  desc: 'Impossible de savoir, camion par camion ou chantier par chantier, ce qui rapporte vraiment et ce qui coûte trop.',
                },
                {
                  icon: <AlertTriangle size={22} className="text-red-500" />,
                  titre: 'Ressaisies comptables',
                  desc: 'Le service comptable passe des journées entières à ressaisir manuellement les bons et factures papier.',
                },
              ].map((item, i) => (
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
                Architecture adaptée
              </span>
              <h2 id="solution-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                La solution : un outil construit autour de vos règles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  titre: '1. Suivi de la flotte et des trajets',
                  desc: 'Chaque camion, chaque chauffeur et chaque mission centralisés au même endroit, avec statut en direct et historique exhaustif.',
                },
                {
                  titre: '2. Contrôle du carburant & alertes',
                  desc: 'Des règles automatiques calculent la consommation théorique vs réelle et déclenchent des alertes d’anomalie immédiates.',
                },
                {
                  titre: '3. Comptabilité et exports Excel fidèles',
                  desc: 'Les bilans et états différentiels sont générés au format exact attendu par votre comptable, sans modification de modèle.',
                },
                {
                  titre: '4. Tableaux de bord de rentabilité pour la direction',
                  desc: 'Une vue consolidée de la marge par véhicule, des coûts de maintenance et des créances clients.',
                },
              ].map((sol) => (
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
                    <CheckCircle2 size={14} /> Module fonctionnel testé en exploitation
                  </div>
                </div>
              ))}
            </div>

            {/* Modules additionnels */}
            <div className="mt-10 p-6 rounded-2xl bg-blue-soft/30 border border-blue-border max-w-5xl mx-auto">
              <p className="font-mono text-xs uppercase text-blue-brand font-semibold mb-2">
                Modules complémentaires inclus dans la suite :
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-text-primary">
                {[
                  'Chantiers & Missions',
                  'Devis & Bons d’achats',
                  'Magasin & Pièces de rechange',
                  'Facturation & Rapprochement bancaire',
                  'Fiches chauffeurs & Permis',
                ].map((mod) => (
                  <span key={mod} className="px-3 py-1.5 rounded-lg bg-white border border-border-light font-medium">
                    ✦ {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ PREUVE : SIGFOT EN CHIFFRES ═══ */}
        <section className="py-20 bg-navy-dark text-white relative overflow-hidden" aria-labelledby="sigfot-proof-heading">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <span className="font-mono-label text-blue-electric text-xs uppercase tracking-wider block mb-2">
                    Preuve concrète
                  </span>
                  <h2 id="sigfot-proof-heading" className="font-display font-bold text-3xl md:text-4xl mb-4">
                    SIGFOT en chiffres : la preuve par la production
                  </h2>
                  <p className="text-text-muted-dark text-base leading-relaxed mb-6">
                    Développé pour la société SST Sarl à Douala, SIGFOT centralise l&apos;intégralité des opérations de transport sur une plateforme web collaborative multi-rôles sécurisée.
                  </p>

                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-navy-card border border-white/10 text-center mb-6">
                    <div>
                      <p className="font-display font-bold text-2xl text-blue-electric">20</p>
                      <p className="text-text-muted-dark text-[11px] mt-0.5">Modules</p>
                    </div>
                    <div>
                      <p className="font-display font-bold text-2xl text-blue-electric">21</p>
                      <p className="text-text-muted-dark text-[11px] mt-0.5">Tables SQL</p>
                    </div>
                    <div>
                      <p className="font-display font-bold text-2xl text-blue-electric">38</p>
                      <p className="text-text-muted-dark text-[11px] mt-0.5">Migrations</p>
                    </div>
                  </div>

                  <Link
                    href="/portfolio/sigfot"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-brand hover:bg-blue-brand/90 text-white font-display text-sm font-semibold transition-all shadow-glow-cyan"
                  >
                    Consulter l&apos;étude de cas SIGFOT <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Dashboard capture */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-deep shadow-2xl relative">
                  <div className="bg-[#1a1f2e] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="text-white/40 text-[10px] font-mono ml-2">sigfot.sstcameroun.com</span>
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
                Méthodologie terrain
              </span>
              <h2 id="steps-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                Comment nous accompagnons votre flotte
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  num: '01',
                  titre: 'Diagnostic gratuit',
                  desc: 'Audit de vos fichiers Excel actuels, de vos circuits de carburant et de vos flux de bons.',
                },
                {
                  num: '02',
                  titre: 'Modélisation des règles',
                  desc: 'Paramétrage des tolérances de consommation, profils de rôles et maquettes d’exports.',
                },
                {
                  num: '03',
                  titre: 'Prototype validé',
                  desc: 'Test en conditions réelles avec vos gestionnaires de parc et vos comptables.',
                },
                {
                  num: '04',
                  titre: 'Déploiement & support',
                  desc: 'Mise en exploitation, formation des équipes sur place et suivi continu des alertes.',
                },
              ].map((step) => (
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
                Questions fréquentes
              </span>
              <h2 id="transport-faq-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                Foire aux questions
              </h2>
            </div>

            <FaqAccordion items={transportFaq} />
          </div>
        </section>

        {/* ═══ APPEL À L'ACTION FINAL ═══ */}
        <section className="py-20 bg-navy-dark text-white text-center" aria-label="Appel à l'action final">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 leading-tight">
              Votre flotte mérite mieux qu&apos;un tableau Excel.
            </h2>
            <p className="text-text-muted-dark text-lg mb-8 max-w-xl mx-auto">
              Parlons de votre organisation. Échange direct avec un ingénieur CreatrixDev sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={whatsappDiagnostic} variant="primary" external>
                <MessageCircle size={16} /> Écrire sur WhatsApp
              </CTAButton>
              <CTAButton href="/contact?sujet=flotte-transport" variant="secondary">
                Demander un diagnostic en ligne
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
