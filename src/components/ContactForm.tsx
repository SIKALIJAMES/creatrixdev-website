'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      // TODO: remplacer par l'appel réel à votre API / service d'email
      await new Promise((r) => setTimeout(r, 1500))
      console.log('Form data:', data)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-bg-primary border border-accent-cyan/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-200'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="font-mono-label text-text-muted block mb-2">
            Nom complet *
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Jean Dupont"
            className={inputClasses}
            {...register('name', { required: 'Le nom est requis' })}
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="font-mono-label text-text-muted block mb-2">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="jean@exemple.com"
            className={inputClasses}
            {...register('email', {
              required: 'L\'email est requis',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="font-mono-label text-text-muted block mb-2">
          Téléphone
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="+XX XX XX XX XX"
          className={inputClasses}
          {...register('phone')}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="font-mono-label text-text-muted block mb-2">
          Sujet *
        </label>
        <select
          id="contact-subject"
          className={`${inputClasses} cursor-pointer`}
          {...register('subject', { required: 'Choisissez un sujet' })}
          defaultValue=""
        >
          <option value="" disabled>Sélectionner un sujet</option>
          <option value="developpement">Développement Web/Mobile</option>
          <option value="design">Design & Branding</option>
          <option value="contenu">Contenu Digital</option>
          <option value="marketing">Marketing Digital</option>
          <option value="support">Support IT</option>
          <option value="formation">Formation & Coaching</option>
          <option value="autre">Autre</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-red-400 text-xs">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="font-mono-label text-text-muted block mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Décrivez votre projet, vos besoins, ou votre question…"
          className={`${inputClasses} resize-none`}
          {...register('message', {
            required: 'Le message est requis',
            minLength: { value: 20, message: 'Le message doit contenir au moins 20 caractères' },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary font-display font-semibold rounded-lg hover:shadow-glow-cyan hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === 'loading' ? (
          <><Loader2 size={18} className="animate-spin" /> Envoi en cours…</>
        ) : (
          <><Send size={18} /> Envoyer le message</>
        )}
      </button>

      {/* Status messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
          >
            <CheckCircle size={18} />
            <p className="text-sm">Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
          >
            <XCircle size={18} />
            <p className="text-sm">Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
