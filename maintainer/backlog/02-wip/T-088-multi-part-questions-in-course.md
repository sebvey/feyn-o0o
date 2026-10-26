# T-088 : Écrire en parties chaque question de la banque qui teste plusieurs points

- **Créé le** : 2026-10-26
- **Constat** : le prof juge seul, en session, si une question de la banque « teste plusieurs
  points distincts » (`CLAUDE.md`, « Une question par message ») : rien dans le fichier du
  concept ne le lui signale, sauf la question de niveau du concept 0 depuis T-086. Une question
  double non repérée se pose d'un bloc. Aucun contrôle ne le vérifie : `course-taught-check`
  porte sur ce qui est enseigné, la revue « forme » de `course-lot` sur ce que la question
  teste. Demande du mainteneur après T-086 : un contrôle de qualité du cours sur les questions
  multiples.
- **À faire** :
  - `course/templates/concept.md`, champ Question : une question qui teste plusieurs points
    s'écrit « **Question**, en deux parties : « … », puis « … » », la réponse attendue et les
    erreurs fréquentes réparties entre les parties.
  - Audit des questions de la banque de `course/concepts/` (concepts et annexes) : chaque
    question double ou à double consigne passe au format en parties, ou se réduit à une seule
    question si la seconde n'apporte rien. Entrées au CHANGELOG.
  - `.claude/workflows/course-lot.js`, revue « forme » : ajouter le critère « une question qui
    teste plusieurs points est écrite en parties, selon le modèle de fichier de concept ».
- **Fini quand** : le modèle porte le format ; un second passage de l'audit ne relève plus de
  question double hors format ; la revue « forme » de `course-lot` porte le critère.
