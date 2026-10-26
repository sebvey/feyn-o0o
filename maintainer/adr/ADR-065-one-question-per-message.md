# ADR-065 : Une question par message, accueil compris ; le hook signale une question d'accueil restée sans réponse

- **Date** : 2026-10-26
- **Statut** : complété par ADR-066, ADR-067
- **Ticket** : T-086

## Contexte
Au test du 2026-10-26, le premier message d'accueil posait les trois questions d'accueil d'un
bloc, en liste, comme le demandait `learner-onboarding`. La pose en plusieurs temps (ADR-058) ne
valait que pour une question de la banque. Le mainteneur veut une règle générale : une question
par message, leur nombre annoncé au début.

## Décision
- `CLAUDE.md`, « La boucle du cours », puce « Une question par message » : partout, accueil
  compris, plusieurs questions s'annoncent et se posent une à une. La question de la banque en
  plusieurs temps y renvoie.
- `learner-onboarding` : le premier message annonce trois questions et pose la première ; le
  script `init-learner.sh` se lance à la réponse au surnom ; chaque réponse suivante s'écrit
  dans `learner/apprenant.md` avant la question suivante ; le domaine 1 se présente après la
  troisième.
- `.claude/hooks/learner-status.sh` signale chaque champ du profil resté au modèle (« Question
  d'accueil sans réponse : rôle. ») ; `CLAUDE.md`, démarrage, fait poser ces questions une à une
  avant le rappel de reprise.

- `course/concepts/00-scrum.md` : la question de niveau, double, se pose en deux temps, chaque
  partie corrigée en une ligne, sans relance. Revient sur le « posée d'un bloc » d'ADR-061.

Complète ADR-058 (règle étendue à toute question), ADR-061 (question de niveau) et ADR-034 (le script se lance à la première
réponse d'accueil, plus aux trois).

## Options écartées
- Les questions d'accueil en une liste (pratique d'avant) : l'apprenant répond à tout d'un bloc
  ou en oublie une.
- Garder la question de niveau du concept 0 d'un bloc, par exception (ADR-061) : le mainteneur
  veut la règle sans exception.
- Faire lire `learner/apprenant.md` avant le premier message de reprise pour repérer une réponse
  manquante : une lecture de plus avant chaque reprise, contre ADR-034.

## Conséquences
L'accueil prend deux messages de plus. Le hook suppose les lignes `- Rôle : <` et
`- Avant le parcours : <` du modèle `course/templates/learner/apprenant.md` : changer ce modèle
oblige à changer le hook.
