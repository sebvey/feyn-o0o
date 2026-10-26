# ADR-062 : Le concept 0 présente les rôles puis les événements en bref, puis chacun dans un message à lui

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-076g, T-076h

## Contexte
Au test du cours du 2026-10-26, le mainteneur a jugé la description des rôles bâclée et celle
des événements trop expéditive : `course/concepts/00-scrum.md` tenait l'équipe et ses trois
responsabilités dans une explication (0a1), le sprint et ses quatre événements dans une autre
(0a2), et l'exercice de Diego testait quatre événements d'un coup. Avec un exemple et une
question, la limite de 15 lignes les compressait.

## Décision
`course/concepts/00-scrum.md` et `course/plan.md` : 0a1 en quatre messages (l'équipe en bref,
le PO, les Developers, le Scrum Master), 0a2 en cinq (le sprint en bref, Sprint Planning, Daily
Scrum, revue de sprint, rétrospective), chacun avec son explication, son exemple et sa
question, au niveau du Scrum Guide. Les identifiants 0a1 et 0a2 restent. Le récit de Diego
devient un cas de creusage.

## Options écartées
- Une explication par sous-concept (l'ancienne règle) : compressée par la limite de 15 lignes.
- Regrouper la revue et la rétrospective en un message : plus court, mais la confusion entre
  inspecter le produit et inspecter la façon de travailler est une erreur que le cours veut
  traiter à part.
- Numéroter chaque message (0a1a, 0a1b…) : casse les identifiants du cours (MAJOR) sans gain
  pour le prof.

## Conséquences
Le concept 0 passe d'environ 5 à environ 12 messages. Ce que le PO fait au Sprint Planning et à
la revue reste aux concepts 15b et 15c, ce qu'il tranche face aux Developers au concept 1b : un
lot qui touche ces concepts vérifie qu'il ne reprend pas les cas de 0a1 et 0a2.
