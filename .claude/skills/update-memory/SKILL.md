---
name: update-memory
description: Met à jour la mémoire de l'apprenant (learner/) et le support d'amélioration du cours à un point de sauvegarde - fin d'un concept ou d'un sous-concept validé, avant d'attaquer la suite, ou dès que l'apprenant dit qu'on s'arrête (« on s'arrête », « fin de session », « je dois y aller », « on reprendra »), même sans nommer le skill. Ne pas utiliser pour un mini-récap ni pour modifier le cadre (CLAUDE.md, skills, course/ hors faits du fil rouge).
---

# Mettre à jour la mémoire

But : que l'agent de la session suivante reprenne exactement où on s'est arrêté, et que le
mainteneur sache ce que la session a appris sur le cours.

Tu édites en autonomie tout `learner/`, `course/fil-rouge-velos.md` et
`maintainer/improvements/`. N'écris rien d'autre : le reste relève du skill `maintenance`.

## 1. Mettre à jour

Repasse les échanges depuis le dernier point de sauvegarde, puis :

| Quoi | Où |
|---|---|
| Statut de chaque concept touché (`en cours`, `validé`, `à revoir`) | Tableau de `learner/parcours.md` |
| Prochain concept et question restée sans réponse, mot pour mot, avec son énoncé (fichier du concept et titre dans sa banque, ou énoncé complet s'il est improvisé) | « Prochaine étape » de `learner/parcours.md` |
| Idée annoncée à l'apprenant pour un concept à venir | « Points annoncés pour plus tard » de `learner/parcours.md` |
| Ce qui s'est passé dans la session | Une ligne datée au journal de `learner/parcours.md`, créée au premier point de sauvegarde de la session, complétée aux suivants |
| Ce qui marche avec l'apprenant | « Leviers » de `learner/observations.md` |
| Difficulté pas encore surmontée | « Vigilances actives » de `learner/observations.md`, avec le numéro du concept |
| Concept compris, vigilance surmontée | « Acquis » de `learner/observations.md` (la vigilance surmontée en sort) |
| Préférence nouvelle ou changée | « Préférences » de `learner/apprenant.md` |
| Story ou critère écrit ou réécrit par l'apprenant | Nouvelle version dans `learner/travaux.md`, avec ta critique |
| Fait métier fixé sur le fil rouge | Une ligne dans « Faits fixés » de `course/fil-rouge-velos.md` ; un nouvel acteur ou une nouvelle source, une ligne dans son tableau |
| Incompréhension, question mal posée, exemple improvisé, aparté, demande de l'apprenant sur la forme, ce qui a fait déclic | Une entrée dans `maintainer/improvements/`, selon son `README.md` |

Pour `learner/observations.md`, le format d'une entrée est `date, [concept], fait -> action`
(« Acquis » : `[concept] fait (date)`).
Relis les entrées existantes : une observation contredite se corrige ou se supprime.

Critère pour chaque ligne écrite dans `learner/` : sans elle, l'agent suivant ferait-il autre
chose (reposer une question, ignorer une difficulté connue, réexpliquer un acquis) ? Sinon, ne
l'écris pas. Exception : la ligne de journal, écrite systématiquement.

Pour `maintainer/improvements/` : écris tout ce qui sort du cours documenté (fichier du concept,
fil rouge) et pourrait servir à un autre apprenant, même si la session s'est bien passée.

## 2. Contrôler la reprise

Relis toi-même les fichiers mis à jour, comme un agent neuf, et vérifie qu'ils répondent sans
ambiguïté :
1. Quel est le prochain concept ?
2. Quelle question attend une réponse de l'apprenant, et où est son énoncé ?
3. Quelles vigilances portent sur le prochain concept ?

Une réponse absente ou ambiguë se corrige avant de répondre.

## 3. Répondre

- L'apprenant a choisi de continuer : attaque la suite, sans parler de la sauvegarde.
- L'apprenant s'arrête : deux lignes (progression sauvegardée et il peut fermer, prochaine
  étape).
- Départ pressé (« je dois filer », « vite ») : mêmes étapes, sans les commenter, puis les deux
  lignes.
