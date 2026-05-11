import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/utils';
import { Footer } from '@/components/shared/Footer';
import { BoutonRappel } from '@/components/shared/BoutonRappel';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Plombier déboucheur Lyon & Rhône (69) · Débouchage canalisation 24h/7j tarif transparent`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'Plombier urgence et déboucheur à Lyon et dans tout le Rhône (69) : débouchage canalisation, inspection caméra, vidange fosse septique, pompe de relevage. Intervention 24h/7j sous 1h, tarif annoncé avant.',
  applicationName: SITE_NAME,
  keywords: [
    'plombier Lyon',
    'plombier Rhône',
    'plombier 69',
    'plombier urgence Lyon',
    'plombier 24h/24 Lyon',
    'plombier 7j/7 Lyon',
    'plombier dimanche Lyon',
    'plombier nuit Lyon',
    'plombier jour férié Lyon',
    'déboucheur Lyon',
    'déboucheur Rhône',
    'débouchage canalisation Lyon',
    'débouchage WC Lyon',
    'débouchage évier Lyon',
    'débouchage urgence Lyon',
    'camion hydrocureur Lyon',
    'hydrocureur Rhône',
    'curage canalisation Lyon',
    'curage haute pression Rhône',
    'furet électrique Lyon',
    'désengorgement canalisation Lyon',
    'dépanneur plombier Lyon',
    'dépannage plomberie Lyon',
    'dépannage plomberie Rhône',
    'SOS plombier Lyon',
    'SOS canalisation Rhône',
    'tarif plombier Lyon',
    'tarif débouchage Lyon',
    'prix débouchage canalisation Lyon',
    'devis plombier gratuit Lyon',
    'inspection caméra canalisation Lyon',
    'diagnostic vidéo canalisation Rhône',
    'recherche de fuite Lyon',
    'pompage fosse septique Rhône',
    'vidange fosse toutes eaux Lyon',
    'bac à graisses restaurant Lyon',
    'micro-station épuration Rhône',
    'pompe de relevage Lyon',
    'installation pompe relevage 69',
    'urgence canalisation Lyon',
    'intervention rapide plombier Rhône',
    'plombier Villeurbanne',
    'plombier Vénissieux',
    'plombier Saint-Priest',
    'plombier Bron',
    'plombier Caluire-et-Cuire',
    'plombier Vaulx-en-Velin',
    'plombier Meyzieu',
    'plombier Rillieux-la-Pape',
    'plombier Décines-Charpieu',
    'Métropole de Lyon',
    'Auvergne-Rhône-Alpes',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Plombier déboucheur Lyon & Rhône (69) · 24h/7j tarif transparent`,
    description:
      'Plombier dépanneur 24h/7j à Lyon et dans tout le Rhône : débouchage canalisation, hydrocureur, inspection caméra HD, vidange fosse septique, pompe de relevage. Tarif annoncé en 4 clics, intervention sous 1h.',
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
        <BoutonRappel variante="sticky" />
      </body>
    </html>
  );
}
