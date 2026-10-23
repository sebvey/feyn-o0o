# ADR-016 : Les sources du cours sont tracées dans `course/sources/`, et le prof ne les cite pas

- **Date** : 2026-10-22
- **Statut** : complété par ADR-027 et ADR-032
- **Ticket** : T-022

## Contexte
Le mainteneur veut des sources documentées et tracées dans le cours, sans qu'elles alourdissent
l'enseignement, et un prof capable de répondre à « quelle est ta source ? ». T-018 rangeait les
sources des lots dans `maintainer/work/T-018/`, supprimé à sa clôture.

## Décision
Un fichier de sources par fichier de concept, `course/sources/NN-slug.md`, selon
`course/templates/sources.md` : chaque affirmation vérifiable, sa source, ce qui a été vérifié,
ce qui ne l'a pas été. Le fichier du concept ne cite aucune référence ; un consensus nomme son
texte (le Scrum Guide), un choix d'école son auteur. `CLAUDE.md` : le prof ne cite pas de référence et, sur demande, répond d'après
`course/sources/`, ou dit que la source manque et le note dans `maintainer/improvements/`.

## Options écartées
- Sources dans `maintainer/work/T-018/` : supprimées à la clôture de T-018, donc perdues.
- Section « Sources » dans le fichier du concept : le prof la lit à chaque concept et serait
  tenté de citer.
- Renvois `[S1]` dans le fichier du concept : même effet, et du bruit pour le prof.

## Conséquences
La revue d'exactitude des lots vérifie que chaque affirmation a sa ligne. Les fiches actuelles
n'ont pas de fichier de sources avant leur lot : le prof dit alors que la source n'est pas
documentée.
