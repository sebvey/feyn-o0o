# ADR-075 : Le prof ne fait un schéma que sur demande de l'apprenant

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-098

## Contexte
`CLAUDE.md`, « La boucle du cours », demandait au prof de dessiner de lui-même un schéma inline
dès qu'il rendait un concept plus clair (règle de l'`init`). Le mainteneur a relevé deux
défauts : un schéma fait à la volée est long à générer, et son contenu n'est pas maîtrisé par
le cours (rien ne le relit, il peut contredire le fichier du concept).

## Décision
`CLAUDE.md`, « La boucle du cours » : le prof ne fait un schéma que si l'apprenant en demande
un, même si le fichier du concept en prévoit un, et ne le propose pas. Il part alors de la section « Schéma » du fichier du concept, et suit
la métaphore du concept.

## Options écartées
- Dessiner de lui-même quand le schéma aide (règle précédente) : lent, et hors du contenu relu.
- Proposer un schéma sans le faire : la proposition déclenche la demande, donc la même lenteur.
- Refuser l'outil de schéma dans `.claude/settings.json` : bloquerait aussi la demande
  explicite.

- Retirer des fichiers de concept les consignes qui disent de montrer un schéma, dans ce
  ticket : une douzaine de fichiers, qui servent aussi au site ; reporté à T-099.

## Conséquences
Les concepts s'enseignent en texte. Tant que T-099 n'est pas fait, `CLAUDE.md` l'emporte sur
les consignes de schéma des fichiers de concept. Mettre à disposition du prof des schémas maintenus par le
cours reste une question ouverte, hors de cette décision.
