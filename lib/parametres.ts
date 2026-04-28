import 'server-only';
import { prisma } from './prisma';
import { PARAMETRES } from './data/mock';

export async function getParametre(cle: string): Promise<string> {
  if (prisma) {
    try {
      const p = await prisma.parametre.findUnique({ where: { cle } });
      if (p?.valeur) return p.valeur;
    } catch {
      // tombe sur le fallback
    }
  }
  return PARAMETRES[cle] ?? '';
}

export async function getParametres(): Promise<Record<string, string>> {
  if (prisma) {
    try {
      const all = await prisma.parametre.findMany();
      if (all.length) {
        return Object.fromEntries(all.map((p) => [p.cle, p.valeur]));
      }
    } catch {
      // fallback
    }
  }
  return PARAMETRES;
}
