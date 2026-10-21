# T-009 : Restructurer le skill maintenance autour du backlog

- **Créé le** : 2026-10-21
- **Constat** : session de maintenance du 2026-10-21. Le skill part du diagnostic d'une session
  de cours (§1), alors que la maintenance courante consiste à créer, trier et traiter des tickets.
  Les propositions se font en interactif avec le mainteneur.
- **À faire** : réécrire `.claude/skills/maintenance/SKILL.md` autour de la boucle : créer ou
  trier un ticket (`00-proposed/` vers `01-todo/`), le traiter (proposer en interactif avec les
  quatre critères, appliquer, tester), le passer dans `02-done/`, appliquer la règle ADR
  (T-010). Le diagnostic d'une session de cours devient une section « Cas particulier ».
- **Fini quand** : la boucle du backlog est la procédure principale du skill, et le diagnostic
  n'en est plus qu'un cas particulier.
