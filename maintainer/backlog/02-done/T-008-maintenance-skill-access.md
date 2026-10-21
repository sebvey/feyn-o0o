# T-008 : Faire charger le skill maintenance quand le mainteneur parle de maintenance

- **Créé le** : 2026-10-21
- **Constat** : session de maintenance du 2026-10-21. Le skill `maintenance` porte
  `disable-model-invocation: true` : il est absent de la liste des skills de l'agent, qui ne peut
  pas le lancer ; il ne l'a lu que parce qu'il a regardé dans `.claude/` de lui-même. `CLAUDE.md`
  ne parle que du cours ; le mainteneur a dû écrire « CECI N'EST PAS UNE SESSION DE COURS ».
  Sa description est descriptive, pas déclenchante.
- **À faire** :
  - `CLAUDE.local.md` (non versionné, ajouté à `.gitignore`) : quand le mainteneur annonce une
    session de maintenance, lire et suivre `.claude/skills/maintenance/SKILL.md`, sans suivre le
    déroulé du cours de `CLAUDE.md` ;
  - garder `disable-model-invocation: true`, pour qu'un utilisateur qui clone ne déclenche pas la
    maintenance sans `/maintenance` ;
  - description du skill en « Charge ce skill quand… ».
- **Fini quand** : un sous-agent qui reçoit « session de maintenance » avec `CLAUDE.local.md` en
  contexte lit le skill et ne démarre pas le cours.
- **Fait le** : 2026-10-21, `CLAUDE.local.md` créé et ignoré par git (maintenance annoncée ou
  travail sur le cadre : lire et suivre le skill, ne garder de `CLAUDE.md` que « Style ») ;
  description du skill en « Charge ce skill quand… » ; `disable-model-invocation` gardé. Test
  par sous-agent OK (maintenance : skill lu, pas de cours ; « on reprend » : cours normal).
