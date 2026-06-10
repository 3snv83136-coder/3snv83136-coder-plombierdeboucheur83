// ============================================================
// Services additionnels — SEO programmatique (même borne wizard)
// ============================================================
// Questions calquées sur les 4 services historiques pour garder
// un parcours stable ; tarifs indicatifs cohérents avec lib/tarifs.
// ============================================================

import type { QuestionData, ServiceData } from './mock';

function cloneQuestions(questions: QuestionData[]): QuestionData[] {
  return questions.map((q) => ({
    ordre: q.ordre,
    libelle: q.libelle,
    reponses: q.reponses.map((r) => ({ ...r })),
  }));
}

/** Même arbre que le débouchage canalisation historique */
const Q_DEB: QuestionData[] = [
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
];

const Q_INSP: QuestionData[] = [
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
];

const Q_FOSSE: QuestionData[] = [
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
];

const Q_POMPE: QuestionData[] = [
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
];

function debService(
  partial: Pick<ServiceData, 'slug' | 'nom' | 'slogan' | 'ordre' | 'prixMin' | 'prixMax' | 'description'>
): ServiceData {
  return {
    ...partial,
    icone: 'Droplets',
    couleur: '#0e7490',
    questions: cloneQuestions(Q_DEB),
  };
}

function inspService(
  partial: Pick<ServiceData, 'slug' | 'nom' | 'slogan' | 'ordre' | 'prixMin' | 'prixMax' | 'description'>
): ServiceData {
  return {
    ...partial,
    icone: 'Camera',
    couleur: '#334155',
    questions: cloneQuestions(Q_INSP),
  };
}

function fosseService(
  partial: Pick<ServiceData, 'slug' | 'nom' | 'slogan' | 'ordre' | 'prixMin' | 'prixMax' | 'description'>
): ServiceData {
  return {
    ...partial,
    icone: 'Truck',
    couleur: '#15803d',
    questions: cloneQuestions(Q_FOSSE),
  };
}

function pompeService(
  partial: Pick<ServiceData, 'slug' | 'nom' | 'slogan' | 'ordre' | 'prixMin' | 'prixMax' | 'description'>
): ServiceData {
  return {
    ...partial,
    icone: 'Cog',
    couleur: '#9a3412',
    questions: cloneQuestions(Q_POMPE),
  };
}

export const SERVICES_PROGRAMMATIQUES: ServiceData[] = [
  debService({
    slug: 'debouchage-wc',
    nom: 'Débouchage WC & toilettes',
    slogan: 'WC bloqué',
    ordre: 5,
    prixMin: 9900,
    prixMax: 19900,
    description:
      "Débouchage ciblé WC, broyeur sanitaire et évacuation chasse d'eau. Furet, hydrocurage si nécessaire, diagnostic caméra en option.",
  }),
  debService({
    slug: 'debouchage-evier-lavabo',
    nom: 'Débouchage évier & lavabo',
    slogan: 'Évier lent',
    ordre: 6,
    prixMin: 8900,
    prixMax: 17900,
    description:
      "Débouchage siphon, bonde, canalisation sous évier ou lavabo de cuisine et salle de bains. Graisses, savon, résidus alimentaires.",
  }),
  debService({
    slug: 'debouchage-douche-baignoire',
    nom: 'Débouchage douche & baignoire',
    slogan: 'Douche qui stagne',
    ordre: 7,
    prixMin: 8900,
    prixMax: 18900,
    description:
      "Évacuation douche à l'italienne, cabine, baignoire : cheveux, calcaire, colmatage partiel ou total. Intervention propre et rapide.",
  }),
  debService({
    slug: 'debouchage-colonne-immeuble',
    nom: 'Débouchage colonne immeuble',
    slogan: 'Colonne commune',
    ordre: 8,
    prixMin: 12900,
    prixMax: 24900,
    description:
      "Intervention sur colonne d'évacuation collective, regard de pied d'immeuble, parties communes. Coordination syndic possible.",
  }),
  debService({
    slug: 'debouchage-urgence-inondation',
    nom: 'Débouchage urgence & refoulement',
    slogan: 'Urgence 24h/7j',
    ordre: 9,
    prixMin: 11900,
    prixMax: 22900,
    description:
      "Refoulement, eau stagnante, urgence sanitaire : priorisation et matériel hydrocureur pour dégager le réseau rapidement sur le Rhône (69).",
  }),
  debService({
    slug: 'hydrocurage-haute-pression',
    nom: 'Hydrocurage haute pression',
    slogan: 'Curage HP',
    ordre: 10,
    prixMin: 14900,
    prixMax: 27900,
    description:
      "Curage et nettoyage de canalisations par eau haute pression : dépôts, graisses, petits colmatages tenaces sur EU et EP.",
  }),
  inspService({
    slug: 'inspection-reseau-evacuation',
    nom: 'Inspection réseau évacuation',
    slogan: 'État du réseau',
    ordre: 11,
    prixMin: 14900,
    prixMax: 29900,
    description:
      "Passage caméra motorisé sur tout le réseau d'évacuation intérieur et enterré : état des conduites, pentes, jonctions, rapport vidéo.",
  }),
  inspService({
    slug: 'localisation-defaut-canalisation',
    nom: 'Localisation défaut canalisation',
    slogan: 'Où est la casse ?',
    ordre: 12,
    prixMin: 15900,
    prixMax: 31900,
    description:
      "Repérage précis de fissure, fracture, pénétration de racines ou mauvaise pente avant travaux de réparation ou reprise sous garantie.",
  }),
  fosseService({
    slug: 'pompage-bac-a-graisses',
    nom: 'Pompage bac à graisses',
    slogan: 'Bac plein',
    ordre: 13,
    prixMin: 19900,
    prixMax: 44900,
    description:
      "Vidange et nettoyage de bac à graisses restaurant, collectivité ou cuisine professionnelle. Évacuation agréée, attestation fournie.",
  }),
  fosseService({
    slug: 'entretien-micro-station',
    nom: 'Entretien micro-station',
    slogan: 'Micro-station',
    ordre: 14,
    prixMin: 22900,
    prixMax: 45900,
    description:
      "Vidange, contrôle des boues et du compartiment technique, contrôle du surpresseur sur micro-station d'épuration individuelle.",
  }),
  pompeService({
    slug: 'depannage-station-relevage',
    nom: 'Dépannage station de relevage',
    slogan: 'Station HS',
    ordre: 15,
    prixMin: 19900,
    prixMax: 79900,
    description:
      "Diagnostic et réparation de station de relevage double ou simple, coffret électrique, flotteurs, clapets, alarmes de niveau.",
  }),
  pompeService({
    slug: 'remplacement-pompe-de-cave',
    nom: 'Remplacement pompe de cave',
    slogan: 'Pompe cave',
    ordre: 16,
    prixMin: 18900,
    prixMax: 84900,
    description:
      "Remplacement de pompe de relevage pour cave, vide-sanitaire, local technique enterré. Dimensionnement, pose et tests de remise en eau.",
  }),
];
