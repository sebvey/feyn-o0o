# T-111 : Aligner le site sur le cours 2.3.1

- **Créé le** : 2026-10-26
- **Constat** : le cours publie la version 2.3.1 (T-104, renvois des fiches de sources 7, 8 et
  13) ; le site est aligné sur 2.3.0 et reprend ces fiches dans ses onglets École et Sources.
  Demande du mainteneur : aligner le site et revenir vers lui avec sa PR et l'aperçu local.
- **À faire** (`maintainer/site/procedure.md`) : reporter les renvois changés dans les pages 7, 8
  et 13 s'ils y figurent ; inscrire les empreintes ; `coursVersion` 2.3.1, version du site et
  journal ; `npm run verify` ; aperçu local laissé ouvert.
- **Fini quand** : `check-alignment` ne signale aucun écart, `verify` passe, le mainteneur a
  l'aperçu local.
