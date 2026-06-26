'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import SectionDivider from '@/components/SectionDivider'

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: 'Téléphone',
    value: '+237 692 280 248',
    href: 'tel:+237692280248',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'creatrixdevteam@gmail.com',
    href: 'mailto:creatrixdevteam@gmail.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Adresse',
    value: 'Douala-Cameroon, A village, Premier entrée Cogefar',
    href: 'https://maps.google.com/?q=Douala,Village,Premier+entrée+Cogefar',
  },
  {
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    value: '+237 692 280 248',
    href: 'https://wa.me/237692280248',
  },
]

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/creatrixdev?igsh=cXM3N2VhNTMyendo', icon: 'IG' },
  { name: 'Facebook', href: 'https://www.fb.com/I/6Ip1kJRRR', icon: 'FB' },
  { name: 'GitHub', href: 'https://github.com/creatrixdevteam-coder', icon: 'GH' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@creatrixdev?_r=1&_t=ZS-97VOWI3HOQ1', icon: 'TK' },
  { name: 'LinkedIn', href: '#', icon: 'LI' },
]

export default function ContactClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient grid-bg overflow-hidden" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-label text-accent-cyan mb-4 block"
          >
            ✦ On vous répond en moins de 24h
          </motion.span>
          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6"
          >
            Parlons de votre <span className="text-gradient-cyan">projet</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-muted text-lg max-w-xl mx-auto"
          >
            Un projet en tête ? Une question ? Remplissez le formulaire ou contactez-nous directement — on adore les nouvelles idées.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Main contact section */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8">
                  Nos <span className="text-gradient-cyan">coordonnées</span>
                </h2>

                <div className="space-y-5 mb-10">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 glass rounded-xl border border-accent-cyan/10 hover:border-accent-cyan/40 hover:shadow-glow-cyan transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-mono-label text-text-muted mb-0.5">{info.label}</p>
                        <p className="text-text-primary font-medium text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp highlight */}
                <a
                  href="https://wa.me/237692280248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-600/10 border border-green-500/30 rounded-xl hover:bg-green-600/20 hover:border-green-500/60 transition-all duration-300 group mb-10"
                  aria-label="Contacter via WhatsApp"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-green-400">Réponse rapide sur WhatsApp</p>
                    <p className="text-text-muted text-sm">Disponible 7j/7 pour vos questions urgentes</p>
                  </div>
                </a>

                {/* Socials */}
                <div>
                  <p className="font-mono-label text-text-muted mb-4">Réseaux sociaux</p>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="w-10 h-10 rounded-lg border border-accent-cyan/20 flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/60 hover:bg-accent-cyan/10 transition-all duration-200 font-mono-label text-xs"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8">
                Envoyer un <span className="text-gradient-cyan">message</span>
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <SectionDivider />
      <section className="bg-bg-primary py-12" aria-label="Carte Google Maps">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl overflow-hidden border border-accent-cyan/10 h-96 bg-bg-secondary flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.290264024474!2d9.7314781!3d4.0416999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113b2e3895e73%3A0xc6cf60fa22fb70dc!2sVillage%2C%20Douala!5e0!3m2!1sen!2scm!4v1714488390888!5m2!1sen!2scm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation CreatrixDev"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
