# Parcours de sve

Statut de chaque concept de `course/plan.md` : `validé`, `en cours`, `à revoir`, `à faire`.

## Prochaine étape

**Concept 10 en cours : 10a (DoD) validé, 10b (Definition of Ready) posé en session 7
(2026-10-22).** Énoncé : `course/concepts/10-dor-dod.md`, banque d'exemples, « Story pas prête :
accès aux données non obtenu ». Question en attente, mot pour mot : « Question pour toi : la
story est-elle prête ? Que proposes-tu au planning du sprint ? »
En reprenant 10b, ouvre par un rappel en deux lignes du cadre du fil rouge (l'apprenant est PO
de la plateforme de données ; équipe vélos, DSI), qu'il n'a encore jamais vu.
Après 10b validé : point de sauvegarde, puis concept 11 (priorisation).

## Concepts

| # | Statut |
|---|---|
| 1 | validé |
| 2 | validé |
| 3 | validé |
| 4 | validé |
| 5 | validé |
| 6 | validé |
| 7 | validé |
| 8 | validé |
| 9 | validé |
| 10 | en cours |
| 11 | à faire |
| 12 | à faire |
| 13 | à faire |

Annexes vues : A1 (Scrum en bref et l'incrément).

## Points annoncés pour plus tard

- Concept 11 : annoncé en 9a, la story « bloquer à la location un vélo signalé en panne »
  (sortie du hors périmètre) se priorise face au reste ; bon exemple de priorisation.
- Concept 12 (refinement) : c'est là que se définit un terme flou (« donnée mal renseignée »),
  pas dans une story « définir X ».
- Concept 13 : sve avait choisi trois niveaux (epic, feature, story). Signe qu'un niveau est de
  trop : la plupart des features ne contiennent qu'une story.

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
- 2026-10-22 : pas de cours. Restructuration du dossier (T-017) : le cours est dans `course/`
  (plan, un fichier par concept), les fiches et traces de sve n'existent plus, observations
  dans `learner/observations.md`. TP et PDSF archivés.
