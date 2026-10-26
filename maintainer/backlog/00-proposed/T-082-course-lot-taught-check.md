# T-082 : Faire vérifier par `course-lot` qu'un cas ne demande que ce qui est enseigné

- **Créé le** : 2026-10-26
- **Constat** : T-077 a trouvé 50 cas qui demandaient à l'apprenant ce qu'il n'avait pas encore
  reçu (notion d'un sous-concept suivant, fait du fil rouge absent de la situation, terme avant
  sa définition, renvoi faux). Les revues de `course-lot` ne cherchent pas ce défaut : un
  prochain lot en réintroduirait.
- **À faire** : ajouter aux revues du workflow `course-lot` les sept contrôles de T-077, jugés
  contre ce que l'apprenant a reçu à ce point du cours (Explication, Situation, unités
  précédentes du fil principal) ; comportement d'agent : proposition au mainteneur.
- **Fini quand** : un lot relu par `course-lot` signale un cas de test qui exige une notion
  enseignée plus tard.
