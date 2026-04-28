import { RealisationCarte } from './RealisationCarte';
import type { RealisationComplete } from '@/lib/realisations';

type Props = { realisations: RealisationComplete[]; vide?: string };

export function RealisationGalerie({ realisations, vide }: Props) {
  if (!realisations.length) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-12 text-center">
        <p className="text-base text-borne-gris">
          {vide ?? 'Réalisations à venir — restez connecté.'}
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {realisations.map((r) => (
        <RealisationCarte key={r.slug} realisation={r} />
      ))}
    </div>
  );
}
