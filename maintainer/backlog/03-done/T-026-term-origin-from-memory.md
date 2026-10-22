# T-026 : Répondre de mémoire sur l'origine d'un terme, en le disant, et proposer de creuser si un outil de recherche est disponible

- **Créé le** : 2026-10-22
- **Constat** : test de T-018b (2026-10-22). Le prof a renoncé à donner l'origine d'un terme
  (« Scrum », « sprint »), levier connu de sve, faute de source dans `course/sources/`. Demande du
  mainteneur, en attendant T-025 : le prof répond de mémoire et le précise ; s'il dispose d'un
  outil de recherche, il propose de creuser ; sinon il ne propose rien.
- **À faire** : dans `CLAUDE.md`, règle sur l'origine d'un terme absente de `course/sources/` :
  réponse de mémoire, signalée comme telle (non vérifiée) ; proposition de vérifier seulement si
  un outil de recherche est disponible dans la session. Articuler avec la règle existante (« Si
  l'apprenant demande d'où vient une affirmation, réponds d'après `course/sources/` ; si elle n'y
  est pas, dis-le, et note-le dans `maintainer/improvements/` »), sans la dupliquer : dire si la
  note dans `maintainer/improvements/` vaut aussi pour l'origine d'un terme.
- **Fini quand** : un sous-agent prof neuf, à qui l'apprenant demande d'où vient « sprint »,
  répond de mémoire en le disant, et propose de vérifier si et seulement si un outil de recherche
  est disponible.
- **Fait le** : 2026-10-22, règle ajoutée à `CLAUDE.md` (réponse de mémoire signalée, vérification proposée seulement avec un outil de recherche, un outil à charger compte, résultat vérifié et source ajoutée à la note si l'apprenant accepte, note dans `maintainer/improvements/` dans tous les cas), ADR-024 ; test par sous-agent (« pourquoi Scrum, pourquoi sprint ? » en 0a2, avec et sans outil) : sources lues d'abord, réponse de mémoire signalée, vérification proposée en A et pas en B, note dans `maintainer/improvements/00-scrum.md`, 15 lignes tenues, retour au fil ; complément ajouté après le test (outil à charger, suite à un oui).
