# T-119 : Porter la mention du cours accompagné dans le pied de page du site

- **Créé le** : 2026-10-27
- **Constat** : chaque page de domaine et de concept finit par « Ce site accompagne un cours
  donné par un agent IA : voir À propos. », juste au-dessus d'un pied de page qui répète le nom
  du site (capture du mainteneur).
- **À faire** : dans `../parcours-po-website`, retirer la phrase des pages de domaine et de
  concept ; pied de page : à gauche « Ce site accompagne un cours donné par un agent IA · À
  propos », à droite, plus discret, « © Sébastien Vey, CC BY 4.0 · site X · cours Y » ; le nom
  du site sort du pied de page ; les deux zones s'empilent sur mobile.
- **Fini quand** : `npm run verify` passe, le pied de page s'affiche ainsi au bureau et à
  375 px, et la phrase n'apparaît plus en bas des pages de domaine et de concept.
