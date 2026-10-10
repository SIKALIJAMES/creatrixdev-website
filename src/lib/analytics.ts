/**
 * src/lib/analytics.ts
 *
 * Gestionnaire d'analytics respectueux de la vie privée pour CreatrixDev.
 * Utilise Google Analytics si NEXT_PUBLIC_GA_ID est défini dans l'environnement.
 * En développement, affiche les événements dans la console pour validation immédiate.
 */

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void
    dataLayer?: unknown[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export function isAnalyticsEnabled(): boolean {
  return typeof window !== 'undefined' && Boolean(GA_TRACKING_ID)
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === 'undefined') return

  // En dev, journalisation explicite pour vérifier le bon déclenchement
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📊 [Analytics Event] ${eventName}:`, params)
  }

  // Envoi vers Google Analytics si configuré
  if (window.gtag && GA_TRACKING_ID) {
    window.gtag('event', eventName, params)
  }
}

// ─── ÉVÉNEMENTS SPÉCIFIQUES CREATRIXDEV ────────────────────────────────────────

/**
 * Déclenché lors d'un clic sur un lien ou bouton WhatsApp
 */
export function trackWhatsAppClick(source: string, extra?: string): void {
  trackEvent('clic_whatsapp', {
    source,
    extra: extra || 'general',
  })
}

/**
 * Déclenché lors d'un clic sur "Réserver un appel de 20 minutes"
 */
export function trackCallBookingClick(source: string): void {
  trackEvent('clic_reserver_appel', {
    source,
  })
}

/**
 * Déclenché lors de la soumission d'un formulaire de contact
 */
export function trackFormSubmission(formType: string): void {
  trackEvent('soumission_formulaire', {
    form_type: formType,
  })
}

/**
 * Déclenché lors de l'ouverture / consultation d'une étude de cas
 */
export function trackCaseStudyOpen(projectSlug: string): void {
  trackEvent('ouverture_etude_de_cas', {
    slug: projectSlug,
  })
}
