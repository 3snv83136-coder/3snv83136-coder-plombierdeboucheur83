// ============================================================
// CALCUL TARIF — fonctions pures, utilisables côté client.
// Pas de 'server-only'. Pas d'import DB.
// ============================================================

export type ResultatTarif =
  | { mode: 'prix'; prixMin: number; prixMax: number; facteurTotal: number }
  | { mode: 'devis' };

export function calculerTarifSync(args: {
  prixMinBase: number;
  prixMaxBase: number;
  facteurVille: number;
  facteursReponses: number[];
  forceDevis: boolean;
}): ResultatTarif {
  if (args.forceDevis) return { mode: 'devis' };
  const facteurReponses = args.facteursReponses.reduce((acc, f) => acc * f, 1);
  const facteurTotal = facteurReponses * args.facteurVille;
  const prixMin = Math.floor((args.prixMinBase / 100) * facteurTotal);
  const prixMax = Math.ceil((args.prixMaxBase / 100) * facteurTotal);
  return { mode: 'prix', prixMin, prixMax, facteurTotal };
}

export function formaterPrix(prixMin: number, prixMax: number): string {
  if (Math.abs(prixMax - prixMin) <= 10) return `À partir de ${prixMin} €`;
  return `Entre ${prixMin} € et ${prixMax} €`;
}
