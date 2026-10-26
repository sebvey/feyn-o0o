# T-091 : Retirer les numéros de concept de la présentation d'un domaine

- **Créé le** : 2026-10-26
- **Dépend de** : T-090 (le texte à modifier, « Avant le premier concept d'un domaine », n'existe sous sa forme actuelle que sur la branche de T-090)
- **Constat** : au test du 2026-10-26, la présentation du domaine 1 donnait « Scrum en bref et
  l'incrément (0), le produit et le rôle du PO (1) ». Le mainteneur : « les numéros ne parlent
  pas, soit ils sont inutiles, soit il faut qu'ils parlent ». À ce stade l'apprenant ne sait pas
  qu'ils identifient des concepts (et les pages du site).
- **À faire** : dans `CLAUDE.md` :
  1. présentation d'un domaine : « le fil de ses concepts » devient « le fil de ses concepts
     (les noms dans l'ordre, sans numéro) » ;
  2. après le paragraphe « Avant chaque nouveau concept de la session » : « Le premier message
     d'un concept le titre avec son numéro (« Concept 3 : … »). Un renvoi à un autre concept
     donne son nom avec son numéro (« la DoD, au concept 11 »). »
- **Fini quand** : un sous-agent neuf, sur une copie, présente le domaine 1 sans aucun numéro de
  concept, puis ouvre le concept 0 par « Concept 0 : Scrum en bref » ; test manuel du mainteneur
  sur une branche de test.
