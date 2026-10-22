# T-001 : Remplacer « tour » par « sous-concept » pour les découpages d'un concept

- **Créé le** : 2026-10-21
- **Constat** : en fin de concept, l'agent écrit « Le tour 9a est validé. Il reste le tour
  9b » (retour d'une session de cours, rapporté par le mainteneur). Le cadre emploie deux mots
  pour la même notion : « tours (ex. 1a, 1b) » dans `CLAUDE.md` l. 32, « sous-concept » au
  point de sauvegarde (`CLAUDE.md` l. 66) et dans `update-memory`. « Tour » sert aussi au sens
  de tour de conversation (`CLAUDE.md` l. 64, `course/mock-project/coulisses.md` l. 645).
- **À faire** : employer « sous-concept » pour 1a, 1b dans `CLAUDE.md` l. 32. Pour le sens
  conversationnel (`CLAUDE.md` l. 64, `coulisses.md` l. 645), garder « tour » ou le remplacer
  par « dans la même réponse ». `learner/parcours.md` n'est pas touché : il suivra aux
  prochaines sauvegardes.
- **Fini quand** : le cadre (`CLAUDE.md`, skills, `course/`) n'emploie plus « tour » pour
  désigner une partie d'un concept.
- **Fait le** : 2026-10-21, « sous-concepts (ex. 1a, 1b) » dans `CLAUDE.md` l. 32 ; « dans la
  même réponse » à la place de « dans le même tour » (`CLAUDE.md` l. 63-64, `coulisses.md`
  l. 645). Le cadre n'emploie plus « tour ».
