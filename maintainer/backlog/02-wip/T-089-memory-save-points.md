# T-089 : N'écrire la mémoire de l'apprenant qu'aux points de sauvegarde

- **Créé le** : 2026-10-26
- **Constat** : au test du 2026-10-26, l'accueil de trois réponses a demandé le script, deux
  Read pour pouvoir éditer, cinq Edit (un raté) et une relecture ; en cours, la règle d'ADR-011
  écrit à chaque question posée, chaque correction et chaque sous-concept validé (6 à 10
  écritures par concept). Le mainteneur veut fluidifier sans perdre le mécanisme : la mémoire
  ne s'écrit plus en temps réel, perdre l'échange en cours sur une coupure est accepté. Décidé :
  sauvegarde en fin de concept, révisable vers la fin de domaine si c'est encore lourd.
- **À faire** :
  - `CLAUDE.md`, « Tenir la mémoire à jour » : l'état reste dans la conversation ; trois points
    de sauvegarde (fin de l'accueil ; concept validé, sauté ou creusé ; arrêt), chaque fichier
    en une seule écriture ; un tableau « quoi, où » ; la question en attente ne s'écrit qu'à
    l'arrêt. « Au démarrage », étape 2 : plus de questions d'accueil sans réponse. « Creuser » :
    la note de creusage et les cas posés s'écrivent au point de sauvegarde.
  - `learner-onboarding` : aucune écriture avant la troisième réponse ; à elle, un seul appel
    `init-learner.sh <surnom> <rôle> <connaissances>`.
  - `init-learner.sh` : prend le rôle et les connaissances, remplit « Prochaine étape ».
  - `.claude/hooks/learner-status.sh` : retire le signalement des questions d'accueil sans
    réponse.
  - `maintenance`, §5 : le test vérifie les écritures aux points de sauvegarde.
  - ADR : complète ADR-011 et ADR-065.
- **Fini quand** : un sous-agent neuf, sur une copie, fait l'accueil sans écrire avant la
  troisième réponse puis en un appel ; valide un concept et écrit `learner/` en une écriture par
  fichier, sans écrire aux questions intermédiaires ; un agent neuf qui reprend après une
  coupure en milieu du concept suivant annonce ce concept ; un arrêt annoncé en milieu de
  concept note la question en attente.
