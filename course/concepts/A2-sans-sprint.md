---
concept: A2
titre: Travailler sans sprint
---

# Travailler sans sprint

## Objectif
Pour l'apprenant dont l'équipe travaille en flux continu, sans sprint : dire ce qui ne change
pas, et ce que deviennent le Sprint Planning et la DoR, l'objectif de sprint, la revue de
sprint et la prévision.

## L'essentiel
En flux continu, il n'y a pas de sprint : l'équipe commence un élément quand elle a de la place,
sous une limite du travail en cours, et peut le livrer dès qu'il est fini (la fin d'un élément,
l'équipe la définit). Le cours le décrit d'après le *Kanban Guide*, qui n'a ni rôles, ni
événements, ni cadence imposée. Ne change pas : le backlog ordonné par le PO, la DoD,
l'incrément, l'objectif produit. À ne pas confondre avec Kanban dans Scrum : une équipe qui
garde ses sprints et y ajoute des pratiques de flux suit le cours tel quel.

## Consensus et choix d'école
- **Consensus** : aucun texte ne fait consensus pour travailler sans sprint. Ce que le cours
  tient du Scrum Guide reste vrai : un incrément peut être livré avant toute revue ; les
  pratiques de prévision (dont les « cumulative flows ») sont citées sans être imposées.
- **Deux textes, deux cas à distinguer** :
  - le *Kanban Guide* : le flux sans sprint. Kanban y est une
    stratégie pour optimiser le flux de valeur : définir et visualiser le workflow, gérer
    activement les éléments, améliorer le workflow. L'équipe écrit sa Definition of Workflow
    (ce qu'est un élément, quand il commence et finit, ses états, des règles de passage
    explicites) ; elle tire un élément quand elle a de la place ; elle suit quatre mesures :
    travail en cours, débit, âge d'un élément, temps de cycle. Le guide dit « contrôler » le
    travail en cours ; le cours dit « limite », le mot du *Kanban Guide for Scrum Teams* ;
  - le *Kanban Guide for Scrum Teams* : Kanban dans Scrum.
    Le Scrum Guide s'y applique en entier, le sprint reste. Il relie le débit aux dates de
    livraison probables dont parle le PO.
- **Choix d'école** : la méthode Kanban (David J. Anderson, Kanban University), une autre école
  que le *Kanban Guide* : le point d'engagement, le réapprovisionnement, des cadences de revue
  dont la revue de la livraison du service. Ni elle ni le *Kanban Guide* ne sont le consensus.
- **Choix du cours** (à présenter comme tel) : ce qui ne change pas ; le PO ordonne et les
  Developers tirent (le *Kanban Guide* ne nomme que les membres du système Kanban) ; la DoR
  devient la règle pour franchir le début du flux ; l'objectif produit et l'ordre du backlog
  donnent la direction ; l'équipe inspecte ce qui est livré avec les parties prenantes, à une
  cadence qu'elle choisit.

## Sous-concepts
Annexe proposée hors de l'ordre, seulement à l'apprenant dont l'équipe travaille sans sprint :
chaque sous-concept se donne seul, au moment où il est proposé, à la place de la banque du
sous-concept du cours. Le message : une ou deux lignes sur ce que fait Scrum, une ligne sur ce
qui ne change pas (backlog ordonné par le PO, DoD, incrément, objectif produit), puis
l'explication, l'exemple et la question de l'annexe. Si l'apprenant demande aussi le cas en
sprint, il vient au message suivant. Une réponse juste à la question de l'annexe valide le
sous-concept du cours ; la suite est celle du cours (le sous-concept qui suit), et le fichier à
relire est celui du concept, avec la partie de l'annexe. Les rechanges du cours qui supposent un
sprint ne se donnent pas ; un aparté qui vaut aussi en flux (« Tout est en "Fait" », 15c) reste
possible. Si l'équipe de l'apprenant a un tableau de flux dans des sprints, c'est
Kanban dans Scrum : le dire en une ligne, et le cours s'applique sans A2.

1. **A2a, depuis 11b : tirer l'élément, la DoR au début du flux.** Pas de Sprint Planning :
   l'équipe tire l'élément suivant quand une place se libère sous la limite du travail en cours
   (éléments commencés et pas finis). La Definition of Workflow dit où commence un élément ; la
   DoR devient la règle pour franchir ce début (choix du cours). Kanban University appelle ce
   moment le point d'engagement (choix d'école). Exemple : « La place libérée par Anna ».
