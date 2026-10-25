# Traiter un ticket du site

Complète le skill `maintenance` pour un ticket qui touche le site : dépôt `../parcours-po-website`
(`sebvey/parcours-po-website`), projection de `course/` (README du site, « Le site et le cours »).
Commandes du site : `mise -C ../parcours-po-website exec -- <commande>`.

## Avant de changer

- Lis `structure.md` et les ADR de `adr/` qui touchent la même page.
- Une remarque sur un texte du site qui porte sur le fond (fait du fil rouge, définition,
  exemple, source) : trouve sa source dans `course/` et vérifie-la. Si le cours pèche, corrige-le
  dans le même ticket, puis le site.
- Un texte public propre au site (accueil, À propos, chapeau de page, accroche) : écris-le, puis
  liste-le mot pour mot dans la PR ; le mainteneur le juge sur l'aperçu local, que tu laisses
  ouvert, et ses remarques se traitent sur la branche. La mise en page et les composants se
  décident seuls.

## Tester

1. `npm run verify` (README du site, « Vérifier ») : il doit passer. Regarde les captures des pages
   touchées dans `.verify/captures/`.
2. Si le ticket touche une interaction (sommaire, dépliables, filtres, ancres, onglets, bouton de
   thème), que `verify` ne teste pas : `npm run build`, sers `dist/` en tâche de fond
   (`npx astro preview --port <port libre>`), et teste-la dans le navigateur intégré au bureau
   puis à 375 px, selon « Tester dans le navigateur intégré d'un agent » de `docs/pitfalls.md` du
   site. Remets ensuite le navigateur au bureau et arrête l'aperçu.

## Clore et publier

- Version du site dans `package.json` et son `CHANGELOG.md`, selon « Versions » du README du
  site ; README et `docs/` du site à jour si la structure, une recette ou un piège change ; `structure.md` à jour si une page change de rôle.
- PR sur `sebvey/parcours-po-website` (squash), en plus de la PR du ticket sur ce dépôt ; la
  description du skill (§3, étape 6) va dans celle-ci, celle du site y renvoie.
- Redéploie seulement si le mainteneur l'a demandé, après le merge, selon « Publier une
  version » de `docs/recipes.md` du site.
- Dans la PR, « non vérifié » nomme au moins Safari, Firefox et les lecteurs d'écran.
