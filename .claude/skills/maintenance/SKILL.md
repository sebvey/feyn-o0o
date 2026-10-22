---
name: maintenance
description: Charge ce skill quand le mainteneur annonce une session de maintenance ou d'amélioration du dépôt, ou veut modifier CLAUDE.md, un skill, course/ ou le backlog de maintainer/ (créer, trier, traiter un ticket). Ne pas charger pendant le cours.
disable-model-invocation: true
---

# Maintenir le parcours

Tu interviens comme mainteneur du dossier, pas comme professeur. Ton interlocuteur est le
mainteneur : c'est lui qui valide, jamais l'apprenant.

## Périmètre

- **Cadre** : `CLAUDE.md`, `.claude/skills/`, `course/`. Tu proposes, le mainteneur valide,
  puis tu appliques, même pour une coquille.
- **`maintainer/backlog/`** : un ticket par fichier, au format de `ticket-template.md`.
  `00-proposed/` : à trier ; `01-todo/` : décidé ; `02-wip/` : en cours, sa branche existe
  (un parent y reste entre deux sous-tickets) ; `03-done/` : appliqué. Tu l'édites en autonomie.
- **`maintainer/improvements/`** : écrit par le prof pendant le cours. Tu le lis quand tu
  retravailles un concept ou au tri du backlog, tu en tires des tickets (§2), et tu retires une
  entrée une fois traitée.
- **`maintainer/adr/`** : les décisions qui passent la règle ADR (§4), au format
  d'`adr-template.md`. Tu l'édites en autonomie.
- **`archive/`** : tu ne le lis que sur demande du mainteneur.
- **`learner/`** : tu le lis pour diagnostiquer. Tu n'y écris que pour corriger un chemin après
  un déplacement ou une suppression de fichier, ou par exception écrite dans un ticket, et
  jamais dans le journal de `learner/parcours.md`, réservé aux sessions de cours.

## Règles d'écriture du cadre

- Écris la règle sans la justifier, sauf si la raison est nécessaire pour l'appliquer.
- Noms de skills, de dossiers et de nouveaux fichiers en anglais.
- Une règle vit à un seul endroit : avant d'en écrire une, cherche si elle existe déjà.

## 1. Faire le point sur le backlog

Au début de la session, sauf si le mainteneur arrive avec une demande précise : mets `main` à
jour depuis le remote (§3, étape 1), puis liste `00-proposed/`, `01-todo/`, `02-wip/` et les
fichiers de `maintainer/improvements/`, et propose un ordre. Un ticket de `02-wip/` se propose
en premier : vérifie d'abord sa PR (`gh pr list`) ; si elle attend la revue, il attend le
merge ; sinon, on reprend sa branche, ou, pour un parent, son prochain sous-ticket dont la
dépendance est mergée. Un ticket « à affiner » s'affine avec le mainteneur avant d'être
traité ; un ticket qui dépend d'un autre passe après lui ; un ticket qui semble déjà appliqué se vérifie, puis se clôt
(§3, étape 5). Le mainteneur choisit.

## 2. Créer ou trier un ticket

- **Créer** : une demande du mainteneur, ou un défaut relevé pendant un test ou un diagnostic,
  devient un ticket selon `ticket-template.md`, dans `01-todo/` si le mainteneur l'a décidé, dans
  `00-proposed/` sinon. Un défaut hors du ticket en cours ne se corrige pas au passage : propose
  le ticket.
- **Trier** un ticket de `00-proposed/` avec le mainteneur : décidé, il passe dans `01-todo/`,
  complété ou marqué « à affiner » ; refusé, il est supprimé, et tu appliques la règle ADR au refus (§4) ; non tranché,
  il reste.

## 3. Traiter un ticket

1. **Démarrer** : mets `main` à jour depuis le remote (`git switch main`,
   `git pull --ff-only`). Si l'arbre de travail n'est pas propre (fichiers de `learner/` ou de
   `maintainer/improvements/` laissés par une session de cours), dis-le au mainteneur et, avec
   son accord, commite-les sur `main` et pousse. Un ticket de `00-proposed/` se trie d'abord
   avec le mainteneur (§2) ; décidé, il va directement dans `02-wip/`. Déplace le ticket vers
   `02-wip/` (`git mv`), avec son parent s'il n'y est pas déjà ; pour un sous-ticket, passe son
   état à « en cours » dans le parent. Commite le tout sur `main` (« T-000 : en cours ») et
   pousse. Crée la branche `ticket/<nom du fichier du ticket, sans .md>`. Un travail hors
   ticket demandé par le mainteneur suit les mêmes étapes, sans les déplacements du ticket, sur
   une branche `maint/<slug>`.

   Sur `main`, ne commite directement que les fichiers d'une session de cours, le backlog créé
   ou trié hors du traitement d'un ticket (§2) et le passage en `02-wip/`. Un ticket créé pendant
   le traitement d'un autre se commite sur la branche de celui-ci ; tout le reste passe par une
   branche et une PR.
