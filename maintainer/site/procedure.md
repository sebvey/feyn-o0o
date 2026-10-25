# Traiter un ticket du site

Complète le skill `maintenance` pour un ticket qui touche le site : dépôt `../parcours-po-website`
(`sebvey/parcours-po-website`), projection de `course/` (README du site, « Le site et le cours »).
Commandes du site : `mise -C ../parcours-po-website exec -- <commande>`.

## Avant de changer

- Lis `structure.md` et les ADR de `adr/` qui touchent la même page.
- Une remarque sur un texte du site qui porte sur le fond (fait du fil rouge, définition,
  exemple, source) : trouve sa source dans `course/` et vérifie-la. Si le cours pèche, corrige-le
  dans le même ticket, puis le site.
- Un texte public propre au site (accueil, À propos, chapeau de page) : propose-le mot pour mot
  au mainteneur et attends sa validation. La mise en page et les composants se décident seuls.

## Tester

1. `npm run build` : types, pages, index Pagefind.
2. Sers `dist/` en tâche de fond : `npx astro preview --port <port libre>`. Un aperçu déjà lancé
   sert peut-être un ancien build : arrête-le.
3. Dans le navigateur intégré, chaque page touchée, au bureau puis à 375 px, en clair puis en
   sombre : rendu, aucun défilement horizontal, interactions (sommaire, dépliables, filtres,
   ancres, bouton de thème).
4. Remets le navigateur au bureau, arrête l'aperçu.

Pièges du navigateur intégré :
- panneau masqué : `requestAnimationFrame` ne tourne pas, un code qui en dépend paraît cassé ;
  teste panneau affiché, ou appelle la fonction par script ;
- cache : après un nouveau build, ajoute `?v=N` à l'adresse ;
- clic par `ref` : l'outil fait d'abord défiler l'élément ; pour mesurer une position après un
  clic, clique par coordonnées ou par script.

## Clore et publier

- Version du site dans `package.json` et son `CHANGELOG.md`, selon « Versions » du README du
  site ; README à jour si la structure change ; `structure.md` à jour si une page change de rôle.
- PR sur `sebvey/parcours-po-website` (squash), en plus de la PR du ticket sur ce dépôt ; la
  description du skill (§3, étape 6) va dans celle-ci, celle du site y renvoie.
- Redéploie seulement si le mainteneur l'a demandé, après le merge :
  `gh workflow run deploy.yml --ref main -R sebvey/parcours-po-website`, puis
  `gh run watch <id> --exit-status -R sebvey/parcours-po-website`. Vérifie en ligne
  (https://sebvey.github.io/parcours-po-website/) la version du pied de page et le changement.
- Dans la PR, « non vérifié » nomme au moins Safari, Firefox et les lecteurs d'écran.
