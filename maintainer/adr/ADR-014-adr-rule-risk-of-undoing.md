# ADR-014 : La règle ADR vise la stabilité d'un agent à l'autre, au prix de la sélectivité

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-012

## Contexte
La règle des trois questions (structure durable, autre option crédible, raison absente du cadre)
ne filtrait presque rien : la troisième valait toujours oui, puisque le cadre s'écrit sans
justification. Une première révision (structure durable avec exemples ; « serait-elle défaite
sans sa raison ? ») a été testée par deux agents neufs sur les tickets clos : ils divergeaient
sur trois tickets sur seize (exemples contradictoires, options écartées imaginées, clause de
changement floue).

## Décision
Skill `maintenance`, §4 : juger chaque décision d'un ticket sur deux questions. La décision
change-t-elle ce que fait l'agent ou le mainteneur (pas seulement la façon de le dire), quelle
que soit son origine ? Une option a-t-elle été écartée explicitement, ancienne règle comprise,
ou la règle paraît-elle arbitraire sans sa raison ? Deux oui : un ADR. Une décision qui annule,
remplace ou contredit un ADR en fait toujours un nouveau ; ajouter un cas ne compte pas. Modèle
d'ADR : un ADR annulé se supprime (git le garde), le nouveau résume l'ancienne décision.

Testée par deux agents neufs : même liste (onze tickets à ADR sur seize). Appliquée à partir de
T-012, sans rattrapage des ADR manquants pour les tickets antérieurs. Deux ADR remplacés par
ADR-010 supprimés (trace à la correction, répartition des dossiers du 2026-10-21). Complète
ADR-003 (les ADR disent pourquoi).

## Options écartées
- Une règle plus sélective (la première révision) : moins d'ADR, mais un résultat qui dépend de
  l'agent.
- Garder trois questions en remplaçant la troisième par « la décision a-t-elle demandé un
  arbitrage, ou un test l'a-t-il motivée ? » : presque toujours oui aussi.
- Garder les ADR remplacés avec un statut : ils encombrent la lecture, git les garde.

## Conséquences
La plupart des tickets qui changent une règle produiront un ADR. Le jugement « qu'un agent
proposerait de lui-même » reste subjectif ; le découpage d'un ticket en décisions et l'ordre de
tickets clos le même jour ne sont pas fixés.
