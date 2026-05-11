import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { FormulaireDevis } from '@/components/devis/FormulaireDevis';
import { getVilleBySlug } from '@/lib/villes';
import { getServices } from '@/lib/services';
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
    title: `Devis plombier déboucheur gratuit à ${ville.nom} (${ville.codePostal}) — Rappel sous 30 min`,
    description: `Demandez un devis gratuit, sans engagement et sans frais cachés pour votre dépannage plomberie à ${ville.nom} (${ville.codePostal}) : débouchage canalisation, inspection caméra, fosse septique, pompe de relevage. Réponse sous 30 minutes par un plombier local du Rhône (69), 24h/7j.`,
    alternates: { canonical: url },
  };
}

export default async function PageDevis({ params, searchParams }: Props) {
  const [ville, services] = await Promise.all([
    getVilleBySlug(params.ville),
    getServices(),
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
      />
    </>
  );
}
