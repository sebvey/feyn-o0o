# T-057d : Donner au fil rouge et au glossaire une porte sur l'accueil

- **Créé le** : 2026-10-25
- **Parent** : T-057
- **Constat** : demande du mainteneur du 2026-10-25, après T-057c : sur l'accueil, le fil rouge et le glossaire doivent être présentés comme les deux portes au-dessus, un bouton et une description, et non par une phrase.
- **À faire** (dépôt `../parcours-po-website`, `src/pages/index.astro`) : dans « Par où commencer », la phrase « Les exemples s'appuient sur un cas inventé… » devient deux portes de plus, boutons secondaires : « Voir le fil rouge », « Le cas inventé sur lequel s'appuient les exemples : l'opérateur de vélos, l'équipe, les acteurs. » ; « Ouvrir le glossaire », « Le sens exact des termes du cours, et les termes à éviter. » ; site 0.2.2 (PATCH), CHANGELOG ; build, vérification au bureau et à 375 px, PR, merge, redéploiement de l'aperçu.
- **Fini quand** : l'aperçu en ligne montre quatre portes dans « Par où commencer », chacune un bouton et une description, sans la phrase.
