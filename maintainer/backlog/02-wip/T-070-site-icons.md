# T-070 : Ranger les icônes du site en fichiers et dessiner sa marque

- **Créé le** : 2026-10-25
- **Constat** : demande du mainteneur (session du 2026-10-25, après T-069) : le favicon affiché
  devant le nom du site (bloc bleu plein, provisoire depuis le squelette du site) détonne avec
  la loupe et le soleil / la lune (trait de 2 px, `currentColor`, sans remplissage) ; les icônes
  sont écrites en SVG dans `src/layouts/Base.astro`, où on ne peut ni les voir ni comparer leur
  style.
- **Décisions du mainteneur** :
  - un fichier par icône, injecté inline au build (import SVG d'Astro), pour garder
    `currentColor` et zéro requête ; option écartée : `<img src>`, qui perd la couleur du thème ;
  - une marque redessinée dans le style des autres icônes, et le favicon assorti ; le mainteneur
    choisit parmi deux ou trois dessins.
- **À faire** : dans `../parcours-po-website` : `src/icons/` (loupe, soleil, lune, marque), avec
  les règles de style des icônes écrites une fois ; `Base.astro` les importe ; rubrique
  « Icônes » sur `/dev/composants/` ; `public/favicon.svg` redessiné d'après la marque.
- **Fini quand** : aucune icône n'est écrite en SVG dans une page ou un layout ; `/dev/composants/`
  montre toutes les icônes côte à côte ; la marque suit les règles de style ; la page construite
  garde des SVG inline ; `npm run verify` passe ; clair et sombre vérifiés.
