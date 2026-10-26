# ADR-052 : Le prof présente un domaine dans un message à lui, avant son premier concept

- **Date** : 2026-10-26
- **Statut** : complété par ADR-059
- **Ticket** : T-071c

## Contexte
Au premier concept d'un domaine, le prof ne faisait que nommer le domaine en tête du message ;
l'apprenant y entrait sans savoir quel problème il règle ni comment ses concepts s'enchaînent.
Le cours a une fiche par domaine (ADR-048), dont le cas du fil rouge sert au cours et pas au
site (ADR-049). Le ticket proposait d'ouvrir le premier sous-concept par le nom du domaine et
deux lignes de sa fiche, et écartait un message à part (il casserait « un concept par message,
une question »). Le mainteneur a jugé que le sous-concept paierait la place : 9a1, déjà dense,
se tasserait.

## Décision
- Avant le premier concept d'un domaine (au fil, au creusage d'un domaine, au message qui suit
  le rappel de reprise), un message présente le domaine d'après sa fiche, chaque élément en une
  ou deux lignes : nom, problème, fil des concepts, ce qu'il reprend et prépare, cas qui le
  traverse, annoncé sans question ni réponse. Il n'enseigne aucun concept, ne pose pas de
  question et finit par les deux choix de fin de concept. La limite générale d'une quinzaine de
  lignes s'y applique. Écrit dans `CLAUDE.md`, « Au démarrage d'une session » et « Fin d'un
  concept ou d'un sous-concept validé ».
- À l'accueil d'un nouvel apprenant, le skill `learner-onboarding` présente le domaine 1, avec
  le fil rouge, à la place du concept 0, qui vient au message suivant.

## Options écartées
- Nommer le domaine en tête du premier concept (ancienne règle) : rien sur le problème ni le fil.
- Ouvrir le premier sous-concept par le nom et deux lignes de la fiche : la limite des quinze
  lignes ferait tasser le sous-concept.
- Présenter le cas « sans sa réponse » seulement : au test, le prof a repris les questions de la
  fiche, auxquelles l'apprenant aurait répondu, et recopié la fiche sur une vingtaine de lignes.
- Exempter le domaine 1 à l'accueil d'un nouvel apprenant : il ne serait jamais présenté.

## Conséquences
Un aller-retour de plus à l'entrée de chaque domaine, et avant la première question d'un nouvel
apprenant. Une coupure juste après la présentation la fait refaire à la reprise.
