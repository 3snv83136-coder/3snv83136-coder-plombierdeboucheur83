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
  /** Libellé court "borne McDo" affiché sur le bouton seulement. */
  slogan?: string;
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
  TEL_PRINCIPAL: '04 78 60 69 60',
  EMAIL_CONTACT: 'contact@plombierdeboucheur69.fr',
  NOM_ENTREPRISE: 'Plombier Déboucheur 69',
  SIRET: '—',
  ADRESSE_SIEGE: 'Lyon, Rhône (69)',
  HORAIRES: '24h/7j — Intervention sous 1h',
  ASSURANCE_RC_PRO: 'Assurance RC Pro souscrite',
};

// ============================================================
// VILLES — Top 10 du Rhône (69) / Métropole de Lyon
// ============================================================
export const VILLES: VilleData[] = [
  {
    slug: 'lyon',
    nom: 'Lyon',
    codePostal: '69000',
    population: 522000,
    latitude: 45.764,
    longitude: 4.8357,
    facteurTarif: 1.0,
    ordre: 1,
    description:
      "Préfecture du Rhône et capitale de la Métropole, Lyon concentre la majorité des urgences plomberie du département. Réseaux d'évacuation anciens dans la Presqu'île, le Vieux-Lyon et la Croix-Rousse, copropriétés haussmanniennes du 6ᵉ et résidences modernes de la Confluence : nos camions hydrocureurs et techniciens plombiers interviennent sous 60 minutes en zone urbaine.",
  },
  {
    slug: 'villeurbanne',
    nom: 'Villeurbanne',
    codePostal: '69100',
    population: 157000,
    latitude: 45.7665,
    longitude: 4.8795,
    facteurTarif: 1.0,
    ordre: 2,
    description:
      "Deuxième ville du Rhône, Villeurbanne mêle barres des Gratte-Ciel, copropriétés Tonkin et nouveaux quartiers Carré de Soie. Nos équipes plombiers déboucheurs gèrent les colonnes communes, les pompes de relevage en sous-sol et les urgences canalisation 24h/7j.",
  },
  {
    slug: 'venissieux',
    nom: 'Vénissieux',
    codePostal: '69200',
    population: 66000,
    latitude: 45.6981,
    longitude: 4.8857,
    facteurTarif: 1.0,
    ordre: 3,
    description:
      "Vénissieux : grands ensembles des Minguettes, pavillons résidentiels et zones d'activité Parilly. Beaucoup d'interventions sur réseaux collectifs anciens, débouchage WC, dépannage pompe de relevage et vidange bac à graisses pour restaurants.",
  },
  {
    slug: 'vaulx-en-velin',
    nom: 'Vaulx-en-Velin',
    codePostal: '69120',
    population: 53000,
    latitude: 45.7775,
    longitude: 4.9183,
    facteurTarif: 1.0,
    ordre: 4,
    description:
      "Vaulx-en-Velin et son nouveau Mas du Taureau, le Carré de Soie en plein renouvellement, et les zones pavillonnaires plus calmes. Notre équipe plombier urgence intervient sous 1h, débouchage haute pression, inspection caméra et dépannage sanitaire.",
  },
  {
    slug: 'saint-priest',
    nom: 'Saint-Priest',
    codePostal: '69800',
    population: 47000,
    latitude: 45.6952,
    longitude: 4.9442,
    facteurTarif: 1.05,
    ordre: 5,
    description:
      "Saint-Priest, est lyonnais : centre rénové, Bel-Air, Manissieux, ZI Mi-Plaine. Plomberie en pavillonnaire, réseaux EU/EP communs en lotissement, beaucoup de pompes de relevage en zone basse. Nos plombiers tarifent avant intervention.",
  },
  {
    slug: 'caluire-et-cuire',
    nom: 'Caluire-et-Cuire',
    codePostal: '69300',
    population: 43000,
    latitude: 45.795,
    longitude: 4.85,
    facteurTarif: 1.05,
    ordre: 6,
    description:
      "Caluire-et-Cuire, sur les coteaux nord de Lyon : maisons bourgeoises de Bissardon, Margnolles, Cuire-le-Bas et copropriétés récentes. Pentes marquées, pompes de relevage fréquentes, et débouchage canalisation en propriétés anciennes assez courant.",
  },
  {
    slug: 'bron',
    nom: 'Bron',
    codePostal: '69500',
    population: 41000,
    latitude: 45.7333,
    longitude: 4.9167,
    facteurTarif: 1.0,
    ordre: 7,
    description:
      "Bron, à l'est de Lyon : Parilly, Terraillon, Hôpital neurologique. Tissu mixte habitat collectif et pavillonnaire, intervention plomberie d'urgence sous 60 minutes, débouchage évier, WC, douche et dépannage chauffe-eau au tarif annoncé.",
  },
  {
    slug: 'meyzieu',
    nom: 'Meyzieu',
    codePostal: '69330',
    population: 34000,
    latitude: 45.7686,
    longitude: 5.0017,
    facteurTarif: 1.05,
    ordre: 8,
    description:
      "Meyzieu et ses étangs, le Grand Large, le centre-bourg et la ZI. Mix lotissements pavillonnaires et collectif récent. Beaucoup d'assainissement non collectif sur les franges — fosse septique, fosse toutes eaux, micro-station — et nombreuses pompes de relevage.",
  },
  {
    slug: 'rillieux-la-pape',
    nom: 'Rillieux-la-Pape',
    codePostal: '69140',
    population: 31000,
    latitude: 45.8167,
    longitude: 4.9,
    facteurTarif: 1.05,
    ordre: 9,
    description:
      "Rillieux-la-Pape : Ville Nouvelle des années 60-70 et zones plus rurales du Velin. Réseaux collectifs anciens, dépannage plombier réactif, débouchage de canalisations principales et inspection caméra HD pour les copropriétés.",
  },
  {
    slug: 'decines-charpieu',
    nom: 'Décines-Charpieu',
    codePostal: '69150',
    population: 28000,
    latitude: 45.77,
    longitude: 4.9583,
    facteurTarif: 1.0,
    ordre: 10,
    description:
      "Décines-Charpieu, à proximité du Groupama Stadium : pavillons, lotissements et résidences récentes. Plombier déboucheur disponible 24h/7j, intervention rapide pour urgence canalisation, fuite, débordement WC et dépannage pompe de relevage.",
  },
];

