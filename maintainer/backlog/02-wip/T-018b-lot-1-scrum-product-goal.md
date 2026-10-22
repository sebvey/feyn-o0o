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
    vu improvisée : « il y a des sprints et le PO écrit les tickets »).
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
