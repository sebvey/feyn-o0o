---
concept: 7
titre: Critères d'acceptation et règles métier
---

# Critères d'acceptation et règles métier

> Contenu migré tel quel depuis les fiches de sve (T-017), à réécrire pour le public cible
> selon `course/templates/concept.md` (T-018).

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
Vélos en libre-service : un tiers des abonnés n'a pas l'appli, seulement un téléphone basique.
> En tant qu'abonné, je veux savoir avant de partir s'il reste un vélo à ma station, afin de ne
> pas me déplacer pour rien.

**Règles métier** (vraies même sans cette story) :
- R1 : un vélo disponible est un vélo à quai et louable.
- R2 : la station d'un abonné est celle qu'il a choisie comme favorite.

**Critères d'acceptation** (propres à la story, une seule variable change de l'un à l'autre) :
> Given Julie n'a qu'un téléphone basique, sans l'appli, et sa station favorite compte 4 vélos
> disponibles,
> When elle demande la disponibilité de sa station avant de partir,
> Then elle obtient « 4 », à jour de moins de 15 minutes.

> Given Julie n'a qu'un téléphone basique, sans l'appli, et n'a pas choisi de station favorite,
> When elle demande la disponibilité de sa station avant de partir,
> Then on lui demande de choisir sa station favorite.

Aucun canal n'est nommé (SMS, serveur vocal) : le critère porte la contrainte (téléphone
basique), l'équipe choisit la solution (le N d'INVEST).

## Pièges
- Un mot flou dans un critère (« chaque jour », « à 8h00 ») : le testeur doit encore poser une
  question. Écrire « au plus tard à 8h00 », dire la fraîcheur des données.
- Changer plusieurs variables dans un même exemple : on ne sait plus quelle règle on teste.
  Garder Julie et son téléphone basique, ne changer que la station favorite.
- Nommer la solution dans le critère (« Then elle reçoit un SMS ») : on fige ce que l'équipe
  devait pouvoir négocier. Écrire ce qu'on vérifie (un nombre, sa fraîcheur).
- Un Then vague (« elle peut savoir ») : on ne sait pas quoi vérifier.
- Décider seul d'une règle qui a un coût (week-ends et fériés) : c'est au PO de trancher.

## Le test rapide
Règle : « est-ce encore vrai si cette story n'existe pas ? ». Critère : « un testeur peut-il dire
OK ou KO sans me poser de question ? ».

## Visuel suggéré
Deux colonnes : à gauche les règles métier (cartes bleues), à droite les exemples
Given/When/Then (cartes vertes), reliés par des flèches de la règle à l'exemple qui l'illustre.
