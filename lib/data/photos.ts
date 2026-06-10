// ============================================================
// PHOTOS — Registre central des photos du site
// ============================================================
// Place tes photos dans public/images/ et référence-les ici.
// Exemple : '/images/ma-photo.jpg'
// ============================================================

// --- Photo du plombier (page d'accueil, SectionPhotoPlombier) ---
export const PHOTO_PLOMBIER = {
  src: '/images/plombier-intervention.jpg',
  alt: 'Plombier professionnel intervenant sur une canalisation à Lyon',
};

// --- Photo de la Section Assurance ---
export const PHOTO_ASSURANCE = {
  src: '/images/outils-plombier.jpg',
  alt: 'Outils professionnels de plombier — clés, manomètre, équipement de débouchage',
};

// --- Photos des réalisations (avant / après) ---
// Pour chaque réalisation, mets les photos dans public/images/realisations/
// Format recommandé : /images/realisations/{slug}-avant.jpg, {slug}-apres.jpg

export type PhotoRealisation = {
  slug: string;
  avant: string;
  apres: string;
};

export const PHOTOS_REALISATIONS: PhotoRealisation[] = [
  // {
  //   slug: 'debouchage-toulon-1',
  //   avant: '/images/realisations/debouchage-toulon-1-avant.jpg',
  //   apres: '/images/realisations/debouchage-toulon-1-apres.jpg',
  // },
];

// --- Photos chantier réelles (cyclées sur les réalisations) ---
// 41 photos uniques prises sur chantier. Split en deux pools pour
// que `photoAvant[0]` et `photoApres[0]` d'une même réalisation ne
// pointent jamais sur le même fichier.

export const PHOTOS_AVANT_PAR_DEFAUT = [
  '/images/realisations/IMG_0670.jpeg',
  '/images/realisations/IMG_0899.jpeg',
  '/images/realisations/IMG_0902.jpeg',
  '/images/realisations/IMG_0920.jpg',
  '/images/realisations/IMG_0995.jpeg',
  '/images/realisations/IMG_1028.jpeg',
  '/images/realisations/IMG_1087.jpeg',
  '/images/realisations/IMG_1089.jpeg',
  '/images/realisations/IMG_1090.png',
  '/images/realisations/IMG_1098.jpeg',
  '/images/realisations/IMG_1102.jpeg',
  '/images/realisations/IMG_1104.jpeg',
  '/images/realisations/IMG_1146.jpeg',
  '/images/realisations/IMG_1210.jpeg',
  '/images/realisations/IMG_1247.jpeg',
  '/images/realisations/IMG_1284.jpeg',
  '/images/realisations/IMG_1304.jpeg',
  '/images/realisations/IMG_1350.jpeg',
  '/images/realisations/IMG_1397.jpeg',
  '/images/realisations/IMG_1456.jpeg',
  '/images/realisations/IMG_1482.jpeg',
  '/images/realisations/IMG_1498.jpeg',
  '/images/realisations/FullSizeRender.jpeg',
  '/images/realisations/avant-canalisation-bouchee.jpg',
  '/images/realisations/avant-evacuation.jpg',
  '/images/realisations/avant-salle-de-bain.jpg',
];

export const PHOTOS_APRES_PAR_DEFAUT = [
  '/images/realisations/IMG_0897.jpeg',
  '/images/realisations/IMG_0900.jpeg',
  '/images/realisations/IMG_0903.jpeg',
  '/images/realisations/IMG_0987.jpeg',
  '/images/realisations/IMG_1024.jpeg',
  '/images/realisations/IMG_1081.jpeg',
  '/images/realisations/IMG_1088.jpeg',
  '/images/realisations/IMG_1097.jpeg',
  '/images/realisations/IMG_1101.jpeg',
  '/images/realisations/IMG_1103.jpeg',
  '/images/realisations/IMG_1145.jpeg',
  '/images/realisations/IMG_1202.jpeg',
  '/images/realisations/IMG_1231.jpeg',
  '/images/realisations/IMG_1274.jpeg',
  '/images/realisations/IMG_1300.jpg',
  '/images/realisations/IMG_1307.jpeg',
  '/images/realisations/IMG_1394.jpg',
  '/images/realisations/IMG_1415.jpeg',
  '/images/realisations/IMG_1463.jpeg',
  '/images/realisations/IMG_1495.jpeg',
  '/images/realisations/apres-canalisation.jpg',
  '/images/realisations/apres-cuisine-propre.jpg',
  '/images/realisations/apres-salle-de-bain.jpg',
];

/** Image de secours si une réalisation n'a pas de photo valide. */
export const PHOTO_REALISATION_FALLBACK = PHOTO_PLOMBIER.src;

/** Attribue une paire avant/après locale distincte selon l'index. */
export function photosPourRealisation(index: number): {
  photoAvant: string[];
  photoApres: string[];
} {
  const nAvant = PHOTOS_AVANT_PAR_DEFAUT.length;
  const nApres = PHOTOS_APRES_PAR_DEFAUT.length;
  const i =
    ((index % nAvant) + nAvant) % nAvant;
  let j = (i + 3 + (index % 7)) % nApres;
  if (PHOTOS_APRES_PAR_DEFAUT[j] === PHOTOS_AVANT_PAR_DEFAUT[i]) {
    j = (j + 1) % nApres;
  }
  return {
    photoAvant: [PHOTOS_AVANT_PAR_DEFAUT[i]],
    photoApres: [PHOTOS_APRES_PAR_DEFAUT[j]],
  };
}
