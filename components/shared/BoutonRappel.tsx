'use client';

import { useEffect, useState, useTransition, useRef } from 'react';
import { PhoneCall, X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  creerDemandeRappel,
  type EtatRappel,
} from '@/actions/creerDemandeRappel';
import { cn } from '@/lib/utils';

type Variante = 'sticky' | 'inline' | 'header' | 'hero';

type Props = {
  variante: Variante;
  className?: string;
  label?: string;
  villeNom?: string;
};

export function BoutonRappel({ variante, className, label, villeNom }: Props) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      {variante === 'sticky' && (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          aria-label="Demander à être rappelé"
          className={cn(
            'md:hidden fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3',
            'bg-borne-vert text-white font-bold text-xl py-5 pb-safe',
            'shadow-cta animate-pulse-cta',
            'active:bg-borne-vert-fonce',
            className
          )}
        >
          <PhoneCall className="h-7 w-7" strokeWidth={2.5} />
          <span>On vous rappelle</span>
        </button>
      )}

      {variante === 'inline' && (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className={cn(
            'flex w-full items-center justify-center gap-3 rounded-2xl',
            'bg-borne-vert px-6 py-6 text-2xl font-black text-white',
            'shadow-cta hover:bg-borne-vert-fonce hover:shadow-borne-hover',
            'active:scale-[0.98] effet-pression',
            className
          )}
        >
          <PhoneCall className="h-7 w-7" strokeWidth={2.5} />
          <span>{label ?? 'On vous rappelle'}</span>
        </button>
      )}

      {variante === 'hero' && (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className={cn(
            'group inline-flex items-center gap-3 rounded-full',
            'bg-borne-vert px-8 py-5 text-xl sm:text-2xl font-black text-white',
            'shadow-cta hover:bg-borne-vert-fonce hover:shadow-borne-hover',
            'effet-pression',
            className
          )}
        >
          <span className="grid place-items-center rounded-full bg-white/15 p-2 group-hover:bg-white/25 transition-colors">
            <PhoneCall className="h-6 w-6" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">
              {villeNom
                ? `Plombier déboucheur ${villeNom} · Lyon · Rhône (69)`
                : 'Plombier déboucheur Lyon · 24h/7j'}
            </span>
            <span>On vous rappelle</span>
          </span>
        </button>
      )}

      {variante === 'header' && (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className={cn(
            'inline-flex items-center gap-2 rounded-full',
            'bg-borne-encre px-4 py-2 text-sm sm:text-base font-bold text-white',
            'hover:bg-borne-bleu transition-colors',
            className
          )}
        >
          <PhoneCall className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">On vous rappelle</span>
          <span className="sm:hidden">Rappel</span>
        </button>
      )}

      {ouvert && (
        <DialogRappel
          contexte={villeNom ? `Demande depuis page ${villeNom}` : undefined}
          onClose={() => setOuvert(false)}
        />
      )}
    </>
  );
}

function DialogRappel({
  contexte,
  onClose,
}: {
  contexte?: string;
  onClose: () => void;
}) {
  const [etat, setEtat] = useState<EtatRappel | null>(null);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (contexte) fd.set('contexte', contexte);
    startTransition(async () => {
      const res = await creerDemandeRappel(etat, fd);
      setEtat(res);
      if (res.success) formRef.current?.reset();
    });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-rappel-titre"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-borne-encre hover:bg-slate-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {etat?.success ? (
          <div className="p-7 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-borne-vert/10 mx-auto">
              <CheckCircle2 className="h-9 w-9 text-borne-vert" />
            </span>
            <h2 className="mt-4 text-2xl font-black text-borne-encre">
              Demande reçue !
            </h2>
            <p className="mt-2 text-borne-gris">{etat.message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-2xl bg-borne-encre px-6 py-4 font-bold text-white hover:bg-borne-bleu transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-borne-vert/10 text-borne-vert">
                <PhoneCall className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div>
                <h2
                  id="dialog-rappel-titre"
                  className="text-xl sm:text-2xl font-black text-borne-encre leading-tight"
                >
                  On vous rappelle
                </h2>
                <p className="text-sm text-borne-gris">
                  Sous 30 min · 24h/7j · sans engagement
                </p>
              </div>
            </div>

            <form ref={formRef} onSubmit={onSubmit} className="mt-5 grid gap-4" noValidate>
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
                pattern="(\+33|0)[1-9]( ?\d{2}){4}"
                error={etat?.errors?.telephone}
                hint="Pour vous rappeler sous 30 min"
              />

              {etat && !etat.success && etat.message && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 inline-flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {etat.message}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="mt-1 flex w-full items-center justify-center gap-3 rounded-2xl bg-borne-vert px-6 py-5 text-lg font-black text-white shadow-cta hover:bg-borne-vert-fonce transition-colors active:scale-[0.98] disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {pending ? 'Envoi en cours...' : 'Demander mon rappel'}
              </button>

              <p className="text-xs text-borne-gris text-center">
                Vos données ne servent qu'à vous rappeler. RGPD respecté.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Champ({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  pattern,
  hint,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  hint?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-bold text-borne-encre"
      >
        {label} {required && <span className="text-borne-urgence">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-borne-encre placeholder:text-borne-gris/60',
          'focus:outline-none focus:ring-4 focus:ring-borne-vert/20 transition-all',
          error
            ? 'border-borne-urgence focus:border-borne-urgence'
            : 'border-slate-200 focus:border-borne-vert'
        )}
      />
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
