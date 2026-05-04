import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { RealisationFiche } from '@/components/realisations/RealisationFiche';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getRealisationBySlug,
  getRealisations,
} from '@/lib/realisations';
import {
  buildArticleJsonLd,
  buildReviewJsonLd,
  buildBreadcrumbJsonLd,
} from '@/lib/seo';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 3600;

type Props = { params: { ville: string; slug: string } };

export async function generateStaticParams() {
  const realisations = await getRealisations();
  return realisations.map((r) => ({ ville: r.ville.slug, slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await getRealisationBySlug(params.slug);
  if (!r) return {};
  const url = `${SITE_URL}/depannage/${r.ville.slug}/realisations/${r.slug}`;
  return {
    title: `${r.titre} — Plombier déboucheur à ${r.ville.nom} (${r.ville.codePostal})`,
    description: `${r.description} · Chantier réalisé à ${r.ville.nom} (${r.ville.codePostal}) par notre plombier dépanneur 24h/7j sur tout le Rhône (69) — tarif transparent annoncé avant intervention.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${r.titre} — ${r.ville.nom} (${r.ville.codePostal})`,
      description: r.description,
      images: r.photoApres[0] ? [{ url: r.photoApres[0] }] : undefined,
    },
  };
}

export default async function PageFiche({ params }: Props) {
  const r = await getRealisationBySlug(params.slug);
  if (!r || r.ville.slug !== params.ville) notFound();

  const article = buildArticleJsonLd({ realisation: r, siteUrl: SITE_URL });
  const review = buildReviewJsonLd({ realisation: r, siteUrl: SITE_URL });
  const breadcrumb = buildBreadcrumbJsonLd({
    items: [
      { name: 'Accueil', url: SITE_URL },
      { name: 'Dépannage', url: `${SITE_URL}/depannage` },
      { name: r.ville.nom, url: `${SITE_URL}/depannage/${r.ville.slug}` },
      {
        name: 'Réalisations',
        url: `${SITE_URL}/depannage/${r.ville.slug}/realisations`,
      },
      { name: r.titre, url: `${SITE_URL}/depannage/${r.ville.slug}/realisations/${r.slug}` },
    ],
  });
  const data = review ? [article, review, breadcrumb] : [article, breadcrumb];

  return (
    <>
      <JsonLd data={data} />
      <BorneHeader ville={{ nom: r.ville.nom, codePostal: r.ville.codePostal }} />
      <FilAriane
        items={[
          { label: 'Dépannage', href: '/depannage' },
          { label: r.ville.nom, href: `/depannage/${r.ville.slug}` },
          {
            label: 'Réalisations',
            href: `/depannage/${r.ville.slug}/realisations`,
          },
          { label: r.titre },
        ]}
      />
      <RealisationFiche realisation={r} />
    </>
  );
}
