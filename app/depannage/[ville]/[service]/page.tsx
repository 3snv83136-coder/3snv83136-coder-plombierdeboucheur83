import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { Wizard } from '@/components/wizard/Wizard';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { getVilleBySlug, getVilles } from '@/lib/villes';
import { getServiceBySlug, getServices } from '@/lib/services';
import { getParametre } from '@/lib/parametres';
import {
  buildServiceJsonLd,
  buildFAQPageJsonLd,
  buildBreadcrumbJsonLd,
} from '@/lib/seo';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 3600;

type Props = { params: { ville: string; service: string } };

export async function generateStaticParams() {
  const [villes, services] = await Promise.all([getVilles(), getServices()]);
  return villes.flatMap((v) =>
    services.map((s) => ({ ville: v.slug, service: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [ville, service] = await Promise.all([
    getVilleBySlug(params.ville),
    getServiceBySlug(params.service),
  ]);
  if (!ville || !service) return {};
  const prixIndic = Math.floor(
    (service.prixMin / 100) * ville.facteurTarif
  );
  const url = `${SITE_URL}/depannage/${ville.slug}/${service.slug}`;
  return {
    title: `${service.nom} ${ville.nom} (${ville.codePostal}) — Tarif dès ${prixIndic} € · 24h/7j`,
    description: `${service.nom} à ${ville.nom} (${ville.codePostal}) par plombier dépanneur 24h/7j. Tarif transparent dès ${prixIndic} €, devis gratuit annoncé avant intervention, équipe locale sur tout le Rhône (69). Lancez la borne en 4 clics.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${service.nom} ${ville.nom} dès ${prixIndic} € — Plombier 24h/7j Rhône (69)`,
      description: `${service.nom} à ${ville.nom} : tarif transparent dès ${prixIndic} €, intervention sous 1h, devis gratuit annoncé avant.`,
    },
  };
}

export default async function PageWizard({ params }: Props) {
  const [ville, service, telephone] = await Promise.all([
    getVilleBySlug(params.ville),
    getServiceBySlug(params.service),
    getParametre('TEL_PRINCIPAL'),
  ]);
  if (!ville || !service) notFound();

  const facteurVille = ville.facteurTarif;
  const prixMinEuros = Math.floor((service.prixMin / 100) * facteurVille);
  const prixMaxEuros = Math.ceil((service.prixMax / 100) * facteurVille);

  const serviceJsonLd = buildServiceJsonLd({
    service,
    ville,
    siteUrl: SITE_URL,
  });
  const faqJsonLd = buildFAQPageJsonLd({
    questions: service.questions.map((q) => ({
      libelle: q.libelle,
      reponses: q.reponses.map((r) => ({
        libelle: r.libelle,
        facteurTarif: r.facteurTarif,
      })),
    })),
    prixMinEuros,
    prixMaxEuros,
    serviceNom: service.nom,
  });
  const breadcrumb = buildBreadcrumbJsonLd({
    items: [
      { name: 'Accueil', url: SITE_URL },
      { name: 'Dépannage', url: `${SITE_URL}/depannage` },
      { name: ville.nom, url: `${SITE_URL}/depannage/${ville.slug}` },
      {
        name: service.nom,
        url: `${SITE_URL}/depannage/${ville.slug}/${service.slug}`,
      },
    ],
  });

  return (
    <>
      <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumb]} />
      <BorneHeader ville={ville} />
      <FilAriane
        items={[
          { label: 'Dépannage', href: '/depannage' },
          { label: ville.nom, href: `/depannage/${ville.slug}` },
          { label: service.nom },
        ]}
      />
      <Wizard
        service={{
          slug: service.slug,
          nom: service.nom,
          icone: service.icone,
          couleur: service.couleur,
          prixMin: service.prixMin,
          prixMax: service.prixMax,
          questions: service.questions.map((q) => ({
            id: q.id,
            ordre: q.ordre,
            libelle: q.libelle,
            reponses: q.reponses.map((r) => ({
              id: r.id,
              libelle: r.libelle,
              icone: r.icone,
              facteurTarif: r.facteurTarif,
              forceDevis: r.forceDevis,
              ordre: r.ordre,
            })),
          })),
        }}
        ville={{
          slug: ville.slug,
          nom: ville.nom,
          facteurTarif: ville.facteurTarif,
        }}
        telephone={telephone}
      />
    </>
  );
}
