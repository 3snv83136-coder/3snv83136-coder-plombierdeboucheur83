import type { Metadata } from 'next';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { Borne } from '@/components/borne/Borne';
import { BorneSelecteurVille } from '@/components/borne/BorneSelecteurVille';
import { BandeauConfiance } from '@/components/borne/BandeauConfiance';
import { FilAriane } from '@/components/shared/Breadcrumb';
import { Icone } from '@/components/shared/Icone';
import { getServiceBySlug } from '@/lib/services';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Dépannage plombier déboucheur Rhône (69) — Choisissez votre ville',
  description:
    'Sélectionnez votre ville du Rhône (Lyon, Villeurbanne, Vénissieux, Saint-Priest, Bron…) pour lancer la borne dépannage plombier : tarif transparent en 4 clics, intervention sous 1h 24h/7j, débouchage canalisation, inspection caméra, fosse septique, pompe de relevage.',
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
          <p className="mt-1 inline-flex w-full items-center justify-center gap-3 text-2xl sm:text-3xl font-black text-borne-encre">
            <Icone
              name={servicePreselectionne.icone}
              className="h-7 w-7"
              strokeWidth={2.2}
            />
            {servicePreselectionne.nom}
          </p>
          <p className="mt-1 text-center text-sm text-borne-gris">
            Choisissez votre ville pour voir le tarif
          </p>
        </section>
      ) : (
        <Borne
          surtitre="Borne dépannage Rhône · 24h/7j"
          titre="Quel est votre problème ?"
        />
      )}

      <BorneSelecteurVille
        surtitre={
          servicePreselectionne
            ? `Choisissez votre ville pour ${servicePreselectionne.nom.toLowerCase()}`
            : 'Top 10 du Rhône'
        }
        titre="Sélectionnez votre ville"
        servicePreselectionne={servicePreselectionne?.slug}
      />
      <BandeauConfiance />
    </>
  );
}
