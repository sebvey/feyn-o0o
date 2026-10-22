# T-015 : Reprendre depuis le début un sous-concept dont la question est en attente

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur. Premier message d'une session reprise sur 9b, posé en fin
  de session 6 sans réponse : le rappel cite la question (fusionner les stories A et B de la
  collectivité) sans son énoncé, illisible pour l'apprenant, et pose deux demandes (« ta
  réponse » et « revenir sur un point ? »).
- **À faire** : `CLAUDE.md`, démarrage, étape 3 : quand une question est en attente, le rappel
  la nomme sans la reposer, et le message suivant reprend le sous-concept depuis le début, à
  partir de l'énoncé de sa trace. Option écartée : un rappel plus complet, qui ne peut pas
  porter l'énoncé sans enfreindre ADR-005.
- **Fini quand** : sur « on reprend » avec une question en attente, le premier message est un
  rappel à une seule demande, puis le sous-concept est reposé en entier au message suivant.
- **Fait le** : 2026-10-22, règle ajoutée à l'étape 3 du démarrage de `CLAUDE.md`. Pas de test
  par sous-agent, à la demande du mainteneur : il teste en session réelle.
