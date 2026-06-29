// ============================================================
// AGRÉGATEUR DES BATCHES DE RÉALISATIONS
// ============================================================
// L'agent hebdomadaire ajoute un nouveau fichier de batch chaque
// semaine (nom = `YYYY-WNN.ts`), exporte `export const BATCH:
// RealisationData[] = [...]`, puis ajoute son import + spread ici.
//
// Convention du nom de fichier :
//   - 2026-W18.ts  → semaine ISO 18 de 2026
//   - 2026-W19.ts  → semaine ISO 19 de 2026
//   - etc.
//
// Cet index alimente `lib/realisations.ts`. Le batch initial (30
// réalisations seedées au lancement du site) reste dans
// `lib/data/mock.ts → REALISATIONS`.
// ============================================================

import type { RealisationData } from '../mock';
import { BATCH as W19 } from './2026-W19';
import { BATCH as W20 } from './2026-W20';
import { BATCH as W21 } from './2026-W21';
import { BATCH as W22 } from './2026-W22';
import { BATCH as W23 } from './2026-W23';
import { BATCH as W24 } from './2026-W24';
import { BATCH as W25 } from './2026-W25';
import { BATCH as W26 } from './2026-W26';
import { BATCH as W27 } from './2026-W27';

// === Batches hebdomadaires (à enrichir chaque semaine) ===
// Format : import { BATCH as W18 } from './2026-W18';
//          puis ajouter ...W18 dans le tableau ci-dessous.

export const BATCHES_HEBDO: RealisationData[] = [
  ...W19,
  ...W20,
  ...W21,
  ...W22,
  ...W23,
  ...W24,
  ...W25,
  ...W26,
  ...W27,
];
