# T-018 : Réécrire le contenu du cours pour qu'il soit utilisable de bout en bout (parent)

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

  ### 2. Sous-tickets

  Découpage vertical : chaque lot passe par toutes les étapes et livre des concepts prêts à
  enseigner. Les produits intermédiaires vont dans `maintainer/work/T-018/` (sources, rapports
  de revue, rapports de test), supprimé à la clôture (l'historique git les garde).

  | Sous-ticket | Contenu | État |
  |---|---|---|
  | T-018a | Cadrer le curriculum et le fil rouge, découper en lots | à faire |
  | T-018b et suivants | Un lot de concepts chacun (méthode du §3), créés à la fin de T-018a ; premier lot proposé : les concepts que sve aborde ensuite (11 à 13) | à créer |
  | dernier sous-ticket | Cohérence d'ensemble et tests de bout en bout (§4), clôture (§7), créé à la fin de T-018a | à créer |

  ### 3. Méthode d'un lot

  Chaque sous-ticket de lot se termine par la validation du mainteneur, qui relit le diff du
  lot sur une branche avant tout merge.

  **Étape 1 : sources** (un agent de recherche par concept, en parallèle)
  - Pour chaque concept : ce qui relève du consensus, avec source primaire (texte du Scrum
    Guide, article ou livre d'origine) ; ce qui relève d'un choix d'école, attribué à son
    auteur ; les affirmations des fiches actuelles vérifiées une par une (dates, auteurs,
    citations), avec les erreurs relevées.
  - Distinguer source primaire, source secondaire et marketing ; signaler ce qui n'a pas pu
    être vérifié.
  - Sortie : `maintainer/work/T-018/sources/NN-slug.md`.

  **Étape 2 : rédaction** (un agent rédacteur par concept, en parallèle, par lots)
  - Écrit `course/concepts/NN-slug.md` selon le modèle de T-017, à partir du plan (T-018a), des
    sources, du plan du fil rouge, des améliorations et de la banque d'exemples existante.
  - Banque d'exemples : au moins un exemple et une question par sous-concept, dans le fil rouge,
    chacun avec réponse attendue, erreurs fréquentes et ce qui marche pour expliquer ; garder
    les exemples éprouvés avec sve en tenant compte de leurs « Pour améliorer le cours ».
  - Le rédacteur ne fixe aucun fait nouveau du fil rouge : s'il en a besoin, il le liste à part
    ; le coordinateur arbitre et met à jour `course/fil-rouge-velos.md`.
  - Sources citées dans la section « Sources » du fichier du concept.

  **Étape 3 : revues croisées** (par concept, plusieurs relecteurs indépendants, en parallèle)
  - **Exactitude** : chaque affirmation confrontée aux sources de l'étape 1 ; consensus et
    choix d'école correctement étiquetés.
  - **Pédagogie** : sous-concepts tenables en 15 lignes ; chaque question teste la
    compréhension (reformuler, corriger, trancher un cas limite), jamais « as-tu compris ? » ;
    réponses attendues justes et nuancées ; pièges réalistes pour le public cible.
  - **Cohérence** : faits du fil rouge, glossaire, renvois entre concepts, pas de doublon avec
    un autre concept.
  - **Style** : règles de la section « Style » de `CLAUDE.md`.
  - Chaque constat est vérifié (vrai défaut ou faux positif) avant d'être corrigé par le
    rédacteur ; deux tours au plus, puis arbitrage du mainteneur.

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
    nouveau (11 à 13).
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
    (paramètre : le sous-ticket du lot) et le teste ; les lots suivants le relancent par son nom
    (« lance course-lot sur T-018c »), sans le réécrire. Une session ne lance un workflow que
    sur demande du mainteneur : le nommer suffit. Un workflow par lot, pour garder chaque exécution sous une cinquantaine d'agents et
    valider lot par lot.
  - Les agents de recherche et de rédaction, et le relecteur d'exactitude, tournent sur le
    modèle le plus capable ; les autres relectures peuvent tourner sur un modèle plus léger.
  - Briefs des agents : chacun lit les fichiers sur disque (pas de résumé de seconde main),
    connaît le public cible, le modèle de fichier, le fil rouge et les règles de style.

  ### 6. Apprenant en cours de parcours

  sve suit le cours en parallèle : lis `learner/parcours.md` pour savoir où il en est (le
  2026-10-22 : concept 10, 10b en attente ; 1 à 9 validés sur l'ancien contenu).
  - Chaque sous-ticket se fait sur une branche ; le merge ne doit pas casser sa reprise
    (« Prochaine étape » doit pointer vers un contenu existant).
  - Si le plan renumérote ou redécoupe les concepts, `learner/parcours.md` est mis à jour dans
    le sous-ticket qui renumérote (statuts reportés sur la nouvelle numérotation), par exception à la règle
    d'écriture dans `learner/` du skill `maintenance`.
  - Un concept nouveau inséré avant le concept courant de sve lui est proposé en rattrapage,
    pas imposé.
  - sve peut servir de testeur réel des concepts 11 à 13 réécrits.

  ### 7. Clôture

  - ADR sur les choix du curriculum (concepts retenus et écartés, public cible), si la règle
    ADR le demande.
  - `maintainer/improvements/` : entrées traitées retirées ; celles non traitées restent.
  - `maintainer/work/T-018/` supprimé.

- **Fini quand** :
  - chaque concept de `course/plan.md` a son fichier conforme au modèle, avec sous-concepts,
    banque d'exemples (réponses attendues comprises) et sources ;
  - plus aucune mention « à réécrire », plus aucun exemple hors fil rouge sans raison écrite ;
  - tous les sous-tickets sont clos : chaque lot validé par le mainteneur, revues sans constat
    bloquant, cohérence d'ensemble sans contradiction, sessions simulées qui passent la grille ;
  - la reprise de sve fonctionne après le merge (test de reprise par sous-agent).
