# T-012 : Affiner la règle des trois questions qui décide d'un ADR

- **Créé le** : 2026-10-21
- **Constat** : test par sous-agent de T-009 et application de la règle aux tickets du
  2026-10-21. La question 3 (« la raison de la décision est-elle absente du cadre lui-même ? »)
  vaut presque toujours oui, puisque le skill `maintenance` impose d'écrire les règles sans les
  justifier : elle ne filtre rien, et seules les questions 1 et 2 trient. Conséquence : sept ADR
  dès le premier jour, dont certains discutables (T-005 passe la règle ; T-007, de nature
  proche, ne la passe que parce que la question 1 a été jugée « formulation »). Le jugement de
  la question 1 (« au-delà d'une formulation ») varie aussi d'un agent à l'autre.
- **À faire** : à affiner. Remplacer la question 3 par une question qui discrimine (pistes :
  « la décision a-t-elle demandé un arbitrage entre options, ou un test l'a-t-il motivée ? » ;
  « un agent qui ne connaît pas la raison risquerait-il de défaire la décision ? »), préciser la
  question 1 avec des exemples (oui : moment d'une écriture, structure de dossiers ; non :
  libellé, vocabulaire), puis réappliquer la règle à ADR-001 à 007 et retirer ceux qui ne
  passent plus. Fichiers : `.claude/skills/maintenance/SKILL.md` §4, `maintainer/adr/`.
- **Fini quand** : sur les tickets T-001 à T-010, deux agents neufs appliquent la règle et
  obtiennent la même liste d'ADR.
- **Fait le** : 2026-10-22, règle du §4 de `maintenance` réécrite (deux questions, jugement par
  décision, ancienne règle comptée comme option écartée, clause « annule, remplace ou
  contredit ») ; modèle d'ADR : un ADR annulé se supprime. Première révision testée par deux
  agents neufs : divergence sur T-015, T-016, T-020. Seconde révision : même liste pour les deux
  agents (T-002, 003, 005, 006, 007, 008, 010, 015, 017, 019, 020). Règle appliquée sans
  rattrapage ; ADR remplacés par ADR-010 supprimés ; ADR-014 écrit. Hors ticket : ADR-007
  (T-013).
