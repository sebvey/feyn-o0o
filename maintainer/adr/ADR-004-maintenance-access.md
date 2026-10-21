# ADR-004 : Le skill maintenance n'est accessible qu'au mainteneur, via son CLAUDE.local.md

- **Date** : 2026-10-21
- **Statut** : accepté
- **Ticket** : T-008

## Contexte
Le skill `maintenance` porte `disable-model-invocation: true` : l'agent ne le voit pas et ne peut
pas le lancer. `CLAUDE.md` ne décrit que le cours. En session de maintenance, l'agent ne
chargeait pas le skill et risquait de jouer le professeur.

## Décision
`CLAUDE.local.md` du mainteneur (ignoré par git) : quand il annonce une maintenance ou demande de
travailler sur le cadre, l'agent lit et suit `.claude/skills/maintenance/SKILL.md`, et ne garde de
`CLAUDE.md` que « Style ». Le skill garde `disable-model-invocation: true` ; sa description
commence par « Charge ce skill quand… ».

## Options écartées
- Une ligne de routage en tête de `CLAUDE.md` : tout utilisateur qui clone le dépôt pourrait
  déclencher la maintenance.
- Retirer `disable-model-invocation` : même risque, par la description du skill.

## Conséquences
Un nouveau mainteneur doit créer son propre `CLAUDE.local.md` ; sans lui, seul `/maintenance`
lance le skill.
