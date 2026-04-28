'use client';

import { useEffect } from 'react';
import { RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-borne py-16 text-center">
      <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-urgence">
        Une erreur est survenue
      </p>
      <h1 className="mt-2 titre-borne">Petit incident technique</h1>
      <p className="mt-3 sous-titre-borne max-w-xl mx-auto">
        Le service va vite revenir. En attendant vous pouvez recharger la
        page ou rentrer à l'accueil.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-2xl bg-borne-bleu px-6 py-4 font-bold text-white hover:bg-borne-bleu-fonce"
        >
          <RefreshCcw className="h-5 w-5" />
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-borne-bleu bg-white px-6 py-4 font-bold text-borne-bleu hover:bg-borne-bleu hover:text-white transition-colors"
        >
          <Home className="h-5 w-5" />
          Accueil
        </Link>
      </div>
    </section>
  );
}
