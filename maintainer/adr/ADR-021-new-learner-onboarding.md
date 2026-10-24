# ADR-021 : Un nouvel apprenant démarre depuis un `learner/` vide, accueilli par le skill `learner-onboarding` ; le journal est réservé aux sessions de cours

- **Date** : 2026-10-22
- **Statut** : complété par ADR-032, ADR-034
- **Ticket** : T-011

## Contexte
Démarrer avec un nouvel apprenant supposait de vider `learner/` à la main, et `CLAUDE.md` lisait
`learner/parcours.md` sans prévoir son absence ; « ne repose pas les questions d'accueil » ne les
définissait nulle part. sve, premier apprenant et mainteneur, voulait repartir de zéro après le
lot 1 (T-018b), alors que T-018a avait remis `learner/parcours.md` à zéro en gardant ses
observations. Le journal de `learner/parcours.md` portait des lignes « pas de cours » écrites par
des sessions de maintenance (T-017, T-018a), au titre de l'exception de T-018 §6.

## Décision
- `CLAUDE.md`, démarrage : si `learner/apprenant.md` est absent ou n'a pas de surnom, le prof
  suit `.claude/skills/learner-onboarding/SKILL.md` : il crée les fichiers depuis
  `course/templates/learner/`, pose quatre questions d'accueil (surnom, rôle, acquis en Scrum et
  gestion de produit, rythme), les écrit, puis enseigne le concept 0. Sinon, il crée les seuls
  fichiers manquants et reprend.
- L'apprenant est identifié par le surnom qu'il choisit ; le prof l'appelle ainsi. Les entrées
  de `maintainer/improvements/` le portent.
- `learner/` est vidé sur `main` ; les observations de sve, anonymisées, sont dans
  `maintainer/work/T-018/learner-observations.md` pour les lots de T-018 et T-023.
- Le journal est réservé aux sessions de cours : skill `maintenance` (puce `learner/`) et
  T-018 §6 (l'exception se limite aux statuts, à « Prochaine étape » et aux étiquettes).

## Options écartées
- Garder les observations de sve en le remettant à zéro (décision de T-018a, remplacée) : elles
  dataient de l'ancien contenu et un démarrage neuf teste le parcours d'un vrai nouvel apprenant.
- Un trigramme comme identifiant (première version du ticket) : le mainteneur a préféré le nom
  par lequel l'apprenant veut être appelé, qui sert aussi à s'adresser à lui.
- Les règles d'accueil écrites dans `CLAUDE.md` : le mainteneur a préféré un skill appelé
  seulement quand aucun apprenant n'est en cours, pour ne pas charger chaque session.

## Conséquences
`learner/` n'existe plus dans le dépôt tant qu'aucune session de cours ne l'a créé. Les
observations anonymisées disparaissent avec `maintainer/work/T-018/` à la clôture de T-018
(l'historique git les garde) ; le brief de T-023 y renvoie.
