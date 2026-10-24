# T-050e : Documenter la fabrication du site

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Constat** : la première version a été produite par des agents et sous-agents en parallèle, avec des audits ; rien ne l'explique. Les faits (agents, consignes, chiffres des audits) sont dans la transcription de la session du 2026-10-24 (`/Users/sve/.claude/projects/-Users-sve-code-workspaces-perso-pdx-parcours-po/9b828dee-e4b7-4ee2-bf4d-be7240a7ea63.jsonl`). Travail dans `../parcours-po-website`.
- **À faire** : un sous-agent dépouille la transcription et rend un brouillon factuel ; écrire `docs/construction.md`, qui se suffit à lui-même (le dépôt est public), avec :
  1. le flux global en Mermaid (cours, interview et structure, concept témoin validé, 19 concepts en parallèle, pages transversales, fusion, audits, corrections, version 1) ;
  2. les agents et sous-agents (Mermaid et tableau : rôle, entrées, sorties, isolation par worktree), avec leurs consignes clés et non les prompts entiers ;
  3. la méthode de qualité : témoin relu avant déroulement, audits (fuite de la banque, attributions des écoles et des sources, typographie, liens et ancres), build et `astro check`, avec les corrections de chaque audit en chiffres ;
  4. les limites : ce qui n'a pas été vérifié, et que le mainteneur n'a relu que le témoin ;
  5. une ligne et un lien depuis la page À propos.
- **Fini quand** : `docs/construction.md` existe avec les diagrammes Mermaid qui s'affichent sur GitHub, chaque chiffre se retrouve dans la transcription, et la page À propos y renvoie.
