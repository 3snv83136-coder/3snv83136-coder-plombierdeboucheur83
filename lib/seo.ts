// ============================================================
// SEO HELPERS — JSON-LD purs (input → POJO sérialisable)
// ============================================================
// Aucune dépendance React/JSX ici. Chaque fonction retourne un
// objet ou un tableau d'objets prêts à passer à <JsonLd /> ou
// JSON.stringify.
// ============================================================

import type { ServiceComplet } from './services';
import type { Ville } from './villes';
import type { RealisationComplete } from './realisations';

// ------------------------------------------------------------
// Types publics
// ------------------------------------------------------------

export type ParametresMap = Record<string, string>;

export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

export type JsonLdObject = { [key: string]: JsonLdValue | undefined };

export type BreadcrumbItem = { name: string; url: string };

export type ItemListEntry = { name: string; url: string; description?: string };

export type FaqQuestion = {
  libelle: string;
  reponses: { libelle: string; facteurTarif: number }[];
};

// ------------------------------------------------------------
// Helpers internes
// ------------------------------------------------------------

/**
 * Convertit un numéro FR (10 chiffres) en E.164 "+33XXXXXXXXX".
 * Si le numéro contient déjà l'indicatif international, le préserve.
 */
function telephoneE164(brut: string): string {
  const digits = brut.replace(/\D/g, '');
  if (digits.startsWith('33') && digits.length >= 11) return `+${digits}`;
  if (digits.startsWith('0') && digits.length === 10) {
    return `+33${digits.slice(1)}`;
  }
  return `+${digits}`;
}

function joinUrl(base: string, path: string): string {
  const b = base.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

function eurosFromCentimes(centimes: number): number {
  return Math.round(centimes / 100);
}

// ============================================================
// 1. LocalBusiness ("Plumber")
// ============================================================

export type BuildLocalBusinessInput = {
  siteUrl: string;
  siteName: string;
  parametres: ParametresMap;
  /** Ville courante (optionnelle) — si fournie, geo + areaServed = ville. */
  ville?: Ville;
  /** Liste des villes desservies si pas de ville courante. */
  villes?: Ville[];
  /** Note moyenne globale (optionnelle). */
  aggregateRating?: { ratingValue: number; ratingCount: number };
};

export function buildLocalBusinessJsonLd(
  input: BuildLocalBusinessInput
): JsonLdObject {
  const { siteUrl, siteName, parametres, ville, villes, aggregateRating } =
    input;
  const tel = parametres.TEL_PRINCIPAL ?? '';
  const email = parametres.EMAIL_CONTACT ?? '';
  const adresse = parametres.ADRESSE_SIEGE ?? 'Rhône (69), France';

  const areaServed: JsonLdValue = ville
    ? {
        '@type': 'City',
        name: ville.nom,
        address: {
          '@type': 'PostalAddress',
          addressLocality: ville.nom,
          postalCode: ville.codePostal,
          addressRegion: 'Auvergne-Rhône-Alpes',
          addressCountry: 'FR',
        },
      }
    : (villes ?? []).map((v) => ({
        '@type': 'City',
        name: v.nom,
        address: {
          '@type': 'PostalAddress',
          addressLocality: v.nom,
          postalCode: v.codePostal,
          addressRegion: 'Auvergne-Rhône-Alpes',
          addressCountry: 'FR',
        },
      }));

  const geo: JsonLdObject | undefined = ville
    ? {
        '@type': 'GeoCoordinates',
        latitude: ville.latitude,
        longitude: ville.longitude,
      }
    : undefined;

  const data: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': joinUrl(siteUrl, '#localbusiness'),
    name: siteName,
    url: siteUrl,
    image: joinUrl(siteUrl, '/opengraph-image'),
    telephone: telephoneE164(tel),
    email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: adresse,
      addressLocality: ville?.nom ?? 'Lyon',
      postalCode: ville?.codePostal ?? '69000',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    areaServed,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };

  if (geo) data.geo = geo;
  if (aggregateRating) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }
  return data;
}

// ============================================================
// 2. Organization
// ============================================================

export type BuildOrganizationInput = {
  siteUrl: string;
  siteName: string;
  parametres: ParametresMap;
};

export function buildOrganizationJsonLd(
  input: BuildOrganizationInput
): JsonLdObject {
  const { siteUrl, siteName, parametres } = input;
  const tel = parametres.TEL_PRINCIPAL ?? '';
  const email = parametres.EMAIL_CONTACT ?? '';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': joinUrl(siteUrl, '#organization'),
    name: siteName,
    url: siteUrl,
    logo: joinUrl(siteUrl, '/opengraph-image'),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: telephoneE164(tel),
      email,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  };
}

// ============================================================
// 3. Service
// ============================================================

