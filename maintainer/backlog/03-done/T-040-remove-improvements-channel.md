# T-040 : Retirer `maintainer/improvements/` du cadre du prof

- **Créé le** : 2026-10-23
- **Dépend de** : T-018g
- **Constat** : demande du mainteneur (2026-10-23, en traitant T-030). `CLAUDE.md` fait écrire
  au prof dans `maintainer/improvements/` (10 mentions : fait du fil rouge improvisé, source
  manquante, origine d'un terme, aparté, demande sur la forme, incompréhension…). Un vrai
  utilisateur, qui suivra le cours hors de ce dépôt (plugin, Cowork, T-034), n'aura aucun moyen
  de faire remonter ces entrées : le mécanisme est un reste de la phase où seul le mainteneur
  suit le cours. Il sert encore de trace aux sessions de test et d'entrée aux lots (T-018g :
  `15-vie-story.md`), d'où le retrait après T-018g. Une règle « remonte les problèmes » se
  pensera avec la diffusion du cours, pas dans ce ticket.
- **À faire** : retirer de `CLAUDE.md` toutes les écritures dans `maintainer/improvements/` et
  sa mention dans le périmètre de `maintainer/` ; adapter le skill `maintenance` (périmètre,
  tri du backlog, diagnostic d'une session, test du §5) ; décider du sort du dossier et de ses
  entrées restantes ; mettre à jour les renvois (`course/fil-rouge-velos.md`, fichiers de
  `course/sources/`, T-023) ; ADR qui revient sur ADR-010 (canal unique) et touche ADR-012,
  ADR-016, ADR-021 et ADR-024.
- **Fini quand** : plus aucune écriture du prof dans `maintainer/` ; un prof neuf qui improvise
  un fait du fil rouge ou reçoit une demande sur la forme ne cherche pas à l'écrire ailleurs
  que là où le cadre le dit ; le skill `maintenance` ne s'appuie plus sur ce dossier.
- **Fait le** : 2026-10-23, `CLAUDE.md` : le prof ne lit ni n'écrit rien dans `maintainer/` (fait improvisé, source manquante, origine d'un terme, aparté non notés ; demande sur la forme : adaptation et préférence dans `learner/apprenant.md`, sinon « le cours ne le prévoit pas ») ; skill `maintenance` aligné (périmètre, point du backlog, démarrage, test, diagnostic) ; `maintainer/improvements/` supprimé, renvois des sources vers l'historique git, fil rouge, T-018 et T-023 à jour ; ADR-032 ; test par sous-agent prof neuf (9a1 : fait improvisé, origine d'un terme, source absente, demande de tableaux, arrêt) : rien lu ni écrit dans `maintainer/`, sources et forme conformes.