// ============================================================
// SERVICES + QUESTIONS
// ============================================================
export const SERVICES: ServiceData[] = [
  {
    slug: 'debouchage',
    nom: 'Débouchage canalisation',
    slogan: 'Ça bouche !',
    icone: 'Droplets',
    couleur: '#0e7490',
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
          { libelle: 'Évier / Lavabo', icone: 'GlassWater', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'WC', icone: 'Droplets', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Douche / Baignoire', icone: 'Bath', facteurTarif: 1.0, forceDevis: false, ordre: 3 },
          { libelle: 'Canalisation principale', icone: 'Pipette', facteurTarif: 1.5, forceDevis: false, ordre: 4 },
          { libelle: 'Toutes les évacuations', icone: 'AlertTriangle', facteurTarif: 1.8, forceDevis: true, ordre: 5 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Depuis quand ?',
        reponses: [
          { libelle: "Aujourd'hui", icone: 'Zap', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Quelques jours', icone: 'Calendar', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: 'Plusieurs semaines', icone: 'Hourglass', facteurTarif: 1.3, forceDevis: false, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Refoulement ou odeurs ?',
        reponses: [
          { libelle: 'Non', icone: 'CheckCircle2', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Odeurs uniquement', icone: 'Wind', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: "Refoulement d'eau", icone: 'Droplets', facteurTarif: 1.4, forceDevis: false, ordre: 3 },
          { libelle: 'Refoulement de matières', icone: 'AlertOctagon', facteurTarif: 1.6, forceDevis: true, ordre: 4 },
        ],
      },
    ],
  },
  {
    slug: 'inspection-camera',
    nom: 'Inspection caméra',
    slogan: 'Voir où ça bloque',
    icone: 'Camera',
    couleur: '#334155',
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
          { libelle: 'Diagnostic après débouchage', icone: 'Search', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'État avant achat / vente', icone: 'Home', facteurTarif: 1.1, forceDevis: false, ordre: 2 },
          { libelle: 'Recherche fuite / casse', icone: 'Droplets', facteurTarif: 1.2, forceDevis: false, ordre: 3 },
          { libelle: 'Avant travaux', icone: 'HardHat', facteurTarif: 1.0, forceDevis: false, ordre: 4 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Longueur estimée du réseau ?',
        reponses: [
          { libelle: 'Moins de 10 m', icone: 'Ruler', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '10 à 30 m', icone: 'Ruler', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 30 m', icone: 'MoveHorizontal', facteurTarif: 1.5, forceDevis: true, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Accès au regard ?',
        reponses: [
          { libelle: 'Oui, accessible', icone: 'CheckCircle2', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Non, à dégager', icone: 'Mountain', facteurTarif: 1.3, forceDevis: false, ordre: 2 },
        ],
      },
    ],
  },
  {
    slug: 'fosse-septique',
    nom: 'Pompage fosse septique',
    slogan: 'Vider ma fosse',
    icone: 'Truck',
    couleur: '#15803d',
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
          { libelle: 'Fosse toutes eaux', icone: 'Cylinder', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Fosse septique seule', icone: 'Cylinder', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: 'Bac à graisses', icone: 'ChefHat', facteurTarif: 0.8, forceDevis: false, ordre: 3 },
          { libelle: 'Micro-station', icone: 'Cog', facteurTarif: 1.3, forceDevis: false, ordre: 4 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Volume estimé ?',
        reponses: [
          { libelle: '1000 à 3000 L', icone: 'Package', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '3000 à 5000 L', icone: 'Package', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 5000 L', icone: 'Package', facteurTarif: 1.5, forceDevis: true, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Dernière vidange ?',
        reponses: [
          { libelle: "Moins d'un an", icone: 'Sparkles', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '1 à 4 ans', icone: 'Calendar', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 4 ans / jamais', icone: 'Hourglass', facteurTarif: 1.2, forceDevis: false, ordre: 3 },
        ],
      },
      {
        ordre: 4,
        libelle: 'Distance camion → regard ?',
        reponses: [
          { libelle: 'Moins de 30 m', icone: 'Truck', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: '30 à 50 m', icone: 'Truck', facteurTarif: 1.2, forceDevis: false, ordre: 2 },
          { libelle: 'Plus de 50 m', icone: 'Truck', facteurTarif: 1.5, forceDevis: true, ordre: 3 },
        ],
      },
    ],
  },
  {
    slug: 'pompe-relevage',
    nom: 'Pompe de relevage',
    slogan: 'Ma pompe lâche',
    icone: 'Cog',
    couleur: '#9a3412',
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
          { libelle: 'Diagnostic / panne', icone: 'Wrench', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Remplacement', icone: 'RefreshCw', facteurTarif: 1.3, forceDevis: false, ordre: 2 },
          { libelle: 'Installation neuve', icone: 'Plus', facteurTarif: 1.6, forceDevis: true, ordre: 3 },
        ],
      },
      {
        ordre: 2,
        libelle: 'Type de pompe ?',
        reponses: [
          { libelle: 'Eaux usées domestiques', icone: 'Droplets', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Eaux vannes (WC)', icone: 'Droplets', facteurTarif: 1.1, forceDevis: false, ordre: 2 },
          { libelle: 'Eaux pluviales', icone: 'CloudRain', facteurTarif: 1.0, forceDevis: false, ordre: 3 },
        ],
      },
      {
        ordre: 3,
        libelle: 'Symptôme ?',
        reponses: [
          { libelle: 'Ne démarre pas', icone: 'PowerOff', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
          { libelle: 'Tourne sans pomper', icone: 'RefreshCw', facteurTarif: 1.1, forceDevis: false, ordre: 2 },
          { libelle: 'Bruit anormal', icone: 'Volume2', facteurTarif: 1.0, forceDevis: false, ordre: 3 },
          { libelle: 'Disjoncte', icone: 'Zap', facteurTarif: 1.2, forceDevis: false, ordre: 4 },
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
