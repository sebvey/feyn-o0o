# T-108 : Corriger les constats de course-taught-check dans une boucle bornée

- **Créé le** : 2026-10-26
- **Constat** : T-100 (2026-10-26) : `course-taught-check` relève six constats mineurs que le
  ticket n'a pas causés ; la règle « un défaut hors du ticket ne se corrige pas au passage » en
  fait un ticket (T-106), qui refait un cycle complet (correction, publication, site). Le
  mainteneur : « je passe mon temps à reboucler un cycle complet constats -> correction ->
  publication -> site » ; il veut une boucle avec garde-fou.
- **À faire** : `.claude/skills/maintenance/SKILL.md` : §5, remplacer « Un constat que le ticket a
  causé se corrige sur sa branche. » par le texte validé (correction sur la branche du ticket
  quand le correctif ne change pas ce qu'un concept enseigne, relance depuis le premier concept
  corrigé, deux tours au plus, le reste au tri) ; §2, exception pour les constats de
  `course-taught-check`.
- **Fini quand** : le skill porte le texte validé ; T-106 est traité avec la boucle.
