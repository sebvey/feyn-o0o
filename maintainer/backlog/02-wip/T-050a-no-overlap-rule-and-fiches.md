# T-050a : Poser la règle de non-recoupement et reprendre les fiches

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Constat** : les sections des fiches qui servent de matière au site (L'essentiel, sous-concepts, schéma) réutilisent parfois la situation d'un exercice de la banque. Cas relevé : `course/concepts/09-decoupage-vertical.md` et `course/sources/09-decoupage-vertical.md` expliquent 9b avec « Prévoir les stations à risque », qui est aussi l'exercice 9b1 et 9b2 ; les fiches 02 et 04 recoupent de même leur banque. Le site a dû généraliser une quarantaine de passages (commit 22cc280 du site pour le 9b). Expliquer avec le cas qu'on teste ensuite fait mesurer la mémoire plutôt que la compréhension.
- **À faire** :
  1. comportement (le mainteneur décide du texte) : proposer la règle « le texte qui explique (L'essentiel, sous-concepts, schéma) n'utilise pas la situation d'un exercice de la banque » dans `course/templates/concept.md` et dans le skill `course-lot` ;
  2. contenu (en autonomie) : auditer les 20 fiches avec ce critère et reprendre 09, 02, 04 et les autres cas, sur le modèle des généralisations déjà faites dans le site (liste dans l'historique du site) ;
  3. trancher les passages que l'audit du site a laissés ouverts : cinq principes retirés des pages (par exemple « pourquoi une seule personne »), 14c, 16a2, 16c2, 9a2 et le libellé du parcours « J'ordonne mon backlog » ;
  4. Branche et PR, avec le test de reprise du cours (`maintenance`, §5).
- **Fini quand** : aucune fiche n'explique avec le cas de son propre exercice, la règle est dans le gabarit et dans `course-lot`, et les passages ouverts sont tranchés dans la PR.
