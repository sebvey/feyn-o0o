# T-030 : Borner la longueur des lignes dans la limite de 15 lignes par message

- **Créé le** : 2026-10-22
- **Constat** : test de T-018c (sous-agent prof neuf, concepts 3 et 4) : la règle « un retour à
  la ligne = une ligne » de `CLAUDE.md` (« La boucle du cours ») laisse passer des lignes de deux
  ou trois lignes affichées ; le prof note lui-même que ses messages de 3a2 (8 et 7 lignes)
  respectent la limite « à la lettre, pas dans l'esprit ». T-029 relève le même effet sur le
  concept 0.
  Tests de T-018f (2026-10-23) : 13a2 ne tient en 15 lignes qu'avec des lignes de 120 à 170
  caractères.
- **À faire** : décidé au tri (2026-10-23) : borner la ligne à 100 caractères dans la règle des
  15 lignes de `CLAUDE.md` (« La boucle du cours ») ; voir le comptage décidé par T-007.
- **Fini quand** : un prof neuf compte ses lignes à 100 caractères au plus, et les messages
  denses des concepts (13a2, 0) tiennent ou sont signalés à découper.
