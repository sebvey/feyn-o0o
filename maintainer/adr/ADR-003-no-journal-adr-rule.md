# ADR-003 : Plus de journal du cadre ; les tickets clos disent quoi, les ADR disent pourquoi

- **Date** : 2026-10-21
- **Statut** : accepté
- **Ticket** : T-010

## Contexte
Le journal de `maintainer/maintenance.md` doublait `02-done/` (chaque ticket clos y était écrit
deux fois) et obligeait à de l'archéologie pour retrouver une raison. Le dépôt est sous git
depuis le 2026-10-21. En maintenance, les propositions se font en interactif : la section
« Propositions en attente » ne servait plus qu'aux demandes d'un apprenant.

## Décision
`maintainer/maintenance.md` est supprimé. Ce qui a été fait : les tickets de `02-done/` et git.
Pourquoi : un ADR dans `maintainer/adr/`, seulement si la décision passe les trois questions du
skill `maintenance` (§5). Les demandes d'un apprenant et les corrections de `coulisses.md` par
`update-memory` deviennent des tickets dans `00-proposed/`.

## Options écartées
- Garder le journal : doublon avec `02-done/` et git.
- Un ADR par ticket : la plupart des tickets sont des formulations ; trop d'ADR à lire.

## Conséquences
Une proposition refusée n'est gardée que si son refus passe la règle ADR : une idée refusée sans
ADR peut être reproposée.
