'use client';

import { cn } from '@/lib/utils';

type Props = {
  current: number; // 1-based
  total: number;
  couleur: string;
  onPrev?: () => void;
};

export function WizardProgressBar({ current, total, couleur, onPrev }: Props) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));
  return (
    <div className="container-borne pt-4">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onPrev}
          disabled={!onPrev || current === 1}
          aria-label="Question précédente"
          className={cn(
            'inline-flex h-10 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold transition-all',
            'hover:bg-slate-50 active:scale-95',
            'disabled:opacity-30 disabled:cursor-not-allowed'
          )}
        >
          ← Retour
        </button>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-gris">
          Question {current}{' '}
          <span className="text-borne-gris/50">/ {total}</span>
        </p>
        <span className="w-[88px]" aria-hidden />
      </div>
      <div
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: couleur }}
        />
      </div>
    </div>
  );
}
