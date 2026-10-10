export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  sector: string
  projectSlug: string
}

/**
 * Témoignages réels — ne publier que ceux qui ont un accord écrit du client.
 * Laisser le tableau vide jusqu'à obtention des autorisations formelles.
 */
export const testimonials: Testimonial[] = [
  // TODO_A_FOURNIR : Témoignage client SST Sarl (SIGFOT) — accord écrit requis avant publication
  // TODO_A_FOURNIR : Témoignage client Institut ISETAG — accord écrit requis avant publication
]

export function hasTestimonials(): boolean {
  return testimonials.length > 0
}
