import 'server-only';
import { prisma } from './prisma';
import { REALISATIONS, VILLES, SERVICES, type RealisationData } from './data/mock';
import { BATCHES_HEBDO } from './data/realisations';

const TOUTES_REALISATIONS: RealisationData[] = [
  ...REALISATIONS,
  ...BATCHES_HEBDO,
];

export type RealisationComplete = {
  id: string;
  slug: string;
  titre: string;
  description: string;
  contexte: string;
  solution: string;
  resultat: string;
  photoAvant: string[];
  photoApres: string[];
  dateRealisation: Date;
  dureeIntervention: number | null;
  noteClient: number | null;
  avisClient: string | null;
  prenomClient: string | null;
  ville: { slug: string; nom: string; codePostal: string };
  service: { slug: string; nom: string; couleur: string; icone: string };
};

function fromMock(r: RealisationData): RealisationComplete {
  const ville = VILLES.find((v) => v.slug === r.villeSlug)!;
  const service = SERVICES.find((s) => s.slug === r.serviceSlug)!;
  return {
    id: r.slug,
    slug: r.slug,
    titre: r.titre,
    description: r.description,
    contexte: r.contexte,
    solution: r.solution,
    resultat: r.resultat,
    photoAvant: r.photoAvant,
    photoApres: r.photoApres,
    dateRealisation: new Date(r.dateRealisation),
    dureeIntervention: r.dureeIntervention,
    noteClient: r.noteClient,
    avisClient: r.avisClient,
    prenomClient: r.prenomClient,
    ville: { slug: ville.slug, nom: ville.nom, codePostal: ville.codePostal },
    service: {
      slug: service.slug,
      nom: service.nom,
      couleur: service.couleur,
      icone: service.icone,
    },
  };
}

async function getAllFromDb(): Promise<RealisationComplete[] | null> {
  if (!prisma) return null;
  try {
    const list = await prisma.realisation.findMany({
      where: { publie: true },
      orderBy: { dateRealisation: 'desc' },
      include: { ville: true, service: true },
    });
    if (!list.length) return null;
    return list.map((r) => ({
      id: r.id,
      slug: r.slug,
      titre: r.titre,
      description: r.description,
      contexte: r.contexte,
      solution: r.solution,
      resultat: r.resultat,
      photoAvant: r.photoAvant,
      photoApres: r.photoApres,
      dateRealisation: r.dateRealisation,
      dureeIntervention: r.dureeIntervention,
      noteClient: r.noteClient,
      avisClient: r.avisClient,
      prenomClient: r.prenomClient,
      ville: {
        slug: r.ville.slug,
        nom: r.ville.nom,
        codePostal: r.ville.codePostal,
      },
      service: {
        slug: r.service.slug,
        nom: r.service.nom,
        couleur: r.service.couleur,
        icone: r.service.icone,
      },
    }));
  } catch {
    return null;
  }
}

export async function getRealisations(): Promise<RealisationComplete[]> {
  const fromDb = await getAllFromDb();
  if (fromDb) return fromDb;
  return TOUTES_REALISATIONS.filter((r) => r.publie)
    .map(fromMock)
    .sort((a, b) => b.dateRealisation.getTime() - a.dateRealisation.getTime());
}

export async function getRealisationsParVille(
  villeSlug: string,
  limit?: number
): Promise<RealisationComplete[]> {
  const all = await getRealisations();
  const filtre = all.filter((r) => r.ville.slug === villeSlug);
  return limit ? filtre.slice(0, limit) : filtre;
}

export async function getRealisationBySlug(
  slug: string
): Promise<RealisationComplete | null> {
  const all = await getRealisations();
  return all.find((r) => r.slug === slug) ?? null;
}
