# PRD — Site "Borne Dépannage Var"
**UX type borne McDonald's pour le débouchage / inspection / fosse / pompe de relevage**
Version 1.0 — Avril 2026

---

## 1. Vision produit

Site ultra-simple où **chaque visiteur, en 3 à 4 clics maximum**, déclenche un appel téléphonique avec **tarif estimé affiché**. Pas de formulaire long, pas de tunnel, pas de réflexion : 4 boutons géants → questionnaire visuel → CTA APPEL avec prix.

**Métaphore directrice** : la borne McDonald's. L'utilisateur ne lit pas, il tape sur des images.

**Objectif business** : maximiser le taux d'appel en captant l'intention au moment du problème (urgence + mobile + Toulon-Var).

---

## 2. Décisions de cadrage validées

| Sujet | Décision |
|---|---|
| Domaine | À définir — suggestions §15 |
| Segment URL fixe | `/depannage` |
| Hébergement | Vercel |
| Base de données | Supabase **dédiée** (indépendante de LTDB) |
| Stack | Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, Supabase |
| Périmètre géographique | Top 10 villes du Var (83) |

---

## 3. Architecture URL

**Premier segment constant `/depannage`** sur toutes les pages métier.

```
/                                              → Home (borne universelle, géolocalisation auto)
/depannage                                     → Sélecteur 10 villes
/depannage/[ville]                             → Borne ville + bloc Réalisations
/depannage/[ville]/debouchage                  → Wizard débouchage
/depannage/[ville]/inspection-camera           → Wizard inspection caméra
/depannage/[ville]/fosse-septique              → Wizard pompage fosse
/depannage/[ville]/pompe-relevage              → Wizard pompe de relevage
/depannage/[ville]/devis                       → Formulaire devis (cas ambigus)
/depannage/[ville]/realisations                → Galerie chantiers ville
/depannage/[ville]/realisations/[slug]         → Fiche chantier
```

Pages annexes (hors segment) :
- `/mentions-legales`
- `/cgv`
- `/politique-confidentialite`
- `/sitemap.xml` (dynamique)
- `/robots.txt`
- `/llms.txt`

---

## 4. Top 10 villes du Var (seed)

| Slug | Nom | CP | Pop. |
|---|---|---|---|
| `toulon` | Toulon | 83000 | 178 000 |
| `la-seyne-sur-mer` | La Seyne-sur-Mer | 83500 | 65 000 |
| `hyeres` | Hyères | 83400 | 57 000 |
| `frejus` | Fréjus | 83600 | 55 000 |
| `draguignan` | Draguignan | 83300 | 40 000 |
| `saint-raphael` | Saint-Raphaël | 83700 | 36 000 |
| `six-fours-les-plages` | Six-Fours-les-Plages | 83140 | 34 000 |
| `la-garde` | La Garde | 83130 | 25 000 |
| `la-valette-du-var` | La Valette-du-Var | 83160 | 24 000 |
| `sanary-sur-mer` | Sanary-sur-Mer | 83110 | 17 000 |

---

## 5. Les 4 services (boutons borne)

| Slug | Nom affiché | Icône | Couleur dominante |
|---|---|---|---|
| `debouchage` | Débouchage canalisation | 🚿 (ou SVG custom) | Bleu primaire |
| `inspection-camera` | Inspection caméra | 📹 | Violet |
| `fosse-septique` | Pompage fosse septique | 🚛 | Vert |
| `pompe-relevage` | Pompe de relevage | ⚙️ | Orange |

**Boutons géants** (min 280×280 px sur mobile, 360×360 px sur desktop), icône au-dessus, libellé en dessous, couleur de fond vive, état hover/active marqué.

---

## 6. Logique des wizards (synthèse)

Chaque service = **3 à 4 questions à choix unique**, avec :
- Réponses sous forme de **gros boutons visuels** (pas de menu déroulant)
- Chaque réponse porte un **`facteurTarif`** (modulation prix) et/ou un drapeau **`forceDevis`**
- Écran final = **prix calculé** + **gros bouton APPELER** + lien "Demander un devis" si ambigu

### 6.1 Débouchage canalisation (3 questions)

