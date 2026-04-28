import type { Metadata } from 'next';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { BorneSelecteurVille } from '@/components/borne/BorneSelecteurVille';
import { BandeauConfiance } from '@/components/borne/BandeauConfiance';
import { FilAriane } from '@/components/shared/Breadcrumb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Dépannage canalisation Var (83) — Choisissez votre ville',
  description:
    'Sélectionnez votre ville du Var pour lancer la borne dépannage : tarif transparent en 4 clics et appel direct au plombier.',
  alternates: { canonical: '/depannage' },
};

export default function DepannageIndex() {
  return (
    <>
      <BorneHeader />
      <FilAriane items={[{ label: 'Dépannage' }]} />
      <BorneSelecteurVille
        surtitre="Top 10 du Var"
        titre="Sélectionnez votre ville"
      />
      <BandeauConfiance />
    </>
  );
}
