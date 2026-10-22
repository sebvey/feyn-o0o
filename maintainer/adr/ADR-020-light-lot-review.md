# ADR-020 : Un lot du cours passe par deux revues et un tour de correction, dans le workflow `course-lot`

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-018b

## Contexte
T-018 §3 prévoyait, par concept, quatre relecteurs (exactitude, pédagogie, cohérence, style), un
vérificateur des constats et deux tours de correction : environ 44 agents pour un lot de trois
concepts. Le mainteneur a jugé ce coût trop élevé pour l'instant. Le premier lot (T-018b), passé
dans la version allégée, a coûté 21 agents (environ 2,2 M tokens de sous-agents, 18 minutes) ;
les revues ont relevé et fait corriger des défauts réels (incrément appelé « résultat »,
schéma contradictoire, 0a trop long pour un message).

## Décision
T-018 §3 et §5, et `.claude/workflows/course-lot.js` (générique : paramètres `ticket`, `course`,
`work`) : par concept, un agent de sources, un rédacteur, deux relecteurs indépendants (fond :
exactitude et cohérence, sur le modèle le plus capable ; forme : pédagogie et style, sur un
modèle plus léger), puis le rédacteur trie et corrige chaque constat en justifiant ceux qu'il
écarte. Un second tour, par les seuls relecteurs qui avaient un constat bloquant ; ce qui reste
va au mainteneur. La cohérence entre les concepts du lot est vérifiée par le coordinateur.
L'agent de sources part des sources déjà vérifiées et ne cherche que ce qui manque. Le workflow
ne commite pas et ne modifie ni le fil rouge ni le glossaire : les besoins sont listés dans le
dossier de travail et arbitrés par le coordinateur, puis par le mainteneur.

## Options écartées
- Quatre relecteurs, un vérificateur dédié et deux tours (méthode initiale de T-018) : environ
  deux fois plus d'agents, gain non démontré à ce stade ; on peut rajouter des dimensions de
  revue pour un cours où la qualité doit primer.
- Une revue de cohérence du lot par un agent : le coordinateur relit déjà les fichiers du lot.

## Conséquences
Un relecteur qui couvre deux dimensions creuse moins chacune : la revue de cohérence d'ensemble
(T-018h) repasse derrière. Le workflow se relance par son nom (« lance course-lot sur
T-018c »).
