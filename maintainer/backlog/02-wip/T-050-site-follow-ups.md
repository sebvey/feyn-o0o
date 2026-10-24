# T-050 : Suites de la première version du site

- **Créé le** : 2026-10-24
- **Constat** : la première version du site est construite en local (`../parcours-po-website`, 34 commits, rien de publié, relue par des agents seulement). Session de discussion du 2026-10-24, point par point avec le mainteneur. Écart relevé : le site raconte des exemples différents de ceux des fiches du cours (9b, fiches 02 et 04, une quarantaine de passages généralisés), pour ne pas dévoiler les réponses d'exercice.
- **Décisions du mainteneur** :
  - le site n'a pas besoin de protéger les réponses d'exercice (la banque reste côté agent, et les fiches du cours sont déjà lisibles) ; le site devient une projection du cours : même fond, banque exclue ;
  - le site garde sa liberté sur la forme (schémas, composants, mise en page, parcours de lecture, pages d'orientation) ; tout nouveau contenu d'enseignement passe d'abord par le cours ;
  - règle pédagogique à poser dans le cours : le texte qui explique n'utilise pas le cas de l'exercice qui suit ;
  - source de vérité : le cours (prose) ; le site garde la trace de la fiche dont chaque page dérive, et un script liste les pages à réaligner ;
  - versionnage : MAJOR du site égal à MAJOR du cours ; MAJOR du cours = changement qui casse les identifiants (numéros de concept, sous-concepts, adresses) ou les objectifs ; MINOR libre de chaque côté ; le site est en `MAJOR.MINOR.PATCH` et affiche la version du cours sur laquelle il est aligné ;
  - publication en deux temps : `v0.1.0` en aperçu (`noindex`, sans lien), puis `v1.0.0` ;
  - dépôt `sebvey/parcours-po-website`, licence MIT pour le code, CC BY 4.0 pour le contenu.
- **À faire** : en sous-tickets, dans l'ordre :
  - T-050a : règle de non-recoupement et reprise des fiches du cours (en cours) ;
  - T-050b : versionner le cours (proposé, dépend de T-050a) ;
  - T-050c : versionnage et alignement côté site (proposé, dépend de T-050b) ;
  - T-050d : documentation du dépôt pour un agent (proposé, dépend de T-050c) ;
  - T-050e : documenter la fabrication du site (fait) ;
  - T-050f : publier l'aperçu `v0.1.0` (proposé) ;
  - T-050g : mise en ligne `v1.0.0` et règle de renvoi du prof (proposé, dépend de T-050d).

  Où : T-050a et T-050b dans une session à part sur ce dépôt (worktree) ; T-050c à T-050f dans une session sur `../parcours-po-website`, dont les sous-tickets écrivant dans `docs/` se suivent ; T-050f et T-050g se font avec le mainteneur (envoi public).
- **Fini quand** : les sous-tickets sont clos et T-049 est clos avec eux.
