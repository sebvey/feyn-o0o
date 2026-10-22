# T-014 : Retirer la section « Dans le TP » des fiches

- **Créé le** : 2026-10-21
- **Constat** : demande du mainteneur. Les fiches portent une section « Dans le TP » (« Rempli
  pendant le TP »), vide partout ; le format d'une fiche doit être indépendant du moment où on la
  remplit (cours, TP, révision, quiz).
- **À faire** : `course/templates/fiche.md` : retirer « Dans le TP », élargir « Sur un exemple »
  à un ou deux exemples, de préférence produits par l'apprenant (cours, TP, révision). Retirer
  la section vide des fiches de `learner/cards/`.
- **Fini quand** : le modèle et les fiches n'ont plus de section liée à un moment du parcours.
- **Fait le** : 2026-10-21, modèle modifié, section retirée des 10 fiches qui la portaient
  (écriture dans `learner/` validée par le mainteneur). Pas de test par sous-agent (section
  vide, aucune procédure changée). Pas d'ADR (question 2 : pas d'autre option crédible).
