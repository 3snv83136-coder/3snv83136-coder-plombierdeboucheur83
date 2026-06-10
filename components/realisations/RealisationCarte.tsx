import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, MapPin } from 'lucide-react';
import { Icone } from '@/components/shared/Icone';
import { PHOTO_REALISATION_FALLBACK } from '@/lib/data/photos';
import type { RealisationComplete } from '@/lib/realisations';

type Props = { realisation: RealisationComplete };

export function RealisationCarte({ realisation: r }: Props) {
  const dateStr = r.dateRealisation.toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  });
  const photo = r.photoApres[0] ?? r.photoAvant[0] ?? PHOTO_REALISATION_FALLBACK;

  return (
    <Link
      href={`/depannage/${r.ville.slug}/realisations/${r.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-borne-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={photo}
          alt={r.titre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white shadow-md"
          style={{ backgroundColor: r.service.couleur }}
        >
          <Icone name={r.service.icone} className="h-3.5 w-3.5" strokeWidth={2.4} />
          {r.service.nom}
        </span>
        {r.noteClient !== null && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-borne-encre shadow-md">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {r.noteClient}/5
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-black text-lg leading-tight text-borne-encre line-clamp-2">
          {r.titre}
        </h3>
        <p className="mt-2 text-sm text-borne-gris line-clamp-2">
          {r.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-borne-gris">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {r.ville.nom}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {dateStr}
          </span>
        </div>
      </div>
    </Link>
  );
}
