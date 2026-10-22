# T-018e : Lot 4, réécrire les concepts 9, 10 et 11

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018d
- **Constat** : découpage de T-018a. Fiches 9 (découpage vertical), 10 (hors périmètre et
  dépendances), 11 (DoD, DoR) : les mieux pourvues en exemples vélos, écrites pour un apprenant.
- **À faire** :
  - Lancer `course-lot` sur T-018e, sur demande du mainteneur (T-018 §5).
  - Méthode de T-018 §3 pour les concepts 9, 10 et 11, d'après leurs lignes de `course/plan.md`
    et leurs situations dans `course/fil-rouge-velos.md`.
  - Entrées propres au lot : `maintainer/improvements/09-decoupage-vertical.md`,
    `10-hors-perimetre-dependances.md` et `11-dor-dod.md` ; `framing.md` §2.2 (« Spécificités
    data ») et §2.4 (DoD en rétrospective, story qui ne remplit pas la DoD : conformes) ;
    observations `[c9]`, `[c10]`, `[c11]`, `[c13]` et `[général]` (réponses justes sans la
    suite : « et alors, on fait quoi ? », « pourquoi ? » ; réponse elliptique : faire préciser
    avant de corriger). La numérotation de `framing.md` est celle du brouillon (son 8 est le 9,
    son 9 le 10, son 10 le 11).
  - Tout le lot : ne pas réenseigner, y renvoyer : la tâche est du travail des Developers, une
    story tient dans un sprint, un epic se découpe (4) ; V et I d'INVEST, le mot flou (7) ;
    critère ou règle, la règle non fixée que le PO fait fixer pendant que la story attend (4,
    8a2) ; le PO ordonne seul le backlog (1, 3) ; la DoD comme engagement de l'incrément, la
    revue de sprint (0). Pas encore enseignés : données du produit (12 : définition d'un
    indicateur, dimensions de qualité, accès et RGPD), ordonner (13), parties prenantes et
    escalade (14), Sprint Planning, objectif et revue de sprint en détail (15), story map et
    MVP (16), spike et exploration (17) ; les nommer avec renvoi, sans les enseigner. Préciser
    une story avant le sprint se dit sans le terme « refinement » (concept 15).
  - Tout le lot : le seuil « presque vide », la définition d'une station vide et les heures de
    pointe restent non fixés (concept 12). Aucun exemple ne les fixe ; une réponse attendue qui
    s'appuie sur l'un d'eux le nomme comme règle à faire fixer (renvoi 8a2), sans le trancher.
  - Sources : partir de `maintainer/work/T-018/framing.md` §8 et des fichiers de
    `course/sources/` des concepts 0 à 8 (Scrum Guide 2020, Wake, Cohn y sont déjà) ; ne
    chercher que ce qui manque : SPIDR (Cohn), patrons de découpage de Richard Lawrence, autres
    catalogues (Wake, « Twenty Ways to Split Stories »), origine de la métaphore du gâteau,
    walking skeleton (Cockburn), ce que le Scrum Guide dit de la DoD (une DoD, standard de
    l'organisation, plusieurs équipes sur un produit) et des éléments prêts pour le Sprint
    Planning, origine et critiques de la DoR, une source sur la rubrique « hors périmètre »
    d'une story, le tableau des dépendances de SAFe. Une attribution qui ne se vérifie pas est
    retirée du concept.
  - Concept 9 :
    - 9a : partir de l'origine des mots (pourquoi « horizontal », pourquoi « vertical ») avant
      le schéma ; schéma en couches empilées, parts légendées « tranche 1, 2, 3 », jamais
      « story » ; dire à part qu'au niveau du sprint une tranche est une story, et dès 9a que le
      vertical s'arrête à la story : ses tâches sont horizontales, et c'est normal (renvoi 4).
    - 9a : garder l'exemple éprouvé de Malik (« quelles stations vont se vider ? », découpage
      ingestion, modèle, carte), situation 9 du fil rouge. Première tranche : l'état actuel des
      stations vides, sans modèle ; la réponse attendue nomme la définition d'une station vide
      (ou le seuil « presque vide ») comme règle non fixée, sans la trancher. La forme (carte,
      liste) reste aux Developers (renvoi 5).
    - 9b : patrons de découpage, choix d'école ; attribuer chaque patron à son catalogue (SPIDR
      ou Lawrence), sans présenter un mélange comme un seul catalogue. Le S de SPIDR (spike) :
      une ligne, renvoi au concept 17. Garder l'exemple « prévoir les stations à risque » (a
      centre-ville, b collecte météo, c tendance de la dernière heure) et sa réponse (b est une
      couche ; version verticale : « prévision ajustée quand il pleut ») ; la météo reste une
      source envisagée, non collectée. Ne pas trancher si la tendance de la dernière heure
      suffit ni si la pluie compte : c'est le concept 17.
    - 9b : une question par message (la question double « laquelle, puis quel patron » se
      coupe en deux messages).
    - « Walking skeleton » : sourcer et le distinguer de la tranche verticale, ou le retirer.
  - Concept 10 :
    - 10a : la story de tournée d'Hugo reprend le texte du concept 6 (« En tant que technicien
      de maintenance, je veux voir les vélos signalés en panne, afin de préparer ma tournée de
      réparation. ») ; « regroupés par station » se retire ou se justifie. Hors périmètre :
      bloquer le vélo à la location (fait fixé), diagnostiquer la panne, les signalements par
      téléphone (non saisis dans l'appli).
    - 10a : garder l'exemple éprouvé de la revue où Sophie crie au bug, et sa réponse attendue
      au ton de PO (montrer la ligne écrite ; la demande est légitime, elle entre au backlog et
      le PO la place). L'erreur `[c13]` (traiter la demande aussitôt) en est le piège ; comment
      ordonner reste au concept 13 (l'argument de sécurité y pèse) : ne pas décider ici que la
      story passe devant.
    - 10a : la rubrique « Hors périmètre » est un choix d'école, absente du Scrum Guide.
    - 10b : deux sortes de dépendances : entre deux stories de l'équipe (Claire, A puis B :
      fusionner ou ordonner ?) et envers une autre équipe (le canal de Julie dépend de l'équipe
      appli, que le concept 7 renvoie ici) : rendre visible, s'accorder avec Inès, PO de l'équipe
      appli, sur l'ordre dans les deux backlogs. Si les deux ne tiennent pas en un message de 15
      lignes, découper (10b1, 10b2) et le noter comme besoin de plan.
    - 10b : l'escalade (Thomas, Agnès) s'enseigne au concept 14 : un renvoi suffit. L'accès à
      la table des locations (DSI) reste l'exemple du concept 11b.
    - 10b : le tableau des dépendances de SAFe se source ou se retire ; le lien « dépend de »
      d'un outil renvoie à l'annexe A1.
  - Concept 11 :
    - 11a : dire d'emblée « une seule DoD, pour toute story » (pas « au niveau de
      l'incrément ») ; la DoD a été nommée au concept 0 (0a3), on y renvoie. Le Scrum Guide ne
      parle pas de critère d'acceptation : la distinction DoD ou critère est une pratique,
      étiquetée comme telle.
    - 11a : garder l'exercice des trois exigences sur les vues de Bruno (fait fixé : chaque vue
      affiche l'heure de la dernière mise à jour, DoD), mais remplacer l'exigence 2 (« sous le
      seuil fixé par le métier ») par un critère qui s'appuie sur une règle fixée (vélo
      disponible, par exemple) : le seuil n'est pas fixé. Les relevés en double restent un
      exemple de DoD ; les dimensions de qualité restent au concept 12b.
    - 11a : l'aparté « la DoD évolue » (rétrospective) est conforme ; l'événement de l'exemple
      (une confusion sur ce qu'est une location) se rattache au fait non fixé des locations très
      courtes, sans le trancher, ou se liste comme besoin de fil rouge.
    - 11b : la DoR, choix d'école ; le Scrum Guide parle d'éléments prêts pour la sélection au
      Sprint Planning (citer ce qu'il dit). Garder l'exemple de la story de Bruno « voir les
      locations du jour par station » bloquée par l'accès à la table des locations, et la DoR de
      l'équipe vélos telle que fixée au fil rouge. Au planning, le PO propose, les Developers
      choisissent (concept 0, détail au concept 15b). Faire avancer l'accès : renvoi à
      l'escalade (concept 14).
    - 11b dépend des sprints : rappeler en une ligne que l'annexe A2 se propose à l'apprenant
      qui travaille sans sprint (ADR-018), sans l'écrire (lot 6).
    - Le risque d'une DoR trop stricte (barrière, mini cahier des charges) : choix d'école,
      attribué à son auteur s'il se vérifie.
  - À la clôture : retirer `maintainer/improvements/09-decoupage-vertical.md`,
    `10-hors-perimetre-dependances.md` et `11-dor-dod.md`.
- **Fini quand** : comme T-018b, pour les concepts 9, 10 et 11 (sans le workflow).
- **Fait le** : 2026-10-22, `course-lot` lancé sur ce lot (24 agents, environ 2,6 M tokens, 16 minutes) ; concepts 9, 10 et 11 réécrits avec leurs sources ; arbitrages du mainteneur appliqués (plan : 9a1-9a2, 9b1-9b2, 10a1-10a2, 10b1-10b2 ; fil rouge : la pluie « pourrait ajuster » la prévision, à vérifier au concept 17 ; historique des locations sur plusieurs années ; la vue des locations du jour montre toutes les locations, courtes comprises) ; laissés ouverts : la vue de Bruno face à la première tranche de Malik (nuance du concept 9), le blocage d'un vélo et la DoD des indicateurs (lot 5) ; glossaire : couche, tranche horizontale, walking skeleton, dépendance précisée ; test par trois sous-agents prof neufs sur des copies avec un apprenant simulé (concept 9 depuis le début avec relance, réponse fausse et départ pressé ; reprise sur une question en attente en 10b2, validation du concept 10, 11a et arrêt ; reprise en 11b, aparté « on est en flux », mini-récap et arrêt) : lectures, rappel, 15 lignes, fil rouge et mémoire conformes ; défauts corrigés dans le lot (9a1 donnait la réponse de 9a2, schéma des tâches avant la question, prévision brute en 9a1, rechange de 9a2, escalade directe à Agnès en 10b2, plan B déjà donné en 11b) ; T-033 proposé (réponse fausse et relances de la banque).
