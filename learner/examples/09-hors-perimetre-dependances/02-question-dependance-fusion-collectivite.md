---
concept: 9
type: question
date: 2026-10-21
session: 6
domaine: velos
---

# Dépendance entre deux stories de la collectivité : fusionner pour la supprimer ?

## Énoncé
Sous-concept 9b. Une story dépend d'une autre quand elle ne peut pas être livrée, ou n'a pas de
sens, avant elle. Le I d'INVEST demande de les réduire ; certaines sont naturelles : on les rend
visibles et on ordonne le backlog. Consensus : réduire et rendre visible. Choix d'école : la
façon de les noter (lien « dépend de » dans l'outil, tableau des dépendances de SAFe).

Exemple, la collectivité qui finance le service :
- A : « En tant que chargée de mission mobilité, je veux voir le nombre de locations par
  quartier sur le mois, afin de justifier la subvention au conseil. »
- B : « … je veux comparer ce mois au même mois de l'an dernier, afin de montrer l'évolution. »
B dépend de A ; A a de la valeur seule, B l'enrichit.

Question : un développeur propose de fusionner A et B en une seule story « pour supprimer la
dépendance ». Bonne idée ou pas, et pourquoi ?

Réponse attendue : plutôt non. La fusion grossit la story (S d'INVEST) et retarde la valeur de
A, livrable seule. La dépendance A puis B est saine : il suffit d'ordonner (A avant B). Une
dépendance pose problème quand aucune des deux stories n'a de valeur seule (découpage
horizontal, concept 8) : là, on redécoupe. Fusionner se défend si les deux sont minuscules.

## Réponse de l'apprenant
Session 7 (2026-10-22) : « non, le plus petit est une US, le mieux c'est tant que l'US est
pertinente, avec une valeur en soit ».

## Verdict
Validé. Juste : garder la plus petite story qui a une valeur seule (S et V d'INVEST). Complété
par le prof : la dépendance A puis B se gère en ordonnant le backlog ; elle pose problème quand
aucune des deux n'a de valeur seule (découpage horizontal) : là, on redécoupe.

## Pour améliorer le cours
