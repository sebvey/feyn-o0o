# T-018a : cadrage du curriculum (brouillon)

> **Décisions du mainteneur (2026-10-22), qui priment sur ce brouillon.** Le plan est
> réordonné pour un nouvel apprenant ; sve repart de zéro. Ordre final, dans `course/plan.md` :
> 0 Scrum, 1 produit et PO, 2 objectif produit et résultat (ici 2c et 15), 3 backlog (ici 2),
> 4 hiérarchie (3), 5 story (4), 6 rôles (5), 7 INVEST (6), 8 critères (7), 9 découpage (8),
> 10 hors périmètre (9), 11 DoD et DoR (10), 12 données (16), 13 ordonner (11), 14 parties
> prenantes (14), 15 vie d'une story (12), 16 story map (13), 17 hypothèses (17) ; annexe A1
> outil (ici A2). Fil rouge : F1 à F11 fixés, F12 laissé au lot du concept 5. Glossaire :
> `course/glossary.md`. Lots dans l'ordre du cours (T-018b à T-018h). Sources tracées dans
> `course/sources/` (T-022). Les numéros ci-dessous sont ceux du brouillon.

Brouillon du 2026-10-22, à discuter avec le mainteneur. Rien n'est décidé : les choix qui lui
reviennent sont au §7, chacun avec une recommandation. Ce document n'écrit ni dans `course/`, ni
dans `learner/`, ni dans le backlog ; il prépare `course/plan.md`, `course/fil-rouge-velos.md`,
le glossaire et les sous-tickets de lots.

Conventions : « SG » désigne le Scrum Guide 2020 ; « CSPO n.n » un objectif d'apprentissage du
référentiel CSPO 2022 de Scrum Alliance ; « Fn » un fait nouveau du fil rouge (§5.2). Les sources
sont au §8.

## 1. Public cible et objectifs du cours

**Public cible** : un développeur ou un profil data (data engineer, analyste), à l'aise avec la
technique et débutant en gestion de produit, qui devient Product Owner d'un produit data
(plateforme, indicateurs, modèles) et veut de bonnes bases pour tenir le rôle dans une équipe
Scrum ou proche.

Écart avec `course/plan.md` : il dit « devenir PO sur des projets data ». Je propose « produit
data » : le cours enseigne à gérer un produit (valeur, utilisateurs, ordre), et le mot « projet »
entretient l'idée d'un périmètre fixé d'avance, que le concept 2 combat.

**Objectifs de fin de cours.** À la fin, l'apprenant sait :

1. **Décrire un produit data et son objectif produit** par le problème, les utilisateurs et la
   valeur, sans parler de technique, et dire qui tranche quoi entre PO, Developers et parties
   prenantes. (Concepts 0, 1, 2, 14.)
2. **Écrire et juger une story** : acteur, besoin, raison ; critères d'acceptation qu'un testeur
   tranche sans poser de question ; règles métier qu'ils illustrent ; jugement avec INVEST.
   (Concepts 3 à 7.)
3. **Découper un besoin data en tranches verticales** qui servent seules, avec hors périmètre et
   dépendances écrits. (Concepts 8, 9, 13.)
4. **Ordonner un backlog entre des demandes concurrentes** en argumentant (valeur, coût du
   retard, risque, dépendances, objectif produit), et défendre cet ordre devant les parties
   prenantes. (Concepts 11, 14.)
5. **Conduire une story de l'idée à l'incrément** : refinement, Definition of Ready, Sprint
   Planning et objectif de sprint, Definition of Done, revue de sprint. (Concepts 10, 12.)
6. **Définir un indicateur sans ambiguïté** et placer les exigences de qualité et d'accès aux
   données au bon endroit (critère d'acceptation, DoD, DoR). (Concepts 7, 10, 16.)
7. **Distinguer livrable et résultat, et traiter l'incertitude** : choisir une mesure de
   résultat, repérer une hypothèse non vérifiée (de valeur ou de données) et proposer une
   exploration bornée avant de s'engager. (Concepts 15, 17.)

Chaque objectif est observable par une question du cours : l'apprenant produit quelque chose
(une phrase, un découpage, un ordre argumenté, une définition) qu'on peut corriger.

## 2. Analyse des manques

### 2.1 Couverture des référentiels

| Thème | SG 2020 | PSPO I (domaines) | CSPO 2022 | Plan actuel |
|---|---|---|---|---|
| Rôle du PO, une personne, autorité sur le backlog | oui | Scrum Team | 1.6, 1.7 | 1 |
| Backlog, ordre, refinement | oui | Product Backlog Management | 5.6, 5.8 | 2, 11, 12 |
| Objectif produit (Product Goal) | engagement du backlog ; 1re responsabilité du PO | Product Vision | 2.1, 2.2 | absent |
| Objectif de sprint (Sprint Goal) | engagement du backlog de sprint | Events, Artifacts | 2.3 | absent |
| Incrément, Definition of Done | oui | Done | (Scrum Foundations) | 10, A1 |
| Parties prenantes | 13 occurrences de « stakeholder » | Stakeholders & Customers | 1.2, 1.3, 3.3, 5.4 | implicite (9a) |
| Valeur et sa mesure, livrable et résultat | « maximizing the value » | Product Value | 5.1 à 5.5 | 1 (définition seule) |
| Découverte, hypothèses | empirisme | (non nommé) | 3.1, 3.4, 4.1, 4.2 | absent |
| Prévision, version | pratiques de prévision citées, non imposées | Forecasting & Release Planning | 2.4 à 2.6 | partiel (11 : MVP) |
| Stratégie, économie produit | non | Business Strategy | 5.3 | absent |
| Plusieurs équipes | non | non | 1.5 | 9b (dépendance à l'équipe appli) |
| Stories, INVEST, critères, découpage | aucun (« user story » : 0 occurrence) | non nommés | 5.7 (élément avec résultat et valeur) | 3 à 9 |

**Constat.** Le plan actuel consacre 7 concepts sur 13 à l'écriture et au découpage des stories,
qu'aucun référentiel de certification ne nomme ; les référentiels insistent sur l'objectif
produit, la valeur, les parties prenantes et la découverte, que le plan ignore ou effleure. Le
poids donné aux stories se défend pour ce public : un développeur qui devient PO passe d'abord du
ticket technique au besoin, et c'est là qu'il se trompe (observations : « en tant que data
engineer », « définir X », solution dans le « je veux »). Je propose de **garder ce cœur** et de
**compléter** par les quatre manques, sans viser l'exhaustivité d'une certification.

### 2.2 Pistes instruites

#### Objectif produit et vision

- **Références.** SG : « The Product Goal is the long-term objective for the Scrum Team » ; le
  PO a pour première responsabilité de développer et communiquer l'objectif produit ; c'est
  l'engagement du backlog (« The Product Goal is in the Product Backlog »). Le SG 2020 ne
  contient pas le mot « vision » (vérifié sur le texte). CSPO 2.1 relie vision et objectif
  produit, 2.2 fait écrire un objectif produit ; PSPO nomme « Product Vision ».
- **Consensus** : l'objectif produit (SG). **Choix d'école** : la vision et ses formats
  (Scrum Alliance, Scrum.org la gardent ; le SG non).
- **Verdict** : **sous-concept 2c « L'objectif produit »**, la vision citée comme choix d'école
  sans sous-concept.
- **Raison** : le PO d'une plateforme data reçoit des demandes de toutes parts (exploitation,
  maintenance, collectivité, équipe appli) ; sans objectif, il ne peut pas ordonner (concept 11)
  ni dire non (concept 14). Placé en 2, il sert dès le backlog ; placé plus tard, les concepts
  11 à 14 l'utiliseraient avant de l'introduire.
- **Effet sur l'apprenant en cours** : 2c est inséré avant son concept courant : rattrapage
  proposé avant le concept 11 (§3.3).

#### Parties prenantes

- **Références.** SG : le PO « may represent the needs of many stakeholders » ; ses décisions sont
  visibles dans le contenu et l'ordre du backlog, et l'organisation doit les respecter ; la revue
  de sprint présente le travail « to key stakeholders » ; le Scrum Master facilite la
  collaboration avec eux. CSPO 1.2 (transparence sur l'avancement), 1.3 (recueillir leurs
  informations), 1.7 (autorité du PO tout en collaborant), 3.3 (besoins en conflit), 5.4 (valeur
  selon plusieurs groupes) ; PSPO « Stakeholders & Customers ».
- **Consensus** : le PO représente les parties prenantes et tranche entre elles ; une seule
  personne, pas un comité. **Choix d'école** : les grilles de cartographie (pouvoir et intérêt,
  attribuée à Mendelow, attribution et date discordantes selon les sources).
