# ADR-013 : Une réponse partielle se relance, et la reprise pose la relance avec l'acquis

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-020

## Contexte
Un test de T-019 : l'apprenant répond à moitié à la question de 10b. Le cadre ne connaissait que
réussi (concept suivant) ou raté (réexplication) ; la relance posée contredisait « plus de
question en attente » ; à la reprise, la règle d'ADR-008 faisait reposer la question de la
banque, dont la moitié était acquise.

## Décision
`CLAUDE.md` :
- boucle : réponse partielle -> dire ce qui est juste, relancer sur ce qui manque par une
  question ciblée, en message court ; réexpliquer sous un autre angle après une réponse fausse
  ou deux relances sans succès ; une nuance manquante ne rend pas la réponse partielle, le prof
  l'apporte ;
- tableau de la mémoire : une relance est une question posée, notée avec son rang et l'acquis ;
- démarrage, étape 3 : la reprise refait explication et exemple, puis pose la question en
  attente (banque ou relance, précédée de l'acquis) ; la relance garde son rang.

Complète ADR-008.

## Options écartées
- Laisser le nombre de relances au jugement du prof : choix du mainteneur pour un seuil fixe
  (deux).
- À la reprise, poser la relance seule, sans rappeler l'acquis : la relance n'a pas de sens
  sans ce que l'apprenant avait déjà vu.
- Traiter une réponse partielle comme ratée (réexplication complète) : on réexplique ce que
  l'apprenant a compris.

## Conséquences
« Prochaine étape » porte une ligne de plus pour une relance. À la reprise, l'apprenant relit
l'explication et l'exemple avant la relance.
