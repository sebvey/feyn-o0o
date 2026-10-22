# T-033 : Accorder la réponse fausse de `CLAUDE.md` et les relances de la banque

- **Créé le** : 2026-10-22
- **Constat** : tests de T-018e (2026-10-22), deux sous-agents prof neufs sur trois. Pour une
  réponse fausse, `CLAUDE.md` (« La boucle du cours ») demande de réexpliquer sous un autre
  angle, avec un autre exemple ; les « Erreurs fréquentes » des banques prescrivent souvent, pour
  la même erreur, une question ciblée (9a2 : donner raison à Nora, « à quel niveau Malik se
  sert-il de quelque chose ? » ; 11b : « oui, l'équipe s'organisera »). Le prof de 9a2 a
  réexpliqué et gardé la question de la banque en repli ; celui de 11b a traité la réponse comme
  partielle pour suivre la banque.
- **À faire** : à trier. Pistes : dire dans `CLAUDE.md` que la relance d'une erreur fréquente
  de la banque prime, et que la réexplication vient après elle ; ou dire dans
  `course/templates/concept.md` qu'une erreur fréquente qui est une réponse fausse porte un
  exemple de réexplication, pas une relance.
- **Fini quand** : un prof neuf, face à une erreur fréquente fausse, sait sans hésiter s'il
  relance ou réexplique.
