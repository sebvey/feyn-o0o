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

  Déjà fait : T-003 (ADR-002) écrit la réponse et le verdict dans la trace, et met à jour
  « Prochaine étape », au moment de la correction. Une coupure ne fait donc plus reposer la
  question, mais le reste de la sauvegarde est encore perdu.
- **À faire** : à affiner. Les faits du fil rouge sont hors de ce ticket : le mainteneur les
  traitera avec les modèles de cours.

  **Proposition à discuter** (issue du test par sous-agent de T-009, non validée) :
  - `CLAUDE.md`, « Point de sauvegarde » : à la fin d'un concept ou d'un sous-concept validé,
    lancer `update-memory` dans la même réponse que la correction, puis proposer les deux choix
    (libellés inchangés). Retirer « Dans les deux cas, lance le skill `update-memory` avant la
    suite » ; garder « Lance-le aussi dès que l'apprenant dit qu'on s'arrête ».
  - `update-memory` : description « avant d'attaquer la suite » -> « avant de proposer la
    suite » ; §3, « L'apprenant a choisi de continuer : attaque la suite, sans parler de la
    sauvegarde » -> « Point de sauvegarde : termine par les deux choix de `CLAUDE.md`, sans
    parler de la sauvegarde ».
  - Argument : c'est le verdict du professeur qui valide le sous-concept, pas le choix de
    l'apprenant ; ce choix ne change que la mention d'arrêt au journal, complétée par la
    relance à l'arrêt. Le risque « trop écrire » reste à peser : si l'apprenant revient sur un
    point après la sauvegarde, le statut se corrige au point suivant (`à revoir`).
  - Revient sur une option écartée par ADR-002 : écrire ADR-008 (« update-memory tourne au
    point de sauvegarde, avant le choix »), ADR-002 passe en « complété par ADR-008 ».

  **Autres pistes**, écartées par la proposition mais à garder en tête : contrôle de cohérence
  au démarrage (trace plus récente que le journal, concept validé dans la trace mais `en cours`
  au tableau), à reprendre si des coupures en milieu de sous-concept perdent encore des
  écritures ; source du numéro de session (aucun défaut observé, l'agent le déduit du journal).
- **Fini quand** : à définir à l'affinage. Base proposée : après la réponse validée qui clôt un
  sous-concept, et avant tout choix, `learner/` contient statut, fiche, journal et « Prochaine
  étape » ; un agent neuf qui reprend après une coupure à ce moment annonce la bonne suite.
  Test : « on reprend », « on continue », réponse juste à la question, coupure sans choix, puis
  reprise par un agent neuf ; variante avec « On s'arrête là » (pas de ligne de journal en
  double).
- **Note du 2026-10-22 (T-017)** : les écritures au fil de l'eau se réduisent à « Prochaine
  étape » ; plus de fiche ni de trace au point de sauvegarde (ADR-010, qui remplace ADR-002).
  Reste à réévaluer : la perte du statut, du journal et des observations sur une coupure avant
  le choix. Le ticket peut être clos si le risque est jugé faible.
