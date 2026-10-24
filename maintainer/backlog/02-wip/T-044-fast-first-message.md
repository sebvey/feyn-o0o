# T-044 : Accélérer le premier message du prof

- **Créé le** : 2026-10-24
- **Constat** : session de cours du 2026-10-24 (nouvel apprenant, « on commence ? ») : le premier
  message arrive après environ 15 secondes, derrière quatre allers-retours d'outils (chargement
  du skill `learner-onboarding`, lecture des modèles et de `course/plan.md`, création de
  `learner/` et lecture de `course/fil-rouge-velos.md`, récapitulatif de l'app). Ce message
  (présentation du cours, questions d'accueil) ne dépend d'aucune de ces lectures. À la reprise,
  le rappel en deux lignes ne dépend que de `learner/parcours.md`, mais `CLAUDE.md` fait lire
  six fichiers avant lui. Demande du mainteneur : que l'apprenant n'attende pas ; il retient
  deux mécanismes (le hook prépare l'accueil, les lectures sont repoussées).
- **À faire** :
  - `.claude/hooks/learner-status.sh` : pour un nouvel apprenant, écrit le skill
    `learner-onboarding` dans le contexte, pour qu'il ne se charge pas par un appel d'outil.
  - Un script crée les fichiers absents de `learner/` depuis `course/templates/learner/`
    (surnom, tableau de `parcours.md` généré depuis `course/plan.md`, ligne de journal datée du
    jour), en un seul appel. Il tourne au message qui suit les réponses d'accueil, pas au
    démarrage : le hook tourne aussi en session de maintenance, où il ne doit pas créer
    `learner/`.
  - `.claude/skills/learner-onboarding/SKILL.md` : premier message sans appel d'outil ;
    création des fichiers par le script et lectures du plan et du fil rouge au message suivant.
  - `CLAUDE.md`, démarrage : le premier message de reprise ne lit que `learner/parcours.md` ;
    les autres lectures passent au message suivant ; un nouvel apprenant suit le skill déjà
    dans le contexte.
- **Fini quand** : une session neuve sur `learner/` absent répond aux questions d'accueil sans
  appel d'outil, puis crée les fichiers corrects au message suivant ; une reprise ne lit que
  `learner/parcours.md` avant son premier message ; une session de maintenance ne crée pas
  `learner/`.
