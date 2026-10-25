# Plan du cours

## Public cible

Un développeur ou un profil data (data engineer, analyste), à l'aise avec la technique et
débutant en gestion de produit, qui devient Product Owner d'un produit data (plateforme,
indicateurs, modèles) et veut de bonnes bases pour tenir le rôle dans une équipe Scrum ou
proche. Le public cible guide la profondeur, le choix des exemples et ce qu'on écarte.

## Parti pris : une équipe en sprints

Le cours suppose une équipe Scrum qui travaille en sprints. Le concept 0 l'annonce, même quand
la question de contrôle fait passer le concept, et invite l'apprenant à dire si son équipe
travaille sans sprint. Hors du concept 0, les concepts valent sans sprint, sauf 11b, 15b, 15c et 16c :
leur équivalent en flux continu est l'annexe A2, à proposer à ces sous-concepts quand l'apprenant
travaille sans sprint ; une réponse juste à la question de l'annexe valide le sous-concept.
Ailleurs, le sprint ne sert que de repère (une story tient dans un sprint, une escalade à la
fin du sprint, une revue de sprint) : à l'apprenant sans sprint, le prof le dit et prend pour
repère le cycle que l'équipe se donne (sa cadence de livraison ou de revue), sans ouvrir
l'annexe.

## Domaines du cours

Le cours se partitionne en sept domaines, dans l'ordre des concepts : chaque concept appartient
à un seul domaine, et les sept domaines couvrent tous les concepts. Les annexes restent hors
domaines. Chaque domaine a sa fiche de présentation dans `course/domains/`, selon
`course/templates/domain.md`. À la fin de chaque domaine, l'apprenant sait :

1. **Le cadre** (concepts 0 à 2) : décrire un produit data par le problème, les utilisateurs et
   la valeur, son objectif produit et le résultat visé, et dire qui tranche quoi entre PO et
   Developers.
2. **Le backlog et la story** (concepts 3 à 8) : tenir un backlog ordonné, et écrire et juger une
   story : acteur, besoin, raison, critères d'acceptation qu'un testeur tranche sans poser de
   question, règles métier qu'ils illustrent.
3. **Découper et cadrer la story** (concepts 9 à 11) : découper un besoin data en tranches
   verticales qui servent seules, avec hors périmètre et dépendances écrits, et dire quand une
   story est prête et quand elle est finie.
4. **Les données** (concept 12) : définir un indicateur sans ambiguïté et placer les exigences
   de qualité et d'accès aux données au bon endroit.
5. **Décider** (concepts 13 et 14) : ordonner un backlog entre des demandes concurrentes en
   argumentant, et défendre cet ordre devant les parties prenantes.
6. **Conduire** (concepts 15 et 16) : conduire une story de l'idée à l'incrément (refinement,
   Sprint Planning et objectif de sprint, revue de sprint), tracer une première version utile
   et répondre à « pour quand ? ».
7. **Explorer** (concept 17) : séparer ce qu'on sait de ce qu'on suppose, proposer une
   exploration bornée avant de s'engager, et accepter un résultat incertain.

## Concepts

Ordre indicatif : le prof l'adapte selon les réponses de l'apprenant. Un fichier par concept
dans `course/concepts/`, selon `course/templates/concept.md`, et ses sources dans
`course/sources/`, sous le même nom. Les termes du cours sont dans `course/glossary.md`.

