# T-090 : Retirer les allers-retours sans contenu du cours

- **Créé le** : 2026-10-26
- **Constat** : après T-089, le mainteneur veut d'autres gains de fluidité, quitte à sacrifier
  quelque chose. Ce qui ralentit le plus le cours, ce sont les messages de l'apprenant sans
  contenu (« ok », « la suite », « on continue ») et les lectures au démarrage. Le mainteneur a
  retenu les six pistes proposées en session (« Tout est à faire »), dont le sujet relevé au
  test du 2026-10-26 : « Voici la page du domaine 1. » ajouté en ligne à part après la
  présentation « Domaine 1 : le cadre ».
- **À faire** :
  1. Enchaîner après une validation : correction, puis mini-récap, présentation du domaine ou
     sous-concept suivant dans le même message, tant qu'il tient en une quinzaine de lignes
     (revient sur ADR-063).
  2. Reprise directe : sur « on continue », le rappel enchaîne sur ce qui vient ; le menu des
     domaines ne s'affiche que sur une autre ouverture (revient sur ADR-005, ADR-040).
  3. Retirer la question de niveau du concept 0 : la troisième question d'accueil situe déjà
     l'apprenant (revient sur ADR-061, qui la gardait).
  4. Lire moins au démarrage : le hook donne le public cible, `learner/apprenant.md` et
     `learner/observations.md` ; `course/plan.md` ne se lit qu'au besoin.
  5. Mini-récap sans question.
  6. Le nom du domaine, en tête de sa présentation, porte le lien vers sa page ; plus de ligne
     de lien à part.

  Fichiers : `CLAUDE.md`, `learner-onboarding` et `init-learner.sh`, `.claude/hooks/learner-status.sh`,
  `course/concepts/00-scrum.md`, `course/sources/00-scrum.md`, `course/plan.md`,
  `course/CHANGELOG.md`.
- **Fini quand** : un sous-agent neuf, sur une copie, enchaîne correction et sous-concept
  suivant sans relance vide, ouvre le concept 0 sans question de niveau, reprend sur « on
  continue » sans menu et sans lire `course/plan.md`, et présente un domaine avec son nom en
  lien ; `course-taught-check` sur le concept 0 ne relève rien que le ticket ait causé.
- **Fait le** : 2026-10-26, enchaînement après validation, reprise directe sur « on continue », question de niveau retirée, lectures du démarrage par le hook, mini-récap sans question, nom du domaine en lien ; ADR-068 (ADR-063 supprimé). Tests par sous-agents Sonnet : accueil puis concept 0 sans question de niveau, domaine en lien, 0a1 validé enchaîné sur 0a1 le PO ; reprise sur « on continue » sans menu ni lecture du plan, menu sur « on reprend » ; course-taught-check sur le concept 0 : deux constats mineurs causés par le ticket, corrigés.
