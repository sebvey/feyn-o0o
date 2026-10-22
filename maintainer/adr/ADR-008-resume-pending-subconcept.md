# ADR-008 : Une question en attente à la reprise fait reposer tout son sous-concept

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-015

## Contexte
Le sous-concept 9b a été posé en fin de session 6, sans réponse de l'apprenant. À la reprise, le
premier message a cité la question seule (fusionner les stories A et B de la collectivité) :
sans l'explication ni les stories, l'apprenant ne pouvait pas y répondre. Le message posait en
plus deux demandes (la réponse, et « revenir sur un point ? »).

## Décision
`CLAUDE.md`, démarrage, étape 3 : quand une question est en attente, le rappel la nomme sans la
reposer, et le message suivant reprend le sous-concept en cours depuis le début (explication,
exemple, question), à partir de l'énoncé de sa trace. ADR-005 reste valable : le premier message
reste un rappel.

## Options écartées
- Un rappel plus complet, qui résume l'explication et l'exemple : assez long pour porter
  l'énoncé, il devient le sous-concept tassé dans le premier message, contre ADR-005.

## Conséquences
L'apprenant qui se souvient du sous-concept le relit en entier (environ 10 lignes). L'énoncé de
la trace doit rester assez complet pour reposer le sous-concept sans la conversation d'origine.
