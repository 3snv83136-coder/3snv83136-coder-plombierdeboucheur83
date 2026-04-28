import { notFound } from 'next/navigation';
import { getVilleBySlug, getVilles } from '@/lib/villes';

export async function generateStaticParams() {
  const villes = await getVilles();
  return villes.map((v) => ({ ville: v.slug }));
}

export default async function VilleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { ville: string };
}) {
  const ville = await getVilleBySlug(params.ville);
  if (!ville) notFound();
  return <>{children}</>;
}
