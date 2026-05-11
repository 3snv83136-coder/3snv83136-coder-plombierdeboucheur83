import Link from 'next/link';
import { Star, Calendar, Clock, MapPin, Wrench, Quote } from 'lucide-react';
import { RealisationAvantApres } from './RealisationAvantApres';
import { BoutonRappel } from '@/components/shared/BoutonRappel';
import { Icone } from '@/components/shared/Icone';
import type { RealisationComplete } from '@/lib/realisations';

type Props = { realisation: RealisationComplete };

export function RealisationFiche({ realisation: r }: Props) {
  const dateStr = r.dateRealisation.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="container-borne py-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        {/* badges */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/depannage/${r.ville.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-sm font-semibold text-borne-encre hover:border-borne-bleu"
          >
            <MapPin className="h-3.5 w-3.5 text-borne-bleu" /> {r.ville.nom}
          </Link>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-white"
            style={{ backgroundColor: r.service.couleur }}
          >
            <Icone name={r.service.icone} className="h-3.5 w-3.5" strokeWidth={2.4} />
            {r.service.nom}
          </span>
          {r.noteClient !== null && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-bold text-amber-800">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              {r.noteClient}/5
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-borne-encre">
          {r.titre}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-borne-gris">
          {r.description}
        </p>

        {/* avant / apres */}
        {r.photoAvant[0] && r.photoApres[0] && (
          <div className="mt-7">
            <RealisationAvantApres
              photoAvant={r.photoAvant[0]}
              photoApres={r.photoApres[0]}
              alt={r.titre}
            />
            <p className="mt-2 text-center text-xs text-borne-gris">
              Glissez le curseur pour comparer
            </p>
          </div>
        )}

        {/* meta */}
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icone: Calendar, label: 'Date', valeur: dateStr },
            {
              icone: Clock,
              label: 'Durée',
              valeur: r.dureeIntervention
                ? `${r.dureeIntervention} min`
                : '—',
            },
            { icone: MapPin, label: 'Ville', valeur: r.ville.nom },
            { icone: Wrench, label: 'Service', valeur: r.service.nom },
          ].map(({ icone: Ic, label, valeur }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-borne-gris">
                <Ic className="h-3.5 w-3.5" />
                {label}
              </dt>
              <dd className="mt-1 text-sm font-bold text-borne-encre">
                {valeur}
              </dd>
            </div>
          ))}
        </dl>

        {/* sections texte */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { titre: 'Le contexte', icone: 'Search' as const, texte: r.contexte },
            { titre: 'Notre intervention', icone: 'Wrench' as const, texte: r.solution },
            { titre: 'Le résultat', icone: 'CheckCircle2' as const, texte: r.resultat },
          ].map((s) => (
            <div
              key={s.titre}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-2">
                <Icone name={s.icone} className="h-5 w-5 text-borne-bleu" />
                <h2 className="text-lg font-black text-borne-encre">{s.titre}</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-borne-gris">
                {s.texte}
              </p>
            </div>
          ))}
        </div>

        {/* avis */}
        {r.avisClient && (
          <figure className="mt-10 overflow-hidden rounded-3xl bg-borne-encre p-6 sm:p-10 text-white">
            <Quote className="h-10 w-10 text-white/30" />
            <blockquote className="mt-3 text-xl sm:text-2xl font-bold leading-snug">
              « {r.avisClient} »
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 font-black">
                {r.prenomClient?.[0] ?? '?'}
              </span>
              <div>
                <p className="font-bold">{r.prenomClient}</p>
                <p className="flex items-center gap-1 text-xs text-white/70">
                  Client à {r.ville.nom} ·{' '}
                  {r.noteClient !== null && (
                    <>
                      {Array.from({ length: r.noteClient }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </>
                  )}
                </p>
              </div>
            </figcaption>
          </figure>
        )}

        {/* CTA bas */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-borne-encre">
            Vous avez un problème similaire à {r.ville.nom} ?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-borne-gris">
            Lancez la borne, tarif transparent affiché en 4 clics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <BoutonRappel variante="inline" villeNom={r.ville.nom} />
            <Link
              href={`/depannage/${r.ville.slug}`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-borne-bleu bg-white px-6 py-6 text-xl font-black text-borne-bleu hover:bg-borne-bleu hover:text-white transition-colors"
            >
              Lancer la borne {r.ville.nom}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
