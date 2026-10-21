---
name: maintenance
description: Charge ce skill quand le mainteneur annonce une session de maintenance ou d'amélioration du dépôt, ou veut modifier CLAUDE.md, un skill, course/ ou le backlog de maintainer/ (créer, trier, traiter un ticket). Ne pas charger pendant le cours ni pendant le TP.
disable-model-invocation: true
---

# Maintenir le parcours

Tu interviens comme mainteneur du dossier, pas comme professeur. Ton interlocuteur est le
mainteneur : c'est lui qui valide, jamais l'apprenant.

## Périmètre

- **Cadre** : `CLAUDE.md`, `.claude/skills/`, `course/` (sauf `course/fil-rouge-velos.md` et la
  correction d'une incohérence de `course/mock-project/coulisses.md`, tenus par `update-memory`). Tu proposes, le mainteneur valide, puis tu appliques, même pour une
  coquille.
- **`maintainer/maintenance.md`** : propositions en attente et journal du cadre. Tu l'édites en
  autonomie.
- **`maintainer/backlog/`** : un ticket par fichier, au format de `ticket-template.md`, dans
  `01-todo/` puis `02-done/` une fois appliqué ; `00-proposed/` reçoit les demandes à trier. Tu l'édites en autonomie.
- **`learner/`** : tu le lis pour diagnostiquer. Tu n'y écris que pour corriger un chemin après
  un déplacement de fichier.

## Règles d'écriture du cadre

- Écris la règle sans la justifier, sauf si la raison est nécessaire pour l'appliquer.
- Noms de skills, de dossiers et de nouveaux fichiers en anglais.
- Une règle vit à un seul endroit : avant d'en écrire une, cherche si elle existe déjà.

## 1. Diagnostiquer une session

Sources : la conversation si tu es lancé dans la session de cours elle-même ; sinon les sections
« Pour améliorer le cours » des traces de `learner/examples/` et le journal de
`learner/parcours.md` depuis le dernier diagnostic noté au journal du cadre.

Relève, avec un fait précis pour chacun :
- les écarts aux règles du `CLAUDE.md` (message de plus de 15 lignes, deux concepts dans un
  message, question qui ne teste pas, passage au concept suivant sans preuve de compréhension) ;
- ce qui a fait déclic chez l'apprenant, et ce qui n'a pas marché ;
- les demandes de l'apprenant sur le rythme ou la forme (« plus vite », « exemple », apartés) ;
- pendant le TP, le métier a-t-il révélé plus que ce qui était demandé, ou proposé une solution ?

## 2. Proposer

Une proposition n'est présentée que si elle passe **les quatre critères** :
1. **Fait observé** : elle part d'un événement précis (cite-le), ou d'une demande du mainteneur.
2. **Texte exact** : elle donne le texte à ajouter, remplacer ou retirer, et l'endroit.
3. **Erreur évitée** : elle nomme ce que l'agent suivant ferait de travers sans elle.
4. **Pas de doublon ni de contradiction** : la règle n'existe pas déjà ailleurs, et ne contredit
   pas une règle existante, sauf si la proposition consiste justement à la changer, ce qu'elle
   dit explicitement.

Proposer de retirer une règle inutile vaut autant qu'en ajouter une. Aucune proposition est un
résultat normal : ne force rien. Commence aussi par les « Propositions en attente » de
`maintainer/maintenance.md`.

## 3. Appliquer

- Proposition acceptée : applique-la, retire-la des propositions en attente, ajoute une ligne au
  journal du cadre.
- Proposition refusée : retire-la, note-la au journal du cadre pour ne pas la reproposer.
- Proposition non tranchée : elle va, complète, dans « Propositions en attente ».

## 4. Tester

Après un changement qui modifie une procédure ou déplace des fichiers : lance un sous-agent neuf
sur le dossier seul, en lecture seule, avec pour message « on reprend », puis « on continue »,
puis un message de fin de session. Vérifie qu'il lit les bons chemins, annonce le bon concept,
tient les 15 lignes, prend ses exemples dans le fil rouge vélos pendant le cours (jamais le
projet factice), trace chaque exemple dans `learner/examples/`, ne repose pas les questions
d'accueil et suit `update-memory` en fin de session. Rapporte le résultat au mainteneur.
