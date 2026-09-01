import type { Dictionary } from "@/i18n/types"

export const fr: Dictionary = {
  meta: {
    title: "TurboDevs — Logiciels sur mesure, conçus pour tourner 24 h/24, 7 j/7",
    description:
      "TurboDevs est un studio d'ingénierie logicielle full-service qui conçoit des systèmes sur mesure pour le web, l'automatisation et le Web3 — pensés pour continuer à fonctionner jour et nuit, pas seulement le jour du lancement.",
  },
  nav: {
    work: "Réalisations",
    grantfox: "Grantfox",
    approach: "Approche",
    notes: "Notes",
    contact: "Contact",
    startProject: "Démarrer un projet",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    eyebrow: "Studio d'ingénierie logicielle",
    headline: "Des logiciels sur mesure qui fonctionnent — jour et nuit.",
    paragraph:
      "Systèmes full-stack, pipelines d'automatisation et intégrations Web3, conçus pour les équipes qui ont besoin de solutions sur mesure fiables en continu. Ingénierie polyglotte — TypeScript, Python, Solidity/Soroban — éprouvée sur la conformité fiscale, les paiements Web3 et des SaaS en production tournant 24 h/24, 7 j/7.",
    ctaPrimary: "Voir les réalisations",
    ctaSecondary: "Parlez-nous",
    scrollHint: "Défiler vers les réalisations",
  },
  services: {
    eyebrow: "Ce que nous construisons",
    title: "Quatre disciplines, un seul standard d'ingénierie.",
    items: [
      {
        title: "Ingénierie produit full-stack",
        description:
          "Frontends React/Next.js, services TypeScript et Python, et la discipline CI/tests nécessaire pour les livrer en continu — la même stack qui fait tourner le SaaS de mise en relation d'emploi de turbotrabajo, en production.",
      },
      {
        title: "Intégration Web3 et blockchain",
        description:
          "Authentification native au wallet, vérification de paiement on-chain et systèmes proches des smart contracts sur Stellar/Soroban — conçus pour le checkout de stellarfit confirmé par Horizon, et déployés dans la marketplace en production de Grantfox.",
      },
      {
        title: "Systèmes d'automatisation et de conformité",
        description:
          "Automatisation par navigateur headless et par API pour des processus que les régulateurs contrôlent réellement — lecture seule par défaut, conçue pour continuer à fonctionner correctement dans l'incertitude, le schéma derrière sii et previred.",
      },
      {
        title: "Pipelines intégrant l'IA, ancrés dans les faits",
        description:
          "Les LLM rédigent le texte autour de chiffres que votre code a déjà calculés — jamais les chiffres eux-mêmes. Chaque affirmation générée est revérifiée par rapport à un ensemble de faits figés avant sa publication.",
      },
    ],
  },
  work: {
    eyebrow: "Réalisations sélectionnées",
    title: "Public, vérifiable, et toujours opérationnel.",
    items: {
      sii: {
        kicker: "Automatisation pour l'administration fiscale",
        description:
          "Un noyau TypeScript, une CLI et un serveur MCP automatisant le service des impôts chilien (SII), construits autour de garde-fous qui garantissent sa fiabilité, loin de simples scripts « best-effort ».",
      },
      previred: {
        kicker: "Automatisation du portail de cotisations retraite",
        description:
          "Automatisation en lecture seule du portail de cotisations de retraite chilien, conçue pour que les programmes de paiement soient impossibles à déclencher par construction — pas simplement déconseillés lors d'une revue de code.",
      },
      stellarfit: {
        kicker: "Paiements Web3",
        description:
          "Paiement d'abonnement réglé sur la blockchain Stellar — l'accès n'est accordé qu'après confirmation par Horizon d'un paiement à usage unique correspondant au memo attendu, sans nécessiter de confiance envers un tiers dépositaire.",
      },
      glowcheck: {
        kicker: "Vision par ordinateur",
        description:
          "Analyse du visage et de la peau combinant des modèles démographiques DeepFace/TensorFlow avec des métriques originales de teint (ITA), d'érythème et d'asymétrie faciale.",
      },
      turbotrabajo: {
        kicker: "SaaS en production",
        description:
          "Une plateforme de candidature à l'emploi en production : authentification Firebase, mise en correspondance de profils, un portefeuille de jetons dont le solde fait autorité côté serveur, et des paiements Flow.cl de bout en bout.",
      },
      "battery-storage-reporting": {
        kicker: "Énergie · Reporting ancré par IA",
        description:
          "Reporting quotidien automatisé des performances d'un système de stockage par batteries à l'échelle du réseau électrique : un moteur d'indicateurs (KPI) déterministe couplé à une couche narrative pilotée par LLM, dont chaque chiffre généré est revérifié par rapport aux faits figés avant publication — garantissant un rapport fiable, jour après jour.",
      },
    },
  },
  grantfox: {
    eyebrow: "Mission phare",
    title: "Contribuer à la marketplace Stellar de Grantfox, en production",
    paragraph:
      "Grantfox exploite une marketplace native au wallet pour des prompts et agents IA, réglée sur Stellar. Nous intervenons directement sur son backend NestJS et son frontend Next.js en tant que contributeurs externes — le genre de travail qui ne compte que si un vrai relecteur, pas nous, en valide la justesse.",
    points: [
      "Sécurité de déploiement renforcée : les environnements hors développement exigent un secret JWT explicite avant de démarrer, et refusent de démarrer si les indicateurs de paiement simulé ou d'amorçage de base de données sont laissés activés.",
      "Autorisation cantonnée au wallet : le solde, l'historique des transactions et les achats sont dérivés uniquement du principal authentifié — vérifié de sorte qu'un compte ne puisse ni lire ni modifier celui d'un autre.",
      "Interface marketplace livrée : les pages tableau de bord, marketplace, détail d'actif et wallet mettant en œuvre le parcours d'achat et de livraison des prompts de la plateforme.",
    ],
    cta: "Visiter Grantfox",
  },
  approach: {
    eyebrow: "Comment nous travaillons",
    title: "Conçu pour continuer à fonctionner.",
    paragraph:
      "Chaque mission ci-dessus applique la même discipline : des systèmes conçus pour rester fiables en conditions réelles, et chaque chiffre publié retraçable jusqu'à une source vérifiable. La frontière entre ce qu'un LLM écrit et ce qu'il est autorisé à affirmer est imposée dans le code — pour que ce que nous disons corresponde exactement à ce qui tourne réellement.",
    pillars: [
      {
        title: "Le déterminisme d'abord",
        body: "Les chiffres proviennent du code, jamais d'un modèle. Là où un LLM intervient, il rédige du texte à partir de faits déjà calculés — il ne calcule jamais le fait lui-même.",
      },
      {
        title: "Conçu pour la disponibilité",
        body: "Une configuration manquante, une clé jamais renouvelée, une entrée invérifiable — le système les détecte avant qu'ils n'atteignent la production, pour que ce qui est en ligne continue de fonctionner au lieu de se dégrader silencieusement.",
      },
      {
        title: "Affirmations traçables",
        body: "Chaque chiffre que nous publions, qu'il concerne notre propre travail ou celui d'un client, s'appuie sur une source que nous pouvons citer. Si nous ne pouvons pas la sourcer, nous ne la publions pas.",
      },
    ],
  },
  demo: {
    eyebrow: "Voyez-le fonctionner",
    title: "Actionnez un interrupteur. Voyez ce qui le maintient en marche.",
    paragraph:
      "Il s'agit du même garde-fou de déploiement que celui qui tourne réellement dans le backend de Grantfox, réduit à un interrupteur. Modifiez les indicateurs ci-dessous et lancez le déploiement pour voir la vérification exacte qui empêche une build mal configurée d'atteindre la production — la logique s'exécute entièrement dans votre navigateur, sans fausse API simulant un serveur.",
    panelLabel: "panneau de déploiement",
    toggles: {
      jwt: { label: "JWT_SECRET défini", description: "Secret explicite pour signer les jetons d'authentification." },
      seed: { label: "DB_SEED_ON_STARTUP", description: "Amorce un solde de wallet de démonstration au démarrage." },
      nodeEnv: { label: "NODE_ENV=production", description: "Verrouillé pour cette démonstration." },
    },
    deployButton: "Déployer",
    terminalPrompt: "$ NODE_ENV=production npm run start",
    emptyState: "// appuyez sur déployer pour lancer la vérification",
    reasons: {
      jwtMissing: "JWT_SECRET non défini — reviendrait au secret de développement publié, permettant à n'importe qui de forger un jeton valide",
      seedOn: "DB_SEED_ON_STARTUP est activé en production — le démarrage amorcerait un wallet fictif de 450 crédits",
    },
    refusedPrefix: "✗ Démarrage refusé — ",
    successLine: "✓ Séquence de démarrage lancée — toutes les vérifications de sécurité sont passées.",
  },
  notes: {
    eyebrow: "Notes de terrain",
    title: "Notes tirées du travail.",
    paragraph:
      "De courts articles sur les décisions d'ingénierie réelles derrière les réalisations ci-dessus — pas des résumés, le raisonnement.",
    readSuffix: "de lecture",
    items: {
      "fail-closed-deployments": {
        title: "Pourquoi nos déploiements refusent de démarrer",
        dek: "Chez Grantfox, nous avons rendu un ensemble de mauvaises configurations impossibles à exécuter en production, en faisant planter le processus au démarrage plutôt que de le laisser se dégrader silencieusement.",
        readTime: "5 min",
        body: [
          "Nous contribuons à Grantfox, une marketplace native au wallet pour prompts et agents IA construite sur Stellar, en tant que contributeurs externes travaillant sur son backend NestJS et son frontend Next.js en production. Une bonne partie de ce travail n'avait rien à voir avec des fonctionnalités. Elle a consisté à parcourir la séquence de démarrage et à se demander, pour chaque variable d'environnement modifiant un comportement de sécurité, ce qui se passe si elle est simplement laissée non définie en production. Dans plusieurs cas, la réponse honnête était : l'application démarre quand même, en utilisant une valeur par défaut qui convenait sur un ordinateur portable et qui est dangereuse sur un serveur.",
          "Le cas le plus clair était JWT_SECRET. L'authentification par jeton n'est jamais plus solide que le secret utilisé pour signer et vérifier les jetons ; quiconque détient ce secret peut forger un jeton prétendant être n'importe quel utilisateur, car le serveur n'a aucun moyen de distinguer un jeton auto-émis d'un jeton qu'il a lui-même délivré. Le backend revenait auparavant à un secret de développement publié lorsque JWT_SECRET n'était pas défini. Cette chaîne existe dans l'historique du code source et dans la documentation de configuration locale, ce qui signifie qu'elle n'a rien d'un secret — c'est une valeur connue. Un service qui tourne avec ce secret en production n'est pas faiblement protégé, il est non authentifié, avec juste quelques étapes en plus : forger un jeton avec la clé bien connue, le signer, le présenter, et l'application n'a aucune base pour le refuser.",
          "La correction a consisté à ne plus tolérer l'absence de JWT_SECRET dès lors que l'application se croit en conditions réelles. Au démarrage, l'application lit son mode d'environnement, et en dehors du développement, elle exige désormais que JWT_SECRET soit explicitement défini, sous peine de refuser de démarrer. Aucun repli, aucun avertissement suivi d'une poursuite silencieuse. C'est un compromis délibéré : nous avons renoncé au confort du « ça marche quand même dans n'importe quel environnement que quelqu'un a oublié de configurer », en échange de la garantie qu'un processus de production ne tourne jamais silencieusement avec une clé qu'un attaquant peut retrouver. Un plantage au moment du déploiement est bruyant, immédiat, et bloque la mise en production. Un repli silencieux reste invisible jusqu'à ce que quelqu'un le découvre.",
          "Le même passage en revue a fait apparaître une seconde catégorie qui semble sans rapport, mais ne l'est pas : PAYMENT_SIMULATION_ENABLED, MOCK_PAYMENT_ENABLED, MOCK_PAYMENT_FAIL et DB_SEED_ON_STARTUP. Chacune existe pour une raison légitime — on veut tester le parcours d'achat sans toucher à Stellar, ou sans fournisseur de paiement dans la boucle, ou avec un jeu de données reproductible lorsqu'un environnement neuf démarre. L'indicateur d'amorçage, en particulier, écrit un wallet fictif avec un solde de 450 crédits pour avoir quelque chose à tester. Rien de tout cela ne pose problème en développement. Cela devient un problème dès l'instant où c'est encore activé dans un déploiement accessible à de vrais utilisateurs.",
          "Nous traitons un solde amorcé et un paiement simulé réussi comme le même mode de défaillance, parce que structurellement, ils le sont. Une fois ce wallet de 450 crédits écrit en base de données, rien en aval ne peut le distinguer d'un solde issu d'un véritable achat — les chemins de code du wallet, des transactions et des achats lisent tous les mêmes tables et ne portent aucun indicateur de provenance signalant que ce crédit a été inventé. Un indicateur de paiement simulé laissé activé a exactement la même propriété : il fait que le parcours d'achat rapporte un succès sans qu'aucun argent n'ait bougé, et ce succès est indiscernable d'un vrai pour tout ce qui le lit ensuite. Un état fabriqué reste un état fabriqué, quel que soit l'indicateur qui l'a produit — c'est pourquoi les déploiements réels refusent désormais de démarrer si l'un de ces quatre indicateurs est activé, tout comme ils refusent de démarrer sans JWT_SECRET.",
          "Le mécanisme est de même nature dans les deux cas : conditionner le comportement à risque à l'environnement dans lequel le processus croit se trouver, et faire en sorte que cette condition échoue de façon fermée plutôt qu'ouverte. Échouer de façon ouverte signifie qu'une variable non définie ou mal configurée se résout silencieusement en supposant qu'on est en développement, en supposant que tout va bien — exactement le contexte où personne ne surveille cela. Échouer de façon fermée signifie que la même configuration manquante se résout par un refus de démarrer, ce qui transforme une faille de sécurité discrète en un échec de déploiement évident et impossible à manquer. Nous préférons qu'un ingénieur fixe un journal de démarrage planté et définisse la bonne variable, plutôt que de laisser cette faille active en production le temps que quelqu'un la remarque.",
          "La leçon générale que nous réapprenons sans cesse, c'est que les valeurs par défaut pensées pour l'expérience du développeur et celles pensées pour la sécurité en production ne sont généralement pas les mêmes, et qu'un code qui ne distingue pas les deux environnements finira par choisir la valeur pratique au pire moment. Il est moins coûteux de rendre cette distinction explicite au démarrage du processus — une vérification, un seul endroit, un échec bruyant — que de compter sur une configuration manuelle correcte à chaque déploiement en espérant que la différence ne compte jamais.",
        ],
      },
      "llm-grounding": {
        title: "Apprendre à un LLM où s'arrêtent les faits",
        dek: "Sur un pipeline de reporting pour batteries à l'échelle du réseau électrique, nous avons laissé un LLM rédiger les phrases et jamais les chiffres — puis nous avons quand même vérifié chaque chiffre qu'il a écrit.",
        readTime: "6 min",
        body: [
          "Nous avons construit le rapport de performance quotidien d'un système de stockage d'énergie par batteries à l'échelle du réseau électrique de la même façon que n'importe quel pipeline de reporting, jusqu'à la toute dernière étape. Les données SCADA arrivent du site, un moteur d'indicateurs (KPI) en Python les transforme en chiffres qui comptent — état de charge, cycles de charge et de décharge, disponibilité, tout ce que le contrat exige — et ces chiffres sont figés dans un ensemble de faits avant que quoi que ce soit d'autre ne se produise. La dernière étape, c'est la rédaction : quelqu'un doit transformer un tableau d'indicateurs en un rapport qu'un humain a envie de lire. C'est cette étape que nous avons confiée à un LLM, et c'est aussi celle en laquelle nous avons le moins confiance — c'est pourquoi tout le pipeline est construit autour de l'idée de ne pas lui faire confiance.",
          "Le choix de conception sous-jacent est que le LLM ne calcule jamais rien. Il ne fait la somme d'aucune colonne, ne calcule la moyenne d'aucune semaine, ne dérive aucun pourcentage à partir de deux chiffres que nous lui donnons. Chaque chiffre qui apparaît dans le rapport final a été calculé par le moteur KPI en Python, point final, avant même que le LLM ne voie les données. Le rôle du modèle est strictement narratif : à partir de cet ensemble de faits figés, rédiger des paragraphes qu'un opérateur de centrale aurait envie de lire. Cette séparation compte, car un moteur KPI déterministe est testable au sens habituel du terme — même entrée, même sortie, à chaque fois — alors qu'un LLM à qui l'on demanderait en plus de faire de l'arithmétique en coulisses n'est ni déterministe, ni, selon notre expérience, fiable pour le faire correctement. Nous ne le lui demandons donc pas. Nous lui demandons d'écrire, et nous laissons le code se charger de la seule partie du travail où se tromper est silencieux et coûteux.",
          "L'expression « ensemble de faits figés » n'est pas qu'une formule prudente dans cette phrase — elle fait un vrai travail. Elle signifie que la sortie du moteur KPI est verrouillée avant que le LLM ne soit invoqué — une structure fixe de chiffres et de libellés donnée au modèle comme contexte, qu'il ne peut ni réviser, ni recalculer, ni étendre. Le LLM peut choisir comment formuler un chiffre, dans quel ordre le présenter, quels chiffres mettre en avant dans le récit d'une journée donnée, mais il ne peut pas introduire un chiffre qui ne figure pas déjà dans cet ensemble figé. Si le modèle veut dire que le système s'est déchargé pendant un certain nombre d'heures, ce chiffre doit déjà exister dans les faits qui lui ont été remis. Rien en aval du moteur KPI n'a le droit d'inventer un fait.",
          "Cette contrainte n'a d'importance que si quelque chose la fait respecter : après que le LLM a rédigé son brouillon, une vérification d'ancrage distincte relit le résultat. Mécaniquement, c'est simple : on extrait chaque jeton numérique du texte généré — chaque chiffre, pourcentage et décompte que le modèle a écrit — et on le fait correspondre à l'ensemble de faits figés. Un chiffre présent dans le texte du LLM qui ne peut être rattaché à un chiffre réellement calculé par Python constitue une non-correspondance. Peu importe qu'il s'agisse d'une statistique hallucinée ou d'un arrondi d'apparence plausible d'un chiffre réel qui a dérivé pendant la reformulation — dans les deux cas, c'est un chiffre du rapport qui ne provient pas des données, et c'est exactement le mode de défaillance que ce pipeline existe pour détecter. Un seul jeton numérique non apparié, où que ce soit dans le résultat, bloque la publication du rapport. Pas signalé pour relecture, pas publié avec une réserve — bloqué.",
          "Nous considérons la vérification d'ancrage comme suffisamment critique pour mériter sa propre couverture de tests, et pas seulement des contrôles ponctuels sur quelques rapports d'exemple. L'ensemble du pipeline s'appuie sur 648 tests, et aucun d'entre eux n'effectue d'appel réseau — les calculs KPI, l'étape de gel des faits et la vérification d'ancrage elle-même sont tous exécutés de manière déterministe, hors ligne, à chaque exécution. C'est une conséquence directe du fait de séparer calcul et narration : les parties du système où une erreur catastrophique est la plus facile à commettre (l'arithmétique sur des chiffres énergétiques et financiers réels) sont aussi celles qu'il est le moins coûteux de tester de manière exhaustive, car elles ne dépendent pas de ce qu'un LLM a envie de produire ce jour-là.",
          "Rien de tout cela ne protège du cas où le rapport ne paraît tout simplement pas. Un pipeline qui refuse à juste titre de publier un mauvais rapport ne raconte que la moitié de l'histoire si personne ne remarque que le rapport n'a jamais tourné du tout — un cron job bloqué et une vérification d'ancrage sans faille produisent le même silence du point de vue du client. Il existe donc une couche de surveillance à côté de la logique de reporting : un contrôle de type « dead man's switch », qui attend qu'une exécution planifiée ait lieu et déclenche une alerte dès qu'elle ne se produit pas. La justesse et la disponibilité sont des modes de défaillance différents, et nous ne voulions pas qu'un correctif pour l'un vienne silencieusement se substituer à l'autre.",
          "Nous ne l'avons pas conçu ainsi parce que les LLM seraient peu fiables dans un sens abstrait — nous l'avons conçu ainsi parce que nous plaçions la sortie d'un modèle à côté de chiffres qu'un client utiliserait pour prendre de vraies décisions opérationnelles et financières concernant un actif physique réel, et « généralement juste » n'est pas une garantie qu'on peut offrir à quelqu'un dans cette position. Quiconque publie du texte généré par un LLM aux côtés de chiffres qui comptent fait le même pari, qu'il l'ait nommé ou non : soit l'arithmétique du modèle est acceptée implicitement, soit quelque chose en dehors du modèle vérifie son travail avant qu'un humain ne le voie. Écarter entièrement le LLM du calcul, figer les faits avant qu'il n'écrive un mot, puis vérifier après coup chaque chiffre qu'il produit par rapport à cet ensemble figé, ce n'est pas une simple précaution contre un modèle mauvais en calcul. C'est un refus de laisser une étape que nous ne pouvons pas entièrement vérifier décider de ce que sont les chiffres.",
        ],
      },
      "verified-claims-ledger": {
        title: "Un registre pour chaque affirmation que nous publions",
        dek: "Pourquoi la mention « pas encore communiqué » sur ce site et le champ UNAVAILABLE de l'API wallet de Grantfox relèvent de la même décision d'ingénierie.",
        readTime: "5 min",
        body: [
          "Chaque affirmation publique sur ce site est censée remonter à une source nommée — un dépôt, un commit, une capture d'écran, un README — et non à notre simple souvenir de ce que nous avons construit. Nous conservons cette traçabilité dans un registre : un document simple qui associe chaque phrase publiée à sa provenance et à la date où nous l'avons vérifiée. Si une affirmation ne peut pointer vers une ligne de ce registre, elle n'est pas publiée. Cela ressemble à une habitude de documentation. C'est en réalité la même décision que celle que nous prenons à l'intérieur même du logiciel, et l'endroit le plus clair pour l'observer est une simple réponse d'API dans Grantfox.",
          "Grantfox est une marketplace native au wallet pour prompts et agents IA, construite sur Stellar, et nous travaillons sur son backend et son frontend en tant que contributeurs externes. Un wallet y porte deux types de solde différents : un solde de registre que le backend peut calculer directement à partir des achats et transactions qu'il a enregistrés, et un solde on-chain qui nécessiterait de lire réellement le réseau Stellar. Nous n'avons pas encore intégré cette lecture on-chain. L'état honnête de cette partie du système est : nous ne connaissons pas ce chiffre.",
          "La façon la plus simple de gérer cette lacune serait de la simuler — renvoyer le chiffre du registre en le présentant comme le solde on-chain, ou calculer quelque chose d'apparence plausible et laisser l'écran du wallet l'afficher comme n'importe quel autre champ. Personne inspectant le JSON ne le remarquerait forcément, et un tableau de bord où chaque champ affiche un chiffre paraît plus abouti qu'un tableau avec une lacune visible. Nous ne l'avons pas fait. L'API rapporte le solde on-chain comme UNAVAILABLE. Pas zéro, pas une estimation, pas le chiffre du registre déguisé en solde on-chain — un statut explicite indiquant que le chemin de vérification n'existe pas encore.",
          "Les empreintes de transaction reçoivent le même traitement. Une véritable empreinte de transaction Stellar est une chaîne hexadécimale de 64 caractères, et Grantfox ne remplit ce champ que lorsqu'une telle empreinte existe réellement on-chain. Quand ce n'est pas le cas — une transaction ne s'est pas réglée, ou le parcours en question n'en produit pas — le champ est null. Nous aurions pu livrer une valeur de substitution, quelque chose à l'apparence hexadécimale qui remplit le champ et satisfait ce que le frontend attend comme forme de chaîne à cet endroit. Nous ne l'avons pas fait, pour la même raison que le solde n'est pas estimé : un null est une affirmation vraie sur ce que nous savons, tandis qu'une empreinte fabriquée est un mensonge revêtant l'apparence d'une preuve.",
          "Aucune de ces deux décisions n'est majeure. Elles passent facilement inaperçues dans un diff, et il est peu probable qu'un utilisateur se demande un jour pourquoi un champ du wallet affiche UNAVAILABLE alors que les autres montrent des chiffres. Mais c'est la même décision, appliquée au niveau d'un champ d'API plutôt qu'au niveau d'une phrase, qui gouverne ce que nous laissons paraître sur ce site. Un statut UNAVAILABLE et une mention « pas encore communiqué » relèvent du même geste : lorsque la réponse honnête est nous n'avons pas ce chiffre, le dire plutôt que de calculer quelque chose qui lui ressemble.",
          "C'est pourquoi nous ne publions nulle part sur ce site le pourcentage de frais ou de commission de Grantfox. Nous pourrions en estimer un à partir des conditions habituelles d'une marketplace, ou en déduire une fourchette à partir des parties de la logique de frais que nous avons directement examinées, et cela s'intégrerait sans peine au reste d'une page de services. Nous préférons la mention « pas encore communiqué », car nous n'en avons pas de source de la même manière que nous avons une source pour le durcissement de déploiement que nous avons livré ou pour le parcours d'achat que nous avons construit. La même règle qui maintient un null dans le champ d'empreinte de transaction tient cette ligne à l'écart de notre contenu.",
          "Le coût est visible dans les deux cas. Un écran de wallet affichant UNAVAILABLE paraît moins abouti qu'un écran où chaque champ porte un chiffre. Une page de services avec la mention « pas encore communiqué » donne un argumentaire plus terne qu'une page avec un pourcentage de frais et une projection de revenus aux côtés des autres chiffres. Ni l'un ni l'autre ne peut prétendre que la lacune n'existe pas simplement parce que la combler ferait mieux lire. L'alternative — inventer la pièce manquante — n'est bon marché qu'une seule fois, et c'est le même échec, qu'il se manifeste sous la forme d'un solde de wallet fabriqué ou d'une statistique fabriquée sur notre propre site.",
          "Le registre n'est donc pas une clause de non-responsabilité ajoutée après coup pour nous couvrir. C'est la même discipline que nous intégrons dans les systèmes que nous livrons, appliquée en sens inverse à nos propres affirmations : avant qu'une phrase ne paraisse sur ce site, nous demandons quelle ligne la justifie, tout comme le point d'accès de solde de Grantfox se demande s'il dispose réellement d'une lecture on-chain avant d'afficher un chiffre. Quand la réponse est non, la phrase — comme le champ — le dit.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Nous contacter",
    title: "Dites-nous ce que vous construisez.",
    paragraph:
      "Un projet produit full-stack, une intégration Web3, ou un pipeline d'automatisation qui doit tenir la route face à un audit — décrivez-nous les contours du problème, et nous vous dirons franchement si c'est fait pour nous.",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    messageLabel: "Que construisez-vous ?",
    sendingLabel: "Envoi en cours…",
    sendButton: "Envoyer",
    sentMessage: "Envoyé — nous lisons chaque message nous-mêmes et répondons sous quelques jours.",
    errorMessage: "Une erreur est survenue lors de l'envoi — réessayez, ou envoyez un e-mail à",
    errorCta: "directement.",
  },
  footer: {
    sourceLabel: "Source",
  },
  webVitals: {
    eyebrow: "Cette page, mesurée en direct",
    caption:
      "Des chiffres réels de votre visite, à l'instant — la même règle consistant à n'affirmer que ce qui est vérifié, appliquée à notre propre site.",
    good: "bon",
    needsAttention: "à surveiller",
    waitingForPaint: "mesure en cours…",
    waitingForInteraction: "en attente d'un clic",
    metrics: {
      lcp: { label: "Vitesse de chargement", description: "Le temps mis par le contenu principal pour s'afficher." },
      inp: {
        label: "Réactivité",
        description: "La rapidité de réaction de la page dès que vous cliquez sur quelque chose.",
      },
      cls: { label: "Stabilité visuelle", description: "Si le contenu bouge pendant le chargement de la page." },
    },
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Bonjour TurboDevs ! J'aimerais discuter d'un projet.",
  },
}
