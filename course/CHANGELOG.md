# Journal des versions du cours

Le cours porte un numéro `MAJOR.MINOR.PATCH`. Chaque version publiée a un tag git
`course-vMAJOR.MINOR.PATCH`. Le site public du cours s'aligne sur une version et affiche
laquelle ; son MAJOR est celui du cours.

## Ce que chaque numéro signifie

Les **identifiants du cours** sont : le numéro de chaque concept et annexe (0 à 17, A1, A2), le
numéro de chaque sous-concept (0a1, 9b2, A2c…), le nom des fichiers de `course/concepts/` et
`course/sources/`, et les sept objectifs de `course/plan.md`. Le suivi de l'apprenant
(`learner/parcours.md`) et les adresses du site (`/concepts/09#9a1`) s'appuient dessus.

- **MAJOR** : un changement qui casse un identifiant ou un objectif. Exemples : renuméroter un
  concept, en insérer un entre deux autres, en retirer un, renommer ou déplacer un
  sous-concept, changer un objectif du cours.
- **MINOR** : un changement de fond qui ne casse aucun identifiant. Exemples : une précision,
  une nouvelle source, un nouvel exemple, un sous-concept ajouté en fin de concept, la
  correction d'une affirmation.
- **PATCH** : une correction de forme qui ne change pas le sens (faute, mise en page, lien).

Un changement se range dans la plus haute catégorie qu'il touche.

Une version publiée prend la plus haute catégorie de ses entrées. Un MAJOR remet MINOR et PATCH
à 0, un MINOR remet PATCH à 0.

## Non publié

Les changements du cours en attente de publication s'inscrivent ici, une ligne par changement :
`- CATÉGORIE, concept ou fichier : ce qui change`. Le mainteneur décide de publier : la section
devient `## X.Y.Z, date`, le tag est posé, et une nouvelle section « Non publié » vide s'ouvre.

## 1.0.0, 2026-10-24

Première version étiquetée : 18 concepts (0 à 17) et 2 annexes (A1, A2), leurs fiches de
sources, le fil rouge, le glossaire et le plan. Elle inclut la règle selon laquelle le texte qui
explique n'utilise pas le cas de l'exercice qui suit (ADR-037) et la resynchronisation des
fiches de sources avec les fiches de concept (T-051).
