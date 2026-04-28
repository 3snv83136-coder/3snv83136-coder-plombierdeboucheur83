import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { Borne } from '@/components/borne/Borne';
import { BandeauConfiance } from '@/components/borne/BandeauConfiance';
import { RealisationGalerie } from '@/components/realisations/RealisationGalerie';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { getVilleBySlug } from '@/lib/villes';
import { getRealisationsParVille } from '@/lib/realisations';
import { getServices } from '@/lib/services';
import { getParametres } from '@/lib/parametres';
import {
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
  buildBreadcrumbJsonLd,
  buildAggregateRatingJsonLd,
} from '@/lib/seo';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

export const revalidate = 3600;

type Props = { params: { ville: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) return {};
  const url = `${SITE_URL}/depannage/${ville.slug}`;
  return {
    title: `Dépannage canalisation à ${ville.nom} (${ville.codePostal}) — 24h/7j`,
    description: `Plombier déboucheur à ${ville.nom} : débouchage, inspection caméra, fosse septique, pompe de relevage. Tarif transparent en 4 clics. Intervention sous 1h.`,
    alternates: { canonical: url },
    openGraph: { url, title: `Dépannage à ${ville.nom} 24h/7j` },
  };
}

export default async function PageVille({ params }: Props) {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) notFound();
  const [realisationsToutes, realisationsTop, services, parametres] =
    await Promise.all([
      getRealisationsParVille(ville.slug),
      getRealisationsParVille(ville.slug, 3),
      getServices(),
      getParametres(),
    ]);
  const realisations = realisationsTop;

  const aggregate = buildAggregateRatingJsonLd({
    realisations: realisationsToutes,
  });
  const localBusiness = buildLocalBusinessJsonLd({
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    parametres,
    ville,
    aggregateRating: aggregate
      ? {
          ratingValue: aggregate.ratingValue as number,
          ratingCount: aggregate.ratingCount as number,
        }
      : undefined,
  });
  const servicesJsonLd = services.map((s) =>
    buildServiceJsonLd({ service: s, ville, siteUrl: SITE_URL })
  );
  const breadcrumb = buildBreadcrumbJsonLd({
    items: [
      { name: 'Accueil', url: SITE_URL },
      { name: 'Dépannage', url: `${SITE_URL}/depannage` },
      { name: ville.nom, url: `${SITE_URL}/depannage/${ville.slug}` },
    ],
  });

  return (
    <>
      <JsonLd data={[localBusiness, ...servicesJsonLd, breadcrumb]} />
      <BorneHeader ville={ville} />
      <FilAriane
        items={[
          { label: 'Dépannage', href: '/depannage' },
          { label: ville.nom },
        ]}
      />

      <Borne ville={{ slug: ville.slug, nom: ville.nom }} />

      <BandeauConfiance />

      {ville.description && (
        <section className="container-borne py-10 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
              Dépannage local · {ville.codePostal}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-borne-encre">
              Plombier déboucheur à {ville.nom}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-borne-gris leading-relaxed">
              {ville.description}
            </p>
          </div>
        </section>
      )}

      <section className="container-borne py-10 sm:py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
              Nos derniers chantiers
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-borne-encre">
              Réalisations à {ville.nom}
            </h2>
          </div>
          <Link
            href={`/depannage/${ville.slug}/realisations`}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-borne-bleu hover:underline"
          >
            Toutes les réalisations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <RealisationGalerie
          realisations={realisations}
          vide={`Premières interventions documentées prochainement à ${ville.nom}.`}
        />
        <div className="mt-6 sm:hidden">
          <Link
            href={`/depannage/${ville.slug}/realisations`}
            className="inline-flex items-center gap-1 text-sm font-bold text-borne-bleu"
          >
            Voir toutes les réalisations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
