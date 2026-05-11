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

// TEMPLATES_PAR_SERVICE remplacé par VARIANTES_PAR_VILLE ci-dessous
const _UNUSED_TEMPLATES: Record<
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

/**
 * VARIANTES_PAR_VILLE — Chaque ville a 3 réalisations uniques avec
 * contexte, solution et résultat individualisés selon le quartier.
 */
const VARIANTES_PAR_VILLE: Record<string, Array<{
  service: string;
  titre: string;
  descCourte: string;
  contexte: string;
  solution: string;
  resultat: string;
}>> = {
  lyon: [
    { service: 'debouchage', titre: "Débouchage colonne haussmannienne Presqu'île à Lyon", descCourte: 'Débouchage colonne fonte en Presqu\'île, hydrocurage complet.', contexte: "Immeuble haussmannien du 2ᵉ arrondissement : refoulement dans plusieurs appartements en partie basse. Colonne en fonte grise partiellement obstruée par des dépôts calcaires accumulés sur plusieurs décennies.", solution: "Hydrocurage haute pression sur toute la hauteur de la colonne (4 étages), curage des dépôts calcaires, contrôle caméra après nettoyage pour vérifier l'absence de fissure sur la fonte centenaire.", resultat: "Colonne intégralement nettoyée, débit d'évacuation nominal. Rapport caméra transmis au syndic." },
    { service: 'inspection-camera', titre: 'Inspection caméra réseau enterré Vieux-Lyon', descCourte: "Diagnostic caméra complet d'un réseau Renaissance dans le Vieux-Lyon.", contexte: "Propriétaire d'un immeuble du Vieux-Lyon (5ᵉ) : écoulements lents et odeurs suspectes dans la cour. Réseau enterré en grès d'origine, configuration inconnue.", solution: 'Inspection caméra motorisée sur 28 mètres de réseau enterré, localisation des piquages, mesure de pente et repérage précis de toutes les anomalies. Rapport vidéo horodaté.', resultat: 'Deux fissures localisées et une contre-pente confirmée. Le propriétaire a engagé des travaux ciblés sur la base du rapport, évitant une tranchée complète.' },
    { service: 'pompe-relevage', titre: 'Remplacement pompe relevage Confluence à Lyon', descCourte: 'Remplacement pompe de relevage en urgence parking Confluence.', contexte: "Résidence neuve quartier Confluence : pompe du parking souterrain en défaut, alarme déclenchée, risque d'inondation du niveau -2. Intervention urgente un dimanche soir.", solution: "Diagnostic sur place : moteur grillé suite à une surtension. Remplacement par pompe neuve de même puissance, installation parafoudre, tests de cycle et remise en service en 2h30.", resultat: 'Parking assaini, alarme éteinte. Garantie 2 ans sur la pompe.' },
  ],
  villeurbanne: [
    { service: 'debouchage', titre: 'Débouchage colonne Gratte-Ciel à Villeurbanne', descCourte: 'Hydrocurage colonne fonte Gratte-Ciel, 4 étages traités.', contexte: "Immeuble classé des Gratte-Ciel : colonne commune bouchée au 1er étage, eaux usées refoulant au rez-de-chaussée. Contraintes d'intervention en bâtiment protégé.", solution: "Accès par le regard en cave, hydrocurage bas vers haut sur 12 mètres de colonne fonte. Extraction du bouchon (lingettes + calcaire) en préservant les éléments architecturaux.", resultat: 'Évacuation rétablie en 1h30. Rapport transmis au syndic avec recommandation de sensibilisation des résidents.' },
    { service: 'inspection-camera', titre: 'Inspection caméra copropriété Tonkin à Villeurbanne', descCourte: 'Inspection caméra réseau enterré copropriété quartier Tonkin.', contexte: "Copropriété dense du Tonkin : infiltrations en cave après chaque forte pluie. Soupçon de fissure sur le réseau d'eaux pluviales enterré.", solution: "Inspection caméra sur 35 mètres. Détection d'un emboîtement déboîté avec racine de platane pénétrant la jonction à 12 mètres du regard principal.", resultat: 'Anomalie localisée avec précision, devis de réparation remis. Le syndic a pu voter les travaux sans tranchée exploratoire.' },
    { service: 'fosse-septique', titre: 'Vidange micro-station Carré de Soie à Villeurbanne', descCourte: 'Vidange et entretien micro-station quartier Carré de Soie.', contexte: "Maison contemporaine Carré de Soie, micro-station d'épuration, première vidange après 3 ans. Propriétaire anticipant le contrôle SPANC.", solution: 'Vidange complète des boues, nettoyage du préfiltre, contrôle du surpresseur. Vérification visuelle, prélèvement pour analyse rapide du rejet.', resultat: 'Installation en parfait état, prochaine vidange dans 2-3 ans. Bordereau remis pour le dossier SPANC.' },
  ],
  venissieux: [
    { service: 'debouchage', titre: 'Débouchage canalisation Minguettes à Vénissieux', descCourte: 'Débouchage colonne fonte grand ensemble Les Minguettes.', contexte: "Barre des Minguettes : refoulement généralisé dans 3 appartements aux étages inférieurs. Colonne fonte des années 60 obstruée par amalgame de graisse et dépôts.", solution: "Hydrocurage à contre-courant depuis le pied d'immeuble, curage complet sur 16 mètres. Contrôle caméra post-intervention.", resultat: "Écoulement nominal rétabli dans tous les appartements. Préconisation d'entretien préventif tous les 2 ans." },
    { service: 'pompe-relevage', titre: 'Installation pompe relevage zone Parilly à Vénissieux', descCourte: 'Installation pompe relevage pour restaurant zone Parilly.', contexte: "Restaurant zone d'activité Parilly : nouvelle installation nécessitant une pompe de relevage pour eaux usées de cuisine, réseau 1,2 m au-dessus du sol.", solution: 'Station de relevage avec pompe broyeuse adaptée aux eaux grasses, clapet anti-retour, panier de filtration, alarme sonore. Tests de cycle.', resultat: 'Installation fonctionnelle et conforme, validée par le bureau de contrôle. Garantie 2 ans.' },
    { service: 'inspection-camera', titre: 'Inspection caméra pavillon Vénissieux', descCourte: 'Inspection caméra réseau enterré pavillon années 70 à Vénissieux.', contexte: "Pavillon proche centre-ville : odeurs d'égout dans le jardin, refoulements ponctuels en salle de bains. Réseau enterré fonte estimé à 50 ans, aucun plan.", solution: "Inspection caméra depuis le regard de façade sur 20 mètres. Détection d'une fissure longitudinale avec intrusion de terre et racines sous la terrasse.", resultat: 'Anomalie localisée précisément, devis de chemisage partiel remis. Réparation programmée sans toucher à la terrasse.' },
  ],
  'vaulx-en-velin': [
    { service: 'debouchage', titre: 'Débouchage colonne Mas du Taureau à Vaulx-en-Velin', descCourte: 'Déboucheur colonne fonte Mas du Taureau, 6 étages traités.', contexte: "Immeuble Mas du Taureau : évier bouché au 4ᵉ avec refoulement dans l'appartement du dessous. Colonne fonte obstruée par dépôts alimentaires et calcaire.", solution: "Furet électrique depuis l'évacuation de l'évier, puis hydrocurage de la colonne sur 3 étages. Contrôle caméra pour confirmer l'absence de résidu.", resultat: "Écoulement rétabli en 45 minutes. Sensibilisation du locataire sur l'usage de crépines." },
    { service: 'inspection-camera', titre: 'Inspection caméra résidence neuve Vaulx-en-Velin', descCourte: 'Inspection caméra de conformité résidence neuve Vaulx-en-Velin.', contexte: "Résidence neuve proche centre-ville : inspection caméra de réception pour vérifier la conformité des réseaux avant fin de garantie de parfait achèvement.", solution: "Inspection complète réseaux eaux usées et pluviales, vérification des pentes, repérage des piquages, comparaison avec les plans d'exécution.", resultat: 'Deux regards mal positionnés signalés au promoteur. Reprise effectuée dans le cadre de la garantie.' },
    { service: 'fosse-septique', titre: 'Vidange fosse septique pavillon Vaulx-en-Velin', descCourte: 'Vidange fosse toutes eaux 4000L en zone pavillonnaire.', contexte: "Pavillon quartier résidentiel : fosse toutes eaux 4000 L non vidangée depuis 6 ans. Odeurs dans le jardin, écoulements très lents, contrôle SPANC imminent.", solution: 'Vidange complète au camion hydrocureur 11 m³, nettoyage haute pression du préfiltre colmaté. Bordereau de suivi remis.', resultat: "Fosse vidangée et fonctionnelle, écoulements normaux. Propriétaire informé du calendrier d'entretien." },
  ],
  'saint-priest': [
    { service: 'debouchage', titre: 'Débouchage WC pavillon Saint-Priest', descCourte: 'Débouchage WC + hydrocurage réseau enterré pavillon années 80.', contexte: 'Pavillon années 80 : WC bouché depuis 48h, tentatives maison échouées. Suspicion de bouchon profond dans le réseau enterré.', solution: "Passage caméra pour localiser le bouchon à 8 mètres, hydrocurage avec buse adaptée. Test d'écoulement et contrôle caméra post-intervention.", resultat: 'Bouchon (jouet + lingettes) totalement éliminé. Réseau inspecté, aucune autre anomalie.' },
    { service: 'pompe-relevage', titre: 'Remplacement pompe relevage Mi-Plaine à Saint-Priest', descCourte: 'Remplacement pompe relevage zone industrielle Mi-Plaine.', contexte: 'Bâtiment tertiaire Mi-Plaine : pompe de relevage en panne, sanitaires du sous-sol inutilisables pour 40 employés.', solution: 'Remplacement de la pompe défaillante (moteur HS après 12 ans) par modèle équivalent, alarme GSM, tests de cycle.', resultat: 'Sanitaires rétablis en 2h30. Contrat de maintenance souscrit par le gestionnaire.' },
    { service: 'fosse-septique', titre: 'Vidange bac à graisses restaurant Saint-Priest', descCourte: 'Vidange bac à graisses restaurant Porte des Alpes Saint-Priest.', contexte: 'Restaurant Porte des Alpes : bac à graisses 500 L plein, odeurs en cuisine, risque sanitaire. Intervention avant le service du midi.', solution: 'Pompage intégral, nettoyage haute pression du panier dégrilleur. Évacuation en centre agréé, bordereau fourni.', resultat: "Bac opérationnel pour le service. Planning d'entretien trimestriel mis en place." },
  ],
  'caluire-et-cuire': [
    { service: 'debouchage', titre: 'Débouchage canalisation villa Caluire-et-Cuire', descCourte: 'Débouchage réseau enterré villa en pente, racines de platane.', contexte: 'Villa des collines de Caluire : refoulements en buanderie. Réseau enterré en pente vers la Saône, probablement obstrué par racines de platanes centenaires.', solution: 'Hydrocurage avec buse à racines, curage complet sur 25 mètres de canalisation en grès. Contrôle caméra post-intervention.', resultat: 'Réseau débouché, écoulement nominal. Traitement préventif anti-racines appliqué.' },
    { service: 'pompe-relevage', titre: 'Installation pompe relevage villa Caluire-et-Cuire', descCourte: 'Installation pompe de relevage pour salle de bains en sous-sol.', contexte: "Villa en rénovation : création d'une salle de bains en sous-sol, 1,8 m sous le réseau collecteur.", solution: 'Station de relevage compacte avec pompe broyeuse, clapet anti-retour, ventilation. Insonorisation du caisson, tests de fonctionnement.', resultat: 'Installation conforme et silencieuse. Garantie 2 ans.' },
    { service: 'inspection-camera', titre: 'Inspection caméra réseau pluvial Caluire-et-Cuire', descCourte: 'Inspection caméra descente pluviale villa Caluire après orage.', contexte: "Villa bord de Saône : infiltrations dans le garage après orages. Soupçon de fissure sur descente pluviale enterrée.", solution: "Inspection caméra sur 15 mètres. Détection d'une fissure avec intrusion de terre à 4 mètres sous la terrasse.", resultat: 'Anomalie localisée avec précision, chemisage effectué la semaine suivante sans ouvrir la terrasse.' },
  ],
  bron: [
    { service: 'debouchage', titre: 'Débouchage colonne Parilly à Bron', descCourte: 'Hydrocurage colonne fonte copropriété Parilly Bron.', contexte: "Copropriété Parilly : colonne d'eaux usées bouchée, refoulements au RDC et 1er. Immeuble 1968, colonne fonte jamais rénovée.", solution: "Hydrocurage haute pression sur 3 étages, curage complet des dépôts. Contrôle caméra : colonne en bon état malgré son âge.", resultat: "Évacuation rétablie. Entretien préventif tous les 3 ans recommandé." },
    { service: 'pompe-relevage', titre: 'Dépannage pompe relevage Terraillon à Bron', descCourte: 'Dépannage pompe relevage parking immeuble Terraillon.', contexte: 'Immeuble Terraillon : pompe parking sous-sol en panne après un orage. Eau montant rapidement, risque pour les véhicules.', solution: 'Remplacement en urgence (moteur court-circuité) par modèle étanche IP68. Alarme de niveau, pompage de l\'eau résiduelle.', resultat: 'Parking assaini en 3h. Garantie 2 ans sur la nouvelle pompe.' },
    { service: 'fosse-septique', titre: 'Vidange fosse septique pavillon Bron', descCourte: 'Vidange fosse toutes eaux maison individuelle Bron centre.', contexte: 'Pavillon proche centre de Bron : fosse toutes eaux 3000 L, vidange de routine tous les 4 ans avant période de contrôle SPANC.', solution: "Vidange complète, nettoyage haute pression du préfiltre, vérification du niveau des boues. Contrôle visuel de l'état général.", resultat: 'Fosse en bon état, aucun défaut. Bordereau de suivi remis pour le dossier SPANC.' },
  ],
  meyzieu: [
    { service: 'debouchage', titre: 'Débouchage canalisation pavillon Meyzieu', descCourte: 'Débouchage réseau PVC récent pavillon ZAC du Carreau à Meyzieu.', contexte: 'Pavillon récent ZAC du Carreau : douche et lavabo bouchés simultanément. Construction de moins de 5 ans, réseau PVC. Suspicion de résidu de chantier.', solution: "Débouchage au furet électrique, extraction d'un bouchon de plâtre et gravillons coincés dans un coude. Contrôle caméra.", resultat: 'Écoulement rétabli en 30 minutes. Réseau inspecté, aucun autre corps étranger.' },
    { service: 'inspection-camera', titre: 'Inspection caméra maison ancienne Meyzieu centre', descCourte: 'Diagnostic caméra réseau fonte maison années 50 centre Meyzieu.', contexte: "Maison ancienne centre de Meyzieu : projet d'extension avec salle d'eau supplémentaire. Besoin de vérifier l'état du réseau existant avant travaux.", solution: "Inspection caméra du réseau fonte sur 18 mètres. Vérification diamètre, pente et état intérieur. Rapport avec préconisations.", resultat: "Réseau en bon état, pente suffisante. L'architecte a validé le projet sur la base du rapport." },
    { service: 'pompe-relevage', titre: 'Remplacement pompe relevage pavillon Meyzieu', descCourte: 'Remplacement pompe relevage cave aménagée pavillon Meyzieu.', contexte: 'Pavillon résidentiel : pompe de relevage cave aménagée en salle de jeux qui ne démarre plus. Flotteur probablement bloqué ou moteur défaillant.', solution: 'Diagnostic : flotteur entartré et moteur fatigué. Remplacement complet par pompe neuve silencieuse, nettoyage de la fosse.', resultat: 'Pompe fonctionnelle, débit nominal. Garantie 2 ans.' },
  ],
  'rillieux-la-pape': [
    { service: 'debouchage', titre: 'Débouchage colonne technique Rillieux-la-Pape', descCourte: "Débouchage colonne technique encastrée immeuble années 70 Rillieux.", contexte: "Immeuble ville nouvelle : refoulement dans 2 appartements contigus. Colonne technique encastrée difficile d'accès, probablement obstruée au coude de pied de colonne.", solution: "Hydrocurage depuis le regard en cave avec buse orientable pour le coude à 90°. Nettoyage sur 3 étages, contrôle caméra.", resultat: "Colonne nettoyée, écoulement rétabli. Préconisation d'entretien préventif tous les 2 ans." },
    { service: 'inspection-camera', titre: 'Inspection caméra copropriété Rillieux-la-Pape', descCourte: 'Inspection caméra préventive copropriété verticale Rillieux.', contexte: "Copropriété d'habitat vertical : le syndic souhaite un état des lieux des colonnes d'évacuation avant campagne de rénovation des salles de bains.", solution: 'Inspection caméra systématique des 4 colonnes, mesure de pente, repérage des anomalies. Rapport détaillé avec recommandations.', resultat: "Deux colonnes nécessitent un curage préventif, une a un léger déboîtement à surveiller. Plan d'entretien sur 5 ans proposé." },
    { service: 'pompe-relevage', titre: 'Dépannage pompe relevage parking Rillieux-la-Pape', descCourte: 'Dépannage urgence pompe relevage parking souterrain Rillieux.', contexte: 'Parking souterrain : pompe de relevage eaux pluviales a disjoncté après orage violent. 40 cm d\'eau au point bas, véhicules menacés.', solution: "Remplacement urgence (moteur noyé), pompe de secours temporaire. Installation anti-surtension.", resultat: 'Parking assaini en 4h. Garantie 1 an, contrat de maintenance souscrit.' },
  ],
  'decines-charpieu': [
    { service: 'debouchage', titre: 'Débouchage douche pavillon Décines-Charpieu', descCourte: "Débouchage douche + évacuation lente pavillon années 90 Décines.", contexte: "Pavillon années 90 : douche qui s'évacue très lentement depuis plusieurs jours. Suspicion de bouchon de cheveux et savon dans la bonde ou le siphon.", solution: "Débouchage mécanique au furet de petit diamètre, extraction d'un amalgame de cheveux et résidus savonneux. Nettoyage du siphon.", resultat: "Évacuation fluide retrouvée. Conseil d'entretien : crépine et nettoyage mensuel du siphon." },
    { service: 'pompe-relevage', titre: 'Installation pompe relevage cave Décines-Charpieu', descCourte: 'Installation pompe de relevage pour buanderie en sous-sol Décines.', contexte: "Pavillon récent : aménagement d'une buanderie en sous-sol nécessitant une pompe de relevage pour machine à laver, 1,5 m sous le réseau.", solution: 'Pompe de relevage eaux usées avec clapet anti-retour et panier de filtration. Raccordement électrique dédié, tests de vidange.', resultat: 'Buanderie opérationnelle, aucun bruit excessif. Garantie 2 ans.' },
    { service: 'inspection-camera', titre: 'Inspection caméra petit collectif Décines-Charpieu', descCourte: 'Inspection caméra réseau pluvial collectif récent proche stade Décines.', contexte: 'Petit collectif récent proche Groupama Stadium : infiltrations dans le local poubelles après les pluies. Soupçon de dysfonctionnement du réseau pluvial enterré.', solution: "Inspection caméra sur 30 mètres. Détection d'un affaissement créant une contre-pente, probablement dû à un tassement différentiel.", resultat: 'Anomalie localisée et documentée. Devis de reprise transmis au gestionnaire.' },
  ],
};

