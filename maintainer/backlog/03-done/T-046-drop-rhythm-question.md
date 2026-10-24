# T-046 : Retirer la question du rythme de l'accueil

- **Créé le** : 2026-10-24
- **Constat** : retest de l'accueil par le mainteneur (2026-10-24) : la quatrième question
  d'accueil (« le rythme qu'il préfère ») n'a pas d'effet. Sa réponse va dans « Préférences »
  de `learner/apprenant.md`, mais aucune règle ne s'en sert ; le rythme s'adapte par « plus
  vite » et « plus lent », en cours de route. Décision du mainteneur : la retirer.
- **À faire** : `.claude/skills/learner-onboarding/SKILL.md`, retirer la question 4 et passer à
  trois questions ; `course/templates/learner/apprenant.md`, « Préférences » sans ligne
  « Rythme ».
- **Fini quand** : l'accueil pose trois questions ; le modèle n'a plus de ligne « Rythme ».
- **Fait le** : 2026-10-24, question du rythme retirée du skill d'accueil et du modèle
  `apprenant.md` ; test par le mainteneur dans l'app. ADR-036.
