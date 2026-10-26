# ADR-054 : Une erreur de la banque sur le point testé n'est pas une nuance ; une relance réussie remet le compte à zéro

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-043

## Contexte
Tests de bout en bout de T-018h. En 8a2, l'apprenant répond « c'est Dana qui l'a décidé » ; le
prof prend le manque (« personne n'a décidé ») pour une nuance, l'apporte et valide, alors que
la banque range cette réponse dans les erreurs fréquentes. En 8b1, une relance sur un second
défaut, après une relance réussie, est notée « rang 2 ». Au concept 7, une erreur sur un autre
point que celui de la question est corrigée, puis le sous-concept validé, à raison. Complète
ADR-013.

## Décision
`CLAUDE.md`, « La boucle du cours », « Attends la réponse » : une erreur fréquente de la banque,
commise sur le point que la question teste, n'est pas une nuance, la réponse est fausse ou
partielle ; une erreur sur un autre point se corrige sans empêcher de valider. Deux relances de
suite sans succès sur la même question font réexpliquer ; une relance qui réussit remet le
compte à zéro.

## Options écartées
- « Une réponse qui correspond à une erreur fréquente de la banque n'est jamais une nuance »
  (texte d'origine du ticket) : le prof relancerait sur une erreur hors du point testé, comme au
  concept 7.
- Compter toutes les relances d'une question, réussies comprises : le prof réexplique après un
  seul échec qui suit une relance réussie.

## Conséquences
Le prof doit savoir quel point la question teste : la réponse attendue de la banque le dit.