2. **A2b, depuis 15b : sans objectif de sprint, ce qui donne la direction.** Rien ne regroupe
   deux semaines de travail : la direction vient de l'objectif produit et de l'ordre du backlog,
   que le PO tient. Le réapprovisionnement de la méthode Kanban, choix d'école, en une ligne.
   Exemple : « Chacun tire ce qu'il veut ».
3. **A2c, depuis 15c : sans revue de sprint, inspecter ce qui est livré.** Un élément fini
   peut partir sans attendre de revue ; l'inspection avec les parties prenantes reste, à une
   cadence que l'équipe choisit (choix du cours). Exemple : « Plus de revue, plus de
   retour ? ».
4. **A2d, depuis 16c : prévoir en flux.** Sur l'historique du temps de cycle, une prévision en
   durée et probabilité (l'attente de niveau de service), pas une promesse ; le débit est l'une
   des mesures suivies, pas la base de cette prévision. La prévision vient des Developers, comme
   en 16c. Exemple : « Étienne demande pour quand ».

## Banque d'exemples

Faits du fil rouge utilisés : l'équipe vélos (Dana, Diego, data engineers ; Anna, analyste) en
sprints de deux semaines ; DoR de l'équipe vélos (critères d'acceptation écrits, règles métier
fixées, dépendances identifiées, accès aux données obtenu) ; la story d'Étienne « voir les
locations du jour par station », dont l'accès à la table des locations n'est pas obtenu
(concept 11b) ; les vues d'Étienne ; la tournée de Théo ; Charlotte et Pia, qui demandent chacune
un élément. Toute la banque est en situation d'exercice : « si l'équipe vélos travaillait sans
sprint ». La limite du travail en cours, les durées, les dates et les répliques sont des
propositions d'exercice, pas des faits du fil rouge : l'équipe vélos reste en sprints.

### La place libérée par Anna (A2a)
- **Explication** : sans sprint, pas de Sprint Planning qui choisit le travail de deux
  semaines. L'équipe tire un élément quand elle a de la place : elle fixe combien d'éléments
  peuvent être en cours à la fois (commencés et pas finis), et en commence un nouveau quand le
  nombre passe sous cette limite. Le *Kanban Guide* lui fait écrire sa Definition of Workflow,
  qui dit entre autres où commence un élément et à quelle règle il franchit ce début : pour une
  équipe qui avait une DoR, c'est là qu'elle sert (choix du cours). Kanban University appelle
  ce moment le point d'engagement (choix d'école).
- **Situation** : si l'équipe vélos travaillait sans sprint, avec une limite de trois éléments
  en cours (dans cet exercice). Anna finit un élément : une place se libère. En haut du backlog,
  la story d'Étienne « voir les locations du jour par station » : critères écrits, mais l'accès
  à la table des locations n'est pas obtenu. Juste après, une story qui remplit la DoR. Diego :
  « Commençons celle d'Étienne, comme ça elle est en route. »
