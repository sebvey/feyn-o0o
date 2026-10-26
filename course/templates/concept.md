# Modèle de fichier de concept

Un fichier par concept dans `course/concepts/`, nommé `NN-slug.md` (annexes : `A<n>-slug.md`),
dans l'ordre de `course/plan.md`. Écrit pour le public cible du cours (`course/plan.md`) et lu
par le prof, qui enseigne à partir de lui. Rien de propre à un apprenant : ni prénom, ni
réponse, ni verdict. Les exemples prennent les acteurs et les faits de
`course/fil-rouge-velos.md`, et les termes de `course/glossary.md`.

Les sections qui expliquent (L'essentiel, Consensus et choix d'école, Sous-concepts, Pièges, Le
test rapide, Schéma, et le champ Explication de chaque exemple) énoncent les principes en termes
généraux. Elles n'emploient ni la situation d'une Question de la banque (ses acteurs et les
faits du fil rouge qu'elle met en jeu), ni le verdict que cette Question appelle sur ce cas :
leurs exemples sont des cas génériques du fil rouge, ou des cas inventés, signalés comme tels.
Exception : un exemple résolu qui reprend un cas déjà enseigné, pour que la Question porte sur
une autre partie du même cas. Les champs Situation, Question, Réponse attendue, Erreurs
fréquentes et Ce qui marche, et l'intro de la banque, restent réservés à l'agent.

Le fichier ne cite aucune référence : la source de chacune de ses affirmations est dans
`course/sources/`, sous le même nom, selon `course/templates/sources.md`. Un consensus nomme
son texte (le Scrum Guide), un choix d'école son auteur.

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
- **Consensus** : <ce qui est admis, et par qui (ex. le Scrum Guide)>
- **Choix d'école** : <ce qui se discute entre praticiens, attribué>
- **Choix du cours** : <la position propre au cours, sans source externe, à présenter comme telle>

## Sous-concepts
<Liste ordonnée (Na, Nb…), chacun tenable en un message de 15 lignes avec sa question.>

## Banque d'exemples
### <Titre de l'exemple> (<sous-concept>)
- **Explication** : <ce que le prof dit avant l'exemple, si besoin>
- **Situation** : <acteurs et faits du fil rouge>
- **Question** : <la question qui teste la compréhension ; si elle teste plusieurs points
  distincts : « **Question**, en deux parties : « … », puis « … » », et la réponse attendue et
  les erreurs fréquentes réparties entre les parties>
- **Réponse attendue** : <la réponse juste, avec ses nuances>
- **Erreurs fréquentes** : <ce que répond souvent l'apprenant, et comment le corriger ; pour
  une réponse fausse, sa relance (« Relancer : <question ciblée> ») ou, sans relance,
  « réexpliquer » ; une question de « Ce qui marche » n'est une relance que si l'erreur y renvoie>
- **Ce qui marche** : <formulation ou relance qui a fait déclic>

## Pièges
<Les erreurs typiques du public cible, et comment les repérer.>

## Le test rapide
<Une question ou un critère pour vérifier en 10 secondes qu'on applique bien le concept.>

## Schéma
<Une idée de schéma : forme, éléments, légende. Sert au cours et à la future page web.>

```
