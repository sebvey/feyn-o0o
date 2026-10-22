# ADR-025 : Le mainteneur-agent enrichit le glossaire en autonomie

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-032

## Contexte
Le skill `maintenance` faisait valider par le mainteneur tout changement de `course/`, même une
coquille, et ADR-020 faisait arbitrer les besoins de glossaire d'un lot par le coordinateur puis
par le mainteneur. À T-018d, le test du lot a relevé que « Acteur », terme central du concept 6,
manquait au glossaire : le coordinateur ne l'a pas ajouté et l'a soumis au mainteneur, qui a
jugé que le glossaire ne demandait pas sa validation.

## Décision
Skill `maintenance`, « Périmètre » : exception pour `course/glossary.md`. L'agent ajoute un
terme que le cours emploie, ou précise une définition sans en changer le sens, en autonomie, et
le signale dans la PR ; retirer un terme ou en changer le sens se propose. Remplace, pour le
glossaire, l'arbitrage par le mainteneur prévu par ADR-020 ; le workflow `course-lot` ne
modifie toujours pas le glossaire (le coordinateur le fait).

## Options écartées
- Tout faire valider par le mainteneur (règle précédente) : un aller-retour pour chaque terme
  manquant, alors que la PR du lot le montre déjà à la relecture.
- Étendre l'autonomie au fil rouge et au plan : ce sont des faits métier et la structure du
  cours ; une erreur s'y propage dans les exemples et la progression.

## Conséquences
Un sens changé sans le dire passerait pour une précision : la relecture de la PR doit regarder
les lignes modifiées du glossaire.
