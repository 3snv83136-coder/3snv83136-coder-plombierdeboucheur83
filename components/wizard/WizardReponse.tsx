'use client';

import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Icone } from '@/components/shared/Icone';

type Props = {
  reponse: {
    id: string;
    libelle: string;
    icone: string;
    facteurTarif: number;
    forceDevis: boolean;
  };
  couleur: string;
  onClick: () => void;
  index: number;
};

export function WizardReponse({ reponse, couleur, onClick, index }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative flex w-full items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-4 sm:p-5',
        'text-left transition-all duration-200',
        'hover:-translate-y-0.5 hover:shadow-borne hover:border-current',
        'active:scale-[0.98]',
        'focus-visible:outline focus-visible:outline-4 focus-visible:outline-borne-bleu/30'
      )}
      style={{ color: couleur }}
      aria-label={reponse.libelle}
    >
      <span
        className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-xl"
        style={{ backgroundColor: `${couleur}14` }}
        aria-hidden
      >
        <Icone
          name={reponse.icone}
          className="h-6 w-6 sm:h-7 sm:w-7"
          strokeWidth={2}
        />
      </span>
      <span className="flex-1 text-base sm:text-lg font-bold text-borne-encre">
        {reponse.libelle}
        {reponse.forceDevis && (
          <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-800">
            Devis
          </span>
        )}
      </span>
      <ArrowRight
        className="h-5 w-5 shrink-0 opacity-40 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
        strokeWidth={2.5}
      />
      <span className="sr-only">Choix {index + 1}</span>
    </button>
  );
}
