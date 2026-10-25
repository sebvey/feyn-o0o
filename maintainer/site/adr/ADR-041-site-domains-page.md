# ADR-041 : Le site n'a qu'une entrée par domaines, sans parcours de lecture à part

- **Date** : 2026-10-25
- **Statut** : complété par ADR-042 et ADR-049
- **Ticket** : T-057b

## Contexte
Sur l'aperçu `v0.1.0`, les parcours de lecture apparaissaient à trois endroits (accueil, page
Lectures, page Parcours avec un filtre par objectif), le mot « parcours » désignait deux choses,
et sept des neuf parcours recoupaient un objectif. Le mainteneur a demandé quelque chose de non
redondant, d'explicite et sans chevauchement. Le cours est passé aux domaines (ADR-039).

## Décision
Une seule page **Domaines** porte la carte du cours et, pour chaque domaine, sa lecture rapide
(au moins une section par concept du domaine, aucune d'un autre domaine). L'accueil n'a que deux
portes (commencer par le concept 0, voir les domaines). La page de concept donne son domaine.
`/parcours/` et `/lectures/` redirigent. Écrit dans `maintainer/site/structure.md` et le README
du site.

## Options écartées
- Une page Lectures à part, par situation : elle refaisait une liste à côté de la carte.
- Un filtre par objectif sur la carte : il doublait la liste des objectifs, qui n'existent plus.
- Renommer seulement les pages : la redondance restait.

## Conséquences
Une nouvelle lecture se rattache à un domaine, ou aux annexes ; une situation transversale n'a
plus de page propre. Les lectures restent du contenu propre au site (la forme), les domaines
viennent du cours.
