'use client';

import { useState, useCallback, useMemo } from 'react';
import { WizardProgressBar } from './WizardProgressBar';
import { WizardQuestion } from './WizardQuestion';
import { WizardResultat } from './WizardResultat';

type Reponse = {
  id: string;
  libelle: string;
  icone: string;
  facteurTarif: number;
  forceDevis: boolean;
  ordre: number;
};

type Question = {
  id: string;
  libelle: string;
  ordre: number;
  reponses: Reponse[];
};

type Service = {
  slug: string;
  nom: string;
  icone: string;
  couleur: string;
  prixMin: number;
  prixMax: number;
  questions: Question[];
};

type Ville = {
  slug: string;
  nom: string;
  facteurTarif: number;
};

type Props = {
  service: Service;
  ville: Ville;
  telephone: string;
};

type ChoixHistorique = {
  questionId: string;
  questionLibelle: string;
  reponse: Reponse;
};

export function Wizard({ service, ville, telephone }: Props) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [choix, setChoix] = useState<ChoixHistorique[]>([]);

  const totalQuestions = service.questions.length;
  const enResultat = step >= totalQuestions;

  const handleAnswer = useCallback(
    (reponse: Reponse) => {
      const question = service.questions[step];
      setDirection('forward');
      setChoix((prev) => {
        const sansEtape = prev.slice(0, step);
        return [
          ...sansEtape,
          { questionId: question.id, questionLibelle: question.libelle, reponse },
        ];
      });
      setStep((s) => s + 1);
    },
    [service.questions, step]
  );

  const handlePrev = useCallback(() => {
    if (step === 0) return;
    setDirection('backward');
    setChoix((prev) => prev.slice(0, step - 1));
    setStep((s) => Math.max(0, s - 1));
  }, [step]);

  const recap = useMemo(
    () =>
      choix.map((c) => ({
        questionLibelle: c.questionLibelle,
        reponseLibelle: c.reponse.libelle,
        reponseIcone: c.reponse.icone,
      })),
    [choix]
  );

  const facteursReponses = useMemo(
    () => choix.map((c) => c.reponse.facteurTarif),
    [choix]
  );

  const forceDevis = useMemo(
    () => choix.some((c) => c.reponse.forceDevis),
    [choix]
  );

  if (enResultat) {
    return (
      <WizardResultat
        recap={recap}
        facteursReponses={facteursReponses}
        forceDevis={forceDevis}
        prixMinBase={service.prixMin}
        prixMaxBase={service.prixMax}
        facteurVille={ville.facteurTarif}
        villeSlug={ville.slug}
        villeNom={ville.nom}
        serviceSlug={service.slug}
        serviceNom={service.nom}
        serviceIcone={service.icone}
        couleur={service.couleur}
        telephone={telephone}
      />
    );
  }

  const question = service.questions[step];

  return (
    <div>
      <WizardProgressBar
        current={step + 1}
        total={totalQuestions}
        couleur={service.couleur}
        onPrev={step > 0 ? handlePrev : undefined}
      />
      <WizardQuestion
        question={question}
        couleur={service.couleur}
        onAnswer={handleAnswer}
        direction={direction}
        step={step}
      />
    </div>
  );
}
