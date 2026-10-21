# T-005 : Clarifier ce que fait le premier message à la reprise

- **Créé le** : 2026-10-21
- **Constat** : test par sous-agent de T-002. `CLAUDE.md` l. 25-27 : le premier message rappelle
  où on en est, propose de revenir sur un point, « puis attaque le prochain concept si
  l'apprenant dit de continuer ». Sur « on reprend », l'agent a lu « continuer » et a enchaîné
  rappel et concept 9b dans le même message : environ 14 à 15 lignes rendues, et deux sujets
  dans un message, contre « un seul concept par message ».
- **À faire** : dans `CLAUDE.md` l. 25-27, trancher : le premier message s'arrête au rappel et à
  la proposition, et le concept vient au message suivant, quel que soit le mot d'ouverture de
  l'apprenant (« on reprend », « on continue »).
- **Fini quand** : sur « on reprend », un sous-agent répond par le rappel et la proposition
  seuls, sans attaquer le concept.
- **Fait le** : 2026-10-21, étape 3 du démarrage de `CLAUDE.md` : le premier message s'arrête au
  rappel et à la proposition, même sur « on reprend » ou « on continue » ; le concept vient au
  message suivant. Test par sous-agent OK (premier message en 3 lignes dans les deux cas, 9b au
  message suivant).