| Q1 — Quel élément est bouché ? | facteur | force devis |
|---|---|---|
| Évier / Lavabo | 1.0 | non |
| WC | 1.2 | non |
| Douche / Baignoire | 1.0 | non |
| Canalisation principale (regard) | 1.5 | non |
| Toutes les évacuations | 1.8 | **oui** |

| Q2 — Depuis quand ? | facteur |
|---|---|
| Aujourd'hui | 1.0 |
| Quelques jours | 1.0 |
| Plusieurs semaines | 1.3 |

| Q3 — Refoulement / odeurs ? | facteur | force devis |
|---|---|---|
| Non | 1.0 | non |
| Odeurs uniquement | 1.0 | non |
| Refoulement d'eau | 1.4 | non |
| Refoulement de matières | 1.6 | **oui** |

### 6.2 Inspection caméra (3 questions)

| Q1 — Pourquoi ? | facteur |
|---|---|
| Diagnostic après débouchage | 1.0 |
| État avant achat / vente | 1.1 |
| Recherche fuite / casse | 1.2 |
| Avant travaux | 1.0 |

| Q2 — Longueur estimée du réseau ? | facteur | force devis |
|---|---|---|
| < 10 m | 1.0 | non |
| 10–30 m | 1.2 | non |
| > 30 m | 1.5 | **oui** |

| Q3 — Accès au regard ? | facteur |
|---|---|
| Oui, accessible | 1.0 |
| Non, à dégager | 1.3 |

### 6.3 Pompage fosse septique (4 questions)

| Q1 — Type d'installation ? | facteur |
|---|---|
| Fosse toutes eaux | 1.0 |
| Fosse septique seule | 1.0 |
| Bac à graisses | 0.8 |
| Micro-station | 1.3 |

| Q2 — Volume estimé ? | facteur | force devis |
|---|---|---|
| 1000–3000 L | 1.0 | non |
| 3000–5000 L | 1.2 | non |
| > 5000 L | 1.5 | **oui** |

| Q3 — Dernière vidange ? | facteur |
|---|---|
| < 1 an | 1.0 |
| 1–4 ans | 1.0 |
| > 4 ans / jamais | 1.2 |

| Q4 — Distance camion → regard ? | facteur | force devis |
|---|---|---|
| < 30 m | 1.0 | non |
| 30–50 m | 1.2 | non |
| > 50 m | 1.5 | **oui** |

### 6.4 Pompe de relevage (3 questions)

| Q1 — Type d'intervention ? | facteur | force devis |
|---|---|---|
| Diagnostic / panne | 1.0 | non |
| Remplacement | 1.3 | non |
| Installation neuve | 1.6 | **oui** |

| Q2 — Type de pompe ? | facteur |
|---|---|
| Eaux usées domestiques | 1.0 |
| Eaux vannes (WC) | 1.1 |
| Eaux pluviales | 1.0 |

| Q3 — Symptôme ? | facteur |
|---|---|
| Ne démarre pas | 1.0 |
| Tourne sans pomper | 1.1 |
| Bruit anormal | 1.0 |
| Disjoncte | 1.2 |

### 6.5 Calcul du prix affiché

```ts
prixFinal = prixMin × ∏(facteurs) × facteurVille
prixFinalMax = prixMax × ∏(facteurs) × facteurVille
```

**Si une réponse a `forceDevis = true`** → afficher "Sur devis" + CTA "Demander un devis" (formulaire) au lieu du prix.

**RÈGLE ABSOLUE** : `prixMin`, `prixMax` et `facteurVille` sont **TOUJOURS lus depuis la DB** (`Tarif` + `TarifVille`). Jamais hardcodés. Jamais générés côté client.

---

## 7. Schéma Prisma

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ============================================================
// PARAMÈTRES GLOBAUX (téléphone, email, SIRET, etc.)
// ============================================================
model Parametre {
  id        String   @id @default(cuid())
  cle       String   @unique
  valeur    String
  updatedAt DateTime @updatedAt

  // Clés attendues :
  // TEL_PRINCIPAL, EMAIL_CONTACT, SIRET, NOM_ENTREPRISE,
  // ADRESSE_SIEGE, HORAIRES, ASSURANCE_RC_PRO
}

