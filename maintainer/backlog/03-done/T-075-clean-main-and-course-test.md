# T-075 : Partir d'un main propre, et préparer un test du cours

- **Créé le** : 2026-10-26
- **Constat** : demande du mainteneur (2026-10-26). Pour tester le cours, il se met sur une branche `test_…` et lance une session de cours ; puis il revient dans la conversation de maintenance et demande des modifications. Il oublie souvent de purger (supprimer la branche de test, repartir de `main`) : l'agent de maintenance écrirait alors sur la branche de test, ou commiterait sur `main` les fichiers de `learner/` du test, comme le veut aujourd'hui le §3, étape 1, pour une session de cours.
- **À faire** (comportement de l'agent de maintenance ; texte fixé par le mainteneur) : dans `.claude/skills/maintenance/SKILL.md` :
  1. après « Règles d'écriture du cadre », la section :
     > ## Partir d'un `main` propre
     >
     > Avant toute écriture (ticket, backlog, cadre, site), au début de la session comme en cours de conversation :
     > 1. Sur une branche `test_…` : demande au mainteneur la confirmation de la purger ; à son accord, jette ce que la session de test a laissé (`git restore .`, `git clean -fd learner/`), passe sur `main` et supprime la branche (`git branch -D`).
     > 2. Sur la branche d'un ticket : restes-y si l'écriture relève de ce ticket ; sinon, demande.
     > 3. Sur `main` : `git pull --ff-only`. Des fichiers de `learner/` laissés par une session de cours hors test : commite-les sur `main`, pousse, et dis-le dans la PR suivante.
  2. §3, étape 1 « Démarrer » : le début, jusqu'à « … et dis-le dans la PR. », devient « Pars d'un `main` propre (section ci-dessus). » ;
  3. après le §5, la section :
     > ## Préparer un test du cours
     >
     > Quand le mainteneur demande de préparer un test du cours : pars d'un `main` propre, puis crée la branche `test_<AAMMJJ>-<HHMM>`. `learner/` ne garde que `.gitkeep` (nouvel apprenant), sauf si le mainteneur donne un point de départ (« depuis le concept 9 ») : écris alors un `learner/` fictif, concepts précédents validés, au format de `course/templates/learner/`. Ne commite rien. Réponds en deux lignes : la branche, puis « Ouvre une nouvelle conversation dans ce dossier pour le test, et reviens ici ensuite ».
  Phrase de déclenchement convenue : « Prépare un test du cours » (« … depuis le concept N »).
- **Fini quand** : le skill porte les trois changements, et un sous-agent neuf, depuis une branche de test laissée par une session de cours, demande la confirmation avant de purger, puis part de `main` ; et prépare un test « depuis le concept 9 ».
- **Fait le** : 2026-10-26, sections « Partir d'un `main` propre » et « Préparer un test du cours » dans le skill `maintenance`, §1 et §3 (étape 1) y renvoient ; ADR-055 ; test sur Sonnet dans un clone laissé sur une branche `test_…` avec des fichiers `learner/` : à une demande de ticket, l'agent demande la confirmation de purger, purge à l'accord, crée le ticket sur `main` ; « Prépare un test du cours depuis le concept 9 » crée `test_261026-0144` et un `learner/` fictif (0 à 8 validés), sans commit.
