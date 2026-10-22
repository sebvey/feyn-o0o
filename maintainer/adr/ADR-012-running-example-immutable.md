# ADR-012 : Le prof ne modifie pas le fil rouge ; un fait improvisé va dans le support d'amélioration

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-019

## Contexte
Le prof ajoutait au fil rouge (`course/fil-rouge-velos.md`) les faits métier qu'il fixait en
cours. Depuis T-017, `course/` est commun à tous les apprenants et tenu par le mainteneur : un
fait ajouté au fil d'une session devenait du cours sans relecture.

## Décision
`CLAUDE.md` : le prof prend acteurs, sources et faits dans le fil rouge et ne le modifie jamais.
S'il ne suffit pas, il improvise ce qu'il lui faut, rattaché au produit et à l'équipe, sans
contredire le fichier, et le note aussitôt dans `maintainer/improvements/` (type `fil rouge`).
Le mainteneur décide de l'intégrer. Complète ADR-009 (le prof part des acteurs du fichier avant
d'en créer).

## Options écartées
- Laisser le prof écrire les faits fixés dans le fil rouge (règle précédente) : le cours commun
  change sans relecture.
- Reporter aussi le fait improvisé côté apprenant (`learner/parcours.md`), pour qu'il reste
  cohérent d'une session à l'autre : écarté par le mainteneur ; le support d'amélioration sert à
  améliorer le cours localement, à industrialiser si le dépôt accueille plusieurs cours ou
  apprenants.

## Conséquences
Un fait improvisé en session N n'est pas connu du prof en session N+1 tant que le mainteneur ne
l'a pas intégré : le prof peut en improviser un autre pour le même apprenant.
