# T-062 : Mettre le bouton « Lire » dans la boîte du concept et revoir précédent / suivant

- **Créé le** : 2026-10-25
- **Constat** : retours du mainteneur du 2026-10-25. (1) Page Domaines : « Lire le concept N », en bas d'un concept déplié, mène au début du concept, ce qui perturbe. (2) Page de concept : précédent / suivant n'est visible qu'en haut de page, et pas joli.
- **À faire** (dépôt `../parcours-po-website`) :
  1. page Domaines : un bouton « Lire » calé à droite sur la ligne de chaque concept, visible plié comme déplié, lien vers le début du concept ; placé à côté du `summary` (pas dedans), en position absolue ; le lien « Lire le concept N » en bas de la liste disparaît ;
  2. page de concept : le bloc précédent / suivant quitte l'en-tête ; en bas de page, deux cartes (précédent à gauche, suivant à droite, numéro et titre), visibles quel que soit l'onglet ; dans la barre d'onglets collante, deux flèches discrètes « ← N » et « N → » à droite, titre complet au survol, au bureau seulement (cachées sous 40rem) ; annexes : rien ;
  3. site 0.5.0, CHANGELOG ; `maintainer/site/structure.md` (en-tête de la page Concept) ; build, vérification au bureau et à 375 px, PR, merge, redéploiement.
- **Fini quand** : sur l'aperçu, chaque concept de la page Domaines a son bouton « Lire » à droite, plié comme déplié ; une page de concept n'a plus précédent / suivant dans l'en-tête, mais les a en bas de page et, au bureau, dans la barre d'onglets.
