# ADR-067 : La mémoire de l'apprenant ne s'écrit qu'aux points de sauvegarde

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-089

## Contexte
Depuis ADR-011, chaque écriture de `learner/` se fait dans la même réponse que le fait qui la
déclenche : question posée, correction, sous-concept validé, observation. Depuis ADR-065,
l'accueil écrit chaque réponse avant la question suivante. Au test du 2026-10-26, trois réponses
d'accueil ont demandé le script, deux Read, cinq Edit et une relecture ; un concept en demande 6
à 10. Le mainteneur veut fluidifier sans perdre le mécanisme, en acceptant de perdre l'échange en
cours sur une coupure.

## Décision
`CLAUDE.md`, « Tenir la mémoire à jour » : pendant la session, l'état reste dans la
conversation ; `learner/` ne s'écrit qu'à trois points de sauvegarde (fin de l'accueil ; concept
validé, sauté ou creusé ; arrêt), chaque fichier modifié en une seule écriture. La question en
attente ne s'écrit qu'à l'arrêt. `learner-onboarding` n'écrit rien avant la troisième réponse,
puis lance une fois `init-learner.sh <surnom> <rôle> <connaissances>`, qui remplit aussi
« Prochaine étape ». Le hook ne signale plus de question d'accueil sans réponse.

Complète ADR-011 (reprend l'écriture à un point fixe, sans skill) et ADR-065 (l'accueil n'écrit
plus réponse par réponse).

## Options écartées
- L'écriture au moment du fait (ADR-011) : trop d'appels d'outils, qui ralentissent chaque
  échange.
- Un point de sauvegarde en fin de domaine seulement : un domaine dure plusieurs sessions, une
  fermeture sans prévenir en perdrait plusieurs, journal compris. Option à reprendre si la fin
  de concept reste lourde.

## Conséquences
Une coupure sans arrêt annoncé perd ce qui suit le dernier concept clos : la reprise repart du
début du concept en cours, et un accueil interrompu recommence. Le contrôle de reprise ne tourne
qu'à l'arrêt annoncé.
