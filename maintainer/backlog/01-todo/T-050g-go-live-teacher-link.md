# T-050g : Mettre le site en ligne en v2.0.0 et décider du renvoi du prof

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Dépend de** : T-050j
- **Constat** : étape 6 de T-049. Le site ne doit être indexé et cité par le prof qu'après la relecture du mainteneur, l'alignement du cours (T-050a à T-050c), la documentation (T-050d, T-050e) et l'aperçu (T-050f, fait). Il ne dépend plus de T-056 (décision du mainteneur du 2026-10-25, scission de T-050d) : la mise en ligne se fait avec l'organisation actuelle.
- **À faire** :
  1. relecture du site par le mainteneur sur l'aperçu, remarques traitées dans `../parcours-po-website` ;
  2. versions alignées : MAJOR du site égal à MAJOR du cours (2 depuis T-057a, qui a remplacé les objectifs par des domaines), tag `v2.0.0` ;
  3. retirer `noindex`, publier `v2.0.0` ;
  4. adresses : en local, `/concepts/00` répond 404 (`trailingSlash: 'always'`) ; sur GitHub Pages, `/concepts/00` redirige vers `/concepts/00/` (vérifié le 2026-10-24) ; donner au prof les adresses avec la barre finale ;
  5. comportement : proposer au mainteneur le texte de `CLAUDE.md` qui fait renvoyer le prof vers la page du concept (`/concepts/NN#…`) à la validation d'un concept, et appliquer celui qu'il fixe ; ajouter au premier message de reprise (le choix entre continuer et creuser un domaine ou un concept, ADR-040) le lien vers la présentation des domaines (`/domaines/`) ;
  6. clore T-049.
- **Fini quand** : le site `2.0.0` est en ligne et indexable, le renvoi du prof est dans `CLAUDE.md` avec le texte validé et testé par un sous-agent (scénario de fin de concept), et T-049 est clos.
