# T-112 : Traiter les trois constats restés après la boucle de T-109

- **Créé le** : 2026-10-26
- **Constat** : boucle de `course-taught-check` de T-109 (ADR-078), deuxième et dernier tour,
  depuis le concept 7 (2026-10-26) : trois constats nouveaux, vérifiés dans les fichiers :
  - concept 8, « Trier les phrases de la story d'Abba » (8a1) : « 1 sert aussi aux vues
    d'Étienne », alors qu'aucune vue d'Étienne reçue avant 8a1 ne compte les vélos disponibles ;
  - concept 9, 9b1 (section « Sous-concepts » et explication de « Prévoir les stations à
    risque ») : « une story trop grosse se découpe (concept 4) », alors que le concept 4 appelle
    epic un besoin trop gros pour un sprint, et renvoie son découpage au concept 9 ;
  - concept 14, liste « Déjà enseigné » : le sponsor attribué à 0a1 et 1b, alors que 2b est la
    première unité qui dit ce qu'il fait.
- **À faire** : 8a1, appuyer la règle 1 sur la disponibilité par station que Pia veut pour
  l'appli (3a1), ou sur « d'autres stories » ; 9b1, « un besoin trop gros pour un sprint est un
  epic (concept 4), et il se découpe ici » ; 14, « sponsor, qui porte le budget (2b, repris en
  10b2) ». `course/CHANGELOG.md`.
- **Fini quand** : les trois formulations sont corrigées.
