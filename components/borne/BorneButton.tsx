import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrixEuros } from '@/lib/utils';

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
  '#2563eb': 'gradient-bleu',
  '#7c3aed': 'gradient-violet',
  '#16a34a': 'gradient-vert',
  '#ea580c': 'gradient-orange',
};

export function BorneButton({ service, villeSlug, className }: Props) {
  const href = villeSlug
    ? `/depannage/${villeSlug}/${service.slug}`
    : `/depannage?service=${service.slug}`;
  const gradient = COULEUR_TO_GRADIENT[service.couleur] ?? 'gradient-bleu';

  return (
    <Link
      href={href}
      aria-label={`${service.nom} — Démarrer`}
      className={cn(
        'group relative flex aspect-square min-h-[150px] sm:min-h-[260px] flex-col justify-between',
        'overflow-hidden rounded-3xl p-4 sm:p-7 text-white',
        gradient,
        'ombre-borne effet-pression',
        'focus-visible:outline focus-visible:outline-4 focus-visible:outline-white/60',
        className
      )}
    >
      {/* halo décoratif */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/15 blur-2xl group-hover:bg-white/25 transition-colors"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-black/20 blur-3xl"
      />

      <div className="relative flex items-start justify-between">
        <span
          className="text-4xl sm:text-6xl drop-shadow-md leading-none"
          role="presentation"
          aria-hidden
        >
          {service.icone}
        </span>
        <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 group-hover:bg-white group-hover:text-borne-encre transition-all">
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
          <p className="text-xs sm:text-base font-semibold text-white/85">
            Dès {formatPrixEuros(service.prixMin)}
          </p>
        )}
        {service.description && (
          <p className="hidden sm:line-clamp-2 mt-1 text-xs sm:text-sm text-white/75 leading-snug">
            {service.description}
          </p>
        )}
      </div>
    </Link>
  );
}
