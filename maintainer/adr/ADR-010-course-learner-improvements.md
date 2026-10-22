# ADR-010 : Le cours, le suivi de l'apprenant et le support d'amélioration sont séparés ; le prof n'écrit plus ni fiche ni trace

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-017

## Contexte
Le prof rédigeait au fil du cours une fiche par concept et une trace par question dans
`learner/`, pour un seul apprenant. Les traces mêlaient contenu du cours, réponses de l'apprenant
et pistes d'amélioration ; les observations étaient une liste chronologique sans lien avec les
concepts. Le cours ne pouvait pas servir à un autre apprenant, et le nombre d'écritures
exposait à des oublis (T-006).

## Décision
- `course/` est le support du cours, commun à tous et écrit pour un public cible
  (`course/plan.md`) : un fichier par concept (`course/concepts/`), avec sa banque d'exemples et
  ses réponses attendues, et le fil rouge. Le prof enseigne à partir de lui et, en fin de
  concept, indique le fichier à relire.
- `learner/` ne garde que le suivi : profil et préférences, observations en trois sections
  (leviers, vigilances actives par concept, acquis), progression et journal, productions. Les
  réponses de l'apprenant ne sont plus conservées.
- `maintainer/improvements/` reçoit, au point de sauvegarde, ce que les sessions apprennent sur
  le cours, y compris ce qui sort du cours documenté. C'est le canal unique : il remplace le
  ticket dans `00-proposed/` pour une demande de l'apprenant.
- Au fil de l'eau, le prof n'écrit plus que « Prochaine étape ».
- Le cadre devient un mode par défaut : apartés de gestion de produit et exemples improvisés
  permis.
- Le TP et PDSF sont archivés (`archive/tp/`).

Remplace deux décisions antérieures, supprimées : la réponse de l'apprenant écrite dans une
trace au moment de la correction (T-003), et la répartition de 2026-10-21 qui mettait fiches,
traces et journal du TP dans `learner/`, projet factice et ancrage PDSF dans `course/`.
Reprend une décision du 2026-10-21 (session 4 du cours), supprimée : l'apprenant peut demander
un changement de forme du cours, il ne le décide pas ; seul le mainteneur tranche le cadre.
Raison, confirmée par le mainteneur : quand l'apprenant tranchait le cadre en fin de session, il
devait le juger au lieu d'apprendre. Sa demande passe désormais par `maintainer/improvements/`.

## Options écartées
- Une fiche pour l'apprenant et des notes pour le prof, en deux fichiers par concept : le cours
  a un public cible, une seule structure suffit ; la page web viendra de ce même fichier.
- Garder les réponses de l'apprenant (traces ou ligne de journal) : leur usage (améliorer le
  cours, connaître l'apprenant) est couvert par le support d'amélioration et les observations.
- Garder des fiches propres à l'apprenant : couche de rédaction en plus, sans lecteur après le
  parcours.

## Conséquences
Les fiches migrées dans `course/concepts/` gardent le contenu écrit pour sve tant que T-018 ne
les a pas réécrites. Les concepts 11 à 13 n'ont pas encore de fichier. Le prof ne lit plus les
réponses passées de l'apprenant : ce qu'il doit en savoir doit être dans les observations.
