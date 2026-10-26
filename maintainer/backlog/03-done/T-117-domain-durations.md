# T-117 : Donner une durée indicative à chaque domaine

- **Créé le** : 2026-10-26
- **Constat** : le mainteneur veut afficher sur le site le temps de conversation avec l'agent par
  domaine. Estimation basse faite en session de maintenance (cas de la banque × 3,5 min),
  calée sur le domaine 1 joué par le mainteneur (1 h 30).
- **À faire** : ajouter au frontmatter de chaque fiche de `course/domains/` la clé `duree`
  (minutes, estimation basse de conversation avec l'agent, sans les apartés), et la documenter
  dans `course/templates/domain.md`. Valeurs : 90, 120, 55, 25, 40, 50, 25. Inscrire le
  changement en MINOR sous « Non publié » de `course/CHANGELOG.md`.
- **Fini quand** : les sept fiches portent `duree`, le modèle la décrit, `course/map.md`
  inchangé après `build-map.sh`.
- **Fait le** : 2026-10-26, `duree` ajoutée aux sept fiches et au modèle, CHANGELOG en MINOR ; `course/map.md` inchangé.
