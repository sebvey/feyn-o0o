# T-071b : Insérer une page par domaine dans la lecture du site

- **Créé le** : 2026-10-25
- **Parent** : T-071
- **Dépend de** : T-071a
- **Constat** : voir T-071. L'accueil fait commencer par le concept 0 ; précédent et suivant d'une page de concept vont de concept en concept, sans passer par le domaine ; `/domaines/` porte à la fois la carte et la liste des sous-concepts.
- **À faire** (dépôt `../parcours-po-website`, jusqu'à la PR et l'aperçu local, demande du mainteneur) :
  1. une page par domaine, `/domaines/N/`, projection de `course/domains/N-<slug>.md` : en-tête (numéro, titre, « à la fin, vous savez » de `course/plan.md`), le corps de la fiche, puis les concepts du domaine dépliables sur leurs sous-concepts (la liste quitte `/domaines/`) ; frontmatter `alignement` avec l'empreinte de la fiche de domaine, et `check-alignment` étendu aux fiches de domaine ;
  2. `/domaines/` devient la carte : les sept domaines (numéro, titre, « on sait faire », concepts) qui renvoient chacun à sa page, puis les annexes avec leur liste ; les ancres `#domaine-N` (et `#domaine-N-lecture`) mènent à `/domaines/N/` ;
  3. lecture linéaire : domaine 1, concepts 0 à 2, domaine 2, concepts 3 à 8… ; le « précédent » du premier concept d'un domaine et le « suivant » du dernier pointent vers une page de domaine (cartes du bas et flèches de la barre d'onglets) ; une page de domaine a les mêmes cartes précédent / suivant ; le concept 17 n'a pas de suivant ;
  4. accueil : la première porte mène au domaine 1 (texte propre au site, rédigé par l'agent et listé mot pour mot dans la PR pour relecture, dérogation du mainteneur du 2026-10-25 à `procedure.md`) ;
  5. alignement sur `course-v2.1.0`, version du site (MINOR), CHANGELOG, README, `docs/` et `maintainer/site/structure.md` à jour ; `npm run verify`, test des interactions au navigateur au bureau et à 375 px ;
  6. PR sur `sebvey/parcours-po-website` et sur ce dépôt, sans merge ; aperçu local laissé ouvert pour le mainteneur.
- **Fini quand** : l'aperçu local montre l'accueil qui mène au domaine 1, sept pages de domaine dans la suite précédent / suivant, `/domaines/` en carte, les anciennes ancres redirigées, `verify` et `check-alignment` sans erreur, et les deux PR ouvertes.
- **Fait le** : 2026-10-25, sept pages `/domaines/N/` dans l'ordre de lecture, `/domaines/` en carte, accueil vers le domaine 1, `check-alignment` étendu aux domaines ; site 0.10.0 aligné sur le cours 2.1.0 ; `npm run verify` passe sans avertissement, navigation et dépliables testés au navigateur au bureau et à 375 px ; ancres `#domaine-N` gardées sur la carte (ADR-049) ; après relecture du mainteneur, page de domaine raccourcie (problème, transition, tuiles avec accroches) et carte en tuiles, règle « Lien souligné » dans `structure.md`, T-072 proposé ; PR ouvertes, non mergées.
