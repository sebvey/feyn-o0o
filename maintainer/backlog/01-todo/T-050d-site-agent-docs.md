# T-050d : Documenter le dépôt du site pour un agent

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Dépend de** : T-056
- **Constat** : `../parcours-po-website` n'a ni `CLAUDE.md` ni documentation ; un agent neuf ne saurait ni réaligner le contenu, ni enrichir une page, ni retoucher la forme, ni maintenir le dépôt.
- **À faire** : dans `../parcours-po-website`, en français (noms de fichiers et de dossiers en anglais), chaque règle à un seul endroit :
  1. `CLAUDE.md` court : ce qu'est le site, la règle de fond (le cours est la source, le site en est la projection, la banque d'exemples n'y va jamais), la règle de forme, les commandes (`mise exec -- …`), les renvois vers les guides ;
  2. `docs/architecture.md` : collections de contenu, composants, schémas, pages transversales, données dérivées, middleware typographique ;
  3. `docs/editing.md` : format MDX et frontmatter, pastilles, ancres stables, style, ajout d'un schéma ;
  4. `docs/alignment.md` : procédure de réalignement avec `check-alignment`, quoi reprendre, quoi contrôler, règle de version ;
  5. `docs/maintenance.md` : build, `astro check`, Pagefind, déploiement, checklist qualité avant publication ;
  6. skill `.claude/skills/align-with-course/` : la procédure d'alignement.
- **Note** (T-066, 2026-10-25) : ce qui est propre au site est réuni dans `maintainer/site/` (`structure.md`, `procedure.md`, `adr/`) ; ce ticket le reprend dans le dépôt du site (`docs/maintenance.md` reprend `procedure.md`, les ADR du site y vont aussi) et `maintainer/site/` disparaît.
- **Scindé** (2026-10-25) : tout ce que T-056 ne change pas passe dans T-050j (contrôles, composants, carte des données, recettes, pièges, `CLAUDE.md`, README). Reste ici : `docs/alignment.md`, sa recette et le skill `align-with-course`.
- **Fini quand** : un sous-agent neuf, dans une copie du dépôt, réaligne une page après une modification d'une fiche du cours et ajoute un schéma en suivant seulement ces documents, sans autre consigne, et le build passe.