export type BuildServiceInput = {
  service: ServiceComplet;
  ville: Ville;
  siteUrl: string;
};

export function buildServiceJsonLd(input: BuildServiceInput): JsonLdObject {
  const { service, ville, siteUrl } = input;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.nom} à ${ville.nom}`,
    serviceType: service.nom,
    description: service.description,
    provider: {
      '@type': 'Plumber',
      '@id': joinUrl(siteUrl, '#localbusiness'),
    },
    areaServed: {
      '@type': 'City',
      name: ville.nom,
      address: {
        '@type': 'PostalAddress',
        addressLocality: ville.nom,
        postalCode: ville.codePostal,
        addressCountry: 'FR',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      url: joinUrl(siteUrl, `/depannage/${ville.slug}/${service.slug}`),
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        minPrice: eurosFromCentimes(service.prixMin),
        maxPrice: eurosFromCentimes(service.prixMax),
      },
    },
  };
}

// ============================================================
// 4. FAQPage
// ============================================================

export type BuildFaqInput = {
  questions: FaqQuestion[];
  /** Tarif indicatif (en €) à mentionner dans la première réponse. */
  prixMinEuros?: number;
  prixMaxEuros?: number;
  serviceNom?: string;
};

/**
 * Reformule une question wizard en Q/A utilisateur.
 * Heuristiques simples (pas de LLM) basées sur le libellé de la
 * question et la liste des réponses possibles.
 */
function reformulerQuestion(
  q: FaqQuestion,
  ctx: { prixMinEuros?: number; prixMaxEuros?: number; serviceNom?: string }
): { question: string; answer: string } {
  const libelle = q.libelle.toLowerCase();
  const exemples = q.reponses
    .slice(0, 3)
    .map((r) => r.libelle.toLowerCase())
    .join(', ');
  const fourchette =
    ctx.prixMinEuros !== undefined && ctx.prixMaxEuros !== undefined
      ? `de ${ctx.prixMinEuros} € à ${ctx.prixMaxEuros} € selon la complexité`
      : 'sur devis transparent';

  let question = q.libelle;
  let answer = '';

  if (libelle.includes('bouché') || libelle.includes('élément')) {
    question = `Mon installation est bouchée, combien ça coûte ?`;
    answer = `Le tarif dépend de l'élément concerné (${exemples}). Notre intervention de débouchage va ${fourchette}. Le devis est annoncé avant toute intervention.`;
  } else if (libelle.includes('depuis quand')) {
    question = `Le bouchon est ancien, est-ce plus cher ?`;
    answer = `Un bouchon récent se résout généralement en moins d'une heure. Au-delà de plusieurs semaines, un passage caméra peut être nécessaire. Tarif global ${fourchette}.`;
  } else if (libelle.includes('refoulement') || libelle.includes('odeurs')) {
    question = `J'ai des odeurs ou un refoulement, est-ce grave ?`;
    answer = `Un refoulement de matières est une urgence sanitaire et nécessite une intervention rapide. Tarification ${fourchette}, devis annoncé avant intervention.`;
  } else if (libelle.includes('inspection') || libelle.includes('caméra')) {
    question = `Pourquoi faire une inspection caméra ?`;
    answer = `L'inspection caméra permet de localiser précisément un défaut (casse, racines, contre-pente) sans casser. Indispensable avant achat ou après débouchage récidivant. Tarif ${fourchette}.`;
  } else if (libelle.includes('longueur')) {
    question = `Quelle longueur de réseau peut être inspectée ?`;
    answer = `Notre caméra couvre jusqu'à 30 m en standard, plus sur demande. Les exemples typiques : ${exemples}. Tarif ${fourchette}.`;
  } else if (libelle.includes('regard') || libelle.includes('accès')) {
    question = `Faut-il dégager l'accès au regard avant votre venue ?`;
    answer = `Idéalement oui : un regard accessible accélère l'intervention. Sinon nous le dégageons (légère majoration). Tarif global ${fourchette}.`;
  } else if (libelle.includes('installation') || libelle.includes('type')) {
    question = `Quels types d'installations vidangez-vous ?`;
    answer = `Nous intervenons sur ${exemples} et autres. Tarif ${fourchette}, bordereau de suivi des déchets remis.`;
  } else if (libelle.includes('volume')) {
    question = `Quel volume de fosse pouvez-vous pomper ?`;
    answer = `De 1000 L à plus de 5000 L. Au-delà, devis sur mesure. Fourchette tarifaire ${fourchette}.`;
  } else if (libelle.includes('vidange')) {
    question = `À quelle fréquence vidanger sa fosse ?`;
    answer = `En moyenne tous les 4 ans pour une fosse toutes eaux. Plus longtemps = boues compactées et risque de débordement. Tarif ${fourchette}.`;
  } else if (libelle.includes('distance')) {
    question = `Le camion peut-il accéder à mon regard ?`;
    answer = `Notre flexible couvre jusqu'à 50 m. Au-delà, intervention possible avec devis spécifique. Tarif standard ${fourchette}.`;
  } else if (libelle.includes('intervention') || libelle.includes('pompe')) {
    question = `Pouvez-vous remplacer ma pompe de relevage ?`;
    answer = `Oui : diagnostic, remplacement à l'identique ou installation neuve. ${ctx.serviceNom ?? 'Intervention'} ${fourchette}.`;
  } else if (libelle.includes('symptôme') || libelle.includes('symptome')) {
    question = `Que faire si ma pompe de relevage ne démarre pas ?`;
    answer = `Coupez l'alimentation et appelez-nous : panne électrique, flotteur bloqué ou roue grippée. Diagnostic et réparation ${fourchette}.`;
  } else {
    answer = `Réponses possibles : ${exemples}. Tarif indicatif ${fourchette}.`;
  }

  return { question, answer };
}

