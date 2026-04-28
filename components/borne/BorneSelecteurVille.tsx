import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { getVilles } from '@/lib/villes';

type Props = {
  titre?: string;
  surtitre?: string;
};

export async function BorneSelecteurVille({ titre, surtitre }: Props) {
  const villes = await getVilles();

  return (
    <section className="container-borne py-10 sm:py-14">
      <div className="mb-6 sm:mb-10 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
          {surtitre ?? 'Sélectionnez votre ville'}
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-borne-encre">
          {titre ?? 'Top 10 des villes du Var (83)'}
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {villes.map((ville, idx) => (
          <li key={ville.slug}>
            <Link
              href={`/depannage/${ville.slug}`}
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 hover:border-borne-bleu hover:shadow-borne effet-pression"
            >
              <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-borne-gris group-hover:bg-borne-bleu group-hover:text-white transition-colors">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-borne-bleu" />
                <div className="leading-tight">
                  <p className="font-black text-base sm:text-lg text-borne-encre">
                    {ville.nom}
                  </p>
                  <p className="text-xs text-borne-gris">
                    {ville.codePostal}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] sm:text-xs text-borne-gris">
                {ville.population.toLocaleString('fr-FR')} habitants
              </p>
              <span className="absolute -left-px top-4 h-6 w-1 rounded-r-full bg-borne-bleu opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="sr-only">Choisir {ville.nom}</span>
              <span aria-hidden className="sr-only">{idx + 1}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
