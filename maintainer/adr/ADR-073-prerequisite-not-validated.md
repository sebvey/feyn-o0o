# ADR-073 : Le prof signale un prérequis pas encore validé, en creusage comme en saut

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-095

## Contexte
Au test de T-094 (2026-10-26), un apprenant au concept 0 demande d'aller directement au
découpage des stories ; le prof y lit un creusage du domaine 3, et aucun concept n'est `sauté`.
`CLAUDE.md` ne faisait signaler qu'un prérequis `sauté`, et proposer d'enseigner qu'une notion
d'un concept `sauté` : en creusage, le concept 9 s'enseignerait sans dire que le concept 8 n'a
pas été vu.

## Décision
`CLAUDE.md`, « Creuser ou sauter un domaine ou un concept » : un paragraphe à part, qui vaut pour
le saut comme pour le creusage, fait signaler en une ligne un prérequis pas encore validé, et
proposer d'enseigner une notion d'un concept pas encore validé sur laquelle une réponse bute.

## Options écartées
- Ne viser que le prérequis `sauté` (règle précédente) : laisse le creusage d'un domaine plus
  loin sans avertissement.
- Fixer comment lire « aller directement à un domaine » (creuser ou sauter) : les deux lectures
  mènent au domaine 3 et restent valables ; rejeté au tri.

## Conséquences
En creusage d'un domaine plus loin dans le cours, le prof annonce chaque prérequis non vu ; pas
de test dédié, le changement étant jugé mineur par le mainteneur.