export function buildFAQPageJsonLd(input: BuildFaqInput): JsonLdObject {
  const ctx = {
    prixMinEuros: input.prixMinEuros,
    prixMaxEuros: input.prixMaxEuros,
    serviceNom: input.serviceNom,
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: input.questions.map((q) => {
      const { question, answer } = reformulerQuestion(q, ctx);
      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      };
    }),
  };
}

// ============================================================
// 5. BreadcrumbList
// ============================================================

export function buildBreadcrumbJsonLd(input: {
  items: BreadcrumbItem[];
}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: input.items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// ============================================================
// 6. Article (réalisation)
// ============================================================

export type BuildArticleInput = {
  realisation: RealisationComplete;
  siteUrl: string;
};

export function buildArticleJsonLd(input: BuildArticleInput): JsonLdObject {
  const { realisation, siteUrl } = input;
  const url = joinUrl(
    siteUrl,
    `/depannage/${realisation.ville.slug}/realisations/${realisation.slug}`
  );
  const photo = realisation.photoApres[0] ?? realisation.photoAvant[0] ?? '';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: realisation.titre,
    description: realisation.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    datePublished: realisation.dateRealisation.toISOString(),
    dateModified: realisation.dateRealisation.toISOString(),
    image: photo
      ? {
          '@type': 'ImageObject',
          url: photo,
          width: 1200,
          height: 800,
        }
      : undefined,
    author: {
      '@type': 'Organization',
      '@id': joinUrl(siteUrl, '#organization'),
    },
    publisher: {
      '@type': 'Organization',
      '@id': joinUrl(siteUrl, '#organization'),
    },
    about: {
      '@type': 'Service',
      name: realisation.service.nom,
    },
    locationCreated: {
      '@type': 'Place',
      name: realisation.ville.nom,
      address: {
        '@type': 'PostalAddress',
        addressLocality: realisation.ville.nom,
        postalCode: realisation.ville.codePostal,
        addressCountry: 'FR',
      },
    },
  };
}

// ============================================================
// 7. Review (avis client d'une réalisation)
// ============================================================

export function buildReviewJsonLd(input: {
  realisation: RealisationComplete;
  siteUrl: string;
}): JsonLdObject | null {
  const { realisation, siteUrl } = input;
  if (!realisation.avisClient || realisation.noteClient == null) return null;

  const url = joinUrl(
    siteUrl,
    `/depannage/${realisation.ville.slug}/realisations/${realisation.slug}`
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: realisation.service.nom,
      provider: {
        '@type': 'Plumber',
        '@id': joinUrl(siteUrl, '#localbusiness'),
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: realisation.noteClient,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: realisation.prenomClient ?? 'Client',
    },
    reviewBody: realisation.avisClient,
    datePublished: realisation.dateRealisation.toISOString(),
    url,
  };
}

// ============================================================
// 8. AggregateRating (moyenne des avis)
// ============================================================

export function buildAggregateRatingJsonLd(input: {
  realisations: RealisationComplete[];
}): JsonLdObject | null {
  const notees = input.realisations.filter(
    (r): r is RealisationComplete & { noteClient: number } =>
      typeof r.noteClient === 'number'
  );
  if (!notees.length) return null;

  const somme = notees.reduce((acc, r) => acc + r.noteClient, 0);
  const moyenne = somme / notees.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: Math.round(moyenne * 10) / 10,
    ratingCount: notees.length,
    bestRating: 5,
    worstRating: 1,
  };
}

// ============================================================
// 9. ItemList
// ============================================================

export function buildItemListJsonLd(input: {
  items: ItemListEntry[];
}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: input.items.length,
    itemListElement: input.items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      url: it.url,
      ...(it.description ? { description: it.description } : {}),
    })),
  };
}
