# ADR-033 : Hors des quatre sous-concepts renvoyés à l'annexe A2, le sprint n'est qu'un repère que le prof transpose

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-018h

## Contexte
ADR-018 et ADR-031 renvoient l'apprenant sans sprint à l'annexe A2 en 11b, 15b, 15c et 16c, et
le plan dit que les autres concepts valent sans sprint. La relecture du cours entier (T-018h)
trouve d'autres passages qui prennent le sprint pour repère : une story « tient dans un
sprint » (4b, 7a1), le haut du backlog se « finit en un sprint » (3a2), l'exemple de 10a2 se
passe à la revue de sprint, on escalade quand rien n'a changé « à la fin du sprint » (14c).
Face à un apprenant en flux, le prof ne savait pas quoi en faire.

## Décision
`course/plan.md` (« Parti pris ») : ailleurs, le sprint ne sert que de repère ; à l'apprenant
sans sprint, le prof le dit et prend pour repère le cycle que l'équipe se donne (sa cadence de
livraison ou de revue), sans ouvrir l'annexe. Complète ADR-018 et ADR-031.

## Options écartées
- Écrire dans A2, ou dans le plan, un équivalent en flux pour chaque passage (proposé par la
  relecture) : un équivalent de taille d'une story en flux n'est fixé par aucun guide (à
  vérifier dans le *Kanban Guide*), et chaque nouveau passage demanderait sa ligne.
- Étendre la liste des sous-concepts renvoyés à A2 : ces passages n'enseignent pas le sprint,
  ils s'en servent comme d'une unité de temps.

## Conséquences
Le prof transpose seul ces repères, sans contenu dédié. À surveiller : un apprenant en flux qui
bute sur l'un d'eux (ex. la taille d'une story) signale qu'il faut un contenu dans A2.
