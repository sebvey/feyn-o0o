# ADR-053 : Le prof renvoie l'apprenant aux pages du site, plus aux fichiers du cours

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-050g

## Contexte
À la validation d'un concept, le prof indiquait le fichier du cours à relire
(`course/concepts/NN-slug.md`), que l'apprenant n'a pas forcément sous les yeux. Le site du
cours passe en ligne en 2.0.0 (T-050g) : chaque concept et chaque domaine y a sa page, à une
adresse stable.

## Décision
L'adresse du site est écrite une fois, en tête de « La boucle du cours » de `CLAUDE.md`. Le prof
renvoie à la page du concept validé (`concepts/NN/`), donne le lien de la carte des domaines
(`domaines/`) au rappel de reprise, et finit la présentation d'un domaine par le lien vers sa
page (`domaines/N/`).

## Options écartées
- Le fichier du cours (ancienne règle) : l'apprenant lit le site, pas le dépôt.
- Une règle « les adresses finissent par une barre » : seul le serveur local refuse une adresse
  sans barre (`trailingSlash: 'always'`) ; GitHub Pages la redirige. Les formats donnés au prof
  portent la barre.
- Passer le site en `trailingSlash: 'ignore'` : ne sert qu'au local et relâche la cohérence des
  liens générés.

## Conséquences
Une page du site qui change d'adresse casse le renvoi du prof : c'est un MAJOR du cours et du
site (README du site, « Versions »).
