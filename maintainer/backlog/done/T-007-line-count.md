# T-007 : Préciser que la limite de 15 lignes compte les lignes du source

- **Créé le** : 2026-10-21
- **Constat** : tests par sous-agent de T-002 et T-005. La règle « Jamais plus de 15 lignes par
  message » (`CLAUDE.md`, « Règles de la session ») ne dit pas quoi compter ; les agents
  hésitent entre lignes du source et lignes affichées, et une story citée sur une ligne du source
  en occupe deux ou trois à l'écran. Décision du mainteneur : on compte les lignes du source.
- **À faire** : dans `CLAUDE.md`, préciser que la limite porte sur les lignes du texte écrit
  (retours à la ligne), et dire si les lignes vides comptent.
- **Fini quand** : un sous-agent sait compter les lignes de son message sans hésiter, et le
  rapporte sans réserve sur le mode de calcul.
- **Fait le** : 2026-10-21, `CLAUDE.md` (« Règles de la session ») : on compte les lignes du
  texte écrit (un retour à la ligne = une ligne), pas leur affichage ; les lignes vides ne
  comptent pas. Test par sous-agent OK (comptage montré sans hésiter). Reste ouvert : une ligne
  très longue compte pour une, la limite peut se contourner.
