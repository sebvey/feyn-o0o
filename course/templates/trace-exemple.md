# Traces des exemples et questions du cours

But : garder chaque exemple, question et exercice utilisé, avec la réponse de l'apprenant et le verdict,
pour améliorer le cours plus tard (ce qui a fait déclic, ce qui a coincé, ce qui était mal posé).
Elles servent aussi à ne pas refaire un exemple déjà vu.

## Structure

- `course/fil-rouge-velos.md` : le domaine fil rouge du cours et les faits déjà fixés.
- Les traces sont propres à l'apprenant : elles vont dans `learner/examples/`.
- Un dossier par concept, nommé `NN-slug/` d'après le titre du concept dans
  `learner/parcours.md` (`08-decoupage-vertical/`) ; la fiche du concept reprend ce slug. Annexes
  et apartés hors concept dans `A<n>-slug/`.
- Un fichier par exemple ou question, numéroté dans l'ordre d'usage :
  `NN-<type>-<slug>.md`, type parmi `exemple`, `question`, `exercice`, `schema`, `aparte`.
  Une question qui porte sur l'exemple du même message va dans le même fichier.

## Modèle de fichier

```markdown
---
concept: <numéro, ou A<n> pour une annexe>
type: exemple | question | exercice | schema | aparte
date: <AAAA-MM-JJ>
session: <numéro>
domaine: velos | <autre, et pourquoi>
---

# <Titre court>

## Énoncé
<Le texte tel que posé à l'apprenant, ou le résumé fidèle de l'exemple ou du schéma.>

## Réponse de l'apprenant
<Sa réponse, au plus près de ses mots. « Sans réponse » si la session a coupé.>

## Verdict
<Réussi, partiel ou raté ; ce qui était juste ; la correction donnée.>

## Pour améliorer le cours
<Ce qui a marché, ce qui a coincé, ce qui était mal posé de notre côté. Vide si rien.>
```
