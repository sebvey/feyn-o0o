# T-106 : Corriger les renvois à des notions pas encore reçues relevés par course-taught-check

- **Créé le** : 2026-10-26
- **Constat** : `course-taught-check` lancé depuis le concept 0 pour T-100 (2026-10-26) : aucun
  constat causé par T-100, six constats mineurs antérieurs, vérifiés dans les fichiers :
  - concept 2, « Deux objectifs à la fois ? » (2b, rechange) : la réponse attendue argumente par
    l'ordre du backlog, que 3a1 relie à l'objectif produit ;
  - concept 5, section « Sous-concepts » : l'exemple d'Abba (« en conversation puis en
    critères ») n'est pas attribué à 5a2, alors qu'il emploie les 3C et le critère
    d'acceptation ;
  - concept 7, 7a1 : I défini comme « ne dépend pas d'une autre story », alors que la réponse
    attendue fait porter I sur le travail de l'équipe appli ;
  - concept 9, « Les tâches de Dana » (9a2) : « Au Sprint Planning (concept 15) », alors que le
    Sprint Planning est reçu en 0a2 ;
  - concepts 13 et 14 (« Déjà enseigné ») et 14c (erreur fréquente) : « pas de vote (1b) »,
    alors que le cas du vote n'est pas au fil de 1b.
- **À faire** : corriger chaque point selon le correctif du rapport (renvoi à ce qui a été reçu,
  ou nuance avec renvoi au concept qui l'enseigne) ; `course/CHANGELOG.md`.
- **Fini quand** : `course-taught-check` relancé depuis le concept 2 ne relève plus ces six
  constats.
- **Fait le** : 2026-10-26, six constats corrigés (concept 7 en MINOR : I couvre le travail d'une autre équipe, choix du cours) ; boucle d'ADR-078, deux tours depuis le concept 2 : tour 1, les six constats ne reviennent pas, cinq nouveaux constats mineurs corrigés (concepts 2, 4, 5, A1) ; tour 2, deux nouveaux constats, laissés au tri en T-109.
