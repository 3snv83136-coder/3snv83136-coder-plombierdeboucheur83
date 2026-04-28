# CLAUDE CODE — Plan d'exécution `plombierdeboucheur83.fr`
**Borne dépannage Var — Sprints 1 à 8, prompts copy-paste-ready**

---

## 0. Pré-requis manuels (toi, ~15 min)

### 0.1 Domaine
- [ ] Réserver `plombierdeboucheur83.fr` (OVH ou Gandi)
- [ ] Garder les nameservers par défaut, on basculera sur Vercel au sprint 1

### 0.2 Supabase (projet dédié)
- [ ] Aller sur https://supabase.com/dashboard
- [ ] **New project** → Nom : `plombierdeboucheur83`
- [ ] Région : **Frankfurt (eu-central-1)** (proche France, RGPD)
- [ ] Mot de passe DB fort (sauvegarde-le dans 1Password)
- [ ] Plan : **Free** au lancement (suffisant pour < 50k visiteurs/mois)
- [ ] Attendre la création (~2 min)

Récupérer dans **Settings > Database** :
- `DATABASE_URL` (Connection pooling, mode `Transaction`, port **6543**)
- `DIRECT_URL` (Connection pooling, mode `Session`, port **5432**)

Récupérer dans **Settings > API** :
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (⚠️ secret)

### 0.3 GitHub
- [ ] Créer un repo **privé** : `3snv83136-coder/plombierdeboucheur83`
- [ ] Cloner en local : `git clone git@github.com:3snv83136-coder/plombierdeboucheur83.git`

### 0.4 Vercel
- [ ] Connecter le repo GitHub à Vercel
- [ ] Choisir le team `mondor` (ou ton compte perso)
- [ ] **Pas de déploiement** tout de suite, on configure d'abord

### 0.5 Resend (notifications email leads)
- [ ] Créer un compte sur https://resend.com
- [ ] Créer une API key, la noter

---

## 1. Convention pour chaque sprint

Chaque sprint :
1. `cd ~/Sites/plombierdeboucheur83` (ou ton chemin local)
2. Lancer Claude Code : `claude`
3. Coller le prompt du sprint **en entier**
4. Laisser Claude Code travailler en autonomie
5. Vérifier les critères de validation à la fin
6. Commit + push avant de passer au sprint suivant

---

## SPRINT 1 — Setup Next.js + Tailwind + Prisma + Vercel

**Objectif** : projet techniquement vide mais déployé sur Vercel avec toutes les dépendances installées.

**À avoir sous la main** : variables Supabase de l'étape 0.2.

### Prompt Claude Code S1

```
Initialise un projet Next.js 14 dans le dossier courant pour le site plombierdeboucheur83.fr.

Stack à installer :
- Next.js 14 App Router (TypeScript, ESLint, Tailwind, src/ = NON, app router = OUI, alias @/* = OUI)
- Prisma + @prisma/client (provider postgresql)
- Supabase JS : @supabase/supabase-js, @supabase/ssr
- Resend pour l'email
- date-fns, clsx, tailwind-merge, lucide-react

Étapes :

1. `npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"`

2. Installer les dépendances :
   npm install @prisma/client @supabase/supabase-js @supabase/ssr resend date-fns clsx tailwind-merge lucide-react
   npm install -D prisma tsx

3. Initialiser Prisma : `npx prisma init`

4. Créer .env.local avec :
   DATABASE_URL=""
   DIRECT_URL=""
   NEXT_PUBLIC_SUPABASE_URL=""
   NEXT_PUBLIC_SUPABASE_ANON_KEY=""
   SUPABASE_SERVICE_ROLE_KEY=""
   NEXT_PUBLIC_SITE_URL="https://plombierdeboucheur83.fr"
   NEXT_PUBLIC_SITE_NAME="Plombier Déboucheur 83"
   RESEND_API_KEY=""
   EMAIL_NOTIFICATION_LEAD=""

5. Créer .env.example avec les mêmes clés vides (sans valeurs)

6. Mettre à jour .gitignore pour exclure .env*.local et /prisma/migrations/dev.db (au cas où)

7. Configurer tailwind.config.ts avec :
   - content : ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}']
   - theme.extend.colors : 'borne-bleu' #2563eb, 'borne-violet' #7c3aed, 'borne-vert' #16a34a, 'borne-orange' #ea580c
   - theme.extend.fontFamily.sans : ['var(--font-inter)', 'system-ui', 'sans-serif']

8. Dans app/layout.tsx, importer Inter via next/font/google et l'attacher au html lang="fr"

9. Créer lib/prisma.ts (singleton Prisma)
   Code :
   import { PrismaClient } from '@prisma/client'
   const globalForPrisma = global as unknown as { prisma: PrismaClient }
   export const prisma = globalForPrisma.prisma || new PrismaClient()
   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

10. Créer une page d'accueil minimale dans app/page.tsx affichant juste "Plombier Déboucheur 83 — site en construction" centré, fond blanc, titre noir, font Inter.

11. Initialiser git, faire un premier commit "chore: initial setup".

Confirme à la fin : la liste des fichiers créés + la commande à lancer pour vérifier (npm run dev).
```

**Validation S1**
- [ ] `npm run dev` affiche la page sur http://localhost:3000
- [ ] `prisma/schema.prisma` existe
- [ ] `.env.local` est créé (à remplir manuellement avec les vraies valeurs Supabase)
- [ ] Premier commit poussé sur GitHub

**Action manuelle après S1**
- Remplir `.env.local` avec les vraies valeurs Supabase
- Importer le repo GitHub dans Vercel
- Ajouter les variables d'env dans Vercel (toutes celles de `.env.local`)
- Pointer le DNS de `plombierdeboucheur83.fr` vers Vercel (CNAME ou A record selon Vercel)

---

## SPRINT 2 — Schéma Prisma + Seed complet

**Objectif** : base de données structurée avec 10 villes, 4 services, 4 sets de questions/réponses, 4 tarifs, 7 paramètres.

### Prompt Claude Code S2

```
Configure entièrement la base Prisma pour plombierdeboucheur83.fr.

