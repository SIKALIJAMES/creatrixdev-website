import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Palette Fond Blanc & Alternance */
        'bg-primary':    '#FFFFFF',
        'bg-secondary':  '#F8FAFC',
        'bg-subtle':     '#F1F5F9',
        
        /* Bleu Nuit & Teintes Sombres (Sections Contrastées) */
        'navy-deep':     '#061229',
        'navy-dark':     '#0B1B3D',
        'navy-card':     '#0F244E',
        'navy-border':   '#1E3A6E',

        /* Bleus de la marque (Logo & Accents) */
        'blue-brand':    '#0066CC',
        'blue-electric': '#2563EB',
        'blue-soft':     '#EFF6FF',
        'blue-border':   '#BFDBFE',

        /* Compatibilité ancien code */
        'accent-cyan':   '#0066CC',
        'accent-blue':   '#0B1B3D',
        
        /* Typographie */
        'text-primary':  '#0F172A',
        'text-muted':    '#475569',
        'text-subtle':   '#64748B',
        'text-on-dark':  '#F8FAFC',
        'text-muted-dark': '#94A3B8',

        /* Bordures */
        'border-light':  '#E2E8F0',
        'border-card':   '#E2E8F0',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
        mono:    ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'soft':        '0 2px 10px -2px rgba(11, 27, 61, 0.05)',
        'medium':      '0 8px 30px -4px rgba(11, 27, 61, 0.08)',
        'elevated':    '0 20px 40px -6px rgba(11, 27, 61, 0.12)',
        'glow-blue':   '0 4px 20px 0 rgba(0, 102, 204, 0.25)',
        'glow-navy':   '0 10px 40px -10px rgba(6, 18, 41, 0.6)',
        'glow-cyan':   '0 4px 20px 0 rgba(0, 102, 204, 0.22)',
        'glow-cyan-lg':'0 8px 32px 0 rgba(0, 102, 204, 0.30)',
      },
      animation: {
        'float-slow':   'floatSlow 6s ease-in-out infinite',
        'marquee':      'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

export default config
