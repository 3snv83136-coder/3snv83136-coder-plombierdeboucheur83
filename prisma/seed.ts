import { PrismaClient } from '@prisma/client';
import {
  PARAMETRES,
  VILLES,
  SERVICES,
  REALISATIONS,
} from '../lib/data/mock';

const db = new PrismaClient();

async function main() {
  console.log('▶ Seed paramètres...');
  for (const [cle, valeur] of Object.entries(PARAMETRES)) {
    await db.parametre.upsert({
      where: { cle },
      update: { valeur },
      create: { cle, valeur },
    });
  }

  console.log(`▶ Seed villes (${VILLES.length})...`);
  const villesById = new Map<string, string>();
  for (const v of VILLES) {
    const r = await db.ville.upsert({
      where: { slug: v.slug },
      update: {
        nom: v.nom,
        codePostal: v.codePostal,
        population: v.population,
        latitude: v.latitude,
        longitude: v.longitude,
        description: v.description,
        facteurTarif: v.facteurTarif,
        ordre: v.ordre,
      },
      create: {
        slug: v.slug,
        nom: v.nom,
        codePostal: v.codePostal,
        population: v.population,
        latitude: v.latitude,
        longitude: v.longitude,
        description: v.description,
        facteurTarif: v.facteurTarif,
        ordre: v.ordre,
      },
    });
    villesById.set(v.slug, r.id);
  }

  console.log(
    `▶ Seed services + tarifs + questions + réponses (${SERVICES.length})...`
  );
  const servicesById = new Map<string, string>();
  for (const s of SERVICES) {
    const service = await db.service.upsert({
      where: { slug: s.slug },
      update: {
        nom: s.nom,
        slogan: s.slogan,
        icone: s.icone,
        couleur: s.couleur,
        description: s.description,
        ordre: s.ordre,
      },
      create: {
        slug: s.slug,
        nom: s.nom,
        slogan: s.slogan,
        icone: s.icone,
        couleur: s.couleur,
        description: s.description,
        ordre: s.ordre,
      },
    });
    servicesById.set(s.slug, service.id);

    await db.tarif.upsert({
      where: { serviceId: service.id },
      update: { prixMin: s.prixMin, prixMax: s.prixMax },
      create: { serviceId: service.id, prixMin: s.prixMin, prixMax: s.prixMax },
    });

    for (const q of s.questions) {
      const question = await db.question.upsert({
        where: { serviceId_ordre: { serviceId: service.id, ordre: q.ordre } },
        update: { libelle: q.libelle },
        create: { serviceId: service.id, ordre: q.ordre, libelle: q.libelle },
      });
      for (const r of q.reponses) {
        await db.reponse.upsert({
          where: {
            questionId_ordre: { questionId: question.id, ordre: r.ordre },
          },
          update: {
            libelle: r.libelle,
            icone: r.icone,
            facteurTarif: r.facteurTarif,
            forceDevis: r.forceDevis,
          },
          create: {
            questionId: question.id,
            libelle: r.libelle,
            icone: r.icone,
            facteurTarif: r.facteurTarif,
            forceDevis: r.forceDevis,
            ordre: r.ordre,
          },
        });
      }
    }
  }

  console.log('▶ Seed réalisations (30)...');
  for (const r of REALISATIONS) {
    const villeId = villesById.get(r.villeSlug);
    const serviceId = servicesById.get(r.serviceSlug);
    if (!villeId || !serviceId) continue;
    await db.realisation.upsert({
      where: { slug: r.slug },
      update: {
        titre: r.titre,
        description: r.description,
        contexte: r.contexte,
        solution: r.solution,
        resultat: r.resultat,
        photoAvant: r.photoAvant,
        photoApres: r.photoApres,
        dateRealisation: new Date(r.dateRealisation),
        dureeIntervention: r.dureeIntervention,
        noteClient: r.noteClient,
        avisClient: r.avisClient,
        prenomClient: r.prenomClient,
        publie: r.publie,
      },
      create: {
        slug: r.slug,
        villeId,
        serviceId,
        titre: r.titre,
        description: r.description,
        contexte: r.contexte,
        solution: r.solution,
        resultat: r.resultat,
        photoAvant: r.photoAvant,
        photoApres: r.photoApres,
        dateRealisation: new Date(r.dateRealisation),
        dureeIntervention: r.dureeIntervention,
        noteClient: r.noteClient,
        avisClient: r.avisClient,
        prenomClient: r.prenomClient,
        publie: r.publie,
      },
    });
  }

  console.log('✓ Seed terminé.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
