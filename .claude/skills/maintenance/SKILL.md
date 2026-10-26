---
name: maintenance
description: Charge ce skill quand le mainteneur annonce une session de maintenance ou d'amélioration du dépôt, ou veut modifier CLAUDE.md, un skill, course/ ou le backlog de maintainer/ (créer, trier, traiter un ticket). Ne pas charger pendant le cours.
disable-model-invocation: true
---

# Maintenir le parcours

Tu interviens comme mainteneur du dossier, pas comme professeur. Ton interlocuteur est le
mainteneur : sur le contenu du cours, tu décides et appliques seul ; sur le comportement du
prof et des agents, tu proposes et il décide. Il valide le tout en relisant la PR. L'apprenant ne valide
jamais rien.

## Périmètre

- **Cadre**, modifié sur la branche d'un ticket, jamais sur `main`, chaque changement exposé
  dans la PR (§3, étape 6) :
  - **contenu** : `course/` ; tu le modifies en autonomie ;
  - **comportement des agents** (prof et maintenance) : `CLAUDE.md` et tout `.claude/` ; tu
    proposes, le mainteneur décide (§3, étape 3).
- **`maintainer/backlog/`** : un ticket par fichier, au format de `ticket-template.md`.
  `00-proposed/` : à trier ; `01-todo/` : décidé ; `02-wip/` : en cours, sa branche existe
  (un parent y reste entre deux sous-tickets) ; `03-done/` : appliqué. Tu l'édites en autonomie.
- **`maintainer/adr/`** : les décisions qui passent la règle ADR (§4), au format
  d'`adr-template.md`. Tu l'édites en autonomie.
- **`maintainer/site/`** : ce qui est propre au site (`../parcours-po-website`) : plan et
  principes (`structure.md`), traitement d'un ticket du site (`procedure.md`), ADR du site seul
  (`adr/`). Un ticket qui touche le site suit aussi `procedure.md`. Tu l'édites en autonomie.
- **`archive/`** : tu ne le lis que sur demande du mainteneur.
- **`learner/`** : tu le lis pour diagnostiquer. Tu n'y écris que pour corriger un chemin après
  un déplacement ou une suppression de fichier, pour y recopier les modèles de
  `course/templates/learner/` quand un ticket les change (sur `main`, `learner/` en est la
  copie : un apprenant neuf, vérifié par la CI), ou par exception écrite dans un ticket, et
  jamais dans le journal de `learner/parcours.md`, réservé aux sessions de cours.

## Règles d'écriture du cadre

- Écris la règle sans la justifier, sauf si la raison est nécessaire pour l'appliquer.
- Noms de skills, de dossiers et de nouveaux fichiers en anglais.
- Une règle vit à un seul endroit : avant d'en écrire une, cherche si elle existe déjà.

## Partir d'un `main` propre

Avant toute écriture (ticket, backlog, cadre, site), au début de la session comme en cours de
conversation :
1. Sur une branche `test_…` : demande au mainteneur la confirmation de la purger ; à son accord,
   jette ce que la session de test a laissé (`git restore .`, `git clean -fd learner/`), passe
   sur `main` et supprime la branche (`git branch -D`).
2. Sur la branche `learner/<surnom>`, où le mainteneur suit le cours : commite les fichiers de
   `learner/` modifiés (« <surnom> : progression »), pousse, puis passe sur `main`. À sa
   demande, la branche se met à jour depuis `main` (`git merge main`) ; un conflit dans
   `learner/` garde la version de la branche.
