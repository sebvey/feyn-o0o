# ADR-019 : Un ticket se traite sur sa branche et se valide par une PR, avec un état `02-wip/`

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : aucun (demande du mainteneur, hors ticket)

## Contexte
ADR-001 range les tickets en trois dossiers d'état (`00-proposed/`, `01-todo/`, `02-done/`).
Les tickets se traitaient sur une branche fusionnée en local dans `main`, sans revue
formalisée ni état « en cours ». Le dépôt a désormais un remote GitHub public, et des sessions
parallèles (worktrees) peuvent partir de `main` : rien n'y signalait un ticket déjà pris.

## Décision
Skill `maintenance`, §3, et `maintainer/backlog/ticket-template.md` : quatre dossiers d'état,
`00-proposed/`, `01-todo/`, `02-wip/` (en cours, sa branche existe), `03-done/`. Pour traiter
un ticket : `main` à jour depuis le remote ; passage en `02-wip/` commité et poussé directement
sur `main` (seuls commits directs avec les fichiers des sessions de cours et le backlog trié
hors ticket) ; branche `ticket/<nom du fichier du ticket>` ; travail, test et clôture (`03-done/`, « Fait le », ADR) sur la branche ; PR vers `main`, relue et mergée par le
mainteneur, en commit de merge. Un travail hors ticket suit le même circuit sur `maint/<slug>`.

## Options écartées
- Passage en `02-wip/` sur la branche, avec une PR brouillon : `main` ne voit jamais le ticket en
  cours, et le dossier y reste vide.
- Merge local sans PR (pratique précédente) : pas de support de revue du diff.
- Squash au merge : perd le détail des commits et rompt avec l'historique en commits de merge.

## Conséquences
La clôture se fait avant la revue : si la revue rouvre le travail, les corrections restent sur
la branche, ticket déjà dans `03-done/`. La PR est ouverte sous le compte du mainteneur : il ne
peut pas l'approuver sur GitHub, la revue passe par les commentaires. `02-wip/` garde un
`.gitkeep`, git ne suivant pas les dossiers vides.
