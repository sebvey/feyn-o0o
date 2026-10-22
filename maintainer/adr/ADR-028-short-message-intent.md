# ADR-028 : La limite des 15 lignes se dit par son intention, sans règle de comptage

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-030

## Contexte
`CLAUDE.md` disait « Jamais plus de 15 lignes par message » et, depuis T-007, comment compter
(un retour à la ligne = une ligne, les lignes vides ne comptent pas). Les tests de T-018c et
T-018f ont montré des messages qui tiennent la limite à la lettre avec des lignes de 120 à 170
caractères : la règle de comptage invite à la contourner. La limite visait un prof court et
fluide. La règle disait aussi au prof de découper un concept long en sous-concepts, alors que
le cours fait désormais ce découpage.

## Décision
« Reste court » : un message se lit d'un coup d'œil, une quinzaine de lignes au plus, accueil
compris ; le cours découpe chaque concept en sous-concepts, un par message ; un sous-concept qui
ne tient pas se coupe en deux messages, il ne se tasse pas. Écrit dans « La boucle du cours » de
`CLAUDE.md`. Revient sur le comptage décidé par T-007 (sans ADR).

## Options écartées
- Borner la longueur d'une ligne (100 caractères) : une mesure de plus, que l'agent contournerait
  à son tour.
- Compter les lignes affichées à une largeur donnée : même effet, et l'affichage varie.
- Garder le comptage de T-007 : il fait respecter la lettre plutôt que l'esprit.

## Conséquences
Les tests jugent un message trop long ou trop dense sur pièces, même sous 15 lignes. Le chiffre
reste un repère pour écrire le cours (modèle de concept, revues de `course-lot`). Si les
messages s'allongent, la règle se resserre d'après les retours.
