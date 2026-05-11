// ============================================================
// Type pour le contenu SEO étendu par ville (1500-2000 mots).
// Chaque ville a un contenu rédigé manuellement, factuel et
// spécifique : pas de templating ni de duplicate content.
// ============================================================

export type ProblemeFrequent = {
  /** Titre court, type "Refoulements en centre-ville" */
  titre: string;
  /** Slug du service principalement concerné */
  serviceSlug: 'debouchage' | 'inspection-camera' | 'fosse-septique' | 'pompe-relevage';
  /** ~150-200 mots décrivant la problématique locale */
  texte: string;
};

export type FaqLocale = {
  question: string;
  /** ~50-80 mots */
  reponse: string;
};

export type ContenuSeoVille = {
  /** Intro géographique et contextuelle, ~250 mots */
  intro: string;
  /** Type d'habitat dominant et conséquences sur la plomberie, ~250 mots */
  habitat: string;
  /** 4 problèmes (un par service), ~150-200 mots chacun */
  problemesFrequents: ProblemeFrequent[];
  /** Quartiers et secteurs couverts, ~150 mots libres + liste */
  quartiers: {
    intro: string;
    liste: string[];
  };
  /** Conseils saisonniers / locaux, ~200 mots */
  conseilsLocaux: string;
  /** Délais d'intervention et organisation locale, ~150 mots */
  delais: string;
  /** 5 questions/réponses locales */
  faq: FaqLocale[];
  /** Conclusion / CTA contextualisé, ~100 mots */
  conclusion: string;
};

export type ContenuServiceVille = {
  /** Présentation du service dans le contexte de la ville, ~80 mots */
  intro: string;
  /** Détails techniques et particularités locales, ~120 mots */
  details: string;
  /** Transparence tarifaire, facteurs, ~60 mots */
  tarifs: string;
  /** CTA contextualisé, ~40 mots */
  conclusion: string;
};
