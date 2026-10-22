# Parcours

Ordre indicatif : adapte selon les réponses de sve. Statuts : `validé`, `en cours`, `à revoir`,
`à faire`, `dans le TP`. La colonne « Fiche » pointe vers `learner/cards/`.

## Prochaine étape

**Concept 10 en cours : 10a (DoD) validé, 10b (Definition of Ready) posé en session 7
(2026-10-22).** Situation : story du responsable d'exploitation « voir les locations du jour par
station », prête sauf l'accès à la table des locations (demandé à la DSI). Trace
`10-dor-dod/03`. Question en attente, mot pour mot : « Question pour toi : la story est-elle
prête ? Que proposes-tu au planning du sprint ? »
Avant de reprendre 10b : aparté « le cadre du fil rouge » en un message (entreprise, produit,
équipe, acteurs, d'après `course/fil-rouge-velos.md`), puis 10b repris depuis le début.
Après 10b validé : compléter la fiche 10 (partie DoR), point de sauvegarde, puis concept 11
(priorisation).

## Exemples déjà utilisés dans le cours

Tracés un par un dans `learner/examples/` (un dossier par concept). Fil rouge du cours depuis le
2026-10-21 : l'opérateur de vélos en libre-service (`course/fil-rouge-velos.md`).
- Marge de fabrication entre usines, qualité de saisie des OF : ancien projet réel (supprimé).
- Supérettes de produits frais : réservé au TP, jamais dans le cours.

## Concepts

| # | Concept | Statut | Fiche |
|---|---|---|---|
| 1 | Le produit : problème, utilisateurs, valeur. Rôle du PO face à l'équipe | validé | `01-produit-et-po.md` |
| 2 | Le backlog produit : définition, propriétaire, usage | validé | `02-backlog-produit.md` |
| 3 | Hiérarchie thème / epic / feature / story / tâche | validé | `03-hierarchie.md` |
| 4 | La user story : en tant que / je veux / afin de | validé | `04-user-story.md` |
| 5 | Rôles et personas : choisir le bon acteur | validé | `05-roles-personas.md` |
| 6 | INVEST | validé | `06-invest.md` |
| 7 | Critères d'acceptation (Given/When/Then) et règles métier | validé | `07-criteres-regles.md` |
| 8 | Découpage en tranches verticales vs couches techniques | validé | `08-decoupage-vertical.md` |
| 9 | Hors périmètre et dépendances | validé | `09-hors-perimetre-dependances.md` |
| 10 | Definition of Ready / Definition of Done | en cours | `10-dor-dod.md` |
| 11 | Priorisation : valeur/effort, MoSCoW, MVP, story mapping | à faire | |
| 12 | Cycle de vie d'une story : états, refinement, sélection | à faire | |
| 13 | Choix d'outil et structure minimale du backlog | dans le TP | |
| 14 | TP : jeu de rôle sur le projet factice (`course/mock-project/`), de bout en bout | à faire | |
| 15 | Optionnel, sur décision de sve : PDSF est-il adapté à un projet data ? (`course/ancrage-pdsf.md`) | à décider après le TP | |
| 16 | Page web des fiches, avec sve, par itérations | à faire | |

Annexes déjà traitées : Scrum en bref et l'incrément (`A1-scrum.md`).

## Points annoncés pour plus tard

Exemples du projet réel retirés (supprimés) ; les idées restent, à illustrer par des exemples
génériques :
- Concept 11 : la page web de consolidation des fiches est un exemple de « pas maintenant ».
- Concept 11 : annoncé en 9a, la story « bloquer à la location un vélo signalé en panne »
  (sortie du hors périmètre) se priorise face au reste ; bon exemple de priorisation.
- Concept 12 (refinement) : c'est là que se définit un terme flou (« donnée mal renseignée »),
  pas dans une story « définir X ».
- TP (concept 13) : sve avait choisi trois niveaux (epic, feature, story). Signe qu'un niveau
  est de trop : la plupart des features ne contiennent qu'une story.

## Journal

- 2026-10-20/21, session 1 : accueil, concepts 1 à 5, aparté Scrum et incrément, mini-récaps.
  Création de ce dossier (sve l'a cadré comme un produit dont l'agent prof est l'utilisateur),
  testé par un sous-agent neuf (reprise correcte). Création du skill `conclure-session`. La page
  web des fiches est reportée à la fin du parcours, à mener avec sve. Quatre tests de reprise par
  sous-agent ; douze changements du cadre acceptés par sve (gestion des propositions en attente,
  départ pressé, limite de 15 lignes hors échanges sur le cadre, etc.). sve a décidé d'arrêter
  les itérations sur le cadre : la prochaine session réelle sert de test.
- 2026-10-21, session 2 : aparté feature vs story (retour concept 3, test reformulé « compter les
  je veux », choix de trois niveaux), concepts 6 (INVEST) et 7 (critères et règles) validés, story
  OF en v4 avec deux critères Given/When/Then, mini-récap 6-7. Arrêt sur la question « revenir
  sur un point ? » avant le concept 8. Aucune proposition sur le cadre.
- 2026-10-21, session 2 (suite) : concept 8 commencé (tranche verticale, schéma du gâteau en
  couches, insight « vertical par les couches mais pas par la valeur »). **Restructuration** à la
  demande de sve : il n'est PO d'aucun projet, prendre son projet réel comme support rendait
  l'expérience douloureuse. Objectif final « backlog du projet réel » retiré ; cours avec
  exemples génériques ; TP en jeu de rôle sur un projet factice (supérettes, démarque) après le
  cours ; PDSF optionnel après le TP ; page web à la fin. Cadre modifié (`CLAUDE.md`, skill), avec
  la règle « un schéma quand il aide ». `projet.md`, `travaux.md` et exemples des fiches archivés,
  puis supprimés le 2026-10-22. Le projet factice est généré dans une autre session à partir de
  `projet-factice/GENERER.md`.
- 2026-10-21, session 3 : concept 8 validé (exercice vélos, aparté tranche/story/tâches), sous-concept
  8b (patrons de découpage) validé, fiche 08. À la demande de sve : l'opérateur de vélos en
  libre-service devient le fil rouge du cours, et chaque exemple ou question est tracé dans
  `exemples/` (un dossier par concept, un fichier par exemple) pour améliorer le cours plus tard.
  `CLAUDE.md` et le skill `conclure-session` modifiés en conséquence.
- 2026-10-21, session 4 : pas de cours. Travail sur le cadre avec sve (dossiers `learner/`,
  `course/`, `maintainer/`, skills `update-memory` et `maintenance`) : voir `maintainer/`
  (backlog et ADR), qui tient désormais les changements du cadre.
- 2026-10-21, session 5 : concept 9 commencé, sous-concept 9a (hors périmètre) validé sur la
  maintenance des vélos en panne, fiche 09 commencée. Arrêt au point de sauvegarde avant 9b.
- 2026-10-21, session 6 : mini-récap 6 à 9a à la demande de sve, retour sur le N d'INVEST
  (abonné sans appli, SMS : solution ou contrainte ?), critère Given/When/Then écrit par sve.
  sve a signalé que la fiche 07 gardait un exemple archivé : exemples des fiches 06 et 07
  réécrits sur les vélos. Sous-concept 9b posé.
- 2026-10-22, session 7 : 9b repris depuis le début et validé (collectivité, fusion de A et B :
  non), fiche 09 complétée et validée, concept 9 validé. Mini-récap 6 à 9.
  Concept 10 : 10a (DoD) validé, fiche 10 créée ; sve a relevé que la DoD vaut pour toute
  story (formulation « au niveau de l'incrément » corrigée). 10b posé.
