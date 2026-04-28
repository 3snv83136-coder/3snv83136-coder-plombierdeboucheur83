'use client';

import { WizardReponse } from './WizardReponse';

type Reponse = {
  id: string;
  libelle: string;
  icone: string;
  facteurTarif: number;
  forceDevis: boolean;
  ordre: number;
};

type Props = {
  question: { id: string; libelle: string; reponses: Reponse[] };
  couleur: string;
  onAnswer: (reponse: Reponse) => void;
  direction: 'forward' | 'backward';
  step: number;
};

export function WizardQuestion({ question, couleur, onAnswer, direction, step }: Props) {
  const animation =
    direction === 'forward' ? 'animate-slide-in-right' : 'animate-slide-in-left';
  return (
    <div key={`${question.id}-${step}`} className={`container-borne py-6 sm:py-10 ${animation}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-borne-encre">
        {question.libelle}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-borne-gris">
        Tapez sur la réponse qui correspond le mieux à votre situation.
      </p>
      <div
        className={`mt-6 grid gap-3 sm:gap-4 ${
          question.reponses.length > 4 ? 'sm:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {question.reponses.map((r, idx) => (
          <WizardReponse
            key={r.id}
            reponse={r}
            couleur={couleur}
            onClick={() => onAnswer(r)}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
