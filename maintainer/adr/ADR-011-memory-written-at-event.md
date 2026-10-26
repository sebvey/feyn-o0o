# ADR-011 : La mémoire s'écrit dans la même réponse que le fait ; plus de skill de sauvegarde

- **Date** : 2026-10-22
- **Statut** : complété par ADR-012, ADR-059
- **Ticket** : T-006

## Contexte
Après T-017, le prof n'écrivait au fil de l'eau que « Prochaine étape » ; le reste attendait le
skill `update-memory`, au point de sauvegarde. Le moment du lancement était ambigu (avant ou
après le choix de l'apprenant), une coupure avant ce moment perdait statut, observations et
entrées d'amélioration, et la règle vivait à deux endroits (`CLAUDE.md` pour le moment, le skill
pour le contenu).

## Décision
`CLAUDE.md`, « Tenir la mémoire à jour » : un tableau « quand, quoi, où » ; chaque écriture se
fait dans la même réponse que le fait qui la déclenche. La fin d'un sous-concept validé ne fait
plus que proposer les deux choix. L'arrêt annoncé complète le journal, relit « Prochaine étape »
comme un agent neuf, puis répond en deux lignes. Le skill `update-memory` est supprimé.

Complète ADR-010 et reprend une option écartée par T-003 (écrire plus tôt que le choix de
l'apprenant).

## Options écartées
- Garder le skill, lancé à la fin d'un sous-concept validé avant les choix : la règle reste à
  deux endroits, et une coupure en milieu de sous-concept perd encore les observations et les
  faits du fil rouge.
- Un skill réduit à la fin de session (journal et contrôle de reprise) : un skill pour deux
  écritures, et pas de journal pour une session fermée sans prévenir.

## Conséquences
Une coupure ne perd que l'échange en cours. `CLAUDE.md` s'allonge d'une vingtaine de lignes.
Certaines écritures arrivent avant que le sujet soit clos : elles se corrigent au fait suivant.
Le contrôle de reprise ne tourne qu'à l'arrêt annoncé, jamais sur une coupure.
