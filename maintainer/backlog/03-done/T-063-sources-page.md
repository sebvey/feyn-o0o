# T-063 : Réorganiser la page Sources autour des sources piliers et des concepts

- **Créé le** : 2026-10-25
- **Constat** : retour du mainteneur du 2026-10-25 : la page Sources « n'est pas magique ». Diagnostic : 143 références à plat par ordre alphabétique, puis 134 points « non vérifié » à plat ; 121 des 143 sources ne sont citées que par un concept (la liste reprend en vrac les onglets Sources) ; seules quelques sources portent le cours (Scrum Guide 2020 cité par 19 concepts) ; les étiquettes primaire, secondaire, marketing ne sont expliquées nulle part (leurs définitions sont dans `course/templates/sources.md`).
- **À faire** (dépôt `../parcours-po-website`, `src/pages/sources.astro`, `src/lib/transversal.ts` si besoin, styles) :
  1. sommaire collant commun (composant `Sommaire`) : Sur quoi repose le cours, Lire une source, Concept par concept ;
  2. « Sur quoi repose le cours » : les sources citées par au moins 3 concepts (7 aujourd'hui), chacune avec les concepts qu'elle appuie ;
  3. « Lire une source » : la légende primaire, secondaire, marketing, reprise de `course/templates/sources.md` ;
  4. « Concept par concept » : groupé par domaine (et annexes), chaque concept dépliable (comme la page Domaines) ; déplié, ses sources (numéro [S1]…, référence, type) et ses points non vérifiés ; bouton « Lire » vers l'onglet Sources du concept ;
  5. un champ de filtre (auteur, titre, adresse, « concept 9 ») qui cherche dans toutes les sources, déplie les concepts qui ont un résultat et masque les autres ; la barre de lettres A–Z et la liste alphabétique disparaissent ;
  6. site 0.6.0, CHANGELOG ; `maintainer/site/structure.md` (ligne Sources) ; build, vérification au bureau et à 375 px, PR, merge, redéploiement.
- **Fini quand** : l'aperçu en ligne montre la page Sources en trois sections avec le sommaire collant, les 7 sources piliers, la légende, les 20 concepts dépliables avec leurs sources et leurs points non vérifiés, et le filtre qui fonctionne.
- **Fait le** : 2026-10-25, page Sources en trois sections avec le sommaire collant (7 sources piliers, légende, 20 concepts dépliables par domaine avec références et non vérifié, filtre) ; liste alphabétique et barre de lettres retirées ; site 0.6.0 (sebvey/parcours-po-website#9, mergée) ; vérifié au bureau et à 375 px ; aperçu redéployé.
