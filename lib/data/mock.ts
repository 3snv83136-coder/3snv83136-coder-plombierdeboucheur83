// ============================================================
// FALLBACK / SEED DATA
// ============================================================
// Source unique de vérité tant que la DB Supabase n'est pas
// configurée. Mêmes données que le seed Prisma.
// Le code ne lit jamais ces objets directement : il passe par
// les fonctions de lib/services.ts, lib/villes.ts, etc., qui
// tentent d'abord la DB et tombent sur ce fallback.
// ============================================================

export type VilleData = {
  slug: string;
  nom: string;
  codePostal: string;
  population: number;
  latitude: number;
  longitude: number;
  description?: string;
  facteurTarif: number;
  ordre: number;
};

export type ReponseData = {
  libelle: string;
  icone: string;
  facteurTarif: number;
  forceDevis: boolean;
  ordre: number;
};

export type QuestionData = {
  ordre: number;
  libelle: string;
  reponses: ReponseData[];
};

export type ServiceData = {
  slug: string;
  nom: string;
  icone: string;
  couleur: string;
  description: string;
  ordre: number;
  prixMin: number;
  prixMax: number;
  questions: QuestionData[];
};

export type RealisationData = {
  slug: string;
  villeSlug: string;
  serviceSlug: string;
  titre: string;
  description: string;
  contexte: string;
  solution: string;
  resultat: string;
  photoAvant: string[];
  photoApres: string[];
  dateRealisation: string;
  dureeIntervention: number;
  noteClient: number;
  avisClient: string;
  prenomClient: string;
  publie: boolean;
};

// ============================================================
// PARAMÈTRES
// ============================================================
export const PARAMETRES: Record<string, string> = {
  TEL_PRINCIPAL: '04 22 14 60 83',
  EMAIL_CONTACT: 'contact@plombierdeboucheur83.fr',
  NOM_ENTREPRISE: 'Plombier Déboucheur 83',
  SIRET: '—',
  ADRESSE_SIEGE: 'Toulon, Var (83)',
  HORAIRES: '24h/7j — Intervention sous 1h',
  ASSURANCE_RC_PRO: 'Assurance RC Pro souscrite',
};

