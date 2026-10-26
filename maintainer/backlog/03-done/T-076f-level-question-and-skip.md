# T-076f : Faire de la question de contrôle une question de niveau, et laisser l'apprenant sauter un concept ou un domaine

- **Créé le** : 2026-10-26
- **Parent** : T-076
- **Constat** : au test du cours (2026-10-26), le prof a annoncé « Si ta réponse est solide, on
  passe directement au concept 1. » La question de contrôle du concept 0 fait passer le concept
  (ADR-017, ADR-018, ADR-023, T-029) : une réponse juste sur l'ordre du backlog a fait sauter
  tout 0a, et l'apprenant a reçu l'exercice de 0a2 sans connaître le rôle du Scrum Master (« tu
  m'as pas décrit son rôle »). Le mainteneur : le prof ne propose pas de sauter une partie du
  cours ; la question peut rester pour se faire une idée du niveau ; le prof dit qu'un concept
  ou un domaine peut être sauté, et qu'on y reviendra si besoin (lecture A : l'apprenant le
  demande, statut `sauté`).
- **À faire** :
  - `course/concepts/00-scrum.md` et `course/plan.md` : la question de contrôle devient une
    question de niveau, posée d'un bloc, sans relance ; elle ne valide ni ne saute rien ; sa
    correction tient en une ligne, puis vient 0a1 ; une erreur de la banque commise dans la
    réponse se note en vigilance ; renvois de `course/sources/00-scrum.md` alignés ;
  - `CLAUDE.md` : l'apprenant peut demander à sauter un concept ou un domaine pas encore
    validé ; statut `sauté` ; dire en une ligne un prérequis sauté ; proposer d'y revenir quand
    une réponse bute dessus ;
  - `course/templates/learner/parcours.md` : statut `sauté` ;
  - skill `learner-onboarding` : l'accueil dit qu'on peut sauter un concept ou un domaine ;
    « question de contrôle » devient « question de niveau ».
  - ADR : remplace la partie « passer le concept » d'ADR-017, ADR-018 et ADR-023.
- **Fini quand** : un sous-agent prof neuf sur Sonnet, sur un nouvel apprenant qui répond juste
  à la question de niveau, enseigne 0a1 sans proposer de sauter ; à « on saute le domaine 2 »,
  il note `sauté` aux concepts 3 à 8 et présente le domaine 3 ; avant un concept dont un
  prérequis est sauté, il le dit en une ligne.
- **Fait le** : 2026-10-26, question de niveau dans `00-scrum.md` et `plan.md` (d'un bloc, sans relance, ne fait rien sauter, erreur fréquente en vigilance) ; `CLAUDE.md` « Creuser ou sauter » (statut `sauté`, prérequis sauté dit, retour proposé), modèle `parcours.md`, skill d'accueil ; ADR-061 ; tests Sonnet : nouvel apprenant (réponse de niveau partielle, 0a1 enseigné sans saut, 15 lignes tenues, arrêt) et apprenante qui saute le domaine 2 (concepts 3 à 8 `sauté`, domaine 3 présenté, prérequis 8 dit avant le 9, concept 8 proposé sur une question) : conformes.
