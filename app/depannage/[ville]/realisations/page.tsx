import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { Borne } from '@/components/borne/Borne';
import { RealisationGalerie } from '@/components/realisations/RealisationGalerie';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { getVilleBySlug } from '@/lib/villes';
import { getRealisationsParVille } from '@/lib/realisations';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 3600;

type Props = { params: { ville: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) return {};
  const url = `${SITE_URL}/depannage/${ville.slug}/realisations`;
  return {
    title: `Réalisations plombier déboucheur à ${ville.nom} (${ville.codePostal}) — Photos & avis clients`,
    description: `Galerie complète des chantiers plomberie à ${ville.nom} (${ville.codePostal}) : débouchage canalisation, inspection caméra, fosse septique, pompe de relevage. Photos avant/après, avis vérifiés, durées d'intervention par notre équipe locale du Rhône (69).`,
    alternates: { canonical: url },
  };
}

export default async function PageRealisations({ params }: Props) {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) notFound();
  const realisations = await getRealisationsParVille(ville.slug);

  return (
    <>
      <BorneHeader ville={ville} />
      <FilAriane
        items={[
          { label: 'Dépannage', href: '/depannage' },
          { label: ville.nom, href: `/depannage/${ville.slug}` },
          { label: 'Réalisations' },
        ]}
      />
      <section className="container-borne py-8 sm:py-12">
        <div className="mb-6 sm:mb-10 max-w-2xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            E-E-A-T · Preuves vérifiables
          </p>
          <h1 className="mt-2 titre-borne">
            Nos dernières réalisations à {ville.nom}
          </h1>
          <p className="mt-3 sous-titre-borne">
            Chantiers documentés avec photos avant/après, avis clients et durée
            d'intervention.
          </p>
        </div>
        <RealisationGalerie realisations={realisations} />
      </section>
      <Borne ville={{ slug: ville.slug, nom: ville.nom }} />
    </>
  );
}
