# ADR-039 : Sept domaines contigus partitionnent le cours, à la place des objectifs

- **Date** : 2026-10-25
- **Statut** : complété par ADR-048
- **Ticket** : T-057a

## Contexte
Discussion du 2026-10-25 sur les parcours de lecture du site (T-057). Les sept objectifs de
`course/plan.md` se recouvraient (les concepts 2, 8, 11 et 14 servaient deux objectifs) et
laissaient le concept 3 sans objectif. Sur le site, ils doublaient les blocs de la carte et sept
des neuf parcours de lecture. Le mainteneur veut qu'en remplissant les ensembles on ait couvert
le cours.

## Décision
`course/plan.md`, « Domaines du cours » : sept domaines, chaque concept dans un seul, tous les
concepts couverts, dans l'ordre des prérequis (0 à 2, 3 à 8, 9 à 11, 12, 13 et 14, 15 et 16,
17). Les annexes restent hors domaines. Le mot « objectif » ne désigne plus que l'objectif
produit (concept 2) et l'objectif de sprint. Les domaines font partie des identifiants du cours
(`course/CHANGELOG.md`) : changer les concepts d'un domaine est un MAJOR. Le site s'organise
par domaines (T-057b).

## Options écartées
- Garder des objectifs transversaux qui se recouvrent : une compétence mobilise plusieurs
  concepts, mais rien ne dit alors quand le cours est couvert, et le site les doublait.
- Une partition non contiguë (11 avec 15, 16 avec 9 et 10) : plus proche des compétences, mais
  dérouler un domaine casserait l'ordre des prérequis (16 suppose 13 à 15, 11 précède 12 et 13).
- Fusionner les objectifs avec les parcours de lecture du site : le site est une projection du
  cours, sa structure ne fixe pas le fond.

## Conséquences
Un domaine regroupe des concepts voisins ; un appui sur un autre domaine s'écrit en prérequis,
pas en appartenance. Les domaines 4 et 7 n'ont qu'un concept. Le cours passe en version 2.0.0.
