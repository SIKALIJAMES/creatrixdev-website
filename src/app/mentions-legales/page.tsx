import type { Metadata } from 'next'
import { siteConfig } from '@/../content/site'

const SITE_URL = siteConfig.url

export const metadata: Metadata = {
  title: 'Mentions légales & Confidentialité',
  description:
    'Mentions légales, politique de confidentialité et conditions d\'utilisation du site CreatrixDev, entreprise de développement logiciel basée à Douala, Cameroun.',
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
  openGraph: {
    title: 'Mentions légales & Confidentialité',
    description:
      'Mentions légales et politique de confidentialité du site CreatrixDev.',
    url: `${SITE_URL}/mentions-legales`,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'CreatrixDev — Mentions légales & Confidentialité',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        {/* En-tête */}
        <div className="mb-12">
          <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-3">
            Informations légales
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Mentions légales & Confidentialité
          </h1>
          <p className="text-text-muted text-sm">
            Dernière mise à jour : octobre 2026
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-10 text-text-muted leading-relaxed">

          {/* ── ÉDITEUR ── */}
          <section aria-labelledby="editeur">
            <h2 id="editeur" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              1. Éditeur du site
            </h2>
            <p>
              Le présent site est édité par <strong className="text-text-primary">CreatrixDev</strong>, entreprise de développement
              logiciel basée à Douala, Cameroun.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong className="text-text-primary">Siège social :</strong> Douala, Cameroun</li>
              <li><strong className="text-text-primary">Téléphone :</strong> +237 692 280 248</li>
              <li><strong className="text-text-primary">Email :</strong> creatrixdevteam@gmail.com</li>
              <li><strong className="text-text-primary">Directeur de la publication :</strong> TENEFO SIKALI Yvan James</li>
              <li><strong className="text-text-primary">RCCM :</strong> TODO_A_FOURNIR</li>
              <li><strong className="text-text-primary">NIU :</strong> TODO_A_FOURNIR</li>
            </ul>
          </section>

          {/* ── HÉBERGEMENT ── */}
          <section aria-labelledby="hebergement">
            <h2 id="hebergement" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              2. Hébergement
            </h2>
            <p>
              Ce site est hébergé par <strong className="text-text-primary">Railway</strong> (Railway Corp., San Francisco, CA, États-Unis).
              Infrastructure cloud avec serveurs en région US-West.
            </p>
          </section>

          {/* ── DONNÉES COLLECTÉES ── */}
          <section aria-labelledby="donnees">
            <h2 id="donnees" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              3. Données personnelles collectées
            </h2>
            <p className="mb-3">
              CreatrixDev collecte uniquement les données strictement nécessaires au fonctionnement des services proposés :
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-bg-secondary border border-border-light">
                <p className="font-semibold text-text-primary text-sm mb-1">Formulaire de contact</p>
                <p className="text-sm">
                  Nom, email, téléphone (optionnel), sujet et message. Ces données sont transmises par email à
                  l&apos;équipe CreatrixDev via le service <strong>Resend</strong> et ne sont pas stockées dans une base
                  de données tierce. Elles sont utilisées exclusivement pour répondre à votre demande.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-bg-secondary border border-border-light">
                <p className="font-semibold text-text-primary text-sm mb-1">Google Analytics 4</p>
                <p className="text-sm">
                  Nous utilisons Google Analytics 4 pour mesurer l&apos;audience du site (pages vues,
                  clics sur les boutons WhatsApp et de contact, durée de session). Les données d&apos;audience sont
                  agrégées et l&apos;adresse IP est anonymisée par Google Analytics 4. Vous pouvez refuser ce suivi
                  via les paramètres de votre navigateur ou l&apos;extension Google Analytics Opt-out.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-bg-secondary border border-border-light">
                <p className="font-semibold text-text-primary text-sm mb-1">WhatsApp (redirection externe)</p>
                <p className="text-sm">
                  Les boutons WhatsApp de ce site ouvrent une conversation sur l&apos;application WhatsApp de Meta.
                  CreatrixDev ne collecte aucune donnée lors de ce clic. Les données échangées via WhatsApp
                  sont soumises à la{' '}
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-brand hover:underline">
                    politique de confidentialité de WhatsApp/Meta
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* ── DROITS ── */}
          <section aria-labelledby="droits">
            <h2 id="droits" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              4. Vos droits
            </h2>
            <p className="mb-3">
              Conformément aux réglementations applicables en matière de protection des données personnelles,
              vous disposez des droits suivants :
            </p>
            <ul className="space-y-1 text-sm list-disc list-inside">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-3 text-sm">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:creatrixdevteam@gmail.com" className="text-blue-brand hover:underline">
                creatrixdevteam@gmail.com
              </a>{' '}
              en indiquant votre nom et l&apos;objet de votre demande. Nous répondons sous 30 jours.
            </p>
          </section>

          {/* ── COOKIES ── */}
          <section aria-labelledby="cookies">
            <h2 id="cookies" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              5. Cookies
            </h2>
            <p className="mb-3">
              Ce site utilise un nombre minimal de cookies :
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-emerald-500 mt-0.5">●</span>
                <span><strong className="text-text-primary">Cookies techniques essentiels</strong> — nécessaires au fonctionnement du site (aucun consentement requis).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-brand mt-0.5">●</span>
                <span><strong className="text-text-primary">Google Analytics</strong> (optionnel) — cookie <code className="text-xs bg-bg-secondary px-1 rounded">_ga</code> et <code className="text-xs bg-bg-secondary px-1 rounded">_ga_*</code>. Durée : 13 mois. Vous pouvez les refuser dans les paramètres de votre navigateur.</span>
              </li>
            </ul>
          </section>

          {/* ── PROPRIÉTÉ INTELLECTUELLE ── */}
          <section aria-labelledby="pi">
            <h2 id="pi" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              6. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, captures d&apos;écran, logotypes, code source) est
              la propriété exclusive de CreatrixDev ou de ses partenaires, sauf mention contraire. Toute
              reproduction, distribution ou modification sans autorisation écrite préalable est interdite.
            </p>
          </section>

          {/* ── RESPONSABILITÉ ── */}
          <section aria-labelledby="responsabilite">
            <h2 id="responsabilite" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              7. Limitation de responsabilité
            </h2>
            <p>
              CreatrixDev s&apos;efforce de maintenir les informations de ce site à jour et exactes, mais ne saurait
              être tenu responsable des erreurs, omissions ou des résultats obtenus par l&apos;utilisation de ces
              informations. Les liens externes ne sont pas sous le contrôle de CreatrixDev.
            </p>
          </section>

          {/* ── CONTACT ── */}
          <section aria-labelledby="contact-legal">
            <h2 id="contact-legal" className="font-display font-bold text-xl text-text-primary mb-4 pb-2 border-b border-border-light">
              8. Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales ou à la protection de vos données,
              contactez-nous à{' '}
              <a href="mailto:creatrixdevteam@gmail.com" className="text-blue-brand hover:underline">
                creatrixdevteam@gmail.com
              </a>{' '}
              ou via notre{' '}
              <a href="/contact" className="text-blue-brand hover:underline">formulaire de contact</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
