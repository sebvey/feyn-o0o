# Modèle de fiche

Une fiche par concept, dans `learner/cards/`, nommée `NN-slug.md` comme son dossier de traces dans
`learner/examples/` (annexes : `A<n>-slug.md`). Toutes les fiches
suivent **exactement** cette structure : en fin de parcours, elles seront consolidées en une page
web très visuelle (chantier mené avec l'apprenant, voir `CLAUDE.md`), et une structure identique rend
cette consolidation mécanique.

Rédige la fiche pour l'apprenant, pas pour l'agent : c'est son support de révision. Courte (une page
au plus), avec ses propres exemples et ses propres erreurs.

```markdown
---
concept: <numéro>
titre: <titre court>
statut: <en cours | validé>
date: <AAAA-MM-JJ>
---

# <Titre>

## L'essentiel
<3 à 5 lignes. La définition et pourquoi ça compte.>

## Consensus et choix d'école
- **Consensus** : <ce qui est admis, avec la source (Scrum Guide, XP…)>
- **Choix d'école** : <ce qui se discute entre praticiens>

## Sur un exemple
<Un ou deux exemples, de préférence produits par l'apprenant (cours, TP, révision).>

## Pièges
<Les erreurs typiques, en priorité celles que l'apprenant a faites, et comment les repérer.>

## Le test rapide
<Une question ou un critère pour vérifier en 10 secondes qu'on applique bien le concept.>

## Visuel suggéré
<Une idée de schéma pour la page web finale : forme, éléments, légende.>
```
