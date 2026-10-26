# ADR-055 : Toute écriture de maintenance part d'un main propre, et un test du cours vit sur une branche test_

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-075

## Contexte
Le mainteneur teste le cours lui-même : il se met sur une branche `test_…`, lance une session
de cours, puis revient dans la conversation de maintenance demander des modifications, en
oubliant souvent de supprimer la branche de test et de repartir de `main`. Le skill ne mettait
`main` à jour qu'au démarrage d'un ticket, et y faisait commiter les fichiers de `learner/`
laissés par une session de cours, ceux d'un test compris.

## Décision
Skill `maintenance` :
- section « Partir d'un `main` propre », avant toute écriture, même en cours de conversation :
  une branche `test_…` se purge (changements jetés, retour sur `main`, branche supprimée)
  après confirmation du mainteneur ; sur la branche d'un ticket, on reste si l'écriture en
  relève ; sur `main`, on tire, et les fichiers de `learner/` d'une session de cours hors test
  se commitent. Le §1 et le §3, étape 1, y renvoient.
- section « Préparer un test du cours », déclenchée par « Prépare un test du cours » (« … depuis
  le concept N ») : branche `test_<AAMMJJ>-<HHMM>` depuis un `main` propre, `learner/` vide ou
  fictif, rien de commité.

## Options écartées
- Purger la branche de test sans demander : le mainteneur veut une confirmation, une branche de
  test peut porter quelque chose à garder.
- Ne vérifier la branche qu'au démarrage d'un ticket (ancienne règle) : un ticket créé ou trié
  en cours de conversation partait de la branche de test.
- Commiter sur `main` les fichiers de `learner/` d'un test : ils ne sont pas le suivi d'un
  apprenant.

## Conséquences
Une question de plus avant la première écriture qui suit un test.
