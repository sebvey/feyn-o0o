# T-018h : Vérifier la cohérence du cours, le tester de bout en bout, clore T-018

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018g
- **Constat** : découpage de T-018a. Les lots sont relus concept par concept ; personne ne lit
  le cours entier.
- **À faire** : T-018 §4 (cohérence d'ensemble, sessions simulées notées par un juge), puis §7
  (clôture). Retirer la section « Situations par concept » de `course/fil-rouge-velos.md` si
  les banques d'exemples la rendent inutile. Avant de supprimer `maintainer/work/T-018/`,
  retirer de `course/sources/` tout renvoi à ce dossier (`grep -rn "maintainer/work" course/`
  ne trouve plus rien) : une observation de session s'écrit en clair (« observation d'une
  session, un apprenant : base faible »), un renvoi à `framing.md` est remplacé par sa source
  primaire, un renvoi à un fichier `N-errors.md` ou `N-needs.md` est remplacé par le fait
  qu'il justifie, ou retiré.
- **Fini quand** : « Fini quand » de T-018.
