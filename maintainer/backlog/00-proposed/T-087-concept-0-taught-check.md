# T-087 : Corriger les deux constats de `course-taught-check` au concept 0

- **Créé le** : 2026-10-26
- **Constat** : `course-taught-check` sur le concept 0, lancé pour T-086 (constats antérieurs à
  T-086, mineurs) :
  - « élément du backlog » est employé dès 0a1 (explication du PO, cas « Diego écrit des
    éléments du backlog », Sprint Planning) et donné comme le terme du cours dans les erreurs
    de la question de niveau, sans définition ; le glossaire l'introduit au concept 3.
    L'apprenant (dev, qui dit « ticket ») reçoit un terme que rien ne définit encore.
  - « Le sprint raconté par Diego » (0a2, creusage) : « À la revue, Scarlette présente seule le
    travail » de l'équipe appli ; l'apprenant ne sait pas qu'elle est aussi la Scrum Master de
    l'équipe appli (fil rouge), alors que la réponse attendue repose sur son rôle.
- **À faire** : `course/concepts/00-scrum.md` : définir « élément du backlog » au passage à sa
  première occurrence dans l'explication du PO (toute entrée du backlog, quel que soit son
  niveau, vue au concept 3), et aligner la colonne concept du glossaire si elle l'exige ; dans
  la situation du récit de Diego, dire que Scarlette est aussi la Scrum Master de l'équipe
  appli. Entrées au CHANGELOG.
- **Fini quand** : `course-taught-check` sur le concept 0 ne relève plus ces deux constats.