3. Sur la branche d'un ticket : restes-y si l'écriture relève de ce ticket ; sinon, demande.
4. Sur `main` : `git pull --ff-only`. Des fichiers de `learner/` modifiés : une session de cours
   a tourné sur `main` ; demande au mainteneur s'ils vont sur sa branche `learner/<surnom>`
   (créée depuis `main` si elle n'existe pas) ou se jettent (`git restore learner/`). Ils ne se
   commitent jamais sur `main`.

## 1. Faire le point sur le backlog

Au début de la session, sauf si le mainteneur arrive avec une demande précise : pars d'un
`main` propre (« Partir d'un `main` propre »), puis liste `00-proposed/`, `01-todo/` et `02-wip/`, et
propose un ordre. Un ticket de `02-wip/` se propose
en premier : vérifie d'abord sa PR (`gh pr list`) ; si elle attend la revue, il attend le
merge ; sinon, on reprend sa branche, ou, pour un parent, son prochain sous-ticket dont la
dépendance est mergée. Un ticket « à affiner » s'affine au traitement (§3, étape 2) ; un
ticket qui dépend d'un autre passe après lui ; un ticket qui semble déjà appliqué se vérifie, puis se clôt
(§3, étape 5). Le mainteneur choisit.

## 2. Créer ou trier un ticket

- **Créer** : une demande du mainteneur devient un ticket selon `ticket-template.md`, dans
  `01-todo/` s'il l'a décidé, dans `00-proposed/` sinon. Un défaut hors du ticket en cours ne se
  corrige pas au passage.
- **Session de remarques** : quand le mainteneur décrit ses remarques une à une pour en
  discuter, ne traite pas une remarque avant d'en avoir discuté : donne ton avis et une
  proposition ; une fois d'accord, crée un ticket par remarque (sous-ticket du ticket parent de
  la session s'il en a fait ouvrir un), puis traite-le jusqu'où il l'a autorisé (PR, merge,
  redéploiement).
- **Trier un constat** (défaut relevé par un test, un diagnostic ou une revue) avant d'en faire
  un ticket, en autonomie :
  1. vérifie-le toi-même contre les règles, en lisant toute la règle concernée, pas une
     ligne : le cadre le couvre-t-il déjà ? Pas de sous-agent pour ce tri ;
  2. nomme l'erreur que l'agent suivant ferait et son effet concret ;
  3. cherche un ticket ouvert sur la même règle.

  Constat faux ou sans effet : rejeté. Même règle qu'un ticket ouvert : fusionné dans son
  constat. Sinon : ticket affiné (« À faire », « Fini quand ») dans `00-proposed/`. La PR liste
  chaque constat rejeté ou fusionné, une ligne avec sa raison.
- **Trier** un ticket de `00-proposed/` avec le mainteneur : décidé, il passe dans `01-todo/`,
  complété ou marqué « à affiner » ; refusé, il est supprimé, et tu appliques la règle ADR au refus (§4) ; non tranché,
  il reste.

## 3. Traiter un ticket

1. **Démarrer** : pars d'un `main` propre (section ci-dessus). Un ticket de `00-proposed/` que le mainteneur demande de traiter est
   décidé : il va directement dans `02-wip/`. Déplace le ticket vers
   `02-wip/` (`git mv`), avec son parent s'il n'y est pas déjà ; pour un sous-ticket, passe son
   état à « en cours » dans le parent. Commite le tout sur `main` (« T-000 : en cours ») et
   pousse. Crée la branche `ticket/<nom du fichier du ticket, sans .md>`. Un travail hors
   ticket demandé par le mainteneur suit les mêmes étapes, sans les déplacements du ticket, sur
   une branche `maint/<slug>`.

   Sur `main`, ne commite directement que le backlog créé
   ou trié hors du traitement d'un ticket (§2), le passage en `02-wip/` et la publication d'une
   version du cours (ci-dessous). Un ticket créé ou
   complété pendant le traitement d'un autre se commite sur la branche de celui-ci ; tout le reste passe par une
   branche et une PR.
2. **Lire** le ticket et les ADR de `maintainer/adr/` et, pour le site, de
   `maintainer/site/adr/` qui touchent le même sujet : ne défais pas
   une décision sans le dire. Un ticket « à affiner » : complète d'abord toi-même « À faire » et
   « Fini quand ».
3. **Décider** : sur le contenu, sans attendre de validation ; sur le comportement, présente
   au mainteneur le ticket, son enjeu et ta recommandation avec le texte exact, attends sa
   décision, puis applique. Un ticket qui touche les deux s'arrête une fois, pour sa partie
   comportement. Refusé, le ticket quitte `02-wip/` (supprimé, ou rendu à `00-proposed/`) par un
   commit sur `main`, et sa branche se supprime. La solution passe **les quatre critères** :
   1. **Fait observé** : elle part du constat du ticket ou d'un événement précis (cite-le).
   2. **Texte exact** : elle donne le texte à ajouter, remplacer ou retirer, et l'endroit.
   3. **Erreur évitée** : elle nomme ce que l'agent suivant ferait de travers sans elle.
   4. **Pas de doublon ni de contradiction** : la règle n'existe pas déjà ailleurs, et ne
      contredit pas une règle existante, sauf si la proposition consiste justement à la changer,
      ce qu'elle dit explicitement.

   Retirer une règle inutile vaut autant qu'en ajouter une. Si le mainteneur a fixé la solution
   dans le ticket ou en demandant de le traiter, applique-la ; sur le comportement, seulement
   s'il en a fixé le texte exact.

   **Arbitrer le contenu du cours** (fait du fil rouge, plan, glossaire, constat de revue
   laissé ouvert, consignes d'un lot) : ne fixe un fait que si un concept en a besoin, le plus
   petit possible, sans contredire l'existant ; laisse non fixé ce dont aucun exemple ne
   dépend ; ne tranche jamais un fait métier réel. Chaque arbitrage va dans la PR, avec l'option
   écartée.

   Traiter un sous-ticket de lot vaut demande de lancer `course-lot` : écris ses consignes
   propres au lot sur le modèle des lots précédents, lance-le, arbitre ce qu'il laisse ouvert,
   puis enchaîne.

   Hors de cette décision sur le comportement, n'interromps le traitement que pour un blocage
   que tu ne lèves pas (accès, outil en panne) : demande alors au mainteneur ce qui le lève.
4. **Appliquer**, puis **tester** (§5), en commitant sur la branche (« T-000 : <ce qui
   change> »). Un ticket qui modifie `course/` inscrit chaque changement sous « Non publié » de
   `course/CHANGELOG.md`, rangé en MAJOR, MINOR ou PATCH selon les définitions du fichier. Un
   MAJOR se signale en tête de la description de la PR : il casse `learner/parcours.md` et les
   adresses du site. Un ticket qui modifie `course/plan.md` ou `course/domains/` régénère
   `course/map.md` (`sh maintainer/scripts/build-map.sh`) et le commite ; la CI le vérifie.
5. **Clore**, sur la branche : le ticket passe de `02-wip/` dans `03-done/` avec sa ligne
   « Fait le » (résultat du test compris) ; pour un sous-ticket, mets à jour son état et sa
   prochaine étape dans le parent, et le parent passe aussi dans `03-done/` si c'était le
   dernier ; applique la règle ADR (§4).
6. **Ouvrir la PR** : pousse la branche et ouvre une PR vers `main`, titrée « T-000 : <titre du
   ticket> » ; le titre et la description deviennent le message du commit squashé. Description,
   dans cet ordre :
   1. ce qui change le comportement du prof (`CLAUDE.md`, skills, hooks), en tête ;
   2. les arbitrages, chacun avec l'option écartée ;
   3. les tickets créés, et les constats rejetés ou fusionnés avec leur raison (§2) ;
   4. les tests et leur résultat ;
   5. ce qui reste non vérifié ;
   6. l'ADR créé.

   Pour un lot de contenu, ni réponse attendue ni extrait de banque d'exemples : le mainteneur
   suit le cours. Le mainteneur relit la PR et la merge lui-même, ou te demande de la merger (le dépôt n'autorise que le squash, et GitHub supprime la branche distante). Ses
   remarques se traitent par de nouveaux commits sur la branche ; mets alors la description à
   jour. Après le merge (le mainteneur te le dit ; vérifie-le avec `gh pr view`), mets `main` à
   jour et supprime la branche locale (`git branch -D` : après un squash, git ne la voit pas
   fusionnée). Un « Fini quand » qui ne se
   vérifie qu'après le merge (la reprise de l'apprenant, par exemple) se vérifie alors ; note le
   résultat en commentaire de la PR (`gh pr comment`) et, s'il échoue, crée un ticket (§2).

**Publier une version du cours**, seulement à la demande du mainteneur : renomme « Non publié »
en `X.Y.Z, date`, commite sur `main`, pose le tag `course-vX.Y.Z` et pousse-le.

## 4. Décider d'un ADR

Après chaque ticket appliqué ou proposition refusée, juge chaque décision qu'il porte :
1. **La décision change-t-elle ce que fait l'agent ou le mainteneur**, et pas seulement la façon
   de le dire (libellé, vocabulaire, mise en forme) ? L'origine de la décision (demande, test,
   session) ne compte pas.
2. **Une option a-t-elle été écartée explicitement** (dans le ticket ou la discussion) qu'un
   agent proposerait de lui-même, ou la règle paraît-elle arbitraire sans sa raison ? L'ancienne
   règle que la décision remplace compte comme option écartée. N'imagine pas d'option que
   personne n'a nommée.

Deux oui pour une décision du ticket : écris un ADR dans `maintainer/adr/`, ou dans `maintainer/site/adr/` s'il ne concerne que le
site, selon
`maintainer/adr/adr-template.md`, et dis-le dans la PR. Une décision qui annule, remplace ou
contredit ce qu'un ADR décide fait aussi un nouvel ADR ; ajouter un cas ou préciser ne compte
pas. Sinon, rien : le ticket de `03-done/` et l'historique git suffisent.

## 5. Tester

Après un changement qui modifie une procédure ou déplace des fichiers, lance un sous-agent neuf
sur un scénario qui met le changement à l'épreuve, dans une copie du dépôt (dossier de
travail temporaire), avec un `learner/` fictif si besoin : il ne modifie jamais le dépôt. Le sous-agent tourne sur Sonnet. Demande-lui de relire
`CLAUDE.md` sur disque, puis les fichiers qu'il importe (`@…`) dans la copie : il ne reçoit
pas le contexte de démarrage de la copie, et la version de son contexte peut être périmée.
Pas de sous-agent pour un changement trivial : il n'ajoute, ne retire ni ne réordonne aucune
étape, condition, lecture ou écriture de l'agent. Exemples : un mot précisé, une règle étendue
à un cas voisin, un renvoi corrigé. La PR le dit sous les tests, avec la raison en une ligne ;
le mainteneur peut demander le test.

