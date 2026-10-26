# T-077 : Corriger les questions du cours qui exigent ce qui n'est pas encore enseigné

- **Créé le** : 2026-10-26
- **Constat** : au test du cours du 2026-10-26 et à la relecture de T-076g/h, plusieurs cas du
  concept 0 demandaient ce que l'apprenant n'avait pas encore reçu : la revue faisait corriger
  « Étienne valide » (0b, enseigné après) ; la réponse sur la rétrospective exigeait un point
  absent de l'explication ; « Qui est le chef ? » s'appuyait sur des métiers que la situation ne
  donnait pas ; « parties prenantes » apparaissait avant le concept 1. Le mainteneur demande une
  passe sur tout le cours.
- **À faire** : dans `course/concepts/` (concepts 0 à 17, annexes A1, A2), chercher et corriger
  sept défauts, en jugeant ce que l'apprenant a reçu à ce point du cours (explications des
  sous-concepts déjà enseignés, explication du message, situation de l'exemple ; il ne lit ni le
  fil rouge, ni le glossaire, ni le reste du fichier) :
  1. réponse attendue (noyau, ou erreur que la question fait corriger) qui relève d'un concept
     ou sous-concept enseigné plus tard ; une nuance avec renvoi reste permise ;
  2. réponse attendue plus large que l'explication et les messages précédents ;
  3. réponse qui s'appuie sur un fait, un acteur ou une règle du fil rouge absent de la
     situation et des messages précédents ;
  4. terme du glossaire employé avant le concept qui l'introduit, sans définition en passant ;
  5. relance ou correction des erreurs fréquentes qui s'appuie sur une notion pas encore vue ;
  6. renvoi faux (« vu en X », « rappel de X », liste « Déjà enseigné ») vers un X qui vient
     après ou ne contient pas ce qu'on lui prête ;
  7. les mêmes contrôles pour les cas de rechange, de creusage et les annexes, depuis leur
     point d'entrée.

  Méthode : un inventaire cumulatif de ce qui est enseigné, sous-concept par sous-concept
  (`maintainer/work/T-077/`), puis une relecture par lots contre cet inventaire, puis tri et
  correction. Hors périmètre : les prérequis sautés à la demande de l'apprenant (règle de
  `CLAUDE.md`).
- **Fini quand** : chaque constat des relecteurs est appliqué, ou rejeté avec sa raison dans la
  PR ; une relecture neuve des corrections ne trouve plus de défaut de ces sept types ; un
  sous-agent prof neuf sur Sonnet enseigne un concept corrigé sans poser de question hors de ce
  qu'il a enseigné.
