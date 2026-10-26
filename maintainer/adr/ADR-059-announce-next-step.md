# ADR-059 : Un concept validé finit par l'annonce de la suite, sans proposer l'arrêt

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-076d

## Contexte
Au test du cours, la présentation du domaine 1 finissait par « On continue (concept 0 : …) » et
« On s'arrête là (ta progression est enregistrée, tu peux fermer) », comme le voulaient ADR-011
et ADR-052. Le mainteneur trouve ces deux choix lourds : le prof doit seulement annoncer la
suite. Claude Code n'est qu'un lieu provisoire du prof ; que l'apprenant ignore qu'un arrêt
enregistre sa progression n'est pas grave.

## Décision
`CLAUDE.md`, « Fin d'un concept ou d'un sous-concept validé » : une ligne annonce la suite,
nommée (« La suite : concept 0, Scrum en bref et l'incrément. »). La présentation d'un domaine
finit de même, en nommant le premier concept du domaine. Le paragraphe « Arrêt » ne change pas :
il se déclenche quand l'apprenant dit qu'on s'arrête.

## Options écartées
- Les deux choix « On continue » et « On s'arrête là » (ancienne règle, ADR-011, ADR-052) : deux
  lignes de cérémonie dans un message de 15 lignes.

## Conséquences
L'apprenant n'est plus invité à s'arrêter : l'arrêt dépend de lui.
