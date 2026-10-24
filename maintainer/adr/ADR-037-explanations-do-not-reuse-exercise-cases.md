# ADR-037 : Les sections qui expliquent n'emploient pas le cas ni le verdict d'un exercice

- **Date** : 2026-10-24
- **Statut** : accepté
- **Ticket** : T-050a

## Contexte
Les fiches de concept mêlent deux publics : l'agent (la banque d'exemples) et le lecteur du site
public (L'essentiel, Pièges, Schéma, Explication). L'audit des 20 fiches a relevé environ 125
passages hors banque qui reprenaient la situation d'une Question de la banque ou énonçaient son
verdict, surtout dans Pièges et Schéma. Le site avait dû en généraliser une quarantaine, et ses
pages racontaient d'autres exemples que les fiches. Expliquer avec le cas qu'on teste ensuite
fait aussi mesurer la mémoire plutôt que la compréhension.

## Décision
Les sections qui expliquent énoncent les principes en termes généraux ; elles n'emploient ni la
situation d'une Question de la banque ni le verdict qu'elle appelle sur ce cas. Leurs exemples
sont des cas génériques du fil rouge ou des cas inventés, dits tels. Exception : un exemple
résolu qui reprend un cas déjà enseigné, pour que la Question porte sur une autre partie du même
cas. Écrit dans `course/templates/concept.md`, et repris dans `.claude/workflows/course-lot.js`
(consigne de rédaction, point de revue de forme).

Le site n'a pas à protéger les réponses d'exercice : c'est une projection du cours, qui ne
publie pas la banque (T-050).

## Options écartées
- Règle stricte, sans exception : elle interdit l'exemple résolu de 9b2 (le morceau a résolu, la
  Question sur c), qui est un procédé voulu.
- Ne rien changer au cours et laisser le site généraliser seul : le site et le cours racontent
  alors deux exemples, et un réalignement depuis le cours fait revenir la fuite.
- Interdire aussi les principes que la Question fait trouver : le site ne pourrait plus
  enseigner 9a2, 14c ou 16a2.

## Conséquences
Chaque lot de concepts est relu sur ce point. Une ligne de `course/sources/` qui décrit un
passage généralisé doit suivre ce passage (T-051 reprend les écarts existants).
