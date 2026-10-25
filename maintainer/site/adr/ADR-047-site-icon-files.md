# ADR-047 : Les icônes du site sont des fichiers SVG au trait, importés en composants

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-070

## Contexte
Après T-069, le favicon affiché devant le nom du site (bloc bleu plein, provisoire depuis le
squelette) détonnait avec la loupe et le soleil / la lune, dessinés au trait. Ces icônes étaient
écrites en SVG dans `src/layouts/Base.astro` : le mainteneur ne pouvait ni les voir ni comparer
leur style.

## Décision
- Une icône par fichier dans `src/icons/` du site, importée comme composant (import SVG
  d'Astro) : la page construite garde le SVG en ligne, à la couleur du texte, sans requête.
- Règles de dessin écrites dans `src/icons/README.md` du site : cadre 24 × 24, trait de 2 px,
  `currentColor`, sans remplissage. Toutes les icônes sont rendues sur `/dev/composants/`.
- Marque du site : un backlog, trois cartes au trait rangées par priorité ; `public/favicon.svg`
  en reprend le dessin.

## Options écartées
- `<img src="icone.svg">` : l'image ne voit pas la couleur du texte et ne suit plus le thème.
- Garder le SVG écrit dans les pages : les icônes ne se voient ni ne se comparent.
- Autres marques proposées : trois traits (lu comme un menu ou « aligner à gauche »), trois
  barres pleines au trait (peu parlantes), un cylindre de données (dit « data » plus que « PO »),
  des barres décroissantes (lues comme une baisse).

## Conséquences
Aucune sur le cours. Une nouvelle icône va dans `src/icons/` et suit ses règles.
