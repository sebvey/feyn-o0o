# T-050b : Versionner le cours

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Dépend de** : T-051
- **Constat** : le cours n'a pas de version ; le site doit annoncer sur quelle version il est aligné, et le numéro de MAJOR du site est celui du cours (décision du 2026-10-24). Les numéros de concept sont l'identifiant commun : `learner/parcours.md` côté cours, `/concepts/09#9a1` côté site.
- **À faire** :
  1. créer `course/CHANGELOG.md` et y définir : MAJOR = changement qui casse les identifiants (renumérotation, concept ajouté au milieu ou retiré, sous-concept renommé) ou les objectifs du cours ; MINOR = précision, nouvelle source, nouvel exemple ou sous-concept, correction de fond sans casse ;
  2. y inscrire la version `1.0.0` (état après T-050a et T-051) et poser le tag git `course-v1.0.0` après le merge de T-051 ;
  3. écrire dans `maintenance` la règle : un changement du cours se range en MAJOR ou MINOR et s'inscrit au `CHANGELOG` (comportement : le mainteneur décide du texte).
- **Fini quand** : `course/CHANGELOG.md` existe avec les définitions et la version `1.0.0`, le tag est posé, et la règle de `maintenance` est validée.
- **Fait le** : 2026-10-24, `course/CHANGELOG.md` (définitions MAJOR, MINOR, PATCH, entrée 1.0.0), règles de versionnage dans `maintenance`, ADR-038 ; testé par un sous-agent neuf sur une copie ; le tag `course-v1.0.0` se pose après le merge, sur demande du mainteneur