// ============================================================
// VILLES
// ============================================================
model Ville {
  id          String   @id @default(cuid())
  slug        String   @unique
  nom         String
  codePostal  String
  population  Int
  latitude    Float
  longitude   Float
  description String?  @db.Text       // texte SEO ville (200-400 mots)
  facteurTarif Float   @default(1.0)  // modulation tarif locale
  ordre       Int

  realisations Realisation[]

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([slug])
}

// ============================================================
// SERVICES (4 boutons borne)
// ============================================================
model Service {
  id          String   @id @default(cuid())
  slug        String   @unique
  nom         String
  icone       String                    // emoji ou nom SVG
  couleur     String                    // hex ou token Tailwind
  description String   @db.Text
  ordre       Int

  questions    Question[]
  tarif        Tarif?
  realisations Realisation[]

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// ============================================================
// QUESTIONS WIZARD
// ============================================================
model Question {
  id        String   @id @default(cuid())
  serviceId String
  service   Service  @relation(fields: [serviceId], references: [id], onDelete: Cascade)
  ordre     Int
  libelle   String

  reponses  Reponse[]

  @@unique([serviceId, ordre])
}

model Reponse {
  id           String   @id @default(cuid())
  questionId   String
  question     Question @relation(fields: [questionId], references: [id], onDelete: Cascade)
  libelle      String
  icone        String?
  facteurTarif Float    @default(1.0)
  forceDevis   Boolean  @default(false)
  ordre        Int

  @@unique([questionId, ordre])
}

// ============================================================
// TARIFS
// ============================================================
model Tarif {
  id          String  @id @default(cuid())
  serviceId   String  @unique
  service     Service @relation(fields: [serviceId], references: [id])
  prixMin     Int     // en centimes (ex: 9900 = 99 €)
  prixMax     Int     // en centimes
  unite       String  @default("intervention")
  description String?

  updatedAt   DateTime @updatedAt
}

// ============================================================
// RÉALISATIONS (E-E-A-T)
// ============================================================
model Realisation {
  id          String   @id @default(cuid())
  slug        String   @unique
  villeId     String
  ville       Ville    @relation(fields: [villeId], references: [id])
  serviceId   String
  service     Service  @relation(fields: [serviceId], references: [id])

  titre       String
  description String   @db.Text
  contexte    String   @db.Text
  solution    String   @db.Text
  resultat    String   @db.Text

  photoAvant  String[] // URLs Supabase Storage
  photoApres  String[]

  dateRealisation   DateTime
  dureeIntervention Int?     // minutes

  noteClient   Int?            // 1-5
  avisClient   String?  @db.Text
  prenomClient String?

  publie    Boolean  @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([villeId, publie])
  @@index([serviceId, publie])
}

// ============================================================
// LEADS DEVIS
// ============================================================
model LeadDevis {
  id        String   @id @default(cuid())
  villeSlug String
  service   String
  reponses  Json     // {questionId: reponseId, ...}

  nom       String
  telephone String
  email     String?
  adresse   String?
  message   String?  @db.Text

  status    String   @default("NOUVEAU") // NOUVEAU | CONTACTE | CONVERTI | PERDU

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([status, createdAt])
}

// ============================================================
// TRACKING APPELS (analytics)
// ============================================================
model AppelTracking {
  id           String   @id @default(cuid())
  villeSlug    String
  service      String
  tarifAffiche Int      // centimes
  reponses     Json

  userAgent String?
  referrer  String?
  ip        String?  // hashée pour RGPD

  createdAt DateTime @default(now())

  @@index([villeSlug, service, createdAt])
}
```

---

## 8. Arborescence Next.js 14

```
.
├── app/
│   ├── layout.tsx                          # Root layout + métadonnées
│   ├── page.tsx                            # Home (borne universelle)
│   ├── globals.css
│   ├── sitemap.ts                          # Sitemap dynamique
│   ├── robots.ts
│   │
│   ├── depannage/
│   │   ├── page.tsx                        # Sélecteur 10 villes
│   │   │
│   │   └── [ville]/
│   │       ├── layout.tsx                  # Layout ville (header téléphone)
│   │       ├── page.tsx                    # Borne ville + Réalisations bloc
│   │       │
│   │       ├── [service]/
│   │       │   └── page.tsx                # Wizard
│   │       │
│   │       ├── devis/
│   │       │   └── page.tsx                # Formulaire devis
│   │       │
│   │       └── realisations/
│   │           ├── page.tsx                # Galerie ville
│   │           └── [slug]/
│   │               └── page.tsx            # Fiche réalisation
│   │
│   ├── api/
│   │   ├── tracking-appel/route.ts         # POST tracking
│   │   └── lead-devis/route.ts             # POST création lead
│   │
│   ├── mentions-legales/page.tsx
│   ├── cgv/page.tsx
│   └── politique-confidentialite/page.tsx
│
├── components/
│   ├── borne/
│   │   ├── Borne.tsx                       # Composant principal
│   │   ├── BorneButton.tsx                 # Bouton service géant
│   │   ├── BorneHeader.tsx                 # Header avec ville + tél
│   │   ├── BorneFooter.tsx                 # CTA appel permanent
│   │   └── BorneSelecteurVille.tsx
│   │
│   ├── wizard/
│   │   ├── Wizard.tsx                      # Orchestrateur (state machine)
│   │   ├── WizardQuestion.tsx              # Question + grille réponses
│   │   ├── WizardReponse.tsx               # Bouton réponse
│   │   ├── WizardProgressBar.tsx
│   │   ├── WizardResultat.tsx              # Écran final tarif + CTA
│   │   └── WizardDevis.tsx                 # Bascule formulaire
│   │
│   ├── realisations/
│   │   ├── RealisationCarte.tsx
│   │   ├── RealisationGalerie.tsx
│   │   ├── RealisationAvantApres.tsx       # Slider comparaison
│   │   └── RealisationFiche.tsx
│   │
│   ├── seo/
│   │   ├── JsonLdLocalBusiness.tsx
│   │   ├── JsonLdService.tsx
│   │   ├── JsonLdFaq.tsx
│   │   ├── JsonLdRealisation.tsx
│   │   └── JsonLdAggregateRating.tsx
│   │
│   └── shared/
│       ├── BoutonAppel.tsx                 # CTA appel (lit Parametre)
│       ├── PrixAffichage.tsx               # Lit Tarif + applique facteurs
│       ├── AvisEtoiles.tsx
│       └── BandeauConfiance.tsx            # SIRET, assurance, intervention rapide
│
├── lib/
│   ├── prisma.ts                           # Client Prisma singleton
│   ├── parametres.ts                       # getParametre('TEL_PRINCIPAL')
│   ├── tarifs.ts                           # calculerTarif(serviceSlug, villeSlug, facteurs)
│   ├── villes.ts
│   ├── services.ts
│   ├── realisations.ts
│   └── seo.ts                              # Helpers JSON-LD
│
├── actions/
│   ├── enregistrerAppel.ts                 # Server action
│   └── creerLeadDevis.ts                   # Server action
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts                             # Seed villes + services + questions
│   └── migrations/
│
├── content/
│   └── villes/                             # MDX par ville (texte SEO)
│       ├── toulon.mdx
│       ├── la-seyne-sur-mer.mdx
│       └── ...
│
├── public/
│   ├── icons/                              # SVG services
│   ├── images/                             # OG images, favicons
│   └── ...
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
├── .env.local                              # Local dev
└── .env.example
```

---

## 9. Composants critiques (specs)

### 9.1 `<BoutonAppel />`
- Lit `Parametre.TEL_PRINCIPAL` côté serveur (Server Component)
- Format affiché : `04 XX XX XX XX`
- `href="tel:+33..."`
- `onClick` → server action `enregistrerAppel({ villeSlug, service, tarifAffiche, reponses })`
- Présence permanente : sticky en bas sur mobile, header en haut sur desktop

### 9.2 `<PrixAffichage />`
- Props : `serviceSlug`, `villeSlug`, `facteursReponses`
- Server Component qui appelle `calculerTarif()` lib
- Affichage : `À partir de XX €` ou `Entre XX € et YY €` ou `Sur devis`
- **Jamais de prix en dur dans le code**

### 9.3 `<Wizard />`
- Client Component (useState pour navigation entre questions)
- Props : `service: Service & { questions: (Question & { reponses: Reponse[] })[] }`, `villeSlug: string`
- État : `{ etape, reponsesSelectionnees, forceDevis }`
- Animation transition entre questions (Framer Motion ou CSS pure)
- Bouton "Retour" en haut à gauche
- ProgressBar visuelle (étape X/Y)

### 9.4 `<Borne />`
- Server Component
- Props : `ville?: Ville` (undefined sur la home)
- Affiche les 4 services en grille 2×2 (mobile) ou 4×1 (desktop)
- Lit `Service` depuis DB
- Header : nom de ville (ou "Trouvez votre dépannage" sur home) + téléphone
- Bandeau confiance dessous (SIRET, intervention < 1h, etc.)

---

## 10. SEO / E-E-A-T

### 10.1 JSON-LD obligatoires par page

| Page | Schémas |
|---|---|
| Home | `Organization`, `LocalBusiness` |
| `/depannage/[ville]` | `LocalBusiness` (avec ville), `Service` × 4, `BreadcrumbList` |
| `/depannage/[ville]/[service]` | `Service`, `FAQPage` (3 questions = FAQ), `BreadcrumbList` |
| `/depannage/[ville]/realisations` | `ItemList` de `Service`, `AggregateRating` |
| `/depannage/[ville]/realisations/[slug]` | `Article`, `ImageObject`, `Review` (si avis client) |

### 10.2 Métadonnées

- `<title>` : `[Service] [Ville] — Tarif XX € — Intervention 24h/7j`
- `<meta description>` : structuré, contient le tarif + ville + appel à l'action
- `og:image` dynamique (Next.js `opengraph-image.tsx`) avec ville + tarif

### 10.3 Réalisations = pilier E-E-A-T

- Minimum **3 réalisations par ville** au lancement (30 au total)
- Photos avant/après réelles (Supabase Storage)
- Avis client (prénom + ville + note)
- Date d'intervention, durée, contexte
- Schema `Review` + `AggregateRating` agrégé sur la page galerie

### 10.4 Fichiers transverses

- `sitemap.xml` dynamique (Next.js `sitemap.ts`) : home + 10 villes × 4 services + galeries + fiches
- `robots.txt` : autorise tout sauf `/api`
- `llms.txt` : pitch + URL clés + tarifs indicatifs (pour référencement IA)

---

## 11. Variables d'environnement

```bash
# .env.local

# Supabase
DATABASE_URL="postgresql://..."           # Pooler Supabase
DIRECT_URL="postgresql://..."             # Connexion directe (migrations)
NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."           # Server-side only

# Site
NEXT_PUBLIC_SITE_URL="https://[domaine].fr"
NEXT_PUBLIC_SITE_NAME="..."

# Notifications leads
RESEND_API_KEY="..."                      # Pour notification email lead devis
EMAIL_NOTIFICATION_LEAD="contact@..."

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID="G-..."
```

---

## 12. Seed data (extrait `prisma/seed.ts`)

```ts
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

const VILLES = [
  { slug: 'toulon', nom: 'Toulon', codePostal: '83000', population: 178000, latitude: 43.1242, longitude: 5.928, ordre: 1 },
  { slug: 'la-seyne-sur-mer', nom: 'La Seyne-sur-Mer', codePostal: '83500', population: 65000, latitude: 43.1006, longitude: 5.881, ordre: 2 },
  { slug: 'hyeres', nom: 'Hyères', codePostal: '83400', population: 57000, latitude: 43.1206, longitude: 6.128, ordre: 3 },
  { slug: 'frejus', nom: 'Fréjus', codePostal: '83600', population: 55000, latitude: 43.4332, longitude: 6.737, ordre: 4 },
  { slug: 'draguignan', nom: 'Draguignan', codePostal: '83300', population: 40000, latitude: 43.5379, longitude: 6.466, ordre: 5 },
  { slug: 'saint-raphael', nom: 'Saint-Raphaël', codePostal: '83700', population: 36000, latitude: 43.4253, longitude: 6.7686, ordre: 6 },
  { slug: 'six-fours-les-plages', nom: 'Six-Fours-les-Plages', codePostal: '83140', population: 34000, latitude: 43.0938, longitude: 5.8358, ordre: 7 },
  { slug: 'la-garde', nom: 'La Garde', codePostal: '83130', population: 25000, latitude: 43.1264, longitude: 6.0094, ordre: 8 },
  { slug: 'la-valette-du-var', nom: 'La Valette-du-Var', codePostal: '83160', population: 24000, latitude: 43.1392, longitude: 5.9819, ordre: 9 },
  { slug: 'sanary-sur-mer', nom: 'Sanary-sur-Mer', codePostal: '83110', population: 17000, latitude: 43.1186, longitude: 5.8019, ordre: 10 },
];

const SERVICES = [
  { slug: 'debouchage', nom: 'Débouchage canalisation', icone: '🚿', couleur: '#2563eb', ordre: 1, prixMin: 9900, prixMax: 19900 },
  { slug: 'inspection-camera', nom: 'Inspection caméra', icone: '📹', couleur: '#7c3aed', ordre: 2, prixMin: 14900, prixMax: 29900 },
  { slug: 'fosse-septique', nom: 'Pompage fosse septique', icone: '🚛', couleur: '#16a34a', ordre: 3, prixMin: 24900, prixMax: 49900 },
  { slug: 'pompe-relevage', nom: 'Pompe de relevage', icone: '⚙️', couleur: '#ea580c', ordre: 4, prixMin: 19900, prixMax: 89900 },
];

const PARAMETRES = [
  { cle: 'TEL_PRINCIPAL', valeur: '[À DÉFINIR]' },
  { cle: 'EMAIL_CONTACT', valeur: '[À DÉFINIR]' },
  { cle: 'NOM_ENTREPRISE', valeur: '[À DÉFINIR]' },
  { cle: 'SIRET', valeur: '[À DÉFINIR]' },
  { cle: 'ADRESSE_SIEGE', valeur: '[À DÉFINIR]' },
  { cle: 'HORAIRES', valeur: '24h/7j — Intervention sous 1h' },
  { cle: 'ASSURANCE_RC_PRO', valeur: '[À DÉFINIR]' },
];

// Questions débouchage
const QUESTIONS_DEBOUCHAGE = [
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
    libelle: 'Y a-t-il un refoulement ou des odeurs ?',
    reponses: [
      { libelle: 'Non', icone: '✅', facteurTarif: 1.0, forceDevis: false, ordre: 1 },
      { libelle: 'Odeurs uniquement', icone: '👃', facteurTarif: 1.0, forceDevis: false, ordre: 2 },
      { libelle: "Refoulement d'eau", icone: '💧', facteurTarif: 1.4, forceDevis: false, ordre: 3 },
      { libelle: 'Refoulement de matières', icone: '🚨', facteurTarif: 1.6, forceDevis: true, ordre: 4 },
    ],
  },
];

