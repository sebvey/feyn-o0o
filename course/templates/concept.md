# Modèle de fichier de concept

Un fichier par concept dans `course/concepts/`, nommé `NN-slug.md` (annexes : `A<n>-slug.md`),
dans l'ordre de `course/plan.md`. Écrit pour le public cible du cours (`course/plan.md`) et lu
par le prof, qui enseigne à partir de lui. Rien de propre à un apprenant : ni prénom, ni
réponse, ni verdict. Les exemples prennent les acteurs et les faits de
`course/fil-rouge-velos.md`.

```markdown
---
concept: <numéro, ou A<n> pour une annexe>
titre: <titre court>
---

# <Titre>

## Objectif
<À la fin, l'apprenant sait… (une à trois lignes).>

## L'essentiel
<3 à 5 lignes. La définition et pourquoi ça compte.>

## Consensus et choix d'école
- **Consensus** : <ce qui est admis, avec la source>
- **Choix d'école** : <ce qui se discute entre praticiens, attribué>

## Sous-concepts
<Liste ordonnée (Na, Nb…), chacun tenable en un message de 15 lignes avec sa question.>

## Banque d'exemples
### <Titre de l'exemple> (<sous-concept>)
- **Explication** : <ce que le prof dit avant l'exemple, si besoin>
- **Situation** : <acteurs et faits du fil rouge>
- **Question** : <la question qui teste la compréhension>
- **Réponse attendue** : <la réponse juste, avec ses nuances>
- **Erreurs fréquentes** : <ce que répond souvent l'apprenant, et comment le corriger>
- **Ce qui marche** : <formulation, schéma ou relance qui a fait déclic>

## Pièges
<Les erreurs typiques du public cible, et comment les repérer.>

## Le test rapide
<Une question ou un critère pour vérifier en 10 secondes qu'on applique bien le concept.>

## Schéma
<Une idée de schéma : forme, éléments, légende. Sert au cours et à la future page web.>

## Sources
<Sources primaires ou de référence citées dans le fichier.>
```
