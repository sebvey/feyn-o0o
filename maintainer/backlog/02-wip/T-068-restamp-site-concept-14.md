# T-068 : Réinscrire les empreintes du concept 14 sur le site

- **Créé le** : 2026-10-25
- **Constat** : pendant T-050j, `npm run check-alignment` (avertissement de `npm run verify` sur le site) signale `14-parties-prenantes : la fiche course/sources/14-parties-prenantes.md a changé`. Le seul changement depuis l'empreinte est T-061 (#43) : un renvoi interne de la fiche de sources passe de « L'entreprise » à « L'opérateur » (section renommée de `course/fil-rouge-velos.md`). La page du site ne cite pas cette section : rien n'est à réaligner. Effet : l'avertissement reste affiché à chaque `verify`, et cache un vrai écart à venir.
- **À faire** : dans `../parcours-po-website`, relire la page 14 contre la fiche de sources pour confirmer qu'aucun fond ne change, puis `npm run check-alignment -- --stamp 14` ; site en PATCH, CHANGELOG ; PR du site.
- **Fini quand** : `npm run check-alignment` ne signale plus d'écart.
