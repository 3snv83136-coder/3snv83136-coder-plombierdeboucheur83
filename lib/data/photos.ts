// ============================================================
// PHOTOS — Registre central des photos du site
// ============================================================
// Place tes photos dans public/images/ et référence-les ici.
// Exemple : '/images/ma-photo.jpg'
// ============================================================

// --- Photo du plombier (page d'accueil, SectionPhotoPlombier) ---
export const PHOTO_PLOMBIER = {
  src: '/images/plombier-intervention.jpg',
  alt: 'Plombier professionnel intervenant sur une canalisation à Toulon',
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

// --- Photos génériques avant / après (fallback pour mock data) ---
export const PHOTOS_AVANT_PAR_DEFAUT = [
  '/images/realisations/avant-canalisation-bouchee.jpg',
  '/images/realisations/avant-salle-de-bain.jpg',
  '/images/realisations/avant-evacuation.jpg',
];

export const PHOTOS_APRES_PAR_DEFAUT = [
  '/images/realisations/apres-cuisine-propre.jpg',
  '/images/realisations/apres-salle-de-bain.jpg',
  '/images/realisations/apres-canalisation.jpg',
];
