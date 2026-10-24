# ADR-034 : Le premier message du prof part sans appel d'outil (accueil) ou après la seule lecture de `learner/parcours.md` (reprise)

- **Date** : 2026-10-24
- **Statut** : complété par ADR-035
- **Ticket** : T-044

## Contexte
Session de cours du 2026-10-24, nouvel apprenant : le premier message arrivait après environ
15 secondes, derrière quatre allers-retours d'outils (skill chargé, modèles et plan lus,
`learner/` créé, fil rouge lu) dont il ne dépendait pas. À la reprise, `CLAUDE.md` faisait lire
six fichiers avant un rappel de deux lignes qui ne dépend que de `learner/parcours.md`.

## Décision
- `.claude/hooks/learner-status.sh` : pour un nouvel apprenant, il écrit aussi le skill
  `learner-onboarding` dans le contexte de démarrage ; le prof le suit sans le recharger.
- `.claude/skills/learner-onboarding/init-learner.sh <surnom>` crée les fichiers absents de
  `learner/` (surnom, tableau généré depuis `course/plan.md`, ligne de journal du jour), en un
  appel. Le skill le lance à la réponse aux questions d'accueil, avec les lectures du plan, du
  fil rouge et du concept 0 ; `CLAUDE.md` le lance pour un apprenant connu à qui il manque un
  fichier, que le hook signale.
- Le tableau de `learner/parcours.md` (modèle `course/templates/learner/parcours.md`) porte le
  titre de chaque concept : le rappel de reprise le nomme sans lire `course/plan.md`.
- `CLAUDE.md`, démarrage : seule `learner/parcours.md` se lit avant le premier message de
  reprise ; les autres lectures, dans le même ordre, passent avant le message suivant.

Complète ADR-021 (l'ordre de l'accueil : questions avant création des fichiers) et ADR-022 (le
hook ne fait plus seulement donner l'état).

## Options écartées
- Une phrase d'attente avant le premier appel d'outil (« je prépare ton espace… ») : elle occupe
  l'attente sans la réduire ; non retenue par le mainteneur.
- Faire créer `learner/` par le hook : il tourne aussi en session de maintenance, où il
  créerait `learner/` dans le dépôt.

## Conséquences
Le skill d'accueil entre dans le contexte de toute session ouverte sans apprenant, maintenance
comprise (une trentaine de lignes, précédées de « En session de cours »). Le script suppose les
marqueurs des modèles de `course/templates/learner/` (`<surnom>`, la ligne `| <une ligne par
concept`, la ligne `- <AAAA-MM-JJ>`) et les lignes `| N | Titre |` du tableau des
concepts de `course/plan.md` : changer ces formats oblige à changer le script. Il numérote toujours la
ligne de journal « session 1 », ce qui n'est juste que pour un nouvel apprenant. Le message qui suit les
réponses d'accueil garde ses lectures.
