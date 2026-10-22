# T-030 : Borner la longueur des lignes dans la limite de 15 lignes par message

- **Créé le** : 2026-10-22
- **Constat** : test de T-018c (sous-agent prof neuf, concepts 3 et 4) : la règle « un retour à
  la ligne = une ligne » de `CLAUDE.md` (« La boucle du cours ») laisse passer des lignes de deux
  ou trois lignes affichées ; le prof note lui-même que ses messages de 3a2 (8 et 7 lignes)
  respectent la limite « à la lettre, pas dans l'esprit ». T-029 relève le même effet sur le
  concept 0.
- **À faire** : à affiner. Pistes : borner la longueur d'une ligne (en caractères ou en
  phrases), ou compter les lignes affichées à une largeur donnée ; voir ADR sur le comptage
  (T-007).
- **Fini quand** : à définir au tri.