- **Question** : que proposes-tu à Diego, et pourquoi ?
- **Réponse attendue** : la story d'Étienne ne franchit pas le début du flux : elle ne remplit
  pas la DoR (accès non obtenu), comme en 11b. L'équipe tire la suivante dans l'ordre, celle
  qui est prête ; les Developers tirent, le PO a ordonné (répartition du cours, pas du
  *Kanban Guide*, qui n'a pas de rôles). Ce qui change sans sprint :
  commencée sans accès, la story compterait dans le travail en cours, donc occuperait l'une des
  trois places sans avancer (choix du cours, déduit de la définition du travail en
  cours). Le PO fait avancer l'accès (relancer Sid, escalader si ça bloque : concept 14).
- **Erreurs fréquentes** :
  - « oui, elle est en haut du backlog » : demander « que fait-elle dans sa place tant que
    l'accès n'est pas là ? » ;
  - « non » sans la suite : demander « et alors, on fait quoi, pour la place et pour l'accès ? » ;
  - le PO qui choisit seul l'élément tiré : l'ordre est à lui, tirer revient aux Developers ;
  - réponse elliptique (« la suivante ») : faire préciser pourquoi avant de corriger.
- **Ce qui marche** : reprendre le schéma de 11b (deux portes d'un sprint) et n'en garder que
  la porte d'entrée, devant une file où chaque place compte.

### Chacun tire ce qu'il veut (A2b)
- **Explication** : sans sprint, pas d'objectif de sprint qui donne un pourquoi commun à deux
  semaines de travail. Reste à savoir ce qui décide, quand une place se libère, de l'élément
  qu'on commence. Le réapprovisionnement de la méthode Kanban (Anderson, choix d'école) se dit
  dans la correction, pas ici ; le cours n'en fixe ni la fréquence ni les participants.
- **Situation** : si l'équipe vélos travaillait sans sprint. Charlotte a demandé un élément pour
  son bilan, Pia un autre pour l'appli ; les deux sont prêts. Diego : « Puisqu'il n'y a plus
  d'objectif de sprint, quand une place se libère, chacun prend l'élément de la personne qui
  l'a relancé en dernier. »
- **Question** : qu'est-ce qui cloche dans la proposition de Diego ?
- **Réponse attendue** : sans objectif de sprint, la direction ne disparaît pas : elle vient de
  l'objectif produit et de l'ordre du backlog. La place libérée va à l'élément prêt le plus
  haut ; c'est le PO qui ordonne, et qui veut changer l'ordre le convainc (concept 1b). Suivre
  le dernier qui relance, c'est laisser la pression ordonner à sa place. Le PO tient le haut du
  backlog à jour à mesure que les places se libèrent. Nuance, non attendue : une équipe peut se
  donner un moment régulier pour le revoir (le réapprovisionnement, choix d'école). L'ordre
  entre Charlotte et Pia ne se tranche pas ici (concepts 13 et 14b).
- **Erreurs fréquentes** :
  - trancher entre Charlotte et Pia : recentrer sur ce qui décide, pas sur le gagnant ;
  - « on se fixe un objectif de la semaine » : demander « qu'est-ce qui le relie déjà à
    l'objectif produit ? », puis montrer que l'ordre le fait ;
  - réponse juste sans la suite (ce qui remplace la proposition) : relancer par « et que
    mets-tu à la place : qui fait quoi quand une place se libère ? » ;
  - « il faut suivre l'ordre du backlog », sans dire qui le fait ni pourquoi la relance ne
    compte pas : demander « qui fait cet ordre, et que fait Charlotte si elle veut passer
    devant ? ».
- **Ce qui marche** : « sans sprint, qu'est-ce qui dit encore pourquoi on fait ça plutôt
  qu'autre chose ? »

### Plus de revue, plus de retour ? (A2c)
- **Explication** : sans sprint, pas de revue de sprint, et le *Kanban Guide* ne prévoit aucune
  réunion avec les parties prenantes. Un élément fini peut partir sans attendre (le Scrum Guide
  dit déjà que livrer n'attend pas la revue). Ce qui reste nécessaire : inspecter ce qui est
  livré avec les parties prenantes et adapter le backlog, à une cadence que l'équipe choisit
  (choix du cours).
- **Situation** : si l'équipe vélos travaillait sans sprint. Dans cet exercice, la vue des vélos en
  panne d'Étienne est livrée un mardi, l'évolution de la tournée de Théo dix jours plus tard. Diego :
  « Plus besoin de revue : chaque livraison part, Étienne et Maud nous écriront s'il y a un
  souci. »
- **Question** : que perd l'équipe avec la proposition de Diego ?
- **Réponse attendue** : livrer au fil de l'eau, oui ; mais sans inspection, l'équipe n'apprend
  que les problèmes, pas ce que l'incrément change pour Étienne et Maud ni ce qu'il faut
  adapter au backlog. Le PO propose un moment où Étienne et Maud regardent ce qui a été livré
  et où le backlog s'adapte ; sa cadence se décide en équipe (toutes les deux semaines, ou à
  chaque livraison qui compte), aucun guide ne la fixe. Une demande qui en naît entre au
  backlog et s'ordonne, sans se promettre en séance (concepts 10a2 et 13).
- **Erreurs fréquentes** :
  - « on garde une revue toutes les deux semaines, comme avant » : la bonne direction, mais la
    réponse ne dit pas ce qui serait perdu ; demander « à quoi sert ce moment, et la livraison
    l'attend-elle ? » ;
  - « ils nous écriront » : demander « qui écrit pour dire que la vue ne sert pas ? » ;
  - réponse juste sans la suite (ce que le PO propose) : relancer par « et que proposes-tu à
    la place ? » ;
  - faire de ce moment une recette, où Étienne et Maud valident avant que la livraison parte :
    relancer : « si Maud n'est pas disponible cette semaine-là, l'évolution de la tournée
    attend-elle pour partir ? » ;
  - proposer la revue de la livraison du service de la méthode Kanban (choix d'école) : elle
    porte sur la performance du service, pas sur ce que la vue change pour Étienne ; ce n'est
    pas une revue de sprint sans sprint (choix du cours).
- **Ce qui marche** : séparer deux questions, « quand livre-t-on ? » et « quand regarde-t-on
  ensemble ce qu'on a livré ? ».

### Étienne demande pour quand (A2d)
- **Explication** : sans sprint, pas de prévision par sprint. Parmi les quatre mesures que le
  *Kanban Guide* fait suivre, le temps de cycle va du début d'un élément à sa fin. Sur son
  historique, l'équipe tire une prévision en deux parties, une durée et une probabilité : c'est
  son attente de niveau de service. Elle vient des Developers et de leurs mesures (concept 16c),
  pas d'une date que le PO invente.
- **Situation** : si l'équipe vélos travaillait sans sprint. Dans cet exercice, ses mesures
  disent : 9 éléments sur 10 sont finis en 12 jours ou moins après leur début. Étienne demande
  pour quand la vue des locations du jour ; la story n'est pas commencée (accès non obtenu),
  et deux éléments la précèdent dans l'ordre.
- **Question** : un collègue propose de répondre « dans 12 jours ». Qu'est-ce qui
  cloche dans cette réponse ?
- **Réponse attendue** : les 12 jours comptent à partir du début de la story, pas
  d'aujourd'hui ; elle n'a pas commencé et ne le peut pas sans l'accès. Et ce n'est pas une
  promesse : 1 élément sur 10 prend plus longtemps. Le PO dit à Étienne ce dont dépend le
  début (l'accès demandé à la DSI, les deux éléments devant) et, une fois la story commencée,
  ce que disent les mesures de l'équipe : « en général moins de 12 jours, pas toujours ». La
  prévision se revoit à mesure qu'on avance (concept 16c).
- **Erreurs fréquentes** :
  - « dans 12 jours » : demander « 12 jours depuis quand ? » ;
  - inventer une date pour rassurer Étienne : la prévision vient des mesures des Developers ;
  - « on ne peut rien dire » : la mesure dit déjà quelque chose, avec sa probabilité ;
  - réponse juste sans la suite (ce que le PO dit à Étienne) : relancer par « et que réponds-tu
    à Étienne ? ».
- **Ce qui marche** : dessiner le temps de cycle comme une flèche qui part du début du flux,
  et poser la story d'Étienne avant ce début.

## Pièges
- **Confondre les deux cas** : un tableau de flux dans des sprints, c'est Kanban dans Scrum
  (le sprint reste, le cours s'applique) ; A2 ne sert qu'au flux sans sprint.
- **Présenter la méthode Kanban ou le *Kanban Guide* comme le consensus** : deux écoles, aucun
  texte ne fait consensus pour travailler sans sprint.
- **Croire que sans sprint tout s'en va** : backlog ordonné par le PO, DoD, incrément et
  objectif produit restent.
- **Commencer un élément qui n'est pas prêt** : il prend une place
  sous la limite sans avancer.
- **Laisser la pression des demandeurs décider de l'élément tiré** : c'est l'ordre du backlog, que le PO tient à jour à mesure que les places se libèrent.
- **Supprimer l'inspection avec les parties prenantes** parce qu'il n'y a plus de revue de
  sprint ; ou la confondre avec la revue de la livraison du service, qui porte sur la
  performance du service.
- **Prendre l'attente de niveau de service pour une promesse**, ou la compter depuis
  aujourd'hui : c'est une durée avec une probabilité, à partir du début d'un élément.
- **Affirmer que les équipes data travaillent surtout en flux** : le cours n'a trouvé aucune
  enquête qui le montre.

## Le test rapide
Pour chaque pièce du sprint, « qu'est-ce qui la remplace, et qui la tient ? » : le Sprint
Planning, une place libre sous la limite et la DoR au début du flux ; l'objectif de sprint,
l'objectif produit et l'ordre du backlog (le PO) ; la revue de sprint, une inspection à la
cadence choisie par l'équipe ; la prévision par sprint, une prévision sur l'historique du temps
de cycle (les Developers).

## Schéma
Un tableau de flux en colonnes, de gauche à droite : « Backlog ordonné (PO) », une ligne
verticale « début du flux : DoR », une colonne « En cours » avec trois cases (la limite), puis
« Fini (DoD) », qui mène à l'incrément livré. Des flèches tirent les cartes de gauche à droite
quand une case se libère ; une carte pas prête (cas inventé) attend avant la ligne, grisée. Sous le tableau, une accolade du début du flux à « Fini » :
« temps de cycle » ; un compteur sous « Fini » : « débit ». Légende : « on tire quand une place
se libère ; la DoR garde le début du flux, la DoD la fin ».
