# T-086 : Poser toujours les questions une à une, accueil compris

- **Créé le** : 2026-10-26
- **Constat** : test du 2026-10-26 (branche `test_261026-1223`), premier message d'accueil :
  « Trois questions pour commencer : 1. Comment veux-tu qu'on t'appelle ? 2. Quel est ton rôle
  aujourd'hui […] ? 3. Que connais-tu déjà de Scrum […] ? ». `learner-onboarding` demande les
  questions d'accueil « en une liste » ; la pose en plusieurs temps de `CLAUDE.md` ne vaut que
  pour une question de la banque. Demande du mainteneur : une règle générale, une question par
  message, le nombre annoncé au début, que le skill ne contredit pas.
- **À faire** :
  - `CLAUDE.md`, « La boucle du cours », ajouter après la puce « Reste court » :
    > - **Une question par message**, partout, accueil compris : s'il y en a plusieurs à poser,
    >   annonce leur nombre et pose la première (« J'ai trois questions pour toi, voici la
    >   première : »), puis la suivante après sa réponse. Une question suivie de « pourquoi ? »
    >   reste une seule question.
  - `CLAUDE.md`, puce « Un seul concept par message », remplacer « Une question de la banque qui
    teste plusieurs points distincts se pose en plusieurs temps : annonce-le (« Je te pose deux
    questions, voici la première : »), corrige chaque réponse selon cette boucle, puis pose la
    suivante. Une question suivie de « pourquoi ? » reste une seule question. » par :
    > Une question de la banque qui teste plusieurs points distincts se pose en plusieurs temps
    > (« Une question par message ») : corrige chaque réponse selon cette boucle avant la
    > suivante.
  - `CLAUDE.md`, « Au démarrage d'une session », remplacer « 2. Ne repose pas les questions
    d'accueil : les réponses sont dans `learner/apprenant.md`. » par :
    > 2. Ne repose pas les questions d'accueil dont la réponse est dans `learner/apprenant.md` ;
    >    s'il en manque, pose-les une à une avant le rappel de reprise.
  - `.claude/skills/learner-onboarding/SKILL.md` :
    - étape 1 : « et pose les questions d'accueil, en une liste : » devient « et pose les
      questions d'accueil une à une, en annonçant qu'il y en a trois (« Une question par
      message » de `CLAUDE.md`) ; ce premier message pose la première : » (liste inchangée) ;
    - étape 2 : « À sa réponse » devient « À sa réponse à la première » ; à la fin de l'étape,
      ajouter « , puis pose la deuxième question. À chaque réponse suivante, écris-la dans
      `learner/apprenant.md`, puis pose la question suivante. » ;
    - étape 3 : « Dans le même message » devient « À la réponse à la troisième, dans le même
      message ».
    Le premier message reste sans appel d'outil (ADR-034).
- **Fini quand** : un test d'accueil pose les trois questions dans trois messages, le premier
  annonçant leur nombre, et présente le domaine 1 après la troisième ; un test de reprise avec un
  `learner/apprenant.md` qui n'a que le surnom pose les deux questions manquantes, une à une,
  avant le rappel de reprise.