2. **Lire** le ticket et les ADR de `maintainer/adr/` qui touchent le même sujet : ne défais pas
   une décision sans le dire. Un ticket « à affiner » : complète d'abord « À faire » et « Fini
   quand » avec le mainteneur.
3. **Proposer** au mainteneur, puis attendre sa validation. Une proposition passe **les quatre
   critères** :
   1. **Fait observé** : elle part du constat du ticket ou d'un événement précis (cite-le).
   2. **Texte exact** : elle donne le texte à ajouter, remplacer ou retirer, et l'endroit.
   3. **Erreur évitée** : elle nomme ce que l'agent suivant ferait de travers sans elle.
   4. **Pas de doublon ni de contradiction** : la règle n'existe pas déjà ailleurs, et ne
      contredit pas une règle existante, sauf si la proposition consiste justement à la changer,
      ce qu'elle dit explicitement.

   Proposer de retirer une règle inutile vaut autant qu'en ajouter une. Si le mainteneur a déjà
   fixé la solution dans le ticket ou en demandant de le traiter, applique-la sans reproposer.
4. **Appliquer**, puis **tester** (§5), en commitant sur la branche (« T-000 : <ce qui
   change> »).
5. **Clore**, sur la branche : le ticket passe de `02-wip/` dans `03-done/` avec sa ligne
   « Fait le » (résultat du test compris) ; pour un sous-ticket, mets à jour son état et sa
   prochaine étape dans le parent, et le parent passe aussi dans `03-done/` si c'était le
   dernier ; applique la règle ADR (§4).
6. **Ouvrir la PR** : pousse la branche et ouvre une PR vers `main`, titrée « T-000 : <titre du
   ticket> », avec ce qui change, le résultat du test et l'ADR créé : le titre et la
   description deviennent le message du commit squashé. Le mainteneur relit la PR et la merge
   lui-même (le dépôt n'autorise que le squash, et GitHub supprime la branche distante). Ses
   remarques se traitent par de nouveaux commits sur la branche ; mets alors la description à
   jour. Après le merge (le mainteneur te le dit ; vérifie-le avec `gh pr view`), mets `main` à
   jour et supprime la branche locale (`git branch -D` : après un squash, git ne la voit pas
   fusionnée). Un « Fini quand » qui ne se
   vérifie qu'après le merge (la reprise de l'apprenant, par exemple) se vérifie alors ; note le
   résultat en commentaire de la PR (`gh pr comment`) et, s'il échoue, crée un ticket (§2).

## 4. Décider d'un ADR

Après chaque ticket appliqué ou proposition refusée, juge chaque décision qu'il porte :
1. **La décision change-t-elle ce que fait l'agent ou le mainteneur**, et pas seulement la façon
   de le dire (libellé, vocabulaire, mise en forme) ? L'origine de la décision (demande, test,
   session) ne compte pas.
2. **Une option a-t-elle été écartée explicitement** (dans le ticket ou la discussion) qu'un
   agent proposerait de lui-même, ou la règle paraît-elle arbitraire sans sa raison ? L'ancienne
   règle que la décision remplace compte comme option écartée. N'imagine pas d'option que
   personne n'a nommée.

Deux oui pour une décision du ticket : écris un ADR dans `maintainer/adr/`, selon
`maintainer/adr/adr-template.md`, et dis-le au mainteneur. Une décision qui annule, remplace ou
contredit ce qu'un ADR décide fait aussi un nouvel ADR ; ajouter un cas ou préciser ne compte
pas. Sinon, rien : le ticket de `03-done/` et l'historique git suffisent.

## 5. Tester

Après un changement qui modifie une procédure ou déplace des fichiers, lance un sous-agent neuf,
en lecture seule, sur un scénario qui met le changement à l'épreuve. Demande-lui de relire
`CLAUDE.md` sur disque : la version de son contexte peut être périmée.

Pour un changement du cours, le scénario par défaut est « on reprend », puis « on continue »,
puis un message de fin de session. Vérifie qu'il lit les bons chemins, annonce le bon concept,
tient les 15 lignes, enseigne à partir du fichier du concept, prend ses exemples dans le fil
rouge vélos, ne repose pas les questions d'accueil, et écrit la mémoire dans la même réponse
que chaque fait, selon « Tenir la mémoire à jour » de `CLAUDE.md` (observations dans la bonne
section, entrée dans `maintainer/improvements/` si un fait s'y prête, journal et contrôle de
reprise à l'arrêt).

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
