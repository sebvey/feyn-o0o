# T-074 : Faire tourner le sous-agent de test sur Sonnet

- **Créé le** : 2026-10-26
- **Constat** : demande du mainteneur (2026-10-26, après le test de T-073, lancé sur Sonnet). Pour tester des instructions, il vaut mieux prendre un modèle moins capable : un modèle fort compense une consigne floue et cache le défaut. Haiku est écarté, trop faible. Le §5 du skill `maintenance` (« Tester ») ne fixe aucun modèle : l'agent de test prendrait par défaut celui de la session, Opus.
- **À faire** (comportement de l'agent de maintenance ; décidé par le mainteneur) : dans `.claude/skills/maintenance/SKILL.md`, §5, après la première phrase (« … il ne modifie jamais le dépôt. »), ajouter : « Le sous-agent tourne sur Sonnet. » ADR selon §4 (options écartées : le modèle de la session, Haiku).
- **Fini quand** : le §5 porte la phrase, et l'ADR est écrit.
- **Fait le** : 2026-10-26, phrase « Le sous-agent tourne sur Sonnet. » au §5 du skill `maintenance` ; ADR-051 ; pas de test par sous-agent (la règle porte sur le lanceur du test, elle se vérifiera au prochain ticket testé).