- **Verdict** : **nouveau concept 14** (identifier, arbitrer, escalader). Le terme « partie
  prenante » est défini en une ligne dès le concept 1 (1b), pour ne pas l'utiliser avant de
  l'introduire.
- **Raison** : une plateforme data a beaucoup de consommateurs, dont d'autres équipes ; le
  développeur devenu PO tend à traiter chaque demande dans l'ordre d'arrivée (erreur observée :
  « une demande sortie du hors périmètre se traite aussitôt »). Le concept donne aussi une place
  à l'escalade, que le test de T-019 a fait surgir en 9b et 10b.

#### Mesure de la valeur et indicateurs

- **Références.** SG : le PO est « accountable for maximizing the value », sans méthode. CSPO 5.1
  (livrable et résultat), 5.4, 5.5 (techniques de mesure) ; PSPO « Product Value ». Scrum.org
  propose Evidence-Based Management (quatre domaines de valeur : valeur actuelle, valeur non
  réalisée, délai de mise sur le marché, capacité d'innovation). Rodden, Hutchinson et Fu (Google,
  CHI 2010) : démarche Goals-Signals-Metrics. Patton : une mesure de succès par tranche de
  version. Dehghani : le propriétaire d'un produit de données suit qualité, délai de
  consommation, satisfaction des consommateurs.
- **Consensus** : distinguer livrable (output) et résultat (outcome) ; mesurer le résultat
  (CSPO 5.1, présent chez Patton, Torres, EBM). **Choix d'école** : EBM (Scrum.org) ; HEART et
  Goals-Signals-Metrics (Google) ; les mesures propres aux produits de données (Dehghani).
