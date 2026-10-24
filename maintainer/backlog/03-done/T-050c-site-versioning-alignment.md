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
- **Fait le** : 2026-10-24, dans `../parcours-po-website` (branche `ticket/T-050c-site-versioning-alignment`, fusionnée dans son `main`, commit 9d229c6). Les 20 pages sont réalignées sur les fiches 1.0.0 (audit par 4 groupes de concepts, constats vérifiés avant application) ; frontmatter `alignement` (version, sha256 des fiches concept et sources) ; `npm run check-alignment` ; `CHANGELOG.md`, version 0.1.0, versions dans le pied de page et À propos ; règles fond/forme et version dans le `README.md`. Test : sur le site à jour, `check-alignment` ne signale rien (code 0) ; sur une copie du cours dont une fiche concept et une fiche sources sont modifiées et une fiche supprimée, il signale les trois pages (code 1) ; le build passe. Écarts non résolus (contenu du site absent des fiches, désaccords entre fiches) : liste dans le `CHANGELOG.md` du site, à traiter par le cours.
