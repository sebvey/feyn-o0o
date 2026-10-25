# ADR-046 : L'en-tête du site tient sur une ligne, avec deux boutons ronds

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-069

## Contexte
Au bureau, l'en-tête alignait le nom du site, sept liens, un champ de recherche et le bouton de
thème : la recherche et le thème passaient sur une deuxième ligne. Le mainteneur a voulu un
en-tête sur une ligne avant la mise en ligne.

## Décision
- La recherche est un bouton rond à loupe, du style du bouton de thème, qui ouvre la page
  Recherche (champ actif à l'arrivée) ; au téléphone, à côté de Menu.
- « Accueil » quitte le menu : le nom du site, précédé du favicon dans le même lien, y mène.
- « À propos » est un lien du pied de page.
- Le menu replié prend le relais sous la largeur de l'en-tête sur une ligne (58rem).

Écrit dans `src/layouts/Base.astro` et `src/styles/global.css` du site ; seuil et ordre dans
`docs/pitfalls.md` du site.

## Options écartées
- Un bouton rond « i » pour À propos : une icône moins lisible qu'une loupe ou une lune, pour
  une page qui porte la confiance (cours donné par un agent IA, licence).
- Une icône « maison » à côté du nom : doublon du lien du nom, et style d'application.
- Garder le champ de recherche dans l'en-tête : c'est lui qui faisait passer à la ligne.

## Conséquences
Aucune sur le cours. Un lien de plus dans le menu oblige à remesurer le seuil.
