# T-092 : Finir la ligne « La suite : … » par « J'enchaîne ? »

- **Créé le** : 2026-10-26
- **Dépend de** : T-090, T-091 (leur texte de `CLAUDE.md` est celui qu'on modifie ; pas encore mergés)
- **Constat** : au test du cours (2026-10-26), le message de présentation du domaine 1 finit par
  « La suite : Scrum en bref et l'incrément. » sans question. Le mainteneur remarque que
  l'apprenant ne sait pas quoi répondre : il faudrait un « J'enchaîne ? ». ADR-068 a supprimé
  les « ok » sans contenu en enchaînant ce qui vient ; quand le tout ne tient pas en une
  quinzaine de lignes, le message s'arrête sur la ligne, sans invitation.
- **À faire** : dans `CLAUDE.md` :
  1. « Fin d'un concept ou d'un sous-concept validé » : remplacer « Il s'arrête sur cette ligne, et
     l'apprenant relance. » par « Il s'arrête sur cette ligne, qui finit par « J'enchaîne ? » ; un
     oui suffit à l'apprenant pour relancer. » ; l'exemple devient « La suite : 0a2, le sprint
     en bref. J'enchaîne ? ».
  2. Étape 3 du démarrage (« le rappel finit par « La suite : … » ») : ajouter « J'enchaîne ? » de
     même.
  3. Présentation d'un domaine : « il ne pose pas de question » devient « il ne pose pas de
     question de cours » ; il finit par l'annonce de la suite, suivie de « J'enchaîne ? » quand
     il s'arrête dessus.
  4. « Une question par message » : « J'enchaîne ? » ne compte pas comme la question du message.
  5. ADR à écrire (option écartée : la ligne seule, ADR-068) ; ADR-068 passe en « complété par ».
- **Fini quand** : un sous-agent neuf sur Sonnet, quand un message ne peut pas enchaîner, le finit
  par « La suite : … J'enchaîne ? » ; quand il enchaîne, il finit par la question du
  sous-concept, sans « J'enchaîne ? ».
- **Fait le** : 2026-10-26, `CLAUDE.md` : la ligne « La suite : … » finit par « J'enchaîne ? » (fin de sous-concept, rappel de reprise, présentation de domaine), ADR-070 ; test Sonnet : onboarding et fin de 0a2 avec mini-récap finissent par « La suite : … J'enchaîne ? », sans question de cours en plus ; le cas où le message enchaîne sur un sous-concept n'est pas testé.
- **Revu le** : 2026-10-26, à la relecture du mainteneur : « J'enchaîne ? » devient « Des questions ? J'enchaîne ? ».
