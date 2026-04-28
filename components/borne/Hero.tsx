import { Sparkles, Zap, Shield } from 'lucide-react';
import { BoutonAppel } from '@/components/shared/BoutonAppel';

type Props = {
  villeNom?: string;
};

export function Hero({ villeNom }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* fond décoratif */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-borne-bleu/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-borne-vert/15 blur-3xl"
      />

      <div className="container-borne pt-10 pb-6 sm:pt-16 sm:pb-10 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-borne-bleu/20 bg-white px-4 py-1.5 text-xs sm:text-sm font-bold text-borne-bleu shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Nouvelle borne dépannage Var
            <span className="h-1.5 w-1.5 rounded-full bg-borne-vert" />
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-borne-encre">
            {villeNom ? (
              <>
                Débouchage à <span className="text-borne-bleu">{villeNom}</span>{' '}
                en 4 clics.
              </>
            ) : (
              <>
                Tapez. Voyez le prix.{' '}
                <span className="text-borne-bleu">Appelez.</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-borne-gris max-w-2xl mx-auto">
            Borne dépannage Var façon McDonald's : choisissez votre service,
            répondez à 3 questions visuelles, votre tarif s'affiche, vous
            appelez. Intervention sous <strong className="text-borne-encre">1 heure</strong>.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3">
            <BoutonAppel variante="hero" villeNom={villeNom} />
            <p className="text-xs sm:text-sm text-borne-gris">
              Ou utilisez la borne ci-dessous — pas de formulaire, pas
              d'inscription.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm border border-slate-200">
              <Zap className="h-3.5 w-3.5 text-borne-orange" />
              <span className="font-semibold text-borne-encre">
                Intervention &lt; 1h
              </span>
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm border border-slate-200">
              <Shield className="h-3.5 w-3.5 text-borne-vert" />
              <span className="font-semibold text-borne-encre">
                Tarif annoncé respecté
              </span>
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm border border-slate-200">
              <Sparkles className="h-3.5 w-3.5 text-borne-violet" />
              <span className="font-semibold text-borne-encre">
                Sans formulaire
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
