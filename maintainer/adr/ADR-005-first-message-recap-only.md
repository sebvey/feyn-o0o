# ADR-005 : Le premier message d'une session s'arrête au rappel

- **Date** : 2026-10-21
- **Statut** : accepté
- **Ticket** : T-005

## Contexte
Sur « on reprend », un agent a enchaîné le rappel et le sous-concept suivant dans le même message :
près de 15 lignes, et deux sujets dans un message.

## Décision
`CLAUDE.md`, étape 3 du démarrage : le premier message rappelle où on en est et propose de
revenir sur un point, puis s'arrête, quel que soit le mot d'ouverture. Le concept vient au
message suivant.

## Options écartées
- Enchaîner le concept quand l'apprenant ouvre par « on continue » : un aller-retour de moins,
  mais un premier message trop long et deux sujets dans un message.

## Conséquences
L'apprenant qui ouvre par « on continue » se voit proposer de revenir sur un point avant de
continuer.
