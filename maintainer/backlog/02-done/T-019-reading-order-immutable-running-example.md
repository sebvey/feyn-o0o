# T-019 : Ordonner la lecture au démarrage ; rendre le fil rouge non modifiable par le prof

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur.
  - `CLAUDE.md`, démarrage, étape 1 : sept fichiers listés à plat, sans ordre ; la lecture du
    fichier du concept est décrite deux fois (étape 1 et « Avant chaque concept »).
  - Le prof modifiait `course/fil-rouge-velos.md` (« C'est toi qui fixes les faits métier »,
    ligne « Faits fixés » du tableau de la mémoire), alors que `course/` est commun à tous les
    apprenants et tenu par le mainteneur.
- **À faire** :
  - Démarrage : lecture en trois temps (où on en est, qui est l'apprenant, le cours), chacun
    dépendant du précédent ; `learner/travaux.md` lu quand l'échange porte sur une production ;
    « Avant chaque concept » limité aux nouveaux concepts de la session.
  - Fil rouge : le prof ne le modifie jamais. S'il ne suffit pas, il improvise le fait, l'acteur
    ou la source, sans contredire le fichier, et le note aussitôt dans
    `maintainer/improvements/` (type `fil rouge`). Corriger partout où la règle était
    contredite : `CLAUDE.md` (description de `course/`, point fil rouge, tableau de la mémoire),
    en-tête de `course/fil-rouge-velos.md`, périmètre du skill `maintenance`, types de
    `maintainer/improvements/README.md`.
  - Décision du mainteneur : un fait improvisé n'est pas reporté côté apprenant. Le support
    d'amélioration sert à améliorer le cours localement, pas à faire mémoire entre sessions.
- **Fini quand** : un sous-agent neuf lit les fichiers dans l'ordre prescrit, ne modifie pas le
  fil rouge, et note dans `maintainer/improvements/` un fait qu'il improvise.
- **Fait le** : 2026-10-22, démarrage en trois temps dans `CLAUDE.md`, fil rouge non modifiable
  (cinq endroits corrigés), ADR-012 (complète ADR-009). Test par sous-agent sur une copie :
  lecture dans l'ordre, `travaux.md` non lu faute de production, fil rouge intact, acteur
  improvisé (un directeur des opérations, arbitre au-dessus de la DSI) noté dans
  `maintainer/improvements/10-dor-dod.md`. Défaut corrigé : le README ne disait pas dans quel
  fichier noter un fait improvisé. Hors ticket : réponse partielle et question de relance
  (T-020) ; ni Scrum Master ni sponsor dans le fil rouge (noté dans T-018).
