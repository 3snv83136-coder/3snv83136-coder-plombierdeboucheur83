import Link from 'next/link';
import {
  MapPin,
  Clock,
  HelpCircle,
  Lightbulb,
  Building2,
  Wrench,
} from 'lucide-react';
import type { ContenuSeoVille } from '@/lib/content/types';
import { Icone } from '@/components/shared/Icone';

const SERVICE_META: Record<
  string,
  { nom: string; couleur: string; icone: string }
> = {
  debouchage: {
    nom: 'Débouchage canalisation',
    couleur: '#0e7490',
    icone: 'Droplets',
  },
  'inspection-camera': {
    nom: 'Inspection caméra',
    couleur: '#334155',
    icone: 'Camera',
  },
  'fosse-septique': {
    nom: 'Pompage fosse septique',
    couleur: '#15803d',
    icone: 'Truck',
  },
  'pompe-relevage': {
    nom: 'Pompe de relevage',
    couleur: '#9a3412',
    icone: 'Cog',
  },
};

type Props = {
  contenu: ContenuSeoVille;
  ville: { slug: string; nom: string; codePostal: string };
};

export function ContenuSeoVille({ contenu, ville }: Props) {
  return (
    <article className="border-t border-slate-200 bg-borne-fond-creme">
      <div className="container-borne py-12 sm:py-16">
        {/* Intro */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            Plombier {ville.nom} · {ville.codePostal}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-borne-encre leading-tight">
            Notre activité de plombier déboucheur à {ville.nom}
          </h2>
        </header>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-base sm:text-lg text-borne-gris leading-relaxed first-letter:text-3xl first-letter:font-black first-letter:text-borne-encre first-letter:mr-1 first-letter:float-left first-letter:leading-none">
            {contenu.intro}
          </p>
        </div>

        {/* Habitat */}
        <section className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-borne-bleu/10 text-borne-bleu">
              <Building2 className="h-5 w-5" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-borne-encre">
              L'habitat à {ville.nom} et ses contraintes
            </h3>
          </div>
          <p className="text-base text-borne-gris leading-relaxed">
            {contenu.habitat}
          </p>
        </section>

        {/* Problèmes fréquents par service */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-borne-bleu/10 text-borne-bleu">
                <Wrench className="h-5 w-5" />
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-borne-encre">
                Les 4 problèmes les plus fréquents à {ville.nom}
              </h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:gap-5 lg:grid-cols-2">
            {contenu.problemesFrequents.map((p) => {
              const meta = SERVICE_META[p.serviceSlug];
              return (
                <article
                  key={p.serviceSlug}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white"
                      style={{ backgroundColor: meta.couleur }}
                    >
                      <Icone
                        name={meta.icone}
                        className="h-5 w-5"
                        strokeWidth={2.2}
                      />
                    </span>
                    <div>
                      <p
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: meta.couleur }}
                      >
                        {meta.nom}
                      </p>
                      <h4 className="text-lg font-black text-borne-encre leading-tight">
                        {p.titre}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-borne-gris">
                    {p.texte}
                  </p>
                  <Link
                    href={`/depannage/${ville.slug}/${p.serviceSlug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold hover:underline"
                    style={{ color: meta.couleur }}
                  >
                    Démarrer le diagnostic en 4 clics →
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Quartiers */}
        <section className="mx-auto mt-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-borne-bleu/10 text-borne-bleu">
              <MapPin className="h-5 w-5" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-borne-encre">
              Quartiers et secteurs couverts à {ville.nom}
            </h3>
          </div>
          <p className="text-base text-borne-gris leading-relaxed">
            {contenu.quartiers.intro}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {contenu.quartiers.liste.map((q) => (
              <li
                key={q}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-borne-encre"
              >
                <MapPin className="h-3.5 w-3.5 text-borne-bleu" />
                {q}
              </li>
            ))}
          </ul>
        </section>

        {/* Conseils + Délais (2 colonnes) */}
        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <Lightbulb className="h-5 w-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-borne-encre">
                Conseils spécifiques au climat et aux sols de {ville.nom}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-borne-gris">
              {contenu.conseilsLocaux}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-borne-bleu/10 text-borne-bleu">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-borne-encre">
                Délais d'intervention à {ville.nom}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-borne-gris">
              {contenu.delais}
            </p>
          </div>
        </section>

        {/* FAQ locale */}
        <section className="mx-auto mt-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-borne-bleu/10 text-borne-bleu">
              <HelpCircle className="h-5 w-5" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-borne-encre">
              Questions fréquentes à {ville.nom}
            </h3>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {contenu.faq.map((f, i) => (
              <details
                key={i}
                className="group p-5 sm:p-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base sm:text-lg font-bold text-borne-encre [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-borne-gris transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-borne-gris">
                  {f.reponse}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mx-auto mt-14 max-w-3xl rounded-3xl bg-borne-encre p-6 sm:p-10 text-white">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/60">
            Pour conclure
          </p>
          <p className="mt-3 text-base sm:text-lg leading-relaxed">
            {contenu.conclusion}
          </p>
          <Link
            href={`/depannage/${ville.slug}`}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-borne-encre hover:bg-slate-100 transition-colors"
          >
            Démarrer la borne {ville.nom}
          </Link>
        </section>
      </div>
    </article>
  );
}
