# T-103 : Réagir aux réponses d'accueil

- **Créé le** : 2026-10-26
- **Constat** : test d'accueil du 2026-10-26, après T-102 : à « po data expérimenté », le prof
  pose la question suivante sans réagir ; à « Je maitrise mieux que toi, je pense. Tu vas rien
  m'apprendre, mais essaye quand même », il écrit la phrase fixe de T-102 (« Merci Seb, je mets
  en place le cours. ») et rien d'autre. L'étape 2 de `learner-onboarding` ne demande aucune
  réaction (« sans rien écrire » se lit aussi « ne dis rien ») ; la phrase fixe de T-102 écrase
  la réaction à la troisième réponse.
- **À faire** : `.claude/skills/learner-onboarding/SKILL.md` : étape 2, réagir en une phrase à
  chaque réponse, « sans rien écrire » devient « N'écris rien dans `learner/` avant l'étape 3 » ;
  étape 3, la phrase fixe devient une ou deux phrases sur ce que ses réponses changent pour le
  cours, puis « Je mets en place le cours. ».
- **Fini quand** : un sous-agent neuf, sur une copie, réagit à la réponse à la deuxième question
  avant de poser la troisième, puis, à la troisième, écrit avant tout appel d'outil ce que ses
  réponses changent pour le cours et « Je mets en place le cours. ».
- **Fait le** : 2026-10-26, réaction en une phrase à chaque réponse d'accueil, réaction aux réponses avant la mise en place du cours, phrase fixe de T-102 retirée ; ADR-077. Test par sous-agent Sonnet : réaction à « po data expérimenté » avant la troisième question ; avant tout outil, deux phrases sur le rythme et ce qu'il pourra sauter, puis « Je mets en place le cours. » ; message suivant ouvert sur « C'est prêt, on démarre. », 10 lignes.
