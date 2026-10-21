---
name: update-memory
description: Met à jour la mémoire de l'apprenant (learner/) à un point de sauvegarde - fin d'un concept ou d'un sous-concept validé, avant d'attaquer la suite, ou dès que l'apprenant dit qu'on s'arrête (« on s'arrête », « fin de session », « je dois y aller », « on reprendra »), même sans nommer le skill. Ne pas utiliser pour un mini-récap ni pour modifier le cadre (CLAUDE.md, skills, course/).
---

# Mettre à jour la mémoire

But : que l'agent de la session suivante reprenne exactement où on s'est arrêté.

Tu édites en autonomie tout `learner/` et `course/fil-rouge-velos.md`. Une incohérence découverte
dans `course/mock-project/coulisses.md` se corrige aussi, avec un ticket dans
`maintainer/backlog/00-proposed/` (selon `maintainer/backlog/ticket-template.md`) qui décrit
l'incohérence et la correction, pour relecture par le mainteneur. N'écris rien d'autre : le
reste relève du skill `maintenance`.

## 1. Mettre à jour

Repasse les échanges depuis le dernier point de sauvegarde, puis :

| Quoi | Où |
|---|---|
| Statut de chaque concept touché (`en cours`, `validé`, `à revoir`) | Tableau de `learner/parcours.md` |
| Prochain concept et question restée sans réponse, mot pour mot | « Prochaine étape » de `learner/parcours.md` |
| Idée annoncée pour un concept à venir | « Points annoncés pour plus tard » de `learner/parcours.md` |
| Ce qui s'est passé dans la session | Une ligne datée au journal de `learner/parcours.md`, créée au premier point de sauvegarde de la session, complétée aux suivants |
| Concept ou sous-concept validé | Fiche du concept dans `learner/cards/`, selon `course/templates/fiche.md` : créée au premier sous-concept validé, complétée aux suivants |
| Difficulté, acquis, préférence observés | Une ligne datée dans `learner/apprenant.md`, avec le fait observé. Relis les anciennes : une difficulté surmontée devient un acquis, une observation contredite se corrige ou se supprime |
| Story écrite ou réécrite par l'apprenant | Nouvelle version dans `learner/travaux.md`, avec ta critique |
| Exemple, question, exercice, schéma ou aparté | Sa trace dans `learner/examples/<concept>/`, selon `course/templates/trace-exemple.md` : crée celles qui manquent, complète celles restées sans réponse |
| Fait métier fixé sur le fil rouge | Une ligne dans `course/fil-rouge-velos.md` |
| Pendant le TP, question posée au métier | `learner/journal-tp.md` |
| Pendant le TP, concept sur lequel l'apprenant bute | « Pièges » de la fiche concernée + une ligne dans `learner/apprenant.md` |

Critère pour chaque ligne écrite : sans elle, l'agent suivant ferait-il autre chose (reposer une
question, refaire un exemple déjà vu, ignorer une difficulté connue) ? Sinon, ne l'écris pas.
Exceptions : la ligne de journal et les traces de `learner/examples/`, écrites systématiquement.

## 2. Contrôler la reprise

Relis toi-même les fichiers mis à jour, comme un agent neuf, et vérifie qu'ils répondent sans
ambiguïté :
1. Quel est le prochain concept ?
2. Quelle question attend une réponse de l'apprenant ?
3. Quelles difficultés de l'apprenant sont encore actives ?
4. Y a-t-il autant de traces dans `learner/examples/` que d'exemples et de questions depuis le
   dernier point de sauvegarde ?
5. Pendant le TP : qu'est-ce que l'apprenant a déjà appris du métier ?

Une réponse absente ou ambiguë se corrige avant de répondre.

## 3. Répondre

- L'apprenant a choisi de continuer : attaque la suite, sans parler de la sauvegarde.
- L'apprenant s'arrête : deux lignes (progression sauvegardée et il peut fermer, prochaine
  étape).
- Départ pressé (« je dois filer », « vite ») : mêmes étapes, sans les commenter, puis les deux
  lignes.
