# ADR-060 : Le prof nomme chaque acteur du fil rouge avec son rôle entre parenthèses

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-076e

## Contexte
Au test du cours du 2026-10-26, Étienne a reçu son rôle à la présentation du domaine 1, puis
plus du tout (« on présente à Étienne des diapositives », repris de la banque de 0a2) :
l'apprenant, qui découvre les acteurs, ne pouvait pas les situer.

## Décision
`CLAUDE.md`, « La boucle du cours », puce du fil rouge : pendant le domaine 1, chaque acteur se
nomme avec son rôle entre parenthèses à chaque message où il apparaît ; ensuite, à sa première
mention dans un concept.

## Options écartées
- Écrire le rôle dans chaque banque d'exemples : les lots suivants réintroduiraient l'oubli.
- Limiter la règle au domaine 1, comme le demandait le mainteneur : un acteur réapparaît loin de
  sa dernière mention ; le mainteneur a validé l'extension à la première mention dans un
  concept.

## Conséquences
Les messages du domaine 1 sont un peu plus longs ; la limite de 15 lignes reste.
