# ADR-040 : Le premier message de reprise propose de continuer ou de creuser un domaine ou un concept

- **Date** : 2026-10-25
- **Statut** : complété par ADR-068
- **Ticket** : T-057a

## Contexte
Avec les domaines (ADR-039), le mainteneur veut que le prof déroule le cours domaine après
domaine, et que l'apprenant puisse à tout moment lui demander de creuser un domaine ou un
concept. Jusque-là, le premier message de reprise proposait de revenir sur un point (ADR-005).

## Décision
- `CLAUDE.md`, démarrage, étape 3 : après le rappel, le prof demande si l'apprenant continue le
  cours ou veut creuser un domaine ou un concept, et liste les domaines, une ligne chacun. Il
  s'arrête toujours là (ADR-005).
- `.claude/hooks/learner-status.sh` donne la liste des domaines pour un apprenant connu : le
  premier message ne lit toujours que `learner/parcours.md` (ADR-034).
- `CLAUDE.md`, « Creuser un domaine ou un concept » : un concept non validé s'enseigne selon la
  boucle ; un concept validé se creuse par des exercices nouveaux (cas de la banque que le
  journal ne nomme pas, sinon improvisés), notés au journal, et après deux cas réussis le prof
  propose le concept suivant du domaine. Au premier concept d'un domaine, le prof nomme le
  domaine.
- Le skill `learner-onboarding` présente les domaines et la possibilité de creuser.

## Options écartées
- Proposer de revenir sur un point (ADR-005) : remplacé par le choix entre continuer et creuser.
- Donner tout de suite le lien vers la présentation des domaines sur le site : le site est en
  aperçu sans lien ; le lien vient avec la mise en ligne (T-050g).
- Pour un concept validé, le réenseigner depuis le début : écarté au profit d'exercices
  nouveaux.

## Conséquences
Le premier message de reprise gagne environ huit lignes. Les cas posés pendant l'enseignement
initial ne sont pas tous notés au journal : un exercice de creusage peut en reprendre un.
