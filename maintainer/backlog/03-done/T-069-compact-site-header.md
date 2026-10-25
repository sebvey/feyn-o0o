# T-069 : Tenir l'en-tête du site sur une ligne

- **Créé le** : 2026-10-25
- **Constat** : demande du mainteneur (session du 2026-10-25), avant la mise en ligne : au
  bureau, le champ de recherche de l'en-tête prend trop de place, et la recherche et le bouton
  de thème passent sur une deuxième ligne.
- **Décisions du mainteneur** :
  - la recherche devient un bouton rond à loupe, du même style que le bouton de thème, qui
    ouvre la page Recherche ; au téléphone aussi, à côté de « Menu » ;
  - « À propos » quitte le menu pour le pied de page (option écartée : un bouton rond « i »,
    jugé moins lisible qu'un lien) ;
  - « Accueil » quitte le menu : le nom du site y mène déjà ; le favicon s'affiche devant le
    nom, dans le même lien (option écartée : une icône « maison », doublon du lien du nom).
- **À faire** : dans `../parcours-po-website`, `src/layouts/Base.astro` et
  `src/styles/global.css` : ordre nom | liens | loupe | thème sur une ligne au bureau ; seuil
  du menu replié ajusté pour qu'aucune largeur ne repasse sur deux lignes ; champ de recherche
  et lien texte « Recherche » retirés ; lien « À propos » dans le pied de page.
- **Fini quand** : au bureau, de la largeur du seuil jusqu'au plus large, l'en-tête tient sur
  une ligne ; à 375 px, loupe, thème et Menu sont visibles ; la loupe mène à la recherche avec
  le champ actif ; À propos est atteint depuis le pied de page ; `npm run verify` passe ; clair
  et sombre vérifiés.
- **Fait le** : 2026-10-25, en-tête sur une ligne dès 58rem (loupe ronde, favicon devant le nom, À propos au pied de page), focus du champ de recherche réparé, site 0.9.0 ; `npm run verify` passe, navigateur testé à 1400, 928, 927, 600 et 375 px, clair et sombre.
