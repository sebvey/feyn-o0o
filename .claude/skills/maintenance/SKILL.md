---
name: maintenance
description: Charge ce skill quand le mainteneur annonce une session de maintenance ou d'amélioration du dépôt, ou veut modifier CLAUDE.md, un skill, course/ ou le backlog de maintainer/ (créer, trier, traiter un ticket). Ne pas charger pendant le cours.
disable-model-invocation: true
---

# Maintenir le parcours

Tu interviens comme mainteneur du dossier, pas comme professeur. Ton interlocuteur est le
mainteneur : c'est lui qui valide, jamais l'apprenant.

## Périmètre

- **Cadre** : `CLAUDE.md`, `.claude/skills/`, `course/` (sauf les faits de
  `course/fil-rouge-velos.md`, tenus par `update-memory`). Tu proposes, le mainteneur valide,
  puis tu appliques, même pour une coquille.
- **`maintainer/backlog/`** : un ticket par fichier, au format de `ticket-template.md`.
  `00-proposed/` : à trier ; `01-todo/` : décidé ; `02-done/` : appliqué. Tu l'édites en
  autonomie.
- **`maintainer/improvements/`** : écrit par le prof via `update-memory`. Tu le lis quand tu
  retravailles un concept ou au tri du backlog, tu en tires des tickets (§2), et tu retires une
  entrée une fois traitée.
- **`maintainer/adr/`** : les décisions qui passent la règle ADR (§4), au format
  d'`adr-template.md`. Tu l'édites en autonomie.
- **`archive/`** : tu ne le lis que sur demande du mainteneur.
- **`learner/`** : tu le lis pour diagnostiquer. Tu n'y écris que pour corriger un chemin après
  un déplacement ou une suppression de fichier.

## Règles d'écriture du cadre

- Écris la règle sans la justifier, sauf si la raison est nécessaire pour l'appliquer.
- Noms de skills, de dossiers et de nouveaux fichiers en anglais.
- Une règle vit à un seul endroit : avant d'en écrire une, cherche si elle existe déjà.

## 1. Faire le point sur le backlog

Au début de la session, sauf si le mainteneur arrive avec une demande précise : liste
`00-proposed/`, `01-todo/` et les fichiers de `maintainer/improvements/`, et propose un
ordre. Un ticket « à affiner » s'affine avec le mainteneur avant d'être traité ; un ticket qui
dépend d'un autre passe après lui ; un ticket qui semble déjà appliqué se vérifie, puis se clôt
(§3, étape 4). Le mainteneur choisit.

## 2. Créer ou trier un ticket

- **Créer** : une demande du mainteneur, ou un défaut relevé pendant un test ou un diagnostic,
  devient un ticket selon `ticket-template.md`, dans `01-todo/` si le mainteneur l'a décidé, dans
  `00-proposed/` sinon. Un défaut hors du ticket en cours ne se corrige pas au passage : propose
  le ticket.
- **Trier** un ticket de `00-proposed/` avec le mainteneur : décidé, il passe dans `01-todo/`,
  complété ou marqué « à affiner » ; refusé, il est supprimé, et tu appliques la règle ADR au refus (§4) ; non tranché,
  il reste.

## 3. Traiter un ticket

1. **Lire** le ticket et les ADR de `maintainer/adr/` qui touchent le même sujet : ne défais pas
   une décision sans le dire. Un ticket « à affiner » : complète d'abord « À faire » et « Fini
   quand » avec le mainteneur.
2. **Proposer** au mainteneur, puis attendre sa validation. Une proposition passe **les quatre
   critères** :
   1. **Fait observé** : elle part du constat du ticket ou d'un événement précis (cite-le).
   2. **Texte exact** : elle donne le texte à ajouter, remplacer ou retirer, et l'endroit.
   3. **Erreur évitée** : elle nomme ce que l'agent suivant ferait de travers sans elle.
   4. **Pas de doublon ni de contradiction** : la règle n'existe pas déjà ailleurs, et ne
      contredit pas une règle existante, sauf si la proposition consiste justement à la changer,
      ce qu'elle dit explicitement.

   Proposer de retirer une règle inutile vaut autant qu'en ajouter une. Si le mainteneur a déjà
   fixé la solution dans le ticket ou en demandant de le traiter, applique-la sans reproposer.
3. **Appliquer**, puis **tester** (§5).
4. **Clore** : le ticket passe dans `02-done/` avec sa ligne « Fait le » (résultat du test
   compris), puis applique la règle ADR (§4).

## 4. Décider d'un ADR

Après chaque décision (ticket appliqué, proposition refusée), réponds à trois questions :
1. La décision fixe-t-elle une structure ou une règle durable du cadre, au-delà d'une
   formulation ?
2. Existe-t-il une autre option crédible qu'un mainteneur futur pourrait vouloir reprendre ?
3. La raison de la décision est-elle absente du cadre lui-même ?

Trois oui : écris un ADR dans `maintainer/adr/`, selon `maintainer/adr/adr-template.md`, et dis-le
au mainteneur. Sinon, rien : le ticket de `02-done/` et l'historique git suffisent.

## 5. Tester

Après un changement qui modifie une procédure ou déplace des fichiers, lance un sous-agent neuf,
en lecture seule, sur un scénario qui met le changement à l'épreuve. Demande-lui de relire
`CLAUDE.md` sur disque : la version de son contexte peut être périmée.

Pour un changement du cours, le scénario par défaut est « on reprend », puis « on continue »,
puis un message de fin de session. Vérifie qu'il lit les bons chemins, annonce le bon concept,
tient les 15 lignes, enseigne à partir du fichier du concept, prend ses exemples dans le fil
rouge vélos, n'écrit au fil de l'eau que « Prochaine étape », ne repose pas les questions
d'accueil et suit `update-memory` en fin de session (observations dans la bonne section,
entrée dans `maintainer/improvements/` si un fait s'y prête).

Rapporte le résultat au mainteneur. Les défauts que le test révèle hors du ticket deviennent des
tickets (§2).

## Cas particulier : diagnostiquer une session de cours

Quand le mainteneur le demande. Périmètre : la dernière session de cours, sauf s'il en demande
plus. Sources : la conversation si tu es lancé dans la session de cours elle-même ; sinon les
entrées de `maintainer/improvements/` et le journal de `learner/parcours.md` pour ces sessions.

Relève, avec un fait précis pour chacun :
- les écarts aux règles du `CLAUDE.md` (message de plus de 15 lignes, deux concepts dans un
  message, question qui ne teste pas, passage au concept suivant sans preuve de compréhension) ;
- ce qui a fait déclic chez l'apprenant, et ce qui n'a pas marché ;
- les demandes de l'apprenant sur le rythme ou la forme (« plus vite », « exemple », apartés) ;

Chaque point qui appelle un changement devient un ticket (§2), avec pour constat le fait relevé.
Aucun ticket est un résultat normal : ne force rien.
