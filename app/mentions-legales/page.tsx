import type { Metadata } from 'next';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { getParametres } from '@/lib/parametres';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Plombier Déboucheur 69 — plombier dépanneur déboucheur 24h/7j à Lyon et dans tout le Rhône (69).',
};

export default async function MentionsLegales() {
  const p = await getParametres();
  return (
    <>
      <BorneHeader />
      <article className="container-borne py-10 sm:py-14 prose prose-slate max-w-3xl mx-auto">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          {p.NOM_ENTREPRISE ?? SITE_NAME}
          <br />
          SIRET : {p.SIRET}
          <br />
          Adresse : {p.ADRESSE_SIEGE}
          <br />
          Email : {p.EMAIL_CONTACT}
          <br />
          Téléphone : {p.TEL_PRINCIPAL}
        </p>

        <h2>Directeur de la publication</h2>
        <p>{p.NOM_ENTREPRISE ?? SITE_NAME}</p>

        <h2>Hébergeur</h2>
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723, USA
          <br />
          <a href="https://vercel.com">vercel.com</a>
        </p>

        <h2>Assurance responsabilité civile professionnelle</h2>
        <p>{p.ASSURANCE_RC_PRO}</p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu du site (textes, photos, marques) est protégé.
          Toute reproduction sans autorisation est interdite.
        </p>
      </article>
    </>
  );
}
