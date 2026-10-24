# T-051 : Resynchroniser les fiches de sources avec les fiches de concept

- **Créé le** : 2026-10-24
- **Constat** : la relecture de T-050a (2026-10-24) a trouvé des lignes de `course/sources/` qui décrivent un passage que la fiche de concept ne contient plus, ou ne décrit plus fidèlement. Elles ne viennent pas toutes de T-050a (dérive antérieure) et T-050a ne les a pas corrigées. Relevés :
  - `08-criteres-regles.md` lignes 71 et 72 (concept 15 et renvois 9 et 15 absents de la fiche) ;
  - `07-invest.md` ligne 44 (« plus d'un mois » absent) ; `06-roles-personas.md` ligne 30 (« l'acteur est évident » absent) ;
  - `01-produit-et-po.md` lignes 122 à 128 (« Non vérifié » sur un consensus et des formes de valeur que la fiche ne contient plus) ;
  - `03-backlog-produit.md` lignes 30 et 33 (renvoient à L'essentiel pour des termes qui n'y sont plus) ;
  - `00-scrum.md` ligne 44 (attribue au Choix du cours une idée qui n'est que dans la Réponse attendue) ; `02-objectif-produit-resultat.md` ligne 76 (cite L'essentiel pour ce que seule la banque dit) ;
  - `09-decoupage-vertical.md` lignes 22, 24, 30, 42, 43, 45 et 54 (phrase attribuée à la mauvaise section, erreur périmée, noms du cours « qualité de service différée » et « périmètre de données » absents de la fiche, spike en dernier recours, « concepts 0, 2 et 4 » au lieu de « 0 et 2 », « arbitrage du mainteneur en attente » alors que la vue est livrée).
- **À faire** : pour chaque ligne, la corriger pour qu'elle décrive la fiche actuelle (ou retirer l'affirmation de la fiche si c'est elle qui a tort) ; vérifier ensuite les autres fiches de sources par la même méthode.
- **Fini quand** : chaque ligne des 20 fichiers `course/sources/` décrit un passage qui existe dans la fiche de concept, à la section citée ; vérifié par une relecture indépendante.
