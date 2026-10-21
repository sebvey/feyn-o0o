# T-006 : Revoir les processus d'écriture de la mémoire (à affiner)

- **Créé le** : 2026-10-21
- **Constat** : demande du mainteneur, après le test par sous-agent de T-003. Les écritures de
  `learner/` sont réparties entre le fil de l'eau (`CLAUDE.md`, « Tenir la mémoire à jour ») et
  `update-memory`, lancé après le choix de l'apprenant au point de sauvegarde. Deux risques
  opposés :
  - trop écrire : écrire avant que le sujet soit vraiment clos par l'apprenant (statut, fiche,
    faits du fil rouge figés trop tôt, puis à corriger) ;
  - manquer des écritures : l'apprenant ferme la session sans le dire, ou elle coupe. Exemple
    observé : coupure entre la proposition des deux choix et la réponse, qui perd statut du
    concept, fiche, ligne de journal, faits du fil rouge et observation sur l'apprenant ; aucun
    rattrapage au démarrage.
- **À faire** : à affiner. Pistes relevées : lancer `update-memory` avant de proposer les deux
  choix ; contrôle de cohérence au démarrage (trace plus récente que le journal, concept validé
  dans la trace mais `en cours` au tableau) ; source du numéro de session. Les faits du fil
  rouge sont hors de ce ticket : le mainteneur les traitera avec les modèles de cours.
- **Fini quand** : à définir à l'affinage.
