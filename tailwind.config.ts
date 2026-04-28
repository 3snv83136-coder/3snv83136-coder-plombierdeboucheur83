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
          bleu: '#2563eb',
          'bleu-fonce': '#1e40af',
          violet: '#7c3aed',
          'violet-fonce': '#5b21b6',
          vert: '#16a34a',
          'vert-fonce': '#166534',
          orange: '#ea580c',
          'orange-fonce': '#c2410c',
          urgence: '#dc2626',
          fond: '#f8fafc',
          carte: '#ffffff',
          encre: '#0f172a',
          gris: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        borne: '0 20px 60px -15px rgba(15, 23, 42, 0.35)',
        'borne-hover': '0 30px 80px -10px rgba(15, 23, 42, 0.45)',
        cta: '0 18px 40px -12px rgba(22, 163, 74, 0.55)',
      },
      animation: {
        'slide-in-right': 'slideInRight 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in-left': 'slideInLeft 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in-up': 'fadeInUp 380ms ease-out',
        'pulse-cta': 'pulseCta 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 2.2s linear infinite',
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
          '0%, 100%': { boxShadow: '0 18px 40px -12px rgba(22, 163, 74, 0.55)' },
          '50%': { boxShadow: '0 26px 60px -8px rgba(22, 163, 74, 0.75)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
