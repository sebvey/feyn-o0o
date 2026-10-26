# ADR-078 : Les constats de course-taught-check se corrigent sur la branche du ticket, dans une boucle de deux tours au plus

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-108

## Contexte
T-100 (2026-10-26) : `course-taught-check` a relevé six constats mineurs que le ticket n'avait
pas causés. La règle « un défaut hors du ticket ne se corrige pas au passage » en a fait un
ticket à part (T-106), donc un cycle complet de plus : correction, publication du cours,
réalignement du site. Le mainteneur refait ce cycle après chaque check.

## Décision
`.claude/skills/maintenance/SKILL.md` :
- §5 : les constats de `course-taught-check` se corrigent sur la branche du ticket, qu'il les ait
  causés ou non, quand le correctif ne change pas ce qu'un concept enseigne (renvoi, attribution
  d'un exemple à son sous-concept, formulation qui suppose une notion pas encore reçue) ; le
  workflow se relance depuis le premier concept corrigé, deux tours au plus ; un constat dont le
  correctif change ce qu'un concept enseigne, ou qui revient après le deuxième tour, passe le tri
  des constats ; la PR liste chaque constat corrigé ;
- §2 : la règle « pas de correction au passage » excepte ces constats.

## Options écartées
- Ne corriger sur la branche que les constats causés par le ticket (règle précédente) : chaque
  check ouvre un nouveau cycle complet.
- Boucler jusqu'à zéro constat : sans borne, un correctif peut en faire naître un autre
  indéfiniment.
- Corriger aussi les constats qui changent ce qu'un concept enseigne : ce sont des décisions de
  fond, qui méritent leur propre ticket.

## Conséquences
Un ticket de cours peut toucher des concepts hors de son sujet : la PR les liste. Surveiller que
« ne change pas ce qu'un concept enseigne » ne s'étire pas à des corrections de fond.