- **Distinction propre à ce public** : un PO data livre des **indicateurs** (ce que la plateforme
  calcule pour ses utilisateurs : locations par quartier) et doit mesurer un **résultat** (ce qui
  change chez l'utilisateur : stations vides moins longtemps). Livrer l'indicateur n'est pas
  obtenir le résultat. Deux termes, deux notions (§4).
- **Verdict** : **nouveau concept 15** (livrable et résultat ; choisir une mesure de résultat).
  EBM écarté comme contenu (cadre d'organisation, au-delà de bonnes bases), cité comme choix
  d'école.
- **Raison** : c'est la confusion la plus probable du public, qui juge son travail à ce qui tourne
  en production.

#### Découverte avant livraison

- **Références.** SG : empirisme ; « In complex environments, what will happen is unknown ».
  CSPO 3.1 (découverte et validation dans le travail du PO), 3.4, 4.1, 4.2 (valider les
  hypothèses selon le coût et la qualité de l'apprentissage). Cagan (SVPG, 2017) : quatre risques
  (valeur, utilisabilité, faisabilité, viabilité). Torres (*Continuous Discovery Habits*, 2021) :
  contacts au moins hebdomadaires avec les clients, arbre opportunités-solutions. Ries : MVP comme
  version qui apporte le plus d'apprentissage validé pour le moindre effort.
- **Consensus** : repérer et tester les hypothèses avant d'investir (CSPO, empirisme du SG).
  **Choix d'école** : le rythme et l'outillage de la découverte (Torres) ; la répartition des
  risques par rôle (Cagan, qui parle de product manager et non de PO).
- **Verdict** : **nouveau concept 17 « Hypothèses et exploration »**, fusionné avec l'incertitude
  propre aux données (piste suivante). La découverte continue (entretiens hebdomadaires, arbre
  opportunités-solutions) est **écartée comme contenu**, nommée comme choix d'école dans 17.
- **Raison** : dans le contexte du public (ESN, DSI, client), la découverte est souvent portée par
  d'autres ; la bonne base est de distinguer ce qu'on sait de ce qu'on suppose et de borner une
  exploration. Le MVP est introduit en 13b (ses deux sens) et réutilisé en 17.

#### Spécificités data

- **Définition des indicateurs.** Aucun référentiel PO n'en parle ; Goals-Signals-Metrics et la
  documentation des indicateurs (déjà dans l'aparté DoD du concept 10, « confusion sur ce qu'est
  une location ») montrent le besoin. Une règle métier du concept 7 (« un vélo disponible est un
  vélo à quai et louable ») est déjà une définition d'indicateur. **Verdict : sous-concept 16a.**
- **Qualité des données.** DAMA UK (2013) retient six dimensions (exactitude, complétude,
  cohérence, fraîcheur, unicité, validité), reprises par le cadre de qualité du gouvernement
  britannique ; le DMBOK 2 (2017) en liste davantage, et une revue de DAMA NL (2020) en recense
  plusieurs dizaines selon les sources. **Consensus** : la qualité s'exprime en règles mesurables
  sur des dimensions ; **choix d'école** : la liste des dimensions. **Verdict : sous-concept
  16b**, relié à la DoD (relevés en double, concept 10).
- **Accès aux données.** Déjà présent : dépendance à la DSI (9b), condition de la DoR (10b). Le
  cadre France et UE ajoute les données personnelles : le RGPD pose la limitation des finalités et
  la minimisation (article 5, 1, b et c). **Verdict : sous-concept 16c**, borné à ce que le PO doit
  savoir demander (quelles colonnes, pour quelle finalité, agrégées ou non), sans droit détaillé.
- **Incertitude et exploration.** CRISP-DM (2000) place la compréhension des données avant la
  modélisation et décrit un processus itératif ; le spike (exploration bornée, issue d'XP) est
  déjà cité au concept 6. **Verdict : sous-concepts 17b et 17c.**
- **Verdict global** : **un concept 16 « Les données du produit »** (définir, qualité, accès) et le
  concept 17. Option écartée : tout répartir dans 7 et 10 (déjà fait en partie), car la
  définition d'un indicateur mérite sa propre question ; option écartée : deux concepts data
  (indicateurs ; qualité et accès), plus long sans gain clair (§7, question 3).
- **Data as a product (Dehghani)** : écarté comme concept (architecture d'organisation) ; l'idée
  utile (les consommateurs de données, comme l'équipe appli, sont des utilisateurs du produit)
  enrichit 1a et 14a.

### 2.3 Ce que le plan contient de trop ou de mal placé

- **Concept 13 « Choix d'outil et structure minimale du backlog »** : aucun référentiel ; l'outil
  est le plus souvent imposé par le client ; la partie utile (combien de niveaux) appartient au
  concept 3. **Verdict : annexe A2 « Structurer le backlog dans un outil »**, hors de l'ordre ; le
  point annoncé (« la plupart des features ne contiennent qu'une story : un niveau est de trop »)
  devient un piège du concept 3 et l'exemple de A2.
- **Concept 11 surchargé** : « valeur/effort, MoSCoW, MVP, story mapping » mêle ordonner (11),
  planifier une version (story map) et apprendre (MVP). **Verdict** : 11 garde l'ordre du
  backlog ; story map, première version, MVP et prévision passent au concept 13.
- **Annexe A1 « Scrum en bref »** : le concept 1 cite déjà le SG, le 10 l'incrément, le 12 le
  Sprint Planning. En annexe « à la demande », un nouvel apprenant peut aborder le concept 1 sans
  savoir ce qu'est Scrum. **Verdict : concept 0**, proposé en premier, avec une question de
  contrôle qui permet de le passer (§7, question 5).
- **Concept 12 « Cycle de vie d'une story : états »** : les états d'un ticket dépendent de l'outil
  (choix d'équipe). **Verdict** : 12 garde refinement et sélection, ajoute l'objectif de sprint
  (engagement du SG, absent du plan) et la revue de sprint ; les états deviennent un piège.
- **Estimation et prévision** : absentes ; le SG cite les pratiques de prévision sans les imposer,
  PSPO en fait un domaine. **Verdict : sous-concept 13c** (la prévision vient des Developers, elle
  n'est pas un engagement) ; story points et vélocité écartés (choix d'école, connus du public).
- **Concept 3 (hiérarchie)** : le SG ne définit aucun de ces niveaux ; utile pour un public habitué
  à Jira, à garder court (deux sous-concepts).
- **Concept 5 (personas)** : choix d'école (Cooper, design) ; garder 5b court.
- **Écartés, avec leur raison** : stratégie et économie produit (PSPO, CSPO 5.3 : un PO data en
  ESN la porte rarement) ; plusieurs équipes et passage à l'échelle (CSPO 1.5 : au-delà de bonnes
  bases, la dépendance à l'équipe appli couvre le minimum) ; EBM et OKR (outils d'organisation) ;
  découverte continue (voir plus haut) ; utilisabilité et UX (risque de Cagan porté par d'autres
  rôles) ; contrats de données et data mesh (architecture).

### 2.4 Affirmations des fiches actuelles à reprendre dans les lots

Relevées en vérifiant les sources ; à traiter à l'étape 1 de chaque lot.

- **06, S d'INVEST** : la fiche dit « quelques jours, un sprint au plus ». Wake (2003) écrit « at
  most a few person-weeks ». « Quelques jours » est une pratique courante, pas la définition de
  Wake : à présenter comme telle.
- **04, Connextra** : la fiche dit « vers 2001 ». Les sources divergent (2001 selon Wikipédia,
  2002 selon un article de Scrum Alliance, « début des années 2000 » selon Cohn). Écrire « au début
  des années 2000 ».
- **A1, événements** : « 4 événements » ; le SG dit « four formal events […] within a containing
  event, the Sprint ». Écrire « le sprint, qui contient quatre événements ». « Environ 13 pages » :
  non vérifié.
- **10, DoD en rétrospective** : conforme (la rétrospective inspecte la DoD, SG). **10, story qui
  ne remplit pas la DoD** : conforme (« cannot be released or even presented at the Sprint Review
  […] returns to the Product Backlog »).

## 3. Plan proposé

### 3.1 Les concepts

Principe : **les numéros 1 à 12 gardent leur sens** (la reprise de l'apprenant en cours ne bouge
pas) ; le 13 change de contenu (personne ne l'a commencé) ; les nouveaux concepts viennent après.
Chaque sous-concept tient en un message de 15 lignes avec sa question.

| # | Titre | À la fin, l'apprenant sait… | Prérequis | Sous-concepts | Changement |
|---|---|---|---|---|---|
| 0 | Scrum en bref | situer PO, Scrum Master et Developers, les événements et les trois artefacts avec leurs engagements ; distinguer sprint et incrément | aucun | 0a le cadre (responsabilités, sprint et ses quatre événements, artefacts et engagements) ; 0b sprint et incrément | déplacé (ex-A1) ; question de contrôle pour le passer |
| 1 | Le produit et le rôle du PO | décrire un produit par problème, utilisateurs, valeur ; dire qui tranche quoi | 0 | 1a le produit : problème, utilisateurs, valeur (les consommateurs de données sont des utilisateurs) ; 1b le PO (quoi, ordre, pourquoi ; une personne) face aux Developers (comment, coût) et aux parties prenantes | inchangé ; « partie prenante » défini en 1b |
| 2 | Le backlog produit et l'objectif produit | dire ce qu'est un backlog et ce qu'il n'est pas ; formuler un objectif produit | 1 | 2a liste ordonnée, émergente, seule source de travail ; 2b ce qu'il n'est pas (cahier des charges découpé, liste à dépiler) ; **2c l'objectif produit** | 2c nouveau |
| 3 | Hiérarchie du backlog | classer un besoin en epic, feature, story ou tâche ; choisir peu de niveaux | 2 | 3a les niveaux, qu'aucun guide n'impose ; 3b feature ou story : compter les « je veux » | piège ajouté (niveau de trop, ex-13) |
| 4 | La user story | écrire une story qui dit qui, quoi, pourquoi, sans solution | 3 | 4a les trois parties et les 3C ; 4b le « afin de » et les « pourquoi ? » successifs | inchangé |
| 5 | Rôles et personas | choisir l'acteur qui agit et y gagne | 4 | 5a l'acteur de la story ; 5b le persona (choix d'école) | inchangé |
| 6 | INVEST | juger une story avec les six critères et trouver le mot flou | 4, 5 | 6a les six lettres et le mot flou ; 6b N : besoin ou solution, une contrainte va dans un critère | inchangé |
| 7 | Critères d'acceptation et règles métier | écrire des critères tranchables et les séparer des règles | 6 | 7a critère ou règle métier ; 7b Given/When/Then, une variable à la fois | inchangé |
| 8 | Découpage en tranches verticales | découper un besoin data en tranches qui servent seules | 7 | 8a tranche verticale ; 8b patrons de découpage | inchangé |
| 9 | Hors périmètre et dépendances | écrire le hors périmètre ; traiter une dépendance | 8 | 9a hors périmètre ; 9b dépendances | inchangé |
| 10 | Definition of Done, Definition of Ready | distinguer DoD, DoR et critère ; décider si une story est prête | 0, 7, 9 | 10a DoD ; 10b DoR | inchangé |
| 11 | Ordonner le backlog | ordonner des demandes concurrentes et argumenter l'ordre | 2c, 9, 10 | 11a ordonner, c'est décider (valeur, coût, risque, dépendances, objectif produit) ; 11b valeur et coût du retard (choix d'école) ; 11c MoSCoW pour une échéance (choix d'école) | recentré (story map et MVP vont au 13) |
| 12 | La vie d'une story : refinement, planning, revue | préparer une story, la faire choisir avec un objectif de sprint, la faire inspecter | 10, 11 | 12a refinement (on précise un terme flou avec l'utilisateur, pas de story « définir X ») ; 12b Sprint Planning et objectif de sprint ; 12c revue de sprint : l'incrément inspecté, le backlog adapté | recentré (états -> piège ; objectif de sprint et revue ajoutés) |
| 13 | Story map et première version | organiser un backlog selon le parcours de l'utilisateur, tracer une première version utile, répondre à « pour quand ? » | 8, 11 | 13a la carte (activités, stories dessous) ; 13b tranche de version, première version utile, les deux sens de MVP ; 13c prévoir : la prévision vient des Developers | remplacé (ex-11 en partie ; l'ancien 13 va en A2) |
| 14 | Les parties prenantes | identifier les parties prenantes, arbitrer entre elles, escalader | 1b, 11, 12c | 14a qui sont-elles (utilisateurs, financeur, sponsor, équipes voisines, fournisseurs de données) ; 14b arbitrer et dire non avec l'objectif produit ; 14c escalader un obstacle (Scrum Master, sponsor) | nouveau |
| 15 | Livrable, résultat et mesure de la valeur | distinguer livrable et résultat ; choisir une mesure de résultat | 2c, 12c, 14 | 15a livrable (output) et résultat (outcome) ; 15b choisir une mesure de résultat (Goals-Signals-Metrics, choix d'école) | nouveau |
| 16 | Les données du produit | définir un indicateur ; écrire une exigence de qualité ; savoir quel accès demander | 7, 10, 15 | 16a définir un indicateur (définition, règle de calcul, grain, période, source, fraîcheur) ; 16b qualité des données (dimensions, où l'écrire) ; 16c accès et données personnelles (finalité, minimisation) | nouveau |
| 17 | Hypothèses et exploration | séparer ce qu'on sait de ce qu'on suppose ; borner une exploration ; écrire l'acceptation d'un résultat incertain | 8b, 13b, 15, 16 | 17a savoir ou supposer (risques de valeur et de faisabilité, données comprises) ; 17b explorer à moindre coût (exploration bornée ou spike, prototype, analyse d'historique) ; 17c accepter un résultat incertain (seuil fixé après exploration) | nouveau |

**Annexes**, hors de l'ordre : **A2 « Structurer le backlog dans un outil »** (ex-concept 13 :
niveaux, liens de dépendance, états ; un exemple, pas de sous-concept obligatoire).

### 3.2 Correspondance ancien -> nouveau

| Ancien | Nouveau |
|---|---|
| A1 Scrum en bref et l'incrément | 0 Scrum en bref |
| 1 à 10 | 1 à 10, mêmes numéros ; 2 gagne 2c |
| 11 Priorisation : valeur/effort, MoSCoW | 11 Ordonner le backlog |
| 11 Priorisation : MVP, story mapping | 13 Story map et première version |
| 12 Cycle de vie d'une story | 12 La vie d'une story (même numéro) |
| 13 Choix d'outil et structure du backlog | annexe A2 |
| (aucun) | 14, 15, 16, 17 |

### 3.3 Effet sur l'apprenant en cours

- **Reprise intacte** : « Prochaine étape » pointe vers 10b, inchangé ; 11 et 12 gardent leur
  numéro et leur sujet ; les « Points annoncés » pour 11 et 12 restent justes.
- **`learner/parcours.md` à mettre à jour** dans le sous-ticket qui réécrit `course/plan.md`
  (T-018a, d'après T-018 §6) : A1 devient la ligne 0, `validé` ; lignes 14 à 17 `à faire` ;
  le point annoncé pour 13 (niveau de trop) est reciblé vers A2, ou retiré si le prof l'a déjà
  traité.
- **Rattrapage** : 2c (objectif produit) est inséré avant le concept courant. Il n'existe qu'une
  fois écrit ; je propose de l'écrire dans le premier lot (T-018b) et de le proposer en rattrapage
  juste avant le concept 11, qui l'utilise. Proposé, pas imposé (T-018 §6).
- **Aucun autre concept nouveau avant le 10.**

### 3.4 Taille du cours

18 concepts (0 à 17) et une annexe, **43 sous-concepts** (23 pour 0 à 10, 20 pour 11 à 17).
Ordre de grandeur : le journal montre environ 23 sous-concepts vus en 7 sessions (concepts 1 à
10 et l'aparté Scrum) ; le cours complet ferait donc **une douzaine de sessions** pour un
apprenant au même rythme (base faible : un seul apprenant).

## 4. Glossaire

Un seul terme par notion. Le terme anglais est donné quand il est d'usage ; « terme du cours »
est celui que le prof et les fichiers emploient.

| Terme du cours | Anglais | Définition | Introduit en |
|---|---|---|---|
| Scrum | Scrum | Cadre de travail décrit par le Scrum Guide (Schwaber, Sutherland, 2020) | 0 |
| Équipe Scrum | Scrum Team | Le PO, le Scrum Master et les Developers | 0 |
| Product Owner (PO) | Product Owner | Personne seule qui répond de la valeur du produit et de l'ordre du backlog | 0, 1 |
| Scrum Master | Scrum Master | Personne qui répond de l'efficacité de l'équipe, dont la levée des obstacles | 0, 14 |
| Developers | Developers | Les membres de l'équipe qui réalisent l'incrément (ici data engineers et analyste) | 0 |
| Sprint | Sprint | Période fixe d'un mois au plus, qui contient les autres événements | 0 |
| Sprint Planning | Sprint Planning | Événement où l'équipe choisit le travail du sprint et son objectif | 0, 12 |
| Daily Scrum | Daily Scrum | Point quotidien des Developers sur l'avancement vers l'objectif de sprint | 0 |
| Revue de sprint | Sprint Review | Événement où l'équipe et les parties prenantes inspectent l'incrément et adaptent le backlog | 0, 12 |
| Rétrospective | Sprint Retrospective | Événement où l'équipe inspecte sa façon de travailler, DoD comprise | 0 |
| Incrément | Increment | Le produit dans un nouvel état utilisable, qui remplit la DoD | 0 |
| Produit | product | Ce qui résout un problème d'utilisateurs et leur apporte une valeur | 1 |
| Utilisateur | user | Personne qui se sert du produit (un consommateur de données en est un) | 1 |
| Partie prenante | stakeholder | Toute personne ou équipe concernée par le produit (utilisateur, financeur, sponsor, équipe voisine) | 1b, 14 |
| Valeur | value | Ce que l'utilisateur ou l'organisation gagne (temps, meilleure décision, risque évité) | 1 |
| Backlog produit | Product Backlog | Liste ordonnée et émergente de ce qui pourrait améliorer le produit | 2 |
| Élément du backlog | Product Backlog item | Toute entrée du backlog, quel que soit son niveau | 2 |
| Objectif produit | Product Goal | État futur visé du produit, cible à long terme de l'équipe | 2c |
| Vision produit | product vision | Raison d'être du produit à long terme ; absente du SG (choix d'école) | 2c |
| Epic, feature, story, tâche | epic, feature, story, task | Niveaux de découpage d'un besoin, choisis par l'équipe | 3 |
| User story (story) | user story | Besoin d'un utilisateur : en tant que, je veux, afin de | 4 |
| 3C | Card, Conversation, Confirmation | Une story est une carte, une conversation et une confirmation (Jeffries, 2001) | 4 |
| Rôle | user role | Catégorie d'utilisateurs aux besoins communs | 5 |
| Persona | persona | Portrait fictif et réaliste d'un rôle (choix d'école) | 5 |
| INVEST | INVEST | Six critères d'une story bien formée (Wake, 2003) | 6 |
| Critère d'acceptation | acceptance criterion | Condition vérifiable, propre à une story, qui dit quand elle est faite | 7 |
| Règle métier | business rule | Vérité du domaine, valable hors de la story | 7 |
| Given/When/Then | Given/When/Then | Forme d'un critère en exemple (issue du BDD, choix d'école) | 7 |
| Tranche verticale | vertical slice | Découpage qui traverse les couches et sert seul à l'utilisateur | 8 |
| Patron de découpage | splitting pattern | Façon type de découper une story trop grosse (choix d'école) | 8 |
| Hors périmètre | out of scope | Ce qu'une story ne fait pas alors qu'on pourrait l'attendre | 9 |
| Dépendance | dependency | Une story ne peut pas être livrée, ou n'a pas de sens, avant une autre | 9 |
| Definition of Done (DoD) | Definition of Done | Exigences de qualité que tout élément remplit pour faire partie de l'incrément | 10 |
| Definition of Ready (DoR) | Definition of Ready | Conditions qu'un élément remplit avant d'entrer dans un sprint (choix d'école) | 10 |
| Ordonner | order | Décider de la place de chaque élément dans le backlog (le SG dit « order », pas « prioritize ») | 11 |
| Coût du retard | cost of delay | Ce qu'on perd à livrer plus tard (choix d'école) | 11 |
| MoSCoW | MoSCoW | Classement Must, Should, Could, Won't pour une échéance (DSDM, choix d'école) | 11 |
| Refinement | Product Backlog refinement | Activité continue qui précise et découpe les éléments du backlog | 12 |
| Objectif de sprint | Sprint Goal | Objectif unique du sprint, fixé au Sprint Planning | 12 |
| Backlog de sprint | Sprint Backlog | Objectif de sprint, éléments choisis et plan des Developers | 12 |
| Story map | story map | Carte du backlog selon le parcours de l'utilisateur (Patton) | 13 |
| Tranche de version | release slice | Ensemble de stories de la carte qui forme une version utile | 13 |
| MVP | minimum viable product | Au sens de Ries : version qui apporte le plus d'apprentissage pour le moindre effort ; l'usage courant en fait la première version | 13, 17 |
| Prévision | forecast | Estimation de ce qui sera fait et quand, par les Developers ; pas un engagement | 13 |
| Sponsor | sponsor | Responsable qui porte le budget du produit et arbitre au-delà du PO | 14 |
| Obstacle | impediment | Ce qui bloque l'équipe et qu'elle ne lève pas seule | 14 |
| Escalade | escalation | Porter un obstacle ou un arbitrage au niveau qui peut le trancher | 14 |
| Livrable | output | Ce que l'équipe produit (une vue, un indicateur, un pipeline) | 15 |
| Résultat | outcome | Ce qui change chez l'utilisateur grâce au livrable | 15 |
| Mesure de résultat | outcome metric | Mesure qui dit si le résultat est obtenu | 15 |
| Indicateur | metric, KPI | Valeur calculée par le produit pour ses utilisateurs (locations par quartier) | 16 |
| Définition d'un indicateur | metric definition | Ce qu'il compte, sa règle de calcul, son grain, sa période, sa source, sa fraîcheur | 16 |
| Qualité des données | data quality | Respect de règles mesurables (complétude, unicité, fraîcheur, validité, exactitude, cohérence) | 16 |
| Fraîcheur | freshness, timeliness | Âge maximal des données au moment où on les lit | 7, 16 |
| Source de données | data source | Système qui produit les données, avec son propriétaire | 16 |
| Donnée personnelle | personal data | Information sur une personne identifiée ou identifiable (RGPD, art. 4) | 16 |
| Hypothèse | assumption | Ce qu'on tient pour vrai sans l'avoir vérifié | 17 |
| Exploration bornée (spike) | spike | Travail limité dans le temps pour répondre à une question, sans livrer de fonction | 6, 17 |

**Termes à éviter** dans le cours (un terme flou ou en double) :

- « le métier » : nommer l'acteur (Bruno, Sophie) ou dire « les utilisateurs », « les parties
  prenantes ». Les fiches actuelles l'emploient souvent ; à corriger dans les lots.
- « prioriser » au sens d'ordonner : garder « ordonner » (SG) ; « priorité » seulement pour
  MoSCoW.
- « équipe de développement » : terme du SG 2017, remplacé par « Developers » en 2020.
- « livrer un sprint » : on livre un incrément.
- « KPI » et « métrique » : dire « indicateur » (ce que calcule le produit) ou « mesure de
  résultat » (ce qui juge le produit).

**Recommandation : en faire un fichier `course/glossary.md`.** Raisons : les rédacteurs des lots
travaillent en parallèle et la revue de cohérence (T-018 §3) vérifie le glossaire, il faut donc
une référence sur disque ; le prof peut y renvoyer l'apprenant ; la future page web en tirera un
index. Le prof ne le lit pas au démarrage (pas d'ajout à la liste de lecture de `CLAUDE.md`) ;
il le consulte au besoin. Option écartée : le glossaire dans `course/plan.md`, qui alourdit le
fichier lu à chaque démarrage.

## 5. Plan du fil rouge

### 5.1 Par concept

Faits existants : ceux de `course/fil-rouge-velos.md`. Faits nouveaux : Fn (§5.2). D'un concept à
l'autre, la situation change (utilisateur, besoin, décision), pas le domaine.

| # | Situation | Acteurs | Faits mobilisés |
|---|---|---|---|
| 0 | Un sprint de deux semaines de l'équipe vélos ; la vue des stations vides est livrée le mercredi de la deuxième semaine (incrément avant la fin du sprint) | l'apprenant (PO), Léa, Yanis, Nora, Thomas (F1) | sprints de deux semaines ; F1 |
| 1 | Présenter la plateforme à un nouvel arrivant : par son effet ou par sa technique ? Léa propose de passer au streaming : quoi ou comment ? | Malik, Bruno, Léa ; Inès comme consommatrice de données | le produit ; rafraîchissement toutes les 15 minutes |
| 2 | 2a, 2b : les demandes arrivent en vrac (Bruno, Sophie, Claire, Inès) ; 2c : formuler l'objectif produit | Bruno, Sophie, Claire, Inès, Agnès (F3) | ce que la plateforme fait et ne fait pas ; F2 |
| 3 | « Suivre l'état du réseau » : epic, features (stations vides, vélos en panne, locations du jour), stories | Bruno | les vues de Bruno |
| 4 | Sophie veut le nombre de vélos en panne par semaine ; les « pourquoi ? » mènent au nombre de techniciens à prévoir | Sophie | signalements de pannes ; F12 |
| 5 | La tournée de réparation : acteur Hugo ou Sophie ? Julie comme persona | Hugo, Sophie, Julie | Julie, téléphone basique |
| 6 | Le SMS de Julie : solution ou contrainte ? (existant) | Julie, Inès | un tiers des abonnés sans l'appli |
| 7 | Disponibilité de la station favorite de Julie (existant) | Julie | règles fixées (vélo disponible, station favorite, moins de 15 minutes) |
| 8 | Quelles stations vont se vider ? (existant) | Malik | centre-ville, météo, seuil « presque vide » |
| 9 | Tournée d'Hugo et blocage réclamé par Sophie ; stories A et B de Claire (existant) | Hugo, Sophie, Claire | vélo signalé reste louable ; locations par quartier |
| 10 | Vues de Bruno ; accès à la table des locations non obtenu (existant) | Bruno, Pascal | DoD et DoR de l'équipe vélos |
| 11 | Ordonner quatre demandes : blocage des vélos en panne (Sophie, sécurité), locations du jour (Bruno, accès en attente), comparaison à l'an dernier (Claire, échéance du conseil), disponibilité pour l'appli (Inès) ; MoSCoW pour le bilan au conseil | Sophie, Bruno, Claire, Inès | « Pistes pas encore utilisées » ; F2 ; F5 |
| 12 | 12a : « vélo en panne » veut dire signalé ou constaté ? 12b : objectif de sprint autour des vélos en panne ; 12c : revue avec Bruno et Sophie, le backlog change | Sophie, Hugo, Bruno, l'équipe | signalements (appli seulement) ; F6 |
| 13 | La journée de pilotage de Bruno en carte ; première version = le point du matin ; Bruno demande « pour quand ? » | Bruno, Malik, l'équipe | F7 |
| 14 | 14a : carte des parties prenantes de la plateforme ; 14b : Inès et Claire veulent le même sprint ; 14c : l'accès aux locations bloque depuis trois sprints | toutes, dont Thomas (F1), Agnès (F3), Pascal | F1, F3 |
| 15 | La vue des stations vides est livrée (livrable) : les stations restent-elles moins longtemps vides (résultat) ? | Malik, Bruno, Agnès | relevés des stations ; F2 ; F4 |
| 16 | 16a : « nombre de locations par quartier » pour Claire ; 16b : relevés en double, signalements par téléphone absents ; 16c : quelles colonnes de la table des locations demander | Claire, Nora, Pascal | relevés en double ; signalements par téléphone ; F8, F9, F10 |
| 17 | La prévision des stations à risque : la tendance d'une heure suffit-elle ? la pluie compte-t-elle ? Nora explore l'historique pendant un temps borné | Malik, Nora, Léa | météo envisagée, pas collectée ; découpage du concept 8b ; F11 |

### 5.2 Faits nouveaux à fixer

Aucun ne contredit `course/fil-rouge-velos.md` (vérifié ligne à ligne : entreprise, produit,
équipe, acteurs, sources, faits fixés).

| Fait | Contenu proposé | Raison |
|---|---|---|
| F1 | **Thomas, Scrum Master**, partagé entre l'équipe vélos et l'équipe appli | Le SG fait du Scrum Master un membre de l'équipe Scrum ; la levée des obstacles (14c) et l'escalade d'une dépendance (9b, 10b) l'appellent. Partagé : courant, et crée un lien naturel avec l'équipe appli |
| F2 | **Objectif produit de la plateforme** : « Que les stations du centre-ville restent le moins longtemps possible vides aux heures de pointe, grâce à des données à jour pour l'exploitation. » La cible chiffrée n'est pas fixée | Sert 2c, 11, 14b, 15. Rattaché au premier périmètre (centre-ville) et au besoin de Malik, déjà fixés |
| F3 | **Agnès, directrice des opérations, sponsor de la plateforme** : encadre l'exploitation (Bruno) et la maintenance (Sophie), porte le budget de la plateforme. Elle et Pascal siègent au comité de direction de l'opérateur, où se tranchent leurs désaccords | Reprend le directeur des opérations improvisé (T-019) en le rendant cohérent : un directeur des opérations n'est pas au-dessus de la DSI ; l'arbitrage entre eux se fait au comité de direction. Sert 14c (escalade) et 2c (qui partage l'objectif produit). Le sponsor n'ordonne pas le backlog (SG : l'organisation respecte les décisions du PO) |
| F4 | **Mesure de résultat** : le temps cumulé pendant lequel une station du centre-ville est vide aux heures de pointe, calculé depuis les relevés des stations. « Heures de pointe » : règle à fixer | Sert 15 ; source existante ; la règle à fixer prépare 16a |
| F5 | **Le conseil de la métropole examine la subvention une fois par an** ; Claire y présente un bilan | Donne une échéance réelle pour MoSCoW (11c) et un arbitrage (14b) |
| F6 | **Hugo confirme ou infirme sur place une panne signalée** | Fait apparaître l'ambiguïté « signalé ou constaté » (12a) |
| F7 | **La journée de Bruno** : point du matin sur l'état du réseau, envoi des régulateurs, suivi des incidents, bilan du soir | Colonne vertébrale de la story map (13) |
| F8 | **Locations très courtes** : une location rendue à la même station au bout de quelques minutes est souvent un vélo défectueux rendu aussitôt ; les compter ou non n'est pas fixé | Ambiguïté de définition (16a), déjà pressentie dans l'aparté DoD (« ce qu'est une location ») |
| F9 | **Référentiel des quartiers** : la collectivité rattache chaque station à un quartier (nouvelle source, propriétaire : la collectivité) | Les locations par quartier (concept 9) supposent ce rattachement ; source manquante dans le tableau |
| F10 | **La table des locations contient l'identifiant de l'abonné** ; la DSI demande de justifier chaque colonne demandée | Donnée personnelle et minimisation (16c) ; cohérent avec « accès dans les règles » de Pascal |
| F11 | **L'entrepôt garde l'historique des relevés des stations depuis le lancement de la plateforme, il y a environ un an** | Matière de l'exploration bornée (17b) |
| F12 | **Sophie fixe chaque semaine le nombre de techniciens en tournée** (fait de situation, à fixer seulement si le concept 4 le retient) | Donne un « afin de » qui remonte jusqu'à un enjeu (4b) |

**Non retenu** : un Scrum Master absent (fréquent dans les équipes data, mais il faudrait alors
expliquer qui lève les obstacles, et le concept 0 le présente) ; une direction générale nommée (le
comité de direction suffit) ; une deuxième collectivité ou un concurrent (inutile aux concepts).

## 6. Lots

Hypothèse de charge, d'après T-018 §3 et §5 : par concept, 1 agent de sources, 1 rédacteur,
4 relecteurs, et au plus deux tours de correction (rédacteur puis relecteurs) : de 6 à 12 agents.
Trois concepts font de 18 à 36 agents ; quatre concepts approchent la limite de 50. **Je propose
trois concepts par lot**, plus un élément court au plus.

| Sous-ticket | Contenu | Dépend de | Pourquoi à ce rang |
|---|---|---|---|
| T-018b | Concepts 11, 12, 13 et sous-concept 2c ; écrit et teste le workflow `course-lot` | T-018a | Ce que l'apprenant en cours aborde ensuite ; 2c est son rattrapage avant 11 |
| T-018c | Concepts 14, 15, 16 | T-018b | Suite de son parcours ; comble les manques principaux face au public cible |
| T-018d | Concepts 17, 0, 1 | T-018c | 17 termine son parcours ; 0 et 1 ouvrent le cours de tout nouvel apprenant (sans exemple aujourd'hui) |
| T-018e | Concepts 2 (2a, 2b), 3, 4 et annexe A2 (sources et relecture d'exactitude seulement) | T-018d | Fiches sans exemple ; A2 liée au concept 3 |
| T-018f | Concepts 5, 6, 7 | T-018e | 5 sans exemple ; 6 et 7 ont des exemples vélos à reprendre |
| T-018g | Concepts 8, 9, 10 | T-018f | Les mieux pourvus en exemples vélos ; ajout de l'escalade en 9b et 10b (F1, F3) |
| T-018h | Cohérence d'ensemble et tests de bout en bout (T-018 §4), clôture (T-018 §7) | T-018g | Dernier, par construction |

Avant T-018b, T-018a livre : `course/plan.md` réécrit, `course/fil-rouge-velos.md` complété
(F1 à F11, F12 si retenu), `course/glossary.md` si retenu, `learner/parcours.md` mis à jour
(§3.3), le tableau du §2 de T-018.

**Alternative d'ordre** (§7, question 7) : rendre d'abord utilisables les concepts 0 à 5 pour un
nouvel apprenant (ils n'ont aucun exemple), puis 11 à 17. Je ne la recommande pas : l'apprenant
en cours atteint 11 dans une à deux sessions et sert de testeur réel (T-018 §6) ; le prof
improvise déjà correctement sur 1 à 5 à partir des fiches existantes.

## 7. Questions pour le mainteneur

1. **Forme du plan.** Recommandation : garder les numéros 1 à 12, ajouter 14 à 17 après, passer
   l'ancien 13 en annexe A2. Option écartée : réordonner le cours (objectif produit, parties
   prenantes et valeur avant les stories), plus logique pour un nouvel apprenant mais qui
   renumérote tout, casse les « Points annoncés » et impose plusieurs rattrapages.
2. **Objectif produit.** Recommandation : sous-concept 2c, proposé en rattrapage avant 11.
   Option écartée : l'introduire au concept 11 ou 15, ce qui évite le rattrapage mais l'utilise
   avant de le définir (11 ordonne par rapport à lui).
3. **Bloc data.** Recommandation : un concept 16 à trois sous-concepts, données personnelles
   comprises (finalité, minimisation, sans droit détaillé). Options écartées : deux concepts data
   (plus long) ; laisser le RGPD hors du cours (le cadre France et UE en fait une question
   courante pour un PO data).
4. **Découverte.** Recommandation : concept 17 limité aux hypothèses et à l'exploration bornée ;
   découverte continue (Torres) nommée comme choix d'école. Option écartée : un concept complet
   de découverte (entretiens, arbre opportunités-solutions), qui suppose un accès aux
   utilisateurs que ce public a rarement.
5. **Scrum en bref.** Recommandation : A1 devient le concept 0, proposé en premier avec une
   question de contrôle pour le passer. Option écartée : garder l'annexe et ajouter à `CLAUDE.md`
   une règle « propose A1 avant le concept 1 si l'apprenant ne connaît pas Scrum » (règle de plus
   dans le cadre pour le même effet).
6. **Fil rouge.** Recommandation : fixer F1 (Thomas, Scrum Master partagé) et F3 (Agnès,
   directrice des opérations, sponsor ; comité de direction pour arbitrer avec la DSI). Option
   écartée : pas de Scrum Master, ce qui oblige à expliquer une équipe Scrum incomplète dès le
   concept 0.
7. **Ordre des lots.** Recommandation : suivre le parcours de l'apprenant en cours (11 à 13, puis
   14 à 16, puis 17 avec 0 et 1). Option écartée : 0 à 5 d'abord (§6).
8. **Glossaire.** Recommandation : fichier `course/glossary.md`, hors de la liste de lecture du
   prof au démarrage. Option écartée : glossaire dans `course/plan.md`.

## 8. Sources

Type : **primaire** (texte de l'auteur ou de l'organisme), **secondaire** (reprise par un tiers
sérieux), **marketing** (éditeur d'outil ou organisme qui vend une formation, traité comme une
allégation). Consultées le 2026-10-22.

| Source | URL | Type | Ce que j'y ai vérifié |
|---|---|---|---|
| Schwaber, Sutherland, *The Scrum Guide*, novembre 2020 | https://scrumguides.org/scrum-guide.html | primaire | Texte téléchargé et cherché : responsabilités du PO (objectif produit en premier), « one person, not a committee », délégation possible, objectif produit dans le backlog, objectif de sprint, refinement, « ready for selection », DoD et retour au backlog, rétrospective qui inspecte la DoD, Scrum Master et obstacles, « four formal events […] within a containing event », pratiques de prévision non imposées ; « vision » et « user story » : 0 occurrence ; « Definition of Ready » : absente |
| Scrum.org, PSPO I | https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification | primaire (et marketing pour la certification) | Domaines : Forecasting & Release Planning, Product Vision, Product Value, Product Backlog Management, Business Strategy, Stakeholders & Customers ; plus Scrum Framework et Self-Managing Teams |
| Scrum Alliance, *CSPO Learning Objectives*, janvier 2022 (mis en forme 2/2024) | https://www.scrumalliance.org/media/certifications/los/cspo_learning_objectives_2022.pdf | primaire | Cinq catégories et objectifs 1.1 à 5.8 cités dans ce document |
| Scrum.org, Evidence-Based Management | https://www.scrum.org/resources/evidence-based-management | primaire (Scrum.org) | Quatre domaines de valeur et niveaux d'objectifs ; le guide EBM lui-même (PDF) non lu |
| Wake, « INVEST in Good Stories, and SMART Tasks », 17 août 2003 | https://xp123.com/invest-in-good-stories-and-smart-tasks/ | primaire | Auteur, date, sens de chaque lettre ; S : « at most a few person-weeks » |
| Jeffries, « Essential XP: Card, Conversation, Confirmation », 30 août 2001 | https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/ | primaire | Auteur, date, les 3C |
| Cohn, *User Stories Applied*, Addison-Wesley, 2004 | https://www.mountaingoatsoftware.com/books/user-stories-applied | primaire (site de l'auteur) | Table des matières (rôles utilisateurs, recueil, tests d'acceptation, estimation, planification) ; livre non lu |
| Cohn, « User Story Template » | https://www.mountaingoatsoftware.com/agile/why-the-three-part-user-story-template-works-so-well | primaire | Modèle attribué à Rachel Davies, Connextra, « early 2000s » |
| Wikipédia, « User story » ; Scrum Alliance, « The Anatomy of a User Story » | https://en.wikipedia.org/wiki/User_story ; https://resources.scrumalliance.org/Article/anatomy-user-story | secondaire | Date de Connextra : 2001 (Wikipédia), 2002 (Scrum Alliance) : discordance |
| Patton, Economy, *User Story Mapping*, O'Reilly, 2014 | https://books.google.com/books/about/User_Story_Mapping.html?id=4YZyBAAAQBAJ | secondaire (fiche éditeur) | Auteurs, éditeur, date, chapitres 1 à 8 (dont « Plan to Build Less », « Plan to Learn Faster ») ; livre non lu |
| Patton, « Story Map Concepts » | https://www.jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf | primaire | Tranches de version, « walking skeleton », mesure de succès par version |
| Cagan, « The Four Big Risks », SVPG, 4 décembre 2017 | https://www.svpg.com/four-big-risks/ | primaire | Quatre risques et rôle responsable de chacun ; *Inspired* (2e éd.) non consulté |
| Torres, « Opportunity Solution Trees », Product Talk, 2023 | https://www.producttalk.org/opportunity-solution-trees/ | primaire | Niveaux de l'arbre (résultat, opportunités, solutions, tests d'hypothèses) |
| Torres, *Continuous Discovery Habits*, 2021 | https://builderscamp.com/guides/other/continuous-discovery-habits-summary | secondaire | Parution en mai 2021 et définition (contacts au moins hebdomadaires) rapportées d'après Product Talk ; livre non lu |
| Ries, *The Lean Startup*, 2011 (définition du MVP) | https://en.wikipedia.org/wiki/Minimum_viable_product ; https://www.productboard.com/glossary/minimum-viable-product-mvp | secondaire, marketing (Productboard) | Définition citée de façon concordante ; terme attribué à Frank Robinson (2001) ; livre non consulté |
| Agile Business Consortium, *DSDM Agile Project Framework*, MoSCoW | https://www.agilebusiness.org/resource/what-is-moscow-prioritization | primaire | Quatre catégories ; pas plus de 60 % d'effort en Must Have ; auteur et date d'origine de MoSCoW non vérifiés |
| Dehghani, « Data Mesh Principles and Logical Architecture », 3 décembre 2020 | https://martinfowler.com/articles/data-mesh-principles.html | primaire | Quatre principes ; data as a product ; propriétaire de produit de données et ses mesures (qualité, délai de consommation, satisfaction) |
| DAMA UK, « The six primary dimensions for data quality assessment », 2013, repris par le gouvernement britannique | https://www.gov.uk/government/news/meet-the-data-quality-dimensions | primaire (reprise officielle) | Six dimensions recommandées |
| DAMA NL, *Dimensions of Data Quality*, 2020 | https://www.dama-nl.org/wp-content/uploads/2020/09/DDQ-Dimensions-of-Data-Quality-Research-Paper-version-1.2-d.d.-3-Sept-2020.pdf | secondaire (association professionnelle) | Recensement des dimensions par source, dont DAMA-DMBOK 2 (2017) ; le DMBOK 2, payant, non consulté |
| Rodden, Hutchinson, Fu, « Measuring the User Experience on a Large Scale », CHI 2010, DOI 10.1145/1753326.1753687 | https://ixd.prattsi.org/2019/11/measuring-user-experience-with-the-goals-signals-metrics-process | secondaire | Auteurs, conférence, HEART et Goals-Signals-Metrics ; article original non lu |
| Chapman et al., *CRISP-DM 1.0*, 2000 | https://public.dhe.ibm.com/software/analytics/spss/documentation/modeler/14.2/es/CRISP-DM.pdf | primaire | Six phases, compréhension des données avant modélisation, processus itératif |
| Règlement (UE) 2016/679 (RGPD), art. 4 et 5 | https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2 | primaire (texte reproduit par la CNIL) | Art. 5, 1, b (limitation des finalités) et c (minimisation) ; EUR-Lex n'a pas pu être lu |
| Mendelow, grille pouvoir et intérêt | https://www.hotpmo.com/management-models/mendelows-power-interest-matrix-stakeholder-mapping-for-pmos | secondaire | Article de 1981 ; d'autres sources citent 1991 ; la forme de grille viendrait de Johnson et Scholes : attribution discordante |

**Non vérifié, à reprendre à l'étape 1 des lots** : SPIDR (Cohn) et les patrons de Richard
Lawrence (cités au concept 8) ; le coût du retard (Reinertsen) ; l'origine XP du spike ; les
personas (Cooper) ; BDD (Dan North) et Specification by Example (Adzic), cités au concept 7 ;
l'auteur et la date d'origine de MoSCoW ; le nombre de pages du Scrum Guide ; le contenu des
livres de Cohn, Patton, Cagan, Torres et Ries, dont je n'ai vu que la table des matières ou des
résumés.