// (idem pour les 3 autres services — voir §6)

async function main() {
  // Parametres
  for (const p of PARAMETRES) {
    await db.parametre.upsert({ where: { cle: p.cle }, update: {}, create: p });
  }

  // Villes
  for (const v of VILLES) {
    await db.ville.upsert({ where: { slug: v.slug }, update: v, create: v });
  }

  // Services + tarifs + questions + réponses
  for (const s of SERVICES) {
    const { prixMin, prixMax, ...serviceData } = s;
    const service = await db.service.upsert({
      where: { slug: s.slug },
      update: serviceData,
      create: serviceData,
    });

    await db.tarif.upsert({
      where: { serviceId: service.id },
      update: { prixMin, prixMax },
      create: { serviceId: service.id, prixMin, prixMax },
    });

    // Questions selon service
    const questions = s.slug === 'debouchage' ? QUESTIONS_DEBOUCHAGE : []; // etc.
    for (const q of questions) {
      const { reponses, ...qData } = q;
      const question = await db.question.upsert({
        where: { serviceId_ordre: { serviceId: service.id, ordre: q.ordre } },
        update: qData,
        create: { ...qData, serviceId: service.id },
      });
      for (const r of reponses) {
        await db.reponse.upsert({
          where: { questionId_ordre: { questionId: question.id, ordre: r.ordre } },
          update: r,
          create: { ...r, questionId: question.id },
        });
      }
    }
  }
}

