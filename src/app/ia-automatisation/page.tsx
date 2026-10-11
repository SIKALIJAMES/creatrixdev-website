import type { Metadata } from 'next'
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

import { siteConfig } from '@/../content/site'

export const metadata: Metadata = {
  title: 'IA & automatisation sur mesure à Douala',
  description:
    "Chatbots WhatsApp, assistants et automatisations conçus pour les entreprises et institutions d'Afrique centrale. Diagnostic gratuit.",
  alternates: {
    canonical: `${siteConfig.url}/ia-automatisation`,
  },
  openGraph: {
    title: 'IA & automatisation sur mesure à Douala',
    description:
      "Chatbots WhatsApp, assistants et automatisations conçus pour les entreprises et institutions d'Afrique centrale. Diagnostic gratuit.",
    url: `${siteConfig.url}/ia-automatisation`,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'IA & automatisation — CreatrixDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA & automatisation sur mesure à Douala',
    description:
      "Chatbots WhatsApp, assistants et automatisations conçus pour les entreprises et institutions d'Afrique centrale. Diagnostic gratuit.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
}

const faqData = [
  {
    q: 'Faut-il changer nos outils actuels ?',
    a: 'Non. On part de ce que vous utilisez déjà (WhatsApp, fichiers Excel, boîte mail) et on automatise progressivement sans bouleverser vos habitudes de travail.',
  },
  {
    q: 'Combien ça coûte ?',
    a: 'Chaque projet est cadré après un diagnostic gratuit. Les formules sont établies sur mesure selon vos flux de travail et vos besoins opérationnels.',
  },
  {
    q: 'En combien de temps une solution est-elle déployée ?',
    a: 'Après le diagnostic initial, un premier prototype est testable avec vos équipes sous 2 à 3 semaines, suivi de la mise en service et de la formation.',
  },
  {
    q: 'Et si le chatbot ne sait pas répondre ?',
    a: "Le système passe immédiatement la main à un conseiller humain de votre équipe, depuis une console de supervision, sans rupture de canal pour l'interlocuteur.",
  },
]

export default function IaAutomatisationPage() {
  const whatsappDiagnostic = getWhatsAppUrl(
    'Bonjour CreatrixDev, je souhaite demander un diagnostic gratuit pour mon organisation (IA & Automatisation).'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
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
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-bg-primary pt-28 pb-20">
        {/* ═══ HERO SECTION ═══ */}
        <section className="container mx-auto px-4 md:px-8 pt-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono-label text-blue-brand mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-brand/10 border border-blue-brand/30">
              <Sparkles size={14} className="text-blue-electric animate-pulse" />
              IA & Systèmes Intelligents
            </span>

            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1.08] mb-6">
              L&apos;IA qui travaille pour votre organisation,{' '}
              <span className="text-gradient-cyan">pas l&apos;inverse.</span>
            </h1>

            <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Chatbots WhatsApp, assistants internes et automatisations sur mesure, pensés pour la réalité des entreprises et des institutions d&apos;Afrique centrale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href={whatsappDiagnostic} variant="primary" external>
                Demander un diagnostic gratuit
              </CTAButton>
              <CTAButton href="#preuve" variant="outline">
                Voir un exemple concret <ArrowRight size={16} />
              </CTAButton>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ CE QUE L'IA PEUT FAIRE POUR VOUS ═══ */}
        <section className="py-20 bg-bg-secondary" aria-labelledby="capabilities-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono-label text-blue-brand mb-2 block uppercase text-xs tracking-wider">
                Cas d&apos;usage concrets
              </span>
              <h2 id="capabilities-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                Ce que l&apos;IA et l&apos;automatisation font pour vous
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Carte 1 */}
              <div className="p-8 rounded-2xl bg-white border border-border-light hover:border-blue-brand/40 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    Chatbot WhatsApp
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Répond 24h/24 aux questions fréquentes (inscriptions, tarifs, horaires, suivi de dossier) et passe la main à un humain quand c&apos;est nécessaire.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-light text-xs text-text-muted-dark font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" /> WhatsApp Cloud API officielle
                </div>
              </div>

              {/* Carte 2 */}
              <div className="p-8 rounded-2xl bg-white border border-border-light hover:border-blue-brand/40 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-brand/10 border border-blue-brand/20 text-blue-brand flex items-center justify-center mb-6">
                    <Compass size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    Assistant d&apos;orientation et d&apos;information
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Guide vos étudiants, clients ou usagers vers la bonne information ou le bon service, en français ou en anglais.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-light text-xs text-text-muted-dark font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-blue-brand" /> Bilingue FR / EN & Quiz guidé
                </div>
              </div>

              {/* Carte 3 */}
              <div className="p-8 rounded-2xl bg-white border border-border-light hover:border-blue-brand/40 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center mb-6">
                    <Repeat size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    Automatisation des tâches répétitives
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Relevés, rapports, relances, saisie de données, notifications : moins d&apos;erreurs, plus de temps pour votre équipe.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-light text-xs text-text-muted-dark font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-cyan-500" /> Relances 24h & Exports comptables
                </div>
              </div>

              {/* Carte 4 */}
              <div className="p-8 rounded-2xl bg-white border border-border-light hover:border-blue-brand/40 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center mb-6">
                    <LineChart size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    Tableaux de bord et alertes
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Vos données deviennent des indicateurs clairs, avec des alertes automatiques quand quelque chose sort de l&apos;ordinaire.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-light text-xs text-text-muted-dark font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-indigo-500" /> Détection d&apos;écarts en temps réel
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ POUR QUI ═══ */}
        <section className="py-14 bg-bg-primary border-y border-border-light" aria-label="Secteurs cibles">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <span className="font-mono-label text-text-muted text-xs uppercase tracking-wider block mb-4">
              Pour qui
            </span>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {[
                '🎓 Établissements d’enseignement supérieur',
                '🚚 Transport & Logistique de flotte',
                '🏢 PME & Entreprises de services',
                '🏛️ Institutions & Administrations',
              ].map((secteur) => (
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

        {/* ═══ COMMENT ON TRAVAILLE (4 ÉTAPES) ═══ */}
        <section className="py-20 bg-bg-primary" aria-labelledby="process-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono-label text-blue-brand mb-2 block uppercase text-xs tracking-wider">
                Méthode agile & pragmatique
              </span>
              <h2 id="process-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                Comment on travaille
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  num: '01',
                  titre: 'Diagnostic gratuit',
                  desc: 'On comprend vos processus et où vous perdez du temps au quotidien.',
                },
                {
                  num: '02',
                  titre: 'Prototype',
                  desc: 'Une première version fonctionnelle à tester directement avec vos équipes.',
                },
                {
                  num: '03',
                  titre: 'Déploiement & formation',
                  desc: 'Mise en service sécurisée et prise en main par vos collaborateurs.',
                },
                {
                  num: '04',
                  titre: 'Suivi & amélioration',
                  desc: 'On mesure les résultats concrets, on ajuste et on fait évoluer la solution.',
                },
              ].map((step) => (
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

        {/* ═══ PREUVE : L'AUTOMATISATION EN PRODUCTION (id="preuve") ═══ */}
        <section id="preuve" className="py-20 bg-navy-dark text-white relative overflow-hidden" aria-labelledby="proof-heading">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="font-mono-label text-blue-electric text-xs uppercase tracking-wider block mb-2">
                Preuve sur le terrain
              </span>
              <h2 id="proof-heading" className="font-display font-bold text-3xl md:text-5xl mb-6">
                SIGFOT, une automatisation déjà utilisée en production
              </h2>

              <p className="text-text-muted-dark text-base md:text-lg leading-relaxed mb-6">
                Pour une société de transport basée à Douala (SST Sarl), nous avons conçu un outil centralisé qui contrôle automatiquement la consommation de carburant et signale les anomalies, tout en produisant des exports Excel au format exact attendu par le service de comptabilité.
              </p>

              {/* Règle d'intégrité : préciser clairement la nature des alertes */}
              <div className="p-4 rounded-xl bg-blue-brand/10 border border-blue-brand/30 text-blue-electric text-sm mb-8 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                <span>
                  <strong>Précision technique :</strong> Les alertes carburant de SIGFOT reposent sur des règles de gestion et déclencheurs automatiques stricts définis avec le client, et non sur des modèles probabilistes.
                </span>
              </div>

              {/* Chiffres vérifiés */}
              <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-navy-card border border-white/10 mb-8 text-center">
                <div>
                  <p className="font-display font-bold text-2xl md:text-3xl text-blue-electric">20</p>
                  <p className="text-text-muted-dark text-xs mt-1">Modules métier</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl md:text-3xl text-blue-electric">21</p>
                  <p className="text-text-muted-dark text-xs mt-1">Tables SQL</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl md:text-3xl text-blue-electric">38</p>
                  <p className="text-text-muted-dark text-xs mt-1">Migrations DB</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/portfolio/sigfot"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-brand hover:bg-blue-brand/90 text-white font-display text-sm font-semibold transition-all shadow-glow-cyan"
                >
                  Lire l&apos;étude de cas SIGFOT <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROTOTYPE EN COURS : ISETAG ═══ */}
        <section className="py-14 bg-bg-primary" aria-label="Prototype en cours">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-mono-label text-amber-700 text-xs uppercase tracking-wider mb-1">Prototype en cours</p>
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                  Chatbot WhatsApp pour un établissement d&apos;enseignement
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-3">
                  CreatrixDev développe un chatbot IA bilingue pour l&apos;ISETAG (Douala) : réponses 24h/24, transcription vocale, quiz d&apos;orientation et plateforme de pré-inscription. Ce système est actuellement au stade prototype et n&apos;est pas encore en déploiement de production client.
                </p>
                <Link
                  href="/portfolio/isetag-chatbot"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Voir la démo <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SCÉNARIO ILLUSTRATIF ═══ */}
        <section className="py-20 bg-bg-secondary" aria-label="Scénario illustratif">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto rounded-2xl bg-white p-8 md:p-10 border border-border-light shadow-sm">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono mb-4">
                Exemple de scénario, pas un client
              </div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-4">
                Comment un chatbot désengorge un secrétariat en période d&apos;affluence
              </h3>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                Un établissement reçoit chaque jour des dizaines de questions identiques par WhatsApp : dates d&apos;inscription, filières, frais, pièces à fournir. Un chatbot répond immédiatement aux questions courantes, collecte les informations du candidat et transmet à la scolarité uniquement les cas qui nécessitent une personne.
              </p>
              <p className="text-text-primary font-medium text-sm">
                Résultat : L&apos;équipe gagne plusieurs heures par jour, et le candidat obtient une réponse officielle et structurée en quelques secondes.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ VOS DONNÉES RESTENT LES VÔTRES ═══ */}
        <section className="py-16 bg-bg-primary" aria-label="Sécurité et confidentialité">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-blue-soft/30 border border-blue-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-brand/10 border border-blue-brand/20 text-blue-brand flex items-center justify-center shrink-0 mt-1">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                  Vos données restent les vôtres
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Les solutions que nous construisons reposent sur des bases de données relationnelles isolées. Les modalités de sécurité, de sauvegarde et d&apos;hébergement sont précisées et validées avec chaque client lors du diagnostic. Vos données métier ne servent pas à entraîner des modèles publics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FORMULE & TARIF INDICATIF ═══ */}
        <PricingSection specificPlanId="chatbot-ia" />

        <SectionDivider />

        {/* ═══ FAQ ACCORDÉON ═══ */}
        <section className="py-20 bg-bg-secondary" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono-label text-blue-brand mb-2 block uppercase text-xs tracking-wider">
                Questions fréquentes
              </span>
              <h2 id="faq-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                Foire aux questions
              </h2>
            </div>

            <FaqAccordion items={faqData} />
          </div>
        </section>

        {/* ═══ APPEL À L'ACTION FINAL ═══ */}
        <section className="py-20 bg-bg-primary text-center" aria-label="Appel à l'action final">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-4">
              Parlons de votre projet.
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Réponse garantie sous 24h par un ingénieur CreatrixDev.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={whatsappDiagnostic} variant="primary" external>
                Écrire sur WhatsApp
              </CTAButton>
              <CTAButton href="/contact?sujet=diagnostic-ia" variant="outline">
                Formulaire de contact
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
