# T-057c : Refaire l'accueil autour de deux portes

- **Créé le** : 2026-10-25
- **Parent** : T-057
- **Constat** : discussion du 2026-10-25 avec le mainteneur sur l'accueil du site (après T-057b). « Chaque concept a la même forme : on l'apprend une fois » : la seconde moitié ne sert à rien et ne se comprend pas du premier coup. « Par où commencer » répète en prose les deux boutons du haut de page, et vient après « Comment lire une page ».
- **À faire** (dépôt `../parcours-po-website`, `src/pages/index.astro` et styles) :
  1. les deux boutons quittent le haut de page ; « Par où commencer » vient juste après le chapeau, en deux portes, chacune un bouton et une ligne : « Commencer : concept 0 », « Le cours se lit dans l'ordre, concept par concept, du 0 au 17. » ; « Voir les sept domaines », « Ce qu'on sait faire à la fin de chaque domaine, et une lecture rapide pour creuser un sujet. » ; puis « Les exemples s'appuient sur un cas inventé, le fil rouge ; le glossaire donne le sens exact des termes. » (liens sur « fil rouge » et « glossaire ») ;
  2. « Comment lire une page » vient ensuite ; sa première phrase devient « Chaque concept suit la même forme, en trois onglets : **Comprendre** (…), **Consensus ou école** (…) et **Sources** (…). », parenthèses inchangées ;
  3. CHANGELOG du site (PATCH, 0.2.1), build, vérification au bureau et à 375 px, PR, merge et redéploiement de l'aperçu.
- **Fini quand** : l'aperçu en ligne montre l'accueil dans l'ordre chapeau, « Par où commencer » (deux portes), « Comment lire une page » (phrase corrigée), sans boutons en haut de page.
- **Fait le** : 2026-10-25, accueil en deux portes dans « Par où commencer », placé avant « Comment lire une page » dont la première phrase est simplifiée ; site 0.2.1 (sebvey/parcours-po-website#2, mergée) ; build sans erreur, contrôle au navigateur au bureau et à 375 px ; aperçu redéployé.
