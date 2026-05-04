import type { ContenuSeoVille } from './types';

// ============================================================
// CONTENU SEO ÉTENDU — 10 villes du Var
// ============================================================
// Rédaction unique par ville (~1700 mots). Pas de duplicate
// content : chaque texte mentionne des éléments factuels
// spécifiques (quartiers, climat, sols, type d'habitat,
// problématiques techniques locales).
// ============================================================

export const CONTENU_VILLES_SEO: Record<string, ContenuSeoVille> = {
  // ============================================================
  // LYON — préfecture du Rhône, capitale de la Métropole
  // ============================================================
  lyon: {
    intro: `Préfecture du Rhône, capitale de la Métropole de Lyon et troisième ville de France avec ses 522 000 habitants, Lyon concentre la majorité des urgences plomberie du département (69). Étirée entre Saône et Rhône, dominée à l'ouest par la colline de Fourvière et au nord par les pentes raides de la Croix-Rousse, la ville superpose des générations de réseaux d'évacuation : conduites en plomb et en fonte du XIXᵉ siècle dans la Presqu'île et le 6ᵉ haussmannien, traboules verticales aux pentes prononcées entre Croix-Rousse et Saône, dalles béton des grands ensembles des années 60-70 à la Duchère et à Mermoz, branchements PVC modernes à la Confluence et au Carré de Soie. Cette stratification fait du métier de plombier déboucheur lyonnais un travail de diagnostic autant que d'intervention. Les bouchons rencontrés ne sont presque jamais isolés : sur la Presqu'île, c'est souvent un dépôt de graisses dans une colonne fonte centenaire ; en Croix-Rousse, c'est l'angle d'une chute en escalier qui retient les matières ; à Gerland ou à Vaise, c'est plus volontiers une racine dans un branchement enterré. Notre équipe d'artisans plombiers urgence intervient 24h/7j sur l'ensemble des 9 arrondissements, avec une logistique calibrée pour tenir l'engagement d'une intervention sous une heure quel que soit le jour de la semaine.`,

    habitat: `Le bâti lyonnais se lit en couches géographiques et historiques. La Presqu'île (1ᵉʳ et 2ᵉ arrondissements) aligne des immeubles bourgeois et haussmanniens construits entre 1850 et 1910, avec des colonnes d'évacuation cuisine et WC souvent encore en plomb sur les premiers mètres avant raccordement à la fonte du tout-à-l'égout : un débouchage WC y impose la prudence, un excès de pression peut casser une portion fragile. La Croix-Rousse (1ᵉʳ et 4ᵉ) impose ses pentes vertigineuses : les colonnes de chute y voyagent sur 7 à 8 niveaux et accélèrent l'eau, ce qui crée des reflux soudains aux premiers étages dès qu'un coude s'encrasse. Le 6ᵉ et le 3ᵉ regorgent de copropriétés haussmanniennes denses où une seule colonne dessert souvent 6 à 8 logements — un bouchon devient vite un problème collectif. Les 7ᵉ (Guillotière, Gerland) et 8ᵉ (Monplaisir, Mermoz) mêlent immeubles 1900, barres années 60-70 et résidences récentes, avec un vrai patchwork de matériaux. Le 9ᵉ (Vaise, Duchère) et la Confluence présentent les réseaux PVC les plus modernes, mais aussi des pompes de relevage nombreuses en sous-sol. Cette diversité oblige nos techniciens à varier l'outil — furet électrique, hérisson, buse rotative haute pression du camion hydrocureur — selon le cas.`,

    problemesFrequents: [
      {
        titre: 'Bouchons graisseux dans les colonnes cuisine de la Presqu\'île et du 6ᵉ',
        serviceSlug: 'debouchage',
        texte: `Dans les immeubles haussmanniens du 1ᵉʳ, 2ᵉ et 6ᵉ arrondissement, les colonnes cuisine cumulent les rejets de 5 à 8 logements et finissent par s'encrasser de graisses figées, surtout en hiver où l'eau dure du Rhône précipite le calcaire mêlé aux dépôts. Le symptôme classique : votre évier se vide lentement, et le voisin du dessous voit remonter une eau grasse. Un débouchage chimique ou une simple ventouse n'aura qu'un effet temporaire — le bouchon est plus bas. Notre intervention type combine un curage haute pression depuis le pied de colonne avec un camion hydrocureur, suivi d'un passage caméra HD pour cartographier les zones encrassées et confirmer l'écoulement libre. Le tarif est annoncé avant intervention, sans surprise à la facturation. Nous travaillons régulièrement avec les syndics lyonnais sur ce type de chantier coordonné, en planifiant un curage préventif tous les 18 à 24 mois.`,
      },
      {
        titre: 'Inspection caméra HD avant achat sur les copropriétés anciennes du 6ᵉ et du 5ᵉ',
        serviceSlug: 'inspection-camera',
        texte: `Sur les copropriétés bourgeoises du 6ᵉ (Tête d'Or, Brotteaux), du 5ᵉ (Vieux-Lyon, Saint-Just) et certaines villas de Fourvière, les notaires demandent désormais quasi systématiquement un état du réseau d'évacuation avant signature. La raison est simple : la plupart de ces immeubles ont été construits avant 1920, avec des canalisations en fonte, en plomb ou en grès vernissé qui montrent aujourd'hui des fissures longitudinales, des contre-pentes ou des intrusions racinaires que rien ne signale en surface tant qu'il n'y a pas d'inondation. Notre diagnostic vidéo se fait avec une caméra HD sur enrouleur jusqu'à 60 mètres, avec mesure de pente, géolocalisation des défauts et rapport vidéo horodaté. C'est ce document qui sert ensuite à la négociation ou à protéger l'acquéreur contre les vices cachés. Compter 90 à 120 minutes pour un appartement standard, avec rapport remis sur place ou par mail dans la journée.`,
      },
      {
        titre: 'Fosses septiques sur les coteaux du 5ᵉ et de Saint-Just non raccordés',
        serviceSlug: 'fosse-septique',
        texte: `Une partie des coteaux ouest de Lyon — secteurs élevés du 5ᵉ autour de Fourvière, certaines parcelles excentrées de Saint-Just, hauteurs résiduelles côté Vaise — n'est pas raccordée au tout-à-l'égout collectif. Les propriétaires y disposent d'une fosse toutes eaux, parfois d'une micro-station ou d'un bac à graisses pour les commerces de bouche. La réglementation SPANC du Grand Lyon impose une vidange tous les 4 ans en moyenne : au-delà, les boues compactées finissent par déborder ou colmater le préfiltre. La spécificité lyonnaise : l'accès. Beaucoup de propriétés sont desservies par des chemins étroits ou des escaliers ponctuels, qui n'admettent pas tous les camions hydrocureurs. Nous disposons d'un véhicule compact pour ces accès difficiles, qui réduit la distance utile de flexible à moins de 30 mètres. Bordereau de suivi des déchets remis systématiquement après pompage de fosse, conforme aux exigences du SPANC.`,
      },
      {
        titre: 'Pompes de relevage dans les sous-sols de la Confluence et de Vaise',
        serviceSlug: 'pompe-relevage',
        texte: `Les quartiers récents de la Confluence (2ᵉ), de Gerland (7ᵉ) et certaines portions basses de Vaise (9ᵉ) sont en partie sous le niveau du tout-à-l'égout collectif, en raison de leur proximité immédiate avec le Rhône ou la Saône. Les caves, buanderies et parfois rez-de-chaussée d'habitation y dépendent d'une pompe de relevage qui remonte les eaux usées ou les eaux pluviales vers la canalisation publique. Quand cette pompe lâche un samedi soir — flotteur bloqué par le calcaire de l'eau dure lyonnaise, roue grippée, condensateur claqué — le sous-sol se remplit en quelques heures. Nous intervenons en urgence avec des pompes équivalentes en stock camion (eaux usées domestiques, eaux vannes avec broyeur, eaux pluviales) et remettons en service le jour même dans la majorité des cas. Pour une installation neuve, nous dimensionnons le poste de relevage en fonction de la hauteur manométrique réelle et du débit de pointe.`,
      },
    ],

    quartiers: {
      intro: `Lyon est une ville de quartiers très typés, organisée en 9 arrondissements aux configurations de réseau, types d'habitat et problématiques de plomberie radicalement différents. Notre équipe de plombiers dépanneurs intervient quotidiennement sur l'ensemble du territoire communal et sur les communes limitrophes immédiates de la Métropole de Lyon. Nos délais d'intervention sont calibrés pour rester sous l'heure dans le centre et la première couronne (1ᵉʳ à 7ᵉ), et autour de 75 minutes maximum pour les arrondissements périphériques (9ᵉ Vaise, 8ᵉ Mermoz, hauteurs du 5ᵉ). Nous connaissons les particularités d'accès — sens uniques de la Presqu'île, escaliers de la Croix-Rousse, copropriétés sans place de stationnement, zones piétonnes du Vieux-Lyon — qui font qu'une intervention bien préparée dure deux fois moins longtemps qu'un déplacement à l'aveugle.`,
      liste: [
        'Presqu\'île (1ᵉʳ, 2ᵉ — Bellecour, Cordeliers, Terreaux)',
        'Croix-Rousse (1ᵉʳ, 4ᵉ)',
        'Vieux-Lyon et Fourvière (5ᵉ)',
        'Brotteaux et Tête d\'Or (6ᵉ)',
        'Part-Dieu et Préfecture (3ᵉ)',
        'Guillotière et Jean-Macé (7ᵉ)',
        'Gerland (7ᵉ)',
        'Monplaisir et Mermoz (8ᵉ)',
        'Vaise et Duchère (9ᵉ)',
        'Confluence (2ᵉ)',
      ],
    },

    conseilsLocaux: `Le climat continental tempéré de la Métropole de Lyon impose plusieurs vigilances saisonnières. En été, les orages violents qui suivent les épisodes de chaleur saturent en quelques minutes les réseaux pluviaux du centre, et font remonter occasionnellement des eaux usées dans les sanitaires des rez-de-chaussée et sous-sols. Vérifiez avant la saison des orages que vos clapets anti-retour fonctionnent et que les regards de cour sont dégagés. En hiver, l'eau dure et calcaire de la métropole accélère le colmatage des crépines de pompe de relevage : un détartrage annuel divise par trois le risque de panne de pompe l'été suivant. Le gel ponctuel de janvier-février peut bloquer les canalisations extérieures non isolées sur les balcons et terrasses : pensez à isoler ou à laisser couler un filet d'eau les nuits sous -5 °C. Pour les copropriétés du 1ᵉʳ, 2ᵉ et 6ᵉ, un curage préventif des colonnes cuisine tous les 18 à 24 mois en septembre, juste avant la reprise d'occupation pleine après l'été, divise par deux le nombre d'urgences hivernales que nous traitons en débouchage canalisation. C'est un geste collectif simple, géré par le syndic, qui s'amortit largement sur le coût des interventions urgentes.`,

    delais: `Notre équipe d'artisans plombiers urgence est basée à Lyon avec des techniciens en poste avancé sur Villeurbanne et la rive gauche, ce qui nous permet de tenir un délai d'intervention sous une heure sur les 9 arrondissements en journée et en début de soirée. La nuit et les week-ends, nous maintenons une astreinte technique 24h/7j avec plusieurs véhicules d'intervention permanents — un dépanneur reste de garde le dimanche et les jours fériés. Le délai moyen mesuré sur nos interventions reste autour de 45 à 55 minutes en intra-muros, un peu plus pour la Duchère, Mermoz et les hauteurs de Saint-Just. Avant chaque déplacement, nous validons par téléphone le diagnostic de votre situation pour partir avec le bon matériel : un débouchage WC ne demande pas le même camion qu'un curage de canalisation principale ou un dépannage de pompe de relevage. Cette anticipation évite les allers-retours et fait gagner 30 à 40 minutes sur l'intervention totale.`,

    faq: [
      {
        question: 'Pourquoi les copropriétés haussmanniennes du 6ᵉ ont-elles plus de bouchons en hiver ?',
        reponse: `Les températures plus basses font figer les graisses dans les colonnes d'évacuation cuisine, surtout en fonte. Les dépôts qui passaient en été se solidifient et finissent par former un anneau obstruant, accentué par le calcaire de l'eau lyonnaise. Un curage préventif en septembre limite fortement les urgences hivernales.`,
      },
      {
        question: 'Mon sous-sol à la Confluence est inondé après un orage. Est-ce que vous intervenez en urgence ?',
        reponse: `Oui, nous traitons régulièrement ce type de cas dans les quartiers proches du Rhône et de la Saône. Selon la cause — pompe de relevage en panne, regard pluvial bouché, refoulement du tout-à-l'égout — l'intervention diffère. Nous diagnostiquons d'abord, sécurisons l'évacuation, puis programmons la réparation définitive.`,
      },
      {
        question: `J'achète un appartement haussmannien dans le 6ᵉ, faut-il un diagnostic vidéo des canalisations ?`,
        reponse: `Pas légalement obligatoire, mais fortement recommandé sur les immeubles construits avant 1950. L'inspection caméra HD et le rapport vidéo chiffrent l'état réel des colonnes communes et protègent l'acquéreur contre les vices cachés. Nous remettons un document opposable utilisable en négociation devant notaire.`,
      },
      {
        question: `Quel est le tarif moyen d'un débouchage de WC à Lyon ?`,
        reponse: `Notre tarif transparent pour un débouchage WC standard à Lyon démarre à 99 € TTC, avec un devis annoncé avant intervention. Pour un cas complexe (canalisation principale, refoulement, accès difficile), la borne en ligne calcule un tarif personnalisé en quatre clics. Aucun frais caché, le prix annoncé est le prix facturé.`,
      },
      {
        question: 'Combien de temps prévoir pour une vidange de fosse septique sur les coteaux de Fourvière ?',
        reponse: `Pour une fosse toutes eaux de 3 000 litres avec accès camion à moins de 30 mètres, comptez environ 45 minutes sur place. Si l'accès est difficile (chemin étroit, escalier, distance supérieure), ajoutez 20 à 30 minutes pour le déroulé du flexible. Bordereau de suivi des déchets remis systématiquement.`,
      },
    ],

    conclusion: `Lyon est une ville où la plomberie ne s'improvise pas. Entre les réseaux haussmanniens du 6ᵉ, les pentes vertigineuses de la Croix-Rousse et les pompes de relevage de la Confluence, chaque intervention demande un diagnostic posé avant l'action. Notre borne en ligne vous donne un tarif transparent en quatre clics, calculé à partir de votre situation réelle et de votre arrondissement — pas d'estimation au pifomètre, pas de mauvaises surprises à la facturation. Si votre situation sort du cadre standard, la borne vous oriente vers un devis gratuit personnalisé. Notre équipe répond au standard 24h/7j et envoie un plombier dépanneur sous une heure dans la majorité des cas.`,
  },

  // ============================================================
  // VILLEURBANNE — Gratte-Ciel art-déco, Tonkin, étudiants
  // ============================================================
  villeurbanne: {
    intro: `Deuxième ville de la Métropole de Lyon avec ses 157 000 habitants, Villeurbanne forme avec Lyon un continuum urbain dont la frontière administrative ne se voit presque pas dans le tissu bâti. La ville a une identité forte : les Gratte-Ciel, ensemble art-déco emblématique inauguré en 1934 par Lazare Goujon avec ses tours rationalistes de 19 étages, restent un cas unique en France et donnent à Villeurbanne sa silhouette reconnaissable. Mais la commune, c'est aussi la barre de Tonkin (1970), le quartier ancien de Charpennes-Tonkin, les universités Lyon 1 et 2 qui accueillent des dizaines de milliers d'étudiants, le secteur en mutation du Carré de Soie côté est. Cette diversité de bâti — années 1930 art-déco, barres 1960-70, immeubles d'angle 1900, résidences étudiantes récentes, tertiaire neuf — fait du métier de plombier déboucheur urgence à Villeurbanne un travail varié, où chaque secteur appelle un diagnostic spécifique. Nos camions hydrocureurs et techniciens en astreinte 24h/7j couvrent l'ensemble de la commune, avec un temps moyen d'intervention de 50 minutes en journée.`,

    habitat: `On peut découper Villeurbanne en quatre grandes typologies d'habitat, chacune avec ses problématiques de plomberie. Les Gratte-Ciel concentrent des immeubles art-déco de 1934 dont les colonnes d'évacuation, encore d'origine pour partie, mêlent fonte et plomb : ces réseaux solides demandent du diagnostic plutôt que de la force brute, un excès de pression peut faire céder une jonction. Charpennes-Tonkin et Cusset alignent des immeubles d'angle 1900-1930 avec colonnes uniques, où les engorgements prennent vite une dimension collective. Le Tonkin et la Ferrandière concentrent des barres et tours années 1960-70 avec des dalles béton, des chutes en PVC et des pompes de relevage en sous-sol qui vieillissent. Enfin, le Carré de Soie côté Villeurbanne et la Soie présentent les réseaux PVC les plus modernes, avec des copropriétés étudiantes et des résidences services dont la rotation occupant rapide multiplie les bouchons (cheveux, lingettes, résidus de cuisine partagée). Nos techniciens varient l'outil — furet électrique pour les colonnes étroites, hérisson rotatif, buse haute pression du camion hydrocureur — selon le contexte rencontré.`,

    problemesFrequents: [
      {
        titre: 'Bouchons cuisine récidivants dans les copropriétés étudiantes du Tonkin et de Cusset',
        serviceSlug: 'debouchage',
        texte: `Les copropriétés étudiantes proches des campus de Lyon 1 et Lyon 2 — secteurs Tonkin, Cusset, Charpennes — présentent une particularité : la rotation rapide des occupants, des cuisines partagées intensément utilisées et un usage souvent peu informé des évacuations (graisses jetées dans l'évier, marc de café, résidus alimentaires solides) provoquent des bouchons cuisine plus fréquents qu'ailleurs. Le débouchage évier au furet règle le problème ponctuel, mais ne change pas la cause. Nous proposons systématiquement un passage caméra de contrôle pour identifier les zones de stagnation, et conseillons aux syndics un curage hydrocureur préventif tous les 18 mois. Notre tarif transparent pour un débouchage évier standard démarre à 99 € TTC à Villeurbanne, devis annoncé avant intervention. Nous intervenons 24h/7j, week-ends et jours fériés inclus.`,
      },
      {
        titre: 'Inspection caméra HD avant rénovation sur les Gratte-Ciel',
        serviceSlug: 'inspection-camera',
        texte: `Les Gratte-Ciel concentrent des immeubles art-déco de 1934 dont les colonnes d'origine, en fonte et plomb, ont parfois été remaniées partiellement lors des rénovations successives. Avant tout chantier de rénovation lourde — réfection cuisine, salle de bain, copropriété — un diagnostic vidéo des colonnes communes met en évidence les piquages artisanaux, les jonctions fragiles, les segments en plomb qui doivent absolument être protégés ou remplacés selon les normes actuelles. Notre inspection caméra HD jusqu'à 60 mètres avec rapport vidéo horodaté est un document de référence pour le syndic et l'architecte : il évite de redécouvrir un problème majeur en plein chantier. Compter 90 minutes pour un appartement standard avec rapport remis sur place.`,
      },
      {
        titre: 'Vidanges de bacs à graisses pour les restaurants du centre Villeurbanne',
        serviceSlug: 'fosse-septique',
        texte: `Le cours Émile Zola, le secteur Charpennes-Tonkin et les abords du Carré de Soie concentrent une forte densité de restaurants, brasseries et fast-foods. Tous ces établissements doivent disposer d'un bac à graisses dimensionné, et le faire vidanger toutes les 6 à 8 semaines selon le volume traité. Une vidange négligée se traduit par un débordement en plein service de midi, des odeurs en salle, parfois la fermeture administrative imposée par la commission d'hygiène. Nous intervenons avant l'ouverture du restaurant, généralement entre 6 h et 8 h du matin, pour un pompage complet du bac, un nettoyage haute pression des parois et un contrôle du clapet anti-retour et de la cloison siphoïde. Bordereau de suivi des déchets remis systématiquement, conforme à la réglementation SPANC du Grand Lyon.`,
      },
      {
        titre: 'Pompes de relevage des sous-sols sur la barre du Tonkin et au Carré de Soie',
        serviceSlug: 'pompe-relevage',
        texte: `Les barres résidentielles du Tonkin (1970) et certaines copropriétés récentes du Carré de Soie sont en partie sous le niveau du tout-à-l'égout collectif. Les caves, les locaux à vélos, les buanderies communes y dépendent d'une pompe de relevage qui remonte les eaux usées vers la canalisation publique. La cause numéro un de panne que nous voyons dans le secteur : la crépine d'aspiration colmatée par le calcaire de l'eau dure lyonnaise, ou le flotteur bloqué par les mêmes dépôts. Quand cette pompe lâche un samedi soir, le sous-sol commun se remplit en quelques heures. Nous remplaçons en urgence les pompes équivalentes en stock camion (eaux usées, eaux vannes avec broyeur, eaux pluviales) et remettons en service le jour même. Garantie pièces et main d'œuvre 1 an sur tout remplacement.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture s'étend sur l'ensemble du territoire de Villeurbanne, du centre des Gratte-Ciel aux franges du Carré de Soie. Nous intervenons aussi sur les communes limitrophes immédiates côté Lyon (3ᵉ, 6ᵉ) et côté Vaulx-en-Velin. Les délais varient légèrement selon la zone — plus rapides en cœur de ville, légèrement plus longs aux Buers et au Carré de Soie — mais nous restons systématiquement dans une fourchette d'intervention sous l'heure, week-ends et jours fériés inclus. Notre équipe d'artisans plombiers urgence est joignable 24h/7j au standard.`,
      liste: [
        'Gratte-Ciel et place Lazare-Goujon',
        'Charpennes',
        'Tonkin',
        'Cusset',
        'Ferrandière',
        'Carré de Soie',
        'La Soie',
        'Les Buers',
        'Saint-Jean',
        'Cyprian-Les-Brosses',
      ],
    },

    conseilsLocaux: `Villeurbanne combine plusieurs contraintes locales spécifiques. La proximité du Rhône et la présence de nappes alluviales font que certains secteurs (Carré de Soie, La Soie) ont une nappe phréatique relativement haute : tout dégât des eaux y demande une réaction rapide pour ne pas saturer le sol. L'eau de la métropole, dure et calcaire, accélère le colmatage des crépines de pompes de relevage et le dépôt de tartre sur les parois des évacuations cuisine, surtout en hiver où les graisses figent : un détartrage annuel des pompes et un curage préventif des colonnes cuisine en septembre divisent par deux le risque de panne hivernale. Pour les copropriétés étudiantes du Tonkin et de Cusset, un affichage dans les cuisines partagées rappelant ce qu'on ne doit pas jeter dans l'évier (huiles, marc, lingettes, restes solides) réduit considérablement le nombre de bouchons. Pour les commerces de restauration, la vidange préventive du bac à graisses toutes les 6 à 8 semaines est non négociable. Côté usagers résidentiels, un nettoyage trimestriel des bondes de douche et de baignoire avec un dégraissant alimentaire élimine 80 % des bouchons.`,

    delais: `Notre équipe d'artisans plombiers est positionnée entre Lyon et Villeurbanne, avec deux véhicules en astreinte permanente sur la rive gauche. Cela nous permet de tenir un délai moyen d'intervention de 45 à 55 minutes sur l'ensemble de la commune en journée. La nuit et les week-ends, nous maintenons une astreinte technique avec véhicule équipé prêt à partir, et le délai moyen reste autour de 60 minutes. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation et de partir avec le bon matériel : un débouchage WC ne demande pas le même camion qu'un dépannage de pompe de relevage. Cette préparation transforme souvent une intervention longue en une intervention rapide.`,

    faq: [
      {
        question: 'Pourquoi les copropriétés étudiantes du Tonkin ont-elles plus de bouchons cuisine ?',
        reponse: `La rotation rapide des occupants et l'usage intensif de cuisines partagées multiplient les rejets non maîtrisés (graisses, marc, résidus). Un débouchage local règle l'urgence, mais un curage préventif annuel des colonnes communes et un affichage de bonnes pratiques en cuisine réduisent fortement la fréquence des urgences.`,
      },
      {
        question: 'Mon bac à graisses de restaurant déborde toutes les 5 semaines, que faire ?',
        reponse: `Un bac qui sature en moins de 6 semaines est sous-dimensionné par rapport à votre activité. Nous évaluons votre volume journalier traité, contrôlons la cloison siphoïde et le clapet anti-retour, et recommandons soit un planning de vidange plus serré, soit le remplacement par un bac de capacité supérieure.`,
      },
      {
        question: `Quel est le tarif d'une inspection caméra HD avant rénovation aux Gratte-Ciel ?`,
        reponse: `Le coût dépend de la longueur du réseau et du nombre de branchements à inspecter. Pour un appartement standard avec colonne commune et deux antennes privatives, comptez entre 149 € et 249 € TTC selon la complexité. Tarif annoncé avant intervention via la borne en ligne.`,
      },
      {
        question: `Ma pompe de relevage en sous-sol se met en sécurité régulièrement, est-ce grave ?`,
        reponse: `Mise en sécurité répétée = pompe qui tire trop ou qui détecte une anomalie. Les causes fréquentes sont la crépine colmatée par le calcaire, le flotteur bloqué, ou un sous-dimensionnement initial. Notre diagnostic sur place identifie la cause, et nous tarifons en 4 clics avant intervention.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Villeurbanne ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Villeurbanne, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 60 minutes pour le centre. Tarif transparent annoncé avant déplacement, devis gratuit pour les cas hors standard.`,
      },
    ],

    conclusion: `Villeurbanne demande une plomberie qui sait conjuguer plusieurs typologies de bâti — l'art-déco des Gratte-Ciel, les barres du Tonkin, les immeubles 1900 de Charpennes, le neuf du Carré de Soie. Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard, un devis personnalisé sans engagement est proposé en complément. Notre équipe d'artisans plombiers urgence répond 24h/7j et intervient en moins d'une heure dans la majorité des cas, week-ends inclus.`,
  },

  // ============================================================
  // VÉNISSIEUX — Minguettes, Parilly, ZAC, restaurants
  // ============================================================
  venissieux: {
    intro: `Vénissieux, 66 000 habitants, occupe une position centrale au sud-est de la Métropole de Lyon, à la frontière immédiate du 8ᵉ arrondissement lyonnais. La ville porte une histoire industrielle forte — usines Berliet, Renault Trucks, RVI — qui a façonné son tissu urbain : grands ensembles ouvriers des Minguettes construits dans les années 1960-70, désormais en plein renouvellement urbain ANRU, lotissements pavillonnaires plus à l'est, ZAC Montchaud et zones d'activité Parilly qui concentrent commerces, restauration et logistique. Cette histoire industrielle laisse des traces concrètes dans le sous-sol vénissian : les réseaux d'évacuation des grands ensembles ANRU sont longs et complexes, avec des colonnes communes desservant 15 à 20 logements, et des réseaux secondaires parfois en fibrociment-amiante qui arrivent en fin de vie technique. À l'opposé, les pavillons de l'est et les ZAC commerciales ont des réseaux plus courts et plus modernes, mais avec une densité particulière de bacs à graisses (restaurants) et de pompes de relevage (sous-sols logistiques). Notre activité de plombier déboucheur urgence couvre l'ensemble de Vénissieux, avec un délai moyen d'intervention de 50 à 60 minutes en journée.`,

    habitat: `Le bâti vénissian se découpe en quatre grandes typologies, chacune avec ses contraintes plomberie. Les Minguettes (Léo Lagrange, Pyramide, Monmousseau) regroupent des tours et barres ANRU des années 1960-70, dont une partie est en cours de démolition-reconstruction : les colonnes communes y desservent souvent 15 à 20 logements et un seul bouchon impacte tout l'immeuble en cascade. Le centre-ville (Léo Lagrange, Vénissy) mêle copropriétés modernes et immeubles d'angle plus anciens, avec des réseaux mixtes fonte/PVC. Le secteur Parilly et Moulin-à-Vent, près du parc de Parilly, présente un mélange pavillonnaire et collectif, avec de nombreux restaurants et commerces équipés de bacs à graisses. Enfin, les zones pavillonnaires de l'est (Sept Chemins, Charréard) alignent des maisons individuelles 1960-90 avec branchements PVC modernes et quelques fosses toutes eaux résiduelles dans les franges les plus excentrées. Cette diversité demande une boîte à outils complète : furet électrique pour les colonnes étroites, hérisson rotatif, buse haute pression du camion hydrocureur, caméra HD pour le diagnostic vidéo. Nos techniciens connaissent la spécificité de chaque secteur.`,

    problemesFrequents: [
      {
        titre: 'Bouchons WC en cascade dans les colonnes communes des Minguettes',
        serviceSlug: 'debouchage',
        texte: `Les tours et barres ANRU des Minguettes (Léo Lagrange, Pyramide, Monmousseau) présentent une particularité technique : les colonnes d'eaux vannes desservent souvent 15 à 20 logements verticalement, et un seul bouchon en partie basse fait remonter les WC à plusieurs étages simultanément. Le symptôme typique : votre WC déborde alors qu'il n'a rien fait d'anormal — c'est en réalité l'évacuation de votre voisin du dessus qui refoule chez vous. Sur ces colonnes longues, un débouchage local au furet règle parfois le problème immédiat mais ne traite pas la cause. Notre intervention type combine un curage haute pression depuis le pied de colonne avec un camion hydrocureur, suivi d'un passage caméra HD pour cartographier les zones encrassées sur toute la hauteur. Nous travaillons régulièrement avec les bailleurs et syndics vénissians sur des programmes de curage préventif tous les 18 mois. Tarif transparent annoncé avant intervention via la borne en ligne.`,
      },
      {
        titre: 'Inspection caméra HD pour litiges en copropriété au centre',
        serviceSlug: 'inspection-camera',
        texte: `Les copropriétés du centre de Vénissieux présentent fréquemment des litiges entre copropriétaires sur la responsabilité des bouchons : qui paie quand l'évier de Mme X rejette sur la cuisine de M. Y au-dessous ? Notre diagnostic vidéo HD avec localisation précise des défauts sur le réseau permet de trancher de façon objective : si le bouchon est sur la partie privative, c'est à charge du copropriétaire concerné ; s'il est sur la colonne commune, c'est aux parties communes. Ce rapport vidéo horodaté avec mesure métrique fait foi devant le syndic, et plus rarement devant le tribunal d'instance. Nous intervenons aussi pour les diagnostics avant achat sur appartements anciens et pour les expertises assurance suite à dégât des eaux. Compter 60 à 90 minutes pour une inspection standard.`,
      },
      {
        titre: 'Vidanges de bacs à graisses pour les restaurants et fast-foods de Parilly',
        serviceSlug: 'fosse-septique',
        texte: `Le secteur Parilly, la ZAC Montchaud et les abords du parc concentrent une forte densité de restaurants, brasseries, fast-foods et restauration collective d'entreprise. Tous ces établissements doivent disposer d'un bac à graisses dimensionné, conforme à la réglementation sanitaire, et le faire vidanger toutes les 6 à 8 semaines selon le volume traité. Une vidange négligée se traduit par un débordement en plein service, des odeurs en salle, et parfois la fermeture administrative imposée par la commission d'hygiène. Nous intervenons avant l'ouverture du restaurant — généralement entre 6 h et 8 h du matin — pour un pompage complet du bac, un nettoyage haute pression des parois, et un contrôle du clapet anti-retour et de la cloison siphoïde. Bordereau de suivi des déchets remis systématiquement, conforme aux exigences SPANC du Grand Lyon.`,
      },
      {
        titre: 'Pompes de relevage en sous-sols logistiques de la ZI Vénissieux',
        serviceSlug: 'pompe-relevage',
        texte: `Les zones d'activité du sud de Vénissieux (ZI Bel-Air, Vénissy, abords de l'A7) concentrent des entrepôts logistiques, des locaux d'entreprise et des commerces dont les sous-sols dépendent de pompes de relevage industrielles pour évacuer eaux usées et eaux pluviales. Quand cette pompe lâche un week-end, l'activité s'arrête net dès le lundi matin. La cause numéro un que nous voyons : roue grippée par accumulation de fibres et de résidus solides, ou condensateur claqué après un orage estival. Nous intervenons en urgence avec des pompes industrielles équivalentes en stock camion (hauteur manométrique 5 à 12 m, débit 5 à 30 m³/h selon les modèles), et remettons en service le jour même dans la majorité des cas. Garantie pièces et main d'œuvre 1 an. Nous proposons aussi des contrats de maintenance préventive annuelle pour éviter ce type de panne aux moments les moins opportuns.`,
      },
    ],

    quartiers: {
      intro: `Notre activité couvre l'ensemble du territoire communal de Vénissieux, des Minguettes au sud aux pavillonnaires de l'est en passant par le centre et les zones d'activité. Nous intervenons aussi sur les communes limitrophes immédiates (Saint-Fons, Feyzin, Lyon 8ᵉ) avec lesquelles nous partageons plusieurs problématiques techniques. Les délais d'intervention varient légèrement selon la zone — plus rapides en cœur de ville, légèrement plus longs aux Sept Chemins ou en haut de Parilly — mais nous restons systématiquement dans une fourchette d'intervention sous 75 minutes, week-ends et jours fériés inclus. Notre standard plombier urgence est joignable 24h/7j.`,
      liste: [
        'Minguettes (Léo Lagrange, Pyramide)',
        'Monmousseau',
        'Centre-ville et Vénissy',
        'Parilly',
        'Moulin-à-Vent',
        'Charréard',
        'Sept Chemins',
        'Bel-Air',
        'Max Barel',
        'ZI Vénissieux',
      ],
    },

    conseilsLocaux: `Vénissieux combine plusieurs contraintes locales spécifiques. La forte densité de grands ensembles (Minguettes) impose une vigilance particulière aux colonnes communes : un seul logement qui jette des lingettes ou des restes graisseux dans l'évier impacte 15 à 20 voisins. Un affichage des bonnes pratiques en hall d'immeuble réduit nettement la fréquence des urgences. L'eau dure et calcaire de la métropole accélère le colmatage des crépines de pompe de relevage et le dépôt de tartre sur les parois cuisine, surtout en hiver où les graisses figent : un détartrage annuel des pompes et un curage préventif des colonnes en septembre divisent par deux le risque de panne hivernale. Pour les commerces de restauration de Parilly et de la ZAC Montchaud, la vidange préventive du bac à graisses toutes les 6 à 8 semaines est non négociable et obligatoire pour le maintien de l'agrément sanitaire. Côté usagers résidentiels, un nettoyage trimestriel des bondes de douche avec un dégraissant alimentaire élimine la majorité des bouchons. Pour les pompes de relevage en sous-sol pavillonnaire, un test mensuel par déclenchement manuel via un seau d'eau confirme le bon fonctionnement et évite la mauvaise surprise d'un samedi soir.`,

    delais: `Notre équipe d'artisans plombiers urgence est positionnée à proximité immédiate de Vénissieux, avec un véhicule en astreinte permanente sur la rive gauche et un autre vers le sud lyonnais. Cela nous permet de tenir un délai moyen d'intervention de 50 à 60 minutes en journée sur l'ensemble de la commune. La nuit et les week-ends, l'astreinte technique 24h/7j maintient un délai moyen autour de 65 à 75 minutes. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation : un débouchage WC ne demande pas le même camion qu'un dépannage de pompe de relevage industrielle. Cette préparation transforme souvent une intervention longue en une intervention rapide, avec un tarif annoncé avant déplacement.`,

    faq: [
      {
        question: 'Mon WC déborde aux Minguettes alors que je n\'ai rien fait, que se passe-t-il ?',
        reponse: `C'est très probablement un bouchon en pied de colonne commune qui fait remonter les eaux des étages supérieurs chez vous. Ne tentez pas de déboucher localement, vous aggraveriez la situation. Notre intervention typique : curage haute pression depuis le pied de colonne avec passage caméra HD de contrôle. Tarif transparent annoncé avant intervention.`,
      },
      {
        question: 'Le bac à graisses de mon restaurant à Parilly déborde toutes les 5 semaines, est-ce normal ?',
        reponse: `Un bac qui sature en moins de 6 semaines est sous-dimensionné par rapport à votre activité. Nous évaluons votre volume journalier traité, contrôlons la cloison siphoïde et le clapet anti-retour, et recommandons soit un planning de vidange plus serré, soit le remplacement par un bac de capacité supérieure conforme aux normes sanitaires.`,
      },
      {
        question: `Quel est le tarif d'un débouchage WC à Vénissieux ?`,
        reponse: `Notre tarif transparent pour un débouchage WC standard à Vénissieux démarre à 99 € TTC, avec un devis annoncé avant intervention. Pour un cas complexe (canalisation principale, refoulement en cascade, accès difficile aux Minguettes), la borne en ligne calcule un tarif personnalisé en quatre clics. Aucun frais caché.`,
      },
      {
        question: `Ma pompe de relevage en ZI Vénissieux disjoncte régulièrement, est-ce grave ?`,
        reponse: `Disjonction répétée = surcharge ou court-circuit. Causes fréquentes : roue bloquée par fibres ou résidus, condensateur claqué après orage, infiltration d'humidité dans le bobinage. Notre diagnostic électrique et mécanique sur place identifie la cause, et nous remplaçons en stock camion les pompes industrielles standard. Activité reprise dans la matinée.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Vénissieux ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Vénissieux, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 65 à 75 minutes pour le centre. Tarif transparent annoncé avant déplacement, devis gratuit pour les cas hors standard.`,
      },
    ],

    conclusion: `Vénissieux demande une plomberie qui sait conjuguer plusieurs réalités urbaines : grands ensembles ANRU à colonnes longues, pavillonnaires modernes, ZAC commerciales avec restaurants, zones logistiques. Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard, un devis personnalisé sans engagement est proposé en complément. Notre équipe d'artisans plombiers dépanneurs répond 24h/7j et intervient en moins d'une heure et demie sur l'ensemble du territoire communal.`,
  },

  // ============================================================
  // VAULX-EN-VELIN — Mas du Taureau, Carré de Soie, canal de Jonage
  // ============================================================
  'vaulx-en-velin': {
    intro: `Vaulx-en-Velin, 53 000 habitants, occupe une position stratégique à l'est immédiat de Lyon et de Villeurbanne, traversée par le canal de Jonage qui dérive le Rhône. La ville porte une histoire urbaine forte : le Mas du Taureau, grand ensemble construit dans les années 1970 et longtemps emblématique des défis sociaux de la périphérie lyonnaise, fait aujourd'hui l'objet d'un programme ANRU massif de renouvellement urbain — démolitions, reconstructions, requalification des espaces publics. La ville héberge aussi le Carré de Soie côté Vaulx, en pleine mutation tertiaire, le quartier ancien du Village avec ses pavillons d'origine ouvrière, et la zone industrielle Vaulx-Est tournée vers la logistique. Cette diversité de bâti — barres ANRU en transition, pavillonnaire 1900-1970, copropriétés neuves au Carré de Soie, entrepôts industriels — fait du métier de plombier déboucheur urgence à Vaulx-en-Velin un travail varié, où chaque secteur appelle un diagnostic spécifique. La proximité immédiate du canal de Jonage et les nappes alluviales associées ont par ailleurs une conséquence directe : les pompes de relevage sont nombreuses dans les sous-sols et leurs pannes constituent une part importante de nos urgences. Notre équipe d'artisans plombiers en astreinte 24h/7j couvre l'ensemble de la commune avec un délai moyen de 55 minutes en journée.`,

    habitat: `On peut distinguer quatre grands types d'habitat à Vaulx-en-Velin, qui correspondent à autant de problématiques plomberie. Le Mas du Taureau et les secteurs ANRU (Petit-Pont, Pré de l'Herpe) regroupent des barres et tours années 1970 partiellement démolies-reconstruites, avec des colonnes communes desservant 15 à 20 logements et des réseaux secondaires en fibrociment-amiante qui arrivent en fin de vie technique. Le Village, sur les berges du canal de Jonage, aligne des pavillons d'origine ouvrière 1900-1950, avec des branchements souvent en grès vernissé ou en fonte ancienne — un terrain où le diagnostic prime sur la force brute. Le Carré de Soie côté Vaulx, en pleine mutation, présente des copropriétés tertiaires et résidentielles récentes avec réseaux PVC modernes mais un nombre important de pompes de relevage en sous-sol vu la proximité de la nappe phréatique. La Soie et les zones d'activité Vaulx-Est concentrent enfin entrepôts logistiques et locaux industriels avec leurs propres postes de relevage industriels. Cette diversité demande une boîte à outils complète : furet électrique, hérisson rotatif, buse haute pression du camion hydrocureur, caméra HD pour le diagnostic vidéo. Nos techniciens varient l'outil selon le contexte rencontré.`,

    problemesFrequents: [
      {
        titre: 'Bouchons cuisine récidivants dans les colonnes communes du Mas du Taureau',
        serviceSlug: 'debouchage',
        texte: `Les barres ANRU du Mas du Taureau et des secteurs voisins (Petit-Pont, Pré de l'Herpe) présentent une particularité technique : les colonnes d'évacuation cuisine cumulent les rejets de 15 à 20 logements verticalement, et un seul bouchon en partie basse fait remonter les éviers à plusieurs étages simultanément. Le symptôme classique : votre évier se vide lentement alors que vos voisins du dessous voient remonter une eau grasse. Un débouchage local au furet règle parfois l'urgence ponctuelle mais ne traite pas la cause. Notre intervention type combine un curage haute pression depuis le pied de colonne avec un camion hydrocureur, suivi d'un passage caméra HD pour cartographier les zones encrassées. Nous travaillons régulièrement avec les bailleurs sociaux et syndics vaudais sur des programmes de curage préventif tous les 18 mois. Tarif transparent annoncé avant intervention via la borne en ligne, avec devis gratuit pour les cas complexes.`,
      },
      {
        titre: 'Inspection caméra HD avant rénovation au Village',
        serviceSlug: 'inspection-camera',
        texte: `Le quartier du Village, sur les berges du canal de Jonage, concentre des pavillons d'origine ouvrière construits entre 1900 et 1950, dont les réseaux d'évacuation enterrés sont souvent en grès vernissé ou en fonte ancienne. Avant tout chantier de rénovation lourde — extension, réfection cuisine, réfection complète assainissement — un diagnostic vidéo HD met en évidence les segments fissurés, les contre-pentes, les intrusions racinaires et les piquages artisanaux qui se sont multipliés au fil des décennies. Notre inspection caméra avec localisateur en surface jusqu'à 60 mètres permet de tracer précisément le réseau existant et de chiffrer ce qui doit être repris. Le rapport vidéo horodaté avec mesure métrique sert de pièce de référence pour le maître d'œuvre. Compter 90 minutes pour un pavillon standard, rapport remis sur place ou par mail dans la journée.`,
      },
      {
        titre: 'Vidanges de fosses et bacs à graisses ZI Vaulx-Est',
        serviceSlug: 'fosse-septique',
        texte: `Les zones d'activité de Vaulx-Est et certaines franges péri-urbaines de la commune restent en assainissement non collectif ou disposent d'installations spécifiques (bacs à graisses pour les restaurants d'entreprise, séparateurs hydrocarbures pour les garages et stations-service, micro-stations pour les locaux isolés). La réglementation SPANC du Grand Lyon impose des fréquences de vidange spécifiques : 6 à 8 semaines pour un bac à graisses de restauration, 4 ans en moyenne pour une fosse toutes eaux, contrôle annuel pour un séparateur hydrocarbures. Nous intervenons avec un camion adapté à chaque type d'installation, et remettons systématiquement le bordereau de suivi des déchets, conforme aux exigences SPANC. Pour les restaurants, nous proposons un planning de vidanges préventives qui évite les débordements en plein service.`,
      },
      {
        titre: 'Pompes de relevage en sous-sols proches du canal de Jonage',
        serviceSlug: 'pompe-relevage',
        texte: `La proximité immédiate du canal de Jonage, qui dérive le Rhône, place une grande partie de Vaulx-en-Velin sur une nappe phréatique haute. Conséquence : les caves, sous-sols et locaux techniques en pied d'immeuble dépendent presque toujours de pompes de relevage pour évacuer eaux usées et eaux pluviales. Au Carré de Soie, à La Soie, dans les secteurs proches du canal, ces pompes travaillent en quasi-permanence et leur durée de vie est plus courte qu'ailleurs. La cause numéro un de panne : la crépine d'aspiration colmatée par le calcaire de l'eau dure de la métropole, ou le flotteur bloqué par les mêmes dépôts. Quand cette pompe lâche un samedi soir, le sous-sol se remplit en quelques heures. Nous remplaçons en urgence les pompes équivalentes en stock camion (eaux usées, eaux vannes avec broyeur, eaux pluviales) et remettons en service le jour même. Garantie pièces et main d'œuvre 1 an sur tout remplacement.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Vaulx-en-Velin inclut le Mas du Taureau, le Village, La Soie, le Carré de Soie côté Vaulx, et les zones d'activité industrielles Vaulx-Est. Nous intervenons aussi sur les communes limitrophes immédiates (Villeurbanne, Bron, Décines-Charpieu) avec lesquelles nous partageons plusieurs problématiques techniques liées à la nappe phréatique. Les délais d'intervention varient légèrement selon la zone — plus rapides au Carré de Soie, légèrement plus longs en bordure de canal — mais nous restons systématiquement dans une fourchette d'intervention sous 75 minutes, week-ends et jours fériés inclus. Notre standard plombier urgence est joignable 24h/7j.`,
      liste: [
        'Mas du Taureau',
        'Le Village',
        'La Soie',
        'Carré de Soie (côté Vaulx)',
        'Petit-Pont',
        'Pré de l\'Herpe',
        'Cachin',
        'Grappinière',
        'ZI Vaulx-Est',
        'Genêts',
      ],
    },

    conseilsLocaux: `Vaulx-en-Velin combine plusieurs contraintes locales spécifiques à anticiper. La proximité immédiate du canal de Jonage et la nappe phréatique haute imposent une vigilance particulière sur les sous-sols : un dégât des eaux en cave saturée évacue mal et peut endommager les fondations rapidement. Si vous habitez en pied d'immeuble ou en pavillon avec sous-sol semi-enterré, vérifiez deux fois par an le bon fonctionnement de votre pompe de relevage en versant manuellement quelques litres d'eau dans le bac : si elle ne se déclenche pas, contactez-nous avant la prochaine pluie d'orage. L'eau dure et calcaire de la métropole accélère le colmatage des crépines de pompe et le dépôt de tartre sur les parois cuisine, surtout en hiver où les graisses figent : un détartrage annuel des pompes et un curage préventif des colonnes en septembre divisent par deux le risque de panne hivernale. Pour les copropriétés du Mas du Taureau et des secteurs ANRU, un affichage dans les halls rappelant ce qu'on ne doit pas jeter dans l'évier ni dans les WC (lingettes, marc de café, restes graisseux, papier essuie-tout) réduit considérablement la fréquence des bouchons en colonne commune. Côté usagers résidentiels, un nettoyage trimestriel des bondes de douche et de baignoire avec un dégraissant alimentaire élimine la majorité des bouchons.`,

    delais: `Notre équipe d'artisans plombiers urgence est positionnée à proximité immédiate de Vaulx-en-Velin, avec un véhicule en astreinte permanente sur la rive gauche du Rhône. Cela nous permet de tenir un délai moyen d'intervention de 55 à 65 minutes en journée sur l'ensemble de la commune. La nuit et les week-ends, l'astreinte technique 24h/7j maintient un délai moyen autour de 70 à 80 minutes selon les conditions de circulation. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation : un débouchage WC ne demande pas le même camion qu'un dépannage de pompe de relevage industrielle ou qu'un curage haute pression. Cette préparation transforme souvent une intervention longue en une intervention rapide, avec un tarif transparent annoncé avant déplacement.`,

    faq: [
      {
        question: 'Mon évier déborde au Mas du Taureau alors que je n\'ai rien fait, que se passe-t-il ?',
        reponse: `C'est très probablement un bouchon en pied de colonne commune qui fait remonter les eaux des étages supérieurs chez vous. Ne tentez pas de déboucher localement, vous aggraveriez la situation. Notre intervention typique : curage haute pression depuis le pied de colonne avec passage caméra HD de contrôle. Tarif annoncé avant intervention.`,
      },
      {
        question: 'Ma pompe de relevage au Carré de Soie tombe en panne tous les 2 ans, est-ce normal ?',
        reponse: `Pour une pompe standard installée dans un sous-sol proche du canal de Jonage avec nappe haute, oui : elle travaille beaucoup et se colmate vite avec l'eau dure. Une pompe spécifiquement adaptée aux eaux chargées avec turbine vortex et un détartrage annuel allongent significativement la durée de vie. Nous proposons des contrats de maintenance préventive.`,
      },
      {
        question: `Quel est le tarif d'une vidange de bac à graisses pour mon restaurant ZI Vaulx-Est ?`,
        reponse: `Le tarif dépend du volume du bac (1000 à 5000 L typiquement) et de la fréquence d'intervention. Pour un bac standard de 1500 L vidangé toutes les 6 semaines, comptez 249 à 349 € TTC par passage, bordereau SPANC inclus. Tarif annoncé avant intervention via la borne en ligne, devis gratuit pour les contrats récurrents.`,
      },
      {
        question: `J'achète un pavillon au Village, faut-il un diagnostic vidéo des évacuations ?`,
        reponse: `Pas légalement obligatoire, mais fortement recommandé sur les pavillons construits avant 1970, fréquents au Village. L'inspection caméra HD chiffre l'état réel des canalisations enterrées (souvent en grès) et détecte les contre-pentes ou intrusions racinaires invisibles autrement. Rapport vidéo opposable utilisable en négociation devant notaire.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Vaulx-en-Velin ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Vaulx-en-Velin, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 70 à 80 minutes. Tarif transparent annoncé avant déplacement, devis gratuit pour les cas hors standard.`,
      },
    ],

    conclusion: `Vaulx-en-Velin demande une plomberie qui sait conjuguer plusieurs réalités urbaines : barres ANRU en mutation, pavillonnaire ouvrier sur les berges du canal de Jonage, copropriétés neuves au Carré de Soie, zones logistiques industrielles. Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard, un devis personnalisé sans engagement est proposé en complément. Notre équipe d'artisans plombiers dépanneurs répond 24h/7j et intervient en moins d'une heure et demie sur l'ensemble du territoire communal.`,
  },

  // ============================================================
  // SAINT-PRIEST — Bel-Air, Mi-Plaine, Berliet, est lyonnais
  // ============================================================
  'saint-priest': {
    intro: `Saint-Priest, 47 000 habitants, occupe une position stratégique à l'est de Lyon, en bordure immédiate de la deuxième couronne de la Métropole. La ville porte une histoire industrielle marquante : les usines Berliet (devenues Renault Trucks puis Volvo Group) ont longtemps employé des milliers de salariés et façonné l'urbanisme local. Aujourd'hui, Saint-Priest combine un centre rénové autour de la place Salengro, des quartiers pavillonnaires étendus (Bel-Air, Manissieux, Hauts de Feuilly, Garibaldi), la ZI Mi-Plaine — l'une des plus grandes de la métropole — et des franges péri-urbaines à l'est qui touchent aux communes plus rurales du Grand Lyon. Cette diversité de bâti — maisons individuelles 1960-90 majoritaires, lotissements neufs récents, copropriétés modernes au centre, locaux industriels en ZI — fait du métier de plombier déboucheur urgence à Saint-Priest un travail varié. La proximité du Boulevard Urbain Est et de l'A43 facilite les déplacements de nos camions hydrocureurs depuis Lyon. Les sols à dominante alluviale et la nappe phréatique relativement haute dans certains secteurs imposent par ailleurs une vigilance particulière sur les pompes de relevage. Notre équipe d'artisans plombiers en astreinte 24h/7j couvre l'ensemble de la commune avec un délai moyen de 55 à 65 minutes en journée.`,

    habitat: `L'habitat san-priot se concentre autour de quatre grands ensembles. Le centre rénové (Place Salengro, Manissieux centre, secteur Mairie) regroupe des copropriétés modernes des années 1990-2010 et quelques immeubles plus anciens reconfigurés, avec des réseaux PVC majoritairement modernes. Les quartiers pavillonnaires (Bel-Air, Garibaldi, Manissieux, Hauts de Feuilly) représentent l'essentiel du parc résidentiel : maisons individuelles des années 1960 à 2000, le plus souvent raccordées au tout-à-l'égout collectif, mais avec des branchements parfois longs (20 à 40 mètres) qui peuvent générer des contre-pentes ou des fissures à terme. La ZI Mi-Plaine et la ZAC du Berliet concentrent locaux industriels, entrepôts logistiques, restaurants d'entreprise — autant de configurations spécifiques avec bacs à graisses, séparateurs hydrocarbures et pompes de relevage industrielles. Enfin, les franges péri-urbaines (côté Mions, Chassieu) abritent encore quelques propriétés en assainissement non collectif avec fosses toutes eaux ou micro-stations. Cette diversité oblige à une vraie polyvalence : nos techniciens sont formés au débouchage en pavillonnaire, au diagnostic vidéo en copropriété, à la vidange de fosses en péri-urbain et au dépannage de pompes industrielles en ZI.`,

    problemesFrequents: [
      {
        titre: 'Bouchons cuisine dans les pavillons de Bel-Air et Manissieux',
        serviceSlug: 'debouchage',
        texte: `Les pavillons des années 1970-1990 de Bel-Air, Manissieux et Garibaldi présentent un problème classique mais sous-diagnostiqué : les branchements pavillonnaires longs (20 à 40 mètres jusqu'au regard du tout-à-l'égout) sont vulnérables aux dépôts graisseux qui s'accumulent au fil des années dans les coudes et les changements de pente. Le symptôme typique : votre évier se vide normalement pendant des années, puis progressivement plus lentement, jusqu'au jour où l'écoulement se bloque complètement. Le débouchage classique au furet règle l'urgence ponctuelle mais ne traite pas la cause en aval. Notre intervention type : curage haute pression depuis le regard du tout-à-l'égout avec camion hydrocureur, suivi d'un passage caméra HD pour confirmer la section libre sur toute la longueur. Tarif transparent annoncé avant intervention via la borne en ligne, avec devis gratuit pour les cas complexes nécessitant un coupe-racines ou une réparation localisée.`,
      },
      {
        titre: 'Inspection caméra HD avant achat sur les pavillons anciens',
        serviceSlug: 'inspection-camera',
        texte: `Les pavillons construits avant 1980 à Saint-Priest, fréquents à Bel-Air, Manissieux et certains secteurs de Garibaldi, sont parmi les biens les plus sensibles à inspecter avant achat. Les notaires lyonnais demandent désormais quasi systématiquement un état du réseau d'évacuation enterré sur ces biens : la plupart des canalisations d'origine sont en fibrociment-amiante, en grès vernissé ou en fonte, avec des contre-pentes héritées de remblais successifs et parfois des intrusions racinaires invisibles autrement. Notre inspection caméra HD jusqu'à 60 mètres avec localisateur permet de tracer précisément le réseau, mesurer les pentes, identifier les zones à reprendre et fournir un rapport opposable utilisable en négociation devant notaire. Compter 90 à 120 minutes pour un pavillon standard, rapport vidéo horodaté remis sur place ou par mail dans la journée.`,
      },
      {
        titre: 'Vidanges de bacs à graisses ZI Mi-Plaine et restaurants Berliet',
        serviceSlug: 'fosse-septique',
        texte: `La ZI Mi-Plaine, le secteur Berliet et la ZAC des Hauts de Feuilly concentrent une forte densité de restaurants d'entreprise, fast-foods, brasseries et restauration collective. Tous ces établissements doivent disposer d'un bac à graisses dimensionné, conforme à la réglementation sanitaire, et le faire vidanger toutes les 6 à 8 semaines selon le volume traité. Une vidange négligée se traduit par un débordement en plein service, des odeurs en salle, et parfois la fermeture administrative imposée par la commission d'hygiène. Nous intervenons avant l'ouverture du restaurant — généralement entre 6 h et 8 h — pour un pompage complet, un nettoyage haute pression des parois et un contrôle du clapet anti-retour. Bordereau de suivi des déchets remis systématiquement, conforme aux exigences SPANC. Pour les franges péri-urbaines en assainissement non collectif (côté Mions, Chassieu), nous intervenons aussi sur fosses toutes eaux et micro-stations.`,
      },
      {
        titre: 'Pompes de relevage industrielles en ZI Mi-Plaine',
        serviceSlug: 'pompe-relevage',
        texte: `La ZI Mi-Plaine, l'une des plus vastes zones d'activité de la Métropole de Lyon, concentre des dizaines d'entrepôts logistiques, locaux d'entreprise, commerces et restaurants dont les sous-sols dépendent de pompes de relevage industrielles pour évacuer eaux usées et eaux pluviales. Quand cette pompe lâche un week-end, l'activité s'arrête net dès le lundi matin avec des conséquences économiques importantes. La cause numéro un que nous voyons : roue grippée par accumulation de fibres et résidus solides, ou condensateur claqué après un orage estival violent. Nous intervenons en urgence avec des pompes industrielles équivalentes en stock camion (hauteur manométrique 5 à 12 m, débit 5 à 30 m³/h), et remettons en service le jour même dans la majorité des cas. Garantie pièces et main d'œuvre 1 an. Nous proposons des contrats de maintenance préventive annuelle, particulièrement adaptés aux locaux logistiques et industriels où une panne se traduit immédiatement en perte d'activité.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Saint-Priest inclut le centre rénové, l'ensemble des quartiers pavillonnaires (Bel-Air, Manissieux, Garibaldi, Hauts de Feuilly), la ZI Mi-Plaine, le secteur Berliet et les franges péri-urbaines. Nous intervenons aussi sur les communes limitrophes immédiates (Lyon 8ᵉ, Bron, Vénissieux, Mions, Chassieu) avec lesquelles nous partageons plusieurs problématiques techniques. Les délais d'intervention varient légèrement selon la zone — plus rapides dans le centre et la ZI, légèrement plus longs aux Hauts de Feuilly — mais nous restons systématiquement dans une fourchette d'intervention sous 80 minutes, week-ends et jours fériés inclus. Notre standard plombier urgence est joignable 24h/7j.`,
      liste: [
        'Centre rénové (Place Salengro)',
        'Bel-Air',
        'Manissieux',
        'Garibaldi',
        'Hauts de Feuilly',
        'Revaison',
        'Berliet (ZAC)',
        'ZI Mi-Plaine',
        'Marendiers',
        'Village (centre ancien)',
      ],
    },

    conseilsLocaux: `Saint-Priest combine plusieurs contraintes locales spécifiques à anticiper. La nappe phréatique relativement haute dans certains secteurs (notamment côté Mi-Plaine et bordures est) impose une vigilance particulière sur les pompes de relevage : un test mensuel du flotteur en versant manuellement quelques litres d'eau dans le bac confirme le bon fonctionnement et évite la mauvaise surprise d'un samedi soir. L'eau dure et calcaire de la métropole accélère le colmatage des crépines et le dépôt de tartre sur les parois cuisine, surtout en hiver où les graisses figent : un détartrage annuel des pompes et un curage préventif des branchements pavillonnaires en septembre divisent par deux le risque de panne hivernale. Pour les commerces de la ZI Mi-Plaine, la vidange préventive du bac à graisses toutes les 6 à 8 semaines est non négociable et obligatoire pour le maintien de l'agrément sanitaire. Côté usagers résidentiels en pavillonnaire, attention aux racines des grands arbres (peupliers, marronniers, noyers) plantés à proximité des branchements enterrés : un arbre adulte peut envoyer ses racines dans une canalisation fissurée à 8 mètres de distance et provoquer un bouchon récurrent qui ne se résout durablement qu'avec un coupe-racines suivi d'une réparation. Les épisodes orageux estivaux peuvent par ailleurs saturer les réseaux pluviaux : vérifiez avant la saison que vos clapets anti-retour fonctionnent.`,

    delais: `Notre équipe d'artisans plombiers urgence est positionnée à proximité immédiate de Saint-Priest, avec un véhicule en astreinte permanente sur la rive gauche du Rhône et un autre orienté sud-est lyonnais. Cela nous permet de tenir un délai moyen d'intervention de 55 à 65 minutes en journée sur l'ensemble de la commune, légèrement plus pour les Hauts de Feuilly et les franges péri-urbaines. La nuit et les week-ends, l'astreinte technique 24h/7j maintient un délai moyen autour de 70 à 85 minutes selon les conditions de circulation sur l'A43 et le BUE. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation : un débouchage WC ne demande pas le même camion qu'un dépannage de pompe industrielle ou qu'un curage haute pression. Cette préparation transforme souvent une intervention longue en une intervention rapide.`,

    faq: [
      {
        question: `J'ai des racines qui bouchent mon évacuation pavillonnaire à Bel-Air, est-ce récidivant ?`,
        reponse: `Oui si la conduite endommagée n'est pas réparée. Notre coupe-racines élimine la racine actuelle, mais le joint ou la fissure qui l'a laissée entrer reste. Le seul remède définitif est de remplacer le tronçon concerné, identifié précisément par inspection caméra HD. Tarif annoncé avant intervention.`,
      },
      {
        question: 'Ma pompe de relevage en ZI Mi-Plaine disjoncte régulièrement, est-ce grave ?',
        reponse: `Disjonction répétée = surcharge ou court-circuit. Causes fréquentes : roue bloquée par fibres ou résidus, condensateur claqué après orage, infiltration d'humidité dans le bobinage. Notre diagnostic électrique et mécanique sur place identifie la cause, et nous remplaçons en stock camion les pompes industrielles standard. Activité reprise dans la matinée.`,
      },
      {
        question: `Quel est le tarif d'un débouchage de canalisation principale à Saint-Priest ?`,
        reponse: `Notre tarif transparent pour un débouchage de canalisation principale au camion hydrocureur démarre à 199 € TTC à Saint-Priest, devis annoncé avant intervention. Pour un cas avec coupe-racines ou très long métrage (>30 m), la borne en ligne calcule un tarif personnalisé en 4 clics. Aucun frais caché.`,
      },
      {
        question: `Le bac à graisses de mon restaurant Mi-Plaine déborde toutes les 5 semaines, que faire ?`,
        reponse: `Un bac qui sature en moins de 6 semaines est sous-dimensionné. Nous évaluons votre volume journalier traité, contrôlons la cloison siphoïde et le clapet anti-retour, et recommandons soit un planning de vidange plus serré, soit le remplacement par un bac de capacité supérieure conforme aux normes sanitaires.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Saint-Priest ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Saint-Priest, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 70 à 85 minutes pour le centre. Tarif transparent annoncé avant déplacement, devis gratuit pour les cas hors standard.`,
      },
    ],

    conclusion: `Saint-Priest demande une plomberie qui sait conjuguer plusieurs réalités urbaines : pavillonnaire dominant des années 1960-90 avec branchements longs, copropriétés modernes au centre, ZI Mi-Plaine industrielle et logistique, franges péri-urbaines en assainissement non collectif. Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard — coupe-racines, pompe industrielle, vidange professionnelle — un devis personnalisé sans engagement est proposé. Notre équipe d'artisans plombiers dépanneurs répond 24h/7j et intervient en moins d'une heure et demie sur l'ensemble du territoire communal et sur les communes limitrophes.`,
  },

  // ============================================================
  // CALUIRE-ET-CUIRE — coteaux nord, Bissardon, Margnolles, pentes
  // ============================================================
  'caluire-et-cuire': {
    intro: `Caluire-et-Cuire, 43 000 habitants, occupe une position singulière sur les coteaux nord de Lyon, entre Saône et Rhône, en surplomb direct du 4ᵉ arrondissement et de la Croix-Rousse. La ville s'étire sur un terrain vallonné, ponctué de pentes parfois vertigineuses, qui dessine une géographie urbaine très différente de celle des plaines de la rive gauche. Cette topographie a une conséquence directe pour la plomberie : les contre-pentes, les ruptures de niveau et les pompes de relevage en sous-sol sont des constantes du métier ici. Le tissu urbain caluirard combine plusieurs réalités : maisons bourgeoises sur les hauteurs (Bissardon, Vassieux, Cuire-le-Haut) avec terrains paysagers et installations parfois centenaires, copropriétés des années 1950-2000 sur les boulevards en bas (Margnolles, Saint-Clair), pavillonnaires plus modernes sur Crépieux-la-Pape côté Saône, et quelques zones plus rurales résiduelles côté Caluire-le-Haut. La proximité immédiate de Lyon-Croix-Rousse via la passerelle ou le pont Schuman fait de Caluire un véritable prolongement résidentiel haut de gamme du 6ᵉ. Notre équipe d'artisans plombiers urgence en astreinte 24h/7j couvre l'ensemble de la commune avec un délai moyen de 50 à 60 minutes en journée.`,

    habitat: `L'habitat caluirard se découpe en quatre grands ensembles. Les coteaux résidentiels (Bissardon, Vassieux, Cuire-le-Haut, Le Vernay) regroupent des maisons bourgeoises construites entre 1880 et 1960, avec des terrains paysagers, des installations parfois centenaires (canalisations en grès vernissé, fonte ancienne) et des configurations héritées des transformations successives. Ces propriétés combinent souvent un raccordement au tout-à-l'égout pour les eaux usées et un système autonome pour les eaux pluviales, parfois ancien. Les boulevards en bas (Margnolles, Saint-Clair, La Tête d'Or côté Caluire) concentrent des copropriétés des années 1950-2000, souvent en immeubles d'angle avec colonnes communes desservant 6 à 12 logements. Saint-Clair, en bord de Saône, présente des sous-sols à risque sur la nappe alluviale, avec des pompes de relevage indispensables. Crépieux-la-Pape, prolongement nord près du Rhône, propose un mélange pavillonnaire moderne et copropriétés récentes. Enfin, Cuire-le-Haut conserve quelques propriétés résiduelles en assainissement non collectif sur les franges les plus reculées. Cette diversité oblige à une polyvalence technique : nos plombiers déboucheurs traitent aussi bien les colonnes communes en bas que les fosses individuelles en haut.`,

    problemesFrequents: [
      {
        titre: 'Bouchons gravitaires sur les pentes raides de Bissardon et Vassieux',
        serviceSlug: 'debouchage',
        texte: `Les pentes vertigineuses des coteaux de Caluire (Bissardon, Vassieux, Cuire-le-Haut) imposent aux canalisations d'évacuation des contraintes hydrauliques particulières : l'eau s'écoule vite, mais les matières solides peuvent au contraire être plaquées contre les parois aux changements de pente, formant des bouchons qui résistent au passage de l'eau seule. Le symptôme classique : votre WC s'évacue normalement la plupart du temps, puis brutalement déborde sans cause apparente. Sur ces terrains, un débouchage local au furet est rarement suffisant — la cause est plus loin, sur un coude ou un changement de pente. Notre intervention type : curage haute pression depuis le regard de pied de pente avec camion hydrocureur, suivi d'un passage caméra HD pour cartographier les zones à risque. Tarif transparent annoncé avant intervention, avec devis gratuit pour les cas complexes nécessitant un coupe-racines (les jardins paysagers de Bissardon abritent souvent de grands arbres dont les racines envahissent les canalisations enterrées).`,
      },
      {
        titre: 'Inspection caméra HD avant achat sur les maisons bourgeoises',
        serviceSlug: 'inspection-camera',
        texte: `Les maisons bourgeoises du coteau caluirard (Bissardon, Vassieux, Le Vernay, Cuire-le-Haut) sont parmi les biens les plus sensibles à inspecter avant achat sur la Métropole de Lyon. Construites entre 1880 et 1960, elles ont presque toutes subi plusieurs générations d'extensions et de rénovations, avec des évacuations qui se sont ajoutées les unes aux autres au fil des décennies. Les contre-pentes héritées de remblais successifs, les piquages improvisés sur d'anciennes fosses désaffectées, les jonctions sur des canalisations en grès vernissé qui se brisent sans signe visible — tout cela est invisible en surface mais sera coûteux à corriger après acquisition. Notre inspection caméra HD jusqu'à 60 mètres avec localisateur permet de tracer précisément le réseau, identifier les zones à reprendre et fournir un rapport opposable utilisable en négociation devant notaire. Un document souvent décisif pour ces biens à fort caractère patrimonial mais à plomberie capricieuse.`,
      },
      {
        titre: 'Vidanges de fosses dans les franges de Cuire-le-Haut',
        serviceSlug: 'fosse-septique',
        texte: `Les franges les plus reculées de Cuire-le-Haut et certaines propriétés isolées sur les hauteurs conservent encore un assainissement non collectif, parce que le tout-à-l'égout n'a pas suivi sur tous les chemins privés ou les terrains éloignés des collecteurs principaux. Les fosses toutes eaux et micro-stations y sont fréquentes, dans des configurations parfois acrobatiques — fosse en surplomb par rapport au chemin d'accès, accès camion à plus de 40 mètres, pente forte qui complique le déroulé du flexible. Nous intervenons avec un camion adapté aux chemins étroits, et nous proposons systématiquement un examen visuel de l'épandage et du préfiltre. Bordereau de suivi des déchets remis systématiquement, conforme aux exigences SPANC du Grand Lyon. Pour les bacs à graisses des restaurants de bord de boulevard (Margnolles), nous proposons un planning de vidanges préventives toutes les 6 à 8 semaines.`,
      },
      {
        titre: 'Pompes de relevage des sous-sols à Saint-Clair sur la nappe de Saône',
        serviceSlug: 'pompe-relevage',
        texte: `Le quartier de Saint-Clair, en bord de Saône, présente une nappe phréatique alluviale relativement haute qui rend les caves, sous-sols et locaux techniques en pied d'immeuble dépendants de pompes de relevage pour évacuer eaux usées et eaux pluviales. La cause numéro un de panne que nous voyons : la crépine d'aspiration colmatée par le calcaire de l'eau dure de la métropole, ou le flotteur bloqué par les mêmes dépôts. Quand cette pompe lâche un samedi soir lors d'un orage estival, le sous-sol commun se remplit en quelques heures avec des conséquences souvent graves (caves voûtées qui prennent l'eau, biens stockés endommagés). Nous remplaçons en urgence les pompes équivalentes en stock camion (eaux usées domestiques, eaux vannes avec broyeur, eaux pluviales) et remettons en service le jour même dans la majorité des cas. Garantie pièces et main d'œuvre 1 an. Pour les installations neuves, nous dimensionnons en fonction de la hauteur manométrique réelle et du débit de pointe, avec une marge pour absorber les pics d'orage.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Caluire-et-Cuire inclut l'ensemble des coteaux résidentiels (Bissardon, Vassieux, Cuire-le-Haut, Le Vernay), les boulevards en bas (Margnolles, Saint-Clair), Crépieux-la-Pape côté Rhône-Saône et le centre. Nous intervenons aussi sur les communes limitrophes immédiates (Lyon 4ᵉ Croix-Rousse, Rillieux-la-Pape, Sathonay-Camp) avec lesquelles nous partageons plusieurs problématiques techniques. Les délais d'intervention varient légèrement selon la zone — plus rapides en bas, légèrement plus longs sur les hauteurs de Cuire-le-Haut où les chemins sont étroits — mais nous restons systématiquement dans une fourchette d'intervention sous 75 minutes, week-ends et jours fériés inclus.`,
      liste: [
        'Bissardon',
        'Margnolles',
        'Cuire-le-Bas',
        'Cuire-le-Haut',
        'Vassieux',
        'Saint-Clair',
        'Le Vernay',
        'Crépieux-la-Pape',
        'Montessuy',
        'Bois-Dieu',
      ],
    },

    conseilsLocaux: `Caluire-et-Cuire combine plusieurs contraintes locales spécifiques liées à sa topographie et à sa proximité avec les cours d'eau. Sur les coteaux, les pentes raides imposent une vigilance sur les contre-pentes héritées des travaux successifs : si vous achetez une maison bourgeoise sur Bissardon ou Vassieux, un diagnostic vidéo des canalisations enterrées est un investissement modeste rapporté au coût d'une mauvaise surprise dix ans plus tard. Les jardins paysagers de ces coteaux abritent souvent de grands arbres adultes (cèdres, marronniers, peupliers) dont les racines peuvent envahir les canalisations enterrées à 8 à 12 mètres de distance ; un coupe-racines préventif tous les 3 à 4 ans est recommandé sur les biens concernés. À Saint-Clair et Crépieux, la nappe phréatique haute impose une vérification annuelle des pompes de relevage : un test mensuel simple (verser quelques litres d'eau dans le bac et vérifier le déclenchement automatique) prend 30 secondes et évite la mauvaise surprise un dimanche d'orage. L'eau dure et calcaire de la métropole accélère par ailleurs le colmatage des crépines de pompe et le dépôt de tartre sur les parois cuisine, surtout en hiver où les graisses figent : un détartrage annuel des pompes et un curage préventif des colonnes en septembre divisent par deux le risque de panne hivernale. Pour les copropriétés des boulevards (Margnolles, Saint-Clair), un curage préventif des colonnes communes tous les 18 à 24 mois est très rentable.`,

    delais: `Notre équipe d'artisans plombiers urgence est positionnée à proximité immédiate de Caluire, avec un véhicule en astreinte permanente sur la rive droite du Rhône et un autre en orientation nord lyonnais. Cela nous permet de tenir un délai moyen d'intervention de 50 à 60 minutes en journée sur l'ensemble de la commune, légèrement plus pour les hauteurs de Cuire-le-Haut où les chemins sont étroits et parfois en pente raide. La nuit et les week-ends, l'astreinte technique 24h/7j maintient un délai moyen autour de 65 à 75 minutes. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation et d'anticiper les contraintes d'accès — chemins étroits, propriétés en pente raide, copropriétés sans place de stationnement. Cette préparation transforme souvent une intervention longue en une intervention rapide.`,

    faq: [
      {
        question: `J'ai des racines qui envahissent mes canalisations à Bissardon, est-ce récidivant ?`,
        reponse: `Oui si la conduite endommagée n'est pas réparée. Notre coupe-racines élimine la racine actuelle, mais le joint ou la fissure qui l'a laissée entrer reste. Le seul remède définitif est de remplacer le tronçon concerné, identifié précisément par inspection caméra HD. Tarif annoncé avant intervention.`,
      },
      {
        question: 'Ma pompe de relevage à Saint-Clair tombe en panne après chaque gros orage, est-ce normal ?',
        reponse: `Pour une pompe standard installée dans un sous-sol proche de la Saône avec nappe haute, oui : elle travaille beaucoup en période d'orage et la crépine se colmate vite avec l'eau dure. Une pompe spécifiquement adaptée aux eaux chargées avec turbine vortex et un détartrage annuel allongent significativement la durée de vie.`,
      },
      {
        question: `Quel est le tarif d'une inspection caméra HD avant achat sur une maison bourgeoise à Vassieux ?`,
        reponse: `Le coût dépend du nombre de branchements et de la longueur totale de réseau. Pour une maison standard avec deux à trois départs et 30 à 50 mètres de canalisation enterrée, comptez entre 199 € et 349 € TTC. Tarif annoncé avant intervention via la borne en ligne, rapport vidéo opposable utilisable en négociation devant notaire.`,
      },
      {
        question: `Ma fosse toutes eaux à Cuire-le-Haut, je la vidange tous les combien ?`,
        reponse: `Tous les 4 ans pour une fosse occupée à temps plein, plus rapproché si vous êtes plus de 4 personnes. Une vidange préventive en automne, avant la saison des pluies intenses, évite les débordements. Bordereau SPANC remis systématiquement, conforme aux exigences du Grand Lyon.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Caluire-et-Cuire ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Caluire-et-Cuire, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 65 à 75 minutes pour le bas, un peu plus pour les hauteurs de Cuire-le-Haut. Tarif transparent annoncé avant déplacement.`,
      },
    ],

    conclusion: `Caluire-et-Cuire demande une plomberie qui connaît les coteaux nord lyonnais : pentes raides, maisons bourgeoises centenaires, nappe alluviale en bord de Saône, jardins paysagers à grands arbres. Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard — coupe-racines, contre-pente, pompe de relevage en sous-sol semi-enterré — un devis personnalisé sans engagement est proposé en complément. Notre équipe d'artisans plombiers dépanneurs répond 24h/7j et intervient en moins de 75 minutes sur l'ensemble du territoire communal.`,
  },

  // ============================================================
  // BRON — Parilly, Terraillon, Hôpital neurologique, est lyonnais
  // ============================================================
  bron: {
    intro: `Bron, 41 000 habitants, occupe une position centrale à l'est immédiat de Lyon, frontalière du 3ᵉ et du 8ᵉ arrondissement. La ville héberge le grand parc de Parilly partagé avec Vénissieux, l'Hôpital neurologique Pierre Wertheimer (centre hospitalier universitaire de référence), l'Université Lumière Lyon 2 sur le campus Porte des Alpes, et l'aéroport d'affaires Lyon-Bron. Cette concentration d'équipements de premier plan structure le tissu urbain : tours et barres résidentielles des années 1960-70 au Terraillon et autour du parc de Parilly, copropriétés modernes dans le centre, pavillonnaires plus calmes au Village et aux Genêts, secteur médical haute densité autour du CHU. Cette diversité de bâti — barres ANRU en transition, copropriétés modernes, pavillonnaire 1970-90, ERP universitaires et hospitaliers — fait du métier de plombier déboucheur urgence à Bron un travail varié, avec une part importante d'interventions sur établissements collectifs (hôpital, université, restaurants d'entreprise). La proximité immédiate du périphérique Laurent Bonnevay et du Boulevard Urbain Est facilite les déplacements. Notre équipe d'artisans plombiers en astreinte 24h/7j couvre l'ensemble de la commune avec un délai moyen de 50 à 60 minutes en journée, week-ends et jours fériés inclus.`,

    habitat: `Le bâti bronois se découpe en quatre grands ensembles. Le Terraillon et les abords du parc de Parilly regroupent des tours et barres résidentielles construites entre 1960 et 1975, dont certaines sont en cours de rénovation thermique et patrimoniale ANRU : les colonnes communes y desservent souvent 12 à 18 logements, avec des réseaux secondaires en fonte ou en fibrociment-amiante qui arrivent en fin de vie technique. Le centre-ville (place de Weimar, secteur Mairie, Aristide Briand) mêle copropriétés modernes des années 1990-2010 et quelques immeubles d'angle plus anciens, avec réseaux mixtes fonte/PVC. Le Village et les Genêts présentent un pavillonnaire pavillonaire 1970-90 plus calme, avec branchements PVC modernes mais parfois des contre-pentes héritées des terrassements. Enfin, le secteur Hôpital neurologique – Université Lyon 2 – aéroport d'affaires concentre des ERP de grande taille (CHU Wertheimer, faculté Lumière, restaurants universitaires, services aéroportuaires) avec des installations techniques dimensionnées pour des flux importants : pompes de relevage industrielles, bacs à graisses pour la restauration collective, séparateurs hydrocarbures pour les zones de stationnement. Cette diversité demande une vraie polyvalence technique.`,

    problemesFrequents: [
      {
        titre: 'Bouchons WC en cascade dans les colonnes communes du Terraillon',
        serviceSlug: 'debouchage',
        texte: `Les barres résidentielles du Terraillon présentent une particularité technique : les colonnes d'eaux vannes desservent souvent 12 à 18 logements verticalement, et un seul bouchon en partie basse fait remonter les WC à plusieurs étages simultanément. Le symptôme typique : votre WC déborde alors que vous n'avez rien fait d'anormal — c'est en réalité l'évacuation de votre voisin du dessus qui refoule chez vous. Sur ces colonnes longues, un débouchage local au furet règle parfois le problème immédiat mais ne traite pas la cause. Notre intervention type : curage haute pression depuis le pied de colonne avec camion hydrocureur, suivi d'un passage caméra HD pour cartographier les zones encrassées sur toute la hauteur. Nous travaillons régulièrement avec les bailleurs sociaux et syndics bronois sur des programmes de curage préventif tous les 18 mois. Tarif transparent annoncé avant intervention via la borne en ligne, devis gratuit pour les cas complexes.`,
      },
      {
        titre: `Inspection caméra HD pour expertises assurance et CHU`,
        serviceSlug: 'inspection-camera',
        texte: `Les ERP de grande taille à Bron — Hôpital neurologique Wertheimer, Université Lyon 2, restaurants universitaires, lycées, centres de soins — concentrent des kilomètres de canalisations d'évacuation enterrées dont l'état conditionne directement la continuité de service. Une fuite ou un bouchon en plein bloc opératoire ou en plein restaurant universitaire à l'heure du déjeuner est inacceptable. Nous intervenons régulièrement pour des inspections caméra HD préventives ou suite à dégât des eaux, avec rapport vidéo horodaté, géolocalisation des défauts et recommandations chiffrées. Le rapport sert ensuite à programmer les travaux préventifs ou à étayer un dossier d'assurance. Nous travaillons aussi pour les diagnostics avant achat sur les pavillons anciens du Village et des Genêts, où les canalisations enterrées en fibrociment ou en grès vieillissent. Compter 90 à 120 minutes pour une inspection standard, rapport remis sur place.`,
      },
      {
        titre: 'Vidanges de bacs à graisses pour la restauration collective universitaire',
        serviceSlug: 'fosse-septique',
        texte: `Le campus universitaire Porte des Alpes (Lyon 2 et Lyon 3 partiellement), le CHU Wertheimer, plusieurs lycées et collèges et de nombreux restaurants d'entreprise sur Bron concentrent une forte densité de restauration collective. Tous ces établissements doivent disposer d'un bac à graisses dimensionné, conforme à la réglementation sanitaire, et le faire vidanger toutes les 4 à 8 semaines selon le volume traité (les volumes de restauration collective sont 3 à 5 fois ceux d'une brasserie classique). Une vidange négligée se traduit par un débordement en plein service, des odeurs en salle, et parfois la fermeture administrative imposée par la commission d'hygiène. Nous intervenons avant l'ouverture — entre 5 h et 7 h pour ne pas perturber les services — pour un pompage complet et un nettoyage haute pression. Bordereau de suivi des déchets remis systématiquement, conforme aux exigences SPANC.`,
      },
      {
        titre: 'Pompes de relevage en sous-sols hospitaliers et universitaires',
        serviceSlug: 'pompe-relevage',
        texte: `L'Hôpital neurologique Wertheimer, le campus Porte des Alpes, l'aéroport d'affaires de Bron et plusieurs grandes copropriétés résidentielles dépendent de pompes de relevage industrielles pour évacuer eaux usées et eaux pluviales depuis leurs sous-sols et locaux techniques. Quand cette pompe lâche un week-end dans un établissement de soins ou universitaire, l'impact est immédiat. Nous intervenons en urgence avec des pompes industrielles équivalentes en stock camion (hauteur manométrique 5 à 15 m, débit 5 à 50 m³/h), et remettons en service le jour même dans la majorité des cas. Garantie pièces et main d'œuvre 1 an. Pour les ERP critiques (hôpital, ehpad, université), nous proposons des contrats de maintenance préventive trimestrielle ou annuelle qui sécurisent la continuité de service et anticipent les remplacements en lieu et place de les subir.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Bron inclut le Terraillon, le centre-ville, le Village, les Genêts, le secteur Hôpital neurologique – Université Lyon 2 – aéroport d'affaires, et les abords du parc de Parilly. Nous intervenons aussi sur les communes limitrophes immédiates (Lyon 3ᵉ et 8ᵉ, Vénissieux, Saint-Priest) avec lesquelles nous partageons plusieurs problématiques techniques. Les délais d'intervention varient légèrement selon la zone — plus rapides au centre et au Terraillon, légèrement plus longs aux Genêts — mais nous restons systématiquement dans une fourchette d'intervention sous 70 minutes, week-ends et jours fériés inclus. Notre standard plombier urgence est joignable 24h/7j.`,
      liste: [
        'Terraillon',
        'Centre-ville (place de Weimar)',
        'Le Village',
        'Les Genêts',
        'Parilly',
        `Hôpital neurologique`,
        'Porte des Alpes (campus)',
        'Aéroport d\'affaires',
        'Curial-Bel Air',
        'Mens',
      ],
    },

    conseilsLocaux: `Bron combine plusieurs contraintes locales spécifiques. La forte densité d'ERP (hôpital, université, lycées, aéroport, restaurants collectifs) impose une vigilance particulière sur la fréquence d'entretien des bacs à graisses et des pompes de relevage : sur les sites recevant beaucoup de public, une panne plomberie a un impact immédiat et démesuré. Nous proposons aux gestionnaires d'ERP des contrats de maintenance préventive (trimestriels pour les bacs à graisses de restauration collective, annuels pour les pompes de relevage) qui sécurisent la continuité de service. Pour les copropriétés résidentielles du Terraillon en cours de réhabilitation ANRU, un curage préventif des colonnes communes tous les 18 mois est très rentable rapporté au coût des urgences en cascade. L'eau dure et calcaire de la métropole accélère le colmatage des crépines de pompe et le dépôt de tartre sur les parois cuisine, surtout en hiver où les graisses figent : un détartrage annuel et un curage préventif en septembre divisent par deux le risque de panne hivernale. Pour les usagers résidentiels en pavillonnaire (Village, Genêts), un nettoyage trimestriel des bondes de douche avec un dégraissant alimentaire élimine la majorité des bouchons. Les épisodes orageux estivaux peuvent par ailleurs saturer les réseaux pluviaux : vérifiez avant la saison que vos clapets anti-retour fonctionnent.`,

    delais: `Notre équipe d'artisans plombiers urgence est positionnée à proximité immédiate de Bron, avec un véhicule en astreinte permanente sur la rive gauche du Rhône et un autre orienté est lyonnais. Cela nous permet de tenir un délai moyen d'intervention de 50 à 60 minutes en journée sur l'ensemble de la commune, plus court encore vers le centre et le Terraillon. La nuit et les week-ends, l'astreinte technique 24h/7j maintient un délai moyen autour de 65 à 75 minutes selon les conditions de circulation. Pour les ERP critiques sous contrat de maintenance (CHU, université), nous garantissons un délai d'intervention prioritaire avec techniciens dédiés. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation : un débouchage WC ne demande pas le même camion qu'un dépannage de pompe industrielle ou qu'un curage haute pression. Cette préparation transforme souvent une intervention longue en une intervention rapide.`,

    faq: [
      {
        question: 'Mon WC déborde au Terraillon alors que je n\'ai rien fait, que se passe-t-il ?',
        reponse: `C'est très probablement un bouchon en pied de colonne commune qui fait remonter les eaux des étages supérieurs chez vous. Ne tentez pas de déboucher localement, vous aggraveriez la situation. Notre intervention typique : curage haute pression depuis le pied de colonne avec passage caméra HD de contrôle. Tarif transparent annoncé avant intervention.`,
      },
      {
        question: `Le bac à graisses de mon restaurant universitaire à Porte des Alpes déborde, quel est le délai d'intervention ?`,
        reponse: `Pour un ERP avec restauration collective, nous intervenons en priorité absolue. Délai standard 60 à 90 minutes en heures ouvrables. Pour les sites sous contrat de maintenance préventive, garantie d'intervention sous 60 minutes 24h/7j. Tarif transparent, devis gratuit annoncé avant intervention.`,
      },
      {
        question: `Quel est le tarif d'un dépannage de pompe de relevage industrielle au CHU Wertheimer ?`,
        reponse: `Le tarif dépend du modèle de pompe, de la nature de la panne (diagnostic, remplacement pièce, remplacement complet) et de l'urgence. Pour un dépannage standard avec remplacement de pompe industrielle équivalent stock camion, comptez 599 à 1 290 € TTC main d'œuvre incluse. Tarif annoncé avant intervention.`,
      },
      {
        question: `J'achète un pavillon au Village, faut-il un diagnostic vidéo des canalisations ?`,
        reponse: `Pas légalement obligatoire, mais fortement recommandé sur les pavillons construits avant 1980, fréquents au Village et aux Genêts. L'inspection caméra HD chiffre l'état réel des canalisations enterrées et détecte les contre-pentes ou intrusions racinaires invisibles autrement. Rapport vidéo opposable utilisable en négociation devant notaire.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Bron ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Bron, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 65 à 75 minutes. Tarif transparent annoncé avant déplacement, devis gratuit pour les cas hors standard.`,
      },
    ],

    conclusion: `Bron demande une plomberie qui sait conjuguer plusieurs réalités urbaines : barres résidentielles ANRU en mutation, copropriétés modernes du centre, pavillonnaire calme du Village et des Genêts, ERP majeurs (CHU, université, aéroport, restauration collective). Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard — pompe industrielle, contrat de maintenance ERP, bac à graisses de restauration collective — un devis personnalisé sans engagement est proposé. Notre équipe d'artisans plombiers dépanneurs répond 24h/7j et intervient en moins de 75 minutes sur l'ensemble du territoire communal.`,
  },

  // ============================================================
  // MEYZIEU — étangs, Grand Large, ZI, ANC, nappe haute
  // ============================================================
  meyzieu: {
    intro: `Meyzieu, 34 000 habitants, occupe une position singulière à l'est de la Métropole de Lyon, traversée par le canal de Jonage et bordée à l'est par les étangs et le plan d'eau du Grand Large. Cette géographie aquatique — proximité du canal, étangs, nappe phréatique haute — a une conséquence directe pour la plomberie locale : les pompes de relevage sont quasi-systématiques dans les pavillons avec sous-sol et dans les copropriétés en pied d'immeuble, et leur fréquence de panne est un de nos marqueurs d'activité dominants à Meyzieu. Le tissu urbain mêle un centre-bourg ancien autour de la mairie, de vastes secteurs pavillonnaires (Pampailloux, Mathiolan), des lotissements neufs récents particulièrement nombreux ces dernières années, et la grande zone industrielle de Meyzieu côté est qui héberge logistique, industrie légère et restauration d'entreprise. Les franges péri-urbaines vers Jonage et le plateau conservent encore un assainissement non collectif sur quelques propriétés, avec fosses toutes eaux et micro-stations. Notre équipe d'artisans plombiers urgence en astreinte 24h/7j couvre l'ensemble de la commune avec un délai moyen de 60 à 70 minutes en journée, légèrement plus pour les franges les plus reculées.`,

    habitat: `L'habitat majeurois se découpe en quatre grands ensembles. Le centre-bourg (mairie, place du Marché) regroupe quelques immeubles d'angle et copropriétés modernes, mais reste de taille modeste comparé aux autres communes de la métropole. Le pavillonnaire (Pampailloux, Mathiolan, Mas Rolland, Hauts de Meyzieu) représente l'essentiel du parc résidentiel : maisons individuelles des années 1960 à 2010, dont une part significative dispose d'un sous-sol semi-enterré ou de buanderie en niveau bas équipée d'une pompe de relevage. Les lotissements neufs (5 à 15 dernières années) au sud-est et au nord apportent un parc PVC moderne mais avec là encore beaucoup de pompes de relevage vu la nappe haute. Enfin, la ZI Meyzieu et le secteur Grand Large concentrent locaux industriels, entrepôts logistiques, restaurants d'entreprise et copropriétés en pied de plan d'eau, avec des installations techniques dimensionnées pour des flux importants. Cette diversité, combinée à la nappe phréatique haute, fait que près de 40 % de nos interventions à Meyzieu concernent les pompes de relevage — un taux nettement supérieur aux autres communes de la métropole.`,

    problemesFrequents: [
      {
        titre: 'Bouchons cuisine pavillonnaires à Pampailloux et Mathiolan',
        serviceSlug: 'debouchage',
        texte: `Les pavillons des années 1970-2000 de Pampailloux, Mathiolan et Mas Rolland présentent des branchements pavillonnaires longs (20 à 50 mètres jusqu'au regard du tout-à-l'égout) qui sont vulnérables aux dépôts graisseux et aux intrusions racinaires. Le symptôme typique : votre évier ou votre douche se vide normalement pendant des années, puis progressivement plus lentement, jusqu'au jour où l'écoulement se bloque complètement. Le débouchage classique au furet règle parfois l'urgence ponctuelle mais ne traite pas la cause en aval. Notre intervention type : curage haute pression depuis le regard du tout-à-l'égout avec camion hydrocureur, suivi d'un passage caméra HD pour confirmer la section libre sur toute la longueur. Pour les rechutes fréquentes (souvent dues aux racines des grands arbres des jardins), nous proposons un coupe-racines suivi d'une réparation localisée. Tarif transparent annoncé avant intervention via la borne en ligne.`,
      },
      {
        titre: 'Inspection caméra HD avant achat ou avant rénovation pavillonnaire',
        serviceSlug: 'inspection-camera',
        texte: `Les pavillons construits avant 1990 à Meyzieu, fréquents à Mathiolan, Pampailloux et certains secteurs proches du centre, sont parmi les biens les plus sensibles à inspecter avant achat ou avant rénovation lourde. Les notaires demandent désormais quasi systématiquement un état du réseau d'évacuation enterré : la plupart des canalisations d'origine sont en fibrociment-amiante, en grès vernissé ou en fonte, avec des contre-pentes héritées de remblais successifs (terrain alluvial qui se tasse différemment selon les zones) et parfois des intrusions racinaires invisibles autrement. Notre inspection caméra HD jusqu'à 60 mètres avec localisateur permet de tracer précisément le réseau, mesurer les pentes, identifier les zones à reprendre et fournir un rapport opposable utilisable en négociation devant notaire. Compter 90 à 120 minutes pour un pavillon standard, rapport vidéo horodaté remis sur place ou par mail dans la journée.`,
      },
      {
        titre: 'Vidanges de fosses toutes eaux et micro-stations sur les franges',
        serviceSlug: 'fosse-septique',
        texte: `Les franges péri-urbaines de Meyzieu, vers Jonage et certains secteurs du plateau ouest, conservent un assainissement non collectif sur plusieurs propriétés. Fosses toutes eaux de 3 000 à 5 000 litres, micro-stations plus récentes pour les constructions des années 2000-2010, bacs à graisses pour les restaurants d'entreprise de la ZI Meyzieu cohabitent. La réglementation SPANC du Grand Lyon impose une vidange tous les 4 ans en moyenne pour une fosse, contrôle annuel pour les micro-stations, 6 à 8 semaines pour un bac à graisses de restauration. Nous intervenons avec un camion adapté à chaque type d'installation, et remettons systématiquement le bordereau de suivi des déchets, conforme aux exigences SPANC. Pour les restaurants de la ZI Meyzieu, nous proposons un planning de vidanges préventives qui évite les débordements en plein service. Nous contrôlons aussi l'état du préfiltre, qui se colmate plus rapidement avec l'eau dure de la métropole.`,
      },
      {
        titre: 'Pompes de relevage en sous-sols pavillonnaires sur nappe haute',
        serviceSlug: 'pompe-relevage',
        texte: `C'est notre intervention la plus fréquente à Meyzieu. La proximité immédiate du canal de Jonage et des étangs du Grand Large place une grande partie de la commune sur une nappe phréatique haute. Conséquence : les pavillons avec sous-sol semi-enterré, les caves, les buanderies en niveau bas dépendent presque toujours de pompes de relevage qui doivent évacuer non seulement les eaux usées domestiques mais aussi les remontées de nappe lors des épisodes pluvieux intenses. La cause numéro un de panne : la crépine d'aspiration colmatée par le calcaire de l'eau dure de la métropole, suivie par le condensateur claqué après les orages estivaux. Quand cette pompe lâche un samedi soir lors d'un orage, le sous-sol se remplit en quelques heures avec des conséquences souvent graves. Nous remplaçons en urgence les pompes équivalentes en stock camion (eaux usées domestiques, eaux vannes avec broyeur, eaux pluviales) et remettons en service le jour même. Garantie 1 an. Nous proposons aussi des contrats de maintenance préventive annuelle adaptés aux nappes hautes.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Meyzieu inclut le centre-bourg, l'ensemble des secteurs pavillonnaires (Pampailloux, Mathiolan, Mas Rolland, Hauts de Meyzieu), les lotissements neufs récents, le secteur Grand Large et la ZI Meyzieu, ainsi que les franges vers Jonage. Nous intervenons aussi sur les communes limitrophes immédiates (Décines-Charpieu, Jonage, Genas) avec lesquelles nous partageons les problématiques de nappe phréatique haute. Les délais d'intervention varient légèrement selon la zone — plus rapides au centre, légèrement plus longs sur les Hauts de Meyzieu et les franges Jonage — mais nous restons systématiquement dans une fourchette d'intervention sous 90 minutes, week-ends et jours fériés inclus. Notre standard plombier urgence est joignable 24h/7j.`,
      liste: [
        'Centre-bourg (mairie)',
        'Pampailloux',
        'Mathiolan',
        'Mas Rolland',
        'Hauts de Meyzieu',
        'Grand Large (étangs)',
        'ZI Meyzieu',
        'Plan-Bourg',
        'Lassagne',
        'Pré-Vert',
      ],
    },

    conseilsLocaux: `Meyzieu combine plusieurs contraintes locales spécifiques liées principalement à sa nappe phréatique haute. Premier conseil universel pour tous les pavillons avec sous-sol semi-enterré : un test mensuel de la pompe de relevage prend 30 secondes (verser quelques litres d'eau dans le bac et vérifier le déclenchement automatique) et évite la mauvaise surprise d'un samedi d'orage. Sur la nappe haute, les pompes travaillent beaucoup et leur durée de vie est plus courte qu'en zone sèche : prévoyez un remplacement préventif à 8-10 ans plutôt que d'attendre la panne. Deuxième conseil : pour les pavillons avec branchements longs sur le tout-à-l'égout (typique à Pampailloux et Mathiolan), un curage préventif tous les 4-5 ans en automne, avant la saison des orages, divise par trois la fréquence des bouchons. Troisième conseil : attention aux racines des grands arbres (peupliers, marronniers, saules) plantés à proximité des branchements enterrés ; un arbre adulte peut envoyer ses racines dans une canalisation fissurée à 8 mètres de distance. Pour les propriétés en assainissement non collectif sur les franges, respect strict de la fréquence quadriennale de vidange et utilisation exclusive d'un activateur biologique (jamais de produit chimique déboucheur qui détruit la flore bactérienne). Pour les commerces de la ZI Meyzieu, vidange préventive du bac à graisses toutes les 6 à 8 semaines.`,

    delais: `Notre équipe d'artisans plombiers urgence est positionnée sur la rive gauche du Rhône, ce qui nous permet de tenir un délai moyen d'intervention de 60 à 70 minutes en journée sur l'ensemble de Meyzieu, légèrement plus (75 à 90 minutes) pour les Hauts et les franges vers Jonage. La nuit et les week-ends, l'astreinte technique 24h/7j maintient un délai moyen autour de 75 à 90 minutes selon les conditions de circulation sur l'A43. Nous gardons en stock les pompes de relevage les plus communes pour le secteur (modèles adaptés aux nappes hautes, eaux chargées), ce qui permet le remplacement le jour même dans la majorité des cas. Pour les vidanges programmées et les inspections caméra, nous proposons des créneaux à la demi-journée. Avant chaque déplacement, un échange téléphonique de 5 à 10 minutes nous permet de qualifier votre situation et d'anticiper le matériel nécessaire.`,

    faq: [
      {
        question: 'Ma pompe de relevage tombe en panne tous les 3 ans à Pampailloux, est-ce normal ?',
        reponse: `Pour une pompe standard installée sur nappe haute (typique à Meyzieu), oui : elle travaille beaucoup et la crépine se colmate vite avec l'eau dure. Une pompe spécifiquement adaptée aux eaux chargées avec turbine vortex et un détartrage annuel allongent significativement la durée de vie. Nous proposons des contrats de maintenance préventive.`,
      },
      {
        question: `J'ai des racines qui envahissent mon évacuation pavillonnaire à Mathiolan, que faire ?`,
        reponse: `Notre coupe-racines élimine la racine actuelle, mais le joint ou la fissure qui l'a laissée entrer reste. Le seul remède définitif est de remplacer le tronçon concerné, identifié précisément par inspection caméra HD. Tarif annoncé avant intervention, devis gratuit pour la réparation.`,
      },
      {
        question: `Quel est le tarif d'une vidange de fosse toutes eaux à Meyzieu ?`,
        reponse: `Notre tarif transparent pour une vidange de fosse toutes eaux de 3 000 L démarre à 249 € TTC à Meyzieu, bordereau SPANC inclus. Pour une fosse de plus grande capacité ou un accès difficile (>30 m de flexible), la borne en ligne calcule un tarif personnalisé en 4 clics. Aucun frais caché.`,
      },
      {
        question: `Mon sous-sol s'inonde après chaque gros orage, est-ce un problème de pompe ?`,
        reponse: `Très probablement oui, et nous intervenons en urgence pour ce type de cas. Le diagnostic comprend la vérification du déclenchement automatique, l'état de la crépine, du flotteur, du condensateur et du clapet anti-retour. Si la pompe est en cause, remplacement le jour même dans la majorité des cas.`,
      },
      {
        question: `Vous intervenez aussi le dimanche et les jours fériés à Meyzieu ?`,
        reponse: `Oui, notre équipe d'astreinte plombier urgence intervient 24h/7j à Meyzieu, week-ends et jours fériés inclus. Le délai moyen un dimanche soir reste autour de 75 à 90 minutes pour le centre et les pavillonnaires, un peu plus pour les franges Jonage. Tarif transparent annoncé avant déplacement.`,
      },
    ],

    conclusion: `Meyzieu demande une plomberie qui sait gérer les contraintes de nappe phréatique haute : pompes de relevage très sollicitées, sous-sols à risque d'inondation, branchements pavillonnaires longs sur sols alluviaux qui se tassent. Notre borne calcule en quatre clics un tarif adapté à votre quartier précis et à la nature de votre intervention, sans surprise à la facturation. Pour les situations sortant du standard — pompe sur nappe haute, ANC en frange, bac à graisses ZI — un devis personnalisé sans engagement est proposé. Notre équipe d'artisans plombiers dépanneurs répond 24h/7j et intervient en moins d'une heure trente sur l'ensemble du territoire communal.`,
  },

  // ============================================================
  // LA VALETTE-DU-VAR — zone commerciale, restaurants, bacs
  // ============================================================
  'la-valette-du-var': {
    intro: `La Valette-du-Var, 24 000 habitants, occupe une position singulière dans l'agglomération toulonnaise : c'est l'une des principales zones d'activité commerciale du Var, structurée autour du centre commercial Avenue 83 et de plusieurs grandes surfaces qui rayonnent sur tout l'est du département. Cette vocation commerciale a une conséquence directe pour la plomberie locale : la commune compte une concentration exceptionnellement élevée d'établissements de restauration, de commerces alimentaires et de services à la personne, qui tous ont des besoins spécifiques en matière d'évacuation et d'entretien. Aux côtés de cette dimension commerciale, La Valette conserve un cœur résidentiel ancien, des quartiers pavillonnaires des années 1960-1990, et des extensions plus récentes vers La Coupiane et La Crau. Notre activité ici est très différente de celle d'une commune purement résidentielle : nous y intervenons quotidiennement sur des bacs à graisses, des évacuations professionnelles, des séparateurs hydrocarbures et des installations sanitaires fortement sollicitées par le passage public. Cette pratique régulière nous a donné une expertise spécifique des règlementations applicables aux établissements recevant du public, que nous mettons au service des exploitants.`,

    habitat: `On peut distinguer cinq grandes typologies à La Valette, qui correspondent à des problématiques de plomberie nettement différentes. Le centre ancien, autour de l'église Saint-Jean, abrite un habitat compact aux installations remaniées plusieurs fois. Le secteur résidentiel autour du Thouars, des Sauvans et de La Coupiane regroupe des pavillons et des copropriétés modernes, avec des problématiques classiques de débouchage et d'entretien. La zone commerciale Avenue 83 et ses environs concentrent une densité exceptionnelle de restaurants et de commerces de bouche, tous équipés de bacs à graisses et d'installations spécifiques. Les zones d'activité de La Bigue et des Sauvans accueillent des entreprises industrielles et artisanales qui peuvent générer des effluents particuliers nécessitant des séparateurs hydrocarbures ou des prétraitements. Enfin, les hauteurs vers La Crau et certains secteurs limitrophes comprennent encore des villas en assainissement non collectif avec fosses individuelles. Cette diversité fait de La Valette l'une des communes du Var où nous traitons la plus grande variété de cas en une journée d'intervention type.`,

    problemesFrequents: [
      {
        titre: 'Engorgements en restauration et commerces de bouche',
        serviceSlug: 'debouchage',
        texte: `La concentration de restaurants autour d'Avenue 83 et dans les autres zones commerciales génère un volume d'interventions très spécifique. Les évacuations de cuisines professionnelles subissent des charges en graisse, en débris alimentaires et en produits de nettoyage incomparablement plus élevées qu'en résidentiel. Le bouchon typique en restauration apparaît au pire moment, généralement en plein service, et peut paralyser l'activité jusqu'au dépannage. Nous avons développé un protocole d'intervention rapide en zones commerciales : véhicule pré-positionné en heures de pointe les jours de forte affluence, intervention en cuisine sans interrompre le service quand c'est techniquement possible, curage haute pression adapté aux configurations de restauration. Nous travaillons aussi avec plusieurs exploitants sur des contrats de prévention qui réduisent fortement le risque d'incident en plein service.`,
      },
      {
        titre: `Inspection caméra des séparateurs et installations spéciales`,
        serviceSlug: 'inspection-camera',
        texte: `Les zones d'activité de La Valette accueillent des entreprises (garages, stations-service, ateliers, blanchisseries) dont les rejets nécessitent des séparateurs hydrocarbures, des débourbeurs ou des dispositifs de prétraitement. Ces installations ont leurs propres règles d'entretien, et leur état doit être documenté pour respecter les obligations réglementaires de l'exploitant. L'inspection caméra avec rapport vidéo, complétée d'un examen visuel des séparateurs, fournit la traçabilité demandée par les services municipaux et les éventuels contrôles environnementaux. Nous intervenons sur ces équipements spécialisés régulièrement, avec une connaissance des règles applicables.`,
      },
      {
        titre: 'Vidanges de bacs à graisses des restaurants',
        serviceSlug: 'fosse-septique',
        texte: `C'est probablement notre intervention la plus fréquente sur La Valette. Tout établissement de restauration doit obligatoirement disposer d'un bac à graisses dimensionné selon son activité, et le faire vidanger régulièrement — typiquement tous les six mois pour un restaurant standard, plus rapproché pour les forts producteurs (pizzerias, fast-foods, restauration de groupe). Nous proposons un calendrier d'intervention récurrent avec créneaux planifiés à l'avance, ce qui simplifie la gestion administrative pour l'exploitant et garantit le respect des obligations. Le bordereau de suivi des déchets, obligatoire pour la responsabilité de l'établissement, est remis systématiquement.`,
      },
      {
        titre: 'Pompes de relevage en zones commerciales',
        serviceSlug: 'pompe-relevage',
        texte: `Plusieurs zones commerciales de La Valette, particulièrement celles construites en remblai sur d'anciens terrains agricoles, dépendent de pompes de relevage pour évacuer leurs eaux usées vers le tout-à-l'égout principal. Ces pompes, dimensionnées pour des débits importants liés à l'activité commerciale, demandent une maintenance plus régulière que les pompes domestiques. Nous proposons des contrats trimestriels qui incluent test fonctionnel, nettoyage du puits, contrôle des flotteurs et vérification électrique. Cette préventive est cruciale pour les exploitants : une pompe en panne dans un centre commercial, c'est un risque sanitaire et un risque d'image qui peut fermer temporairement l'établissement.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur La Valette inclut l'ensemble du territoire communal et les zones commerciales associées qui débordent légèrement sur les communes voisines. Nous travaillons régulièrement avec les exploitants commerciaux et les syndics professionnels, qui apprécient notre disponibilité et notre connaissance des règlementations applicables. Les délais d'intervention sont calibrés pour rester sous l'heure en zone urbaine, avec un véhicule pré-positionné en heure de pointe sur les zones commerciales les plus actives.`,
      liste: [
        'Centre ancien (église Saint-Jean)',
        'La Coupiane',
        'Avenue 83 (centre commercial)',
        'Le Thouars',
        'La Bigue (zone d\'activité)',
        'Les Sauvans',
        'La Crau (commune limitrophe)',
        'Hauts de La Valette',
      ],
    },

    conseilsLocaux: `Pour les exploitants commerciaux, qui constituent le cœur de notre activité à La Valette, trois recommandations sont essentielles. Premièrement, anticiper le calendrier réglementaire des vidanges de bacs à graisses : un retard de quelques mois peut entraîner des contrôles défavorables et des coûts ultérieurs sensiblement majorés (un bac surchargé est plus difficile et plus long à vidanger). Notre planning récurrent évite cet écueil. Deuxièmement, sensibiliser le personnel aux bonnes pratiques en cuisine : pas de versement direct d'huiles usagées dans les éviers, utilisation systématique des bacs de récupération, et maintenance quotidienne des préfiltres. Ces gestes simples réduisent la charge sur les bacs et espacent les vidanges. Troisièmement, pour les exploitants disposant de pompes de relevage, le contrat de maintenance trimestrielle est un investissement modéré qui protège contre les sinistres en zone commerciale, où la responsabilité civile peut être engagée envers les clients et les autres commerces. Pour les résidents particuliers, les conseils sont plus classiques : entretien régulier des canalisations privées, sensibilisation aux bonnes pratiques, et appel rapide aux premiers signes pour éviter l'aggravation.`,

    delais: `La proximité de La Valette avec Toulon et notre base nous permet de tenir un délai d'intervention moyen de quarante-cinq minutes à une heure sur l'ensemble du territoire communal. Sur les zones commerciales en heure de pointe, nous pouvons mobiliser un véhicule pré-positionné qui réduit ce délai à vingt à trente minutes pour les urgences en cuisine professionnelle. Notre standard est joignable 24h/7j, et nous gardons en stock les pièces spécifiques aux installations commerciales : pompes de relevage gros débit, joints pour bacs à graisses, raccords pour séparateurs. Pour les interventions programmées (vidanges récurrentes, inspections périodiques), nous proposons des créneaux flexibles compatibles avec les contraintes d'exploitation.`,

    faq: [
      {
        question: `À quelle fréquence dois-je faire vidanger le bac à graisses de mon restaurant ?`,
        reponse: `La règle générale est tous les six mois, mais cela peut être rapproché à trois ou quatre mois pour les restaurants à forte production de graisses (friture, pizzeria, restauration de groupe). Le bac doit être à moins de 75% de saturation pour rester conforme. Notre planning récurrent simplifie le suivi.`,
      },
      {
        question: `Mon évier de cuisine pro s'évacue lentement. Faut-il vider le bac ou y a-t-il autre chose ?`,
        reponse: `Vérifiez d'abord la date de la dernière vidange du bac : si elle est ancienne, la saturation est probable. Si le bac est récent, le problème est en aval, sur la canalisation après bac. Un débouchage curatif règle l'urgence, et un passage caméra identifie la cause durable.`,
      },
      {
        question: `Le bordereau de suivi des déchets, c'est vraiment obligatoire ?`,
        reponse: `Oui, pour tout établissement professionnel, le bordereau est obligatoire et doit être conservé en cas de contrôle. Sans bordereau, l'exploitant ne peut pas prouver le traitement réglementaire de ses déchets. Nous le remettons systématiquement à chaque intervention.`,
      },
      {
        question: `Vous intervenez aussi sur les centres commerciaux ?`,
        reponse: `Oui, nous travaillons régulièrement avec plusieurs centres commerciaux du secteur, soit directement avec les exploitants des cellules commerciales, soit via le syndic général sur les parties communes. Notre disponibilité est cruciale pour ces sites où une panne peut fermer l'activité.`,
      },
      {
        question: `Combien coûte un contrat trimestriel pour une pompe de relevage commerciale ?`,
        reponse: `Cela dépend de la taille de la pompe, de la complexité de l'installation et du contexte. Pour une pompe standard en zone commerciale, le coût annuel reste modéré et largement inférieur au coût d'une intervention d'urgence en cas de panne. Devis personnalisé sur demande.`,
      },
    ],

    conclusion: `La Valette-du-Var est avant tout une commune commerciale, où nos interventions concernent autant les exploitants professionnels que les résidents particuliers. Notre borne calcule en quatre clics un tarif adapté à votre situation. Pour les contrats récurrents (vidanges programmées, maintenance pompes commerciales), un devis personnalisé est systématiquement proposé. Notre standard 24h/7j et notre véhicule pré-positionné en heure de pointe permettent une intervention rapide sur les zones commerciales et résidentielles, week-ends et jours fériés inclus.`,
  },

  // ============================================================
  // SANARY-SUR-MER — port pittoresque, bastides, vieille plomb.
  // ============================================================
  'sanary-sur-mer': {
    intro: `Sanary-sur-Mer, 17 000 habitants, est un port de pêche pittoresque devenu station balnéaire prisée, situé entre Six-Fours-les-Plages et Bandol. Régulièrement classé parmi les plus beaux marchés de France, le centre conserve un charme méditerranéen authentique avec ses bastides, ses pointus de pêche et ses ruelles qui descendent vers le port. Cette identité patrimoniale forte a une conséquence pour la plomberie locale : une partie significative du parc immobilier est constituée de bâtisses anciennes, parfois centenaires, dont les installations ont été remaniées à plusieurs reprises. Sur ces propriétés, on trouve encore couramment des canalisations en plomb sur les premiers mètres avant raccordement à la fonte ou au PVC, et des configurations héritées de générations successives de propriétaires. À côté de ce noyau ancien, Sanary a connu une expansion résidentielle importante avec des villas modernes vers La Gorguette, Beaucours et La Vernette, qui présentent des installations plus standard mais restent exposées aux contraintes marines du littoral varois. Notre activité couvre l'ensemble du territoire communal, avec une attention particulière aux problématiques propres aux bâtisses anciennes du centre, et aux pompes de relevage des résidences en pied de falaise.`,

    habitat: `Sanary se lit en trois cercles concentriques. Au centre, autour du port et de la place du Marché, le bâti ancien se compose de bastides, de maisons de pêcheurs et d'immeubles de villégiature des XIXᵉ et début XXᵉ siècle, avec des canalisations qui combinent plusieurs époques et matériaux. Les ruelles qui descendent vers le port sont parfois inaccessibles aux véhicules d'intervention de gabarit standard, ce qui impose un véhicule compact ou un travail au matériel portable. Le premier anneau résidentiel autour du centre — Les Picotières, Portissol, La Vernette — alterne villas du milieu du XXᵉ siècle et propriétés plus récentes, avec des installations généralement saines mais soumises à l'usure normale. Enfin, les zones d'extension de Beaucours et La Gorguette regroupent des villas modernes et des résidences plus récentes, parfois en assainissement non collectif sur les parties les plus excentrées. Cette diversité bâtie demande des compétences variées : connaître les canalisations anciennes en plomb et en fonte, savoir adapter une intervention quand le camion ne peut pas accéder, maîtriser les pompes de relevage marinisées, et gérer les fosses individuelles. C'est une plomberie de proximité qui demande de la polyvalence.`,

    problemesFrequents: [
      {
        titre: 'Évacuations en plomb dans les bastides du centre',
        serviceSlug: 'debouchage',
        texte: `Une particularité sanaryenne tient à la présence relativement fréquente de canalisations d'évacuation en plomb sur les premiers mètres dans les bastides anciennes du centre. Ces conduites, très progressives à dégrader contrairement à ce que l'on pense parfois, se prêtent mal aux outils mécaniques agressifs : un furet utilisé sans précaution peut percer la paroi vieillie, créant une fuite difficile à réparer. Notre approche sur les évacuations en plomb privilégie les méthodes douces — eau chaude sous basse pression, hérisson souple, agents biologiques en cas de bouchon biologique — réservant le furet aux configurations vraiment incontournables et avec un opérateur expérimenté. Nous recommandons aussi à long terme le remplacement progressif de ces tronçons en plomb par du PVC ou du multicouche moderne, opération qui se fait par tronçons accessibles sans tout casser.`,
      },
      {
        titre: `Inspection caméra des bastides avant rénovation`,
        serviceSlug: 'inspection-camera',
        texte: `Les rénovations dans les bastides sanaryennes butent presque toujours sur la même question : où passent vraiment les évacuations, et dans quel état sont-elles ? Les plans d'origine ont disparu, et les transformations successives ont créé des configurations imprévisibles. Notre inspection caméra avec localisateur en surface permet de tracer le réseau, d'identifier les segments en plomb, en fonte et en PVC, et de cartographier les contre-pentes et les piquages improbables. Le rapport vidéo et le plan métré servent de référence au maître d'œuvre pour budgétiser intelligemment la rénovation et éviter les mauvaises surprises pendant les travaux. Sur les bastides à fort caractère patrimonial, c'est un investissement essentiel.`,
      },
      {
        titre: 'Vidanges de fosses dans les villas excentrées',
        serviceSlug: 'fosse-septique',
        texte: `Une partie des villas des hauteurs sanaryennes — secteur Beaucours, certaines portions de La Vernette excentrées — reste en assainissement non collectif. Les fosses toutes eaux y subissent les contraintes habituelles du littoral varois (proximité de la nappe, sols variés), avec une particularité supplémentaire : l'occupation parfois irrégulière de ces propriétés (résidence principale, secondaire, location saisonnière) sollicite les fosses par à-coups peu favorables au cycle bactérien. Nous conseillons des vidanges régulières à fréquence quadriennale, avec contrôle systématique du préfiltre et de l'épandage. Le bordereau de suivi des déchets est remis à chaque intervention.`,
      },
      {
        titre: `Pompes de relevage des résidences en pied de falaise`,
        serviceSlug: 'pompe-relevage',
        texte: `La géographie sanaryenne — bord de mer, ruptures de pente, parcelles parfois en surplomb du niveau de la mer — multiplie les configurations où une pompe de relevage devient indispensable. Caves, sous-sols semi-enterrés, niveaux situés en pied de falaise dépendent fréquemment d'une pompe pour évacuer leurs eaux. La proximité immédiate de la mer ajoute la contrainte des embruns salins qui corrodent prématurément les pompes standard. Nous installons des modèles spécifiquement marinisés sur les sites exposés, avec joints adaptés et bobinage protégé. La maintenance bisannuelle, qui inclut un rinçage complet à l'eau douce et le contrôle des éléments électriques, prolonge sensiblement la durée utile.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Sanary-sur-Mer inclut l'ensemble du territoire communal, du port aux quartiers résidentiels excentrés. Nous travaillons aussi sur les communes limitrophes immédiates, particulièrement Six-Fours-les-Plages et Bandol qui partagent plusieurs problématiques marines. Les délais d'intervention sont calibrés pour rester sous l'heure et demie, avec une attention particulière aux ruelles d'accès difficile du centre où nous mobilisons un véhicule compact quand nécessaire.`,
      liste: [
        'Le Port et place du Marché',
        'La Gorguette',
        'Beaucours',
        'Portissol',
        'La Vernette',
        'Les Picotières',
        'Le Levant',
        'Bandol (commune limitrophe)',
      ],
    },

    conseilsLocaux: `Sanary impose une vigilance particulière aux propriétaires de bastides et de bâtiments anciens du centre, où les canalisations en plomb encore présentes sur certaines installations demandent des précautions spécifiques. Trois recommandations s'imposent. Premièrement, pour les bastides du centre, ne jamais utiliser de produits déboucheurs chimiques agressifs, qui dégradent rapidement le plomb et peuvent générer des fuites. En cas d'engorgement, faire appel à un professionnel équipé d'outils doux plutôt que tenter un dépannage forcé. Deuxièmement, pour les propriétaires en assainissement non collectif des hauteurs, programmer la vidange en automne avant la saison des pluies cévenol, qui peut saturer les fosses, et respecter la fréquence quadriennale standard sans attendre les premiers signes. Troisièmement, pour les pompes de relevage exposées au littoral, prévoir un rinçage à l'eau douce annuel et une maintenance bisannuelle qui contrôle les joints et le bobinage. Enfin, plus généralement, sur les bâtisses anciennes avec installations partielles en plomb, planifier à long terme leur remplacement progressif par des matériaux modernes, opération qui peut être faite sans tout casser sur des chantiers ciblés.`,

    delais: `Notre proximité avec l'aire toulonnaise nous permet de tenir un délai moyen d'intervention de soixante à quatre-vingt-dix minutes sur Sanary-sur-Mer en journée. En haute saison estivale, le trafic sur le littoral peut allonger légèrement les déplacements, ce que nous compensons en pré-positionnant un véhicule sur le secteur les jours de pic. Notre standard est joignable 24h/7j, et nous gardons en stock les pompes marinisées les plus courantes pour les sites exposés du littoral, ainsi que les pièces nécessaires aux interventions sur installations anciennes. Pour les ruelles inaccessibles aux véhicules standard, nous mobilisons un véhicule compact qui permet d'accéder à la majorité des bastides du centre.`,

    faq: [
      {
        question: `Mes canalisations dans la bastide du centre sont en plomb. Faut-il les remplacer immédiatement ?`,
        reponse: `Pas nécessairement immédiatement, mais à planifier à moyen terme. Le plomb se dégrade lentement et peut continuer à fonctionner plusieurs années. La planification permet de remplacer par tronçons sans tout casser, en intégrant l'opération à d'autres travaux de rénovation.`,
      },
      {
        question: `Pourquoi utiliser un déboucheur chimique est-il déconseillé sur installations anciennes ?`,
        reponse: `Les produits chimiques agressifs corrodent rapidement le plomb, le grès vernissé et certains joints anciens. Sur des installations centenaires, ils peuvent transformer un bouchon mineur en fuite majeure. Mieux vaut une intervention professionnelle avec outils doux.`,
      },
      {
        question: `Combien coûte une inspection caméra avant rénovation d'une bastide ?`,
        reponse: `Cela dépend du nombre de branchements et de la complexité du réseau. Pour une bastide standard avec deux à trois départs et trente à quarante mètres de canalisation totale, comptez une demi-journée. La borne en ligne donne un tarif estimatif précis selon votre situation.`,
      },
      {
        question: `Combien de temps tient une pompe de relevage à Beaucours en bord de mer ?`,
        reponse: `Une pompe standard non marinisée tient typiquement deux à trois ans en bord de mer. Une pompe marinisée avec maintenance bisannuelle tient cinq à sept ans dans les mêmes conditions. Le surcoût initial du modèle marinisé est largement amorti par la durée de vie supplémentaire.`,
      },
      {
        question: `Vous intervenez aussi à Bandol ?`,
        reponse: `Oui, Bandol fait partie de notre couverture standard. Plusieurs problématiques sont communes à Sanary, notamment sur la frange portuaire et les bastides anciennes. Nous y intervenons avec les mêmes délais et les mêmes équipements qu'à Sanary.`,
      },
    ],

    conclusion: `Sanary-sur-Mer demande une plomberie qui sait conjuguer respect du patrimoine bâti ancien et maîtrise des problématiques marines modernes. Notre borne calcule en quatre clics un tarif adapté à votre situation, en intégrant les particularités de votre quartier et de votre type d'installation. Pour les configurations sensibles — bastides à canalisations anciennes, pompes en bord de mer, accès difficile — un devis personnalisé est proposé. Notre standard 24h/7j et notre véhicule compact pour les ruelles permettent une intervention rapide sur l'ensemble du territoire communal, week-ends et jours fériés inclus.`,
  },
};