// ============================================================
// VILLES
// ============================================================
export const VILLES: VilleData[] = [
  {
    slug: 'toulon',
    nom: 'Toulon',
    codePostal: '83000',
    population: 178000,
    latitude: 43.1242,
    longitude: 5.928,
    facteurTarif: 1.0,
    ordre: 1,
    description:
      "Préfecture du Var, Toulon concentre la majorité des interventions urgentes du département. Réseaux d'évacuation anciens dans le centre-ville (quartiers Mourillon, Pont du Las, Saint-Roch), copropriétés Haussmanniennes et résidences modernes du Cap-Brun : nos camions hydrocureurs interviennent sous 60 minutes en zone urbaine.",
  },
  {
    slug: 'la-seyne-sur-mer',
    nom: 'La Seyne-sur-Mer',
    codePostal: '83500',
    population: 65000,
    latitude: 43.1006,
    longitude: 5.881,
    facteurTarif: 1.0,
    ordre: 2,
    description:
      'Deuxième ville du Var, La Seyne-sur-Mer présente un mix de zones balnéaires (Tamaris, Les Sablettes) et de quartiers anciens où les fosses septiques sont fréquentes. Notre équipe est rodée aux urgences débouchage en sous-sol.',
  },
  {
    slug: 'hyeres',
    nom: 'Hyères',
    codePostal: '83400',
    population: 57000,
    latitude: 43.1206,
    longitude: 6.128,
    facteurTarif: 1.05,
    ordre: 3,
    description:
      'Hyères et ses presqu\'îles (Giens, Porquerolles côté continent) demandent un savoir-faire particulier en pompage de fosses, micro-stations et pompes de relevage soumises au sel marin.',
  },
  {
    slug: 'frejus',
    nom: 'Fréjus',
    codePostal: '83600',
    population: 55000,
    latitude: 43.4332,
    longitude: 6.737,
    facteurTarif: 1.05,
    ordre: 4,
    description:
      'Fréjus, ville romaine à forte densité touristique en saison. Nous intervenons aussi bien dans le centre historique que sur les zones pavillonnaires de Saint-Aygulf.',
  },
  {
    slug: 'draguignan',
    nom: 'Draguignan',
    codePostal: '83300',
    population: 40000,
    latitude: 43.5379,
    longitude: 6.466,
    facteurTarif: 1.1,
    ordre: 5,
    description:
      'Sous-préfecture du Var, Draguignan dans le haut-Var : nombreuses propriétés en assainissement non collectif, pompage fosse septique fréquent.',
  },
  {
    slug: 'saint-raphael',
    nom: 'Saint-Raphaël',
    codePostal: '83700',
    population: 36000,
    latitude: 43.4253,
    longitude: 6.7686,
    facteurTarif: 1.05,
    ordre: 6,
    description:
      'Station balnéaire avec une forte saisonnalité, Saint-Raphaël concentre des résidences secondaires nécessitant des interventions rapides en haute saison.',
  },
  {
    slug: 'six-fours-les-plages',
    nom: 'Six-Fours-les-Plages',
    codePostal: '83140',
    population: 34000,
    latitude: 43.0938,
    longitude: 5.8358,
    facteurTarif: 1.0,
    ordre: 7,
    description:
      'Six-Fours-les-Plages : zone côtière proche de Toulon, intervention sous 60 minutes pour la plupart des urgences débouchage et pompage.',
  },
  {
    slug: 'la-garde',
    nom: 'La Garde',
    codePostal: '83130',
    population: 25000,
    latitude: 43.1264,
    longitude: 6.0094,
    facteurTarif: 1.0,
    ordre: 8,
    description:
      'La Garde, banlieue est de Toulon : zones résidentielles, copropriétés, et secteur universitaire. Réseaux d\'évacuation modernes, débouchage standard rapide.',
  },
  {
    slug: 'la-valette-du-var',
    nom: 'La Valette-du-Var',
    codePostal: '83160',
    population: 24000,
    latitude: 43.1392,
    longitude: 5.9819,
    facteurTarif: 1.0,
    ordre: 9,
    description:
      "La Valette-du-Var : zone d'activité commerciale de l'aire toulonnaise. Beaucoup d'interventions sur installations professionnelles (restaurants, commerces).",
  },
  {
    slug: 'sanary-sur-mer',
    nom: 'Sanary-sur-Mer',
    codePostal: '83110',
    population: 17000,
    latitude: 43.1186,
    longitude: 5.8019,
    facteurTarif: 1.05,
    ordre: 10,
    description:
      'Port de pêche pittoresque, Sanary-sur-Mer mêle vieilles maisons de village et villas récentes. Réseaux variés, expertise diagnostic indispensable.',
  },
];

