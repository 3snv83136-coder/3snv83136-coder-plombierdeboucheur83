import type { Metadata } from 'next';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { Borne } from '@/components/borne/Borne';
import { BorneSelecteurVille } from '@/components/borne/BorneSelecteurVille';
import { BandeauConfiance } from '@/components/borne/BandeauConfiance';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { getServiceBySlug } from '@/lib/services';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Dépannage canalisation Var (83) — Choisissez votre ville',
  description:
    'Sélectionnez votre ville du Var pour lancer la borne dépannage : tarif transparent en 4 clics et appel direct au plombier.',
  alternates: { canonical: '/depannage' },
};

type Props = { searchParams: { service?: string } };

export default async function DepannageIndex({ searchParams }: Props) {
  const servicePreselectionne = searchParams.service
    ? await getServiceBySlug(searchParams.service)
    : null;

  return (
    <>
      <BorneHeader />
      <FilAriane items={[{ label: 'Dépannage' }]} />

      {servicePreselectionne ? (
        <section className="container-borne pt-2 pb-4 sm:pt-6">
          <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            Service présélectionné
          </p>
          <p className="mt-1 text-center text-2xl sm:text-3xl font-black text-borne-encre">
            {servicePreselectionne.icone} {servicePreselectionne.nom}
          </p>
          <p className="mt-1 text-center text-sm text-borne-gris">
            Choisissez votre ville pour voir le tarif
          </p>
        </section>
      ) : (
        <Borne
          surtitre="Borne dépannage Var · 24h/7j"
          titre="Quel est votre problème ?"
        />
      )}

      <BorneSelecteurVille
        surtitre={
          servicePreselectionne
            ? `Choisissez votre ville pour ${servicePreselectionne.nom.toLowerCase()}`
            : 'Top 10 du Var'
        }
        titre="Sélectionnez votre ville"
        servicePreselectionne={servicePreselectionne?.slug}
      />
      <BandeauConfiance />
    </>
  );
}
