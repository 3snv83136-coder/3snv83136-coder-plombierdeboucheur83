import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/utils';
import { Footer } from '@/components/shared/Footer';
import { BoutonAppel } from '@/components/shared/BoutonAppel';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Débouchage canalisation Var 24h/7j`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'Débouchage canalisation, inspection caméra, pompage fosse septique et pompe de relevage dans tout le Var (83). Intervention rapide 24h/7j. Tarif transparent affiché avant l\'appel.',
  applicationName: SITE_NAME,
  keywords: [
    'débouchage Var',
    'plombier Var',
    'plombier Toulon',
    'inspection caméra canalisation',
    'pompage fosse septique Var',
    'pompe de relevage',
    'urgence canalisation 83',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Débouchage Var 24h/7j`,
    description:
      'En 4 clics, votre tarif s\'affiche et vous appelez. Intervention sous 1h dans tout le Var.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-dvh font-sans flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
        <BoutonAppel variante="sticky" />
      </body>
    </html>
  );
}
