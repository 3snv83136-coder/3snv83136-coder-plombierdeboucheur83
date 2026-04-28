import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { getRealisations } from '@/lib/realisations';

export async function SectionAvis() {
  const realisations = await getRealisations();
  const avis = realisations
    .filter((r) => r.avisClient && r.noteClient !== null && r.prenomClient)
    .slice(0, 6);

  if (!avis.length) return null;

  const moyenne =
    avis.reduce((acc, a) => acc + (a.noteClient ?? 0), 0) / avis.length;
  const moyenneRound = Math.round(moyenne * 10) / 10;

  return (
    <section className="border-y border-slate-200 bg-borne-fond-creme">
      <div className="container-borne py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            Avis clients vérifiés
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-borne-encre leading-tight">
            {moyenneRound}/5 sur {avis.length}+ chantiers documentés
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  i < Math.round(moyenne)
                    ? 'h-6 w-6 fill-amber-500 text-amber-500'
                    : 'h-6 w-6 text-slate-300'
                }
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-borne-gris">
            Chaque avis est issu d'un chantier réel — ville, date, durée et
            photos publiées sur les fiches réalisations.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {avis.map((a) => (
            <li
              key={a.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-borne hover:-translate-y-0.5"
            >
              <Quote className="h-7 w-7 text-borne-bleu/25" />
              <blockquote className="mt-2 flex-1 text-sm sm:text-base text-borne-encre leading-relaxed">
                « {a.avisClient} »
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-borne-bleu/10 text-borne-bleu font-black">
                    {a.prenomClient?.[0]}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-borne-encre">
                      {a.prenomClient}
                    </p>
                    <p className="text-xs text-borne-gris">
                      Client à {a.ville.nom}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: a.noteClient ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
              </div>
              <Link
                href={`/depannage/${a.ville.slug}/realisations/${a.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-borne-bleu hover:underline"
              >
                Voir le chantier
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
