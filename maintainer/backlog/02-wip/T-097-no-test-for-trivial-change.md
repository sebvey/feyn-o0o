# T-097 : Ne pas lancer de sous-agent de test pour un changement trivial

- **Créé le** : 2026-10-26
- **Constat** : T-095 (2026-10-26) change « sauté » en « pas encore validé » dans une règle de
  `CLAUDE.md` déjà testée ; le mainteneur demande de ne pas lancer de sous-agent, jugeant le test
  inutile. `maintenance` (§5) impose un sous-agent après tout changement qui modifie une
  procédure, sans exception : chaque retouche de formulation coûte quelques minutes et des
  tokens pour vérifier ce que la relecture du diff montre aussi bien. Demande du mainteneur :
  écrire la règle qui évite ces tests.
- **À faire** : `maintenance`, §5, ajouter à la fin du premier paragraphe (texte validé par le
  mainteneur) :
  > Pas de sous-agent pour un changement trivial : il n'ajoute, ne retire ni ne réordonne aucune
  > étape, condition, lecture ou écriture de l'agent. Exemples : un mot précisé, une règle
  > étendue à un cas voisin, un renvoi corrigé. La PR le dit sous les tests, avec la raison en
  > une ligne ; le mainteneur peut demander le test.

  `course-taught-check` reste dû après tout changement de ce qu'un concept enseigne.
- **Fini quand** : la règle est dans `maintenance` ; ADR écrit.
