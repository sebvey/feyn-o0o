# T-071c : Faire présenter le domaine par le prof à son premier concept

- **Créé le** : 2026-10-25
- **Parent** : T-071
- **Dépend de** : T-071a
- **Constat** : voir T-071. `CLAUDE.md` demande seulement de nommer le domaine en tête du message au premier concept d'un domaine ; l'apprenant entre dans un domaine sans savoir quel problème il règle ni comment ses concepts s'enchaînent.
- **À faire** (comportement : le mainteneur décide ; proposition du 2026-10-25, à reprendre telle quelle si elle lui va) : dans `CLAUDE.md`, section de démarrage, remplacer le paragraphe « Avant chaque nouveau concept de la session… » par :

  > Avant chaque nouveau concept de la session, lis son fichier dans `course/concepts/` et les vigilances de `learner/observations.md` qui portent son numéro ; s'il ouvre un domaine, lis aussi la fiche du domaine dans `course/domains/`. Un concept sans fichier s'enseigne d'après sa ligne dans `course/plan.md` (objectif, sous-concepts), pour le public cible. Au premier concept d'un domaine, au fil comme au creusage du domaine, ouvre le message par le domaine : son nom (« Domaine 3 : découper et cadrer la story »), puis deux lignes tirées de sa fiche, le problème qu'il règle et le fil de ses concepts ; le message entier tient toujours la quinzaine de lignes.

  Erreurs évitées : sans la lecture, le prof ne nomme que le domaine, ou improvise une présentation hors du cours ; sans « deux lignes », il recopie la fiche (une quarantaine de lignes) et dépasse la limite ; sans « au fil comme au creusage », un domaine creusé démarre sans présentation. Pas de contradiction : la lecture avant le premier message reste `learner/parcours.md` seule (ADR-034), la fiche se lit avant le message du concept ; pas de message de transition à part (il casserait « un concept par message, une question ») ; la phrase « nomme le domaine » est remplacée, pas doublée. Non retenus : le cas du fil rouge de la fiche (les deux lignes l'écartent), le lien vers la page du site (avec la mise en ligne, T-050g).

  Test : agent neuf, copie du dépôt, `learner/` fictif où le concept 8 est validé et le 9 vient ; scénario « on reprend », « on continue », fin de session. Vérifier qu'il lit `course/domains/3-slicing-and-framing.md`, ouvre par « Domaine 3 » et deux lignes, tient la quinzaine de lignes et la mémoire. ADR à écrire (message de transition à part écarté).
- **Fini quand** : la décision du mainteneur est appliquée et testée par le scénario ci-dessus.
