'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/lib/analytics'
import { useTranslation } from '@/context/LanguageContext'

export default function CookieConsentBanner() {
  const { locale } = useTranslation()
  const [consent, setConsent] = useState<'accepted' | 'refused' | 'pending' | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('creatrixdev_cookie_consent')
      if (stored === 'accepted' || stored === 'refused') {
        setConsent(stored)
      } else {
        setConsent('pending')
      }
    } catch {
      setConsent('pending')
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem('creatrixdev_cookie_consent', 'accepted')
    } catch {
      // ignore
    }
    setConsent('accepted')
  }

  const handleRefuse = () => {
    try {
      localStorage.setItem('creatrixdev_cookie_consent', 'refused')
    } catch {
      // ignore
    }
    setConsent('refused')
  }

  const isEn = locale === 'en'

  return (
    <>
      {/* N'injecte Google Analytics QUE SI le consentement explicite a été donné */}
      {consent === 'accepted' && GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* Bannière de consentement affichée uniquement si non encore décidé */}
      {consent === 'pending' && (
        <div
          role="region"
          aria-label={isEn ? 'Cookie Consent' : 'Consentement aux cookies'}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 rounded-xl bg-bg-secondary/95 backdrop-blur-md border border-accent-cyan/20 shadow-2xl text-xs space-y-3"
        >
          <p className="text-text-muted leading-relaxed">
            {isEn ? (
              <>
                We use anonymous audience measurement cookies to understand site traffic and improve our services.
                Read our{' '}
                <a href="/mentions-legales" className="text-accent-cyan underline hover:text-accent-blue">
                  Privacy Policy
                </a>
                .
              </>
            ) : (
              <>
                Nous utilisons des cookies anonymes de mesure d&apos;audience pour comprendre le trafic et améliorer nos services.
                Consultez nos{' '}
                <a href="/mentions-legales" className="text-accent-cyan underline hover:text-accent-blue">
                  mentions légales
                </a>
                .
              </>
            )}
          </p>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={handleRefuse}
              className="px-3 py-1.5 rounded-lg border border-text-muted/30 text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
            >
              {isEn ? 'Decline' : 'Refuser'}
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-accent-cyan text-bg-primary font-medium hover:bg-accent-blue transition-colors shadow-sm"
            >
              {isEn ? 'Accept' : 'Accepter'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