Pour un changement du cours, le scénario par défaut est « on reprend », puis « on continue »,
puis un message de fin de session. Vérifie qu'il lit les bons chemins, annonce le bon concept,
tient les 15 lignes, enseigne à partir du fichier du concept, prend ses exemples dans le fil
rouge vélos, ne repose pas les questions d'accueil, et écrit la mémoire aux points de
sauvegarde, selon « Tenir la mémoire à jour » de `CLAUDE.md` (observations dans la bonne
section, journal et contrôle de
reprise à l'arrêt).

Après un ticket qui modifie ce qu'un concept enseigne (explication, situation ou ordre de ses
sous-concepts), lot compris, lance le workflow `course-taught-check` avec `from` au premier
concept touché : il signale les cas qui demandent ce que l'apprenant n'a pas encore reçu, sans
rien modifier. Un constat que le ticket a causé se corrige sur sa branche.

Le résultat va dans la PR. Les défauts que le test révèle hors du ticket passent le tri des
constats (§2).

## Préparer un test du cours

Quand le mainteneur demande de préparer un test du cours : pars d'un `main` propre, puis crée la
branche `test_<AAMMJJ>-<HHMM>`. `learner/` reste celui de `main` (nouvel apprenant), sauf si
le mainteneur donne un point de départ (« depuis le concept 9 ») : écris alors un `learner/`
fictif, concepts précédents validés, au format de `course/templates/learner/`. Ne commite rien.
Réponds en deux lignes : la branche, puis « Ouvre une nouvelle conversation dans ce dossier pour
le test, et reviens ici ensuite ».

## Cas particulier : diagnostiquer une session de cours

Quand le mainteneur le demande. Périmètre : la dernière session de cours, sauf s'il en demande
plus. Sources : la conversation si tu es lancé dans la session de cours elle-même ; sinon le
journal de `learner/parcours.md` et `learner/observations.md`, ou la conversation que le
mainteneur te donne.

Relève, avec un fait précis pour chacun :
- les écarts aux règles du `CLAUDE.md` (message de plus de 15 lignes, deux concepts dans un
  message, question qui ne teste pas, passage au concept suivant sans preuve de compréhension) ;
- ce qui a fait déclic chez l'apprenant, et ce qui n'a pas marché ;
- les demandes de l'apprenant sur le rythme ou la forme (« plus vite », « exemple », apartés) ;

Chaque point qui appelle un changement passe le tri des constats (§2), avec pour constat le
fait relevé.
Aucun ticket est un résultat normal : ne force rien.
