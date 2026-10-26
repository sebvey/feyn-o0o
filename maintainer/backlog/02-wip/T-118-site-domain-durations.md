# T-118 : Afficher la durée de conversation avec l'agent sur le site

- **Créé le** : 2026-10-26
- **Dépend de** : T-117
- **Constat** : maquette validée par le mainteneur en session de maintenance : badge en forme de
  bulle de dialogue, libellé « ≈ 1 h 30 avec l'agent ».
- **À faire** : dans `../parcours-po-website`, reprendre `duree` des fiches de domaine dans
  `src/data/domaines.ts` ; page Domaines : badge bulle sur chaque bloc de domaine et, en tête, la
  barre du parcours (sept segments en bulle, longueur proportionnelle à la durée, cliquables vers
  le domaine, total au bout) ; page d'un domaine : badge bulle sous le titre, avec le nombre de
  sessions et de concepts. Note sous la barre : « Durée indicative de conversation avec
  l'agent, sans les apartés. »
- **Fini quand** : `npm run verify` passe, les trois éléments s'affichent au bureau et à 375 px,
  en clair et en sombre.
