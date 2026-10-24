# T-050g : Mettre le site en ligne en v1.0.0 et décider du renvoi du prof

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Dépend de** : T-050d
- **Constat** : étape 6 de T-049. Le site ne doit être indexé et cité par le prof qu'après la relecture du mainteneur, l'alignement du cours (T-050a à T-050c), la documentation (T-050d, T-050e) et l'aperçu (T-050f).
- **À faire** :
  1. relecture du site par le mainteneur sur l'aperçu, remarques traitées dans `../parcours-po-website` ;
  2. versions alignées : MAJOR du site égal à MAJOR du cours, tag `v1.0.0` ;
  3. retirer `noindex`, publier `v1.0.0` ;
  4. adresses : le site répond 404 sans barre finale (`/concepts/00` ; `/concepts/00/` marche, `trailingSlash: 'always'`) ; décider avec le mainteneur de donner les adresses avec la barre ou d'ajouter une redirection ;
  5. comportement : proposer au mainteneur le texte de `CLAUDE.md` qui fait renvoyer le prof vers la page du concept (`/concepts/NN#…`) à la validation d'un concept, et appliquer celui qu'il fixe ;
  6. clore T-049.
- **Fini quand** : le site `1.0.0` est en ligne et indexable, le renvoi du prof est dans `CLAUDE.md` avec le texte validé et testé par un sous-agent (scénario de fin de concept), et T-049 est clos.
