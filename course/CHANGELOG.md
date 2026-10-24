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

- MINOR, concepts 0 à 2 : reprise de ce que les pages du site portaient seules (équipe vélos en 0a1, sprints plus courts en 0a2, durées de vie des engagements en 0a3, valeur et exemple d'Étienne en 1a, fournisseur de données en 1b, exemple de Maud en 2a, objectif sans cible chiffrée en 2b) ; fiches de sources alignées
- MINOR, concepts 4 à 7 : exemples du fil rouge repris des pages du site (journée d'Étienne, Régis, Abba, Étienne et la vue des stations vides, régulateur sur un petit écran), libellés du schéma du concept 4 fixés (cas inventé), mots flous et gloses du V d'INVEST ajoutés ; fiches de sources alignées
- MINOR, concepts 8, 10, 11, 12 : reprises du site (cas inventés dans 8a2 et les Pièges de 10, 11, 12 ; conditions typiques d'une DoR selon Cohn avec sa source ; précisions sur le Scrum Guide, la finalité des données et les limites de la source)
- MINOR, concepts 13 à 17, A1, A2 : reprises du site (objectif produit et DoR en 13a ; météo comme fournisseur externe et dire non en 14 ; mots non fixés en 15a1 ; journée type et limite de la carte en 16a ; ranger une supposition en 17a, exemple du SMS en cas inventé ; rappel du cas d'Abba en A1b ; exemple du Kanban Guide en A2d)
- MINOR, concept 3 : « retirer n'est pas définitif » attribué au cours (et non à Cohn et Rubin, qui attestent seulement le retrait) ; fiches de concept et de sources alignées
- PATCH, concepts 12 et 13 : « relevé en double » à la place de « doublon » (fiches de concept 12 et 13, fiche de sources 12)
- PATCH, sources/04-hierarchie : l'entrée « Non vérifié » sur « quelques jours » est rétablie (la ligne « Une story tient dans un sprint » y renvoyait)
- PATCH, sources/14-parties-prenantes : les cinq catégories de parties prenantes, choix du cours sans source (S2 ne fonde que la définition de Freeman)
- PATCH, sources/17-hypotheses-exploration : découverte continue de Torres, « chaque semaine » comme la fiche de concept, et non « au moins hebdomadaires » (S9 dit « weekly »)
- PATCH, sources/13-ordonner-backlog : référence S15 (Bellinson) retirée, plus citée par aucune ligne

## 1.0.0, 2026-10-24

Première version étiquetée : 18 concepts (0 à 17) et 2 annexes (A1, A2), leurs fiches de
sources, le fil rouge, le glossaire et le plan. Elle inclut la règle selon laquelle le texte qui
explique n'utilise pas le cas de l'exercice qui suit (ADR-037) et la resynchronisation des
fiches de sources avec les fiches de concept (T-051).
