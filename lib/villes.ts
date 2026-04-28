import 'server-only';
import { prisma } from './prisma';
import { VILLES, type VilleData } from './data/mock';

export type Ville = VilleData & { id: string };

function fromMock(v: VilleData): Ville {
  return { id: v.slug, ...v };
}

export async function getVilles(): Promise<Ville[]> {
  if (prisma) {
    try {
      const list = await prisma.ville.findMany({ orderBy: { ordre: 'asc' } });
      if (list.length) {
        return list.map((v) => ({
          id: v.id,
          slug: v.slug,
          nom: v.nom,
          codePostal: v.codePostal,
          population: v.population,
          latitude: v.latitude,
          longitude: v.longitude,
          description: v.description ?? undefined,
          facteurTarif: v.facteurTarif,
          ordre: v.ordre,
        }));
      }
    } catch {
      // fallback
    }
  }
  return VILLES.map(fromMock);
}

export async function getVilleBySlug(slug: string): Promise<Ville | null> {
  const all = await getVilles();
  return all.find((v) => v.slug === slug) ?? null;
}
