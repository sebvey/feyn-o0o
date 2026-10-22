# T-013 : Relire ADR-006 et ADR-007, dont la raison est reconstituée

- **Créé le** : 2026-10-21
- **Constat** : ADR-006 (séparation `learner/`, `course/`, `maintainer/`) et ADR-007 (deux skills
  distincts, l'apprenant ne tranche pas le cadre) ont été écrits pendant T-010 à partir du journal
  de la session 4 du cours. Ce journal disait ce qui avait changé, pas pourquoi : la raison et
  les options écartées ont été déduites par l'agent. Un ADR à la raison inexacte est pire
  qu'aucun ADR : un mainteneur futur s'appuierait dessus pour garder ou défaire la décision.
- **À faire** : le mainteneur relit les deux ADR ; corriger le contexte, la raison et les
  options écartées ; retirer la mention « raison reconstituée a posteriori » une fois confirmés,
  ou supprimer l'ADR s'il ne passe pas la règle (voir T-012).
- **Fini quand** : les deux ADR portent une raison confirmée par le mainteneur, ou sont
  supprimés.
- **Note du 2026-10-22 (T-017)** : ADR-006 est remplacé par ADR-010 ; il ne reste à relire que
  ADR-007 (complété par ADR-010).
- **Fait le** : 2026-10-22, ADR-006 supprimé par T-012 (remplacé par ADR-010). ADR-007 : raison
  confirmée par le mainteneur ; ADR supprimé, sa décision sur les deux skills étant annulée par
  ADR-011 (skill `update-memory` supprimé) ; la décision « l'apprenant ne tranche pas le cadre »
  et sa raison sont reportées dans ADR-010.