ÉTAPE 1 — Schéma

Remplace tout le contenu de prisma/schema.prisma par :

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Parametre {
  id        String   @id @default(cuid())
  cle       String   @unique
  valeur    String
  updatedAt DateTime @updatedAt
}

model Ville {
  id           String   @id @default(cuid())
  slug         String   @unique
  nom          String
  codePostal   String
  population   Int
  latitude     Float
  longitude    Float
  description  String?  @db.Text
  facteurTarif Float    @default(1.0)
  ordre        Int

  realisations Realisation[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([slug])
}

model Service {
  id          String   @id @default(cuid())
  slug        String   @unique
  nom         String
  icone       String
  couleur     String
  description String   @db.Text
  ordre       Int

  questions    Question[]
  tarif        Tarif?
  realisations Realisation[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Question {
  id        String   @id @default(cuid())
  serviceId String
  service   Service  @relation(fields: [serviceId], references: [id], onDelete: Cascade)
  ordre     Int
  libelle   String

  reponses Reponse[]

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

model Tarif {
  id          String  @id @default(cuid())
  serviceId   String  @unique
  service     Service @relation(fields: [serviceId], references: [id])
  prixMin     Int
  prixMax     Int
  unite       String  @default("intervention")
  description String?

  updatedAt DateTime @updatedAt
}

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

  photoAvant  String[]
  photoApres  String[]

  dateRealisation   DateTime
  dureeIntervention Int?

  noteClient   Int?
  avisClient   String?  @db.Text
  prenomClient String?

  publie Boolean @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([villeId, publie])
  @@index([serviceId, publie])
}

model LeadDevis {
  id        String   @id @default(cuid())
  villeSlug String
  service   String
  reponses  Json

  nom       String
  telephone String
  email     String?
  adresse   String?
  message   String?  @db.Text

  status String @default("NOUVEAU")

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([status, createdAt])
}

model AppelTracking {
  id           String @id @default(cuid())
  villeSlug    String
  service      String
  tarifAffiche Int
  reponses     Json

  userAgent String?
  referrer  String?
  ip        String?

  createdAt DateTime @default(now())

  @@index([villeSlug, service, createdAt])
}

ÉTAPE 2 — Migration

Lance : npx prisma migrate dev --name init

ÉTAPE 3 — Script seed

Crée prisma/seed.ts avec :
- 10 villes du Var (slugs : toulon, la-seyne-sur-mer, hyeres, frejus, draguignan, saint-raphael, six-fours-les-plages, la-garde, la-valette-du-var, sanary-sur-mer)
  Données complètes : nom, codePostal, population, latitude, longitude, ordre 1 à 10, facteurTarif 1.0
- 4 services : debouchage (#2563eb, ordre 1), inspection-camera (#7c3aed, ordre 2), fosse-septique (#16a34a, ordre 3), pompe-relevage (#ea580c, ordre 4)
- 4 tarifs (en centimes) :
  debouchage : prixMin 9900, prixMax 19900
  inspection-camera : prixMin 14900, prixMax 29900
  fosse-septique : prixMin 24900, prixMax 49900
  pompe-relevage : prixMin 19900, prixMax 89900
- 7 paramètres : TEL_PRINCIPAL "04 00 00 00 00", EMAIL_CONTACT "contact@plombierdeboucheur83.fr", NOM_ENTREPRISE "Plombier Déboucheur 83", SIRET "À DÉFINIR", ADRESSE_SIEGE "À DÉFINIR", HORAIRES "24h/7j — Intervention sous 1h", ASSURANCE_RC_PRO "À DÉFINIR"
- Questions et réponses pour les 4 services selon ce mapping :

DÉBOUCHAGE (3 questions) :
Q1 "Quel élément est bouché ?" :
  - "Évier / Lavabo" 🚰 facteur 1.0
  - "WC" 🚽 facteur 1.2
  - "Douche / Baignoire" 🛁 facteur 1.0
  - "Canalisation principale" 🕳️ facteur 1.5
  - "Toutes les évacuations" ⚠️ facteur 1.8 forceDevis=true
Q2 "Depuis quand ?" :
  - "Aujourd'hui" ⚡ 1.0
  - "Quelques jours" 📅 1.0
  - "Plusieurs semaines" ⏳ 1.3
Q3 "Refoulement ou odeurs ?" :
  - "Non" ✅ 1.0
  - "Odeurs uniquement" 👃 1.0
  - "Refoulement d'eau" 💧 1.4
  - "Refoulement de matières" 🚨 1.6 forceDevis=true

INSPECTION CAMÉRA (3 questions) :
Q1 "Pourquoi cette inspection ?" :
  - "Diagnostic après débouchage" 🔍 1.0
  - "État avant achat / vente" 🏠 1.1
  - "Recherche fuite / casse" 💧 1.2
  - "Avant travaux" 🚧 1.0
Q2 "Longueur estimée du réseau ?" :
  - "Moins de 10 m" 📏 1.0
  - "10 à 30 m" 📏 1.2
  - "Plus de 30 m" 📏 1.5 forceDevis=true
Q3 "Accès au regard ?" :
  - "Oui, accessible" ✅ 1.0
  - "Non, à dégager" 🪨 1.3

FOSSE SEPTIQUE (4 questions) :
Q1 "Type d'installation ?" :
  - "Fosse toutes eaux" 🛢️ 1.0
  - "Fosse septique seule" 🛢️ 1.0
  - "Bac à graisses" 🍳 0.8
  - "Micro-station" ⚙️ 1.3
Q2 "Volume estimé ?" :
  - "1000 à 3000 L" 📦 1.0
  - "3000 à 5000 L" 📦 1.2
  - "Plus de 5000 L" 📦 1.5 forceDevis=true
Q3 "Dernière vidange ?" :
  - "Moins d'un an" 🆕 1.0
  - "1 à 4 ans" 📅 1.0
  - "Plus de 4 ans / jamais" ⏳ 1.2
Q4 "Distance camion → regard ?" :
  - "Moins de 30 m" 🚛 1.0
  - "30 à 50 m" 🚛 1.2
  - "Plus de 50 m" 🚛 1.5 forceDevis=true

POMPE DE RELEVAGE (3 questions) :
Q1 "Type d'intervention ?" :
  - "Diagnostic / panne" 🔧 1.0
  - "Remplacement" 🔄 1.3
  - "Installation neuve" 🆕 1.6 forceDevis=true
Q2 "Type de pompe ?" :
  - "Eaux usées domestiques" 💧 1.0
  - "Eaux vannes (WC)" 🚽 1.1
  - "Eaux pluviales" 🌧️ 1.0
Q3 "Symptôme ?" :
  - "Ne démarre pas" ❌ 1.0
  - "Tourne sans pomper" 🔄 1.1
  - "Bruit anormal" 🔊 1.0
  - "Disjoncte" ⚡ 1.2

Toutes les opérations doivent être idempotentes (upsert).

ÉTAPE 4 — Configurer le seed

Ajoute dans package.json :
"prisma": {
  "seed": "tsx prisma/seed.ts"
}

ÉTAPE 5 — Lancer le seed

Lance : npx prisma db seed
Vérifie via npx prisma studio que tout est en base.

Commit final : "feat(db): schéma + seed complet 10 villes 4 services"
```

**Validation S2**
- [ ] `npx prisma studio` montre 10 villes, 4 services, 13 questions, ~50 réponses, 4 tarifs, 7 paramètres
- [ ] Aucune erreur dans `npx prisma migrate status`
- [ ] Push GitHub fait

---

## SPRINT 3 — Composant Borne + pages home / sélecteur ville / page ville

**Objectif** : interface borne McDonald's affichée et fonctionnelle, sans wizard encore.

### Prompt Claude Code S3

```
Implémente l'interface "borne" type McDonald's pour plombierdeboucheur83.fr.

OBJECTIFS :
1. Composant <Borne> qui affiche les 4 services en boutons géants
2. Page d'accueil / qui montre la borne (sans ville présélectionnée) + sélecteur de ville
3. Page /depannage qui montre uniquement le sélecteur de ville
4. Page /depannage/[ville] qui montre la borne pour la ville donnée
5. Composant <BoutonAppel> qui lit Parametre.TEL_PRINCIPAL depuis la DB

CONTRAINTES UX :
- Mobile-first absolu, testable en 375 px de large
- Boutons services minimum 280×280 px sur mobile
- Pas de carrousel JS, pas d'iframe
- Couleurs vives, ombre marquée, état hover et active visibles
- Police : Inter, déjà configurée
- Le bouton appel est sticky en bas sur mobile, dans le header sur desktop
- Toujours visible : nom ville (si applicable), numéro de téléphone

CONTRAINTES TECHNIQUES :
- Tous les composants Server Component par défaut
- Lecture DB via lib/prisma.ts
- Lecture du téléphone via lib/parametres.ts (à créer)
- Lecture des services via lib/services.ts (à créer)
- Lecture des villes via lib/villes.ts (à créer)
- JAMAIS de prix ni de téléphone hardcodé dans le code

ÉTAPE 1 — Helpers lib

Crée :
- lib/parametres.ts : export async function getParametre(cle: string): Promise<string | null>
- lib/services.ts : export async function getServices(), export async function getServiceBySlug(slug: string)
- lib/villes.ts : export async function getVilles(), export async function getVilleBySlug(slug: string)

ÉTAPE 2 — Composants

Crée components/shared/BoutonAppel.tsx :
- Server Component async
- Lit TEL_PRINCIPAL via getParametre()
- Props : variante "sticky" | "inline" | "header"
- Format affichage : prend "0400000000" et formate "04 00 00 00 00"
- href="tel:+33400000000" (sans le 0 initial, préfixé +33)
- Texte "Appeler maintenant" + icône téléphone (lucide-react Phone)
- Variante sticky : fixed bottom-0 left-0 right-0 z-50, bg-borne-bleu, text-white, py-4, full width, mobile only (md:hidden)
- Variante inline : bouton large, bg-borne-bleu, text-white, rounded-2xl, py-6, px-8, text-2xl font-bold
- Variante header : compact, juste numéro cliquable

Crée components/borne/BorneButton.tsx :
- Client Component (Link à l'intérieur)
- Props : service { slug, nom, icone, couleur }, villeSlug
- Link href : si villeSlug : /depannage/${villeSlug}/${service.slug} ; sinon : /depannage (sélecteur ville)
- Carré, min-h-[280px] sur mobile, aspect-square
- Background : style.backgroundColor = service.couleur
- Icône emoji 6xl en haut, libellé text-2xl font-bold blanc en dessous
- Effet hover : scale-105, ombre profonde
- Effet active : scale-95

Crée components/borne/Borne.tsx :
- Server Component
- Props : ville?: { slug, nom } (optionnel)
- Affiche un titre :
  - Si ville : "Quel est votre problème à {ville.nom} ?"
  - Sinon : "Quel est votre problème ?"
- Grille 2x2 mobile, 4x1 desktop des 4 BorneButton
- Espacement gap-4 mobile, gap-6 desktop
- Padding p-4 mobile, p-8 desktop

Crée components/borne/BorneHeader.tsx :
- Server Component
- Props : ville?: { nom }
- Affiche en haut : logo "Plombier Déboucheur 83" (texte stylé pour l'instant), à droite numéro <BoutonAppel variante="header" />
- Si ville fournie : un sous-titre "Intervention rapide à {ville.nom} et alentours"

Crée components/borne/BandeauConfiance.tsx :
- Server Component
- 3 colonnes (mobile : empilées) : "Intervention < 1h", "Devis gratuit", "Garantie satisfaction"
- Icônes lucide-react : Clock, FileText, ShieldCheck
- Background blanc, texte gris foncé, bordure top et bottom légère

Crée components/borne/BorneSelecteurVille.tsx :
- Server Component async
- Lit les villes via getVilles()
- Affiche un titre "Sélectionnez votre ville"
- Grille 2x5 mobile, 5x2 desktop de boutons ville
- Chaque bouton : Link href={/depannage/${ville.slug}}, bg-white, border, hover:bg-gray-50, py-6, text-xl font-semibold, affiche le nom et le code postal en plus petit dessous

ÉTAPE 3 — Pages

app/layout.tsx : conserve la structure existante (Inter), ajoute metadata par défaut :
title: "Plombier Déboucheur 83 — Débouchage canalisation Var"
description: "Débouchage canalisation, inspection caméra, pompage fosse septique et pompe de relevage dans le Var. Intervention rapide 24h/7j. Tarif transparent."

Crée app/page.tsx (Server Component async) :
- <BorneHeader />
- <Borne /> (sans ville)
- <BandeauConfiance />
- <BoutonAppel variante="sticky" />
- En dessous, intro : "Trouvez un dépanneur dans votre ville" + <BorneSelecteurVille />
- Footer simple : © 2026 Plombier Déboucheur 83 + liens mentions/cgv/politique

Crée app/depannage/page.tsx :
- <BorneHeader />
- Titre "Choisissez votre ville"
- <BorneSelecteurVille />
- <BandeauConfiance />
- <BoutonAppel variante="sticky" />

Crée app/depannage/[ville]/page.tsx :
- generateStaticParams() qui génère les 10 villes
- Récupère ville via getVilleBySlug(params.ville) ; si null → notFound()
- <BorneHeader ville={ville} />
- <Borne ville={ville} />
- <BandeauConfiance />
- <BoutonAppel variante="sticky" />
- Section "Nos dernières réalisations à {ville.nom}" avec un placeholder "Section en construction" (sera remplie au sprint 6)
- generateMetadata() : title "Dépannage à {ville.nom} — Plombier Déboucheur 83", description avec ville et services

Crée app/depannage/[ville]/layout.tsx (optionnel pour ce sprint) qui valide ville existante.

Lance npm run dev pour vérifier que tout s'affiche, puis commit "feat(borne): interface borne complète + pages home/ville".
```

**Validation S3**
- [ ] `/` affiche la borne avec 4 boutons + sélecteur 10 villes en bas
- [ ] `/depannage` affiche le sélecteur de villes
- [ ] `/depannage/toulon` affiche la borne avec "à Toulon" dans le titre
- [ ] Cliquer sur un bouton service redirige vers `/depannage/toulon/debouchage` (404 attendu, on fera le wizard au S4)
- [ ] Bouton appel cliquable, ouvre `tel:` sur mobile
- [ ] Lighthouse mobile ≥ 90

---

## SPRINT 4 — Wizard complet + calcul tarif + écran résultat

**Objectif** : du clic sur bouton service jusqu'à l'écran "Appelez avec ce tarif".

### Prompt Claude Code S4

```
Implémente le wizard complet pour plombierdeboucheur83.fr.

OBJECTIF : depuis /depannage/[ville]/[service], afficher 3-4 questions à choix unique en wizard, calculer le prix final et afficher l'écran avec le bouton APPELER.

CONTRAINTES :
- Wizard en Client Component, mais la page parent reste Server Component (charge les données)
- Une question à la fois, animation slide-in latérale
- ProgressBar en haut (étape X / Y)
- Bouton "Retour" en haut à gauche pendant le wizard
- À chaque réponse cliquée, passe automatiquement à la question suivante (pas de "Suivant")
- À la dernière réponse, affiche l'écran résultat

CALCUL TARIF :
- Formule : prixFinalMin = service.tarif.prixMin × ∏(facteurs réponses) × ville.facteurTarif
  prixFinalMax = service.tarif.prixMax × ∏(facteurs réponses) × ville.facteurTarif
- Si AU MOINS UNE réponse a forceDevis=true → ne pas afficher de prix, basculer en mode "Devis"
- Affichage prix : "À partir de XX €" si prixMin ≈ prixMax, sinon "Entre XX € et YY €"
- Arrondi à l'euro inférieur côté min, supérieur côté max

ÉCRAN RÉSULTAT (mode prix) :
- Récap visuel des choix (icônes + libellés condensés)
- Encadré tarif géant (text-5xl, fond couleur du service)
- BIG bouton APPELER : full width, bg-green-600, text-white, py-8, text-3xl font-bold, icône téléphone
- Au clic : appel API /api/tracking-appel pour enregistrer + ouverture tel:+33...
- Lien secondaire en dessous : "Pas urgent ? Demander un devis" → /depannage/[ville]/devis?service=...

ÉCRAN RÉSULTAT (mode devis) :
- Récap visuel des choix
- Message "Votre situation nécessite un devis personnalisé pour vous proposer le juste prix"
- Bouton "Demander un devis" → /depannage/[ville]/devis?service=...
- Bouton secondaire "Appeler quand même" → tel:

ÉTAPE 1 — Helper calcul

Crée lib/tarifs.ts :

import { prisma } from './prisma'

export async function calculerTarif(serviceSlug: string, villeSlug: string, facteurs: number[], forceDevis: boolean) {
  const service = await prisma.service.findUnique({
    where: { slug: serviceSlug },
    include: { tarif: true },
  })
  const ville = await prisma.ville.findUnique({ where: { slug: villeSlug } })

  if (!service?.tarif || !ville) return null
  if (forceDevis) return { mode: 'devis' as const }

  const facteurTotal = facteurs.reduce((acc, f) => acc * f, 1) * ville.facteurTarif
  const prixMin = Math.floor((service.tarif.prixMin / 100) * facteurTotal)
  const prixMax = Math.ceil((service.tarif.prixMax / 100) * facteurTotal)

  return { mode: 'prix' as const, prixMin, prixMax }
}

export function formaterPrix(prixMin: number, prixMax: number): string {
  if (Math.abs(prixMax - prixMin) < 10) return `À partir de ${prixMin} €`
  return `Entre ${prixMin} € et ${prixMax} €`
}

ÉTAPE 2 — Composants Wizard

Crée components/wizard/Wizard.tsx (Client Component "use client") :
- Props : service (avec questions et reponses incluses), ville (slug + nom + facteurTarif), tarifBase (prixMin, prixMax)
- État : currentStep (number), reponsesIds (Record<questionId, reponseId>), facteurs (number[]), forceDevis (bool)
- Gestion : cliquer sur réponse → ajoute aux états → setCurrentStep+1 ; si dernière question → bascule sur résultat
- Bouton retour qui décrémente currentStep et retire la dernière réponse
- Animation : transform avec transition-transform duration-300
- Sur résultat, calcule prix côté client à partir de tarifBase et ville.facteurTarif

Crée components/wizard/WizardProgressBar.tsx :
- Props : current (number), total (number)
- Barre horizontale, hauteur 6px, fond gris, partie pleine couleur du service, border-radius full

Crée components/wizard/WizardQuestion.tsx :
- Props : question { libelle, reponses }, onAnswer (reponse) => void, couleurService
- Affiche le libellé en text-2xl font-bold mb-6
- Liste de WizardReponse en grille 1 colonne mobile, 2 colonnes desktop si plus de 4 réponses

Crée components/wizard/WizardReponse.tsx (Client) :
- Props : reponse { libelle, icone, facteurTarif, forceDevis }, onClick
- Bouton large, py-6, px-4, rounded-2xl, bg-white, border-2 border-gray-200
- Hover : border-{couleur service}, scale-102
- Icône emoji 4xl à gauche, libellé text-xl font-semibold

Crée components/wizard/WizardResultat.tsx (Client) :
- Props : recap (array), prixMin, prixMax, mode ("prix" | "devis"), villeSlug, serviceSlug, telephone, couleurService
- Si mode="prix" : encadré prix géant + gros bouton APPELER (vert, py-8, text-3xl)
- Au clic appeler : POST /api/tracking-appel avec body { villeSlug, service, tarifAffiche, reponses } puis window.location.href = "tel:+33..."
- Si mode="devis" : message + bouton vers /depannage/[ville]/devis

ÉTAPE 3 — Page wizard

Crée app/depannage/[ville]/[service]/page.tsx (Server Component async) :
- Récupère ville via getVilleBySlug ; service via prisma avec include questions(orderBy: ordre) > reponses(orderBy: ordre) et tarif
- Récupère le téléphone via getParametre('TEL_PRINCIPAL')
- Si ville ou service introuvable → notFound()
- Affiche <BorneHeader ville={ville} />
- Affiche <Wizard service={service} ville={ville} tarifBase={service.tarif} telephone={telephone} />
- generateMetadata avec ville + service

Crée generateStaticParams pour cette route : produit-cartesien des 10 villes × 4 services = 40 routes statiques.

ÉTAPE 4 — API tracking

Crée app/api/tracking-appel/route.ts :
- POST handler
- Lit body JSON { villeSlug, service, tarifAffiche, reponses }
- Récupère userAgent et referrer depuis request.headers
- Crée AppelTracking via prisma
- Retourne { success: true }

ÉTAPE 5 — Page 404 propre

Si app/not-found.tsx n'existe pas, crée-le avec un message simple et un bouton retour à l'accueil.

Lance npm run dev. Vérifie le parcours complet : / → bouton Toulon → bouton Débouchage → 3 questions → écran résultat avec prix calculé et bouton appeler.

Commit "feat(wizard): wizard complet + calcul tarif + écran résultat".
```

**Validation S4**
- [ ] Parcours fluide en 4 clics max sur mobile
- [ ] Prix calculé varie selon les réponses (vérifier 2-3 combinaisons à la main)
- [ ] Réponse "Toutes les évacuations" → bascule sur écran devis
- [ ] Tracking enregistré dans Supabase (vérifier table `AppelTracking`)
- [ ] Lighthouse mobile ≥ 90

---

## SPRINT 5 — Page devis + server action + email Resend

**Objectif** : capter les leads dont le cas est ambigu (forceDevis) avec un mini-formulaire et notifier par email.

### Prompt Claude Code S5

```
Implémente la page de devis et la création de leads pour plombierdeboucheur83.fr.

OBJECTIF :
- Page /depannage/[ville]/devis qui affiche un formulaire court
- Server action qui crée un LeadDevis en DB et envoie un email via Resend
- Confirmation visuelle après envoi

ÉTAPE 1 — Server Action

Crée actions/creerLeadDevis.ts ("use server") :

Validation Zod (installer si besoin : npm install zod) sur le formulaire :
- nom : min 2 caractères
- telephone : pattern français /^(\+33|0)[1-9](\s?\d{2}){4}$/
- email : email valide ou vide
- adresse : optionnel
- message : min 10 caractères, max 500
- villeSlug, service : passés depuis la page (cachés)

Logique :
1. Valide via Zod
2. Crée LeadDevis en DB
3. Envoie un email via Resend à process.env.EMAIL_NOTIFICATION_LEAD :
   - From : "Plombier Déboucheur 83 <noreply@plombierdeboucheur83.fr>"
   - Subject : "🔔 Nouveau devis — {service} — {ville}"
   - HTML : récap propre du lead avec nom, téléphone, email, adresse, message, ville, service, date
4. Retourne { success: true } ou { success: false, errors: ... }

ÉTAPE 2 — Page devis

Crée app/depannage/[ville]/devis/page.tsx (Server Component) :
- Lit searchParams.service pour pré-sélectionner
- Récupère ville et services depuis DB
- Si ville introuvable → notFound()
- Affiche <BorneHeader ville={ville} />
- Affiche <FormulaireDevis ville={ville} services={services} serviceParDefaut={searchParams.service} />

Crée components/devis/FormulaireDevis.tsx (Client) :
- État formulaire (useState ou useFormState avec server action)
- Champs : nom, téléphone (obligatoires), email, adresse, message
- Sélecteur service (radio buttons stylés en boutons, default = serviceParDefaut)
- Bouton submit "Envoyer ma demande de devis"
- Validation côté client minimale (HTML5 required + pattern téléphone)
- Au succès : remplace le formulaire par un message de confirmation "Merci ! Nous vous rappelons dans les 30 minutes" + lien retour borne
- Au-dessus du formulaire : encadré "Préférez-vous nous appeler directement ?" avec <BoutonAppel variante="inline" />

ÉTAPE 3 — Email template

Le HTML email doit être minimal et lisible :
- Header : "🔔 Nouveau devis Plombier Déboucheur 83"
- Tableau avec : Nom, Téléphone (cliquable tel:), Email (cliquable mailto:), Adresse, Ville, Service demandé, Message, Date/heure
- Footer : "Connectez-vous au back-office pour traiter ce lead" (URL à définir plus tard)

ÉTAPE 4 — Tests

Lance npm run dev :
- Va sur /depannage/toulon/devis
- Remplis le formulaire avec des données bidon
- Vérifie l'arrivée du lead dans Supabase (table LeadDevis)
- Vérifie la réception de l'email (à condition que RESEND_API_KEY et EMAIL_NOTIFICATION_LEAD soient remplis dans .env.local)

Commit "feat(devis): page devis + server action + notification email".
```

**Validation S5**
- [ ] Formulaire s'affiche correctement sur `/depannage/toulon/devis`
- [ ] Lead créé en DB après soumission
- [ ] Email reçu sur l'adresse de notification
- [ ] Validation téléphone refuse un mauvais format

---

## SPRINT 6 — Réalisations (galerie + fiches + slider avant/après)

**Objectif** : preuve sociale et E-E-A-T. 30 réalisations seedées (3 par ville).

### Prompt Claude Code S6

```
Implémente le module Réalisations pour plombierdeboucheur83.fr.

OBJECTIF :
- Seed de 30 réalisations (3 par ville × 10 villes), réparties équitablement entre les 4 services
- Page /depannage/[ville]/realisations : galerie des réalisations de la ville
- Page /depannage/[ville]/realisations/[slug] : fiche détaillée avec slider avant/après
- Bloc "Nos dernières réalisations" sur /depannage/[ville] (3 dernières)

DONNÉES :
- Photos placeholder pour le seed : utilise des URLs de https://images.unsplash.com avec mots-clés "plumbing", "pipe", "drain" (ou un placeholder gris si tu préfères) — je remplacerai par des photos réelles plus tard
- Avis client : prénoms français variés, 4 ou 5 étoiles, 1-2 phrases courtes
- Dates : étalées sur les 6 derniers mois

ÉTAPE 1 — Étendre le seed

Modifie prisma/seed.ts pour ajouter 30 réalisations.

Pour chaque ville et chaque service, génère des données réalistes :
- titre type : "Débouchage canalisation principale Toulon centre"
- contexte (50-100 mots) : situation initiale
- solution (50-100 mots) : intervention réalisée
- resultat (30-60 mots) : retour à la normale
- description : résumé 30 mots pour la galerie
- 2-3 URL photo avant, 2-3 URL photo après (placeholders unsplash)
- dateRealisation : random sur 6 derniers mois
- dureeIntervention : 60-240 minutes
- noteClient : 4 ou 5
- avisClient : citation courte du client
- prenomClient : prénom français + initiale nom
- publie : true

Slugs au format : {service-slug}-{ville-slug}-{numéro}, ex: debouchage-toulon-1

Relance : npx prisma db seed (idempotent grâce aux upsert).

ÉTAPE 2 — Helpers

Crée lib/realisations.ts :
- getRealisationsParVille(villeSlug, limit?) : retourne les réalisations d'une ville (publié=true), ordonnées par date desc
- getRealisationBySlug(slug) : avec ville et service inclus
- getDerniesresRealisations(villeSlug, n=3)

ÉTAPE 3 — Composants

Crée components/realisations/RealisationCarte.tsx :
- Server Component
- Props : realisation (avec ville et service)
- Affiche : 1ère photo apres en cover (aspect-video), titre, description, date formatée fr, badge service couleur
- Lien vers la fiche
- Hover : zoom léger sur l'image

Crée components/realisations/RealisationGalerie.tsx :
- Server Component
- Props : realisations[]
- Grille 1 col mobile, 2 col tablet, 3 col desktop
- Si vide : message "Réalisations à venir"

Crée components/realisations/RealisationAvantApres.tsx :
- Client Component
- Props : photoAvant (URL), photoApres (URL)
- Slider draggable curseur vertical pour comparer (implémentation simple : input range type=range, transform sur l'image avant avec clip-path)
- Labels "AVANT" et "APRÈS" sur chaque photo

Crée components/realisations/RealisationFiche.tsx :
- Server Component
- Props : realisation (avec ville et service)
- Layout :
  - Hero : <RealisationAvantApres /> avec 1ère paire avant/après
  - Si plusieurs paires, slider de paires en dessous
  - Métadonnées : ville (lien), service (lien), date, durée intervention, note ⭐
  - 3 sections texte : Contexte, Solution, Résultat
  - Encadré avis client : citation + prénom + ⭐
  - CTA : "Vous avez un problème similaire à {ville.nom} ?" + <BoutonAppel variante="inline" /> + lien borne ville

ÉTAPE 4 — Pages

Crée app/depannage/[ville]/realisations/page.tsx :
- Récupère ville et realisations
- Affiche <BorneHeader ville={ville} />
- Titre "Nos dernières réalisations à {ville.nom}"
- <RealisationGalerie />
- En bas, CTA retour borne : <Borne ville={ville} />

Crée app/depannage/[ville]/realisations/[slug]/page.tsx :
- Récupère via getRealisationBySlug
- generateStaticParams : toutes les réalisations publiées
- generateMetadata : title et description optimisés
- Affiche <RealisationFiche />

ÉTAPE 5 — Bloc "Dernières réalisations" sur page ville

Modifie app/depannage/[ville]/page.tsx :
- Remplace le placeholder "Section en construction" par :
  - Titre "Nos dernières interventions à {ville.nom}"
  - <RealisationGalerie> avec les 3 dernières
  - Bouton "Voir toutes nos réalisations" → /depannage/[ville]/realisations

Lance npm run dev. Vérifie quelques fiches.

Commit "feat(realisations): galerie + fiches + slider avant/après + 30 réalisations seedées".
```

**Validation S6**
- [ ] 30 réalisations en DB (3 par ville)
- [ ] `/depannage/toulon` affiche les 3 dernières
- [ ] `/depannage/toulon/realisations` affiche toutes les réalisations Toulon
- [ ] Une fiche s'affiche correctement avec slider avant/après fonctionnel
- [ ] Lighthouse mobile ≥ 90

---

## SPRINT 7 — SEO complet (JSON-LD, sitemap, métadonnées, opengraph)

**Objectif** : 100 % des pages indexables, JSON-LD valide, sitemap dynamique, opengraph dynamique.

### Prompt Claude Code S7

```
Implémente l'ensemble du SEO pour plombierdeboucheur83.fr.

OBJECTIF :
- JSON-LD complet sur chaque type de page
- Sitemap.xml dynamique
- Robots.txt + llms.txt
- OpenGraph image dynamique par page ville/service
- Métadonnées dynamiques sur toutes les pages

ÉTAPE 1 — Helpers SEO

Crée lib/seo.ts avec des fonctions de génération JSON-LD :
- buildLocalBusinessJsonLd({ ville?, parametres }) : LocalBusiness avec NAP, areaServed (toutes les villes ou la ville), priceRange, openingHours
- buildServiceJsonLd({ service, ville, tarif }) : Service avec offers, areaServed
- buildFAQPageJsonLd({ questions }) : FAQPage à partir des questions wizard reformulées en Q/R utilisateur
- buildBreadcrumbJsonLd({ items }) : BreadcrumbList
- buildArticleJsonLd({ realisation }) : Article + ImageObject + Review (si avis)
- buildAggregateRatingJsonLd({ realisations }) : AggregateRating moyen sur réalisations notées

Toutes ces fonctions retournent un objet JS prêt à être injecté en JSON.

ÉTAPE 2 — Composant injection

Crée components/seo/JsonLd.tsx :
- Props : data (object)
- Retourne <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />

ÉTAPE 3 — Injection page par page

Sur chaque page, injecte les JSON-LD via <JsonLd>.

app/page.tsx :
- LocalBusiness global + Organization

app/depannage/page.tsx :
- LocalBusiness + BreadcrumbList

app/depannage/[ville]/page.tsx :
- LocalBusiness localisé + 4 Service + BreadcrumbList + AggregateRating si réalisations notées

app/depannage/[ville]/[service]/page.tsx :
- Service + FAQPage (questions wizard) + BreadcrumbList

app/depannage/[ville]/realisations/page.tsx :
- BreadcrumbList + AggregateRating

app/depannage/[ville]/realisations/[slug]/page.tsx :
- Article + ImageObject + Review + BreadcrumbList

ÉTAPE 4 — Sitemap dynamique

Crée app/sitemap.ts :
- Retourne MetadataRoute.Sitemap incluant :
  - / (priority 1)
  - /depannage (priority 0.9)
  - /depannage/[ville] pour les 10 villes (priority 0.9)
  - /depannage/[ville]/[service] pour 40 combinaisons (priority 0.8)
  - /depannage/[ville]/realisations pour 10 (priority 0.7)
  - /depannage/[ville]/realisations/[slug] pour 30 (priority 0.6)
  - /mentions-legales, /cgv, /politique-confidentialite (priority 0.3)

Crée app/robots.ts :
- userAgent: "*", allow: "/", disallow: "/api"
- sitemap: "https://plombierdeboucheur83.fr/sitemap.xml"

ÉTAPE 5 — llms.txt

Crée public/llms.txt avec :
- Pitch entreprise
- Liste des URL principales
- Tarifs indicatifs depuis le seed (à régénérer manuellement si change)
- Mention "Pour plus d'infos : https://plombierdeboucheur83.fr"

ÉTAPE 6 — OpenGraph image dynamique

Crée app/depannage/[ville]/[service]/opengraph-image.tsx :
- Utilise next/og ImageResponse
- Génère une image 1200x630 :
  - Fond couleur du service
  - Gros titre "{Service}" + "{Ville}"
  - Tarif "À partir de {prix} €" si possible
  - Logo bas
  - Téléphone bas droit
- Lit les données via Prisma

Crée app/depannage/[ville]/opengraph-image.tsx :
- Image 1200x630 :
  - Fond gradient bleu
  - "Dépannage à {Ville}"
  - 4 icônes services en bas
  - Téléphone

Crée app/opengraph-image.tsx :
- Image générique du site

ÉTAPE 7 — Métadonnées dynamiques

Vérifie que toutes les pages ont generateMetadata avec :
- title : structuré "[Action] [ville/service] — Plombier Déboucheur 83"
- description : 150-160 caractères, contient ville + service + appel à l'action
- alternates.canonical : URL absolue
- openGraph : title, description, url, images, type
- twitter : card summary_large_image

ÉTAPE 8 — Tests

Lance npm run build puis npm run start.
Va sur https://search.google.com/test/rich-results et teste 3 URL pour vérifier la validité du JSON-LD.

Commit "feat(seo): JSON-LD complet + sitemap + opengraph + llms.txt".
```

**Validation S7**
- [ ] `/sitemap.xml` retourne ~95 URLs (1 + 1 + 10 + 40 + 10 + 30 + 3)
- [ ] `/robots.txt` valide
- [ ] Rich Results Test Google passe sur 3 URL différentes (home, ville, fiche réalisation)
- [ ] OpenGraph image générée pour `/depannage/toulon/debouchage` (vérifier dans `<head>`)
- [ ] Lighthouse SEO ≥ 95

---

## SPRINT 8 — Polish (légal, tracking, optimisations finales)

**Objectif** : site prêt pour la mise en ligne publique.

### Prompt Claude Code S8

```
Finalise plombierdeboucheur83.fr pour la mise en ligne.

OBJECTIF :
- Pages légales complètes
- Bandeau cookies RGPD minimal
- Optimisations performance
- Page 404 et 500 propres
- Sitemap soumis

ÉTAPE 1 — Pages légales

Crée app/mentions-legales/page.tsx, app/cgv/page.tsx, app/politique-confidentialite/page.tsx avec contenu standard adapté à un site de service local en France :
- Mentions légales : éditeur (lit Parametre.NOM_ENTREPRISE, SIRET, ADRESSE_SIEGE), hébergeur (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723), directeur publication, contact
- CGV : conditions d'intervention, paiement à l'intervention, délais, garanties, droit de rétractation (article L221-28 — exclu pour urgence)
- Politique confidentialité : RGPD, données collectées (formulaires devis, tracking appel), durée conservation, droits utilisateur, contact DPO

Mets des liens vers ces 3 pages dans le footer.

ÉTAPE 2 — Bandeau cookies (minimal RGPD)

Crée components/shared/BandeauCookies.tsx (Client) :
- S'affiche en bas si pas encore choisi (localStorage : "cookies-accepted")
- Texte court : "Nous utilisons des cookies analytiques pour améliorer le site"
- 2 boutons : "Accepter" / "Refuser"
- Si refusé : ne charge aucun script analytics
- Stocke le choix en localStorage

Note : pas de Google Analytics dans ce sprint, juste la mécanique du bandeau.

ÉTAPE 3 — Pages d'erreur

Crée app/not-found.tsx :
- Header simple
- "Page introuvable"
- Bouton retour à /
- Sélecteur villes en dessous

Crée app/error.tsx (Client) :
- "Une erreur est survenue"
- Bouton "Réessayer" (reset)
- Bouton retour à /

ÉTAPE 4 — Footer global

Crée components/shared/Footer.tsx (Server Component) :
- 4 colonnes desktop, empilées mobile :
  - Colonne 1 : logo + tagline + numéro tel
  - Colonne 2 : Services (4 liens)
  - Colonne 3 : Villes (10 liens)
  - Colonne 4 : Légal (3 liens)
- Bandeau bas : SIRET + copyright

Importe ce Footer dans app/layout.tsx pour qu'il soit présent partout.

ÉTAPE 5 — Optimisations perf

- Vérifie que toutes les images Realisation utilisent next/image
- Ajoute loading="lazy" sur les images sous le fold
- Configure next.config.js images.remotePatterns pour autoriser unsplash.com (et plus tard ton bucket Supabase Storage)
- Ajoute revalidate = 3600 sur les pages statiques (ISR)

ÉTAPE 6 — Tracking visites (basique)

Sans GA pour le moment : crée un endpoint app/api/page-view/route.ts qui log juste un événement en console (placeholder pour GA plus tard).

ÉTAPE 7 — Build final + check Lighthouse

Lance :
npm run build
npm run start

Puis sur Lighthouse, vérifie pour /, /depannage/toulon, /depannage/toulon/debouchage, /depannage/toulon/realisations :
- Performance ≥ 95 mobile
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

Si un score est en dessous, corrige immédiatement (images mal taillées, fonts non préchargées, etc.).

ÉTAPE 8 — README

Crée un README.md à la racine avec :
- Pitch projet
- Stack
- Variables d'env requises
- Commandes utiles (dev, build, seed, prisma studio)
- Lien Vercel
- Lien Supabase

Commit "chore: polish final, légal, footer, optimisations Lighthouse".

Ouvre une PR vers main (ou merge direct si seul contributeur) et déploie sur Vercel.
```

**Validation S8**
- [ ] Build sans erreur
- [ ] Tous les Lighthouse ≥ 95
- [ ] Pages légales accessibles depuis le footer
- [ ] Bandeau cookies fonctionne
- [ ] Site déployé sur Vercel à l'URL plombierdeboucheur83.fr

---

## Post-déploiement (toi, manuel)

- [ ] Soumettre `https://plombierdeboucheur83.fr/sitemap.xml` à Google Search Console
- [ ] Vérifier la propriété du domaine via DNS
- [ ] Soumettre à Bing Webmaster Tools
- [ ] Créer la fiche Google Business Profile (à l'adresse réelle, dès que SIRET et ADRESSE sont définis)
- [ ] Mettre à jour `Parametre.TEL_PRINCIPAL` avec le vrai numéro avant ouverture publique
- [ ] Mettre à jour `Parametre.SIRET`, `ADRESSE_SIEGE`, `ASSURANCE_RC_PRO`
- [ ] Remplacer les photos placeholder unsplash par des photos réelles (Supabase Storage)

---

## Itération future (post-MVP)

- Back-office `/admin` pour gérer leads, réalisations, paramètres, tarifs sans toucher au code
- Module "Avis Google" : import automatique des avis GBP via API
- Multi-tarifs par tranche horaire (jour / nuit / weekend)
- Rappel SMS automatique 1h avant intervention (Twilio)
- Calendrier de réservation en ligne (créneaux ouverts par technicien)
- Multi-techniciens / dispatch
- Extension à d'autres départements (06, 13)

---

*Fin du plan d'exécution v1.0 — Plombier Déboucheur 83*
