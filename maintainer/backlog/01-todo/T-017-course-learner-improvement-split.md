# T-017 : Séparer support du cours, suivi de l'apprenant et support d'amélioration ; archiver le TP

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur, après les sessions 1 à 7 du cours.
  - Les fiches (`learner/cards/`) sont rédigées par le prof au fil du cours, pour un seul
    apprenant, avec ses exemples et ses erreurs. Elles ne peuvent pas servir de support à un
    autre apprenant, et chaque concept oblige le prof à écrire une fiche en plus d'enseigner.
  - Les traces (`learner/examples/`) mélangent trois usages : l'énoncé (contenu du cours), la
    réponse et le verdict (suivi de l'apprenant), « Pour améliorer le cours » (amélioration).
    Un fichier par question, à écrire deux fois (à la question, à la correction) : beaucoup
    d'écritures, donc des oublis possibles (T-006).
  - Les observations (`learner/apprenant.md`) sont une liste chronologique de 25 lignes qui
    mêle acquis, difficultés et conseils pédagogiques : le prof ne sait pas lesquelles
    s'appliquent au concept qu'il traite.
  - Deux canaux d'amélioration : le ticket dans `00-proposed/` pour une demande de l'apprenant
    sur la forme, la section « Pour améliorer le cours » des traces pour le reste.
  - Le cadre est rigide (« non négociables ») ; les apartés tiennent en un message. Ce qui
    s'apprend hors du fil rouge (aparté, exemple improvisé) n'est capitalisé nulle part pour un
    autre apprenant.
  - Le TP et PDSF occupent une part du cadre (`CLAUDE.md`, skills, `course/`) alors que le
    cours n'est pas fini.

- **À faire** : ce ticket fixe la **structure** ; la réécriture du contenu du cours selon
  cette structure est T-018, qui passe après.

  ### 1. Trois supports distincts

  **Support du cours** (`course/`, commun à tous les apprenants, lu par le prof) :
  - `course/plan.md` : en tête, le **public cible** du cours (proposition : « développeur ou
    profil data qui veut des bases solides pour devenir PO sur des projets data ») ; il guide la
    profondeur, le choix des exemples et ce qu'on écarte. Puis la liste ordonnée des concepts et
    sous-concepts (sort du tableau de `learner/parcours.md`, qui ne garde que les statuts) ;
  - **un fichier par concept**, `course/concepts/NN-slug.md` (annexes : `A<n>-slug.md`), écrit
    pour le public cible et lu par le prof : l'essentiel, consensus et choix d'école, le
    découpage en sous-concepts, la banque d'exemples et de questions (situation avec les acteurs
    du fil rouge, question, réponse attendue, erreurs fréquentes, ce qui marche pour expliquer),
    les pièges, le test rapide, les idées de schéma. Consolidé à partir des fiches actuelles et
    des énoncés des traces, sans réponse ni verdict de l'apprenant ;
  - le fil rouge (`course/fil-rouge-velos.md`).

  Décision du mainteneur : pas de fiche propre à l'apprenant, ni de séparation fiche / notes du
  prof. Le cours a un public cible, donc une structure et, plus tard, un support web. Le prof
  enseigne à partir du fichier du concept et n'écrit plus de fiche. En fin de concept, il
  indique à l'apprenant le fichier du cours à relire (la page web, une fois faite). Les réponses
  attendues ne sont pas cachées : elles pourront devenir les exercices corrigés de la page web.

  La page web sort du parcours de l'apprenant (concept 16 retiré de `learner/parcours.md`) : c'est
  un chantier du mainteneur, rendu du cours, à mener après la réécriture du contenu (T-018).

  **Suivi de l'apprenant** (`learner/`, propre à l'apprenant) :
  - `apprenant.md` : profil et préférences seulement (stables) ;
  - `observations.md` : nouveau, structuré (voir §2) ;
  - `parcours.md` : statut par concept, « Prochaine étape », journal des sessions ;
  - `travaux.md` : productions de l'apprenant (versions et critiques), inchangé.

  Disparaissent : `learner/cards/` (fiches consolidées dans `course/`), `learner/examples/`
  (énoncés vers `course/`, points d'amélioration vers `maintainer/improvements/`), et la
  conservation des réponses de l'apprenant (décision du mainteneur : on ne les garde plus, sauf
  ses productions dans `travaux.md` ; l'historique git conserve les anciennes).
  `learner/notes_sve_parcours_po.excalidraw` (notes personnelles de l'apprenant) reste.

  **Support d'amélioration** (provisoire, `maintainer/improvements/`, écrit par le prof en
  autonomie) :
  - un fichier par concept (`NN-slug.md`) et `off-course.md` (apartés, exemples improvisés,
    sujets hors cours) ;
  - une entrée par fait : `date, apprenant, type, fait, suggestion` ; types : incompréhension,
    question mal posée, exemple improvisé réutilisable, aparté réutilisable, demande de
    l'apprenant sur la forme ;
  - règle : tout apprentissage fait hors du fil rouge et du cours documenté, qui pourrait servir
    à un autre apprenant, y est mentionné ;
  - écrit au point de sauvegarde (via `update-memory`), lu seulement quand le mainteneur
    retravaille un concept ;
  - canal unique : remplace le ticket dans `00-proposed/` pour une demande de l'apprenant sur la
    forme et la section « Pour améliorer le cours » des traces. Le mainteneur en tire des
    tickets au tri.

  ### 2. Observations actionnables

  `learner/observations.md`, trois sections, une ligne par entrée au format
  `date, [concept], fait -> action` :
  - **Leviers** : ce qui marche avec l'apprenant (ex. partir de son raisonnement quand il
    bloque ; donner l'origine d'un terme avant de l'appliquer ; faire préciser une réponse
    elliptique avant de corriger). Lus au démarrage.
  - **Vigilances actives** : difficultés non surmontées, liées à un concept (ex. « [c11]
    priorisation pas encore réflexe -> le faire trancher entre deux demandes »). Le prof filtre
    sur le concept qu'il va traiter. Plafond indicatif : dix.
  - **Acquis** : une ligne par concept, pour ne pas réexpliquer.

  Cycle de vie : une vigilance surmontée passe en acquis ; une ligne contredite se corrige ou se
  supprime. Les 25 observations actuelles sont reclassées dans ces sections.

  ### 3. Autonomie du prof

  Dans `CLAUDE.md`, « Règles de la session (non négociables) » devient un mode par défaut :
  - **reste** : la boucle explication, exemple, question ; « Question pour toi » ; la limite de
    15 lignes par message ; ne jamais faire trancher un besoin métier ; distinguer consensus et
    choix d'école ;
  - **permis** : apartés de gestion de produit ou de mise en œuvre de projet, sur autant
    d'échanges que nécessaire ; exemples improvisés pour appuyer une conversation, dans le fil
    rouge ou dans un autre domaine ; retour sur un concept passé ;
  - **garde-fous** : hors du sujet (gestion de produit, mise en œuvre de projet), le prof
    recentre ; après un aparté, il propose de revenir au fil sans l'imposer ; « Prochaine
    étape » garde le point de reprise ;
  - ce qui sort du cours documenté et peut servir à un autre apprenant va dans le support
    d'amélioration (§1).

  ### 4. Archiver le TP et PDSF

  - Déplacer dans `archive/tp/` : `course/mock-project/`, `course/ancrage-pdsf.md`,
    `learner/journal-tp.md`.
  - `CLAUDE.md` : retirer « Le TP (après le cours) », « Après le TP » en entier (PDSF et page
    web, voir §1), les mentions du TP, de PDSF et de la page web au démarrage et dans
    l'objectif ; ajouter « ne lis pas `archive/` sauf demande du mainteneur ».
  - `update-memory` : retirer les lignes TP du tableau et la question 5 du contrôle, et la
    correction de `coulisses.md`.
  - `maintenance` : retirer la mention de `coulisses.md` et la question TP du diagnostic.
  - `course/fil-rouge-velos.md` : retirer la mention du projet factice.
  - `learner/parcours.md` : concept 13 (choix d'outil et structure minimale du backlog) devient
    un concept du cours ; concepts 14 (TP) et 15 (PDSF) retirés, renvoyés à l'archive ; points
    annoncés pour le TP retirés ou rattachés au concept 13.

  ### 5. Mises à jour du cadre

  - `CLAUDE.md` : démarrage (fichiers à lire : `course/plan.md`, le support du concept en
    cours, `learner/` ; plus de liste de `learner/examples/`) ; « Tenir la mémoire à jour » :
    au fil de l'eau, seulement « Prochaine étape » (question posée, puis réponse corrigée) ;
    point de sauvegarde : plus d'écriture de fiche ; en fin de concept, indiquer à l'apprenant
    le fichier du cours à relire.
  - `update-memory` : nouveau tableau (statut, prochaine étape, journal, observations par
    section, travaux, faits du fil rouge, support d'amélioration) ; plus de fiche ni de trace.
  - `maintenance` : périmètre étendu à `maintainer/improvements/` (lecture et tri en tickets) ;
    diagnostic d'une session à partir des améliorations et du journal.
  - Modèles : `course/templates/fiche.md` et `trace-exemple.md` remplacés par un modèle de
    fichier de concept et un modèle d'entrée d'amélioration.
  - ADR : ADR-002 (trace à la correction) et ADR-006 (dossiers) remplacés par un nouvel ADR ;
    ADR-008 à revoir (« à partir de l'énoncé de sa trace » : l'énoncé vient du support du cours).
  - Tickets touchés : T-006 (écritures de la mémoire, très allégées : à réévaluer, peut-être
    clos), T-011 (nouvel apprenant : `learner/` réduit à quatre fichiers, le modèle devient
    simple), T-013 (ADR-006 remplacé).

  ### 6. Migration

  - Fiches 01 à 10 et A1 : déplacées telles quelles vers `course/concepts/NN-slug.md`, en
    attendant la réécriture (T-018) ; les énoncés des traces y rejoignent la banque
    d'exemples du concept.
  - « Pour améliorer le cours » des traces : reporté dans `maintainer/improvements/`.
  - Session en cours : 10b est en attente (question DoR). La migration ne doit pas casser la
    reprise : « Prochaine étape » doit pointer vers l'énoncé de 10b dans `course/`.

- **Fini quand** : un sous-agent neuf, sur « on
  reprend » puis « on continue », lit `course/plan.md`, le support du concept 10 et `learner/`,
  sans ouvrir `archive/` ; reprend 10b depuis le début ; à la correction, n'écrit que
  « Prochaine étape » ; au point de sauvegarde, écrit statut, journal, observations (dans la
  bonne section) et une entrée d'amélioration si un fait s'y prête. Aucune mention du TP ni de
  PDSF hors `archive/`.
