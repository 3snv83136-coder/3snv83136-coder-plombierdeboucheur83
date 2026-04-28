import 'server-only';
import { prisma } from './prisma';
import { SERVICES, type ServiceData } from './data/mock';

export type ServiceComplet = {
  id: string;
  slug: string;
  nom: string;
  icone: string;
  couleur: string;
  description: string;
  ordre: number;
  prixMin: number;
  prixMax: number;
  questions: {
    id: string;
    ordre: number;
    libelle: string;
    reponses: {
      id: string;
      libelle: string;
      icone: string;
      facteurTarif: number;
      forceDevis: boolean;
      ordre: number;
    }[];
  }[];
};

function fromMock(s: ServiceData): ServiceComplet {
  return {
    id: s.slug,
    slug: s.slug,
    nom: s.nom,
    icone: s.icone,
    couleur: s.couleur,
    description: s.description,
    ordre: s.ordre,
    prixMin: s.prixMin,
    prixMax: s.prixMax,
    questions: s.questions.map((q) => ({
      id: `${s.slug}-q${q.ordre}`,
      ordre: q.ordre,
      libelle: q.libelle,
      reponses: q.reponses.map((r) => ({
        id: `${s.slug}-q${q.ordre}-r${r.ordre}`,
        libelle: r.libelle,
        icone: r.icone,
        facteurTarif: r.facteurTarif,
        forceDevis: r.forceDevis,
        ordre: r.ordre,
      })),
    })),
  };
}

export async function getServices(): Promise<ServiceComplet[]> {
  if (prisma) {
    try {
      const services = await prisma.service.findMany({
        orderBy: { ordre: 'asc' },
        include: {
          tarif: true,
          questions: {
            orderBy: { ordre: 'asc' },
            include: { reponses: { orderBy: { ordre: 'asc' } } },
          },
        },
      });
      if (services.length) {
        return services.map((s) => ({
          id: s.id,
          slug: s.slug,
          nom: s.nom,
          icone: s.icone,
          couleur: s.couleur,
          description: s.description,
          ordre: s.ordre,
          prixMin: s.tarif?.prixMin ?? 9900,
          prixMax: s.tarif?.prixMax ?? 19900,
          questions: s.questions.map((q) => ({
            id: q.id,
            ordre: q.ordre,
            libelle: q.libelle,
            reponses: q.reponses.map((r) => ({
              id: r.id,
              libelle: r.libelle,
              icone: r.icone ?? '•',
              facteurTarif: r.facteurTarif,
              forceDevis: r.forceDevis,
              ordre: r.ordre,
            })),
          })),
        }));
      }
    } catch {
      // fallback
    }
  }
  return SERVICES.map(fromMock);
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceComplet | null> {
  const all = await getServices();
  return all.find((s) => s.slug === slug) ?? null;
}
