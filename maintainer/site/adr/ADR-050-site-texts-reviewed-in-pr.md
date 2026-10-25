# ADR-050 : Un texte public propre au site s'écrit d'abord, puis se juge sur l'aperçu dans la PR

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-073

## Contexte
`maintainer/site/procedure.md` demandait de proposer mot pour mot au mainteneur tout texte
public propre au site (accueil, À propos, chapeau de page) et d'attendre sa validation avant de
l'écrire. Pendant T-071b et T-072 (2026-10-25), le mainteneur a levé cette règle : l'agent a
écrit les textes (accueil, chapeau de `/domaines/`, accroches des tuiles), les a listés dans la
PR, et le mainteneur les a jugés sur l'aperçu local, en quatre séries de remarques traitées sur
la branche. Un texte se juge mieux sur la page rendue qu'en chat.

## Décision
Un texte public propre au site, accroches comprises, s'écrit sans validation préalable ; il est
listé mot pour mot dans la PR, le mainteneur le juge sur l'aperçu local laissé ouvert, et ses
remarques se traitent sur la branche. Écrit dans « Avant de changer » de
`maintainer/site/procedure.md`.

## Options écartées
- Proposer le texte en chat et attendre la validation avant de l'écrire (ancienne règle) : le
  texte se juge hors de sa page, et le traitement s'arrête sur chaque texte.

## Conséquences
L'aperçu local reste ouvert jusqu'à la fin de la relecture. Un texte public non relu ne doit pas
partir en ligne : il ne se publie qu'après le merge de la PR.
