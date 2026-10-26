# ADR-070 : La ligne « La suite : … » finit par « Des questions ? J'enchaîne ? »

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-092

## Contexte
Au test du 2026-10-26, la présentation du domaine 1 finissait par « La suite : Scrum en bref et
l'incrément. », sans question. Le mainteneur remarque que l'apprenant ne sait pas quoi
répondre. ADR-068 a supprimé les messages sans contenu en enchaînant ce qui vient ; quand le
tout ne tient pas en une quinzaine de lignes, le message s'arrête sur la ligne de la suite.

## Décision
`CLAUDE.md` : la ligne « La suite : … » qui clôt un message (fin de concept ou de sous-concept
validé, rappel de reprise, présentation d'un domaine) finit par « Des questions ? J'enchaîne ? ».
Un oui suffit à l'apprenant ; il peut aussi poser une question sur ce qui précède. Cette fin
n'est pas la question du message (« Une question par message ») ; la présentation d'un domaine
ne pose pas de question de cours.

## Options écartées
- La ligne seule (ADR-068) : l'apprenant ne sait pas qu'il doit relancer, ni comment.
- « J'enchaîne ? » seul (première version, au test du mainteneur) : n'invite pas l'apprenant à
  poser ses questions.
- La même fin quand le message enchaîne et finit par une question de cours : deux questions
  dans un message, contre « Une question par message ».

## Conséquences
Quand le message ne tient pas, l'apprenant répond « oui » : un message sans contenu, mais que la
ligne rend évident. Le surplus d'allers-retours reste limité aux messages qui ne peuvent pas
enchaîner (ADR-068).
