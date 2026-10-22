# Glossaire du cours

Un seul terme par notion : le cours emploie le « terme du cours », en français, ou en anglais
quand c'est l'usage. La colonne « Concept » donne le concept qui l'introduit : un fichier de
concept n'emploie pas un terme introduit plus loin sans le définir. Le prof peut montrer ce
fichier à l'apprenant.

| Terme du cours | Anglais | Définition | Concept |
|---|---|---|---|
| Scrum | Scrum | Cadre de travail décrit par le Scrum Guide (Schwaber, Sutherland, 2020) | 0 |
| Équipe Scrum | Scrum Team | Le PO, le Scrum Master et les Developers | 0 |
| Product Owner (PO) | Product Owner | Personne seule qui répond de la valeur du produit et de l'ordre du backlog | 0, 1 |
| Scrum Master | Scrum Master | Personne qui répond de l'efficacité de l'équipe, dont la levée des obstacles | 0, 14 |
| Developers | Developers | Les membres de l'équipe qui réalisent l'incrément (ici data engineers et analyste) | 0 |
| Responsabilité | accountability | Ce dont répond chacun des trois rôles de l'équipe Scrum (PO, Scrum Master, Developers) | 0 |
| Événement | event | Le sprint et les quatre événements qu'il contient (Sprint Planning, Daily Scrum, revue de sprint, rétrospective) | 0 |
| Artefact | artifact | Ce qui représente le travail ou la valeur : backlog produit, backlog de sprint, incrément | 0 |
| Engagement | commitment | Repère attaché à chaque artefact : objectif produit, objectif de sprint, DoD | 0 |
| Sprint | Sprint | Période fixe d'un mois au plus, qui contient les autres événements | 0 |
| Sprint Planning | Sprint Planning | Événement où l'équipe fixe l'objectif de sprint et où les Developers choisissent, avec le PO, le travail du sprint | 0, 15 |
| Daily Scrum | Daily Scrum | Point quotidien des Developers sur l'avancement vers l'objectif de sprint | 0 |
| Revue de sprint | Sprint Review | Événement où l'équipe et les parties prenantes inspectent l'incrément et adaptent le backlog | 0, 15 |
| Rétrospective | Sprint Retrospective | Événement où l'équipe inspecte sa façon de travailler, DoD comprise | 0 |
| Incrément | Increment | Le produit dans un nouvel état utilisable, qui remplit la DoD | 0 |
| Produit | product | Ce qui résout un problème d'utilisateurs et leur apporte une valeur | 1 |
| Utilisateur | user | Personne qui se sert du produit (un consommateur de données en est un) | 1 |
| Partie prenante | stakeholder | Toute personne ou équipe concernée par le produit (utilisateur, financeur, sponsor, équipe voisine) | 1, 14 |
| Valeur | value | Ce que l'utilisateur ou l'organisation gagne (temps, meilleure décision, risque évité) | 1 |
| Livrable | output | Ce que l'équipe produit (une vue, un indicateur, un pipeline) | 2 |
| Résultat | outcome | Ce qui change chez l'utilisateur grâce au livrable | 2 |
| Objectif produit | Product Goal | État futur visé du produit, cible à long terme de l'équipe | 0, 2 |
| Vision produit | product vision | Raison d'être du produit à long terme ; absente du Scrum Guide (choix d'école) | 2 |
| Mesure de résultat | outcome metric | Mesure qui dit si on s'approche du résultat visé | 2 |
| Backlog produit | Product Backlog | Liste ordonnée et émergente de ce qui pourrait améliorer le produit | 0, 3 |
| Élément du backlog | Product Backlog item | Toute entrée du backlog, quel que soit son niveau | 3 |
| Epic, feature, story, tâche | epic, feature, story, task | Niveaux de découpage d'un besoin, choisis par l'équipe ; la tâche est du travail des Developers, pas un besoin | 4 |
| User story (story) | user story | Un besoin précis d'un utilisateur, vu de lui ; format courant (choix d'école) : en tant que, je veux, afin de | 5 |
| 3C | Card, Conversation, Confirmation | Une story est une carte, une conversation et une confirmation (Jeffries) | 5 |
| Acteur (d'une story) | actor | Rôle qui fait l'action du « je veux » et y gagne ce que dit le « afin de » (heuristique du cours) | 6 |
| Rôle | user role | Catégorie d'utilisateurs aux besoins communs | 6 |
| Persona | persona | Portrait fictif d'un rôle, construit à partir d'utilisateurs réels (choix d'école, Cooper) | 6 |
| INVEST | INVEST | Six critères d'une story bien formée (Wake) | 7 |
| Exploration bornée (spike) | spike | Travail limité dans le temps pour répondre à une question, sans livrer de fonction | 7, 17 |
| Critère d'acceptation | acceptance criterion | Condition vérifiable, propre à une story, qui dit quand elle est faite | 8 |
| Règle métier | business rule | Vérité du domaine, valable hors de la story | 8 |
| Given/When/Then | Given/When/Then | Forme d'un critère en exemple (issue du BDD, choix d'école) | 8 |
| Fraîcheur | freshness | Âge maximal des données au moment où on les lit | 8, 12 |
| Tranche verticale | vertical slice | Découpage qui traverse les couches et sert seul à l'utilisateur | 9 |
| Patron de découpage | splitting pattern | Façon type de découper une story trop grosse (choix d'école) | 9 |
| Hors périmètre | out of scope | Ce qu'une story ne fait pas alors qu'on pourrait l'attendre | 10 |
| Dépendance | dependency | Une story ne peut pas être livrée, ou n'a pas de sens, avant une autre | 10 |
| Definition of Done (DoD) | Definition of Done | Exigences de qualité que tout élément remplit pour faire partie de l'incrément | 0, 11 |
| Definition of Ready (DoR) | Definition of Ready | Conditions qu'un élément remplit avant d'entrer dans un sprint (choix d'école) | 11 |
| Indicateur | metric | Valeur calculée par le produit pour ses utilisateurs (locations par quartier) | 12 |
| Définition d'un indicateur | metric definition | Ce qu'il compte, sa règle de calcul, son grain, sa période, sa source, sa fraîcheur | 12 |
| Qualité des données | data quality | Respect de règles mesurables (complétude, unicité, fraîcheur, validité, exactitude, cohérence) | 12 |
| Source de données | data source | Système qui produit les données, avec son propriétaire | 12 |
| Donnée personnelle | personal data | Information sur une personne identifiée ou identifiable (RGPD) | 12 |
| Ordonner | order | Décider de la place de chaque élément dans le backlog | 3, 13 |
| Coût du retard | cost of delay | Ce qu'on perd à livrer plus tard (choix d'école) | 13 |
| MoSCoW | MoSCoW | Classement Must, Should, Could, Won't pour une échéance (choix d'école) | 13 |
| Sponsor | sponsor | Responsable qui porte le budget du produit et arbitre au-delà du PO | 14 |
| Obstacle | impediment | Ce qui bloque l'équipe et qu'elle ne lève pas seule | 14 |
| Escalade | escalation | Porter un obstacle ou un arbitrage au niveau qui peut le trancher | 14 |
| Refinement | Product Backlog refinement | Activité continue qui précise et découpe les éléments du backlog | 15 |
| Objectif de sprint | Sprint Goal | Objectif unique du sprint, fixé au Sprint Planning | 0, 15 |
| Backlog de sprint | Sprint Backlog | Objectif de sprint, éléments choisis et plan des Developers | 0, 15 |
| Story map | story map | Carte du backlog selon le parcours de l'utilisateur (Patton) | 16 |
| Tranche de version | release slice | Ensemble de stories de la carte qui forme une version utile | 16 |
| MVP | minimum viable product | Au sens de Ries : version qui apporte le plus d'apprentissage pour le moindre effort ; l'usage courant en fait la première version | 16, 17 |
| Prévision | forecast | Estimation de ce qui sera fait et quand, par les Developers ; pas un engagement | 16 |
| Hypothèse | assumption | Ce qu'on tient pour vrai sans l'avoir vérifié | 17 |

## Termes à éviter

| À éviter | Dire plutôt | Pourquoi |
|---|---|---|
| « le métier » | l'acteur nommé (Bruno, Sophie), « les utilisateurs » ou « les parties prenantes » | Flou : on ne sait pas qui décide |
| « prioriser » au sens d'ordonner | « ordonner » ; « priorité » seulement pour MoSCoW | Le Scrum Guide parle d'ordre ; « priorité » laisse croire à des ex aequo |
| « équipe de développement » | « Developers » | Terme du Scrum Guide 2017, remplacé en 2020 |
| « livrer un sprint » | « livrer un incrément » | Le sprint est une durée, l'incrément un état du produit |
| « ticket » | « élément du backlog » | Terme d'outil, absent du Scrum Guide |
| « KPI », « métrique » | « indicateur » (ce que calcule le produit) ou « mesure de résultat » (ce qui juge le produit) | Deux notions, deux termes |
