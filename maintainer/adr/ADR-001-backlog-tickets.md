# ADR-001 : Les améliorations du cadre sont des tickets, un fichier chacun, en trois dossiers d'état

- **Date** : 2026-10-21
- **Statut** : complété par ADR-019
- **Ticket** : aucun (créé avant le backlog)

## Contexte
Les améliorations à faire n'avaient pas de place : seules existaient les « Propositions en
attente » et le journal de `maintainer/maintenance.md`. Le mainteneur voulait les noter au fil de
l'eau et les traiter une par une.

## Décision
`maintainer/backlog/` : un ticket par fichier (`T-000-<slug>.md`, numéro jamais réutilisé), selon
`ticket-template.md`, dans `00-proposed/` (à trier, y compris les demandes d'un apprenant),
`01-todo/` (décidé), `02-done/` (appliqué, avec une ligne « Fait le »).

## Options écartées
- Un seul fichier avec des sections « À faire » et « Fait » : première version, remplacée à la
  demande du mainteneur ; un fichier par ticket se déplace d'un état à l'autre sans réécrire une
  liste.
- Un outil de tickets externe : trop lourd pour un dépôt tenu par une personne ; à revoir si le
  projet prend de l'ampleur.

## Conséquences
Le numéro se calcule en parcourant les trois dossiers. Le mécanisme des demandes d'apprenant est
minimal (un ticket dans `00-proposed/`), à revoir s'il y a plusieurs apprenants.
