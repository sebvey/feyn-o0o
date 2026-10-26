# ADR-066 : Une question de la banque qui teste plusieurs points s'écrit en parties dans le fichier du concept

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-088

## Contexte
Depuis ADR-058 et ADR-065, une question qui teste plusieurs points se pose en plusieurs temps,
mais c'est le prof qui le juge en session : seul le cas « La question de niveau » du concept 0
était écrit en parties. Un audit des 122 questions de la banque en a relevé 16 doubles et 7
limites, aucune au format.

## Décision
- `course/templates/concept.md`, champ Question : une question qui teste plusieurs points
  s'écrit « **Question**, en deux parties : « … », puis « … » », la réponse attendue en parties
  numérotées, les erreurs fréquentes préfixées « Partie 1, » / « Partie 2, ».
- `.claude/workflows/course-lot.js`, revue « forme » : le critère « une question qui teste
  plusieurs points est écrite en parties, selon le modèle de fichier de concept ».
- Le cours est mis au format : 18 questions en parties, 2 réduites à une question.

Complète ADR-058 et ADR-065 : la pose en plusieurs temps part du fichier, plus du jugement du
prof.

## Options écartées
- Laisser le prof repérer les questions doubles en session (pratique d'avant) : il en pose
  d'un bloc sans le voir, et la relance d'une partie oubliée consomme le compte des relances.
- Un workflow de contrôle permanent : l'audit ne sert qu'une fois, la revue de `course-lot`
  empêche les nouveaux cas.

## Conséquences
Les lots suivants écrivent leurs questions doubles au format. Un cas en parties gagne un
message ; la correction de la première partie ne doit pas dévoiler la seconde.
