# T-021 : Analyser le parti pris du travail en sprints et le rendre explicite

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur (session de maintenance de T-018a). Le cours suppose une
  équipe en sprints (Scrum) : sprints de deux semaines de l'équipe vélos dans le fil rouge,
  concept 0 « Scrum en bref », DoR au Sprint Planning (11b), objectif de sprint et revue (15).
  C'est un parti pris : Kanban et le flux continu n'ont pas de sprint, et beaucoup d'équipes
  data travaillent en flux. Le cours ne le dit qu'en passant (fiche 03, backlog : « le backlog
  garde son sens sans sprints »).
- **À faire** (analyse, puis proposition au mainteneur) :
  - Relever, concept par concept de `course/plan.md`, ce qui dépend des sprints et ce qui vaut
    sans eux (backlog, stories, DoD, ordre du backlog).
  - Instruire l'option du mainteneur : assumer Scrum, le dire clairement en début de cours
    (concept 0), et ajouter une annexe « Travailler sans sprint : ce que ça change » (flux
    continu, Kanban : ce que deviennent DoR, objectif de sprint, revue, prévision). Instruire
    aussi les autres options crédibles, avec sources.
  - Sortie : la décision, et le texte à ajouter au plan (concept 0, annexe) pour le lot T-018b.
- **Fini quand** : le mainteneur a tranché ; `course/plan.md` porte le parti pris et, si elle
  est retenue, l'annexe ; T-018b sait ce que le concept 0 annonce.
- **Fait le** : 2026-10-22, option A retenue (ADR-018) : section « Parti pris » et annexe A2 dans `course/plan.md`, A2 ajoutée au lot 6 (T-018g), « Pratique répandue » retirée de la fiche 00 ; test par sous-agent : annonce faite au concept 0 malgré la question de contrôle, A2 notée pour 11b, 15b, 15c sans être enseignée, 15 lignes tenues ; écart : la règle de relecture avant un concept ignore les points annoncés (T-024 proposé).
