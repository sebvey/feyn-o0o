# ADR-064 : Un workflow à part vérifie sur tout le cours qu'aucun cas ne demande ce qui n'est pas encore enseigné

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-082

## Contexte
T-077 a trouvé 50 cas qui demandaient à l'apprenant ce qu'il n'avait pas encore reçu. Les
revues de `course-lot` ne cherchaient pas ce défaut, et ne le peuvent pas bien : chaque relecteur
ne lit que le fichier de son concept, les concepts d'un lot tournent en parallèle, et un lot qui
retire une notion d'une explication casse des concepts suivants qu'aucune revue du lot ne lit.

## Décision
Le workflow `.claude/workflows/course-taught-check.js` dresse l'inventaire cumulatif de ce que
l'apprenant reçoit au fil principal, puis fait relire les concepts, par lots, contre cet
inventaire avec les sept contrôles de T-077 ; il ne modifie rien. Le skill `maintenance` (§5)
le fait lancer après tout ticket qui modifie ce qu'un concept enseigne, du premier concept
touché à la fin du cours. `course-lot` ne change pas.

## Options écartées
- Ajouter les sept contrôles à la revue de fond de `course-lot` (première proposition de
  T-082) : le relecteur ne voit pas les concepts précédents, qui peuvent être en cours de
  réécriture par le même lot, ni les concepts suivants.
- Une phase finale de `course-lot` sur le lot et l'aval : ne couvre pas les retouches hors lot
  (T-077, T-078), et doublerait l'inventaire si un contrôle autonome existait aussi.
- Laisser les relecteurs corriger : des corrections automatiques sur des concepts hors du
  ticket se relisent mal dans une PR ; le tri reste à l'agent de maintenance.

## Conséquences
Un ticket de contenu coûte un inventaire et quelques relectures de plus. L'inventaire ne couvre
que le fil principal : un cas de rechange ou de creusage qui en introduit une notion n'est pas
vu comme enseigné ailleurs.
