import Link from 'next/link';
import { Home } from 'lucide-react';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { BorneSelecteurVille } from '@/components/borne/BorneSelecteurVille';

export default function NotFound() {
  return (
    <>
      <BorneHeader />
      <section className="container-borne py-16 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-urgence">
          Erreur 404
        </p>
        <h1 className="mt-2 titre-borne">Page introuvable</h1>
        <p className="mt-3 sous-titre-borne max-w-xl mx-auto">
          La page que vous cherchez n'existe plus ou n'a jamais existé. Pas de
          panique — choisissez votre ville pour démarrer la borne.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-borne-bleu px-6 py-4 font-bold text-white hover:bg-borne-bleu-fonce"
        >
          <Home className="h-5 w-5" />
          Retour à l'accueil
        </Link>
      </section>
      <BorneSelecteurVille />
    </>
  );
}
