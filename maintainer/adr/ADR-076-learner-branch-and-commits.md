# ADR-076 : L'apprenant a sa branche `learner/<surnom>`, commitée aux points de sauvegarde

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-101

## Contexte
Le dépôt s'ouvre à des tests par d'autres consultants (v0, sans industrialisation). Un apprenant
qui clonait le dépôt faisait tout le cours sur `main`, sa progression en modifications non
commitées de `learner/` : pas d'historique, perdue par un `git restore`, et un `git pull` refusé
dès qu'un ticket recopie les modèles dans `learner/`. La branche `learner/<surnom>` n'existait
que pour le mainteneur (ADR-072), et `reset-learner` effaçait la progression sans trace.

## Décision
- `learner-onboarding` : sur `main`, à la fin de l'accueil, le prof crée `learner/<surnom>` et
  commite ; sur une autre branche (test, ticket), il commite sur place. Avant l'accueil, sur
  `main`, si une branche `learner/*` existe, il propose de la reprendre ou de repartir à neuf.
- `CLAUDE.md`, « Tenir la mémoire à jour » : commit de `learner/` à chaque point de sauvegarde
  (à l'arrêt, après la relecture de `parcours.md`), jamais de push. Si git échoue, le prof le dit
  une fois et continue sans commit.
- `reset-learner` : depuis une branche `learner/*`, retour sur `main` ; la branche reste.
- `.claude/settings.json` autorise les seules commandes git de ces règles.

Complète ADR-072 : le prof lance des commandes git, et la branche de progression n'est plus
réservée au mainteneur.

## Options écartées
- Rester sur `main` sans git, en documentant seulement : pas d'historique, pull bloqué.
- Pousser la branche : l'apprenant n'a pas les droits, et sa progression n'a pas à quitter son
  poste.
- Commiter avec une identité locale (`git -c user.name=…`) quand git n'en a pas : le dépôt est
  cloné, l'identité existe en général.
- Traiter la mise à jour du cours depuis la branche de l'apprenant : hors v0.

## Conséquences
Le premier message de l'accueil peut faire un appel git. Un clone sans git ou sans identité suit
le cours sans versionner. La mise à jour du cours (`git merge main`) reste manuelle et non
guidée, comme le passage d'une version MAJOR.
