# ADR-007 : La mémoire de l'apprenant et le cadre sont tenus par deux skills ; l'apprenant ne tranche pas le cadre

- **Date** : 2026-10-21 (session 4 du cours ; raison reconstituée a posteriori)
- **Statut** : complété par ADR-010
- **Ticket** : aucun (avant le backlog)

## Contexte
Un seul skill, `conclure-session`, mettait à jour la mémoire et proposait des changements du
cadre, que l'apprenant tranchait en fin de session.

## Décision
Deux skills : `update-memory` (mémoire de l'apprenant aux points de sauvegarde, en autonomie) et
`maintenance` (changements du cadre, validés par le mainteneur seul). L'apprenant peut demander
un changement de forme ; il ne le décide pas.

## Options écartées
- Garder un skill unique tranché par l'apprenant : l'apprenant devait juger le cadre au lieu
  d'apprendre.

## Conséquences
Les demandes de l'apprenant attendent une session de maintenance (ticket dans `00-proposed/`).
La raison ci-dessus est déduite des changements notés au journal de l'époque, pas écrite par le
mainteneur.
