// ============================================================
// VillesProches — Section de cross-linking entre villes
// ============================================================
// Affiche les autres villes desservies avec liens vers leurs
// pages borne respectives.
// ============================================================

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type VilleLien = { slug: string; nom: string; codePostal: string };

type Props = {
  villeActuelle: VilleLien;
  villes: VilleLien[];
};

export function VillesProches({ villeActuelle, villes }: Props) {
  const autres = villes.filter((v) => v.slug !== villeActuelle.slug);

  return (
    <section className="container-borne py-10 sm:py-14">
      <div className="mb-5 max-w-2xl">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
          Couverture territoriale
        </p>
        <h2 className="mt-1 titre-borne">
          Plombier déboucheur dans les villes proches de {villeActuelle.nom}
        </h2>
        <p className="mt-2 sous-titre-borne">
          Nous intervenons dans tout le Rhône (69). Consultez nos tarifs et
          disponibilités dans votre commune.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {autres.map((v) => (
          <Link
            key={v.slug}
            href={`/depannage/${v.slug}`}
            className="group flex items-center justify-between rounded-xl border border-borne-border bg-white p-4 transition hover:border-borne-bleu hover:shadow-md"
          >
            <div>
              <span className="text-base sm:text-lg font-bold text-borne-encre group-hover:text-borne-bleu transition-colors">
                {v.nom}
              </span>
              <span className="ml-2 text-sm text-borne-gris">
                {v.codePostal}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-borne-gris group-hover:text-borne-bleu transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}
