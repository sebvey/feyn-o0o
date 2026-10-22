# ADR-015 : Un gros ticket se découpe en sous-tickets lettrés, par tranche verticale

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : aucun (demande du mainteneur, appliquée à T-018)

## Contexte
T-018 (réécriture du cours) décrit sept phases et plusieurs lots de concepts dans un seul
fichier : impossible de savoir où on en est.

## Décision
`maintainer/backlog/ticket-template.md` : un ticket trop gros se découpe en sous-tickets
suffixés d'une lettre (`T-018a`, `T-018b`), dans l'ordre de création. Chaque sous-ticket porte
`Parent` et `Dépend de` (sa seule dépendance directe) ; le parent liste ses sous-tickets et leur
état. Pour T-018, le découpage est vertical : un cadrage (T-018a), puis un sous-ticket par lot de
concepts, chacun de bout en bout (sources, rédaction, revues, validation), puis un sous-ticket
final de cohérence et de tests.

## Options écartées
- Découper par phase (un ticket pour les sources de tous les concepts, puis la rédaction…) :
  découpage horizontal, aucun concept utilisable avant la fin.
- Des numéros nouveaux (`T-021`…) avec une ligne « Parent » : l'appartenance ne se voit pas au
  nom du fichier.
- Lister toutes les dépendances de chaque sous-ticket : la chaîne des dépendances directes
  suffit et reste à jour plus facilement.

## Conséquences
Les sous-tickets de lots ne sont créés qu'à la fin du cadrage, qui fixe les lots.
