# T-099 : Aligner le site sur le cours 2.2.0

- **Créé le** : 2026-10-26
- **Constat** : le cours publie la version 2.2.0 (2026-10-26) ; le site est aligné sur 2.1.0.
  `npm run check-alignment` signale les 20 pages de concept (fiches changées depuis 2.1.0 : taught
  check, questions en parties, 0a1 et 0a2 détaillés, T-084). Le glossaire (« Élément du
  backlog » aux concepts 0 et 3) a changé ; les fiches de domaine, non. Le journal du site garde
  la version 2.0.0, déployée le 2026-10-26, sous « Non publié ». Demande du mainteneur : aligner
  le site en autonomie jusqu'à la revue en local.
- **À faire** (`maintainer/site/procedure.md`, README du site « Le site et le cours ») :
  1. pour chaque page de concept, reporter le fond changé entre `course-v2.1.0` et
     `course-v2.2.0` dans les parties publiques (L'essentiel, Sous-concepts, Le test rapide,
     Pièges, « Explication » des cas, Consensus et choix d'école, sources), puis inscrire les
     empreintes ;
  2. `src/data/glossaire.ts` et `src/data/domaines.ts` relus contre `glossary.md` et `plan.md` ;
  3. version du site 2.1.0, `coursVersion` 2.2.0, journal du site (2.0.0 daté) ;
  4. `npm run verify`, aperçu local laissé ouvert pour la revue du mainteneur ; pas de merge ni
     de déploiement sans sa demande.
- **Fini quand** : `check-alignment` ne signale aucun écart, `verify` passe, le mainteneur a
  l'aperçu local.
