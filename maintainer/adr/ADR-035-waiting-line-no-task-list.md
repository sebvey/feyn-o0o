# ADR-035 : Une phrase pour l'apprenant précède les appels d'outil ; pas de liste de tâches en session de cours

- **Date** : 2026-10-24
- **Statut** : accepté
- **Ticket** : T-045

## Contexte
Retest de T-044 dans l'app de bureau : le premier message part vite, mais après les réponses
d'accueil le prof tient une liste de tâches, lance le script, lit cinq fichiers et en édite deux
avant toute phrase. ADR-034 avait écarté la phrase d'attente (elle occupe l'attente sans la
réduire) ; le mainteneur la reprend pour les réponses qui gardent leurs lectures. La liste de
tâches et le récapitulatif de fin de tour viennent des consignes de l'app.

## Décision
`CLAUDE.md`, « La boucle du cours », après « Reste court » :
- une réponse qui lit ou crée des fichiers commence par une phrase courte pour l'apprenant,
  avant le premier appel d'outil ;
- en session de cours, ni liste de tâches ni récapitulatif de fin de tour.

Reprend une option écartée par ADR-034.

## Options écartées
- Pas de phrase d'attente (ADR-034) : le message du concept 0 garde trois allers-retours,
  passés en silence.
- Compter la phrase dans les 15 lignes : retiré par le mainteneur, une ligne de plus ne change
  pas la lisibilité.

## Conséquences
La règle sur la liste de tâches contredit les consignes de l'app de bureau : son effet n'est
pas garanti et se vérifie dans l'app. Si elle ne tient pas, elle se retire.
