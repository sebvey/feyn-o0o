# T-113 : Aligner le site sur le cours 2.4.1

- **Créé le** : 2026-10-26
- **Constat** : le cours publie les versions 2.4.0 (T-109 et sa boucle : concepts 3, 7, 10, 12)
  et 2.4.1 (T-112 : concepts 8, 9, 14, 17) ;
  le site est aligné sur 2.3.1. Demande du mainteneur : merge, publication, puis PR du site.
- **À faire** (`maintainer/site/procedure.md`) : relire chaque fiche changée contre sa page,
  reporter ce qui touche les parties publiques, inscrire les empreintes ; `coursVersion` 2.4.1,
  version du site et journal ; `npm run verify` ; aperçu local laissé ouvert.
- **Fini quand** : `check-alignment` ne signale aucun écart, `verify` passe, le mainteneur a
  l'aperçu local.
- **Fait le** : 2026-10-26, site 2.3.0 aligné sur le cours 2.4.1 (sebvey/parcours-po-website#23) : page 9 (9b1, un besoin trop gros est un epic), autres pages inchangées (banque d'exemples seulement) ; empreintes ; `check-alignment` sans écart, `verify` passe ; aperçu local laissé ouvert ; non mergé, non déployé.
