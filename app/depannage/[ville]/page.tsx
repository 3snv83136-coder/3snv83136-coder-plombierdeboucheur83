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
import { ContenuSeoVille } from '@/components/sections/ContenuSeoVille';
import { SectionAvis } from '@/components/sections/SectionAvis';
import { SectionAssurance } from '@/components/sections/SectionAssurance';
import { VillesProches } from '@/components/sections/VillesProches';
import { getVilleBySlug, getVilles } from '@/lib/villes';
import { getRealisationsParVille } from '@/lib/realisations';
import { getServices } from '@/lib/services';
import { getParametres } from '@/lib/parametres';
import {
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
  buildBreadcrumbJsonLd,
  buildAggregateRatingJsonLd,
} from '@/lib/seo';
import { CONTENU_VILLES_SEO } from '@/lib/content/villes-seo';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

export const revalidate = 3600;

type Props = { params: { ville: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) return {};
  const url = `${SITE_URL}/depannage/${ville.slug}`;
  return {
    title: `Plombier déboucheur ${ville.nom} (${ville.codePostal}) — Tarif transparent 24h/7j`,
    description: `Plombier urgence et dépanneur à ${ville.nom} (${ville.codePostal}) : débouchage canalisation, inspection caméra HD, vidange fosse septique, pompe de relevage. Tarif annoncé en 4 clics, devis gratuit, intervention sous 1h 24h/7j sur tout le Rhône (69).`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `Plombier déboucheur ${ville.nom} (${ville.codePostal}) — 24h/7j tarif transparent`,
      description: `Dépannage plomberie à ${ville.nom} : débouchage canalisation, hydrocureur, inspection caméra, fosse septique, pompe de relevage. Devis gratuit, intervention sous 1h.`,
    },
  };
}

export default async function PageVille({ params }: Props) {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) notFound();
  const [realisationsToutes, realisationsTop, services, parametres, villes] =
    await Promise.all([
      getRealisationsParVille(ville.slug),
      getRealisationsParVille(ville.slug, 6),
      getServices(),
      getParametres(),
      getVilles(),
    ]);

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

  const contenuSeo = CONTENU_VILLES_SEO[ville.slug];

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

      {/* 4 CONTAINERS */}
      <Borne ville={{ slug: ville.slug, nom: ville.nom }} />

      {/* RÉALISATIONS — directement sous les containers */}
      <section className="container-borne pt-2 pb-10 sm:pb-14">
        <div className="mb-5 flex items-end justify-between gap-4">
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
          realisations={realisationsTop}
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

      {/* CONTENU SEO ÉTENDU — ~1700 mots unique par ville */}
      {contenuSeo && (
        <ContenuSeoVille
          contenu={contenuSeo}
          ville={{
            slug: ville.slug,
            nom: ville.nom,
            codePostal: ville.codePostal,
          }}
        />
      )}

      <BandeauConfiance />

      {/* AVIS + ASSURANCE pour cohérence avec home */}
      <SectionAvis />
      <SectionAssurance />

      <VillesProches
        villeActuelle={{ slug: ville.slug, nom: ville.nom, codePostal: ville.codePostal }}
        villes={villes.map((v) => ({ slug: v.slug, nom: v.nom, codePostal: v.codePostal }))}
      />
    </>
  );
}
