import Link from 'next/link';
import { Wrench, MapPin } from 'lucide-react';
import { BoutonAppel } from '@/components/shared/BoutonAppel';
import { SITE_NAME } from '@/lib/utils';

type Props = {
  ville?: { nom: string; codePostal: string };
};

export function BorneHeader({ ville }: Props) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="container-borne flex items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group"
          aria-label="Retour à l'accueil"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-bleu text-white shadow-borne ring-1 ring-white/20 group-hover:scale-105 transition-transform">
            <Wrench className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg font-black tracking-tight text-borne-encre">
              {SITE_NAME}
            </span>
            <span className="hidden sm:flex items-center gap-1 text-xs text-borne-gris">
              <MapPin className="h-3 w-3" />
              {ville
                ? `Intervention rapide à ${ville.nom} ${ville.codePostal}`
                : 'Rhône (69) — 24h/7j sous 1h'}
            </span>
          </span>
        </Link>
        <BoutonAppel variante="header" />
      </div>
    </header>
  );
}
