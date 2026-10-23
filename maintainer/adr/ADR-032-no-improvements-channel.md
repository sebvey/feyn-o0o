# ADR-032 : Le prof n'écrit plus dans `maintainer/` ; `maintainer/improvements/` est retiré

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-040

## Contexte
ADR-010 faisait de `maintainer/improvements/` le canal unique entre le cours et le mainteneur :
le prof y notait, au fil de la session, un fait du fil rouge improvisé, une source manquante,
l'origine d'un terme, un aparté, une incompréhension, une demande sur la forme. Il ne relisait
jamais ces entrées. Un utilisateur qui suivra le cours hors de ce dépôt (plugin, Cowork, T-034)
n'aura aucun moyen de les faire remonter : le mécanisme ne servait qu'à la phase où le
mainteneur suit lui-même le cours.

## Décision
`CLAUDE.md` : le prof ne lit ni n'écrit rien dans `maintainer/`. Il improvise un fait du fil
rouge sans le noter, dit qu'une source manque sans la noter, et traite une demande sur la forme
en s'adaptant si les règles le permettent (préférence notée dans `learner/apprenant.md`), sinon
en disant que le cours ne le prévoit pas. Skill `maintenance` : le diagnostic d'une session
s'appuie sur `learner/` ou sur la conversation que le mainteneur donne. Le dossier est
supprimé ; les fichiers de sources renvoient à l'historique git. Complète ADR-010 (canal
unique), ADR-012 (fait improvisé noté), ADR-016 (source manquante notée), ADR-021 et ADR-024
(note sur l'origine d'un terme).

## Options écartées
- Garder le dossier jusqu'à la diffusion du cours : écritures à chaque session, que personne ne
  lira hors de ce dépôt.
- Écrire tout de suite une règle « remonte les problèmes » vers le mainteneur : elle dépend du
  canal de diffusion, pas encore choisi (T-034).

## Conséquences
Le mainteneur n'a plus de trace écrite des sessions hors de `learner/` : pour diagnostiquer,
il garde la conversation. Un fait improvisé n'étant plus noté, deux sessions peuvent
improviser différemment le même fait : le prof ne doit pas contredire le fil rouge, mais rien
ne garde ses improvisations. Une remontée des problèmes se pensera avec la diffusion du cours.
