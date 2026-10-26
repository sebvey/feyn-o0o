# T-102 : Annoncer la mise en place du cours à la fin de l'accueil

- **Créé le** : 2026-10-26
- **Constat** : test d'accueil du 2026-10-26 : à la réponse à la troisième question d'accueil
  (« les bases seulement »), l'agent enchaîne lectures, écritures de `learner/`, création de
  branche et commit sans rien écrire avant ; l'apprenant attend sans savoir pourquoi. La règle
  générale de `CLAUDE.md` (phrase courte avant le premier appel d'outil) n'a pas été appliquée
  à l'étape 3 du skill `learner-onboarding`. Le mainteneur veut une phrase du type « je mets en
  place le cours » avant les outils, puis « C'est prêt, on démarre. » avant le fil rouge.
- **À faire** : dans `.claude/skills/learner-onboarding/SKILL.md`, étape 3 : avant le premier
  appel d'outil, écrire « Merci <surnom>, je mets en place le cours. » ; le message qui suit les
  écritures s'ouvre sur « C'est prêt, on démarre. », puis le fil rouge et le domaine 1.
- **Fini quand** : un sous-agent neuf, sur une copie, à la réponse à la troisième question
  d'accueil, écrit la phrase de mise en place avant tout appel d'outil, puis ouvre le message
  suivant sur « C'est prêt, on démarre. » avant le fil rouge et le domaine 1.
