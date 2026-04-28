import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        borne: {
          // Primaire marine — bleu sobre, professionnel
          bleu: '#1e3a5f',
          'bleu-clair': '#2c5282',
          'bleu-fonce': '#0f2138',
          // Sarcelle — service Débouchage
          sarcelle: '#0e7490',
          'sarcelle-fonce': '#155e75',
          // Anthracite — service Inspection caméra
          anthracite: '#334155',
          'anthracite-fonce': '#1e293b',
          // Vert sapin — service Fosse septique
          vert: '#15803d',
          'vert-fonce': '#14532d',
          // Cuivre — service Pompe de relevage
          cuivre: '#9a3412',
          'cuivre-fonce': '#7c2d12',
          // CTA appel — vert profond
          appel: '#15803d',
          'appel-fonce': '#14532d',
          // Urgence — rouge sobre
          urgence: '#b91c1c',
          // Fonds & textes
          fond: '#f8fafc',
          'fond-creme': '#fafaf6',
          carte: '#ffffff',
          encre: '#0f172a',
          gris: '#475569',
          'gris-clair': '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        borne: '0 12px 32px -10px rgba(15, 23, 42, 0.18)',
        'borne-hover': '0 22px 48px -8px rgba(15, 23, 42, 0.28)',
        cta: '0 14px 28px -8px rgba(21, 128, 61, 0.35)',
      },
      animation: {
        'slide-in-right': 'slideInRight 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in-left': 'slideInLeft 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in-up': 'fadeInUp 380ms ease-out',
        'pulse-cta': 'pulseCta 2.4s ease-in-out infinite',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(48px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-48px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseCta: {
          '0%, 100%': { boxShadow: '0 14px 28px -8px rgba(21, 128, 61, 0.35)' },
          '50%': { boxShadow: '0 22px 44px -6px rgba(21, 128, 61, 0.55)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
