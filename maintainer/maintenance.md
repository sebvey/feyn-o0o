# Maintenance du parcours

Tenu par le skill `maintenance`. Le professeur n'y écrit que deux choses : une demande de
l'apprenant sur la forme du cours (dans « Propositions en attente ») et la correction d'une
incohérence de `course/mock-project/coulisses.md` (dans le journal).

Les améliorations décidées sont des tickets dans `maintainer/backlog/` (`todo/`, `done/`).

## Propositions en attente

Aucune.

## Journal du cadre

Changements de `CLAUDE.md`, des skills et de `course/`, et propositions refusées (pour ne pas
les reproposer). Avant le 2026-10-21, session 4 : voir le journal de `learner/parcours.md`.

- 2026-10-21, session de maintenance : T-007 appliqué, la limite de 15 lignes compte les lignes
  du texte écrit, lignes vides exclues (`CLAUDE.md`). Test par sous-agent OK.
- 2026-10-21, session de maintenance : T-005 appliqué, le premier message d'une session
  s'arrête au rappel et à la proposition, quel que soit le mot d'ouverture (`CLAUDE.md`, étape 3
  du démarrage). Test par sous-agent OK.
- 2026-10-21, session de maintenance : T-004 appliqué, la parenthèse de « On continue » nomme
  la suite réelle, l'option d'arrêt reste mot pour mot (`CLAUDE.md`). Pas de test par
  sous-agent. T-006 créé (équilibre des écritures de la mémoire, à affiner).
- 2026-10-21, session de maintenance : T-003 appliqué, la réponse de l'apprenant et le verdict
  s'écrivent dans la trace au moment de la correction (`CLAUDE.md`, « Tenir la mémoire à
  jour »). Test par sous-agent OK.
- 2026-10-21, session de maintenance : T-002 appliqué, option d'arrêt reformulée au futur
  (`CLAUDE.md`), plus aucune annonce des écritures sauf le message de fin de session
  (`CLAUDE.md`, `update-memory` §3). Test par sous-agent OK (après relecture de `CLAUDE.md` sur
  disque : le premier passage avait lu une version périmée).
- 2026-10-21, session de maintenance : T-001 appliqué, « sous-concept » remplace « tour »
  pour les parties d'un concept (`CLAUDE.md`), « dans la même réponse » remplace « dans le même
  tour » (`CLAUDE.md`, `course/mock-project/coulisses.md`). Pas de test par sous-agent
  (vocabulaire, aucune procédure changée).
- 2026-10-21, session de maintenance : création de `maintainer/backlog/` (`todo/`, `done/`,
  `ticket-template.md`, un ticket par fichier) et renvoi dans le périmètre du skill
  `maintenance`.
- 2026-10-21, session parallèle : projet factice généré (`README.md`, `coulisses.md`, journal)
  à partir de `GENERER.md`. Tests par sous-agents en trois passes : fuite OK, simulation OK
  (réserves mineures corrigées), couverture OK ; cohérence OK après correction de deux derniers
  points.
- 2026-10-21, session 4 :
  - Libellé « Question pour toi » : règle de `CLAUDE.md`, plus une préférence de l'apprenant.
  - Création d'`auto-improve` (règles d'écriture du cadre : ne pas justifier une règle sauf
    nécessité), puis fusion dans `maintenance`.
  - `CLAUDE.md`, skills et fichiers communs rendus génériques (« l'apprenant », trigramme dans
    `learner/apprenant.md`).
  - Séparation des dossiers : `learner/` (propre à l'apprenant), `course/` (commun),
    `maintainer/` (ce fichier). Dossiers renommés en anglais : `learner/cards/` (fiches),
    `learner/examples/`, `learner/archive/real-project/`, `course/templates/`,
    `course/mock-project/`. `projet-factice/journal.md` devient `learner/journal-tp.md`.
  - `conclure-session` scindé : `update-memory` (mémoire aux points de sauvegarde, contrôle de
    reprise sans sous-agent) et `maintenance` (diagnostic, propositions, application, test par
    sous-agent ; invocable seulement par `/maintenance`). Propositions en attente et journal du
    cadre déplacés ici ; l'apprenant ne tranche plus les changements du cadre.
  - Option écartée pour l'instant : un modèle de `parcours.md` pour un nouvel apprenant.
- 2026-10-21, session 4 (suite) : faits du fil rouge écrits au point de sauvegarde ; fiche créée
  au premier sous-concept validé, complétée aux suivants (statut `en cours` ou `validé`) ;
  dossier de traces nommé d'après le titre du concept dans `learner/parcours.md`, la fiche
  reprend ce slug. Pas de test par sous-agent : à surveiller à la prochaine session.
