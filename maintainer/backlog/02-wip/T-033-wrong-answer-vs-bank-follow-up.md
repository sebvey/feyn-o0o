# T-033 : Accorder la réponse fausse de `CLAUDE.md` et les relances de la banque

- **Créé le** : 2026-10-22
- **Constat** : tests de T-018e (2026-10-22), deux sous-agents prof neufs sur trois. Pour une
  réponse fausse, `CLAUDE.md` (« La boucle du cours ») demande de réexpliquer sous un autre
  angle, avec un autre exemple ; les « Erreurs fréquentes » des banques prescrivent souvent, pour
  la même erreur, une question ciblée (9a2 : donner raison à Nora, « à quel niveau Malik se
  sert-il de quelque chose ? » ; 11b : « oui, l'équipe s'organisera »). Le prof de 9a2 a
  réexpliqué et gardé la question de la banque en repli ; celui de 11b a traité la réponse comme
  partielle pour suivre la banque.
  Test de T-018f (2026-10-23, concept 13) : face à une réponse elliptique (« le bilan, ça
  presse »), le prof fait préciser avant de corriger, comme le demandent les fichiers des
  concepts, et compte cette demande comme une relance de rang 1 ; `CLAUDE.md` ne dit pas ce cas
  (ancien T-038, fusionné ici). Décision du mainteneur : une demande de précision compte comme
  une relance, pour que le prof ne relance pas sans fin ; à ajuster d'après les retours
  d'apprenants.
- **À faire** : décidé au tri (2026-10-23). Dans `CLAUDE.md` (« La boucle du cours »), règle
  de la réponse fausse : « Réponse fausse : si la banque prévoit une relance pour cette erreur,
  pose-la d'abord ; elle compte comme relance. Sinon, ou si elle échoue, réexplique » ; y dire
  aussi qu'une demande de précision sur une réponse elliptique compte comme relance. Les banques
  restent telles quelles ; le plafond de deux relances borne l'ensemble.
- **Fini quand** : un prof neuf, face à une erreur fréquente fausse, sait sans hésiter s'il
  relance ou réexplique ; face à une réponse elliptique, il fait préciser et compte la demande
  comme une relance.
