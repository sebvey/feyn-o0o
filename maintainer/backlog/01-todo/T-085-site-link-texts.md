# T-085 : Fixer le texte de chaque lien du site que le prof donne

- **Créé le** : 2026-10-26
- **Constat** : test du 2026-10-26 (branche `test_261026-1223`), premier message d'accueil :
  « avec des exemples concrets. Le site du cours : [la racine du site](…) ». Le prof a repris
  « la racine du site » de `learner-onboarding` (« donne le lien de la racine du site du
  cours ») comme texte du lien : la règle de `CLAUDE.md` (« Donne chaque lien du site en lien
  Markdown dont le texte dit ce qu'on y trouve ») n'a d'exemple que pour `domaines/` et
  `concepts/NN/`.
- **À faire** :
  - `CLAUDE.md`, « La boucle du cours », remplacer la phrase « Donne chaque lien du site en lien
    Markdown dont le texte dit ce qu'on y trouve (« [la carte des domaines](<adresse>domaines/) »,
    « [la page du concept 3](<adresse>concepts/03/) »), jamais l'adresse nue. » par :
    > Donne chaque lien du site en lien Markdown, avec ce texte selon la page, jamais l'adresse
    > nue :
    > - accueil : « [le site web](<adresse>) » ;
    > - `domaines/` : « [la carte des domaines](<adresse>domaines/) » ;
    > - `domaines/N/` : « [la page du domaine N](<adresse>domaines/N/) » ;
    > - `concepts/NN/` : « [la page du concept N](<adresse>concepts/NN/) ».
  - `.claude/skills/learner-onboarding/SKILL.md`, étape 1 : remplacer « donne le lien de la
    racine du site du cours (adresse en tête de « La boucle du cours » de `CLAUDE.md`) » par
    « dis que tout le cours est aussi sur [le site web](<adresse>), pour réviser (adresse en
    tête de « La boucle du cours » de `CLAUDE.md`) ».
- **Fini quand** : un test d'accueil d'un nouvel apprenant donne le lien de l'accueil sous la
  forme « tout le cours est aussi sur [le site web](…), pour réviser », et les liens de
  reprise, de domaine et de concept suivent la liste de `CLAUDE.md`.
