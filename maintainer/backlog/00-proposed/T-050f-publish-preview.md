# T-050f : Publier l'aperçu v0.1.0 du site

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Constat** : le site n'est visible qu'en local ; le mainteneur doit le relire sur une vraie adresse, sur téléphone et dans d'autres navigateurs. Décisions du 2026-10-24 : dépôt `sebvey/parcours-po-website`, publication en deux temps (aperçu `noindex`, puis `v1.0.0`), code en MIT et contenu en CC BY 4.0. Création et push sont publics : accord explicite du mainteneur juste avant l'exécution.
- **À faire** :
  1. contrôles : chercher dans l'historique du site des secrets, des données d'apprenant et des chemins locaux ; écrire le vrai `LICENSE` (MIT pour le code, CC BY 4.0 pour le contenu) ;
  2. ajouter `noindex` (balise et `robots.txt`) tant que la version est `0.x` ; poser la version `0.1.0` ;
  3. après accord : `gh repo create sebvey/parcours-po-website --public`, push de `main`, tag `v0.1.0`, GitHub Pages par le workflow (déclenchement manuel, `SITE_URL` et `BASE_PATH`) ;
  4. vérifier le site en ligne : liens, ancres, recherche, thème sombre.
- **Fini quand** : le site répond à `https://sebvey.github.io/parcours-po-website/`, `noindex` est présent, la recherche et les ancres fonctionnent en ligne, et le mainteneur a l'adresse.
