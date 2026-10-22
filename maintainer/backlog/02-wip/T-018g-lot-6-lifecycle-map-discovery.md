# T-018g : Lot 6, écrire les concepts 15, 16 et 17, et les annexes A1 et A2

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018f
- **Constat** : découpage de T-018a. Sans fichier : 15 (la vie d'une story), 16 (story map et
  première version), 17 (hypothèses et exploration), annexe A1 (structurer le backlog dans un
  outil). T-021 ajoute l'annexe A2 (travailler sans sprint, ADR-018).
- **À faire** :
  - Lancer `course-lot` sur T-018g (T-041 ; skill `maintenance`, §3, étape 3).
  - Méthode de T-018 §3 pour les concepts 15, 16, 17 et les annexes A1 et A2, d'après leurs
    lignes de `course/plan.md` et leurs situations dans `course/fil-rouge-velos.md`. Pas de
    fichier existant : tout s'écrit, il n'y a pas d'exemple éprouvé à garder hors de ceux que
    nomment ces consignes. Chemins : `course/concepts/15-vie-story.md`,
    `16-story-map.md`, `17-hypotheses-exploration.md`, `A1-outil-backlog.md`,
    `A2-sans-sprint.md`, et leurs sources sous le même nom dans `course/sources/`.
  - Annexes A1 et A2 : même modèle de fichier (`concept: A1`, `concept: A2`), plus courtes. Le
    prof les propose hors de l'ordre et les enseigne dans la boucle du cours (explication,
    exemple, question) : deux ou trois sous-concepts (A1a, A1b…), chacun avec un exemple et une
    question, sans rechange obligatoire. L'effort porte sur les sources et l'exactitude : ce que
    font les outils et ce que disent les guides Kanban se vérifie ligne à ligne.
  - Entrées propres au lot : `maintainer/improvements/15-vie-story.md` (terme flou précisé au
    refinement, pas dans une story « définir X ») ; l'entrée de session pour A1, retirée depuis
    (le niveau de trop : la plupart des features ne contiennent qu'une story, piège de 4a3 et
    exemple de A1) ; `framing.md` §2.2 (« Découverte avant livraison »), §2.3 (concept 12
    « Cycle de vie », dont les états d'un ticket deviennent un piège ; concept 13 « outil »
    devenu l'annexe ; estimation et prévision : story points et vélocité nommés, pas
    enseignés), §5.1 et §5.2 (F6, F7, F11) ; observations `[c15]` (story « définir X » dont une
    autre dépend : au refinement, préciser X avec le métier et livrer d'abord les règles
    connues) et `[général]` (réponses justes sans la suite : « et alors, on fait quoi ? »,
    « pourquoi ? » ; réponse elliptique : faire préciser avant de corriger). La numérotation de
    `framing.md` est celle du brouillon (son 12 est le 15, son 13 le 16, son 17 le 17, son A2
    l'annexe A1).
  - Tout le lot : ne pas réenseigner, y renvoyer : les responsabilités, les quatre événements
    et les trois artefacts avec leurs engagements, sprint et incrément (0) ; le PO seul ordonne,
    qui veut changer l'ordre le convainc (1b) ; livrable et résultat, objectif produit, mesure
    de résultat et ses points non fixés, l'objectif produit vu comme une hypothèse, mesure de
    vanité (2) ; backlog émergent, le haut précis et le bas vague (3a2) ; les niveaux et le
    niveau de trop (4) ; les « pourquoi ? » successifs (5b) ; le mot flou qui se fait préciser
    par l'utilisateur concerné, la story attend (7a2) ; la règle non fixée que le PO fait fixer
    (8a2) ; tranche verticale, walking skeleton (Cockburn), patrons et spike en une ligne (9) ;
    hors périmètre et dépendances, la demande de Sophie entre au backlog à la revue (10) ; DoD,
    DoR, l'élément prêt à être choisi (11) ; définition d'un indicateur, qualité, signalements
    par téléphone absents (12) ; ordonner, coût du retard, MoSCoW, le facteur
    « apprentissage » de Cohn (13) ; dire non, escalade (14). Dans le lot, chaque fichier nomme
    les autres avec renvoi sans les enseigner (15 ne fait pas la story map, 16 ne fait pas
    l'exploration, etc.).
  - Tout le lot : tenir les promesses des concepts déjà écrits.
    - 15a : le terme flou se précise avec l'utilisateur concerné avant le sprint (renvoyé
      depuis 3a2, 4, 7a2, 7b, 8) ; une story « définir le seuil » n'apporte rien seule
      (`course/sources/08-criteres-regles.md`, banque « Le seuil des stations presque vides ») ;
      découper un élément fait partie du refinement (4, 9) ; ce qui compte comme « en panne »,
      signalé ou constaté (12b).
    - 15b : au Sprint Planning, le PO propose, les Developers choisissent avec lui (0, 11b,
      14b) ; les tâches s'y découpent par les Developers (4, 9 : « Les tâches de Léa ») ;
      l'objectif de sprint, engagement du backlog de sprint (0a3) ; A2 proposée à qui
      travaille sans sprint (0, plan).
    - 15c : la revue de sprint en détail (0, 10, 11 : une story qui ne remplit pas la DoD n'y
      est pas présentée) ; A2 proposée à qui travaille sans sprint.
    - 16 : le parcours de l'utilisateur organise les stories en story map (5a1, Pièges de 5) ;
      une mesure de succès par version (Patton, cité en 2) ; « pour quand ? » (13, 16c).
    - 17 : l'objectif produit vu comme une hypothèse, l'exploration rigoureuse d'une hypothèse
      (2, 2c) ; le lien non établi d'une demande avec l'objectif produit est une hypothèse (5b,
      13a1, 13a2) ; spike, venue d'XP, aussi pour une question métier (7, 9b2) ; la tendance de
      la dernière heure et la pluie, à vérifier avant de s'engager (9a, 9b) ; le facteur
      « apprentissage » de Cohn (13) ; le seuil « presque vide » (8a2, 12, 13, situation 17).
    - A1 : régler les niveaux dans l'outil et le niveau de trop (4a2, 4a3, Pièges de 4) ; noter
      un lien de dépendance entre deux éléments, aussi entre les backlogs de deux équipes (10b1,
      10b2 : Jira « blocks / is blocked by » ; le lien « dépend de » des autres outils, non
      vérifié dans `course/sources/10-hors-perimetre-dependances.md`) ; les états d'un élément.
    - A2 : proposée en 11b, 15b et 15c (0, 3, 11, plan) ; ce que deviennent la DoR et le Sprint
      Planning, l'objectif et la revue de sprint, la prévision. Une fois A1 et A2 écrites, le
      coordinateur retire « (à écrire) » et « tant qu'elle est à écrire » de 4 et 11.
  - Tout le lot : restent non fixés : la définition d'une station vide, les heures de pointe, la
    cible et le calcul de la mesure de résultat, le seuil « presque vide » (3 vélos cité, pas
    décidé), la date du bilan au conseil, les locations très courtes, quartier de départ ou
    d'arrivée. Aucun exemple ne les fixe ; une réponse attendue qui s'appuie sur l'un d'eux le
    nomme comme règle à faire fixer (renvoi 8a2), sans le trancher. Un exemple qui a besoin
    d'une échéance, d'un résultat d'exploration ou d'une prévision chiffrée la pose en situation
    d'exercice (« dans cet exercice, … »), sans la fixer au fil rouge.
  - Tout le lot : l'apprenant, dans son rôle de PO, propose, fait préciser, fait fixer ; il ne
    tranche jamais un fait métier (une règle, un seuil, une date, la valeur d'une hypothèse).
    Il ne fait pas non plus le travail des Developers (estimer, prévoir, planifier les tâches,
    mener l'exploration).
  - Sources : partir de `maintainer/work/T-018/framing.md` §8 (Scrum Guide 2020, CSPO 2022,
    Patton « Story Map Concepts » et *User Story Mapping*, Cagan « The Four Big Risks »,
    Torres, Ries et le MVP y sont relevés) et des fichiers de `course/sources/` des concepts 0
    à 14 (le Scrum Guide sur le refinement, le Sprint Planning, la revue, la prévision ; le
    spike en 7 et 9 ; Jira en 10) ; ne chercher que ce qui manque :
    - 15 : le texte du Scrum Guide 2020 sur les trois sujets du Sprint Planning, l'objectif de
      sprint (cohérence, flexibilité, renégocier la portée avec le PO, annulation du sprint par
      le PO si l'objectif devient obsolète), la revue de sprint (« working session », pas une
      présentation ; le backlog peut être ajusté) ; ce qu'il dit du refinement (activité
      continue, sans événement) ; une source sur les états d'un élément si 15 en fait un piège ;
    - 16 : Patton (activités, backbone, tranches de version, mesure de succès par version, et
      son usage de « walking skeleton ») ; Ries pour le sens du MVP, l'usage courant pour
      l'autre sens ; le Scrum Guide sur la prévision (« burn-downs, burn-ups, or cumulative
      flows », sans en imposer) ; une source sur la prévision comme fourchette, pas comme
      engagement ; story points et vélocité : nommés, choix d'école, sans attribution non
      vérifiée ;
    - 17 : Cagan (quatre risques, le cours en retient deux : valeur et faisabilité, données
      comprises) ; l'origine XP du spike et sa limite dans le temps (déjà dans 7 et 9) ; une
      source établie sur l'acceptation d'un résultat incertain ou probabiliste (critère sur un
      niveau atteint sur un historique, seuil fixé après mesure), à défaut en « Non vérifié » ;
    - A1 : les niveaux et liens par défaut de Jira (déjà en 10), d'Azure DevOps (processus
      Agile : Epic, Feature, User Story, Task) et, s'il se vérifie, d'un troisième outil
      courant ; la documentation de l'éditeur est primaire pour ce que fait l'outil et
      marketing pour ce qu'il recommande ; les états et le workflow configurables ;
    - A2 : les références de T-021 (2026-10-22), à vérifier et dater :
      - le *Kanban Guide* (Vacanti, Coleman et al., v2025.5, kanbanguides.org) : flux continu,
        Definition of Workflow (dont le début et la fin d'un élément), quatre mesures (travail
        en cours, débit, âge d'un élément, temps de cycle), ni rôles, ni événements, ni
        cadence ;
      - le *Kanban Guide for Scrum Teams* (Scrum.org, 2021 ; Yeret, Vacanti, Porter) : Kanban
        complète Scrum sans retirer le sprint ; c'est un autre cas que le flux sans sprint, à
        distinguer dans A2 ;
      - les cadences de la méthode Kanban (Kanban University : réunion de réapprovisionnement,
        revue de la livraison du service) et le point d'engagement : choix d'école, vus
        seulement dans des sources secondaires ;
      - le Scrum Guide 2020 cite déjà « cumulative flows » parmi les pratiques de prévision.
    - A2 n'affirme pas que les équipes data travaillent surtout en flux : T-021 n'a trouvé que
      de petites études universitaires, surtout sur des étudiants (Saltz et al., 2017).
    - Une attribution qui ne se vérifie pas est retirée du fichier.
  - Concept 15 :
    - 15a : le refinement, activité continue (Scrum Guide), sans événement imposé ; préciser,
      découper, estimer avec les Developers. Exemple : situation 15, « vélo en panne » : signalé
      par un abonné ou constaté par Hugo (fait F6 : Hugo confirme ou infirme sur place ; un
      vélo n'est plus louable quand un technicien l'a retiré du service après constat). Le
      terme se fait préciser par l'utilisateur concerné de chaque story (Sophie pour son
      indicateur, Bruno pour sa vue, Hugo pour sa tournée), au refinement : le sens peut
      différer d'une story à l'autre, et chaque story le dit. Le cours ne fixe pas quel sens
      chacun retient : la réponse attendue dit qui précise, quand et où l'écrire. L'exemple
      éprouvé de `maintainer/improvements/15-vie-story.md` et l'erreur `[c15]` : la story
      « définir le seuil » (ou « définir X ») dont une autre dépend n'apporte rien seule ; on
      précise au refinement avec le métier, et on livre d'abord ce dont les règles sont connues.
      Piège : faire du refinement une réunion d'équipe sans l'utilisateur ; le PO qui tranche le
      terme lui-même. Si l'exposé et les deux exemples ne tiennent pas en un message de
      15 lignes, découper (15a1, 15a2) et le noter comme besoin de plan.
    - 15b : Sprint Planning et objectif de sprint. Trois sujets (pourquoi, quoi, comment ; le
      Scrum Guide). Situation 15 : un objectif de sprint autour des vélos en panne, à partir
      des stories déjà au fil rouge (tournée d'Hugo, vue des vélos en panne de Bruno, vélos
      signalés par semaine pour Sophie, liste des vélos signalés fournie au système de location,
      qui dépend de la DSI, fait F-a). Question type : corriger un objectif de sprint fautif
      (une liste de stories, « finir X, Y, Z ») ou trancher ce qui entre. Le PO propose,
      l'équipe fixe l'objectif, les Developers choisissent ; l'objectif reste quand une story
      ne passe pas. Une story qui ne remplit pas la DoR ne se choisit pas (renvoi 11b). Ne pas
      enseigner l'estimation ni la vélocité. Sans sprint : renvoi A2.
    - 15c : revue de sprint avec Bruno et Sophie (situation 15) : l'incrément inspecté, ce qui
      a changé, le backlog adapté ; pas une recette ni un passage de validation, pas une
      démonstration à sens unique. Une nouvelle demande née de la revue entre au backlog et
      s'ordonne (renvoi 10a2, 13), elle ne se promet pas en séance. Ce qu'on y découvre peut
      se poser en situation d'exercice (par exemple, Hugo infirme une part des pannes
      signalées), sans le fixer au fil rouge. Sans sprint : renvoi A2.
    - 15 : les états d'un ticket (à faire, en cours, fait) ne sont pas la vie d'une story : un
      piège, renvoi A1 ; « fait » dans l'outil ne dit rien s'il ne veut pas dire DoD remplie.
  - Concept 16 :
    - 16a : la story map (Patton, choix d'école) : les activités de l'utilisateur en ligne
      (la colonne vertébrale), les stories dessous, ordonnées de haut en bas. Situation 16 : la
      journée de Bruno (fait F7 : point du matin, envoi des régulateurs, suivi des incidents,
      bilan du soir), avec ses vues déjà au fil rouge (stations vides, vélos en panne, locations
      du jour). La carte complète le backlog ordonné, elle ne le remplace pas ; le PO garde
      l'ordre (1b, 13). Piège : prendre la carte pour la hiérarchie epic, feature, story (4).
    - 16b : tranche de version, première version utile. Situation 16 : « première version : le
      point du matin ». L'agent de sources vérifie chez Patton si la première tranche traverse
      toute la colonne vertébrale ou peut viser une seule activité (un résultat visé) ; le
      rédacteur suit la source et, si elle contredit la situation, garde la source et signale
      l'écart en besoin de fil rouge. La mesure de succès de la version se dit sans fixer de
      cible. Les deux sens du MVP (glossaire) : Ries (le plus d'apprentissage pour le moindre
      effort, repris en 17) et l'usage courant (la première version) ; dire lequel on emploie.
      Pièges : MVP pris pour une version bâclée ; première version pensée comme une couche
      (renvoi 9). « Walking skeleton » : le cours le réserve au sens de Cockburn (9, glossaire) ;
      si Patton emploie le terme pour sa première tranche, le dire comme un autre usage, sans
      l'enseigner.
    - 16c : Bruno demande « pour quand ? ». La prévision vient des Developers, en fourchette,
      revue à mesure qu'on avance ; ce n'est pas un engagement, ni une date que le PO invente.
      Le Scrum Guide cite des pratiques de prévision sans en imposer ; story points et vélocité
      nommés comme choix d'école, sans les enseigner ; en flux continu, renvoi A2 (débit, temps
      de cycle). Le PO répond à Bruno avec la prévision et ce qui la ferait bouger (l'ordre, une
      dépendance). L'échéance du bilan au conseil n'est pas fixée.
  - Concept 17 :
    - 17a : savoir ou supposer. Les quatre risques de Cagan nommés (choix d'école ; il parle de
      product manager) ; le cours retient valeur et faisabilité, la donnée comprise (existe-t-
      elle, est-elle assez bonne, assez fraîche ?). Situation 17 : la prévision des stations à
      risque pour Malik ; la tendance de la dernière heure suffit-elle (faisabilité), la pluie
      compte-t-elle (la météo n'est pas collectée), Malik ira-t-il plus tôt (valeur, lien avec
      l'objectif produit). Question type : trier des affirmations en « on sait » et « on
      suppose », ou trouver l'hypothèse dont dépend une story.
    - 17b : explorer à moindre coût : exploration bornée (spike, glossaire), prototype, analyse
      d'historique. Situation 17 : Nora explore l'historique des relevés (fait F11, environ un
      an) pendant un temps borné. Une exploration se décide avant : la question, la durée, ce
      qu'on décidera selon la réponse ; elle livre une réponse, pas une fonction ; elle s'ordonne
      au backlog (renvoi 13, facteur « apprentissage »). Le PO pose la question, les Developers
      mènent l'exploration. La pluie : la météo n'est pas collectée ; si l'exemple a besoin d'un
      historique météo, c'est un besoin de fil rouge, pas un fait que le rédacteur fixe.
      Découverte continue (Torres) : nommée comme choix d'école, sans l'enseigner.
    - 17c : accepter un résultat incertain : une prévision n'est jamais sûre ; un critère
      d'acceptation porte sur un niveau atteint (mesuré sur l'historique, par exemple), fixé
      après l'exploration qui montre ce qu'on peut atteindre, pas avant. Le niveau se fait fixer
      par l'utilisateur concerné (Bruno, Malik), en pesant le coût d'une fausse alerte (une
      camionnette envoyée pour rien) et celui d'une station vide manquée ; le PO le fait fixer,
      il ne le tranche pas. Le seuil « presque vide » relève de la même logique : l'exploration
      l'éclaire, le métier le fixe ; le cours n'en donne pas la valeur. Un résultat
      d'exploration chiffré se pose en situation d'exercice.
    - 17 : le MVP au sens de Ries (16b) : se reprend comme une manière d'apprendre, sans
      réenseigner 16b.
  - Annexe A1 :
    - A1a les niveaux dans l'outil : les niveaux par défaut de Jira et d'Azure DevOps
      (vérifiés), en choisir peu (4) ; le niveau de trop se règle dans l'outil (exemple de la
      session : la plupart des features ne contiennent qu'une story).
    - A1b les liens de dépendance : entre deux éléments, et entre les backlogs de deux équipes
      (la story de Julie et le canal d'Inès, 10b2) ; le lien ne remplace pas la conversation
      avec Inès.
    - A1c les états : choix d'équipe, configurables dans l'outil ; « fait » veut dire DoD
      remplie (11a) ; un état « prêt » ne doit pas faire de la DoR une barrière (11b).
    - Pas de procédure clic par clic : ce qu'un PO règle et pourquoi, pas où cliquer.
  - Annexe A2 :
    - Proposée en 11b, 15b et 15c : chaque sous-concept se donne seul, au moment où il est
      proposé, avec en une ligne ce qui ne change pas (backlog ordonné par le PO, DoD,
      incrément, objectif produit).
    - A2a (depuis 11b) : sans Sprint Planning, l'élément se tire quand l'équipe a de la place,
      sous une limite de travail en cours ; la DoR devient la condition pour franchir le début
      du flux (Definition of Workflow, Kanban Guide ; « point d'engagement », Kanban
      University, choix d'école).
    - A2b (depuis 15b) : sans objectif de sprint : ce qui donne la direction (l'objectif
      produit, l'ordre du backlog) ; la réunion de réapprovisionnement, choix d'école.
    - A2c (depuis 15c) : sans revue de sprint : inspecter ce qui est livré avec les parties
      prenantes, à une cadence que l'équipe choisit (choix d'école) ; la prévision par le débit
      et le temps de cycle (Kanban Guide), renvoi 16c.
    - Distinguer le flux sans sprint (Kanban Guide) de Kanban dans Scrum (Kanban Guide for
      Scrum Teams, le sprint reste) ; ne pas présenter la méthode Kanban comme le consensus.
    - Exemples : l'équipe vélos en flux, en situation d'exercice (« si l'équipe vélos
      travaillait sans sprint »), sans changer le fil rouge (l'équipe vélos est en sprints de
      deux semaines).
  - À la clôture : retirer `maintainer/improvements/15-vie-story.md`.
- **Fini quand** : comme T-018b, pour les concepts 15, 16, 17 et les annexes A1 et A2 (sans le
  workflow).