const PRENOMS_PAR_VILLE: Record<string, string[]> = {
  lyon: ['Marc D.', 'Sophie L.', 'Karim B.'],
  villeurbanne: ['Christine M.', 'Julien P.', 'Aïcha R.'],
  venissieux: ['Patrick V.', 'Émilie F.', 'Thomas N.'],
  'vaulx-en-velin': ['Nadia K.', 'Laurent B.', 'Céline J.'],
  'saint-priest': ['David R.', 'Fatima H.', 'Jean-Marc T.'],
  'caluire-et-cuire': ['Isabelle P.', 'Mehdi S.', 'Anne-Laure G.'],
  bron: ['Rachid M.', 'Claire D.', 'Yannick F.'],
  meyzieu: ['Laura V.', 'Stéphane W.', 'Myriam C.'],
  'rillieux-la-pape': ['Antoine P.', 'Samira B.', 'Grégory L.'],
  'decines-charpieu': ['Valérie N.', 'Hugo M.', 'Catherine Z.'],
};

const AVIS = [
  "Intervention rapide, propre et efficace. Tarif respecté à l'euro près.",
  "Très professionnel, a expliqué le problème clairement. Je recommande.",
  "Sont arrivés en 45 minutes un dimanche soir. Sauvé !",
  "Travail soigné, équipe sympa, devis clair avant intervention.",
  "Rien à dire, exactement le prix annoncé sur le site, parfait.",
];

