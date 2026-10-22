# T-018 : Réécrire le contenu du cours pour qu'il soit utilisable de bout en bout

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur. Le cours s'est construit au fil des sessions d'un seul
  apprenant (sve) :
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
  - `learner/observations.md` de sve : à lire comme des **erreurs typiques** possibles du
    public cible, jamais recopiées comme des faits sur l'apprenant (anonymiser) ;
  - « Points annoncés pour plus tard » de `learner/parcours.md` (idées pour les concepts 10 à
    13) ;
  - les ADR, pour ne pas défaire une décision sans le dire.

  ### 2. Déroulé en phases

  Chaque phase se termine par une validation du mainteneur avant la suivante. Les produits
  intermédiaires vont dans `maintainer/work/T-018/` (sources, rapports de revue, rapports de
  test), supprimé à la clôture (l'historique git les garde).

  **Phase 1 : cadrer le curriculum** (un agent, puis discussion avec le mainteneur)
  - Formuler le public cible en une phrase et ce qu'il saura faire à la fin (objectifs
    d'apprentissage du cours).
  - Pour chaque concept : objectif d'apprentissage (« à la fin, l'apprenant sait… »),
    prérequis, sous-concepts (chacun tenable en un message de 15 lignes avec sa question).
  - Analyse des manques face au public cible « PO sur des projets data », à confronter aux
    références (Scrum Guide 2020, référentiels de certification PO, ouvrages de référence sur
    les stories, le story mapping, la priorisation, la gestion de produit data). Pistes à
    instruire, pas décidées : vision et objectif produit (Product Goal du Scrum Guide), parties
    prenantes, mesure de la valeur et indicateurs, découverte avant livraison, spécificités data
    (définition des indicateurs, qualité et accès aux données, incertitude et exploration). Le
    cours vise de **bonnes bases** : chaque ajout se justifie par le public cible, chaque
    concept non retenu est noté avec sa raison.
  - Glossaire du cours (un seul terme par notion) : à décider s'il devient un fichier
    `course/glossary.md` (ajout à la structure de T-017).
  - Plan du fil rouge : quels acteurs et situations pour quel concept, quels faits nouveaux
    fixer (nouveaux acteurs, sources). Fixé **avant** la rédaction, pour que des rédacteurs en
    parallèle n'inventent pas de faits contradictoires.
  - Sortie : `course/plan.md` réécrit, `course/fil-rouge-velos.md` complété, validés par le
    mainteneur.

  **Phase 2 : sources** (un agent de recherche par concept, en parallèle)
  - Pour chaque concept : ce qui relève du consensus, avec source primaire (texte du Scrum
    Guide, article ou livre d'origine) ; ce qui relève d'un choix d'école, attribué à son
    auteur ; les affirmations des fiches actuelles vérifiées une par une (dates, auteurs,
    citations), avec les erreurs relevées.
  - Distinguer source primaire, source secondaire et marketing ; signaler ce qui n'a pas pu
    être vérifié.
  - Sortie : `maintainer/work/T-018/sources/NN-slug.md`.

  **Phase 3 : rédaction** (un agent rédacteur par concept, en parallèle, par lots)
  - Écrit `course/concepts/NN-slug.md` selon le modèle de T-017, à partir du plan, des
    sources, du plan du fil rouge, des améliorations et de la banque d'exemples existante.
  - Banque d'exemples : au moins un exemple et une question par sous-concept, dans le fil rouge,
    chacun avec réponse attendue, erreurs fréquentes et ce qui marche pour expliquer ; garder
    les exemples éprouvés avec sve en tenant compte de leurs « Pour améliorer le cours ».
  - Le rédacteur ne fixe aucun fait nouveau du fil rouge : s'il en a besoin, il le liste à part
    ; le coordinateur arbitre et met à jour `course/fil-rouge-velos.md`.
  - Sources citées dans le fichier du concept (section à ajouter au modèle si T-017 ne l'a pas
    prévue).

  **Phase 4 : revues croisées** (par concept, plusieurs relecteurs indépendants, en parallèle)
  - **Exactitude** : chaque affirmation confrontée aux sources de la phase 2 ; consensus et
    choix d'école correctement étiquetés.
  - **Pédagogie** : sous-concepts tenables en 15 lignes ; chaque question teste la
    compréhension (reformuler, corriger, trancher un cas limite), jamais « as-tu compris ? » ;
    réponses attendues justes et nuancées ; pièges réalistes pour le public cible.
  - **Cohérence** : faits du fil rouge, glossaire, renvois entre concepts, pas de doublon avec
    un autre concept.
  - **Style** : règles de la section « Style » de `CLAUDE.md`.
  - Chaque constat est vérifié (vrai défaut ou faux positif) avant d'être corrigé par le
    rédacteur ; deux tours au plus, puis arbitrage du mainteneur.

  **Phase 5 : cohérence d'ensemble** (un agent qui lit tout le cours)
  - Progression (chaque concept s'appuie sur les précédents, rien n'est utilisé avant d'être
    introduit), redondances, trous, glossaire, fil rouge (aucune contradiction, chaque acteur
    utilisé est présenté).

  **Phase 6 : tests de bout en bout** (sessions simulées)
  - Un agent prof neuf, qui lit `CLAUDE.md` sur disque, face à un agent apprenant qui joue le
    public cible avec des erreurs typiques (tirées des observations anonymisées et des
    améliorations).
  - Scénarios : premier concept d'un nouvel apprenant ; un concept au milieu ; reprise après
    coupure sur une question en attente ; un aparté hors cours puis retour au fil ; un concept
    nouveau (11 à 13).
  - Un juge note chaque session sur une grille : règles de `CLAUDE.md` (15 lignes, une
    question qui teste, consensus et choix d'école), fidélité au contenu du concept, exemples
    dans le fil rouge, écritures mémoire attendues.
  - Les défauts du cours se corrigent dans ce ticket ; ceux du cadre deviennent des tickets.

  **Phase 7 : validation par lots**
  - Le mainteneur relit les diffs par lot (proposition : concepts 1 à 4, 5 à 8, 9 à 13,
    annexes), sur une branche, avant tout merge.

  ### 3. Organisation agentique

  - Un **coordinateur** (la session de maintenance) : tient le plan, arbitre les faits du fil
    rouge, fusionne les retours, présente chaque lot au mainteneur.
  - Les phases 2 à 4 tournent par **lot**, en workflow multi-agents (pipeline : sources ->
    rédaction -> revues -> corrections, chaque concept avance dès que son étape précédente est
    finie). Un workflow par lot, pour garder chaque exécution sous une cinquantaine d'agents et
    valider lot par lot.
  - Les agents de recherche et de rédaction, et le relecteur d'exactitude, tournent sur le
    modèle le plus capable ; les autres relectures peuvent tourner sur un modèle plus léger.
  - Briefs des agents : chacun lit les fichiers sur disque (pas de résumé de seconde main),
    connaît le public cible, le modèle de fichier, le fil rouge et les règles de style.

  ### 4. Apprenant en cours de parcours

  sve est au concept 10 (10b en attente) et a validé 1 à 9 sur l'ancien contenu.
  - Le travail se fait sur une branche ; le merge ne doit pas casser sa reprise (« Prochaine
    étape » doit pointer vers un contenu existant).
  - Si le plan renumérote ou redécoupe les concepts, `learner/parcours.md` est mis à jour dans
    ce ticket (statuts reportés sur la nouvelle numérotation), par exception à la règle
    d'écriture dans `learner/` du skill `maintenance`.
  - Un concept nouveau inséré avant le concept courant de sve lui est proposé en rattrapage,
    pas imposé.
  - sve peut servir de testeur réel des concepts 11 à 13 réécrits.

  ### 5. Clôture

  - ADR sur les choix du curriculum (concepts retenus et écartés, public cible), si la règle
    ADR le demande.
  - `maintainer/improvements/` : entrées traitées retirées ; celles non traitées restent.
  - `maintainer/work/T-018/` supprimé.

- **Fini quand** :
  - chaque concept de `course/plan.md` a son fichier conforme au modèle, avec sous-concepts,
    banque d'exemples (réponses attendues comprises) et sources ;
  - plus aucune mention « à réécrire », plus aucun exemple hors fil rouge sans raison écrite ;
  - les revues de la phase 4 n'ont plus de constat bloquant, la phase 5 ne relève aucune
    contradiction ;
  - les sessions simulées de la phase 6 passent la grille ;
  - le mainteneur a validé chaque lot ;
  - la reprise de sve fonctionne après le merge (test de reprise par sous-agent).
- **Note du 2026-10-22 (T-019)** : pour la phase 1 (plan du fil rouge), le test de T-019 a
  relevé que l'équipe vélos n'a ni Scrum Master ni sponsor ou direction au-dessus de la DSI,
  alors que la levée des obstacles (Scrum Master) et l'escalade d'une dépendance sont des
  questions naturelles en 9b et 10b. Un prof a improvisé un directeur des opérations, sponsor de
  la plateforme.
