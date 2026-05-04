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
  // DRAGUIGNAN — haut-Var, sols rocheux, fosses fréquentes
  // ============================================================
  draguignan: {
    intro: `Sous-préfecture du Var avec 40 000 habitants, Draguignan offre un visage très différent de la côte. Située à une trentaine de kilomètres de la mer, en contrebas du plateau de Canjuers, la ville s'étire sur un terrain de moyenne montagne où les sols argileux alternent avec des affleurements rocheux calcaires. Cette géologie a une conséquence directe pour la plomberie : les terrassements pour les canalisations enterrées y sont plus difficiles qu'en plaine côtière, et les ruptures de pente sur les terrains pavillonnaires sont fréquentes. Le tissu urbain dragueignannais est lui aussi spécifique : un noyau historique resserré autour de la tour de l'Horloge, des extensions pavillonnaires des années 1960-2000, et un arrière-pays dispersé qui touche aux communes voisines de Trans-en-Provence, Flayosc et Ampus, avec un habitat rural largement en assainissement non collectif. La présence du camp militaire de Canjuers, immense base d'entraînement, structure aussi l'urbanisme local sans être directement notre périmètre d'intervention. Nous travaillons sur l'ensemble du bassin de Draguignan, en intégrant les particularités techniques du haut-Var : sols difficiles, racines puissantes des oliviers et des pins, et fréquence élevée des fosses individuelles.`,

    habitat: `L'habitat draguignannais se concentre autour de trois ensembles. Le centre ancien, autour de la place du Marché et de la tour de l'Horloge, regroupe des immeubles compacts des XVIIIᵉ et XIXᵉ siècles, avec des canalisations qui ont été reprises plusieurs fois et qui présentent souvent des configurations héritées difficiles à diagnostiquer sans inspection. Les quartiers pavillonnaires des Faïsses, du Plan-de-la-Tour et de Saint-Hermentaire représentent l'essentiel du parc résidentiel : maisons individuelles des années 1960 à 2000, le plus souvent raccordées au tout-à-l'égout collectif, mais avec des branchements parfois longs et accidentés à cause du relief. Enfin, la périphérie rurale — Le Malmont, La Foux et les hameaux — alterne maisons en pierre traditionnelles, mas restaurés et constructions récentes, presque tous en assainissement individuel avec fosses toutes eaux ou micro-stations. Cette répartition explique que la part des interventions de pompage de fosse soit nettement plus élevée à Draguignan qu'à Toulon ou La Seyne — pour beaucoup d'habitants du bassin, la fosse n'est pas une exception, c'est l'installation standard.`,

    problemesFrequents: [
      {
        titre: 'Racines de pins dans les évacuations pavillonnaires',
        serviceSlug: 'debouchage',
        texte: `Les terrains du bassin draguignannais sont fréquemment plantés de pins parasols et d'oliviers, dont les systèmes racinaires recherchent activement l'humidité. Les canalisations d'évacuation enterrées, surtout les anciens tronçons en grès vernissé ou en fibrociment dont les joints se relâchent avec le temps, sont des cibles privilégiées. Une racine fine de quelques millimètres peut entrer par un joint défectueux, prospérer à l'intérieur de la conduite en absorbant les eaux usées riches en nutriments, et finir par former un tampon qui obstrue complètement le diamètre. Nous traitons ces cas avec une fraise rotative spécifique, qui sectionne les racines sans abîmer la conduite, suivie d'un passage caméra de contrôle. Pour les rechutes fréquentes, le seul remède définitif est le remplacement du tronçon défectueux.`,
      },
      {
        titre: `Inspection caméra avant achat sur les mas de l'arrière-pays`,
        serviceSlug: 'inspection-camera',
        texte: `Les mas et les bastides de l'arrière-pays draguignannais sont parmi les biens les plus sensibles à inspecter avant achat. Ces propriétés ont souvent subi plusieurs générations d'extensions, avec des évacuations qui se sont ajoutées les unes aux autres au fil des décennies. Les contre-pentes héritées de remblais successifs, les piquages improvisés et les jonctions sur d'anciennes fosses désaffectées sont monnaie courante. L'inspection caméra avec localisateur en surface remonte précisément le réseau, identifie les zones à reprendre et fournit un rapport opposable. C'est un document qui sert systématiquement dans les négociations sur ces biens à fort caractère mais à plomberie capricieuse.`,
      },
      {
        titre: 'Vidanges et entretien des fosses dans les hameaux',
        serviceSlug: 'fosse-septique',
        texte: `Une majorité des habitations du bassin draguignannais en dehors du centre dépend d'un assainissement individuel. Fosses toutes eaux, fosses septiques anciennes, micro-stations modernes coexistent selon les époques de construction. La spécificité locale tient au sol : les terrains argileux limitent la capacité d'épandage des eaux clarifiées, et les terrains rocheux interdisent parfois le creusement d'un drain classique. Nous intervenons sur la totalité des installations, avec un camion adapté aux accès difficiles. La fréquence recommandée de vidange est de quatre ans pour une fosse toutes eaux occupée à temps plein, plus rapprochée si plusieurs personnes y vivent. Le bordereau de suivi des déchets est remis systématiquement.`,
      },
      {
        titre: 'Pompes de relevage dans les terrains à pente',
        serviceSlug: 'pompe-relevage',
        texte: `Le relief dragueignannais — pentes marquées, ruptures de niveau — multiplie les situations où une pompe de relevage devient indispensable. Caves, sous-sols et niveaux semi-enterrés en contrebas du tout-à-l'égout, ou en contrebas de la fosse, dépendent d'une pompe pour évacuer leurs eaux. Quand cette pompe lâche un week-end, les conséquences peuvent être graves, surtout si le local contient des biens stockés. Nous remplaçons en urgence les pompes communes (eaux usées domestiques, eaux vannes avec broyeur, eaux pluviales) depuis notre stock régional. Pour les installations neuves, nous dimensionnons en fonction du dénivelé réel et du débit de pointe, avec une marge pour absorber les pics d'orage cévenol.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture du bassin draguignannais inclut la commune et les communes immédiatement limitrophes (Trans-en-Provence, Flayosc, Les Arcs, Lorgues partiellement). Les délais sont calibrés pour rester sous deux heures, avec des intervals plus courts en cœur de ville et autour de quatre-vingt-dix minutes pour les hameaux. Nous gardons en stock dans notre véhicule les pièces standard les plus demandées sur ce secteur, notamment les fraises de coupe-racines et les pompes de relevage courantes.`,
      liste: [
        'Centre ancien (tour de l\'Horloge)',
        'Saint-Hermentaire',
        'Plan-de-la-Tour',
        'Les Faïsses',
        'La Foux',
        'Le Malmont',
        'Quartier Saint-Léger',
        'Trans-en-Provence (limitrophe)',
        'Flayosc (limitrophe)',
      ],
    },

    conseilsLocaux: `Le climat continental de l'arrière-pays varois — étés très chauds et secs, automnes potentiellement violents avec des épisodes cévenols, hivers froids ponctués de gels — impose une vigilance saisonnière différente de celle de la côte. Pour les habitants en assainissement non collectif, la première recommandation est de planifier la vidange en automne, avant la saison des pluies intenses, plutôt qu'au printemps. Une fosse pleine fait déborder par les regards bas en cas d'apport pluvial massif, ce qui crée des dégâts évitables. La deuxième recommandation concerne les racines : si vous plantez ou laissez prospérer des pins ou des oliviers à moins de cinq mètres de canalisations enterrées, vous prenez un risque qui se concrétisera tôt ou tard. Le déracinement préventif des sujets trop proches est plus économique qu'une réfection complète de réseau dix ans plus tard. Enfin, sur les pompes de relevage en sous-sol, vérifiez chaque mois le bon fonctionnement du flotteur — un test manuel prend trente secondes et permet de détecter les défaillances avant qu'elles ne deviennent des urgences.`,

    delais: `Notre équipe couvre le bassin draguignannais avec un délai moyen d'intervention de soixante à quatre-vingt-dix minutes en journée, qui peut s'allonger à deux heures sur les hameaux les plus reculés ou aux heures de pointe. Notre standard centralise les appels 24h/7j et oriente immédiatement vers le véhicule le plus proche. Pour les vidanges de fosses programmées, nous proposons des créneaux à la demi-journée pour optimiser les déplacements et limiter le coût. Les urgences sont traitées en priorité, avec un véhicule dédié au coupe-racines pour les bouchons sur réseau pavillonnaire et un autre pour les pompes de relevage et les pompages de fosse.`,

    faq: [
      {
        question: `J'ai des racines qui rentrent dans mes canalisations à Saint-Hermentaire. C'est récidivant ?`,
        reponse: `Oui, c'est récurrent si la conduite endommagée n'est pas remplacée. Une fraise élimine la racine actuelle, mais le joint défectueux qui l'a laissée entrer reste. Le seul remède définitif est de remplacer le tronçon concerné, identifié par caméra.`,
      },
      {
        question: `Ma fosse au Malmont, je la vidange tous les combien ?`,
        reponse: `Tous les quatre ans pour une fosse toutes eaux occupée à temps plein. Plus rapproché si vous êtes plus de quatre personnes ou si la vidange précédente avait beaucoup de boues. Une vidange préventive en automne évite les débordements lors des pluies intenses.`,
      },
      {
        question: `Combien coûte une inspection caméra sur un mas ancien ?`,
        reponse: `Cela dépend du nombre de branchements et de la longueur totale de réseau. Pour un mas standard avec deux à trois départs et trente mètres de canalisation, comptez une demi-journée. La borne en ligne donne un tarif estimatif précis selon votre situation.`,
      },
      {
        question: `Vous intervenez aussi sur Trans-en-Provence et Flayosc ?`,
        reponse: `Oui, ces communes limitrophes sont dans notre couverture standard. Nous y travaillons quasi quotidiennement, avec les mêmes délais qu'à Draguignan en moyenne.`,
      },
      {
        question: `Quel produit puis-je mettre dans ma fosse pour la maintenir ?`,
        reponse: `Aucun produit chimique déboucheur, c'est la règle absolue. Vous pouvez en revanche utiliser un activateur biologique en sachet une à deux fois par an pour relancer la flore bactérienne. C'est utile surtout après une période d'inoccupation prolongée.`,
      },
    ],

    conclusion: `Draguignan et son bassin demandent une plomberie qui connaît le haut-Var : ses sols, ses pentes, ses arbres puissants, ses habitats dispersés en assainissement individuel. Notre borne calcule un tarif en quatre clics, adapté à votre situation et à votre quartier, sans surprise. Pour les configurations particulières — racines récurrentes, mas ancien, accès difficile — un devis personnalisé est proposé. Notre standard est joignable 24h/7j et nos équipes interviennent dans le bassin draguignannais en moins de deux heures dans la grande majorité des cas, week-ends et jours fériés inclus.`,
  },

  // ============================================================
  // SAINT-RAPHAËL — station huppée, calanques, secondaires
  // ============================================================
  'saint-raphael': {
    intro: `Saint-Raphaël, 36 000 habitants permanents, est une station balnéaire qui combine littoral varié et résidentiel haut de gamme. Adossée au massif de l'Estérel, la commune s'étend sur près de trente-six kilomètres de côte, depuis l'Esquinade jusqu'aux limites du Trayas, en passant par Boulouris, Agay, Anthéor et Le Dramont. Cette extension géographique inhabituelle — l'une des communes les plus longues du littoral varois — implique des situations très contrastées : à quelques kilomètres de distance, on passe d'un habitat de centre-ville à des villas isolées dans les calanques rouges, souvent accessibles par des chemins étroits et raides. La proportion de résidences secondaires est l'une des plus élevées du Var, avec des maisons fermées neuf mois par an et utilisées intensément en été. Cette discontinuité d'occupation est l'une des causes principales des particularités techniques de la plomberie locale : siphons qui sèchent, biofilms qui s'installent dans des canalisations peu sollicitées, pompes de relevage qui reposent trop longtemps puis se grippent à la remise en service. Notre activité couvre l'ensemble du linéaire raphaëlois, avec une présence renforcée pendant les périodes de transition saisonnière qui concentrent les remises en service.`,

    habitat: `Saint-Raphaël aligne quatre grands types d'habitat. Le centre historique, autour de la basilique et du port, présente des immeubles compacts du XIXᵉ et début XXᵉ avec des canalisations héritées et des configurations souvent revues. Boulouris, prolongement résidentiel direct du centre, regroupe des villas du XXᵉ siècle, souvent rénovées, avec des terrains paysagers et des installations modernes. Valescure, plateau résidentiel haut de gamme, alterne villas individuelles et résidences golfiques avec des installations soignées et des contraintes de discrétion (les chantiers bruyants y sont mal vus). Enfin, la côte rocheuse au-delà d'Agay — Le Dramont, Anthéor, Le Trayas — concentre des villas isolées en calanques, souvent en pied de roches rouges, avec des accès véhicules limités et des installations techniques exposées aux embruns. Cette géographie a une conséquence : un débouchage à Boulouris demande un véhicule standard, mais une intervention au Trayas peut nécessiter un véhicule compact et des outils manuels portables. Nous formons nos techniciens à anticiper ces différences avant de partir.`,

    problemesFrequents: [
      {
        titre: 'Siphons secs et biofilms à la remise en service',
        serviceSlug: 'debouchage',
        texte: `Le problème numéro un sur les résidences secondaires raphaëloises, c'est la remise en service après plusieurs mois de fermeture. Les siphons s'évaporent, les canalisations développent des biofilms biologiques que personne n'a rincés, et la première semaine d'utilisation génère typiquement des odeurs, des écoulements lents et parfois des bouchons sur des matières que la flore stagnante ne dégrade plus correctement. Le débouchage curatif règle l'urgence du moment, mais nous proposons systématiquement un curage léger de prévention : un passage hydrocureur basse pression sur l'ensemble du réseau de la maison, qui évacue les dépôts accumulés et restaure la circulation libre. Cette intervention, programmée à la mi-juin idéalement, divise par trois la fréquence des urgences estivales sur les biens à occupation discontinue.`,
      },
      {
        titre: `Inspection caméra des villas avant location saisonnière`,
        serviceSlug: 'inspection-camera',
        texte: `De plus en plus de propriétaires de Boulouris, Agay et Valescure mettent leur bien en location saisonnière haut de gamme. Les plateformes et les agences spécialisées exigent désormais des installations parfaitement fonctionnelles : un écoulement lent ou une odeur persistante peut générer des avis dévastateurs et impacter durablement la rentabilité. L'inspection caméra préalable, idéalement en mai, identifie les zones à risque avant la haute saison. Le rapport vidéo permet d'arbitrer entre intervention préventive et simple surveillance. Sur les villas équipées de pompes de relevage en sous-sol, l'inspection caméra s'accompagne d'un test fonctionnel de la pompe et d'un nettoyage du puits.`,
      },
      {
        titre: 'Vidanges de fosses dans les calanques du Dramont',
        serviceSlug: 'fosse-septique',
        texte: `Plusieurs villas en bord de mer entre Le Dramont et Anthéor restent en assainissement non collectif, parce que le tout-à-l'égout n'a pas suivi sur tous les chemins escarpés des calanques. Les fosses toutes eaux ou micro-stations y sont fréquentes, dans des configurations parfois acrobatiques — fosse en surplomb, accès camion à plus de cinquante mètres, pente forte. Nous intervenons avec un véhicule adapté aux chemins étroits, et nous proposons systématiquement un examen visuel de l'épandage, dont l'état conditionne souvent plus que la fosse elle-même la fiabilité de l'ensemble. Le bordereau de suivi des déchets est remis systématiquement.`,
      },
      {
        titre: 'Pompes de relevage en sous-sol de Valescure',
        serviceSlug: 'pompe-relevage',
        texte: `Le plateau de Valescure et certains secteurs de Boulouris ont un sous-sol qui rend les niveaux semi-enterrés ou les caves dépendants de pompes de relevage. Sur les résidences secondaires, ces pompes peuvent rester inactives plusieurs mois, ce qui pose un problème spécifique : les joints sèchent, les flotteurs collent, et la remise en service en début de saison peut révéler une pompe morte alors que tout fonctionnait à la fermeture. Nous proposons un test de remise en service au printemps, qui prend une demi-heure et qui évite les mauvaises surprises. Pour les remplacements, nous installons préférentiellement des modèles avec contrôle d'usage à distance, qui permettent au propriétaire de vérifier le bon fonctionnement même quand il n'est pas sur place.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture s'étend sur tout le linéaire de Saint-Raphaël, ce qui est une particularité propre à cette commune extrêmement étirée. Les délais varient sensiblement entre le centre — où nous tenons sous l'heure — et les calanques du Trayas où le simple trajet peut dépasser quarante minutes en saison. Notre standard centralise les appels 24h/7j et oriente vers le véhicule disponible le plus proche.`,
      liste: [
        'Centre-ville et port',
        'Boulouris',
        'Agay',
        'Valescure',
        'Le Dramont',
        'Le Trayas',
        'Anthéor',
        `L'Esquinade`,
        'Santa-Lucia',
      ],
    },

    conseilsLocaux: `Saint-Raphaël concentre les problématiques propres aux résidences secondaires haut de gamme. La discontinuité d'occupation est l'ennemi numéro un de la plomberie locale : un bien fermé neuf mois par an cumule biofilms, siphons secs, pompes en repos prolongé, fosses sous-sollicitées. Trois gestes simples limitent fortement le risque. Premièrement, à la fermeture annuelle, faire couler quelques litres d'eau dans chaque siphon (lavabo, douche, WC, évier) — cela retarde l'évaporation. Deuxièmement, à la remise en service, prévoir une demi-journée de tests : faire fonctionner toutes les évacuations à plein débit pendant cinq à dix minutes chacune, vérifier visuellement les pompes de relevage, écouter les bruits anormaux. Troisièmement, programmer une visite préventive à la mi-juin tous les deux ou trois ans : nous contrôlons l'ensemble, traitons les zones à risque, et donnons un quitus pour la saison. Le coût modéré de cette préventive est sans commune mesure avec celui d'une urgence en pleine semaine d'occupation à six personnes. Pour les pompes de relevage marinisées exposées aux embruns à Anthéor ou au Trayas, un rinçage à l'eau douce après les tempêtes prolonge sensiblement la durée de vie.`,

    delais: `Notre activité est calibrée pour répondre aux contraintes de Saint-Raphaël : commune longue, saisonnalité marquée, présence de villas isolées. Nous tenons un délai moyen de soixante à quatre-vingt-dix minutes pour le centre, Boulouris et Agay, et de quatre-vingt-dix à cent vingt minutes pour les calanques au-delà du Dramont. En haute saison estivale, les délais peuvent légèrement s'allonger en raison du trafic routier ; nous compensons en pré-positionnant un véhicule sur le secteur les jours de pic. Notre standard est joignable 24h/7j et nous gardons en stock les pompes de relevage les plus courantes pour le secteur, notamment les modèles compatibles avec les eaux saumâtres.`,

    faq: [
      {
        question: `Ma résidence à Boulouris est fermée d'octobre à juin. Faut-il faire intervenir quelqu'un avant la remise en service ?`,
        reponse: `Une visite préventive en mai-juin évite la majorité des urgences estivales. Test des pompes, contrôle des siphons, inspection visuelle des évacuations. C'est une demi-journée qui sécurise plusieurs mois d'occupation à pleine capacité.`,
      },
      {
        question: `Je loue ma villa de Valescure en location saisonnière. Comment éviter les avis négatifs liés à la plomberie ?`,
        reponse: `Inspection caméra préventive en mai, contrôle des pompes de relevage, vidange préventive si fosse, et instructions claires pour les locataires sur ce qui ne doit pas aller dans les WC. Cette préparation réduit considérablement le risque d'incident en saison.`,
      },
      {
        question: `Pourquoi ma pompe de relevage à Boulouris est-elle morte alors qu'elle fonctionnait avant la fermeture ?`,
        reponse: `Plusieurs causes possibles : flotteur grippé par dépôt sec, joints durcis, condensation dans le boîtier électrique. Ces défaillances apparaissent typiquement après plusieurs mois d'inactivité. Un test manuel mensuel à distance, si l'installation le permet, prévient le problème.`,
      },
      {
        question: `Ma villa au Trayas est très isolée. Vous intervenez quand même ?`,
        reponse: `Oui, mais avec un préavis si possible. Le trajet seul peut dépasser une heure depuis notre base, donc nous préférons coordonner l'intervention pour optimiser le temps sur place. Pour les vraies urgences, nous partons immédiatement.`,
      },
      {
        question: `Faut-il un activateur biologique pour ma fosse au Dramont ?`,
        reponse: `Pour une résidence secondaire, oui : à la remise en service au printemps, un sachet d'activateur relance la flore bactérienne après une période de basse activité. Un seul apport suffit en général, avant l'arrivée des occupants estivaux.`,
      },
    ],

    conclusion: `Saint-Raphaël demande une plomberie qui sait gérer la discontinuité saisonnière propre aux résidences secondaires haut de gamme. Notre borne calcule en quatre clics un tarif transparent, adapté à votre quartier et à votre situation. Pour les configurations particulières — calanques isolées, location saisonnière, installations marinisées — un devis personnalisé est proposé. Notre standard 24h/7j et notre stock local permettent une intervention rapide sur l'ensemble du linéaire raphaëlois, du centre aux calanques, week-ends et jours fériés inclus.`,
  },

  // ============================================================
  // SIX-FOURS-LES-PLAGES — littoral exposé, vents salins
  // ============================================================
  'six-fours-les-plages': {
    intro: `Six-Fours-les-Plages, 34 000 habitants, est une commune côtière située entre Toulon et Bandol, qui présente une exposition au vent et à la mer parmi les plus fortes du littoral varois. Le mistral et le vent d'est y soufflent fréquemment avec puissance, et les embruns salins atteignent des installations situées parfois à plusieurs centaines de mètres du rivage. Cette caractéristique a une conséquence directe pour la plomberie locale : les pièces métalliques exposées — robinetteries extérieures, raccords de pompes, canalisations enterrées proches du sol — vieillissent significativement plus vite qu'à l'intérieur des terres. Le territoire communal s'étend du Brusc, ancien port de pêche au sud, jusqu'au Cap Sicié et aux plages de la Coudoulière, en passant par le quartier résidentiel de Reynier et le centre. Cette diversité, combinée à une saisonnalité touristique intense, fait de Six-Fours une commune où nous intervenons quotidiennement sur des typologies très variées : villas balnéaires, copropriétés modernes, ports résidentiels, hameaux de l'arrière-littoral. Notre approche s'adapte à chaque configuration, avec une attention particulière aux problématiques marines qui distinguent ce secteur.`,

    habitat: `Six-Fours présente quatre grands types d'habitat aux contraintes plombieres différentes. Le Brusc, ancien port de pêche, conserve un noyau de maisons traditionnelles à plomberie souvent remaniée, avec des canalisations qui combinent matériaux et époques. Le centre et Reynier alignent des copropriétés des années 1970-2000 et des pavillons individuels, avec des installations standard mais exposées au vent. La frange littorale autour de la Coudoulière, plage très fréquentée en été, regroupe résidences saisonnières et villas de bord de mer où le sable et le sel sont les principaux ennemis des évacuations. Enfin, l'arrière-pays vers Reynier-Haut et les hauteurs du Cap Sicié comprend des villas isolées, parfois en assainissement non collectif. Cette diversité explique que nos interventions à Six-Fours soient particulièrement variées : nous y traitons en proportion plus de pompes de relevage et de problèmes liés à la corrosion qu'ailleurs sur le littoral varois, simplement parce que l'exposition aux éléments y est plus marquée.`,

    problemesFrequents: [
      {
        titre: 'Sable et sel dans les évacuations de la Coudoulière',
        serviceSlug: 'debouchage',
        texte: `La plage de la Coudoulière et ses alentours immédiats connaissent un trafic estival intense, et les villas, locations saisonnières et copropriétés du secteur subissent un apport régulier de sable fin via les douches extérieures, les lavages d'équipements de plage et les rinçages d'enfants. Ce sable, combiné aux résidus salins qui cristallisent dans les coudes, finit par former des dépôts compacts qui réduisent progressivement le diamètre utile des canalisations. Le débouchage classique est inefficace sur ces dépôts : seul un curage hydrocureur à pression moyenne, qui fragmente puis évacue le sable, restaure la circulation. Nous conseillons aux propriétaires une intervention préventive en septembre, juste après la saison, qui évite que les dépôts ne s'accumulent saison après saison.`,
      },
      {
        titre: 'Inspection caméra des villas exposées au vent',
        serviceSlug: 'inspection-camera',
        texte: `Les villas du secteur Cap Sicié et les hauteurs de Reynier sont exposées à un vent d'est et un mistral particulièrement forts, qui sollicitent mécaniquement les canalisations enterrées proches de la surface, surtout sur des terrains pentus où la végétation peine à stabiliser le sol. Avec les années, les jonctions se relâchent, des contre-pentes apparaissent, et l'inspection caméra met en évidence ces dégradations avant qu'elles ne deviennent des fuites ou des bouchons. Nous travaillons aussi sur les évacuations en pied de piscine, fréquemment problématiques après plusieurs saisons d'utilisation, où les algues et le calcaire combinent leurs effets.`,
      },
      {
        titre: `Vidanges et entretien des fosses dans l'arrière-littoral`,
        serviceSlug: 'fosse-septique',
        texte: `Une partie des villas de Six-Fours, notamment vers Reynier-Haut et certains hameaux des hauteurs, reste en assainissement non collectif. Les fosses toutes eaux et micro-stations y subissent une particularité maritime : la nappe phréatique salée à proximité côtière peut perturber le fonctionnement bactérien si l'étanchéité de la fosse n'est pas parfaite. Nous contrôlons systématiquement à chaque vidange l'absence d'infiltrations latérales, et nous remplaçons les préfiltres qui se colmatent plus rapidement en zone côtière qu'à l'intérieur des terres. Bordereau de suivi des déchets remis à chaque intervention.`,
      },
      {
        titre: 'Pompes de relevage corrodées par le sel marin',
        serviceSlug: 'pompe-relevage',
        texte: `C'est probablement le problème le plus fréquent à Six-Fours. Les pompes de relevage standard, conçues pour un usage en intérieur dans des conditions stables, ont une durée de vie sensiblement réduite quand elles sont exposées à l'air salin du littoral. Les bobinages se dégradent, les joints durcissent, les flotteurs en plastique vieillissent prématurément. Nous installons systématiquement des modèles spécifiquement marinisés sur les sites exposés, avec un surcoût modéré à l'achat mais une durée de vie multipliée par deux ou trois. La maintenance annuelle, avec démontage et nettoyage du puits, prolonge encore la durée utile et permet d'anticiper les remplacements plutôt que de les subir en urgence.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur Six-Fours-les-Plages inclut l'ensemble du territoire communal, du Brusc au Cap Sicié en passant par le centre et la frange littorale. Nous travaillons aussi sur les communes limitrophes — Sanary-sur-Mer, Bandol partiellement, La Seyne — avec des problématiques marines comparables. Les délais sont calibrés pour rester sous quatre-vingt-dix minutes en moyenne, avec des intervals plus courts pour le centre et la côte facilement accessible.`,
      liste: [
        'Le Brusc',
        'Centre-ville',
        'La Coudoulière',
        'Reynier',
        'Reynier-Haut',
        'Cap Sicié',
        'Six-Fours plage',
        'Les Lônes',
        `L'Aigle`,
      ],
    },

    conseilsLocaux: `Le climat très exposé de Six-Fours impose des gestes spécifiques pour préserver les installations. Le rinçage à l'eau douce des pièces métalliques exposées (robinetteries extérieures, raccords de pompes accessibles) deux fois par an, idéalement après les épisodes de mistral et après les coups de mer importants, retarde significativement la corrosion saline. Pour les habitants en bord de plage, le rinçage systématique des évacuations à grande eau après chaque journée à forte affluence (douche, équipement, enfants) limite l'accumulation de sable. Pour les copropriétés et résidences en sous-sol équipées de pompes de relevage, un test mensuel manuel de la commande prend trente secondes et permet de détecter une défaillance électrique avant qu'elle ne devienne une panne complète. Pour les villas en assainissement non collectif des hauteurs, la vidange préventive doit être programmée en automne, avant la saison des pluies cévenol qui peut saturer les fosses, et en respectant la fréquence quadriennale standard. Enfin, sur les pompes marinisées exposées, un changement préventif des joints tous les trois ans, à coût modéré, allonge la durée de vie utile de plusieurs années.`,

    delais: `Nous tenons un délai d'intervention moyen de soixante à quatre-vingt-dix minutes sur Six-Fours en journée. La proximité de notre base toulonnaise nous permet d'intervenir rapidement même en haute saison, avec un véhicule pré-positionné les jours de pic estival. Notre standard est joignable 24h/7j, et nous gardons en stock les pompes de relevage marinisées les plus courantes pour le secteur, ce qui permet de remplacer le jour même dans la majorité des cas. Pour les vidanges programmées et les inspections caméra, nous proposons des créneaux à la demi-journée pour optimiser les déplacements et limiter le coût d'intervention.`,

    faq: [
      {
        question: `Ma pompe de relevage n'a pas tenu trois ans à La Coudoulière. C'est normal ?`,
        reponse: `Pour une pompe standard sans protection contre l'air salin, oui, c'est cohérent avec la durée de vie observée. Une pompe marinisée tient en moyenne deux à trois fois plus longtemps dans le même contexte. Nous installons couramment ce type de modèle.`,
      },
      {
        question: `Faut-il un produit spécial pour les évacuations qui prennent du sable ?`,
        reponse: `Non, aucun produit chimique n'est efficace sur du sable. Seul un curage hydrocureur à pression adaptée fragmente et évacue le dépôt. Les produits chimiques agressifs risquent d'abîmer les canalisations sans résoudre le problème.`,
      },
      {
        question: `Combien coûte une vidange de fosse vers Reynier-Haut ?`,
        reponse: `Le tarif dépend du volume et de la distance d'accès du camion. Pour une fosse standard de 3 000 litres avec accès direct, comptez environ une heure sur place. La borne en ligne donne un tarif estimatif précis selon votre situation.`,
      },
      {
        question: `Est-ce que vous intervenez sur le port du Brusc ?`,
        reponse: `Oui, le port du Brusc et ses copropriétés sont dans notre couverture standard. Les pompes de relevage portuaires sont une de nos spécialités locales, avec un stock de pièces marinisées prêt à l'usage.`,
      },
      {
        question: `Mon évacuation cuisine sent quand le vent vient de la mer. Pourquoi ?`,
        reponse: `Le vent de mer crée parfois une dépression atmosphérique qui aspire les gaz du tout-à-l'égout via les évents et les évacuations. Une vérification du clapet anti-retour et du siphon résout généralement le problème ; sinon, un passage caméra identifie une éventuelle anomalie.`,
      },
    ],

    conclusion: `Six-Fours-les-Plages demande une plomberie qui sait composer avec le sel, le vent, le sable et la saisonnalité. Notre borne calcule en quatre clics un tarif adapté à votre intervention, en intégrant les particularités côtières. Pour les configurations spécifiques — pompes marinisées, fosses près de nappe salée, accès difficiles — un devis personnalisé est proposé. Notre standard 24h/7j et notre stock local de pompes adaptées permettent une intervention rapide sur l'ensemble de la commune et sur les communes côtières limitrophes.`,
  },

  // ============================================================
  // LA GARDE — banlieue est de Toulon, université, copros
  // ============================================================
  'la-garde': {
    intro: `La Garde, 25 000 habitants, est une commune de la première couronne toulonnaise, située directement à l'est de Toulon. Son urbanisme a été profondément marqué par deux dynamiques : l'implantation de l'université de Toulon, dont les bâtiments principaux se trouvent sur le territoire communal au quartier de La Bouilla, et le développement de la technopole varoise sur le plateau Sainte-Marguerite. Cette double vocation universitaire et technologique a attiré une population active et étudiante, et a généré un parc immobilier marqué par les copropriétés modernes des années 1980-2010, à la fois résidences principales et logements étudiants. La Garde n'est pas une commune balnéaire — elle est légèrement en retrait du littoral, avec une façade maritime via la côte des Salins-d'Hyères mais en partie éloignée du cœur urbain. Cette position de banlieue interne a une conséquence pour la plomberie : le territoire est presque intégralement raccordé au tout-à-l'égout collectif, et les problématiques dominantes concernent les copropriétés et les installations modernes plutôt que les fosses individuelles ou les pompes marinisées. Notre activité y porte essentiellement sur les copropriétés universitaires, les pavillons résidentiels et les commerces.`,

    habitat: `Trois grands ensembles structurent l'habitat gardéen. Le centre ancien, autour de la place de la République et de l'église Saint-Maur, regroupe des immeubles plus anciens, parfois des XVIIIᵉ et XIXᵉ siècles, dans un tissu compact et parfois difficile d'accès. Le quartier Sainte-Marguerite, à proximité immédiate de l'université, concentre des copropriétés des années 1990-2010, souvent à forte densité étudiante, avec des logements partagés et des sollicitations de plomberie sensiblement supérieures à la moyenne. Les pavillons individuels du Plan, du Touar et de La Pauline forment un troisième ensemble, plus calme et avec des installations plus standard. Cette typologie particulière a une conséquence directe : à La Garde, la majorité de nos interventions concerne des copropriétés en gestion collective, ce qui implique des relations régulières avec les syndics locaux et une connaissance fine des contrats d'entretien. Nous travaillons systématiquement sur la base d'un diagnostic posé qui permet de répartir clairement les responsabilités entre les parties privatives et les parties communes.`,

    problemesFrequents: [
      {
        titre: 'Engorgements répétés dans les copropriétés universitaires',
        serviceSlug: 'debouchage',
        texte: `Les copropriétés à forte concentration étudiante autour de Sainte-Marguerite et de La Bouilla connaissent un taux de bouchons supérieur à la moyenne, principalement parce que les comportements de jeunes locataires diffèrent des occupants permanents : produits cosmétiques jetés dans les éviers, lingettes prétendument biodégradables dans les WC, cheveux non filtrés dans les douches. Le débouchage classique règle l'urgence du moment mais n'élimine pas la cause. Nous travaillons régulièrement avec les syndics locaux sur deux axes : un contrat d'entretien annuel des colonnes principales, et l'affichage en parties communes de bonnes pratiques simples. Cette combinaison réduit significativement la fréquence des urgences sans investissement majeur.`,
      },
      {
        titre: 'Inspection caméra des copropriétés des années 1990',
        serviceSlug: 'inspection-camera',
        texte: `Les copropriétés construites dans les années 1990 à La Garde, particulièrement celles des secteurs résidentiels denses, arrivent à un âge où leurs canalisations en PVC d'origine commencent à montrer les premiers signes de vieillissement : ovalisations, contre-pentes mineures, joints qui se relâchent. L'inspection caméra périodique — typiquement tous les dix à quinze ans — permet de planifier intelligemment les rénovations partielles avant qu'un incident majeur ne survienne. Nous travaillons souvent en partenariat avec les syndics qui souhaitent budgétiser ces opérations dans leurs plans pluriannuels de travaux. Le rapport vidéo et la cartographie servent de pièces de référence pour les copropriétaires.`,
      },
      {
        titre: 'Bacs à graisses dans les commerces et restaurants',
        serviceSlug: 'fosse-septique',
        texte: `La Garde, malgré sa vocation principalement résidentielle, abrite plusieurs commerces de bouche, restaurants universitaires et établissements de restauration rapide à proximité de la fac. Tous sont équipés réglementairement de bacs à graisses qui doivent être vidangés régulièrement, en moyenne tous les six mois pour un usage soutenu, plus rapproché pour les forts producteurs. Nous travaillons avec un camion adapté à ces opérations spécifiques, avec un protocole de nettoyage qui inclut le rinçage haute pression du bac et le contrôle visuel de l'état général. Le bordereau de suivi des déchets est obligatoire pour les exploitants commerciaux, et nous le fournissons systématiquement.`,
      },
      {
        titre: 'Pompes de relevage en sous-sols de copropriétés',
        serviceSlug: 'pompe-relevage',
        texte: `Plusieurs copropriétés gardéennes, particulièrement celles construites sur des terrains en pente ou avec des sous-sols partiellement enterrés, dépendent de pompes de relevage collectives pour évacuer les eaux usées du parking sous-sol et des locaux techniques. Ces installations sont sous responsabilité du syndic, et leur défaillance peut générer des sinistres en chaîne dans les caves et les emplacements de stationnement. Nous proposons des contrats de maintenance bisannuels qui incluent le test fonctionnel, le nettoyage du puits, le contrôle des flotteurs et la vérification électrique. Cette préventive coûte significativement moins cher qu'un sinistre dégât des eaux multi-lots, qui mobilise expert d'assurance, sinistre, etc.`,
      },
    ],

    quartiers: {
      intro: `Notre couverture sur La Garde inclut l'ensemble du territoire communal et les communes immédiatement limitrophes, particulièrement Le Pradet et La Crau qui partagent plusieurs problématiques. Nous travaillons régulièrement avec les syndics locaux qui connaissent nos équipes, ce qui simplifie la coordination des interventions sur les parties communes. Les délais d'intervention sont calibrés pour rester sous une heure dans la majorité des cas, week-ends et soirées inclus.`,
      liste: [
        'Centre-ville (place de la République)',
        'Sainte-Marguerite',
        'La Bouilla (université)',
        'Le Plan',
        'La Pauline',
        'Le Touar',
        'Romain Rolland',
        'Le Pradet (commune limitrophe)',
        'La Crau (commune limitrophe)',
      ],
    },

    conseilsLocaux: `La Garde est une commune où la dimension collective domine la plomberie : la plupart des résidents vivent en copropriété, et beaucoup de problèmes sont d'origine collective. Trois conseils s'imposent. Premièrement, pour les copropriétaires ou syndics, la souscription d'un contrat d'entretien annuel des colonnes principales — cuisine, salle de bain, WC — divise par deux à trois la fréquence des urgences. Cet entretien, qui inclut typiquement un curage hydrocureur léger, coûte modérément quand il est lissé sur l'année, mais évite les dépannages d'urgence à répétition. Deuxièmement, pour les locataires étudiants, l'installation systématique de filtres à cheveux sur les douches et de bouchons-tamis sur les éviers prévient l'essentiel des bouchons individuels. Ces accessoires coûtent quelques euros et durent des années. Troisièmement, pour les commerces de bouche, le respect strict de la fréquence de vidange des bacs à graisses, jamais inférieure à six mois pour un restaurant en activité, est une obligation réglementaire mais aussi une protection contre les bouchons en cascade qui peuvent contaminer le réseau de toute une rue. Notre équipe accompagne aussi les exploitants dans la documentation administrative requise.`,

    delais: `La proximité immédiate avec Toulon nous permet de tenir un délai d'intervention moyen de quarante-cinq à soixante-quinze minutes sur l'ensemble de La Garde, en journée comme en soirée. Le standard est joignable 24h/7j, et nous gardons en stock les pièces standard les plus demandées par les copropriétés du secteur. Pour les interventions programmées avec syndics, nous proposons des créneaux flexibles permettant de coordonner avec les locataires et les gardiens. Pour les urgences, le diagnostic téléphonique préalable, qui dure en moyenne cinq à dix minutes, permet de partir avec le matériel adéquat — un curage hydrocureur ne demande pas le même véhicule qu'un dépannage de pompe.`,

    faq: [
      {
        question: `Mon immeuble à Sainte-Marguerite a des bouchons réguliers. C'est ma faute ou celle des voisins ?`,
        reponse: `Si le bouchon est sur la colonne commune, ce n'est pas une question de "faute" individuelle mais une responsabilité collective de la copropriété. Notre passage caméra localise précisément le bouchon et détermine s'il est privatif ou commun, ce qui clarifie immédiatement la prise en charge.`,
      },
      {
        question: `Combien coûte un contrat d'entretien annuel pour ma copropriété au Plan ?`,
        reponse: `Cela dépend du nombre de logements et de la longueur des colonnes à entretenir. Pour une copropriété standard de vingt à trente logements, le coût annuel reste modéré, et il est généralement amorti dès la première urgence évitée. Devis personnalisé sur demande.`,
      },
      {
        question: `Mon restaurant doit avoir un bac à graisses ? C'est obligatoire ?`,
        reponse: `Oui, c'est une obligation réglementaire pour tous les établissements de restauration. La fréquence de vidange dépend de l'activité, mais ne peut généralement pas être inférieure à six mois. Nous fournissons systématiquement le bordereau de suivi requis.`,
      },
      {
        question: `Combien de temps pour une vidange de bac à graisses ?`,
        reponse: `Pour un bac standard de 250 à 500 litres avec accès direct, comptez environ trente à quarante-cinq minutes. L'opération inclut le pompage, le rinçage haute pression et le contrôle visuel. Nous proposons des créneaux en dehors des heures d'ouverture pour limiter la gêne.`,
      },
      {
        question: `Vous travaillez aussi avec les syndics du Pradet ?`,
        reponse: `Oui, plusieurs syndics du Pradet et de La Crau font appel à nos équipes régulièrement. Les problématiques de copropriétés modernes sont communes à toute la première couronne toulonnaise, et nous adaptons nos interventions à chaque contexte.`,
      },
    ],

    conclusion: `La Garde est une commune où la plomberie collective domine, avec des copropriétés modernes à entretenir intelligemment et des commerces à accompagner réglementairement. Notre borne calcule en quatre clics un tarif adapté à votre intervention. Pour les contrats d'entretien et les chantiers récurrents avec syndics, un devis personnalisé est proposé. Notre standard 24h/7j et notre proximité immédiate avec le territoire communal permettent une intervention rapide, sous l'heure dans la grande majorité des cas, week-ends et jours fériés inclus.`,
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
