// ============================================================
// CONTENU SEO PAR SERVICE × VILLE — 10 villes du Rhône (69)
// ============================================================
// Chaque combinaison ville+service a un bloc de contenu unique
// d'environ 300 mots, rédigé manuellement pour éviter le thin
// content et les pénalités "scaled content abuse".
// ============================================================

import type { ContenuServiceVille } from './types';

export const CONTENU_SERVICE_VILLE_SEO: Record<
  string,
  Record<string, ContenuServiceVille>
> = {
  // ==========================================================
  // LYON
  // ==========================================================
  lyon: {
    debouchage: {
      intro:
        "À Lyon, le débouchage de canalisation est une intervention fréquente dans les immeubles haussmanniens de la Presqu'île comme dans les résidences modernes de la Confluence. Nos équipes interviennent 24h/7j sur l'ensemble des arrondissements, du 1ᵉʳ au 9ᵉ, pour traiter évier bouché, WC engorgé ou colonne d'évacuation obstruée. La diversité du bâti lyonnais — traboules du Vieux-Lyon, pentes de la Croix-Rousse, tours de la Part-Dieu — nous confronte à tous les types de réseaux, du tout-à-l'égout centenaire aux installations PVC récentes.",
      details:
        "Les immeubles anciens des 1ᵉʳ, 2ᵉ et 5ᵉ arrondissements présentent souvent des colonnes en fonte grise sujettes à la corrosion et aux dépôts calcaires. Dans la Presqu'île, les restaurants et commerces génèrent des bouchons de graisse qui nécessitent un hydrocurage haute pression. À la Croix-Rousse, la configuration en pente complique l'évacuation naturelle : les refoulements en partie basse sont fréquents. Nos camions hydrocureurs 11 m³ interviennent avec furet électrique, caméra de diagnostic et pompe haute pression pour un débouchage complet, y compris en sous-sol et cave voûtée.",
      tarifs:
        "La transparence tarifaire est au cœur de notre engagement à Lyon. Le prix de votre débouchage dépend de l'élément concerné, de l'ancienneté du bouchon et de l'accessibilité du réseau, mais il vous est annoncé avant toute intervention grâce à notre borne de devis en ligne. Pas de frais de déplacement cachés, pas de surfacturation nuit ou week-end dans la métropole de Lyon. Un devis écrit vous est remis systématiquement.",
      conclusion:
        "Canalisation bouchée à Lyon ? Lancez notre borne de dépannage en 4 clics, obtenez un tarif immédiat et déclenchez une intervention sous 1 heure, 24h/7j, dans tout Lyon.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Lyon est un diagnostic incontournable avant l'achat d'un bien ancien ou pour identifier l'origine de refoulements récurrents. Nos techniciens passent une caméra endoscopique haute définition dans vos canalisations pour établir un état des lieux précis du réseau d'évacuation, avec mesure de pente et repérage des piquages. Du Vieux-Lyon à Gerland, en passant par les pentes de la Croix-Rousse, nous inspectons des réseaux de toutes configurations.",
      details:
        "Les copropriétés lyonnaises font de plus en plus appel à l'inspection caméra dans le cadre de diagnostics obligatoires ou de projets de rénovation. Nos caméras motorisées parcourent les collecteurs jusqu'à 40 mètres, détectant fissures, racines, contre-pentes et emboîtements défectueux. Le rapport vidéo horodaté avec localisation des anomalies est un document opposable, utile pour les négociations immobilières, les dossiers de sinistre ou les devis de réparation. Nous intervenons également sur les réseaux d'eaux pluviales, souvent négligés dans les immeubles de la Presqu'île.",
      tarifs:
        "À Lyon, le tarif de l'inspection caméra est forfaitaire et annoncé avant déplacement. Il inclut le passage caméra, le rapport vidéo et les préconisations écrites. Aucun supplément pour les interventions en soirée ou le week-end dans la métropole. Notre devis est gratuit, transparent et sans engagement.",
      conclusion:
        "Besoin d'un diagnostic canalisation à Lyon ? Obtenez votre tarif d'inspection caméra en 4 clics sur notre borne. Rapport vidéo remis le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Lyon concerne principalement les zones pavillonnaires de l'Est lyonnais, les secteurs de Montchat et les communes limitrophes non raccordées au tout-à-l'égout. Nous assurons la vidange, le nettoyage et l'entretien de tous types d'installations d'assainissement non collectif : fosse toutes eaux, micro-station d'épuration, bac à graisses pour restaurants et filtres compacts.",
      details:
        "Les fosses septiques de l'agglomération lyonnaise sont soumises aux contrôles périodiques du SPANC (Service Public d'Assainissement Non Collectif). Une vidange régulière, généralement tous les 4 ans, est obligatoire. Nos camions hydrocureurs 11 m³ pompent la totalité des boues et effectuent un nettoyage haute pression du préfiltre. Nous remettons systématiquement le bordereau de suivi des déchets réglementaire. Pour les restaurants des 1ᵉʳ et 2ᵉ arrondissements, nous proposons des contrats d'entretien de bac à graisses avec planning préventif.",
      tarifs:
        "Le coût de la vidange dépend du volume de la fosse et de son accessibilité. Nous vous communiquons un tarif fixe avant intervention, basé sur les caractéristiques de votre installation. Pas de supplément pour les interventions en urgence sur Lyon et sa métropole. Bordereau réglementaire inclus.",
      conclusion:
        "Fosse septique à vidanger dans le Rhône ? Utilisez notre borne en ligne pour connaître le tarif immédiatement. Intervention sous 24h à Lyon et dans toute la métropole.",
    },
    'pompe-relevage': {
      intro:
        "La pompe de relevage est un équipement critique dans de nombreux sous-sols lyonnais, particulièrement dans les immeubles de la Presqu'île et de la Confluence où le niveau de la nappe phréatique est élevé. Nos techniciens interviennent pour le diagnostic, le remplacement et l'installation de pompes de relevage eaux usées et eaux claires, 24h/7j, avec un stock de pièces détachées embarqué pour une résolution en un seul passage.",
      details:
        "Les configurations sont variées à Lyon : pompes simples en sous-sol de copropriété dans le 6ᵉ, stations doubles dans les parkings souterrains de la Part-Dieu, pompes de relevage pour création de salle de bains en cave dans les immeubles anciens. Nous diagnostiquons la panne (disjonction, flotteur bloqué, moteur grillé, clapet anti-retour défaillant) et proposons la solution adaptée. Nos pompes sont dimensionnées pour le débit nécessaire et garanties pièces et main-d'œuvre 1 an.",
      tarifs:
        "Le tarif d'intervention sur pompe de relevage à Lyon inclut le diagnostic complet. Si un remplacement est nécessaire, le prix de la pompe et de la main-d'œuvre vous est communiqué avant travaux, avec un devis écrit. Pas de frais de déplacement dans la métropole de Lyon, même en urgence de nuit.",
      conclusion:
        "Pompe de relevage en panne à Lyon ? Lancez notre borne, obtenez un tarif en 4 clics et faites intervenir un technicien sous 1 heure, 24h/7j.",
    },
  },

  // ==========================================================
  // VILLEURBANNE
  // ==========================================================
  villeurbanne: {
    debouchage: {
      intro:
        "À Villeurbanne, deuxième ville du Rhône, le débouchage de canalisation concerne aussi bien les colonnes communes des barres Gratte-Ciel que les évacuations des résidences neuves de Carré de Soie. Nos équipes maîtrisent les spécificités de chaque quartier : copropriétés denses du Tonkin, immeubles années 30 des Gratte-Ciel, maisons individuelles vers Cusset et Charpennes. Intervention 24h/7j dans tout le 69100.",
      details:
        "Les immeubles des Gratte-Ciel, construits dans les années 1930, ont des colonnes d'évacuation en fonte partiellement rénovées qui peuvent présenter des fuites ou des obstructions par accumulation. Dans les copropriétés du Tonkin, la densité d'occupation génère un usage intensif des réseaux, avec des bouchons de lingettes et graisses fréquents. Les résidences neuves de Carré de Soie présentent peu de pathologies structurelles mais peuvent subir des obstructions ponctuelles (jouets, lingettes). Notre camion hydrocureur 11 m³ est équipé pour tous les diamètres, du 32 mm au 200 mm.",
      tarifs:
        "Nous pratiquons la transparence tarifaire absolue à Villeurbanne : le prix de votre débouchage est calculé en fonction de l'élément bouché, de l'ancienneté et de l'accessibilité, et affiché dans notre borne avant toute intervention. Devis gratuit, sans engagement, valable 30 jours. Pas de surprime pour les interventions de nuit ou le week-end.",
      conclusion:
        "Canalisation bouchée à Villeurbanne ? Faites le test en 4 clics sur notre borne, obtenez votre tarif et déclenchez l'intervention. Équipe locale, intervention sous 45 minutes.",
    },
    'inspection-camera': {
      intro:
        "Le diagnostic caméra à Villeurbanne est de plus en plus demandé par les copropriétés et les acquéreurs, notamment dans les secteurs anciens comme les Gratte-Ciel ou le Tonkin. Nous inspectons vos canalisations avec une caméra HD motorisée pour établir un état des lieux complet : fissures, racines, emboîtements défectueux, contre-pentes. Rapport vidéo remis sur clé USB ou par email.",
      details:
        "À Villeurbanne, l'inspection caméra est souvent prescrite avant des travaux de rénovation dans les immeubles Gratte-Ciel classés, ou pour des diagnostics de copropriété dans les ensembles du Tonkin. Notre matériel permet de franchir les coudes à 90° et d'inspecter sur 40 mètres. Nous détectons également les fuites sur réseaux enterrés grâce à un traceur intégré. Les rapports sont recevables par les syndics et les assurances. Nous intervenons aussi sur les réseaux d'eaux pluviales des résidences récentes de Carré de Soie.",
      tarifs:
        "Inspection caméra à Villeurbanne au tarif forfaitaire annoncé avant déplacement. Le prix inclut le passage, le rapport et les préconisations. Aucun frais caché, aucun supplément soirée ou week-end. Devis gratuit sur simple demande.",
      conclusion:
        "Besoin d'une inspection caméra à Villeurbanne ? Obtenez votre tarif en 4 clics, diagnostic complet avec rapport vidéo le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Villeurbanne concerne essentiellement les zones pavillonnaires de Cusset, les secteurs de la rue Léon-Blum et les rares propriétés non raccordées au tout-à-l'égout. Nous assurons la vidange complète, le nettoyage du préfiltre et la vérification du bon fonctionnement de votre installation, dans le respect de la réglementation du SPANC de la Métropole de Lyon.",
      details:
        "Même en zone urbaine dense, certaines maisons villeurbannaises disposent encore d'un assainissement autonome. Nous vidangeons tous types de fosses (toutes eaux, micro-stations, filtres compacts) avec notre camion hydrocureur 11 m³. Le nettoyage haute pression du préfiltre est systématique. Nous vérifions le niveau des boues, l'état de la ventilation et le bon écoulement. Un bordereau de suivi des déchets vous est remis, indispensable pour le contrôle périodique du SPANC.",
      tarifs:
        "Le tarif de vidange à Villeurbanne est fixé selon le volume de votre fosse et son accessibilité. Annoncé avant intervention, il inclut le pompage, le nettoyage du préfiltre, le contrôle visuel et le bordereau réglementaire. Pas de frais supplémentaires pour intervention rapide.",
      conclusion:
        "Fosse septique à vidanger à Villeurbanne ? Utilisez notre borne pour un tarif immédiat. Intervention en 24h sur tout le 69100 et les communes limitrophes.",
    },
    'pompe-relevage': {
      intro:
        "À Villeurbanne, les pompes de relevage équipent de nombreux sous-sols d'immeubles, parkings enterrés et commerces. Nos techniciens interviennent pour diagnostic, dépannage et remplacement sur tous les quartiers : Gratte-Ciel, Tonkin, Charpennes, Carré de Soie. En cas de panne, une pompe de relevage qui ne fonctionne plus peut entraîner une inondation rapide du sous-sol : nous intervenons sous 1 heure.",
      details:
        "Les Gratte-Ciel et les immeubles du Tonkin ont souvent des pompes installées il y a 15 à 20 ans, qui arrivent en fin de vie. Nous diagnostiquons la panne (disjonction, flotteur bloqué, moteur HS, clapet grippé) et remplaçons la pompe si nécessaire avec un modèle dimensionné pour le débit. Dans les résidences neuves de Carré de Soie, nous intervenons plutôt sur des défauts de pose ou de réglage. Nos pompes sont garanties 1 an pièces et main-d'œuvre.",
      tarifs:
        "Intervention pompe de relevage à Villeurbanne : diagnostic inclus dans le déplacement. Devis de remplacement remis avant travaux, avec prix de la pompe et main-d'œuvre détaillés. Pas de surprime urgence, nuit ou week-end dans tout le 69100.",
      conclusion:
        "Pompe de relevage en panne à Villeurbanne ? 4 clics sur notre borne pour obtenir un tarif. Intervention sous 1 heure, 24h/7j.",
    },
  },

  // ==========================================================
  // VÉNISSIEUX
  // ==========================================================
  venissieux: {
    debouchage: {
      intro:
        "Le débouchage de canalisation à Vénissieux couvre un territoire varié : grands ensembles des Minguettes, zones pavillonnaires, et zones d'activité de Parilly. Nos techniciens connaissent les spécificités de chaque secteur. Les réseaux d'évacuation des Minguettes, construits dans les années 1960-70, nécessitent un entretien régulier. Nous intervenons 24h/7j dans tout le 69200.",
      details:
        "Aux Minguettes, les colonnes d'évacuation en fonte desservent de nombreux logements : un bouchon dans une colonne peut affecter plusieurs étages. Nous utilisons l'hydrocureur haute pression pour désobstruer sans endommager la fonte ancienne. Dans les zones pavillonnaires, les problèmes sont souvent liés aux racines d'arbres dans les canalisations enterrées. La zone d'activité Parilly concentre restaurants et commerces : bacs à graisses et canalisations de grand diamètre font partie de notre quotidien à Vénissieux.",
      tarifs:
        "Transparence totale à Vénissieux : le prix de votre débouchage dépend de l'élément concerné, de l'ancienneté du problème et de la complexité d'accès. Annoncé avant intervention via notre borne, il est ferme et définitif. Pas de frais cachés, pas de surfacturation week-end ou jours fériés.",
      conclusion:
        "Canalisation bouchée à Vénissieux ? Calculez votre tarif en 4 clics et déclenchez l'intervention. Équipe locale, sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "À Vénissieux, l'inspection caméra est un outil précieux pour les copropriétés des Minguettes comme pour les propriétaires de pavillons. Elle permet de cartographier le réseau, d'identifier les points de faiblesse avant travaux et de prévenir les sinistres. Nos caméras HD parcourent vos canalisations avec un reportage vidéo complet et des préconisations chiffrées.",
      details:
        "Les copropriétés des Minguettes font régulièrement appel à nous pour des inspections caméra préventives, notamment avant des campagnes de rénovation. Les colonnes en fonte des années 60 peuvent présenter des fissures ou des déboîtements que seule la caméra peut détecter. Dans les zones pavillonnaires, nous inspectons les réseaux enterrés pour identifier les intrusions racinaires ou les contre-pentes. Le rapport vidéo avec localisation est utilisable pour les dossiers de subvention ou de sinistre.",
      tarifs:
        "Forfait inspection caméra à Vénissieux incluant le passage, le rapport et les préconisations. Annoncé avant déplacement, sans surprise. Interventions possibles en soirée et week-end sans supplément.",
      conclusion:
        "Besoin d'une inspection caméra à Vénissieux ? 4 clics sur la borne pour votre tarif. Rapport vidéo remis le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Vénissieux concerne les secteurs pavillonnaires et les zones non raccordées de la commune. Nous intervenons avec notre camion hydrocureur pour pomper, nettoyer et contrôler votre installation d'assainissement non collectif, en conformité avec les exigences du SPANC. Intervention sous 24h.",
      details:
        "Les maisons individuelles de Vénissieux, notamment autour du centre-ville et vers Saint-Fons, sont parfois équipées de fosses septiques anciennes qui nécessitent un entretien rigoureux. Nous vidangeons la totalité des boues, nettoyons le préfiltre à haute pression et contrôlons le niveau de remplissage. Pour les restaurants des zones d'activité, nous assurons la vidange des bacs à graisses avec planning préventif. Le bordereau de suivi des déchets est systématiquement fourni.",
      tarifs:
        "Vidange fosse septique à Vénissieux au tarif calculé selon le volume et l'accessibilité. Annoncé avant intervention, il inclut le pompage, le nettoyage du préfiltre, le contrôle et le bordereau. Pas de supplément urgence.",
      conclusion:
        "Fosse à vidanger à Vénissieux ? Borne en ligne pour un tarif immédiat. Intervention en 24h.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage à Vénissieux équipent principalement les sous-sols des copropriétés et les parkings souterrains des zones d'activité. Une panne peut rapidement engendrer des dégâts importants. Nos techniciens interviennent sous 1 heure pour diagnostic et remplacement, avec un stock de pièces embarqué.",
      details:
        "Dans les ensembles des Minguettes, les pompes de relevage sont souvent mutualisées pour plusieurs entrées. Une défaillance affecte rapidement les parties communes. Nous diagnostiquons la panne sur place et proposons un remplacement immédiat avec un modèle aux dimensions adaptées. Les parkings de la zone Parilly sont également équipés de pompes pour l'évacuation des eaux pluviales : nous assurons leur maintenance préventive. Garantie 1 an sur toutes nos interventions.",
      tarifs:
        "Diagnostic pompe de relevage à Vénissieux inclus dans le déplacement. Devis de remplacement avant travaux, prix ferme. Pas de surprime nuit, week-end ou jour férié.",
      conclusion:
        "Pompe de relevage HS à Vénissieux ? 4 clics pour votre tarif, intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // VAULX-EN-VELIN
  // ==========================================================
  'vaulx-en-velin': {
    debouchage: {
      intro:
        "À Vaulx-en-Velin, nos interventions de débouchage couvrent les grands ensembles du Mas du Taureau, les résidences récentes et les zones pavillonnaires. La diversité du parc immobilier vaudais nous confronte à tous les types d'obstructions, du simple évier bouché à la colonne d'évacuation complètement obstruée. Intervention 24h/7j dans tout le 69120.",
      details:
        "Les immeubles du Mas du Taureau présentent des colonnes en fonte parfois fragilisées par des décennies d'usage intensif. Les bouchons de lingettes et de graisses sont fréquents dans ces réseaux collectifs. Nous utilisons l'hydrocureur haute pression pour un débouchage en profondeur sans risque de détérioration. Dans les résidences récentes du centre-ville et de Carré de Soie, les obstructions sont plus souvent ponctuelles (jouets, résidus de chantier). Notre furet électrique permet un débouchage rapide sur petit diamètre.",
      tarifs:
        "Débouchage à Vaulx-en-Velin au tarif transparent, calculé selon l'élément concerné et l'ancienneté du problème. Annoncé avant intervention, sans surprise. Pas de frais de déplacement, pas de majoration nuit ou week-end dans tout le 69120.",
      conclusion:
        "Canalisation bouchée à Vaulx-en-Velin ? Testez notre borne en 4 clics, tarif immédiat, intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Vaulx-en-Velin permet de diagnostiquer l'état des réseaux d'évacuation des copropriétés comme des maisons individuelles. Nos caméras motorisées HD inspectent vos canalisations avec une précision chirurgicale, localisant fissures, racines et défauts de pente. Rapport vidéo complet remis le jour même.",
      details:
        "À Vaulx-en-Velin, les copropriétés du Mas du Taureau sollicitent régulièrement l'inspection caméra dans le cadre de diagnostics avant rénovation. Les réseaux enterrés des années 1970 peuvent présenter des fissures ou des déformations que seule une inspection visuelle peut confirmer. Nous détectons également les intrusions racinaires dans les secteurs arborés et mesurons les pentes pour valider la conformité des écoulements. Rapport avec géolocalisation des anomalies, recevable par les syndics et assurances.",
      tarifs:
        "Inspection caméra à Vaulx-en-Velin au forfait annoncé avant déplacement. Inclut le passage caméra, le rapport vidéo et les préconisations écrites. Aucun supplément soirée ou week-end.",
      conclusion:
        "Besoin d'un diagnostic canalisation à Vaulx-en-Velin ? 4 clics pour votre tarif, rapport vidéo le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Vaulx-en-Velin concerne principalement les propriétés pavillonnaires et certains secteurs non raccordés de la commune. Nous assurons la vidange complète, le nettoyage et le contrôle de conformité de votre installation, avec le bordereau réglementaire obligatoire pour le SPANC.",
      details:
        "Les pavillons de Vaulx-en-Velin disposent parfois de fosses septiques anciennes qui demandent un suivi régulier. Notre camion hydrocureur 11 m³ pompe l'intégralité des boues et effectue un nettoyage haute pression du préfiltre. Nous contrôlons également l'état de la ventilation et le bon écoulement en sortie de fosse. Pour les micro-stations d'épuration, nous vérifions le fonctionnement du surpresseur et le niveau des boues activées. Bordereau de suivi fourni systématiquement.",
      tarifs:
        "Tarif de vidange à Vaulx-en-Velin établi selon le volume de la fosse et son accessibilité. Annoncé avant intervention, sans surprise. Inclut pompage, nettoyage et bordereau.",
      conclusion:
        "Fosse septique à vidanger à Vaulx-en-Velin ? Borne en ligne pour votre tarif. Intervention rapide dans tout le 69120.",
    },
    'pompe-relevage': {
      intro:
        "À Vaulx-en-Velin, les pompes de relevage équipent de nombreux sous-sols d'immeubles et de maisons individuelles. Une panne peut rapidement entraîner des infiltrations et des dégâts. Nos techniciens interviennent sous 1 heure pour diagnostic, réparation ou remplacement de votre pompe, avec un stock de pièces détachées à bord.",
      details:
        "Les immeubles du Mas du Taureau sont fréquemment équipés de pompes de relevage pour les sous-sols et parkings. Après 15-20 ans de service, ces équipements montrent des signes de fatigue : disjonctions, flotteurs bloqués, moteurs usés. Nous diagnostiquons la panne et proposons un remplacement immédiat avec une pompe dimensionnée pour le débit nécessaire. Dans les maisons individuelles, nous intervenons souvent pour des pompes de cave après de fortes pluies. Garantie 1 an pièces et main-d'œuvre.",
      tarifs:
        "Intervention pompe de relevage à Vaulx-en-Velin : diagnostic inclus. Devis de remplacement avant travaux. Pas de surprime urgence, nuit, week-end, jours fériés.",
      conclusion:
        "Pompe de relevage en panne à Vaulx-en-Velin ? 4 clics, un tarif, intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // SAINT-PRIEST
  // ==========================================================
  'saint-priest': {
    debouchage: {
      intro:
        "Le débouchage de canalisation à Saint-Priest couvre un territoire contrasté : zones pavillonnaires étendues, zones industrielles de Mi-Plaine et de la Porte des Alpes, et résidences récentes. Nos équipes maîtrisent toutes les configurations, du réseau pavillonnaire enterré à la canalisation industrielle de grand diamètre. Intervention 24h/7j dans le 69800.",
      details:
        "Les maisons individuelles de Saint-Priest sont souvent équipées de réseaux enterrés sensibles aux racines et aux tassements de terrain. Nous utilisons l'hydrocureur pour déboucher en profondeur sans endommager les canalisations. Les zones d'activité de Mi-Plaine et Porte des Alpes concentrent restaurants, hôtels et commerces : bouchons de graisse et canalisations de fort diamètre sont nos interventions les plus fréquentes. Les résidences récentes du centre-ville présentent peu de pathologies mais peuvent connaître des obstructions accidentelles.",
      tarifs:
        "Débouchage à Saint-Priest au tarif annoncé avant intervention, calculé selon la nature et l'ancienneté du problème. Pas de frais cachés, pas de majoration soirée ou week-end. Devis gratuit.",
      conclusion:
        "Canalisation bouchée à Saint-Priest ? Lancez notre borne, obtenez votre tarif en 4 clics. Intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Saint-Priest est particulièrement utile pour les propriétaires de pavillons et les gestionnaires de zones d'activité. Nos caméras motorisées inspectent vos canalisations avec une précision centimétrique, localisant les anomalies et produisant un rapport détaillé avec photos et préconisations.",
      details:
        "Les réseaux enterrés des pavillons de Saint-Priest sont régulièrement inspectés avant transaction immobilière. Notre caméra détecte les contre-pentes, les emboîtements défectueux et les intrusions racinaires sur des linéaires allant jusqu'à 40 mètres. Dans les zones d'activité, nous inspectons les réseaux de grand diamètre pour les restaurants et industries, avec des rapports conformes aux normes. La géolocalisation des anomalies facilite les devis de réparation ultérieurs.",
      tarifs:
        "Inspection caméra à Saint-Priest au forfait annoncé avant déplacement. Inclut le passage, le rapport vidéo et les préconisations. Sans supplément soirée ou week-end.",
      conclusion:
        "Besoin d'un diagnostic canalisation à Saint-Priest ? 4 clics pour votre tarif, rapport le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Saint-Priest est une prestation courante dans les nombreux secteurs pavillonnaires de la commune. Nous assurons la vidange complète, le nettoyage du préfiltre et le contrôle de conformité pour tous les types d'installations d'assainissement non collectif, avec le bordereau réglementaire exigé par le SPANC.",
      details:
        "Saint-Priest compte de nombreuses maisons individuelles équipées de fosses toutes eaux ou de micro-stations. La vidange régulière, tous les 4 ans, est indispensable pour éviter les refoulements et les mauvaises odeurs. Notre camion hydrocureur 11 m³ pompe la totalité des boues. Nous nettoyons le préfiltre à haute pression et vérifions le bon fonctionnement du système. Pour les restaurants des zones Mi-Plaine, nous proposons des contrats d'entretien de bac à graisses.",
      tarifs:
        "Tarif de vidange à Saint-Priest établi selon le volume et l'accessibilité de votre fosse. Annoncé avant intervention, il inclut pompage, nettoyage, contrôle et bordereau. Pas de supplément urgence.",
      conclusion:
        "Fosse septique à vidanger à Saint-Priest ? Utilisez notre borne, tarif immédiat, intervention rapide.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage à Saint-Priest équipent principalement les sous-sols de pavillons et les locaux techniques des zones d'activité. Une panne expose à des risques d'inondation rapide. Nos techniciens interviennent sous 1 heure, 24h/7j, pour diagnostic et remplacement.",
      details:
        "Dans les pavillons de Saint-Priest, les pompes de relevage sont souvent installées pour permettre l'aménagement de caves ou de salles d'eau en sous-sol. Nous diagnostiquons les pannes (moteur grillé, flotteur bloqué, tuyauterie percée) et remplaçons le matériel défectueux par un modèle neuf dimensionné pour votre débit. Dans les zones d'activité, nous assurons la maintenance préventive des stations de relevage pour éviter les arrêts de production. Garantie 1 an sur toutes nos interventions.",
      tarifs:
        "Intervention pompe de relevage à Saint-Priest : diagnostic inclus, devis de remplacement avant travaux. Pas de surprime nuit, week-end ou jours fériés.",
      conclusion:
        "Pompe de relevage en panne à Saint-Priest ? 4 clics sur la borne, tarif immédiat, intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // CALUIRE-ET-CUIRE
  // ==========================================================
  'caluire-et-cuire': {
    debouchage: {
      intro:
        "À Caluire-et-Cuire, le débouchage de canalisation présente des contraintes spécifiques liées au relief : les collines résidentielles, les pentes douces vers la Saône et les accès parfois étroits exigent un matériel adapté et des techniciens expérimentés. Nous intervenons 24h/7j sur l'ensemble de la commune, du centre aux bords de Saône.",
      details:
        "L'habitat de Caluire est majoritairement composé de maisons individuelles et de petits collectifs. Les réseaux enterrés descendent souvent en pente vers la Saône, ce qui peut entraîner des contre-pentes ou des accumulations dans les parties basses. Les intrusions racinaires sont fréquentes dans ce secteur très arboré. Notre hydrocureur et notre furet électrique s'adaptent à tous les diamètres de canalisation. Pour les villas en hauteur, l'accès pompe est préparé en amont pour une intervention efficace.",
      tarifs:
        "Transparence tarifaire à Caluire-et-Cuire : prix annoncé avant intervention via notre borne, calculé selon l'élément bouché et la difficulté d'accès. Pas de frais cachés, pas de majoration week-end ou jours fériés.",
      conclusion:
        "Canalisation bouchée à Caluire-et-Cuire ? 4 clics sur la borne pour votre tarif, intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Caluire-et-Cuire est recommandée pour les propriétaires de maisons anciennes ou de villas en pente. Nos caméras HD parcourent vos canalisations pour dresser un état des lieux précis avant achat, rénovation ou en cas de problèmes récurrents. Rapport vidéo détaillé avec localisation des anomalies.",
      details:
        "Les villas anciennes de Caluire, parfois centenaires, ont des réseaux en fonte ou en grès qui peuvent présenter des fissures ou des emboîtements défaillants. La caméra permet de visualiser précisément l'état intérieur sans ouvrir de tranchée. Dans les pentes, nous mesurons l'inclinaison pour détecter les contre-pentes. Le rapport vidéo est un document clé pour les transactions immobilières sur ce secteur recherché. Nous intervenons également sur les réseaux d'eaux pluviales, souvent sollicités lors des orages.",
      tarifs:
        "Inspection caméra à Caluire-et-Cuire au forfait annoncé avant déplacement. Inclut passage caméra, rapport vidéo et préconisations. Sans supplément soirée ou week-end.",
      conclusion:
        "Besoin d'un diagnostic canalisation à Caluire-et-Cuire ? Obtenez votre tarif en 4 clics, rapport le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Caluire-et-Cuire concerne les nombreuses propriétés non raccordées au tout-à-l'égout, notamment dans les secteurs résidentiels en hauteur. Nous assurons la vidange, le nettoyage et le contrôle de votre installation avec le bordereau réglementaire obligatoire.",
      details:
        "Les villas de Caluire disposent souvent d'un assainissement autonome. Les fosses, parfois anciennes, doivent être entretenues régulièrement pour éviter les refoulements et les nuisances olfactives. Notre camion hydrocureur accède aux propriétés, même en impasse ou en forte pente. Nous vidangeons la totalité des boues, nettoyons le préfiltre et contrôlons l'état général. Le bordereau de suivi des déchets est remis systématiquement pour justifier l'entretien auprès du SPANC.",
      tarifs:
        "Vidange fosse septique à Caluire : tarif selon volume et accessibilité, annoncé avant intervention. Inclut pompage, nettoyage, contrôle et bordereau. Pas de supplément urgence.",
      conclusion:
        "Fosse à vidanger à Caluire-et-Cuire ? Borne en ligne, tarif immédiat, intervention sous 24h.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage sont très fréquentes à Caluire-et-Cuire en raison du relief. Elles équipent les sous-sols, les caves aménagées et les évacuations en contrebas. Nos techniciens interviennent 24h/7j pour tout diagnostic, dépannage ou remplacement de pompe, sous 1 heure.",
      details:
        "À Caluire, la configuration en pente impose souvent des pompes de relevage pour évacuer les eaux usées vers le réseau collecteur situé plus haut. Les pannes sont généralement dues à l'usure du moteur ou au blocage du flotteur par des dépôts. Nous diagnostiquons la panne sur place et proposons un remplacement immédiat si nécessaire. Nos pompes sont dimensionnées pour le dénivelé spécifique de votre propriété. Garantie 1 an pièces et main-d'œuvre.",
      tarifs:
        "Intervention pompe de relevage à Caluire-et-Cuire : diagnostic inclus. Devis de remplacement avant travaux. Pas de surprime nuit, week-end ou jours fériés.",
      conclusion:
        "Pompe de relevage en panne à Caluire ? 4 clics pour votre tarif, intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // BRON
  // ==========================================================
  bron: {
    debouchage: {
      intro:
        "À Bron, le débouchage de canalisation intervient sur un parc immobilier contrasté : grands ensembles Parilly et Terraillon, pavillons résidentiels, et campus universitaire. Chaque secteur a ses problématiques propres. Nos techniciens connaissent la commune et interviennent 24h/7j dans tout le 69500.",
      details:
        "Les copropriétés Parilly et Terraillon, construites dans les années 1960-70, ont des colonnes d'évacuation en fonte qui peuvent s'obstruer par accumulation de calcaire et de dépôts. Les bouchons de lingettes dans les colonnes communes sont une cause fréquente d'intervention. Dans les zones pavillonnaires, les racines d'arbres et les tassements de terrain génèrent des obstructions sur les réseaux enterrés. Notre hydrocureur et notre furet électrique permettent un débouchage rapide et durable sur tous les diamètres.",
      tarifs:
        "Débouchage à Bron au tarif annoncé avant intervention, calculé selon l'élément et l'ancienneté du bouchon. Pas de frais cachés, pas de majoration soirée ou week-end. Devis gratuit.",
      conclusion:
        "Canalisation bouchée à Bron ? 4 clics sur la borne, tarif immédiat, intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Bron permet aux copropriétés comme aux propriétaires de pavillons de connaître précisément l'état de leurs canalisations. Nos caméras motorisées diagnostiquent fissures, racines et défauts de pente, avec un rapport vidéo complet utilisable pour les syndics ou les dossiers de sinistre.",
      details:
        "Les immeubles de Parilly et Terraillon sollicitent régulièrement l'inspection caméra avant des travaux de rénovation. Les colonnes en fonte de cette époque peuvent présenter des dégradations internes invisibles de l'extérieur. Notre caméra parcourt les collecteurs sur toute leur longueur et localise précisément les anomalies. Pour les pavillons, nous inspectons les réseaux enterrés vers le domaine public, avec mesure de pente et repérage des piquages. Rapport remis le jour même.",
      tarifs:
        "Inspection caméra à Bron au forfait annoncé avant déplacement, incluant passage, rapport vidéo et préconisations. Sans supplément soirée ou week-end.",
      conclusion:
        "Diagnostic canalisation à Bron ? 4 clics, votre tarif, rapport vidéo sous 24h.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Bron concerne les secteurs pavillonnaires de la commune non raccordés au réseau collectif. Nous assurons la vidange complète, le nettoyage et le contrôle de votre installation d'assainissement non collectif, avec le bordereau de suivi réglementaire.",
      details:
        "Les maisons individuelles de Bron, notamment vers le centre-ville et les secteurs résidentiels, peuvent être équipées de fosses septiques. Une vidange régulière (tous les 4 ans) est obligatoire et conditionne la validité du contrôle SPANC. Notre camion hydrocureur pompe la totalité des boues, nettoie le préfiltre à haute pression et vérifie le niveau de remplissage. Bordereau de suivi des déchets remis systématiquement.",
      tarifs:
        "Vidange fosse septique à Bron : tarif selon volume et accessibilité, annoncé avant intervention. Inclut pompage, nettoyage, contrôle et bordereau réglementaire.",
      conclusion:
        "Fosse septique à vidanger à Bron ? Utilisez notre borne pour un tarif immédiat. Intervention en 24h.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage à Bron équipent de nombreux sous-sols des copropriétés Parilly et Terraillon, ainsi que des pavillons avec cave aménagée. En cas de panne, nos techniciens interviennent sous 1 heure, 24h/7j, avec un diagnostic immédiat et un remplacement si nécessaire.",
      details:
        "Les immeubles de Bron construits dans les années 60-70 ont souvent des pompes de relevage vieillissantes en sous-sol. Les pannes sont généralement liées à l'usure du moteur, au flotteur bloqué ou au clapet anti-retour défaillant. Nous proposons un remplacement avec une pompe moderne plus économe en énergie et plus silencieuse. Dans les pavillons, les pompes sont souvent sous-dimensionnées : nous calculons le débit nécessaire et installons un modèle adapté. Garantie 1 an pièces et main-d'œuvre.",
      tarifs:
        "Intervention pompe de relevage à Bron : diagnostic inclus, devis de remplacement avant travaux. Pas de surprime urgence, nuit ou week-end.",
      conclusion:
        "Pompe de relevage en panne à Bron ? 4 clics, un tarif, une intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // MEYZIEU
  // ==========================================================
  meyzieu: {
    debouchage: {
      intro:
        "À Meyzieu, commune résidentielle de l'Est lyonnais, le débouchage de canalisation intervient principalement dans les zones pavillonnaires récentes et les nouveaux quartiers comme la ZAC du Carreau. Nos techniciens 24h/7j connaissent les spécificités des réseaux de la commune et interviennent sous 1 heure dans tout le 69330.",
      details:
        "Les maisons individuelles de Meyzieu, souvent construites depuis moins de 20 ans, ont des réseaux en PVC généralement en bon état. Les obstructions sont le plus souvent accidentelles (lingettes, jouets, résidus de chantier) et se résolvent rapidement au furet électrique. Dans les secteurs plus anciens du centre, les canalisations peuvent être en fonte et nécessiter un hydrocurage. Les nouveaux collectifs de la ZAC du Carreau présentent peu de pathologies structurelles.",
      tarifs:
        "Débouchage à Meyzieu au tarif transparent, annoncé avant intervention. Calculé selon l'élément concerné et l'ancienneté du bouchon. Devis gratuit, pas de frais cachés, pas de majoration week-end.",
      conclusion:
        "Canalisation bouchée à Meyzieu ? 4 clics sur notre borne, tarif immédiat, intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Meyzieu est particulièrement demandée par les acquéreurs de maisons récentes souhaitant vérifier l'état des réseaux enterrés, ou par les propriétaires de biens plus anciens avant rénovation. Nos caméras HD livrent un diagnostic précis avec rapport vidéo et préconisations.",
      details:
        "Dans les pavillons récents de Meyzieu, l'inspection caméra permet de vérifier la conformité des raccordements et de détecter d'éventuels défauts de pose (contre-pentes, emboîtements mal clipsés). Pour les maisons plus anciennes du centre, nous inspectons les réseaux en fonte ou en grès à la recherche de fissures et de racines. Le rapport vidéo avec géolocalisation est un document utile pour les négociations immobilières ou les dossiers de garantie décennale.",
      tarifs:
        "Inspection caméra à Meyzieu au forfait annoncé avant déplacement. Inclut le passage, le rapport vidéo et les préconisations. Sans supplément soirée ou week-end.",
      conclusion:
        "Besoin d'une inspection caméra à Meyzieu ? 4 clics pour votre tarif, rapport vidéo le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Meyzieu concerne une partie des zones pavillonnaires de la commune, notamment les secteurs non encore raccordés au tout-à-l'égout. Nous assurons l'entretien complet de votre installation : pompage, nettoyage du préfiltre, contrôle de conformité et bordereau réglementaire.",
      details:
        "Certaines propriétés de Meyzieu, en particulier dans les secteurs périphériques, disposent d'un assainissement non collectif. Les fosses récentes sont généralement en bon état mais un entretien régulier reste obligatoire. Notre camion hydrocureur pompe les boues et nettoie le préfiltre. Nous vérifions le bon fonctionnement de l'installation et remettons le bordereau de suivi des déchets, indispensable pour le SPANC. Pour les micro-stations, nous contrôlons également le surpresseur.",
      tarifs:
        "Vidange fosse septique à Meyzieu au tarif selon le volume et l'accessibilité, annoncé avant intervention. Inclut pompage, nettoyage, contrôle et bordereau. Pas de supplément urgence.",
      conclusion:
        "Fosse à vidanger à Meyzieu ? Borne en ligne pour un tarif immédiat. Intervention en 24h.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage à Meyzieu équipent principalement les caves et sous-sols aménagés des pavillons récents. Bien que les installations soient généralement modernes, une panne peut survenir (orage, surtension, usure). Nos techniciens interviennent sous 1 heure, 24h/7j.",
      details:
        "Dans les pavillons de Meyzieu, les pompes de relevage sont souvent installées pour des caves aménagées en salle de jeux ou buanderie. Les pannes sont généralement électriques (disjonction) ou mécaniques (flotteur bloqué). Nous diagnostiquons la panne et proposons un remplacement adapté. Les pompes installées sont dimensionnées pour le débit et le dénivelé de votre installation. Nous assurons également l'entretien préventif pour éviter les pannes. Garantie 1 an pièces et main-d'œuvre.",
      tarifs:
        "Intervention pompe de relevage à Meyzieu : diagnostic inclus, devis de remplacement avant travaux. Pas de surprime nuit, week-end ou jours fériés.",
      conclusion:
        "Pompe de relevage en panne à Meyzieu ? 4 clics sur la borne, un tarif, une intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // RILLIEUX-LA-PAPE
  // ==========================================================
  'rillieux-la-pape': {
    debouchage: {
      intro:
        "À Rillieux-la-Pape, ville nouvelle construite dans les années 1970, le débouchage de canalisation concerne principalement l'habitat vertical dense et les pavillons récents. Nos techniciens maîtrisent les spécificités des colonnes techniques des immeubles et des réseaux pavillonnaires. Intervention 24h/7j dans tout le 69140.",
      details:
        "Les immeubles de Rillieux, caractéristiques de l'urbanisme des années 70, ont des colonnes techniques encastrées où cohabitent évacuation et ventilation. L'accès peut être complexe et nécessite du matériel adapté. Les bouchons sont souvent liés à l'accumulation de calcaire et de dépôts dans la fonte. Dans les pavillons récents, les obstructions sont plus ponctuelles mais peuvent être sévères (racines, effondrement). Notre hydrocureur haute pression traite tous les diamètres, de l'évacuation de machine à laver à la colonne principale.",
      tarifs:
        "Débouchage à Rillieux-la-Pape : tarif annoncé avant intervention, calculé selon l'élément et la complexité d'accès. Pas de frais cachés, pas de majoration soirée ou week-end. Devis gratuit.",
      conclusion:
        "Canalisation bouchée à Rillieux-la-Pape ? Testez notre borne en 4 clics, tarif immédiat, intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Rillieux-la-Pape est un outil précieux pour les copropriétés comme pour les propriétaires. Elle permet de visualiser l'état interne des colonnes techniques sans démontage et de localiser précisément les anomalies sur les réseaux enterrés. Rapport vidéo complet remis le jour même.",
      details:
        "Les immeubles de Rillieux, avec leurs colonnes techniques complexes, bénéficient grandement de l'inspection caméra avant toute rénovation. La caméra permet d'identifier les fissures, dépôts et déboîtements dans des gaines souvent difficiles d'accès. Pour les pavillons, nous inspectons les réseaux enterrés pour détecter les contre-pentes et les racines. Le rapport avec géolocalisation est un document clé pour les dossiers de sinistre ou les transactions immobilières.",
      tarifs:
        "Inspection caméra à Rillieux-la-Pape au forfait annoncé avant déplacement. Inclut le passage, le rapport vidéo et les préconisations. Sans supplément soirée ou week-end.",
      conclusion:
        "Besoin d'un diagnostic canalisation à Rillieux-la-Pape ? 4 clics sur la borne, tarif immédiat, rapport le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Rillieux-la-Pape concerne les secteurs pavillonnaires non raccordés de la commune. Nous assurons la vidange, le nettoyage et le contrôle de votre installation d'assainissement non collectif, avec le bordereau réglementaire exigé par le SPANC.",
      details:
        "Les pavillons de Rillieux-la-Pape peuvent disposer de fosses septiques individuelles. Un entretien régulier est obligatoire et conditionne la conformité de votre installation. Notre camion hydrocureur pompe la totalité des boues et nettoie le préfiltre à haute pression. Nous vérifions le niveau de remplissage, l'état de la ventilation et le bon écoulement. Le bordereau de suivi des déchets vous est remis pour justifier l'entretien.",
      tarifs:
        "Vidange fosse septique à Rillieux : tarif établi selon volume et accessibilité, annoncé avant intervention. Inclut pompage, nettoyage, contrôle et bordereau réglementaire.",
      conclusion:
        "Fosse septique à vidanger à Rillieux-la-Pape ? Borne en ligne, tarif immédiat, intervention rapide.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage à Rillieux-la-Pape équipent de nombreux sous-sols et caves d'immeubles comme de maisons individuelles. Nos techniciens interviennent sous 1 heure pour tout diagnostic, dépannage ou remplacement, avec un stock de pièces détachées à bord. Intervention 24h/7j.",
      details:
        "La configuration de Rillieux, avec des immeubles sur plusieurs niveaux et des parkings souterrains, rend les pompes de relevage indispensables. Les pannes sont souvent liées à l'âge des équipements (15-20 ans) : moteur usé, flotteur bloqué, clapet anti-retour grippé. Nous diagnostiquons la panne sur place et proposons un remplacement avec une pompe moderne, plus silencieuse et économique. Dans les pavillons, nous installons des pompes adaptées aux caves aménagées. Garantie 1 an.",
      tarifs:
        "Intervention pompe de relevage à Rillieux-la-Pape : diagnostic inclus, devis avant remplacement. Pas de surprime urgence, nuit, week-end ou jours fériés.",
      conclusion:
        "Pompe de relevage en panne à Rillieux-la-Pape ? 4 clics, un tarif, une intervention sous 1 heure.",
    },
  },

  // ==========================================================
  // DÉCINES-CHARPIEU
  // ==========================================================
  'decines-charpieu': {
    debouchage: {
      intro:
        "À Décines-Charpieu, le débouchage de canalisation couvre un territoire en pleine expansion : pavillons anciens, petits collectifs récents et zones d'activité autour du Groupama Stadium. Nos techniciens interviennent 24h/7j sur tout le 69150, avec une connaissance fine des réseaux de la commune.",
      details:
        "Les pavillons anciens de Décines ont souvent des réseaux en fonte ou en grès sensibles aux racines et aux tassements. Les petits collectifs récents présentent peu de pathologies mais peuvent subir des obstructions accidentelles (lingettes, résidus). Dans les zones d'activité et autour du stade, les canalisations de grand diamètre sont soumises à un usage intensif les jours d'affluence. Notre hydrocureur et notre furet électrique couvrent tous les besoins, du 32 mm au 200 mm.",
      tarifs:
        "Débouchage à Décines : tarif transparent annoncé avant intervention, calculé selon l'élément et l'ancienneté. Pas de frais cachés, pas de majoration week-end ou jours fériés. Devis gratuit.",
      conclusion:
        "Canalisation bouchée à Décines-Charpieu ? 4 clics sur notre borne, tarif immédiat, intervention sous 1 heure.",
    },
    'inspection-camera': {
      intro:
        "L'inspection caméra à Décines-Charpieu est recommandée pour les propriétaires de pavillons anciens souhaitant connaître l'état de leurs réseaux avant rénovation, ou pour les acquéreurs dans le cadre d'une transaction immobilière. Nos caméras HD livrent un diagnostic précis avec rapport vidéo et préconisations.",
      details:
        "Les maisons anciennes de Décines peuvent avoir des réseaux en fonte datant de plusieurs décennies. Notre caméra motorisée parcourt les canalisations pour détecter fissures, corrosion, emboîtements défectueux et racines. Les petits collectifs récents font aussi appel à nous pour des inspections de conformité. Le rapport vidéo avec géolocalisation est un document précieux pour les dossiers de vente ou de sinistre. Nous mesurons également les pentes pour valider l'écoulement.",
      tarifs:
        "Inspection caméra à Décines au forfait annoncé avant déplacement. Inclut le passage, le rapport vidéo et les préconisations écrites. Sans supplément soirée ou week-end.",
      conclusion:
        "Besoin d'un diagnostic canalisation à Décines-Charpieu ? 4 clics pour votre tarif, rapport vidéo le jour même.",
    },
    'fosse-septique': {
      intro:
        "La vidange de fosse septique à Décines-Charpieu concerne principalement les zones pavillonnaires anciennes non raccordées au réseau collectif. Nous assurons la vidange complète, le nettoyage du préfiltre et le contrôle de votre installation d'assainissement non collectif, en conformité avec la réglementation du SPANC.",
      details:
        "Les maisons anciennes de Décines, notamment dans les secteurs du centre et du bord du canal de Jonage, peuvent être équipées de fosses septiques. La vidange régulière est obligatoire. Notre camion hydrocureur 11 m³ pompe les boues et nettoie le préfiltre à haute pression. Nous contrôlons l'état général de l'installation et le niveau des boues. Le bordereau de suivi des déchets, indispensable pour le SPANC, est remis systématiquement.",
      tarifs:
        "Vidange fosse septique à Décines : tarif selon volume et accessibilité, annoncé avant intervention. Inclut pompage, nettoyage, contrôle et bordereau réglementaire.",
      conclusion:
        "Fosse à vidanger à Décines-Charpieu ? Utilisez notre borne pour un tarif immédiat. Intervention rapide.",
    },
    'pompe-relevage': {
      intro:
        "Les pompes de relevage à Décines-Charpieu équipent principalement les sous-sols aménagés des pavillons et les caves des petits collectifs. Nos techniciens interviennent sous 1 heure, 24h/7j, pour diagnostic, dépannage ou remplacement de votre pompe de relevage.",
      details:
        "Dans les pavillons de Décines, les pompes de relevage sont souvent installées pour des caves aménagées en espace de vie. Les pannes sont généralement liées à l'usure du moteur, au blocage du flotteur ou à une surtension électrique. Nous diagnostiquons la panne et proposons un remplacement immédiat avec une pompe dimensionnée pour votre débit. Dans les collectifs, nous intervenons sur les stations de relevage partagées. Garantie 1 an pièces et main-d'œuvre sur toutes nos interventions.",
      tarifs:
        "Intervention pompe de relevage à Décines : diagnostic inclus, devis de remplacement avant travaux. Pas de surprime urgence, nuit, week-end ou jours fériés.",
      conclusion:
        "Pompe de relevage en panne à Décines-Charpieu ? 4 clics sur la borne, un tarif, une intervention sous 1 heure.",
    },
  },
};