function genererRealisations(): RealisationData[] {
  const out: RealisationData[] = [];
  const baseDate = new Date('2026-04-01');
  const villesList = Object.keys(VARIANTES_PAR_VILLE);

  for (let vIdx = 0; vIdx < villesList.length; vIdx++) {
    const villeSlug = villesList[vIdx];
    const variantes = VARIANTES_PAR_VILLE[villeSlug];
    const prenoms = PRENOMS_PAR_VILLE[villeSlug] ?? ['Client'];

    for (let i = 0; i < variantes.length; i++) {
      const v = variantes[i];
      const date = new Date(baseDate);
      date.setDate(date.getDate() - (vIdx * 7 + i * 11));
      const photoIdx = (vIdx + i) % PHOTOS_AVANT.length;

      out.push({
        slug: `${v.service}-${villeSlug}-${i + 1}`,
        villeSlug,
        serviceSlug: v.service,
        titre: v.titre,
        description: v.descCourte,
        contexte: v.contexte,
        solution: v.solution,
        resultat: v.resultat,
        photoAvant: [photoSrc(PHOTOS_AVANT[photoIdx], i + 1)],
        photoApres: [photoSrc(PHOTOS_APRES[(photoIdx + 1) % PHOTOS_APRES.length], i + 1)],
        dateRealisation: date.toISOString(),
        dureeIntervention: 60 + ((vIdx + i) % 5) * 30,
        noteClient: i === 0 ? 5 : (i === 1 ? 4 : 5),
        avisClient: AVIS[i % AVIS.length],
        prenomClient: prenoms[i % prenoms.length],
        publie: true,
      });
    }
  }
  return out;
}

export const REALISATIONS: RealisationData[] = genererRealisations();