# T-018b : Lot 1, écrire les concepts 0, 1 et 2, et le workflow `course-lot`

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Constat** : découpage de T-018a. Les fiches 0 (`00-scrum.md`) et 1 (`01-produit-et-po.md`)
  sont migrées sans exemple ; le concept 2 (objectif produit et résultat) n'a pas de fichier.
- **À faire** :
  - Méthode de T-018 §3 pour les concepts 0, 1 et 2, d'après leurs lignes de `course/plan.md`
    (objectif, prérequis, sous-concepts) et leurs situations dans `course/fil-rouge-velos.md`.
  - Entrées propres au lot : `maintainer/work/T-018/framing.md` §2.2 (objectif produit, mesure
    de la valeur) et §2.4 (A1, devenu 0 : « le sprint contient quatre événements » ; « environ
    13 pages » non vérifié) ; observations `[c0]` et `[c1]`.
  - Concept 0 : annoncer le parti pris des sprints selon `course/plan.md`, section « Parti pris »
    (ADR-018). La « Pratique répandue » de l'ancienne fiche 00 (« beaucoup d'équipes
    n'appliquent pas Scrum ») a été retirée par T-021, faute de source : ne pas la réintroduire.
  - Concept 0 : écrire la question de contrôle qui permet de le passer si l'apprenant connaît
    Scrum, sa réponse attendue et ce qu'on fait d'une réponse partielle (le test de T-018a l'a
    vu improvisée : « il y a des sprints et le PO écrit les tickets »). Piste : « Qui décide de
    l'ordre du backlog, et quelle différence fais-tu entre un sprint et un incrément ? » ;
    attendu : le PO seul ordonne ; le sprint est une durée fixe d'un mois au plus ; l'incrément
    est le produit utilisable qui remplit la DoD, plusieurs possibles par sprint. Une réponse
    partielle ne fait pas passer le concept : on enseigne le sous-concept qui manque.
  - Concept 0 : écrire « le sprint, qui contient quatre événements » ; vérifier « environ 13
    pages » ou le retirer.
  - Concept 1 : les pièges de la fiche actuelle sur les OF viennent du projet archivé ; les
    remplacer par des pièges dans le fil rouge.
  - Concept 2 : l'objectif produit et sa mesure de résultat sont fixés dans le fil rouge ; la
    banque d'exemples s'en sert comme corrigé et fait juger des formulations fautives.
  - Sources : partir du §8 de `maintainer/work/T-018/framing.md` (déjà vérifié) et ne chercher
    que ce qui manque.
  - À la clôture : retirer de `maintainer/improvements/off-course.md` l'entrée sur Scrum et
    l'incrément, traitée par le concept 0.
  - Écrire le workflow du lot (T-018 §5), le sauvegarder dans `.claude/workflows/course-lot`
    et le tester sur ce lot. Il est générique, pour servir à un autre cours (étape 3 de la
    chaîne de T-023) : paramètres, le dossier du cours (`course/` par défaut) et le sous-ticket
    du lot ; rien de propre au cours de PO dans le script (public cible, fil rouge, concepts,
    références : lus dans les fichiers du cours et le sous-ticket).
- **Fini quand** : les fichiers des concepts 0, 1 et 2 sont conformes à
  `course/templates/concept.md`, avec leurs sources dans `course/sources/` ; les revues n'ont
  plus de constat bloquant ; le mainteneur a validé le lot sur sa branche ; le workflow
  `course-lot` est sauvegardé et a tourné sur ce lot ; la reprise de sve fonctionne après le
  merge (test par sous-agent).
- **Fait le** : 2026-10-22, workflow `course-lot` écrit (générique, allégé : deux revues, un tour de correction, ADR-020) et lancé sur ce lot (21 agents) ; concepts 0, 1 et 2 réécrits avec leurs sources ; arbitrages du mainteneur appliqués (glossaire, 0a en trois messages, fil rouge : usage de la vue des stations vides, points non fixés de la mesure, rafraîchissement toutes les 5 minutes) ; test par sous-agent (on reprend, on continue, réponse partielle à la question de contrôle, arrêt) : lectures, concept, 15 lignes, question de contrôle et réponse partielle conformes au fichier ; trois défauts corrigés (relance qui ne vaut pas pour la question de contrôle, DoD employée avant 0a3, Sprint Planning au glossaire). La reprise de sve après le merge n'est pas testée : `learner/` est remis à zéro par le ticket élargi de T-011.
