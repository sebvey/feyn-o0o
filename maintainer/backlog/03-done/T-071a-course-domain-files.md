# T-071a : Écrire une fiche de présentation par domaine dans le cours

- **Créé le** : 2026-10-25
- **Parent** : T-071
- **Constat** : voir T-071. Le cours n'a, pour un domaine, qu'un nom, ses concepts et une phrase « on sait faire » dans `course/plan.md` ; le site ne peut pas présenter un domaine sans fond écrit dans le cours (README du site, « Le site et le cours »).
- **À faire** (contenu, en autonomie, PR et merge compris, demande du mainteneur) :
  1. un modèle `course/templates/domain.md` : le problème du PO auquel répond le domaine ; le fil des concepts (comment ils s'enchaînent, 3 à 5 lignes) ; d'où l'on vient et où l'on va ; une situation du fil rouge vélos qui traverse le domaine. La phrase « on sait faire » reste dans `course/plan.md` seul ; la fiche n'enseigne aucun concept et n'avance aucune affirmation qui ne soit déjà dans une fiche de concept (pas de fichier de sources) ;
  2. sept fiches `course/domains/N-<slug>.md`, selon le modèle, rédigées d'après les fiches de concept du domaine et `course/fil-rouge-velos.md`, sans le contredire ; les transitions de deux domaines voisins se répondent ;
  3. `course/plan.md`, « Domaines du cours » : renvoi aux fiches ; `course/CHANGELOG.md` : MINOR sous « Non publié », et les noms de fichiers de `course/domains/` parmi les identifiants ;
  4. PR, merge, puis publication de `course-v2.1.0` (demande du mainteneur, 2026-10-25).
- **Fini quand** : `course/domains/` a sept fiches selon le modèle, sans affirmation absente des fiches de concept ni contradiction avec le fil rouge, la PR est mergée et le tag `course-v2.1.0` poussé.
- **Fait le** : 2026-10-25, modèle `course/templates/domain.md` et sept fiches `course/domains/`, écrites par sept sous-agents puis corrigées après une relecture croisée (cas qui reprenaient des Questions de banque, statuts manquants, situations en double) ; renvoi depuis le plan, MINOR au CHANGELOG ; ADR-048.
