import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn, formatPrixEuros } from '@/lib/utils';
import { Icone } from '@/components/shared/Icone';

type Props = {
  service: {
    slug: string;
    nom: string;
    icone: string;
    couleur: string;
    description?: string;
    prixMin?: number;
  };
  villeSlug?: string;
  className?: string;
};

const COULEUR_TO_GRADIENT: Record<string, string> = {
  '#0e7490': 'gradient-sarcelle',
  '#334155': 'gradient-anthracite',
  '#15803d': 'gradient-vert',
  '#9a3412': 'gradient-cuivre',
};

export function BorneButton({ service, villeSlug, className }: Props) {
  const href = villeSlug
    ? `/depannage/${villeSlug}/${service.slug}`
    : `/depannage?service=${service.slug}`;
  const gradient = COULEUR_TO_GRADIENT[service.couleur] ?? 'gradient-marine';

  return (
    <Link
      href={href}
      aria-label={`${service.nom} — Démarrer`}
      className={cn(
        'group relative flex aspect-square min-h-[150px] sm:min-h-[260px] flex-col justify-between',
        'overflow-hidden rounded-2xl p-4 sm:p-7 text-white',
        gradient,
        'shadow-borne effet-pression',
        'focus-visible:outline focus-visible:outline-4 focus-visible:outline-white/60',
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 sm:h-44 sm:w-44 rounded-full bg-white/8 blur-2xl group-hover:bg-white/14 transition-colors"
      />

      <div className="relative flex items-start justify-between">
        <span className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15 backdrop-blur-sm">
          <Icone
            name={service.icone}
            className="h-7 w-7 sm:h-9 sm:w-9 text-white"
            strokeWidth={2}
          />
        </span>
        <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/12 ring-1 ring-white/20 group-hover:bg-white group-hover:text-borne-encre transition-all">
          <ArrowRight
            className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </span>
      </div>

      <div className="relative flex flex-col gap-0.5 sm:gap-1">
        <h3 className="text-base sm:text-2xl lg:text-3xl font-black leading-tight tracking-tight">
          {service.nom}
        </h3>
        {service.prixMin !== undefined && (
          <p className="text-xs sm:text-base font-semibold text-white/80">
            Dès {formatPrixEuros(service.prixMin)}
          </p>
        )}
        {service.description && (
          <p className="hidden sm:line-clamp-2 mt-1 text-xs sm:text-sm text-white/70 leading-snug">
            {service.description}
          </p>
        )}
      </div>
    </Link>
  );
}
