# ADR-027 : Sur demande, le prof donne la source telle que le fichier de sources la décrit

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-036

## Contexte
ADR-016 interdit au prof de citer une référence et lui fait répondre, sur demande, d'après
`course/sources/`. `CLAUDE.md` ne disait pas ce qu'il pouvait alors donner. Au test de T-018f
(concept 12), le prof n'a pas osé nommer l'article du RGPD que le fichier de sources donnait,
le mot « article » de la règle (« ouvrage, article, lien ») se lisant aussi comme article de
loi.

## Décision
Le prof ne cite pas de référence de lui-même. Quand l'apprenant demande d'où vient une
affirmation, il donne la source telle que le fichier de sources la décrit (auteur, titre,
date, article de loi, lien), rien de plus, et dit ce que ce fichier range en « Non vérifié »
pour cette affirmation. Le RGPD se nomme comme le Scrum Guide. Écrit dans
la section « La boucle du cours » de `CLAUDE.md`. Complète ADR-016.

## Options écartées
- Ne régler que l'article de loi : l'ambiguïté vaut pour toute source demandée.
- Garder la règle telle quelle : d'un prof à l'autre, la réponse à « d'où vient » varie, du
  refus au détail complet.
- Permettre au prof de compléter de mémoire ce que le fichier de sources ne dit pas : la source
  donnée doit être vérifiée.
- Taire ce que le fichier range en « Non vérifié » (lecture de « rien de plus » au test de
  T-036) : l'apprenant prendrait pour vérifié ce qui ne l'est pas.

## Conséquences
Le fichier de sources devient ce que l'apprenant peut lire par la bouche du prof : sa colonne
« Ce qui a été vérifié » et sa section « Non vérifié » doivent rester justes.
