import 'server-only';
import { getServiceBySlug } from './services';
import { getVilleBySlug } from './villes';
import { calculerTarifSync, type ResultatTarif } from './calcul-tarif';

export type { ResultatTarif } from './calcul-tarif';
export { calculerTarifSync, formaterPrix } from './calcul-tarif';

export async function calculerTarif(
  serviceSlug: string,
  villeSlug: string,
  facteursReponses: number[],
  forceDevis: boolean
): Promise<ResultatTarif | null> {
  const service = await getServiceBySlug(serviceSlug);
  const ville = await getVilleBySlug(villeSlug);
  if (!service || !ville) return null;

  return calculerTarifSync({
    prixMinBase: service.prixMin,
    prixMaxBase: service.prixMax,
    facteurVille: ville.facteurTarif,
    facteursReponses,
    forceDevis,
  });
}
