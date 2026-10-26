# T-114 : Distinguer exemple et question par un bloc de citation

- **Créé le** : 2026-10-26
- **Constat** : le mainteneur veut retrouver les questions en remontant la conversation. Le
  texte de l'agent ne peut pas être coloré (Markdown rendu par l'app) ; essai en session de
  maintenance : l'exemple et la question dans un bloc de citation, un retour à la ligne après
  chaque titre, validé par le mainteneur.
- **À faire** : dans `CLAUDE.md`, « La boucle du cours », puce « Un seul concept par
  message » : remplacer « puis **une question** qui teste la compréhension (…). » par la
  forme suivante, en gardant les exemples entre parenthèses et la phrase « Introduis-la par
  « Question pour toi » » fusionnée avec la nouvelle règle :
  « L'exemple et la question se mettent chacun dans le bloc de citation du message (`> `), en
  une seule citation : `> **Exemple :**`, ligne vide citée, le texte, ligne vide citée,
  `> **Question pour toi :**`, ligne vide citée, la question. » Le reste du message (explication,
  correction, annonce de la suite) reste hors citation. Une relance, ou une question posée sans
  exemple, se met dans un bloc de citation de même forme, sans la partie « Exemple ».
  Comportement du prof : à présenter au mainteneur avant application (skill `maintenance`,
  §3 étape 3).
- **Fini quand** : un test « on continue » montre l'exemple et la question dans une même
  citation, avec les titres en gras suivis d'un retour à la ligne, et le message tient
  toujours en quinze lignes.
- **Fait le** : 2026-10-26, forme citation pour exemple et question inscrite dans `CLAUDE.md` (« Un seul concept par message ») ; pas de test par sous-agent, changement de mise en forme.