// ============================================================
// SERVICES + QUESTIONS
// ============================================================
export const SERVICES: ServiceData[] = [
  {
    slug: 'debouchage',
    nom: 'Débouchage canalisation',
    icone: '🚿',
    couleur: '#2563eb',
    ordre: 1,
    prixMin: 9900,
    prixMax: 19900,
    description:
      "Débouchage haute pression d'évier, WC, douche, baignoire et canalisations principales. Intervention curative et passage caméra inclus si besoin.",
    questions: [
      {
        ordre: 1,
        libelle: 'Quel élément est bouché ?',
        reponses: [
          { libelle: 'Évier / Lavabo', icone: '🚰', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'WC', icone: '🚽', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Douche / Baignoire', icone: '🛁', facteurTarif: 1.0, forceDevis: false, ordre: 3 },
          { libelle: 'Canalisation principale', icone: '🕳️', facteurTarif: 1.5, forceDevis: false, ordre: 4 },
          { libelle: 'Toutes les évacuations', icone: '⚠️', facteurTarif: 1.8, forceDevis: true, ordre: 5 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Depuis quand ?',
        reponses: [
          { libelle: "Aujourd'hui", icone: '⚡', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Quelques jours', icone: '📅', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: 'Plusieurs semaines', icone: '⏳', facteurTarif: 1.3, forceDevis: false, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Refoulement ou odeurs ?',
        reponses: [
          { libelle: 'Non', icone: '✅', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Odeurs uniquement', icone: '👃', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: "Refoulement d'eau", icone: '💧', facteurTarif: 1.4, forceDevis: false, ordre: 3 },
          { libelle: 'Refoulement de matières', icone: '🚨', facteurTarif: 1.6, forceDevis: true, ordre: 4 },
        ],
      },
    ],
  },
  {
    slug: 'inspection-camera',
    nom: 'Inspection caméra',
    icone: '📹',
    couleur: '#7c3aed',
    ordre: 2,
    prixMin: 14900,
    prixMax: 29900,
    description:
      "Diagnostic vidéo précis du réseau d'évacuation : recherche de fuite, casse, contre-pente, racines. Rapport vidéo livré.",
    questions: [
      {
        ordre: 1,
        libelle: 'Pourquoi cette inspection ?',
        reponses: [
          { libelle: 'Diagnostic après débouchage', icone: '🔍', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'État avant achat / vente', icone: '🏠', facteurTarif: 1.1, forceDevis: false, ordre: 2 },
          { libelle: 'Recherche fuite / casse', icone: '💧', facteurTarif: 1.2, forceDevis: false, ordre: 3 },
          { libelle: 'Avant travaux', icone: '🚧', facteurTarif: 1.0, forceDevis: false, ordre: 4 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Longueur estimée du réseau ?',
        reponses: [
          { libelle: 'Moins de 10 m', icone: '📏', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '10 à 30 m', icone: '📐', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 30 m', icone: '🛣️', facteurTarif: 1.5, forceDevis: true, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Accès au regard ?',
        reponses: [
          { libelle: 'Oui, accessible', icone: '✅', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Non, à dégager', icone: '🪨', facteurTarif: 1.3, forceDevis: false, ordre: 2 },
        ],
      },
    ],
  },
  {
    slug: 'fosse-septique',
    nom: 'Pompage fosse septique',
    icone: '🚛',
    couleur: '#16a34a',
    ordre: 3,
    prixMin: 24900,
    prixMax: 49900,
    description:
      "Vidange fosse toutes eaux, fosse septique seule, micro-station et bac à graisses avec camion hydrocureur agréé évacuation des boues.",
    questions: [
      {
        ordre: 1,
        libelle: "Type d'installation ?",
        reponses: [
          { libelle: 'Fosse toutes eaux', icone: '🛢️', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Fosse septique seule', icone: '🛢️', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: 'Bac à graisses', icone: '🍳', facteurTarif: 0.8, forceDevis: false, ordre: 3 },
          { libelle: 'Micro-station', icone: '⚙️', facteurTarif: 1.3, forceDevis: false, ordre: 4 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Volume estimé ?',
        reponses: [
          { libelle: '1000 à 3000 L', icone: '📦', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '3000 à 5000 L', icone: '📦', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 5000 L', icone: '📦', facteurTarif: 1.5, forceDevis: true, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Dernière vidange ?',
        reponses: [
          { libelle: "Moins d'un an", icone: '🆕', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '1 à 4 ans', icone: '📅', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 4 ans / jamais', icone: '⏳', facteurTarif: 1.2, forceDevis: false, ordre: 3 },
        ],
      },
      {
        ordre: 4,
        libelle: 'Distance camion → regard ?',
        reponses: [
          { libelle: 'Moins de 30 m', icone: '🚛', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '30 à 50 m', icone: '🚛', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 50 m', icone: '🚛', facteurTarif: 1.5, forceDevis: true, ordre: 3 },
        ],
      },
    ],
  },
  {
    slug: 'pompe-relevage',
    nom: 'Pompe de relevage',
    icone: '⚙️',
    couleur: '#ea580c',
    ordre: 4,
    prixMin: 19900,
    prixMax: 89900,
    description:
      "Diagnostic, dépannage, remplacement et installation de pompes de relevage eaux usées, eaux vannes et eaux pluviales.",
    questions: [
      {
        ordre: 1,
        libelle: "Type d'intervention ?",
        reponses: [
          { libelle: 'Diagnostic / panne', icone: '🔧', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Remplacement', icone: '🔄', facteurTarif: 1.3, forceDevis: false, ordre: 2 },
          { libelle: 'Installation neuve', icone: '🆕', facteurTarif: 1.6, forceDevis: true, ordre: 3 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Type de pompe ?',
        reponses: [
          { libelle: 'Eaux usées domestiques', icone: '💧', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Eaux vannes (WC)', icone: '🚽', facteurTarif: 1.1, forceDevis: false, ordre: 2 },
          { libelle: 'Eaux pluviales', icone: '🌧️', facteurTarif: 1.0, forceDevis: false, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Symptôme ?',
        reponses: [
          { libelle: 'Ne démarre pas', icone: '❌', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Tourne sans pomper', icone: '🔄', facteurTarif: 1.1, forceDevis: false, ordre: 2 },
          { libelle: 'Bruit anormal', icone: '🔊', facteurTarif: 1.0, forceDevis: false, ordre: 3 },
          { libelle: 'Disjoncte', icone: '⚡', facteurTarif: 1.2, forceDevis: false, ordre: 4 },
        ],
      },
    ],
  },
];

// ============================================================
// RÉALISATIONS (3 par ville × 10 villes = 30)
// ============================================================
const photoSrc = (kw: string, n: number) =>
  `https://images.unsplash.com/photo-${kw}?auto=format&fit=crop&w=1200&q=80&v=${n}`;

const PHOTOS_AVANT = [
  '1591035897819-f4bdf739f446', // pipe
  '1581094288338-2314dddb7ece', // bathroom
  '1558618666-fcd25c85cd64', // tools
  '1581244277943-fe4a9c777189', // wrench
];
const PHOTOS_APRES = [
  '1556228453-efd6c1ff04f6', // clean kitchen
  '1556909114-f6e7ad7d3136', // clean bathroom
  '1604014237800-1c9102c219da', // shiny pipes
  '1581235720704-06d3acfcb36f', // clean install
];

const TEMPLATES_PAR_SERVICE: Record<
  string,
  { titre: (v: string) => string; ctx: string; sol: string; res: string; descCourte: string }
> = {
  debouchage: {
    titre: (v) => `Débouchage canalisation principale à ${v}`,
    ctx: "Le client a constaté un refoulement d'eau au niveau de l'évier de la cuisine et un écoulement très lent dans la douche. Plusieurs tentatives avec ventouse et déboucheur chimique sans succès. Le bouchon était situé en aval, sur la canalisation principale.",
    sol: "Diagnostic au camion hydrocureur, passage de la buse haute pression sur 8 mètres puis traction du tas de graisse et de cheveux. Inspection caméra finale pour valider l'absence de contre-pente et confirmer un écoulement libre.",
    res: 'Évacuation totalement libérée en 50 minutes. Garantie 6 mois sur cette intervention. Conseils donnés pour éviter la récidive.',
    descCourte: 'Refoulement principal résolu au camion hydrocureur, passage caméra inclus.',
  },
  'inspection-camera': {
    titre: (v) => `Inspection caméra avant achat à ${v}`,
    ctx: 'Mission demandée par un acquéreur dans le cadre d\'une promesse de vente : vérifier l\'état des évacuations enterrées d\'une maison des années 70 avant signature.',
    sol: 'Inspection complète sur 22 mètres de réseau : passage caméra couleur HD avec localisation, mesure de pente et repérage des piquages. Rapport vidéo et photos remis au client en fin de prestation.',
    res: 'Détection d\'une légère contre-pente sur 1,5 m sans incidence immédiate, signalée pour négociation. Le client a pu signer en connaissance de cause.',
    descCourte: 'Inspection caméra HD complète + rapport vidéo livré pour acquéreur.',
  },
  'fosse-septique': {
    titre: (v) => `Pompage fosse toutes eaux à ${v}`,
    ctx: 'Maison individuelle avec fosse toutes eaux 3 000 L non vidangée depuis 5 ans, remontées d\'odeurs et lenteurs d\'évacuation signalées par les occupants.',
    sol: 'Vidange complète au camion hydrocureur 11 m³, nettoyage haute pression du préfiltre et contrôle visuel du bon fonctionnement du système. Bordereau de suivi des déchets remis.',
    res: 'Installation revenue à un fonctionnement normal, prochaine vidange recommandée à 4 ans. Plus aucune odeur, aucun écoulement lent.',
    descCourte: 'Vidange complète + nettoyage préfiltre + bordereau réglementaire.',
  },
  'pompe-relevage': {
    titre: (v) => `Remplacement pompe de relevage à ${v}`,
    ctx: 'Pompe de relevage d\'eaux usées en sous-sol qui disjoncte régulièrement et ne pompe plus. Sous-sol commençant à être inondé.',
    sol: 'Démontage de la pompe défaillante, remplacement par un modèle équivalent dimensionné pour le débit nécessaire, remise en service complète et tests de cycle.',
    res: 'Sous-sol asséché, fonctionnement nominal, garantie pièces et main d\'œuvre 1 an sur la pompe et l\'intervention.',
    descCourte: 'Remplacement express de pompe défaillante en sous-sol inondé.',
  },
};

const PRENOMS = ['Marc D.', 'Sophie L.', 'Karim B.', 'Christine M.', 'Julien P.', 'Aïcha R.', 'Patrick V.', 'Émilie F.', 'Thomas N.', 'Nadia K.'];
const AVIS = [
  'Intervention rapide, propre et efficace. Tarif respecté à l\'euro près.',
  'Très professionnel, a expliqué le problème clairement. Je recommande.',
  'Sont arrivés en 45 minutes un dimanche soir. Sauvé !',
  'Travail soigné, équipe sympa, devis clair avant intervention.',
  'Rien à dire, exactement le prix annoncé sur le site, parfait.',
];

function genererRealisations(): RealisationData[] {
  const out: RealisationData[] = [];
  const services = ['debouchage', 'inspection-camera', 'fosse-septique', 'pompe-relevage'];
  const baseDate = new Date('2026-04-01');

  VILLES.forEach((ville, vIdx) => {
    for (let i = 0; i < 3; i++) {
      const serviceSlug = services[(vIdx + i) % services.length];
      const tpl = TEMPLATES_PAR_SERVICE[serviceSlug];
      const date = new Date(baseDate);
      date.setDate(date.getDate() - (vIdx * 7 + i * 11));
      out.push({
        slug: `${serviceSlug}-${ville.slug}-${i + 1}`,
        villeSlug: ville.slug,
        serviceSlug,
        titre: tpl.titre(ville.nom),
        description: tpl.descCourte,
        contexte: tpl.ctx,
        solution: tpl.sol,
        resultat: tpl.res,
        photoAvant: [
          photoSrc(PHOTOS_AVANT[(vIdx + i) % PHOTOS_AVANT.length], i + 1),
        ],
        photoApres: [
          photoSrc(PHOTOS_APRES[(vIdx + i) % PHOTOS_APRES.length], i + 1),
        ],
        dateRealisation: date.toISOString(),
        dureeIntervention: 60 + ((vIdx + i) % 4) * 30,
        noteClient: i % 4 === 0 ? 4 : 5,
        avisClient: AVIS[(vIdx + i) % AVIS.length],
        prenomClient: PRENOMS[(vIdx + i) % PRENOMS.length],
        publie: true,
      });
    }
  });
  return out;
}

export const REALISATIONS: RealisationData[] = genererRealisations();
