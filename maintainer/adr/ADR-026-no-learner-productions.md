# ADR-026 : Les productions de l'apprenant ne sont plus conservées dans `learner/`

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-035

## Contexte
`learner/travaux.md` gardait les versions successives des stories et des critères de
l'apprenant, avec la critique du prof. Il venait du TP sur le projet réel du premier apprenant,
où une même story se réécrivait d'un concept à l'autre ; ADR-010 l'a gardé tel quel. Avec le
fil rouge, chaque exercice repart d'une situation de la banque : aucun concept ne réutilise une
production de l'apprenant, et le fichier n'était plus lu (test de T-019). Le test de T-018f a
montré une production hors de la règle (une définition d'indicateur, concept 12).

## Décision
`learner/travaux.md` et son modèle sont retirés, ainsi que leurs mentions dans `CLAUDE.md`. Le
prof évalue une production dans l'échange ; ce qu'elle révèle passe par `learner/observations.md`
(leviers, vigilances, acquis), et la reprise par « Prochaine étape » de `learner/parcours.md`.
Complète ADR-010, qui ne conserve plus les réponses de l'apprenant.

## Options écartées
- Étendre la trace à toute production écrite (définition, hors périmètre, ordre argumenté) :
  plus d'écritures, pour un fichier qu'aucun agent ne relit.
- La réserver aux productions sur le projet réel de l'apprenant : le cours ne prévoit pas ce
  cas aujourd'hui ; à reprendre s'il le prévoit.

## Conséquences
Si un concept vient à réutiliser une production de l'apprenant, ou si le cours accueille son
projet réel, la conservation se redécide.
