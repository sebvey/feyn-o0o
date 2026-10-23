# T-018h : Vérifier la cohérence du cours, le tester de bout en bout, clore T-018

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018g
- **Constat** : découpage de T-018a. Les lots sont relus concept par concept ; personne ne lit
  le cours entier.
- **À faire** : T-018 §4 (cohérence d'ensemble, sessions simulées notées par un juge), puis §7
  (clôture). Retirer la section « Situations par concept » de `course/fil-rouge-velos.md` si
  les banques d'exemples la rendent inutile. Vérifier dans chaque banque qu'une erreur
  fréquente qui est une réponse fausse dit sa relance, ou n'en a pas (règle de T-033 ; test de
  T-033, banque de 6b : la relance n'était que dans « Ce qui marche »). Avant de supprimer `maintainer/work/T-018/`,
  retirer de `course/sources/` tout renvoi à ce dossier (`grep -rn "maintainer/work" course/`
  ne trouve plus rien) : une observation de session s'écrit en clair (« observation d'une
  session, un apprenant : base faible »), un renvoi à `framing.md` est remplacé par sa source
  primaire, un renvoi à un fichier `N-errors.md` ou `N-needs.md` est remplacé par le fait
  qu'il justifie, ou retiré.
  Constats du test de T-018g sur le concept 4 (hors du lot 6), à vérifier ici : le premier
  exemple de 4b (« suivre l'état du réseau ») refait trancher l'élément 1 de 4a1, déjà
  « epic » ; deux définitions de l'epic se recoupent (par la taille dans « L'essentiel », par
  le compte des « je veux » en 4b) sans dire laquelle l'emporte ; coquille en 4b
  (« faite de un ou plusieurs »).
- **Fini quand** : « Fini quand » de T-018.
- **Fait le** : 2026-10-23, cohérence d'ensemble par deux relecteurs (19 et 10 constats, tous appliqués ou arbitrés : fil rouge, glossaire, plan, prérequis, renvois, étiquettes consensus et choix du cours, 93 relances rattachées à leur erreur, modèle de concept) ; trois défauts du concept 4 corrigés ; « Situations par concept » retirée ; renvois de `course/sources/` à `maintainer/work/` retirés et dossier supprimé ; sept sessions simulées (accueil, milieu, reprise, aparté, concept 13, source, sans sprint) notées par un juge : six passent, la reprise échoue (8a2 validé sur une erreur de la banque), corrigée dans le cours et repassée au contrôle, avec un second contrôle du concept 7 ; défauts du cours corrigés, constats du cadre triés (T-043 proposé) ; ADR-033.
