---
concept: 4
titre: La user story
statut: validé
date: 2026-10-20
---

# La user story

## L'essentiel
Une user story exprime **un besoin précis** d'un utilisateur, pas son parcours entier :
**En tant que** (qui) **je veux** (quoi, vu de l'utilisateur, sans solution imposée) **afin de**
(pourquoi : la valeur). Le « afin de » permet au PO de prioriser et à l'équipe de proposer une
solution plus simple qui sert le même but.

## Consensus et choix d'école
- **Choix d'école devenu quasi standard** : le format « en tant que / je veux / afin de »,
  popularisé vers 2001 chez Connextra.
- **Consensus** (Ron Jeffries, les « 3C ») : une story est une **Carte** (la phrase), une
  **Conversation** (les échanges qui la précisent) et une **Confirmation** (les critères
  d'acceptation). La phrase seule ne suffit jamais.

## Sur un exemple
<À réécrire avec un exemple générique ; ceux du projet réel sont archivés dans
`learner/archive/real-project/fiches-exemples.md`.>

## Pièges
- Acteur technique (« en tant que data engineer ») : ce n'est pas un utilisateur.
- Solution dans le « je veux » (« le dashboard me fournit une liste ») : laisse l'équipe choisir
  (un e-mail quotidien ferait peut-être mieux).
- « Afin de » circulaire (« identifier les problèmes ») ou de confort (« supprimer la
  crispation ») : demande « et pourquoi ? » jusqu'à un enjeu qu'un responsable métier
  reconnaîtrait.
- Chiffre précis dans la phrase (« moins de 2 secondes ») : il va dans les critères
  d'acceptation.
- Contradiction interne (« temps réel » et « 7 derniers jours »).

## Le test rapide
Lis le « afin de » à voix haute à un responsable métier : dit-il « ah oui, ça compte » ?

## Visuel suggéré
La phrase en trois blocs colorés (qui / quoi / pourquoi), le troisième mis en avant, avec une
échelle « pourquoi ? pourquoi ? pourquoi ? » qui remonte de « identifier les problèmes » à
« corriger au fil de l'eau plutôt qu'à la clôture ».
