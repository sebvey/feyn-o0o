# T-018f : Lot 5, écrire les concepts 12, 13 et 14

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018e
- **Constat** : découpage de T-018a. Concepts nouveaux ou recentrés, sans fichier : 12 (les
  données du produit), 13 (ordonner le backlog), 14 (les parties prenantes).
- **À faire** :
  - Lancer `course-lot` sur T-018f, sur demande du mainteneur (T-018 §5).
  - Méthode de T-018 §3 pour les concepts 12, 13 et 14, d'après leurs lignes de
    `course/plan.md` et leurs situations dans `course/fil-rouge-velos.md`. Pas de fichier
    existant : tout s'écrit, il n'y a pas d'exemple éprouvé à garder hors de ceux que nomment
    ces consignes.
  - Entrées propres au lot : `maintainer/improvements/13-ordonner-backlog.md` ;
    `framing.md` §2.2 (« Parties prenantes », « Mesure de la valeur et indicateurs »,
    « Spécificités data »), §2.3 (concept 11 surchargé : story map et MVP vont ailleurs) et
    §5.2 (F5, F8, F9, F10) ; observations `[c13]` et `[général]` (réponses justes sans la
    suite : « et alors, on fait quoi ? », « pourquoi ? » ; réponse elliptique : faire préciser
    avant de corriger). La numérotation de `framing.md` est celle du brouillon (son 16 est le
    12, son 11 le 13, son 14 le 14).
  - Tout le lot : ne pas réenseigner, y renvoyer : le Scrum Master aide à lever les obstacles,
    il n'ordonne pas le backlog (0a1) ; partie prenante, sponsor, le PO seul ordonne, qui veut
    changer l'ordre le convainc, pas de vote (1b) ; livrable et résultat, un seul objectif
    produit, la mesure de résultat et ses points non fixés, Goals-Signals-Metrics, mesure de
    vanité, loi de Goodhart (2) ; liste ordonnée et non priorités, une demande ne se traite pas
    en direct (3) ; la règle non fixée que le PO fait fixer (8a2) ; la fraîcheur dans un critère
    (8b) ; reporter un morceau de faible valeur (9b2) ; la demande de Sophie entre au backlog à
    la revue (10a2) ; dépendance entre deux stories, s'accorder avec Inès (10b) ; une seule DoD,
    le test des relevés en double dans la DoD, la DoR et l'accès obtenu (11). Pas encore
    enseignés : refinement, Sprint Planning, objectif et revue de sprint (15), story map,
    première version, MVP et prévision (16), hypothèses, exploration et spike (17), annexes A1 et
    A2 ; les nommer avec renvoi, sans les enseigner. Préciser une story avant le sprint se dit
    sans le terme « refinement » (concept 15).
  - Tout le lot : tenir les promesses des concepts déjà écrits. 13 porte la source des
    critères pour ordonner (valeur, coût, risque, dépendances), annoncée par
    `course/sources/01-produit-et-po.md` et `03-backlog-produit.md` ; 13 pèse l'argument de
    sécurité de Sophie (3b, 10a2) ; 14 dit qui saisir et quand en cas d'escalade (Thomas,
    Agnès), annoncé en 10b2 et 11b ; 12a donne le contenu d'une définition d'indicateur,
    annoncé en 2c et 11a ; 12b nomme les dimensions de qualité (le doublon relève de
    l'unicité), annoncé en 11a ; 12c dit quelles colonnes demander, annoncé en 11b.
  - Tout le lot : le seuil « presque vide », la définition d'une station vide, les heures de
    pointe, la cible chiffrée et le calcul de la mesure de résultat restent non fixés (le seuil
    au concept 17c). Aucun exemple ne les fixe ; une réponse attendue qui s'appuie sur l'un
    d'eux le nomme comme règle à faire fixer (renvoi 8a2), sans le trancher. La date du bilan
    au conseil n'est pas fixée : un exemple qui a besoin d'une échéance la pose en situation
    d'exercice, sans la fixer.
  - Tout le lot : l'apprenant, dans son rôle de PO, propose un ordre et l'argumente ; il ne
    tranche jamais un fait métier (une règle, une cible, la gravité d'un risque, une date). Une
    question d'ordre accepte plusieurs réponses argumentées : la réponse attendue dit ce qui
    doit peser et ce qui fait une mauvaise réponse, pas un seul ordre juste.
  - Sources : partir de `maintainer/work/T-018/framing.md` §8 (DAMA UK, DAMA NL, RGPD art. 5,
    MoSCoW chez l'Agile Business Consortium, Mendelow, Goals-Signals-Metrics, Dehghani y sont
    déjà vérifiés) et des fichiers de `course/sources/` des concepts 0 à 11 ; ne chercher que ce
    qui manque : ce que le Scrum Guide 2020 dit de l'ordre du backlog (et ce que disaient ses
    versions antérieures : « value, risk, priority, and necessity », à vérifier), d'une source
    établie pour ordonner par valeur, coût, risque et dépendances ; coût du retard
    (Reinertsen, *The Principles of Product Development Flow*, 2009 ; Joshua Arnold) et WSJF
    (SAFe, à citer sans l'enseigner) ; origine de MoSCoW (Dai Clegg, Oracle, 1994, à vérifier),
    la règle DSDM des 60 % d'effort en Must Have ; le grain d'une table de faits (Kimball) et
    une source sur le contenu d'une définition d'indicateur ; RGPD art. 4 (donnée personnelle),
    considérant 26 (une donnée pseudonymisée reste personnelle), art. 5, 1, b et c, d'après la
    CNIL ou EUR-Lex ; le rôle du délégué à la protection des données (art. 37 à 39) seulement
    si le concept le nomme ; ce que le Scrum Guide dit des parties prenantes et des obstacles ;
    la grille pouvoir et intérêt (attribution discordante, la dire comme telle). Une attribution
    qui ne se vérifie pas est retirée du concept.
  - Concept 12 :
    - Public cible data : il sait calculer et tester ; le concept enseigne ce que le PO doit
      faire écrire, fixer ou demander, pas comment l'implémenter (les Developers).
    - 12a : contenu d'une définition (règle de calcul, grain, période, source, fraîcheur ; le
      grain se source). Corrigé complet tiré des règles fixées : « vélos disponibles par
      station » (vélo à quai et louable, par station, au dernier relevé, relevés des stations,
      moins de 15 minutes). Exercice : « locations par quartier » pour Claire (situation 12) :
      faire trouver ce qui manque et qui le fixe. Non fixés et à faire fixer par Claire, sans
      les trancher : compter ou non les locations très courtes ; quartier de la station de
      départ ou d'arrivée. Source : table des locations (accès pas encore obtenu, 11b) et
      référentiel des quartiers (la collectivité). La définition se distingue d'un critère
      d'acceptation (8) : elle vaut pour l'indicateur partout où il est publié.
    - 12a : la mesure de résultat de l'objectif produit (2c) est aussi un indicateur aux points
      non fixés : rechange possible, sans réenseigner 2c ni fixer ses points.
    - 12b : qualité des données, en règles mesurables sur des dimensions : consensus ; la liste
      des dimensions (six chez DAMA UK) : choix d'école. Où l'écrire : DoD si l'exigence vaut
      pour toute story (test des relevés en double, 11a), critère si elle est propre à une story
      (fraîcheur de Julie, 8b), définition de l'indicateur si elle le concerne. Nouveau cas, sans
      refaire l'exercice de 11a : les signalements par téléphone absents de l'appli ne sont pas
      un défaut à corriger par la plateforme mais une limite de la source, à écrire dans la
      définition de l'indicateur des vélos signalés et à rendre visible à ses utilisateurs.
    - 12c : borné à ce que le PO doit savoir demander (quelles colonnes, pour quelle finalité,
      détail ou agrégé), sans droit détaillé : finalité et minimisation (RGPD, art. 5) ; la
      table des locations contient l'identifiant de l'abonné ; Pascal demande de justifier
      chaque colonne. Exemple : pour les locations par quartier, l'identifiant de l'abonné n'est
      pas nécessaire. Piège : « ce n'est qu'un identifiant, pas un nom » (une donnée
      pseudonymisée reste personnelle). Aucun nouvel acteur au fil rouge : le délégué à la
      protection des données, s'il est nommé, l'est comme rôle générique, sourcé.
    - Si un sous-concept ne tient pas en un message de 15 lignes avec sa question, découper
      (12a1, 12a2) et le noter comme besoin de plan.
  - Concept 13 :
    - 13a : ordonner, c'est décider : valeur (rapportée à l'objectif produit), coût (l'estimation
      vient des Developers), risque, dépendances. Le Scrum Guide 2020 confie l'ordre au PO sans
      dire comment : les critères sont une pratique établie, sourcée, étiquetée comme telle.
    - 13a : les quatre demandes de la situation 13, avec leurs contraintes déjà écrites :
      blocage des vélos signalés (Sophie, sécurité ; règle de blocage non fixée, 10a2 ;
      dépendance à la DSI, fait F-a), locations du jour (Bruno, accès en
      attente, DoR non remplie, 11b), comparaison à l'an dernier (Claire, dépend des locations
      par quartier, 10b1, et du même accès), disponibilité pour l'appli (Inès). Réponse
      attendue : un ordre argumenté ; ce qui pèse (objectif produit, ce qui est prêt, dépendances,
      risque) ; un risque de sécurité peut passer devant l'objectif produit sans que le PO en
      juge seul la gravité (Sophie, Agnès). Mauvaises réponses : l'ordre d'arrivée, celui qui
      crie le plus fort, tout placer en tête.
    - 13a : l'exemple éprouvé de `maintainer/improvements/13-ordonner-backlog.md` (la story de
      blocage, sortie du hors périmètre, s'ordonne face au reste) et l'erreur `[c13]` (la
      traiter aussitôt, « c'est le bon moment ») : faire trancher entre deux demandes. Si
      l'exposé des critères et l'exercice ne tiennent pas en un message de 15 lignes, découper
      (13a1, 13a2) et le noter comme besoin de plan.
    - 13b : coût du retard, choix d'école (Reinertsen) ; WSJF cité sans l'enseigner. Exemple :
      la comparaison à l'an dernier perd sa valeur après le bilan au conseil (échéance en
      situation d'exercice) ; le blocage coûte chaque jour qu'un vélo signalé reste louable. Ne
      pas chiffrer ce que le fil rouge ne chiffre pas : raisonner en forme de coût (urgence,
      échéance, coût qui grandit), pas en nombres inventés.
    - 13c : MoSCoW, choix d'école (DSDM), pour une échéance (le bilan au conseil), pas pour
      ordonner tout le backlog. Won't : pas cette fois. Pièges : tout en Must ; croire que MoSCoW
      remplace l'ordre. La règle des 60 % d'effort en Must Have se cite si elle se vérifie.
      Ce que Claire classe en Must relève d'elle ; le PO l'aide à le classer, il ne décide pas à
      sa place de ce que le conseil attend.
    - 13 : les Developers estiment le coût ; la prévision « pour quand ? » reste au concept 16c.
  - Concept 14 :
    - 14a : élargir la définition de 1b sans la répéter : utilisateurs (Bruno, Malik, Hugo,
      Sophie, Julie), financeur (la collectivité, Claire), sponsor (Agnès), équipes voisines
      (l'équipe appli, Inès), fournisseurs de données (DSI et Pascal, collectivité pour le
      référentiel des quartiers, équipe appli pour les signalements). Piège : oublier les
      fournisseurs de données. La grille pouvoir et intérêt : choix d'école, attribution dite
      discordante.
    - 14b : Inès et Claire veulent le même sprint (situation 14). Dire non, c'est dire « pas
      maintenant » avec l'objectif produit et l'ordre, en restant transparent (le backlog est
      visible). Ne pas refaire l'ordre de 13a : la question porte sur la conversation. Le Scrum
      Guide : l'organisation respecte les décisions du PO ; la façon de dire non est une
      pratique, étiquetée.
    - 14c : l'accès aux locations bloque depuis trois sprints (situation 14). L'ordre des
      démarches : comprendre avec Pascal ce qui bloque (justifier les colonnes, 12c), puis
      Thomas (lever les obstacles, Scrum Guide), puis Agnès (sponsor), qui peut porter le
      désaccord au comité de direction où siège Pascal. Pièges : escalader d'emblée par-dessus
      Pascal ; escalader un désaccord sur l'ordre du backlog, que le PO tranche seul ; attendre
      sans rien dire. Le sponsor n'ordonne pas le backlog.
    - 14c : reprendre le cas annoncé en 10b2 (Inès refuse de placer le canal de Julie) comme
      rechange, en disant qui saisir et quand.
  - Faits du fil rouge validés par le mainteneur avant le lancement, et reportés dans
    `course/fil-rouge-velos.md` :
    - F-a : le blocage d'un vélo à la location se fait dans le système de location (DSI) ; la
      plateforme peut lui fournir la liste des vélos signalés. La story de blocage dépend donc
      de la DSI.
    - F-b : la DoD de l'équipe vélos exige aussi que chaque indicateur publié ait sa définition
      écrite (ajoutée en rétrospective, situation de 11a).
    - Laissés non fixés : seuil « presque vide », station vide, heures de pointe, cible et
      calcul de la mesure de résultat, locations très courtes, quartier de départ ou d'arrivée,
      date du bilan au conseil.
  - À la clôture : retirer `maintainer/improvements/13-ordonner-backlog.md`.
- **Fini quand** : comme T-018b, pour les concepts 12, 13 et 14 (sans le workflow).
- **Fait le** : 2026-10-23, `course-lot` lancé sur ce lot (19 agents, environ 2,2 M tokens, 16 minutes) ; concepts 12, 13 et 14 écrits avec leurs sources ; faits du fil rouge validés avant le lancement (F-a : blocage par le système de location, DSI ; F-b : définition écrite de chaque indicateur dans la DoD) ; arbitrages du mainteneur appliqués (plan : 12a1-12a2, 13a1-13a2 ; glossaire : Escalade « porter un obstacle au niveau qui peut le lever », Sponsor sans « arbitre au-delà du PO », aligné en 1b ; fil rouge : le comité de direction tranche aussi entre plateforme et appli, la source Abonnés contient nom et coordonnées) ; glossaire complété (Grain, Finalité, Minimisation, WSJF ; fournisseur de données dans Partie prenante) ; laissés non fixés : date du bilan au conseil, fraîcheur des locations par quartier, locations très courtes, quartier de départ ou d'arrivée ; test par trois sous-agents prof neufs sur des copies avec un apprenant simulé (12 depuis le début avec relance, réponse fausse et départ pressé ; reprise sur une question en attente en 13a2, réponse elliptique, aparté WSJF, arrêt ; reprise en 14b, aparté « pas de Scrum Master », escalade trop tôt, « d'où vient », arrêt) : lectures, rappel, 15 lignes, fil rouge et mémoire conformes ; défauts corrigés dans le lot (explications qui donnaient la réponse en 12a2 et 14c, source absente de la situation 12a2, questions qui ne demandaient pas toute la réponse attendue en 12c, 13b et 14c, schémas montrés trop tôt, coût absent de 13a2, MoSCoW face à l'ordre, réponse type sur WSJF, réexplications de 14b et du cas limite, équipe sans Scrum Master) ; T-035 à T-038 proposés (productions dans `travaux.md`, article de loi, vigilance au-delà de son concept, demande de précision).
