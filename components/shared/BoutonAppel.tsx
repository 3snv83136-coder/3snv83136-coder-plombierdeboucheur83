import { Phone } from 'lucide-react';
import { getParametre } from '@/lib/parametres';
import {
  cn,
  formaterTelephone,
  telephoneVersHref,
} from '@/lib/utils';

type Variante = 'sticky' | 'inline' | 'header' | 'hero';

type Props = {
  variante: Variante;
  className?: string;
  label?: string;
  villeNom?: string;
};

export async function BoutonAppel({
  variante,
  className,
  label,
  villeNom,
}: Props) {
  const tel = await getParametre('TEL_PRINCIPAL');
  const telFormate = formaterTelephone(tel);
  const href = telephoneVersHref(tel);

  if (variante === 'sticky') {
    return (
      <a
        href={href}
        aria-label={`Appeler ${tel}`}
        className={cn(
          'md:hidden fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3',
          'bg-borne-vert text-white font-bold text-xl py-5 pb-safe',
          'shadow-cta animate-pulse-cta',
          'active:bg-borne-vert-fonce',
          className
        )}
      >
        <Phone className="h-7 w-7 fill-white" strokeWidth={2.5} />
        <span>Appeler {telFormate}</span>
      </a>
    );
  }

  if (variante === 'inline') {
    return (
      <a
        href={href}
        aria-label={`Appeler ${tel}`}
        className={cn(
          'flex w-full items-center justify-center gap-3 rounded-2xl',
          'bg-borne-vert px-6 py-6 text-2xl font-black text-white',
          'shadow-cta hover:bg-borne-vert-fonce hover:shadow-borne-hover',
          'active:scale-[0.98] effet-pression',
          className
        )}
      >
        <Phone className="h-7 w-7" strokeWidth={2.5} />
        <span>{label ?? `Appeler ${telFormate}`}</span>
      </a>
    );
  }

  if (variante === 'hero') {
    return (
      <a
        href={href}
        aria-label={`Appeler ${tel}`}
        className={cn(
          'group inline-flex items-center gap-3 rounded-full',
          'bg-borne-vert px-8 py-5 text-xl sm:text-2xl font-black text-white',
          'shadow-cta hover:bg-borne-vert-fonce hover:shadow-borne-hover',
          'effet-pression',
          className
        )}
      >
        <span className="grid place-items-center rounded-full bg-white/15 p-2 group-hover:bg-white/25 transition-colors">
          <Phone className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">
            {villeNom ? `Lyon · Rhône · ${villeNom}` : 'Disponible 24h/7j'}
          </span>
          <span>{telFormate}</span>
        </span>
      </a>
    );
  }

  // header
  return (
    <a
      href={href}
      aria-label={`Appeler ${tel}`}
      className={cn(
        'inline-flex items-center gap-2 rounded-full',
        'bg-borne-encre px-4 py-2 text-sm sm:text-base font-bold text-white',
        'hover:bg-borne-bleu transition-colors',
        className
      )}
    >
      <Phone className="h-4 w-4" strokeWidth={2.5} />
      <span className="hidden sm:inline">{telFormate}</span>
      <span className="sm:hidden">Appeler</span>
    </a>
  );
}
