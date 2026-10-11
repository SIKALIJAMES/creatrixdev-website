import React from 'react'
import { Check, Clock, Tag, AlertCircle, MessageCircle } from 'lucide-react'
import { pricingPlans, hasPricingTodos, PricingPlan } from '@/../content/pricing'
import { getWhatsAppUrl } from '@/../content/site'
import CTAButton from '@/components/CTAButton'

interface PricingSectionProps {
  summaryOnly?: boolean
  specificPlanId?: string
  className?: string
}

export default function PricingSection({
  specificPlanId,
  className = '',
}: PricingSectionProps) {
  const isDev = process.env.NODE_ENV !== 'production'
  const hasTodos = hasPricingTodos()

  // Règle AGENTS.md : Si TODO_A_FOURNIR, masqué en production
  if (hasTodos && !isDev) {
    return null
  }

  const plans = specificPlanId
    ? pricingPlans.filter((p) => p.id === specificPlanId)
    : pricingPlans

  return (
    <section className={`py-20 ${className}`} aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 md:px-8">
        {/* Encart dev si TODO_A_FOURNIR */}
        {hasTodos && isDev && (
          <div className="mb-10 max-w-4xl mx-auto p-4 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 text-amber-200 text-xs flex items-start gap-3">
            <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-mono font-semibold uppercase text-amber-400">
                Mode Développement · Section Tarifs & Formules
              </p>
              <p className="text-amber-300/80 mt-0.5">
                Cette section sera automatiquement masquée en production tant que les montants et délais contiennent <code>TODO_A_FOURNIR</code> dans <code>content/pricing.ts</code> (Règle n°1 : ne jamais inventer de prix).
              </p>
            </div>
          </div>
        )}

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-label text-blue-brand text-xs uppercase tracking-wider block mb-2">
            Investissement & Formules
          </span>
          <h2 id="pricing-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Des formules claires adaptées à votre étape
          </h2>
          <p className="text-text-muted text-base mt-3">
            Chaque projet fait l&apos;objet d&apos;un cadrage technique transparent sans frais cachés.
          </p>
        </div>

        <div className={`grid gap-8 max-w-6xl mx-auto ${plans.length === 1 ? 'max-w-xl' : 'grid-cols-1 md:grid-cols-3'}`}>
          {plans.map((plan: PricingPlan) => {
            const isTodoPrice =
              (plan.priceDisplay && plan.priceDisplay.includes('TODO_A_FOURNIR')) ||
              (plan.priceFromFcfa && plan.priceFromFcfa.includes('TODO_A_FOURNIR'))
            const isTodoDuration =
              plan.estimatedDuration && plan.estimatedDuration.includes('TODO_A_FOURNIR')
            const whatsappPlanUrl = getWhatsAppUrl(
              `Bonjour CreatrixDev, je souhaite échanger à propos de la formule "${plan.name}".`
            )

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.recommended
                    ? 'bg-navy-dark text-white border-2 border-blue-brand shadow-glow-navy md:-translate-y-2'
                    : 'bg-white border border-border-light hover:border-blue-brand/40 shadow-sm'
                }`}
              >
                {(plan.badge || plan.recommended) && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-brand text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    {plan.badge || 'Notre spécialité'}
                  </span>
                )}

                <div>
                  <h3
                    className={`font-display font-bold text-xl md:text-2xl mb-2 ${
                      plan.recommended ? 'text-white' : 'text-text-primary'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs font-mono-label mb-6 ${
                      plan.recommended ? 'text-blue-electric' : 'text-blue-brand'
                    }`}
                  >
                    Pour : {plan.target}
                  </p>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      plan.recommended ? 'text-text-muted-dark' : 'text-text-muted'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Prix & Délai */}
                  <div
                    className={`p-4 rounded-xl mb-6 ${
                      plan.recommended ? 'bg-navy-card border border-white/10' : 'bg-bg-secondary border border-border-light'
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-1.5 gap-2">
                      <span className="text-xs text-text-muted-dark font-mono flex items-center gap-1 shrink-0">
                        <Tag size={12} /> Tarif
                      </span>
                      <span
                        className={`font-display font-bold text-sm md:text-base text-right ${
                          plan.recommended ? 'text-blue-electric' : 'text-text-primary'
                        }`}
                      >
                        {isTodoPrice ? (
                          <span className="text-xs font-normal text-amber-500">Sur devis après diagnostic</span>
                        ) : (
                          plan.priceDisplay || plan.priceFromFcfa
                        )}
                      </span>
                    </div>

                    {plan.priceNote && (
                      <p className={`text-[11px] text-right mb-2 italic ${
                        plan.recommended ? 'text-text-muted-dark' : 'text-text-muted'
                      }`}>
                        {plan.priceNote}
                      </p>
                    )}

                    <div className={`flex items-baseline justify-between text-xs text-text-muted-dark font-mono pt-2 border-t ${
                      plan.recommended ? 'border-white/10' : 'border-border-light'
                    }`}>
                      <span className="flex items-center gap-1 shrink-0">
                        <Clock size={12} /> Délai moyen
                      </span>
                      <span className="text-right">
                        {isTodoDuration ? (
                          <span className="text-amber-500 font-normal">Selon périmètre</span>
                        ) : (
                          plan.estimatedDuration
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 text-sm">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className={`shrink-0 mt-0.5 ${
                            plan.recommended ? 'text-blue-electric' : 'text-blue-brand'
                          }`}
                        />
                        <span
                          className={plan.recommended ? 'text-text-muted-dark' : 'text-text-muted'}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <CTAButton
                    href={whatsappPlanUrl}
                    variant={plan.recommended ? 'primary' : 'outline'}
                    external
                    className="w-full justify-center"
                  >
                    <MessageCircle size={14} /> Demander un devis
                  </CTAButton>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
