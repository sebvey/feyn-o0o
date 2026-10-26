# ADR-074 : Pas de sous-agent de test pour un changement trivial

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-097

## Contexte
`maintenance` (§5) imposait un sous-agent de test après tout changement qui modifie une
procédure. Pour T-095 (2026-10-26), qui change un mot dans une règle déjà testée, le mainteneur a
jugé le test inutile : il coûte quelques minutes et des tokens pour vérifier ce que la relecture
du diff montre aussi bien.

## Décision
`maintenance`, §5 : pas de sous-agent pour un changement trivial, qui n'ajoute, ne retire ni ne
réordonne aucune étape, condition, lecture ou écriture de l'agent (un mot précisé, une règle
étendue à un cas voisin, un renvoi corrigé). La PR le dit sous les tests, avec sa raison ; le
mainteneur peut demander le test. `course-taught-check` reste dû après tout changement de ce
qu'un concept enseigne.

## Options écartées
- Tester tout changement de procédure (règle précédente) : ralentit le développement sans rien
  apprendre de plus que la relecture du diff.
- Dispenser aussi de `course-taught-check` : un mot changé dans une explication peut suffire à
  créer un cas qui demande ce que l'apprenant n'a pas reçu.

## Conséquences
L'agent juge lui-même qu'un changement est trivial ; le mainteneur le voit dans la PR et peut
demander le test. Un changement qui ajoute une condition, même courte, reste testé.
