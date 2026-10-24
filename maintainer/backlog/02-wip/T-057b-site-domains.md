# T-057b : Organiser le site par domaines, sans redondance entre accueil, carte et lectures

- **Créé le** : 2026-10-25
- **Parent** : T-057
- **Dépend de** : T-057a
- **Constat** : discussion du 2026-10-25 avec le mainteneur. Les parcours de lecture apparaissent à trois endroits (accueil « Par où commencer », onglet « Lectures », et l'onglet « Parcours » avec la carte et le filtre par objectif) ; le mot « parcours » y désigne deux choses ; le filtre par objectif double la liste des objectifs sur la même page ; sept des neuf parcours de lecture recoupent un objectif. T-057a remplace les objectifs par sept domaines contigus qui partitionnent le cours.
- **À faire** (dépôt `../parcours-po-website`) :
  1. une seule page « Domaines » (remplace « Parcours » et « Lectures ») : les sept domaines dans l'ordre, chacun avec ce qu'on sait à la fin (texte de `course/plan.md`), ses concepts en cartes, et sa lecture rapide (sections ordonnées, une au moins par concept du domaine, sans section d'un autre domaine ; les prérequis vont dans « avant ») ; puis les annexes, avec la lecture « Mon équipe travaille sans sprint » ; les blocs, le filtre par objectif et la liste des objectifs disparaissent ; « Pour quand ? » rejoint la lecture du domaine 6 ;
  2. navigation : « Domaines » à la place de « Parcours » et « Lectures » ; le mot « parcours » quitte les libellés ; `/parcours/` et `/lectures/` redirigent vers `/domaines/` ;
  3. accueil : un aiguillage sans liste (commencer par le concept 0, voir les domaines) ; « Par où commencer » ne liste plus les lectures ;
  4. page de concept : l'en-tête donne son domaine (un seul) à la place des objectifs servis ;
  5. version : alignement sur la version du cours publiée par T-057a, site en `0.2.0` (aperçu) ; CHANGELOG du site, `docs/`, README et `maintainer/site/structure.md` mis à jour ;
  6. build, vérification dans un navigateur (bureau et téléphone), PR, merge et redéploiement de l'aperçu (demande du mainteneur, 2026-10-25).
- **Fini quand** : l'aperçu en ligne montre la page « Domaines » sans blocs ni objectifs, l'accueil sans liste de lectures, chaque concept dans un seul domaine, et les anciennes adresses redirigent.
