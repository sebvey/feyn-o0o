# ADR-006 : Le dépôt sépare learner/, course/ et maintainer/

- **Date** : 2026-10-21 (session 4 du cours ; raison reconstituée a posteriori)
- **Statut** : remplacé par ADR-010
- **Ticket** : aucun (avant le backlog)

## Contexte
Le cadre, le cours et la mémoire de l'apprenant étaient mêlés et propres à un seul apprenant.

## Décision
`learner/` : tout ce qui est propre à l'apprenant (progression, observations, travaux, fiches,
traces, journal du TP). `course/` : le cours commun (fil rouge, modèles, projet factice, ancrage
PDSF). `maintainer/` : le backlog et les ADR. `CLAUDE.md`, skills et fichiers communs sont
génériques (« l'apprenant », trigramme dans `learner/apprenant.md`). Noms de dossiers en anglais.

## Options écartées
- Un modèle de `parcours.md` pour un nouvel apprenant : écarté pour l'instant (ticket dans
  `00-proposed/`).

## Conséquences
Le cours peut servir à un autre apprenant en remplaçant `learner/`. La raison ci-dessus est
déduite des changements notés au journal de l'époque, pas écrite par le mainteneur.
