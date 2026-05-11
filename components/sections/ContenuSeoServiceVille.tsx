// ============================================================
// ContenuSeoServiceVille — Bloc SEO pour page wizard
// ============================================================
// Affiche le contenu rédactionnel unique pour une combinaison
// ville+service donnée. Environ 300 mots de texte structuré.
// ============================================================

import type { ContenuServiceVille } from '@/lib/content/types';

type Props = {
  contenu: ContenuServiceVille;
};

export function ContenuSeoServiceVille({ contenu }: Props) {
  return (
    <section className="container-borne py-10 sm:py-14">
      <div className="max-w-3xl space-y-6 sm:space-y-8">
        {/* Intro */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-borne-encre tracking-tight">
            Pourquoi choisir notre service à {contenu.intro.slice(0, 0)} ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-borne-gris leading-relaxed">
            {contenu.intro}
          </p>
        </div>

        {/* Détails techniques */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-borne-encre">
            Notre expertise technique
          </h3>
          <p className="mt-2 text-sm sm:text-base text-borne-gris leading-relaxed">
            {contenu.details}
          </p>
        </div>

        {/* Tarifs */}
        <div className="rounded-xl border border-borne-border bg-borne-bleu/5 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-borne-encre">
            Tarif transparent, sans surprise
          </h3>
          <p className="mt-2 text-sm sm:text-base text-borne-gris leading-relaxed">
            {contenu.tarifs}
          </p>
        </div>

        {/* Conclusion */}
        <div className="border-t border-borne-border pt-5">
          <p className="text-sm sm:text-base font-semibold text-borne-encre leading-relaxed">
            {contenu.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
