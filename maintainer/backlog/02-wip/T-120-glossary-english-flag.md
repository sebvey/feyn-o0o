# T-120 : Signaler le terme anglais du glossaire par un drapeau

- **Créé le** : 2026-10-27
- **Constat** : dans le glossaire du site, chaque terme porte l'étiquette « En anglais » avant
  son équivalent anglais (« Partie prenante / En anglais stakeholder »). Le mainteneur veut un
  petit drapeau britannique à la place ; maquette validée : drapeau rond, couleurs vives (bleu
  #0052B4, rouge #D80027).
- **À faire** : dans `../parcours-po-website`, dessiner le drapeau en SVG dans `src/icons/`
  (exception aux règles de dessin des icônes, documentée dans leur README : couleurs écrites),
  et remplacer l'étiquette « En anglais » de `src/pages/glossaire.astro` par le drapeau, avec
  « En anglais » gardé pour les lecteurs d'écran.
- **Fini quand** : `npm run verify` passe, le drapeau s'affiche devant chaque terme anglais au
  bureau et à 375 px, en clair et en sombre.
