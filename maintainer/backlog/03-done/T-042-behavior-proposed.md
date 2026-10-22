# T-042 : Proposer avant d'appliquer un changement du comportement du prof

- **Créé le** : 2026-10-23
- **Constat** : demande du mainteneur (2026-10-23), après T-041 : l'autonomie vaut pour le
  contenu du cours, pas pour le comportement du prof. Sur le comportement, son avis a changé la
  solution avant qu'elle soit appliquée (T-035 retourné, T-030 recadré, T-040 venu de lui).
  Le tri des constats reste autonome, mais sans faire jouer un sous-agent à chaque fois : en
  comparant aux règles et en analysant l'enjeu.
- **À faire** : skill `maintenance` : `course/` en autonomie ; `CLAUDE.md`, skills, hooks et
  workflows : l'agent présente le ticket, son enjeu et sa recommandation, attend la décision du
  mainteneur, puis applique ; tri des constats par l'agent seul, contre les règles. ADR qui
  complète ADR-029.
- **Fini quand** : un agent neuf, à qui l'on demande de traiter un ticket de comportement,
  présente sa recommandation et attend ; sur un ticket de contenu, il va jusqu'à la PR ; il trie
  un constat sans lancer de sous-agent.
- **Fait le** : 2026-10-23, skill `maintenance` : `course/` en autonomie ; `CLAUDE.md` et tout `.claude/` (comportement des agents) proposés avec le texte exact, puis appliqués après décision ; ticket mixte arrêté une fois ; refus d'un ticket démarré ; tri des constats par l'agent seul, sans sous-agent ; ADR-030, ADR-029 complété ; test court par sous-agent (T-031 : arrêt à la recommandation ; T-018g : jusqu'à la PR ; constat trié sans sous-agent, rejeté) ; ambiguïtés relevées corrigées (texte exact, ticket mixte, workflows rangés en comportement, refus après démarrage), non retestées.
