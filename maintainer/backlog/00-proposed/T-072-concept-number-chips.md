# T-072 : Passer en pastilles les numéros de concept du Fil rouge et du Glossaire

- **Créé le** : 2026-10-25
- **Constat** : la règle « Lien souligné » (`maintainer/site/structure.md`, Principes, posée en T-071b à la demande du mainteneur) interdit une série de liens soulignés. Deux pages du site (`../parcours-po-website`) en ont une : sur Fil rouge, la ligne « concepts où il est central » de chaque acteur (`src/pages/fil-rouge.astro`, numéros séparés par des virgules) ; sur Glossaire, les concepts de chaque terme (`src/pages/glossaire.astro`). La page Sources fait déjà ce qu'il faut, avec des pastilles `.chip` (`src/pages/sources.astro`).
- **À faire** (dépôt `../parcours-po-website`) : remplacer ces deux séries par les pastilles de la page Sources (même composant ou même classe, titre du concept en infobulle) ; PATCH du site ; `npm run verify` ; contrôle au navigateur au bureau et à 375 px.
- **Fini quand** : ni Fil rouge ni Glossaire n'affichent de série de numéros soulignés, et les pastilles mènent aux concepts.
