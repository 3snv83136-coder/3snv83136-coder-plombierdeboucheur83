'use client';

import Link from 'next/link';
import { Phone, FileText, CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import { calculerTarifSync, formaterPrix } from '@/lib/calcul-tarif';
import { telephoneVersHref, formaterTelephone } from '@/lib/utils';
import { Icone } from '@/components/shared/Icone';

type Recap = {
  questionLibelle: string;
  reponseLibelle: string;
  reponseIcone: string;
};

type Props = {
  recap: Recap[];
  facteursReponses: number[];
  forceDevis: boolean;
  prixMinBase: number;
  prixMaxBase: number;
  facteurVille: number;
  villeSlug: string;
  villeNom: string;
  serviceSlug: string;
  serviceNom: string;
  serviceIcone: string;
  couleur: string;
  telephone: string;
};

export function WizardResultat(props: Props) {
  const tarif = calculerTarifSync({
    prixMinBase: props.prixMinBase,
    prixMaxBase: props.prixMaxBase,
    facteurVille: props.facteurVille,
    facteursReponses: props.facteursReponses,
    forceDevis: props.forceDevis,
  });

  const tarifAffiche = tarif.mode === 'prix' ? tarif.prixMin : 0;

  const handleCall = async () => {
    try {
      await fetch('/api/tracking-appel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          villeSlug: props.villeSlug,
          service: props.serviceSlug,
          tarifAffiche: tarifAffiche * 100,
          reponses: props.recap.map((r) => r.reponseLibelle),
        }),
      });
    } catch {
      // tracking best-effort
    }
    window.location.href = telephoneVersHref(props.telephone);
  };

  return (
    <div className="container-borne animate-fade-in-up py-6 sm:py-10">
      <div className="mx-auto max-w-2xl">
        {/* Récap choix */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-borne">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-borne-gris">
            <CheckCircle2 className="h-4 w-4 text-borne-vert" />
            Votre situation à {props.villeNom}
          </p>
          <ul className="mt-4 grid gap-2.5">
            {props.recap.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-slate-50 px-3 py-2.5"
              >
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-borne-gris"
                >
                  <Icone name={r.reponseIcone} className="h-4 w-4" />
                </span>
                <div className="flex-1 leading-tight">
                  <p className="text-xs text-borne-gris">{r.questionLibelle}</p>
                  <p className="text-sm font-bold text-borne-encre">
                    {r.reponseLibelle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Résultat — prix ou devis */}
        {tarif.mode === 'prix' ? (
          <div
            className="relative mt-5 overflow-hidden rounded-3xl p-6 sm:p-8 text-white ombre-borne"
            style={{
              background: `linear-gradient(135deg, ${props.couleur} 0%, ${props.couleur}dd 100%)`,
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] opacity-90">
              <Shield className="h-4 w-4" />
              Tarif transparent — {props.serviceNom}
            </p>
            <p className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-black leading-none">
              {formaterPrix(tarif.prixMin, tarif.prixMax)}
            </p>
            <p className="mt-2 text-sm sm:text-base opacity-90">
              Prix annoncé respecté à l'intervention. Paiement après travaux.
            </p>
            <button
              type="button"
              onClick={handleCall}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 sm:py-6 text-2xl sm:text-3xl font-black shadow-cta animate-pulse-cta active:scale-[0.98] effet-pression"
              style={{ color: props.couleur }}
            >
              <Phone className="h-7 w-7" strokeWidth={2.5} />
              Appeler {formaterTelephone(props.telephone)}
            </button>
            <Link
              href={`/depannage/${props.villeSlug}/devis?service=${props.serviceSlug}`}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold underline-offset-4 hover:underline opacity-90"
            >
              <FileText className="h-4 w-4" />
              Pas urgent ? Demander un devis écrit
            </Link>
          </div>
        ) : (
          <div className="mt-5 overflow-hidden rounded-3xl border-2 border-amber-300 bg-amber-50 p-6 sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              <AlertTriangle className="h-4 w-4" />
              Devis personnalisé requis
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-borne-encre leading-tight">
              Votre situation nécessite une étude au cas par cas
            </h3>
            <p className="mt-2 text-sm sm:text-base text-borne-gris">
              Pour vous proposer le juste prix sans surprise, un de nos
              techniciens vous rappelle dans les 30 minutes pour établir un
              devis gratuit adapté à votre intervention à {props.villeNom}.
            </p>
            <Link
              href={`/depannage/${props.villeSlug}/devis?service=${props.serviceSlug}`}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-borne-encre px-6 py-5 text-xl font-black text-white shadow-borne effet-pression"
            >
              <FileText className="h-6 w-6" strokeWidth={2.5} />
              Demander mon devis gratuit
            </Link>
            <button
              type="button"
              onClick={handleCall}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-borne-vert px-6 py-4 font-bold text-white shadow-cta hover:bg-borne-vert-fonce"
            >
              <Phone className="h-5 w-5" />
              Appeler quand même : {formaterTelephone(props.telephone)}
            </button>
          </div>
        )}

        {/* Garanties */}
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            { titre: 'Sous 1h', desc: 'Intervention rapide' },
            { titre: 'Tarif tenu', desc: 'Annoncé = facturé' },
            { titre: '24h/7j', desc: 'Week-ends inclus' },
          ].map((it) => (
            <div
              key={it.titre}
              className="rounded-xl border border-slate-200 bg-white px-2 py-3"
            >
              <p className="text-sm sm:text-base font-black text-borne-encre">
                {it.titre}
              </p>
              <p className="text-[11px] sm:text-xs text-borne-gris">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
