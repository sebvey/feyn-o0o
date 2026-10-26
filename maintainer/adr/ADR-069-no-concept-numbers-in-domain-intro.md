# ADR-069 : Pas de numéro de concept dans la présentation d'un domaine

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-091

## Contexte
Au test du 2026-10-26, la présentation du domaine 1 écrivait « Scrum en bref et l'incrément (0),
le produit et le rôle du PO (1) ». Les numéros identifient les concepts pour le plan et le site
(`concepts/NN/`) ; l'apprenant, qui n'a rien vu encore, n'a aucune raison de le savoir. La règle
« le fil de ses concepts » ne disait rien des numéros.

## Décision
Dans `CLAUDE.md` : la présentation d'un domaine donne les noms des concepts dans l'ordre, sans
numéro. Le numéro apparaît quand le concept s'enseigne (premier message titré « Concept N : … »)
et dans les renvois, toujours avec le nom (« la DoD, au concept 11 »).

## Options écartées
- Garder les numéros dans la présentation : ils n'ont aucun sens avant le premier concept.
- Rendre les numéros « parlants » dès la présentation (expliquer ce qu'ils désignent) : alourdit
  un message qui doit tenir en quelques lignes, pour un bénéfice qui vient plus tard.

## Conséquences
Les fiches `course/domains/` gardent leurs numéros (elles servent au prof, pas à l'apprenant) :
le prof ne les recopie pas dans la présentation.
