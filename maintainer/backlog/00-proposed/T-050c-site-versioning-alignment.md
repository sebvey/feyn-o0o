# T-050c : Versionner le site et tracer l'alignement sur le cours

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Dépend de** : T-050b
- **Constat** : le site se réaligne à la main sur le cours, sans moyen de savoir quelles pages ont dérivé. Décisions du 2026-10-24 : le site est une projection du cours, versionné en `MAJOR.MINOR.PATCH` avec le MAJOR du cours, et il affiche la version du cours sur laquelle il est aligné. Travail dans `../parcours-po-website`.
- **À faire** :
  1. réaligner les passages généralisés par l'audit sur les fiches corrigées par T-050a ;
  2. frontmatter de chaque page de concept : version du cours et empreinte de la fiche dont elle dérive ;
  3. script `check-alignment` qui liste les pages dont la fiche a changé depuis l'empreinte ;
  4. `CHANGELOG.md` du site, version dans `package.json`, version du site et du cours dans le pied de page et dans À propos ;
  5. décrire la règle fond/forme et la règle de version dans le `README.md` (le détail pour l'agent va dans T-050d).
- **Fini quand** : `check-alignment` ne signale rien sur le site à jour et signale la page après une modification d'une fiche (testé sur une copie), le pied de page affiche les deux versions, et le build passe.
