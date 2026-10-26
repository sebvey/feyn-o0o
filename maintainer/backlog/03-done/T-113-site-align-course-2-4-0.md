# T-113 : Aligner le site sur le cours 2.4.0

- **Créé le** : 2026-10-26
- **Constat** : le cours publie la version 2.4.0 (T-109 et sa boucle : concepts 3, 7, 10, 12) ;
  le site est aligné sur 2.3.1. Demande du mainteneur : merge, publication, puis PR du site.
- **À faire** (`maintainer/site/procedure.md`) : relire chaque fiche changée contre sa page,
  reporter ce qui touche les parties publiques, inscrire les empreintes ; `coursVersion` 2.4.0,
  version du site et journal ; `npm run verify` ; aperçu local laissé ouvert.
- **Fini quand** : `check-alignment` ne signale aucun écart, `verify` passe, le mainteneur a
  l'aperçu local.
- **Fait le** : 2026-10-26, site 2.2.2 aligné sur le cours 2.4.0 (sebvey/parcours-po-website#23) : aucune page changée (banque d'exemples seulement) ; empreintes ; `check-alignment` sans écart, `verify` passe ; aperçu local laissé ouvert ; non mergé, non déployé.
