# T-110 : Aligner le site sur le cours 2.3.0

- **Créé le** : 2026-10-26
- **Constat** : le cours publie la version 2.3.0 (T-106, avec la boucle d'ADR-078) ; le site est
  aligné sur 2.2.1. Demande du mainteneur : traiter la partie site, puis revenir vers lui pour la
  PR du site.
- **À faire** (`maintainer/site/procedure.md`) : relire chaque fiche changée contre sa page,
  reporter le fond changé dans les parties publiques (notamment I d'INVEST au concept 7, choix
  du cours), inscrire les empreintes ; `coursVersion` 2.3.0, version du site et journal ;
  `npm run verify` ; aperçu local laissé ouvert.
- **Fini quand** : `check-alignment` ne signale aucun écart, `verify` passe, le mainteneur a
  l'aperçu local.
- **Fait le** : 2026-10-26, site 2.2.0 aligné sur le cours 2.3.0 (sebvey/parcours-po-website#21) : page 7 (I d'INVEST, 7a1 et position du cours), autres pages inchangées ; empreintes ; `check-alignment` sans écart, `verify` passe ; aperçu local laissé ouvert ; non mergé, non déployé.
