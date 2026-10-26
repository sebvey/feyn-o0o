# T-107 : Aligner le site sur le cours 2.2.1

- **Créé le** : 2026-10-26
- **Constat** : le cours publie la version 2.2.1 (T-100, consignes de schéma retirées) ; le
  site est aligné sur 2.2.0. `npm run check-alignment` signale 11 pages de concept (0, 4, 6, 7,
  8, 9, 11, 13, 14, 17, A2). Demande du mainteneur : traiter la partie site, puis revenir vers lui
  quand la PR est prête et le site testable en local.
- **À faire** (`maintainer/site/procedure.md`) : relire chaque fiche changée contre sa page ;
  reporter ce qui touche les parties publiques (les changements portent sur des consignes au prof
  et sur « Ce qui marche », hors du site) ; inscrire les empreintes ; `coursVersion` 2.2.1,
  version du site et journal ; `npm run verify` ; aperçu local laissé ouvert.
- **Fini quand** : `check-alignment` ne signale aucun écart, `verify` passe, le mainteneur a
  l'aperçu local.