| # | Concept | À la fin, l'apprenant sait… | Prérequis | Sous-concepts | Fichier |
|---|---|---|---|---|---|
| 0 | Scrum en bref et l'incrément | situer PO, Scrum Master et Developers, les événements et les trois artefacts ; distinguer sprint et incrément | aucun | une question de contrôle permet de le passer si l'apprenant connaît Scrum ; 0a le cadre, en trois messages : 0a1 les responsabilités, 0a2 le sprint et ses quatre événements, 0a3 les artefacts et leurs engagements ; 0b sprint et incrément | `00-scrum.md` |
| 1 | Le produit et le rôle du PO | décrire un produit par problème, utilisateurs, valeur ; dire qui tranche quoi | 0 | 1a le produit : problème, utilisateurs, valeur (les consommateurs de données sont des utilisateurs) ; 1b le PO (quoi, ordre, pourquoi ; une seule personne) face aux Developers (comment, coût) et aux parties prenantes | `01-produit-et-po.md` |
| 2 | Objectif produit et résultat | distinguer livrable et résultat ; formuler un objectif produit ; choisir une mesure de résultat | 1 | 2a livrable et résultat ; 2b l'objectif produit (la vision : choix d'école) ; 2c choisir une mesure de résultat | `02-objectif-produit-resultat.md` |
| 3 | Le backlog produit | dire ce qu'est un backlog et ce qu'il n'est pas | 2 | 3a liste ordonnée, émergente, seule source de travail, en deux messages : 3a1 ordonnée, 3a2 émergente (et le rappel : seule source de travail) ; 3b ce qu'il n'est pas (cahier des charges découpé, liste à dépiler, découpage technique de la solution) | `03-backlog-produit.md` |
| 4 | Hiérarchie du backlog | classer un besoin en epic, feature, story ou tâche ; choisir peu de niveaux | 3 | 4a les niveaux, qu'aucun guide n'impose, en trois messages : 4a1 les quatre mots, 4a2 les niveaux de l'outil, 4a3 le niveau de trop ; 4b feature ou story : compter les « je veux » | `04-hierarchie.md` |
| 5 | La user story | écrire une story qui dit qui, quoi, pourquoi, sans solution | 4 | 5a les trois parties et les 3C, en deux messages : 5a1 les trois parties, 5a2 les 3C ; 5b le « afin de » et les « pourquoi ? » successifs | `05-user-story.md` |
| 6 | Rôles et personas | choisir l'acteur qui agit et y gagne | 5 | 6a l'acteur de la story ; 6b le persona (choix d'école) | `06-roles-personas.md` |
| 7 | INVEST | juger une story avec les six critères et trouver le mot flou | 5, 6 | 7a les six lettres et le mot flou, en deux messages : 7a1 les six lettres, 7a2 le mot flou ; 7b N : besoin ou solution, une contrainte va dans un critère | `07-invest.md` |
| 8 | Critères d'acceptation et règles métier | écrire des critères tranchables et les séparer des règles métier | 7 | 8a critère ou règle métier, en deux messages : 8a1 critère ou règle, 8a2 la règle non fixée ; 8b Given/When/Then, une variable à la fois, en deux messages : 8b1 la forme, 8b2 une variable à la fois | `08-criteres-regles.md` |
| 9 | Découpage en tranches verticales | découper un besoin data en tranches qui servent seules | 8 | 9a tranche verticale, en deux messages : 9a1 la tranche qui sert seule, 9a2 où s'arrête le vertical ; 9b patrons de découpage, en deux messages : 9b1 couche ou tranche, 9b2 les patrons et leur catalogue | `09-decoupage-vertical.md` |
| 10 | Hors périmètre et dépendances | écrire le hors périmètre ; traiter une dépendance | 9 | 10a hors périmètre, en deux messages : 10a1 l'écrire, 10a2 à la revue ; 10b dépendances, en deux messages : 10b1 entre deux stories de l'équipe, 10b2 envers une autre équipe | `10-hors-perimetre-dependances.md` |
| 11 | Definition of Done, Definition of Ready | distinguer DoD, DoR et critère ; décider si une story est prête | 0, 8, 10 | 11a DoD ; 11b DoR | `11-dor-dod.md` |
| 12 | Les données du produit | définir un indicateur ; écrire une exigence de qualité ; savoir quel accès demander | 2, 8, 11 | 12a définir un indicateur (règle de calcul, grain, période, source, fraîcheur), en deux messages : 12a1 le contenu d'une définition, 12a2 ce qui manque et qui le fixe ; 12b qualité des données (dimensions, où l'écrire) ; 12c accès et données personnelles (finalité, minimisation) | `12-donnees-produit.md` |
| 13 | Ordonner le backlog | ordonner des demandes concurrentes et argumenter l'ordre | 2, 10, 11 | 13a ordonner, c'est décider (valeur, coût, risque, dépendances, objectif produit), en deux messages : 13a1 les critères, face à une autre demande, 13a2 ordonner quatre demandes ; 13b valeur et coût du retard (choix d'école) ; 13c MoSCoW pour une échéance (choix d'école) | `13-ordonner-backlog.md` |
| 14 | Les parties prenantes | identifier les parties prenantes, arbitrer entre elles, escalader | 1, 12, 13 | 14a qui sont-elles (utilisateurs, financeur, sponsor, équipes voisines, fournisseurs de données) ; 14b arbitrer et dire non avec l'objectif produit ; 14c escalader un obstacle (Scrum Master, sponsor) | `14-parties-prenantes.md` |
| 15 | La vie d'une story : refinement, planning, revue | préparer une story, la faire choisir avec un objectif de sprint, la faire inspecter | 11, 12, 13 | 15a refinement, en deux messages : 15a1 le mot flou se précise avec l'utilisateur concerné, 15a2 pas de story « définir X » ; 15b Sprint Planning et objectif de sprint ; 15c revue de sprint : l'incrément inspecté, le backlog adapté | `15-vie-story.md` |
| 16 | Story map et première version | organiser un backlog selon le parcours de l'utilisateur, tracer une première version utile, répondre à « pour quand ? » | 9, 13, 14, 15 | 16a la carte (activités, stories dessous) ; 16b tranche de version, en deux messages : 16b1 la tranche et la première version utile (résultat visé, mesure), 16b2 les deux sens de MVP ; 16c la prévision vient des Developers | `16-story-map.md` |
| 17 | Hypothèses et exploration | séparer ce qu'on sait de ce qu'on suppose ; borner une exploration ; accepter un résultat incertain | 2, 9, 12, 16 | 17a savoir ou supposer (risques de valeur et de faisabilité, données comprises) ; 17b explorer à moindre coût, en deux messages : 17b1 décider l'exploration avant (question, durée, décision), 17b2 choisir la façon d'explorer (analyse d'historique, prototype) ; 17c accepter un résultat incertain (seuil fixé après exploration) | `17-hypotheses-exploration.md` |

## Annexes

À proposer quand l'apprenant en a besoin, hors de l'ordre des concepts.

| # | Annexe | Fichier |
|---|---|---|
| A1 | Structurer le backlog dans un outil : A1a les niveaux dans l'outil (après 4a3) ; A1b les liens de dépendance (après 10b2) ; A1c les états (après 11) | `A1-outil-backlog.md` |
| A2 | Travailler sans sprint (flux continu, Kanban), chaque sous-concept ouvert par ce qui ne change pas : A2a tirer l'élément, la DoR au début du flux (depuis 11b) ; A2b sans objectif de sprint, ce qui donne la direction (depuis 15b) ; A2c sans revue de sprint, inspecter ce qui est livré (depuis 15c) ; A2d prévoir en flux, temps de cycle (depuis 16c) | `A2-sans-sprint.md` |
