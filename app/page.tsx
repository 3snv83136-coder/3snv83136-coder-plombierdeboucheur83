import { Borne } from '@/components/borne/Borne';
import { BandeauConfiance } from '@/components/borne/BandeauConfiance';
import { BorneSelecteurVille } from '@/components/borne/BorneSelecteurVille';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { RealisationGalerie } from '@/components/realisations/RealisationGalerie';
import { JsonLd } from '@/components/seo/JsonLd';
import { getRealisations } from '@/lib/realisations';
import { getVilles } from '@/lib/villes';
import { getParametres } from '@/lib/parametres';
import {
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildAggregateRatingJsonLd,
} from '@/lib/seo';
import { SITE_NAME, SITE_URL } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const revalidate = 3600;

export default async function HomePage() {
  const [realisationsAll, villes, parametres] = await Promise.all([
    getRealisations(),
    getVilles(),
    getParametres(),
  ]);
  const realisations = realisationsAll.slice(0, 6);
  const aggregate = buildAggregateRatingJsonLd({ realisations: realisationsAll });
  const localBusiness = buildLocalBusinessJsonLd({
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    parametres,
    villes,
    aggregateRating: aggregate
      ? {
          ratingValue: aggregate.ratingValue as number,
          ratingCount: aggregate.ratingCount as number,
        }
      : undefined,
  });
  const organization = buildOrganizationJsonLd({
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    parametres,
  });
  return (
    <>
      <JsonLd data={[localBusiness, organization]} />
      <BorneHeader />
      <Borne
        surtitre="Borne dépannage Var · 24h/7j"
        titre="Quel est votre problème ?"
      />
      <BandeauConfiance />

      <BorneSelecteurVille
        surtitre="Trouvez votre dépanneur local"
        titre="Choisissez votre ville"
      />

      <section className="container-borne py-10 sm:py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
              Preuves & E-E-A-T
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-borne-encre">
              Dernières interventions documentées
            </h2>
          </div>
          <Link
            href="/depannage/toulon/realisations"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-borne-bleu hover:underline"
          >
            Toutes les réalisations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <RealisationGalerie realisations={realisations} />
      </section>
    </>
  );
}
