# Concept 4 : erreurs relevées dans `course/concepts/04-hierarchie.md`

Fiche vérifiée le 2026-10-22 ; sources dans `course/sources/04-hierarchie.md`.

1. **« thème (grand domaine) > epic > … »** (L'essentiel). Le thème présenté comme le niveau le
   plus haut, au-dessus de l'epic, n'a pas de source : chez Cohn, un thème est une collection de
   stories, plus grande ou plus petite qu'un epic ; dans Jira, un regroupement transversal ;
   Wikipédia donne des définitions qui se contredisent. Aucun outil vérifié (Jira, Azure DevOps)
   n'a de niveau « thème » par défaut. Retirer le thème des niveaux ; au plus, le citer comme
   variante d'outil (consigne du lot).
2. **« Azure DevOps (Epic > Feature > Story > Task) »** (Consensus et choix d'école). Vrai pour
   le seul processus Agile. Les niveaux dépendent du processus choisi à la création du projet :
   Scrum dit « Product Backlog Item », Basic n'a qu'Epic > Issue > Task, CMMI dit
   « Requirement ». Écrire « Azure DevOps, processus Agile : Epic > Feature > User Story > Task »
   ou « selon le processus choisi ».
3. **« Quasi universel : story et tâche »** (Consensus et choix d'école). Sans source, et
   contredit en partie : Jira nomme « Subtask » son niveau le plus fin ; Azure DevOps nomme son
   niveau d'élément Product Backlog Item, Issue ou Requirement selon le processus. Ce qui est
   juste : presque tous les outils ont un niveau d'élément sous l'epic et un niveau de travail
   des Developers en dessous. Retirer « quasi universel » ou le reformuler ainsi.
4. **« user story (besoin précis, livrable en quelques jours) »** (L'essentiel). « Quelques
   jours » n'est pas une définition : Cohn situe la story sous la taille d'un sprint, Wake
   (INVEST) écrit « at most a few person-weeks ». Présenter « quelques jours » comme une
   pratique courante (même constat que framing.md §2.4, affirmation 06).
5. **« tâche (travail technique pour réaliser la story) »** (L'essentiel). Juste sur le fond,
   à préciser : le Scrum Guide confie ce découpage aux Developers (« at the sole discretion of
   the Developers »), souvent en éléments d'un jour ou moins ; le PO n'écrit pas les tâches.
   Imprécision, pas erreur de fait.
6. **Le test rapide « Je sais ce que voit l'utilisateur… »** (Le test rapide). Pas une erreur
   de fait, mais il n'a pas marché avec l'apprenant (observation `[c4]`) ; la consigne du lot
   le remplace par « compter les “je veux” » en 4b. Choix du cours, sans source externe : à ne
   pas présenter comme un consensus.
