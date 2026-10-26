# ADR-022 : Un hook `SessionStart` donne au prof l'état de `learner/` ; pas de premier message sans saisie

- **Date** : 2026-10-22
- **Statut** : complété par ADR-034, ADR-071
- **Ticket** : T-028

## Contexte
Après T-011 (ADR-021), le prof testait l'existence de `learner/` par une commande shell
(`ls learner/ && cat learner/apprenant.md`), qui échouait sur un dossier absent et s'affichait
« Failed » à la première session de sve, bien que la suite fût correcte. Le mainteneur voulait
aussi que le prof parle en premier, sans saisie de l'apprenant.

## Décision
- `.claude/hooks/learner-status.sh`, déclaré en `SessionStart` dans `.claude/settings.json`
  (sans matcher : démarrage, reprise, `/clear`, compaction), écrit « État de learner/ :
  apprenant connu, <surnom>. » ou « … : nouvel apprenant ». `CLAUDE.md` (démarrage) part de ce
  contexte ; sans lui, le prof lit `learner/apprenant.md` avec Read, jamais par une commande
  shell.
- Un sous-agent ne reçoit pas ce contexte : le skill `maintenance` (§5) fait donner la sortie du
  script dans le brief de test.

## Options écartées
- Une seule consigne dans `CLAUDE.md` (vérifier avec Read ou Glob) : l'agent peut revenir à une
  commande shell ; le hook supprime l'appel d'outil.
- Premier message sans saisie par `initialUserMessage` : la doc Claude Code le réserve au mode
  non interactif (`-p`) ; testé le 2026-10-22 en CLI interactive (v2.1.302), il ne déclenche
  aucun tour. Même s'il marchait dans l'app, il partirait aussi dans les sessions de
  maintenance. Abandonné par le mainteneur.

## Conséquences
Le hook tourne aussi en session de maintenance (une ligne de contexte sans effet). Il suppose
la ligne `Surnom : **…**` du modèle `course/templates/learner/apprenant.md` : changer ce format
oblige à changer le script.
