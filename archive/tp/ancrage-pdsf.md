# Ancrage PDSF

À introduire **en fin de parcours** (concept 15 de `learner/parcours.md`), pas avant :
l'apprenant doit d'abord maîtriser les notions génériques. Ce fichier résume ce que l'agent
doit savoir de PDSF, car le dossier vit hors du dépôt PDSF.

Source : dépôt `github.com/Loulen/prompt-driven-software-factory`, fichiers
`skills/to-us/US-FORMAT.md`, `skills/to-us/SKILL.md`, `skills/build-factory/business-backlog.md`,
`skills/to-tickets/SKILL.md`, `skills/git-flow/SKILL.md`. En cas de doute, l'apprenant peut ouvrir le
dépôt : il fait foi.

## Deux backlogs

- **Backlog métier** : humain, le « quoi » et le « pourquoi », sans technique ni modèle de
  données. PDSF l'appelle « business backlog » et évite le terme « product backlog ».
- **Backlog technique** : tickets autoporteurs, par et pour les agents.
- N stories ≠ N tickets : une story peut donner plusieurs tickets, plusieurs stories peuvent
  fusionner en un ticket.

## Chaîne

story sélectionnée par un humain -> `/grill-with-docs` (conception, sur la branche
`integration/<ref>-<slug>`) -> `/to-spec` (spec sur le backlog technique) -> `/to-tickets`
(tickets + commentaire en retour sur la story) -> implémentation.

`/to-us`, en amont : transforme une feature en user stories via un grilling PO (une question à la
fois sur valeur, acteur, résultat observable, acceptation), en tranches verticales ; une ingestion
admin est une story à part entière. Revue humaine obligatoire avant publication.

## Format d'une story PDSF

Titre : `<Feature> US-<n> [user|admin|tech] <Verbe à l'infinitif + objet>`
(`user` : valeur visible de l'utilisateur final ; `admin` : geste opérationnel, ingestion,
reporting ; `tech` : socle sans comportement métier observable).

Blocs : **INTENTION** (en tant que / je veux / afin de), **CONTEXTE**, **COMPORTEMENT ATTENDU**
(flux nominal, cas non conforme), **RÈGLES MÉTIER** (numérotées, citées par leur numéro),
**CRITÈRES D'ACCEPTATION** (action -> résultat observable), **HORS PÉRIMÈTRE**, **DÉPENDANCES**.
Hors périmètre et dépendances se répondent. Un projet peut adapter ce format dans
`docs/agents/us-format.md`.

## Sélection et référence

- Un humain **sélectionne** les stories à traiter (colonne ou état dédié) ; l'agent ne pioche
  que là.
- Chaque story a une **référence stable** : elle nomme la branche `integration/<ref>-<slug>`, et
  `/to-tickets` commente la story avec les tickets créés.

## `docs/agents/business-backlog.md`

Décrit pour les agents : l'outil et son accès (CLI, MCP, URL ou « manuel »), l'emplacement
(tableau, projet), l'authentification, la colonne de sélection, les transitions d'état (au
démarrage de la conception, à l'ouverture de la PR), et les gestes **lire / commenter /
déplacer**. Sans outil intégrable, le flux tient : le commentaire de retour devient un geste
manuel.
