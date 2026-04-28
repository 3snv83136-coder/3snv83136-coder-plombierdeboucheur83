import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { FormulaireDevis } from '@/components/devis/FormulaireDevis';
import { getVilleBySlug } from '@/lib/villes';
import { getServices } from '@/lib/services';
import { getParametre } from '@/lib/parametres';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 3600;

type Props = {
  params: { ville: string };
  searchParams: { service?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) return {};
  const url = `${SITE_URL}/depannage/${ville.slug}/devis`;
  return {
    title: `Devis dépannage gratuit à ${ville.nom} — Rappel sous 30 min`,
    description: `Demandez un devis gratuit pour votre dépannage à ${ville.nom}. Réponse sous 30 minutes par un technicien local.`,
    alternates: { canonical: url },
  };
}

export default async function PageDevis({ params, searchParams }: Props) {
  const [ville, services, telephone] = await Promise.all([
    getVilleBySlug(params.ville),
    getServices(),
    getParametre('TEL_PRINCIPAL'),
  ]);
  if (!ville) notFound();

  return (
    <>
      <BorneHeader ville={ville} />
      <FilAriane
        items={[
          { label: 'Dépannage', href: '/depannage' },
          { label: ville.nom, href: `/depannage/${ville.slug}` },
          { label: 'Devis' },
        ]}
      />
      <FormulaireDevis
        ville={{
          slug: ville.slug,
          nom: ville.nom,
          codePostal: ville.codePostal,
        }}
        services={services.map((s) => ({
          slug: s.slug,
          nom: s.nom,
          icone: s.icone,
          couleur: s.couleur,
        }))}
        serviceParDefaut={searchParams.service}
        telephone={telephone}
      />
    </>
  );
}
