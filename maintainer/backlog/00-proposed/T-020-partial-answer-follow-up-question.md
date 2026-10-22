# T-020 : Traiter la réponse partielle et la question de relance

- **Créé le** : 2026-10-22
- **Constat** : test par sous-agent de T-019. L'apprenant répond à moitié à la question de 10b
  (« pas prête », sans proposition au planning) et pose une question annexe. Le prof répond,
  puis pose une question de relance. Trois règles de `CLAUDE.md` ne prévoient pas ce cas :
  - « Passe au concept suivant seulement si la réponse montre la compréhension ; sinon
    réexplique sous un autre angle » : rien entre réussi et raté (relancer sur la moitié qui
    manque) ;
  - tableau de la mémoire : « Tu corriges une réponse -> Plus de question en attente », alors
    que la relance posée dans le même message est une question en attente ;
  - reprise (ADR-008) : « reprend le sous-concept en cours depuis le début […] à partir de
    l'énoncé que « Prochaine étape » désigne » fait reposer la question de la banque, dont la
    moitié est acquise ; l'agent a dû ajouter une consigne ad hoc dans « Prochaine étape ».
- **À faire** : à trier. Pistes : une réponse partielle se corrige sur ce qui est juste puis se
  relance sur ce qui manque ; la relance est une question posée comme une autre (ligne « Tu
  poses une question » du tableau) ; à la reprise, l'énoncé de la banque se repose, puis la
  dernière question posée (la relance) plutôt que celle de la banque.
- **Fini quand** : à définir au tri.
