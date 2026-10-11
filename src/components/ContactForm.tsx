'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { trackFormSubmission } from '@/lib/analytics'
import { useTranslation } from '@/context/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  website_hp?: string
}

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    setErrorMessage(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const resData = await res.json()

      if (!res.ok) {
        throw new Error(resData.error || t.contact.form.errorMessage)
      }

      setStatus('success')
      trackFormSubmission(data.subject || 'contact_general')
      reset()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage(t.contact.form.errorMessage)
      }
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-bg-primary border border-accent-cyan/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-200'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Anti-spam honeypot */}
      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="website_hp">Ne pas remplir</label>
        <input
          id="website_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website_hp')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="font-mono-label text-text-muted block mb-2">
            {t.contact.form.nameLabel}
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            className={inputClasses}
            {...register('name', { required: t.contact.form.nameRequired })}
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="font-mono-label text-text-muted block mb-2">
            {t.contact.form.emailLabel}
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            className={inputClasses}
            {...register('email', {
              required: t.contact.form.emailRequired,
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.contact.form.emailInvalid },
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
          {t.contact.form.phoneLabel}
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder={t.contact.form.phonePlaceholder}
          className={inputClasses}
          {...register('phone')}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="font-mono-label text-text-muted block mb-2">
          {t.contact.form.subjectLabel}
        </label>
        <select
          id="contact-subject"
          className={`${inputClasses} cursor-pointer`}
          {...register('subject', { required: t.contact.form.subjectRequired })}
          defaultValue=""
        >
          <option value="" disabled>{t.contact.form.subjectPlaceholder}</option>
          <option value="developpement">{t.contact.form.subjectOptions.dev}</option>
          <option value="design">{t.contact.form.subjectOptions.design}</option>
          <option value="contenu">{t.contact.form.subjectOptions.content}</option>
          <option value="marketing">{t.contact.form.subjectOptions.marketing}</option>
          <option value="support">{t.contact.form.subjectOptions.support}</option>
          <option value="formation">{t.contact.form.subjectOptions.training}</option>
          <option value="autre">{t.contact.form.subjectOptions.other}</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-red-400 text-xs">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="font-mono-label text-text-muted block mb-2">
          {t.contact.form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={t.contact.form.messagePlaceholder}
          className={`${inputClasses} resize-none`}
          {...register('message', {
            required: t.contact.form.messageRequired,
            minLength: { value: 10, message: t.contact.form.messageRequired },
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
          <><Loader2 size={18} className="animate-spin" /> {t.contact.form.sending}</>
        ) : (
          <><Send size={18} /> {t.contact.form.sendButton}</>
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
            <p className="text-sm">{t.contact.form.successMessage}</p>
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
            <p className="text-sm">{errorMessage || t.contact.form.errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
