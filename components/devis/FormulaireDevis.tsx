'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, Send, ArrowLeft, Phone } from 'lucide-react';
import { creerLeadDevis, type EtatFormulaire } from '@/actions/creerLeadDevis';
import { cn, formaterTelephone, telephoneVersHref } from '@/lib/utils';

type ServiceLite = { slug: string; nom: string; icone: string; couleur: string };

type Props = {
  ville: { slug: string; nom: string; codePostal: string };
  services: ServiceLite[];
  serviceParDefaut?: string;
  telephone: string;
};

export function FormulaireDevis({ ville, services, serviceParDefaut, telephone }: Props) {
  const telHref = telephoneVersHref(telephone);
  const telLabel = formaterTelephone(telephone);
  const [etat, setEtat] = useState<EtatFormulaire | null>(null);
  const [pending, startTransition] = useTransition();
  const [serviceSelectionne, setServiceSelectionne] = useState(
    serviceParDefaut ?? services[0]?.slug ?? ''
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    fd.set('villeSlug', ville.slug);
    fd.set('service', serviceSelectionne);
    startTransition(async () => {
      const res = await creerLeadDevis(etat, fd);
      setEtat(res);
      if (res.success) (e.target as HTMLFormElement).reset();
    });
  }

  if (etat?.success) {
    return (
      <div className="container-borne py-12 animate-fade-in-up">
        <div className="mx-auto max-w-xl rounded-3xl border-2 border-borne-vert/30 bg-white p-8 text-center shadow-borne">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-borne-vert/10 mx-auto">
            <CheckCircle2 className="h-9 w-9 text-borne-vert" />
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black text-borne-encre">
            Demande reçue !
          </h2>
          <p className="mt-2 text-borne-gris">{etat.message}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={telHref}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-borne-vert px-6 py-6 text-2xl font-black text-white shadow-cta hover:bg-borne-vert-fonce effet-pression"
            >
              <Phone className="h-6 w-6" /> Appeler {telLabel}
            </a>
            <Link
              href={`/depannage/${ville.slug}`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-borne-bleu bg-white px-6 py-6 font-black text-borne-bleu hover:bg-borne-bleu hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Retour borne {ville.nom}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container-borne py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-borne-bleu">
            Devis gratuit · sans engagement
          </p>
          <h1 className="mt-2 titre-borne">
            Devis personnalisé à {ville.nom}
          </h1>
          <p className="mt-2 sous-titre-borne">
            Rappel sous 30 minutes par un technicien. Préférez-vous appeler tout
            de suite ?
          </p>
          <div className="mt-4">
            <a
              href={telHref}
              className="inline-flex items-center gap-3 rounded-2xl bg-borne-vert px-6 py-4 text-lg font-black text-white shadow-cta hover:bg-borne-vert-fonce effet-pression"
            >
              <Phone className="h-5 w-5" /> Appeler {telLabel}
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-borne"
          noValidate
        >
          {/* sélection service */}
          <fieldset>
            <legend className="text-sm font-bold text-borne-encre mb-2">
              Service souhaité
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => setServiceSelectionne(s.slug)}
                  aria-pressed={serviceSelectionne === s.slug}
                  className={cn(
                    'flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-3 text-xs font-bold transition-all',
                    serviceSelectionne === s.slug
                      ? 'text-white shadow-borne'
                      : 'border-slate-200 bg-white text-borne-encre hover:border-slate-300'
                  )}
                  style={
                    serviceSelectionne === s.slug
                      ? { backgroundColor: s.couleur, borderColor: s.couleur }
                      : undefined
                  }
                >
                  <span className="text-xl" aria-hidden>
                    {s.icone}
                  </span>
                  <span className="leading-tight text-center">{s.nom}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 grid gap-4">
            <Champ
              name="nom"
              label="Votre nom"
              placeholder="Marc Dupont"
              required
              error={etat?.errors?.nom}
            />
            <Champ
              name="telephone"
              type="tel"
              label="Téléphone"
              placeholder="06 12 34 56 78"
              required
              error={etat?.errors?.telephone}
              pattern="(\+33|0)[1-9]( ?\d{2}){4}"
              hint="Pour le rappel sous 30 min"
            />
            <Champ
              name="email"
              type="email"
              label="Email (optionnel)"
              placeholder="vous@exemple.fr"
              error={etat?.errors?.email}
            />
            <Champ
              name="adresse"
              label="Adresse de l'intervention (optionnel)"
              placeholder={`12 rue Victor Hugo, ${ville.codePostal} ${ville.nom}`}
              error={etat?.errors?.adresse}
            />
            <Champ
              name="message"
              label="Décrivez votre situation"
              placeholder="Refoulement WC depuis 2 jours, deux salles de bain concernées..."
              required
              textarea
              error={etat?.errors?.message}
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-borne-encre px-6 py-5 text-xl font-black text-white shadow-borne hover:bg-borne-bleu transition-colors active:scale-[0.98] disabled:opacity-60"
          >
            <Send className="h-6 w-6" />
            {pending ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>

          <p className="mt-3 text-xs text-borne-gris text-center">
            Vos données sont uniquement utilisées pour vous rappeler. RGPD
            respecté.
          </p>
        </form>
      </div>
    </section>
  );
}

function Champ({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  pattern,
  textarea,
  hint,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  textarea?: boolean;
  hint?: string;
  error?: string;
}) {
  const baseCls = cn(
    'w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-borne-encre placeholder:text-borne-gris/60',
    'focus:outline-none focus:ring-4 focus:ring-borne-bleu/20 transition-all',
    error
      ? 'border-borne-urgence focus:border-borne-urgence'
      : 'border-slate-200 focus:border-borne-bleu'
  );
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-bold text-borne-encre"
      >
        {label} {required && <span className="text-borne-urgence">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className={baseCls}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          pattern={pattern}
          placeholder={placeholder}
          className={baseCls}
        />
      )}
      {hint && !error && (
        <p className="mt-1 text-xs text-borne-gris">{hint}</p>
      )}
      {error && (
        <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-borne-urgence">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
