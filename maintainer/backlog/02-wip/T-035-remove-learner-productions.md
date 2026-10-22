# T-035 : Retirer `learner/travaux.md`

- **Créé le** : 2026-10-23
- **Constat** : test de T-018f (concept 12) : l'apprenant écrit une définition d'indicateur, que
  la ligne « L'apprenant écrit ou réécrit une story ou un critère » de `CLAUDE.md` ne couvre
  pas. Relu avec le mainteneur (2026-10-23) : aucune production d'exercice n'est réutilisée par
  un concept suivant (chaque exercice repart d'une situation de la banque), la reprise passe par
  « Prochaine étape », les acquis et difficultés par `learner/observations.md`, et le fichier
  n'est lu que « quand l'échange porte sur une production », ce qui n'arrive plus (test de
  T-019 : « non lu faute de production »). Il vient du TP sur le projet réel de sve, archivé ;
  T-017 l'a gardé tel quel, alors qu'ADR-010 dit que les réponses de l'apprenant ne sont plus
  conservées.
- **À faire** : retirer `course/templates/learner/travaux.md` et les trois mentions de
  `CLAUDE.md` (liste de `learner/`, lecture au démarrage, ligne du tableau « Tenir la mémoire à
  jour ») ; ADR qui écarte l'extension de la trace à toute production et sa réservation aux
  productions sur le projet réel de l'apprenant.
- **Fini quand** : plus aucune mention de `travaux.md` hors de `archive/`, de
  `maintainer/backlog/03-done/` et de `maintainer/work/` ; un prof neuf qui fait écrire une
  production l'évalue sans chercher à l'enregistrer, et écrit le reste de la mémoire normalement.
