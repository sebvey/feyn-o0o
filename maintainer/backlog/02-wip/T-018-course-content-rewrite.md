# T-018 : Réécrire le contenu du cours pour qu'il soit utilisable de bout en bout (parent)

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur. Le cours s'est construit au fil des sessions d'un seul
  apprenant (sve) (numéros d'avant T-018a) :
  - les concepts 1 à 5 et l'annexe A1 n'ont plus d'exemple (« à réécrire avec un exemple
    générique » depuis l'abandon du projet réel) ; la fiche 06 garde un visuel sur la story des
    OF ;
  - les concepts 6 à 10 ont des exemples vélos, mais écrits pour sve, avec ses réponses ;
  - les concepts 11 à 13 n'existent que comme titres dans `learner/parcours.md` ;
  - le plan n'a jamais été confronté à un public cible ni à des sources de référence : il est
    né du profil de sve (développeur data, débutant en gestion de produit) ;
  - les exemples sont improvisés concept par concept : pas de banque d'exemples éprouvés, pas
    de réponses attendues relues, pas de sources vérifiées.

  Travail de fond, important : y mettre les moyens (sous-agents, revues croisées, tests).

- **Dépend de** : T-017 (structure : `course/plan.md`, un fichier par concept dans
  `course/concepts/`, `maintainer/improvements/`, `learner/observations.md`, TP archivé).

- **À faire** :

  ### 1. Objectif et entrées

  **Objectif** : un cours qu'un agent prof neuf peut donner du premier au dernier concept à
  quelqu'un du public cible, sans improviser le fond : chaque concept a son contenu, ses
  sous-concepts, une banque d'exemples et de questions avec réponses attendues, ses pièges et
  ses sources. Le prof garde son autonomie (apartés, exemples improvisés, voir T-017 §3) :
  le cours est un socle, pas un script.

  **Entrées** (après T-017) :
  - `course/plan.md` (public cible, liste des concepts) ;
  - `course/concepts/` : fiches migrées telles quelles et banque d'exemples tirée des traces ;
  - `course/fil-rouge-velos.md` (cadré par T-016) ;
  - `maintainer/improvements/` : incompréhensions, questions mal posées, apartés réutilisables ;
  - `maintainer/work/T-018/learner-observations.md` : observations, profil de départ et une
    production d'un premier apprenant, anonymisés (T-011), à lire comme des **erreurs
    typiques** possibles du public cible ;
  - `maintainer/work/T-018/framing.md` : cadrage de T-018a (références et analyse des manques,
    situations du fil rouge par concept, erreurs relevées dans les fiches actuelles) ; sa
    numérotation est celle du brouillon, la correspondance est en tête du fichier ;
  - `course/glossary.md` ;
  - les ADR, pour ne pas défaire une décision sans le dire.

  ### 2. Sous-tickets

  Découpage vertical : chaque lot passe par toutes les étapes et livre des concepts prêts à
  enseigner. Les produits intermédiaires vont dans `maintainer/work/T-018/` (cadrage, rapports
  de revue, rapports de test), supprimé à la clôture (l'historique git les garde). Les sources
  vont dans le cours : `course/sources/`.

  | Sous-ticket | Contenu | Dépend de | État |
  |---|---|---|---|
  | T-018a | Cadrer le curriculum et le fil rouge, découper en lots | | fait le 2026-10-22 (ADR-017) |
  | T-018b | Lot 1 : concepts 0, 1, 2 ; écrit et teste le workflow `course-lot`, générique | | fait le 2026-10-22 (ADR-020) |
  | T-018c | Lot 2 : concepts 3, 4, 5 | T-018b | à faire |
  | T-018d | Lot 3 : concepts 6, 7, 8 | T-018c | à faire |
  | T-018e | Lot 4 : concepts 9, 10, 11 | T-018d | à faire |
  | T-018f | Lot 5 : concepts 12, 13, 14 | T-018e | à faire |
  | T-018g | Lot 6 : concepts 15, 16, 17, annexes A1 et A2 | T-018f | à faire |
  | T-018h | Cohérence d'ensemble et tests de bout en bout (§4), clôture (§7) | T-018g | à faire |

  **Tickets liés, hors de T-018** :
  - T-021 (fait le 2026-10-22, ADR-018) : parti pris des sprints, annoncé au concept 0 ; annexe
    A2 « Travailler sans sprint » ajoutée au lot 6.
  - T-022 (fait le 2026-10-22, ADR-016) : sources tracées dans `course/sources/` ; a changé la
    méthode du §3.
  - T-023 (à faire) : chaîne de création d'un cours ; `course-lot` (T-018b) et le test de bout
    en bout (T-018h) en sont les étapes 3 et 4, d'où un workflow générique.

  **Prochaine étape** : traiter T-018c en lançant `course-lot` sur son sous-ticket. sve repart
  de zéro en nouvel apprenant (T-011) et teste chaque lot à mesure qu'il est mergé.

  ### 3. Méthode d'un lot

  Chaque sous-ticket de lot se termine par la validation du mainteneur, qui relit la PR du lot
  avant son merge.

  **Étape 1 : sources** (un agent de recherche par concept, en parallèle)
  - Pour chaque concept : ce qui relève du consensus, avec source primaire (texte du Scrum
    Guide, article ou livre d'origine) ; ce qui relève d'un choix d'école, attribué à son
    auteur ; les affirmations des fiches actuelles vérifiées une par une (dates, auteurs,
    citations), avec les erreurs relevées.
  - Distinguer source primaire, source secondaire et marketing ; signaler ce qui n'a pas pu
    être vérifié.
  - Sortie : `course/sources/NN-slug.md`, selon `course/templates/sources.md` ; les erreurs
    relevées dans les fiches actuelles vont dans `maintainer/work/T-018/`.

  **Étape 2 : rédaction** (un agent rédacteur par concept, en parallèle, par lots)
  - Écrit `course/concepts/NN-slug.md` selon le modèle de T-017, à partir du plan (T-018a), des
    sources, du plan du fil rouge, des améliorations et de la banque d'exemples existante.
  - Banque d'exemples : au moins un exemple et une question par sous-concept, dans le fil rouge,
    chacun avec réponse attendue, erreurs fréquentes et ce qui marche pour expliquer ; garder
    les exemples éprouvés avec sve en tenant compte de leurs « Pour améliorer le cours ».
  - Le rédacteur ne fixe aucun fait nouveau du fil rouge : s'il en a besoin, il le liste à part
    ; le coordinateur arbitre et met à jour `course/fil-rouge-velos.md`.
  - Le fichier du concept ne cite aucune référence : chaque affirmation que le rédacteur
    ajoute a sa ligne dans le fichier de sources, ou dans sa section « Non vérifié ».

  **Étape 3 : revues croisées** (par concept, deux relecteurs indépendants, en parallèle)
  - **Fond** : exactitude (chaque affirmation confrontée aux sources de l'étape 1 et présente
    dans `course/sources/NN-slug.md` ; consensus et choix d'école correctement étiquetés) et
    cohérence (faits du fil rouge, glossaire, renvois entre concepts, pas de doublon avec un
    autre concept).
  - **Forme** : pédagogie (sous-concepts tenables en 15 lignes ; chaque question teste la
    compréhension : reformuler, corriger, trancher un cas limite, jamais « as-tu compris ? » ;
    réponses attendues justes et nuancées ; pièges réalistes pour le public cible) et style
    (règles de la section « Style » de `CLAUDE.md`).
  - Le rédacteur trie chaque constat (vrai défaut ou faux positif, justifié) en corrigeant. Un
    second tour, par les relecteurs qui avaient un constat bloquant, seulement s'il y en avait ;
    ce qui reste va à l'arbitrage du mainteneur.
  - La cohérence entre les concepts du lot est vérifiée par le coordinateur.

  ### 4. Cohérence d'ensemble et tests de bout en bout (dernier sous-ticket)

  **Cohérence d'ensemble** (un agent qui lit tout le cours)
  - Progression (chaque concept s'appuie sur les précédents, rien n'est utilisé avant d'être
    introduit), redondances, trous, glossaire, fil rouge (aucune contradiction, chaque acteur
    utilisé est présenté).

  **Tests de bout en bout** (sessions simulées)
  - Un agent prof neuf, qui lit `CLAUDE.md` sur disque, face à un agent apprenant qui joue le
    public cible avec des erreurs typiques (tirées des observations anonymisées et des
    améliorations).
  - Scénarios : premier concept d'un nouvel apprenant ; un concept au milieu ; reprise après
    coupure sur une question en attente ; un aparté hors cours puis retour au fil ; un concept
    nouveau (12 à 17) ; « quelle est ta source ? » sur une affirmation du cours.
  - Un juge note chaque session sur une grille : règles de `CLAUDE.md` (15 lignes, une
    question qui teste, consensus et choix d'école), fidélité au contenu du concept, exemples
    dans le fil rouge, écritures mémoire attendues.
  - Les défauts du cours se corrigent dans le sous-ticket final ; ceux du cadre deviennent des
    tickets.

  ### 5. Organisation agentique

  - Un **coordinateur** (la session de maintenance) : tient le plan, arbitre les faits du fil
    rouge, fusionne les retours, présente chaque lot au mainteneur.
  - Chaque lot tourne en workflow multi-agents (pipeline : sources -> rédaction -> revues ->
    corrections, chaque concept avance dès que son étape précédente est finie). Le premier
    sous-ticket de lot écrit ce workflow, le sauvegarde dans `.claude/workflows/course-lot`
    (paramètres : le dossier du cours et le sous-ticket du lot ; générique, voir T-023) et le
    teste ; les lots suivants le relancent par son nom
    (« lance course-lot sur T-018c »), sans le réécrire. Une session ne lance un workflow que
    sur demande du mainteneur : le nommer suffit. Un workflow par lot, pour valider lot par
    lot ; de 5 à 8 agents par concept.
  - Les agents de recherche et de rédaction, et le relecteur du fond, tournent sur le modèle le
    plus capable ; le relecteur de la forme et le cadrage, sur un modèle plus léger. L'agent de
    sources part des sources déjà vérifiées (cadrage, fichiers de sources existants) et ne
    cherche que ce qui manque.
  - Briefs des agents : chacun lit les fichiers sur disque (pas de résumé de seconde main),
    connaît le public cible, le modèle de fichier, le fil rouge et les règles de style.

  ### 6. Apprenant en cours de parcours

  sve suit le cours en parallèle. Le 2026-10-22 (T-011), `learner/` a été vidé : sve repart en
  nouvel apprenant ; ses observations, anonymisées, sont dans
  `maintainer/work/T-018/learner-observations.md`.
  - Chaque sous-ticket se fait sur une branche ; le merge ne doit pas casser sa reprise
    (« Prochaine étape » doit pointer vers un contenu existant).
  - Un sous-ticket qui renumérote ou redécoupe des concepts met à jour, dans
    `learner/parcours.md`, le tableau des statuts et « Prochaine étape », et les étiquettes de
    `learner/observations.md`, par exception à la règle d'écriture dans `learner/` du skill
    `maintenance` ; jamais le journal.
  - sve peut servir de testeur réel de chaque lot, dans l'ordre du cours.

  ### 7. Clôture

  - Les choix du curriculum sont dans ADR-017 (T-018a) ; un lot qui les change fait un nouvel
    ADR.
  - `maintainer/improvements/` : entrées traitées retirées ; celles non traitées restent.
  - `maintainer/work/T-018/` supprimé.

- **Fini quand** :
  - chaque concept de `course/plan.md` a son fichier conforme au modèle, avec sous-concepts et
    banque d'exemples (réponses attendues comprises), et son fichier de sources dans
    `course/sources/` ;
  - plus aucune mention « à réécrire », plus aucun exemple hors fil rouge sans raison écrite ;
  - tous les sous-tickets sont clos : chaque lot validé par le mainteneur, revues sans constat
    bloquant, cohérence d'ensemble sans contradiction, sessions simulées qui passent la grille ;
  - la reprise de sve fonctionne après le merge (test de reprise par sous-agent).
