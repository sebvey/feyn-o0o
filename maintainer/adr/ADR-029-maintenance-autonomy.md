# ADR-029 : L'agent de maintenance décide seul ; le mainteneur valide en relisant la PR

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-041

## Contexte
Le skill `maintenance` faisait valider par le mainteneur chaque proposition, chaque arbitrage
de fil rouge, de plan ou de glossaire, les consignes de chaque lot et le tri de chaque ticket.
Le mainteneur va suivre le cours : il n'est pas expert du contenu et donne son avis sur le
comportement du prof. Les tickets nés des tests étaient souvent faux ou sans enjeu (T-024,
T-037 : constat démenti par le cadre ; T-038 : doublon de T-033).

## Décision
Skill `maintenance` : l'agent décide, applique et expose ses choix dans la PR, qui est le seul
point de contrôle (le mainteneur merge). Il arbitre le contenu selon des critères écrits (§3,
étape 3), écrit les consignes d'un lot et enchaîne sur `course-lot`, et ne s'arrête que pour
un blocage qu'il ne lève pas. Un constat de test, de diagnostic ou de revue passe un tri
critique et autonome avant de devenir un ticket de `00-proposed/` (§2) ; les constats rejetés
ou fusionnés sont listés dans la PR. La PR suit un ordre fixe, comportement du prof en tête, et
ne montre aucun corrigé d'un lot de contenu. Le workflow `course-lot` laisse ses constats
ouverts au coordinateur. Complète ADR-020 (ce qui restait allait au mainteneur) et ADR-025 (le
glossaire n'est plus une exception).

## Options écartées
- Garder la validation en cours de route : le mainteneur n'a pas l'expertise du contenu, et
  chaque arrêt l'oblige à suivre le travail plutôt que le cours.
- Écrire chaque constat en ticket et laisser le mainteneur trier : les faux constats
  encombrent le backlog et lui renvoient le tri.
- Autonomie limitée au contenu, validation gardée pour le comportement du prof : le mainteneur
  en juge à la lecture de la PR, où ce changement vient en tête.

## Conséquences
Le risque est une dérive lente du cours, arbitrage après arbitrage : la section « Arbitrages »
de chaque PR et la cohérence d'ensemble de T-018h la surveillent. Le mainteneur ne lit pas les
fichiers des concepts qu'il n'a pas encore suivis.