main().finally(() => db.$disconnect());
```

---

## 13. Plan d'exécution Claude Code (8 sprints)

| Sprint | Objectif | Durée estimée |
|---|---|---|
| **S1 — Setup** | `npx create-next-app` + Tailwind + Prisma + Supabase init + variables env + déploiement Vercel vide | 1h |
| **S2 — DB & Seed** | Schéma Prisma complet + migration + seed des 10 villes, 4 services, 4 sets de questions, 4 tarifs, 7 paramètres | 2h |
| **S3 — Borne** | `<Borne />`, `<BorneButton />`, `<BorneHeader />`, `<BorneFooter />`, home `/`, page sélecteur `/depannage`, page ville `/depannage/[ville]` | 3h |
| **S4 — Wizard** | `<Wizard />` complet avec state machine + animations + `<WizardResultat />` lisant `Tarif` et calculant prix + `<BoutonAppel />` lisant `Parametre` | 4h |
| **S5 — Devis** | Page `/depannage/[ville]/devis` + server action `creerLeadDevis` + email notification (Resend) | 2h |
| **S6 — Réalisations** | Modèle, seed de 30 réalisations (3 par ville), galerie, fiche détaillée, slider avant/après | 4h |
| **S7 — SEO** | Tous les JSON-LD, sitemap dynamique, robots, llms.txt, métadonnées dynamiques, opengraph-image dynamique | 3h |
| **S8 — Polish** | Tracking appels, mentions légales, CGV, politique confidentialité, tests Lighthouse, ajustements UX mobile | 2h |

**Total estimé** : ~21h de dev avec Claude Code en mode agentique.

---

## 14. Règles non-négociables (rappel portfolio)

1. **`Parametre.TEL_PRINCIPAL`** : seule source du téléphone affiché. Jamais hardcodé. Vérifier après chaque sprint.
2. **`Tarif.prixMin/prixMax`** : seule source des prix. Calculer toujours via `lib/tarifs.ts`. Jamais de chiffre en dur dans un composant.
3. **`Ville.facteurTarif`** : modulation locale lue depuis DB.
4. **Mobile-first absolu** : la borne est conçue pour un pouce sur écran de smartphone. Tester sur iPhone SE (375 px) en priorité.
5. **Pas plus de 4 clics** entre l'arrivée sur la home et le bouton APPELER : Borne → Service → Q1 → Q2 (Q3) → Résultat avec CTA.
6. **Performance Lighthouse ≥ 95** sur mobile (toute page). Pas de carrousel JS lourd, pas d'iframe, images Next.js optimisées.
7. **JSON-LD valide** sur 100 % des pages (testé via Rich Results Test Google).

---

## 15. Suggestions de domaine (à arbitrer)

| Domaine | Force SEO | Mémorabilité | Note |
|---|---|---|---|
| `borne-depannage-var.fr` | ★★★★★ (mots-clés exacts) | ★★★ | Long mais explicite |
| `depannage-express-var.fr` | ★★★★ | ★★★★ | Bon compromis |
| `varurgence-debouchage.fr` | ★★★★ | ★★★ | Ton urgence fort |
| `83depannage.fr` | ★★★ | ★★★★★ | Court, codé Var, marquant |
| `urgence-canalisation-var.fr` | ★★★★ | ★★★ | Long mais ciblé |

→ Mes deux préférences : **`83depannage.fr`** (court + Var + générique multi-services) et **`borne-depannage-var.fr`** (SEO maximal).

---

## 16. Prochaines étapes

1. **Tu choisis le domaine** + tu réserves chez OVH/Gandi
2. **Tu crées le projet Supabase dédié** + tu fournis les variables `.env`
3. **Tu valides ce PRD** (ou tu ajustes les questions/facteurs/services)
4. **Je découpe en prompts Claude Code** sprint par sprint et tu lances

Une fois ces 4 points OK, on enchaîne directement sur le sprint S1.

---

*Fin du PRD v1.0*
