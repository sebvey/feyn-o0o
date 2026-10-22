# ADR-002 : La réponse de l'apprenant s'écrit dans la trace au moment de la correction

- **Date** : 2026-10-21
- **Statut** : remplacé par ADR-010
- **Ticket** : T-003

## Contexte
La réponse de l'apprenant n'était écrite que par `update-memory`, lancé après son choix au point
de sauvegarde. Un test par sous-agent a montré qu'une coupure entre la bonne réponse et ce choix
laissait la trace « Sans réponse » et la question en attente : l'agent suivant la reposait.

## Décision
`CLAUDE.md`, « Tenir la mémoire à jour » : quand l'apprenant répond, sa réponse et le verdict
vont dans la trace, et « Prochaine étape » est mise à jour, dans la même réponse que la
correction.

## Options écartées
- Lancer `update-memory` avant de proposer les deux choix : couvre plus large (statut, fiche,
  journal), mais écrit avant que l'apprenant ait clos le sujet ; renvoyé à T-006.
- Ne rien changer : la question réussie est reposée après une coupure.

## Conséquences
Une écriture de plus par question. Le reste de la sauvegarde (statut, fiche, journal) est encore
perdu en cas de coupure avant le choix : c'est l'objet de T-006, qui peut remettre cette décision
en cause.
