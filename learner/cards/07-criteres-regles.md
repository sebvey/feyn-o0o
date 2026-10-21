---
concept: 7
titre: Critères d'acceptation et règles métier
statut: validé
date: 2026-10-21
---

# Critères d'acceptation et règles métier

## L'essentiel
Un **critère d'acceptation** est une condition vérifiable, propre à une story, qui dit quand elle
est faite : c'est lui qui rend la story testable (le T d'INVEST). Une **règle métier** est une
vérité du domaine, valable hors de la story et réutilisable par d'autres. Les critères sont
souvent des exemples qui illustrent une règle.

## Consensus et choix d'école
- **Consensus** : une story porte des critères d'acceptation.
- **Choix d'école** : la forme Given/When/Then (Étant donné / Quand / Alors), issue du BDD (Dan
  North), outillée par Gherkin ; écrire les règles par des exemples (Specification by Example,
  Gojko Adzic).

## Sur un exemple
<À réécrire avec un exemple générique ; ceux du projet réel sont archivés dans
`learner/archive/real-project/fiches-exemples.md`.>

## Dans le TP
<Rempli pendant le TP.>

## Pièges
- Un mot flou dans un critère (« chaque jour », « à 8h00 ») : le testeur doit encore poser une
  question. Écrire « au plus tard à 8h00 », dire la fraîcheur des données.
- Changer plusieurs variables dans un même exemple : on ne sait plus quelle règle on teste.
  Garder l'OF mal renseigné et ne changer que l'usine.
- Décider seul d'une règle qui a un coût (week-ends et fériés) : c'est au PO de trancher.

## Le test rapide
Règle : « est-ce encore vrai si cette story n'existe pas ? ». Critère : « un testeur peut-il dire
OK ou KO sans me poser de question ? ».

## Visuel suggéré
Deux colonnes : à gauche les règles métier (cartes bleues), à droite les exemples
Given/When/Then (cartes vertes), reliés par des flèches de la règle à l'exemple qui l'illustre.
