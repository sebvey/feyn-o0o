# ADR-038 : Le cours est versionné et le site suit son MAJOR

- **Date** : 2026-10-24
- **Statut** : accepté
- **Ticket** : T-050b

## Contexte
Le site public du cours (T-049) est une projection de `course/` : même fond, banque d'exemples
exclue (T-050). Rien ne dit sur quelle version du cours il est aligné, ni quand le réaligner.
Les numéros de concept et de sous-concept sont l'identifiant commun : ils servent à
`learner/parcours.md` côté cours, et aux adresses du site (`/concepts/09#9a1`) que le prof
donnera en renvoi.

## Décision
Le cours porte un numéro `MAJOR.MINOR.PATCH`, tenu dans `course/CHANGELOG.md`, avec un tag git
`course-vX.Y.Z` par version publiée. MAJOR : un changement qui casse un identifiant ou un
objectif. MINOR : un changement de fond sans casse. PATCH : une correction de forme. Le site a
le même MAJOR que le cours, MINOR et PATCH libres, et affiche la version du cours sur laquelle
il est aligné. Chaque ticket qui modifie `course/` inscrit son changement sous « Non publié » ;
le mainteneur décide de publier. Écrit dans le skill `maintenance` (§3, étape 4, et la règle
« Publier une version du cours »).

## Options écartées
- Une source structurée unique (un fichier de données par concept) qui génère le cours et le
  site : elle oblige à refondre un cours écrit en prose pour un agent, et contredit « le site
  évolue en parallèle, sans lien automatique ».
- Le site comme source du fond : le cours reste la source de vérité, le site en est la
  projection.

## Conséquences
Un MAJOR du cours impose un MAJOR du site et casse le suivi des apprenants : à signaler en tête
de la PR. Le site doit pouvoir lister les pages dont la fiche a changé depuis son alignement
(T-050c).
