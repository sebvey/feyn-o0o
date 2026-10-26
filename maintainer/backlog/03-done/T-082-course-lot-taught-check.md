# T-082 : Faire vérifier par `course-lot` qu'un cas ne demande que ce qui est enseigné

- **Créé le** : 2026-10-26
- **Constat** : T-077 a trouvé 50 cas qui demandaient à l'apprenant ce qu'il n'avait pas encore
  reçu (notion d'un sous-concept suivant, fait du fil rouge absent de la situation, terme avant
  sa définition, renvoi faux). Les revues de `course-lot` ne cherchent pas ce défaut : un
  prochain lot en réintroduirait.
- **À faire** (reformulé avec le mainteneur le 2026-10-26) : les revues de `course-lot` ne
  lisent qu'un fichier, tournent en parallèle sur les concepts du lot et ne voient pas ce qu'un
  lot casse en aval ; le contrôle se fait donc sur tout le cours. Créer le workflow
  `.claude/workflows/course-taught-check.js` (inventaire cumulatif de ce que l'apprenant reçoit,
  puis relecture par lots de concepts contre cet inventaire avec les sept contrôles de T-077,
  rapport sans modification), et écrire dans le skill `maintenance` quand le lancer : après un
  ticket qui modifie ce qu'un concept enseigne, du premier concept touché à la fin du cours.
  `course-lot` ne change pas.
- **Fini quand** : sur une copie du cours où sont plantés un cas qui exige une notion enseignée
  plus tard et une explication retirée dont dépend un concept suivant, `course-taught-check`
  signale les deux.
- **Fait le** : 2026-10-26, workflow `course-taught-check` créé (cadrage, inventaire cumulatif du fil principal, relecture par lots de quatre concepts, rapport sans modification) ; règle de lancement dans le skill `maintenance` (§5) ; ADR-064. Test sur une copie du cours, concepts 4 à 9, avec deux défauts plantés (la DoR exigée dans la réponse de 5a1 ; la tâche retirée de l'explication de 4a1) : le premier relevé bloquant, le second relevé dans le concept 4 et dans le renvoi du concept 5 qui en dépend ; 4 agents, environ 450 000 jetons ; trois constats réels hors ticket proposés en T-083.
