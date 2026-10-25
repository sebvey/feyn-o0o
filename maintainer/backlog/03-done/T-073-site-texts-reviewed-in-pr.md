# T-073 : Faire relire les textes propres au site dans la PR, sur l'aperçu

- **Créé le** : 2026-10-25
- **Constat** : session du 2026-10-25 (T-071b, T-072). `maintainer/site/procedure.md` impose de proposer mot pour mot au mainteneur tout texte public propre au site, et d'attendre sa validation avant de l'écrire. Le mainteneur a levé cette règle pour la session : l'agent a écrit les textes (accueil, chapeau de `/domaines/`, accroches des tuiles), les a listés mot pour mot dans la PR, et le mainteneur les a jugés sur l'aperçu local, en quatre séries de remarques traitées sur la branche. La boucle a mieux marché qu'une validation en chat : un texte se juge sur la page rendue. Décision du mainteneur (2026-10-25) : en faire la règle.
- **À faire** (comportement de l'agent de maintenance ; texte décidé, à appliquer tel quel) : dans `maintainer/site/procedure.md`, « Avant de changer », remplacer
  « Un texte public propre au site (accueil, À propos, chapeau de page) : propose-le mot pour mot au mainteneur et attends sa validation. »
  par
  « Un texte public propre au site (accueil, À propos, chapeau de page, accroche) : écris-le, puis liste-le mot pour mot dans la PR ; le mainteneur le juge sur l'aperçu local, que tu laisses ouvert, et ses remarques se traitent sur la branche. »
  Vérifier qu'aucune autre règle (skill `maintenance`, `structure.md`, docs du site) ne demande encore la validation préalable ; ADR selon §4 (l'ancienne règle est l'option écartée).
- **Fini quand** : `procedure.md` porte le nouveau texte, l'ancien n'existe plus nulle part, et l'ADR est écrit.
- **Fait le** : 2026-10-26, nouveau texte dans « Avant de changer » de `maintainer/site/procedure.md`, ancien texte absent ailleurs (skill `maintenance`, `structure.md`, docs du site) ; ADR-050 ; test par agent neuf (récrire un chapeau et des accroches) : il écrit les textes sans validation préalable, les liste dans la PR, laisse l'aperçu ouvert et traite les remarques sur la branche.
