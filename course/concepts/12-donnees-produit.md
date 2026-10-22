---
concept: 12
titre: Les données du produit
---

# Les données du produit

## Objectif
Faire écrire la définition d'un indicateur qui ne laisse pas deux lectures ; exprimer une
exigence de qualité des données en règle mesurable et la ranger au bon endroit ; savoir quelles
données demander, pour quelle finalité, quand l'accès touche des données personnelles.

## L'essentiel
Un PO data ne calcule pas l'indicateur ni n'écrit les tests : les Developers s'en chargent. Il
fait **écrire et fixer** ce que l'indicateur compte (sa définition), ce que « données de
qualité » veut dire pour l'usage (des règles mesurables), et il sait **ce qu'il demande** à
celui qui donne l'accès (quelles colonnes, pour quoi faire). Sans définition, deux chiffres
justes se contredisent ; sans règle de qualité, « fiable » ne se teste pas ; sans finalité,
l'accès ne s'obtient pas, ou s'obtient trop large.

## Consensus et choix d'école
- **Consensus** (pratiques de la donnée : DAMA UK, repris par le cadre de qualité des données
  du gouvernement britannique ; recensement de DAMA NL) : la qualité des données s'exprime en
  règles mesurables sur des dimensions, et le niveau de qualité exigé dépend de l'usage. Le
  Scrum Guide et les référentiels du PO ne disent ni comment définir un indicateur ni comment
  exprimer la qualité des données.
- **Consensus** (texte de loi, le RGPD) : une donnée personnelle est une information sur une
  personne identifiée ou identifiable, y compris par un identifiant ; une donnée pseudonymisée
  qu'on peut rattacher à une personne reste personnelle. Les données sont collectées pour des
  finalités déterminées (limitation des finalités) et limitées à ce qui est nécessaire à ces
  finalités (minimisation).
- **Choix d'école** :
  - la liste des dimensions de qualité : six chez DAMA UK (exactitude, complétude, unicité,
    cohérence, fraîcheur, validité), d'autres listes ailleurs, parfois bien plus longues ;
  - le grain, terme de la modélisation dimensionnelle de Kimball : ce que représente une ligne
    d'une table de faits ; le cours l'étend à un indicateur : ce que représente une valeur de
    l'indicateur (par station, par quartier).
- **Choix du cours** (sans texte de référence, à présenter comme tel) : le contenu d'une
  définition d'indicateur (ce qu'il compte et sa règle de calcul, grain, période, source,
  fraîcheur), qui recoupe la pratique des outils d'indicateurs ; les trois lieux d'une exigence
  de qualité (DoD, critère d'acceptation, définition de l'indicateur) ; « la définition vaut
  partout où l'indicateur est publié ».

## Sous-concepts
1. **12a définir un indicateur** : ce qu'il compte et sa règle de calcul (ce qu'on inclut, ce
   qu'on exclut), son grain, sa période, sa source, sa fraîcheur. La définition vaut pour
   l'indicateur partout où il est publié ; un critère d'acceptation est propre à une story
   (concept 8). Le PO fait fixer les règles qui manquent, il ne les tranche pas (renvoi 8a2).
   Se déroule en deux messages :
   - **12a1** le contenu d'une définition (« Compléter la définition des vélos disponibles »,
     corrigé tiré des règles fixées) ;
   - **12a2** ce qui manque et qui le fixe (« Les locations par quartier de Claire »). En
     rechange : « La mesure de résultat est aussi un indicateur » (sans réenseigner 2c).
2. **12b qualité des données** : une exigence de qualité s'écrit en règle mesurable sur une
   dimension ; elle va dans la DoD si elle vaut pour toute story (le test des relevés en double,
   concept 11a), dans un critère si elle est propre à une story, dans la définition de
   l'indicateur si elle le concerne (la fraîcheur des vélos disponibles : le critère de Julie la
   cite pour son cas, concept 8b1). Une limite de la source n'est
   pas un défaut que la plateforme corrige : elle s'écrit et se montre. Exemple principal :
   « Les signalements par téléphone ». En rechange, ou pour « exercice » : « Des chiffres
   fiables, dit Claire ».
3. **12c accès et données personnelles** : demander les colonnes nécessaires à une finalité
   dite, au détail ou agrégées selon l'usage ; un identifiant d'abonné est une donnée
   personnelle. Le PO ne fait pas le droit : il sait quoi demander et pourquoi. Exemple
   principal : « Quelles colonnes demander à Pascal ? ». En rechange, ou si l'apprenant dit
   « ce n'est qu'un numéro » : « Prenons toute la table ».

## Banque d'exemples

Faits du fil rouge utilisés : règles fixées (un vélo disponible est un vélo à quai et
louable ; fraîcheur visée : moins de 15 minutes) ; relevés des stations (vélos à quai par
station et, pour chacun, s'il est louable ; la plateforme se rafraîchit toutes les 5 minutes ;
relevés en double) ; un vélo signalé en panne reste louable ; DoD de l'équipe vélos (heure de
la dernière mise à jour sur chaque vue de Bruno ; chaque indicateur publié a sa définition
écrite ; test des relevés en double, concept 11a) ; table des locations (vélo, identifiant de
l'abonné, stations de départ et d'arrivée, heures ; accès demandé à Pascal, pas obtenu ; la DSI
demande de justifier chaque colonne) ; référentiel des quartiers (quartier de chaque station,
tenu par la collectivité) ; Claire veut le nombre de locations par quartier sur le mois, puis
la comparaison au même mois de l'an dernier ; signalements de pannes saisis dans l'appli
(équipe appli), ceux reçus par téléphone non saisis ; Sophie fixe chaque semaine le nombre de
techniciens en tournée ; la mesure de résultat de l'objectif produit. Non fixés, et qu'aucun
exemple ne fixe : compter ou non les locations très courtes ; quartier de la station de départ
ou d'arrivée ; station vide, heures de pointe, cible et calcul de la mesure de résultat ; seuil
« presque vide ». Les brouillons de définition, les répliques des Developers et de Claire, et
les règles de qualité proposées, l'indicateur des vélos signalés par semaine que regarde Sophie
(banque 12b) sont des propositions d'exercice : elles ne deviennent pas des
faits du fil rouge. Le prof ne demande jamais à l'apprenant de fixer une règle.

### Compléter la définition des vélos disponibles (12a1)
- **Explication** : un indicateur (valeur calculée par le produit pour ses utilisateurs) se
  lit d'une seule façon quand sa définition écrite dit : ce qu'il compte et sa règle de calcul
  (ce qu'on inclut, ce qu'on exclut), son grain (ce que représente une valeur : par station,
  par quartier), sa période (l'instant ou la durée sur laquelle on compte), sa source (le
  système qui produit les données, avec son propriétaire), sa fraîcheur (l'âge maximal des
  données quand on lit le chiffre). Liste : choix du cours ; le grain vient de Kimball. La DoD
  exige une définition écrite pour chaque indicateur publié (11a) : le PO la fait écrire et
  fixer, les Developers font le calcul.
- **Situation** : les vues de Bruno et la story de Julie affichent les vélos disponibles de
  chaque station. Nora, analyste, écrit : « Vélos disponibles : nombre de vélos de chaque
  station, d'après les relevés. »
- **Question** : complète cette définition pour que deux analystes qui la lisent calculent le
  même nombre.
- **Réponse attendue** : ce qui est juste : le grain (par station) et la source (les relevés des
  stations). À compléter : la règle de calcul, « vélos » seul laisse compter les vélos à quai ;
  la règle fixée dit : un vélo à quai et louable. La période : au dernier relevé (un état à un
  instant, pas un cumul sur la journée). La fraîcheur : moins de 15 minutes, la règle fixée. Les
  deux ne se confondent pas : la période dit à quel moment le nombre est vrai, la fraîcheur de
  combien ce moment peut dater quand on lit le chiffre. Corrigé : « Vélos disponibles : nombre
  de vélos à quai et louables, par station, au dernier relevé, d'après les relevés des stations,
  à jour de moins de 15 minutes. » Nuances, non attendues : les relevés en double relèvent de la
  qualité (12b) et de la DoD, pas de la définition ; la définition cite les règles fixées, elle
  ne les invente pas.
- **Erreurs fréquentes** :
  - écrire comment calculer (requête, jointure) : c'est le comment des Developers ; la
    définition dit ce qu'on compte, sur quoi, quand ;
  - exclure les vélos signalés en panne « parce qu'ils sont en panne » : la règle dit qu'un
    vélo signalé reste louable, donc disponible ; exclure, c'est inventer une règle (concept
    8b2) ;
  - écrire « en temps réel » pour la fraîcheur : un mot flou (concept 7a2) ; la règle fixée
    dit moins de 15 minutes ;
  - ajouter seulement « à quai et louables », sans période ni fraîcheur : dire ce qui est
    corrigé, puis demander « à quel moment ce nombre est-il vrai, et vieux de combien ? » ;
  - perdre en réécrivant une case déjà juste (« par station » disparaît) : dire ce qui est
    ajouté, puis demander « ce nombre, il est donné pour quoi : une station, tout le réseau ? ».
- **Ce qui marche** : le test des deux analystes : « Nora et Yanis lisent ta définition chacun
  de leur côté : trouvent-ils le même nombre pour la même station ? ». Puis passer les cinq
  cases une à une.

### Les locations par quartier de Claire (12a2)
- **Explication** : une définition vaut pour l'indicateur partout où il est publié (choix du
  cours) ; un critère d'acceptation est propre à une story (concept 8). Une case qu'on ne peut
  pas remplir signale une règle non fixée, ou une source qui manque.
- **Situation** : Claire, chargée de mission mobilité, veut le nombre de locations par quartier
  sur le mois, pour justifier la subvention au conseil (story A, concept 10b1). Nora écrit :
  « Locations par quartier : nombre de locations, par quartier, sur le mois, d'après la table
  des locations. » Une location rendue à la même station au bout de quelques minutes est
  souvent un vélo défectueux rendu aussitôt. Le quartier de chaque station est dans le
  référentiel des quartiers, tenu par la collectivité.
- **Question** : qu'est-ce qui reste ouvert dans cette définition ? (Qui le fixe : relance si
  l'apprenant s'arrête à ce qui manque.)
- **Réponse attendue** : deux règles ne sont pas fixées. Compter ou non les locations très
  courtes ; rattacher la location au quartier de la station de départ ou d'arrivée. Toutes deux
  changent le chiffre ; c'est Claire qui les fixe, pour ce qu'elle montre au conseil ; le PO lui
  pose la question, il ne choisit pas. Bruno peut l'éclairer (il voit les vélos rendus
  aussitôt), il ne fixe pas : sa vue des locations du jour montre toutes les locations, et la
  règle concerne l'indicateur de Claire. La source est incomplète : le quartier vient du
  référentiel des quartiers, tenu par la collectivité, à côté de la table des locations. La
  fraîcheur manque aussi : le PO demande à Claire quand elle a besoin du mois. Nuances, non
  attendues : la table des locations n'est pas encore accessible (concept 11b) : la story ne
  remplit pas la DoR, même avec une définition complète. La comparaison au même mois de l'an
  dernier (story B) n'a de sens qu'avec la même définition, appliquée aux deux années : c'est
  pourquoi elle s'écrit une fois, pour l'indicateur, et non dans les critères de A.
- **Erreurs fréquentes** :
  - trancher (« on enlève les locations courtes, ce sont des pannes ») : réponse fausse, même
    si l'argument est bon ; ni l'apprenant ni le PO ne fixent la règle. Réexpliquer avec
    l'exemple de « Ce qui marche » (la location de trois minutes), puis demander « qui montre ce
    chiffre au conseil ? » ;
  - voir ce qui manque sans dire qui le fixe : demander « et alors, on fait quoi ? » ;
  - répondre « Bruno » : sa vue des locations du jour montre toutes les locations, courtes
    comprises ; c'est une autre vue ; pour l'indicateur de Claire, c'est Claire ;
  - mettre la définition dans les critères de la story A : demander « et la story B, quelle
    définition prend-elle ? » ;
  - réponse elliptique (« départ ou arrivée ? ») : faire préciser (qui tranche ? pourquoi
    est-ce ouvert ?) avant de corriger.
- **Ce qui marche** : faire calculer deux chiffres possibles pour une même location courte (un
  vélo pris et rendu à la même station en trois minutes : une location ou zéro ?). Le
  désaccord montre la règle qui manque.

### La mesure de résultat est aussi un indicateur (12a, en rechange)
- **Explication** : la mesure de résultat de l'objectif produit (concept 2c) est un indicateur
  comme un autre : elle a besoin d'une définition complète. Rappel, sans réenseigner 2c.
- **Situation** : la mesure de résultat retenue : le temps cumulé pendant lequel une station du
  centre-ville est vide aux heures de pointe, calculé depuis les relevés des stations.
- **Question** : passe cette mesure aux cinq cases de la définition : lesquelles sont
  remplies, lesquelles restent ouvertes ?
- **Réponse attendue** : remplie : la source (les relevés des stations). Ouvertes : la règle
  (une station vide : sans vélo à quai, ou sans vélo disponible ? quelles heures de pointe ?),
  la période sur laquelle on cumule le temps (le jour, la semaine, le mois ?), le grain et le
  calcul (par station, ou cumulé sur le centre-ville), et la cible
  chiffrée, qui n'est pas dans la définition mais manque pour juger. Ces points ne sont pas
  fixés ; le PO les fait fixer avec les parties prenantes (concept 2c), sans les trancher. La
  fraîcheur n'est pas dite non plus.
- **Erreurs fréquentes** :
  - proposer une définition (« vide, c'est zéro vélo disponible ») : c'est fixer un fait
    métier ; demander « qui doit le décider ? » ;
  - croire la mesure prête parce que sa phrase est longue : compter les cases remplies.
- **Ce qui marche** : « deux analystes la calculent demain : trouvent-ils le même temps ? ».

### Les signalements par téléphone (12b)
- **Explication** : la qualité s'exprime en règles mesurables sur des dimensions (pratique
  établie) ; leur liste est un choix d'école : six chez DAMA UK (exactitude, complétude,
  unicité, cohérence, fraîcheur, validité) ; un relevé en double relève de l'unicité. Une
  exigence va dans la DoD si elle vaut pour toute story (11a), dans un critère si elle est
  propre à une story (8b1), dans la définition si elle concerne l'indicateur. Ce que la
  plateforme reçoit mal se corrige (un doublon) ; ce qu'elle ne reçoit jamais est une limite de
  la source.
- **Situation** (hypothèse d'exercice) : la plateforme publie le nombre de vélos signalés par
  semaine, que Sophie regarde pour fixer le nombre de techniciens en tournée. Les signalements
  viennent de l'appli (équipe appli) ; ceux reçus par téléphone n'y sont pas saisis. Yanis :
  « C'est un défaut de qualité : ajoutons une story pour le corriger. »
- **Question** : que réponds-tu à Yanis ? (Où l'écrire : relance si l'apprenant s'arrête à
  « c'est une limite de la source ».)
- **Réponse attendue** : ce n'est pas un défaut que la plateforme peut corriger : elle ne reçoit
  pas les signalements par téléphone, aucun traitement ne les fera apparaître. C'est une limite
  de la source (pour cet usage, une question de complétude). On l'écrit dans la définition de
  l'indicateur (« ne compte que les signalements saisis dans l'appli ») et on la rend visible à
  ceux qui s'en servent, Sophie d'abord, là où ils lisent le chiffre. Si Sophie a besoin des
  signalements par téléphone, la question va d'abord à ceux qui les reçoivent, et au
  propriétaire de la source, l'équipe appli, pour leur saisie (dépendance envers une autre
  équipe, concept 10b2) : pas une story de nettoyage. Le fil rouge ne dit pas qui reçoit les
  appels : ne pas le fixer. Nuance : ce
  qui compte comme « en panne » (signalé ou constaté) se précise au concept 15.
- **Erreurs fréquentes** :
  - accepter la story de Yanis : demander « avec quelles données la plateforme les
    retrouverait-elle ? » ;
  - l'écrire dans la DoD : elle ne vaut pas pour toute story, seulement pour cet indicateur ;
  - l'écrire dans la définition sans la montrer : Sophie lit le chiffre, pas la définition ;
    demander « où Sophie l'apprend-elle ? » ;
  - réponse juste sans la suite (« c'est une limite de la source ») : demander « et alors, on
    fait quoi ? ».
- **Ce qui marche** : séparer ce que l'équipe peut corriger (un doublon dans ce qu'elle reçoit)
  de ce qu'elle ne reçoit pas (un signalement jamais saisi) ; et « si Sophie fixe ses
  techniciens sur ce chiffre sans savoir qu'il manque des pannes, que se passe-t-il ? ».

### Des chiffres fiables, dit Claire (12b, en rechange)
- **Explication** : une exigence de qualité vague ne se teste pas ; on la traduit en règles
  mesurables, une dimension à la fois, et c'est l'utilisateur qui dit le niveau dont il a
  besoin (la qualité dépend de l'usage).
- **Situation** : Claire, chargée de mission mobilité, à propos des locations par quartier :
  « Je présente ces chiffres au conseil : il me faut des chiffres fiables. »
- **Question** : comment transformes-tu « fiables » en exigences qu'on peut vérifier ?
- **Réponse attendue** : « fiables » est un mot flou (concept 7a2) : on demande à Claire ce qui
  la ferait douter d'un chiffre, puis on écrit des règles mesurables, par dimension. Exemples
  d'exercice : chaque location est rattachée à un quartier (complétude) ; aucune location
  comptée deux fois (unicité) ; les locations des derniers jours du mois sont comptées quand
  Claire lit le chiffre (fraîcheur). Ce qui vaut pour cet indicateur va dans sa
  définition ; ce qui vaut pour toute story va dans la DoD. Le niveau exigé (un taux, une date)
  est à faire dire par Claire : le PO ne le fixe pas.
- **Erreurs fréquentes** :
  - répondre « on testera tout » : demander « que vérifie le test, exactement ? » ;
  - fixer soi-même un seuil (« moins de 1 % d'erreurs ») : c'est à Claire de dire ce dont le
    conseil a besoin.
- **Ce qui marche** : « quel chiffre, faux, te mettrait en difficulté devant le conseil ? ».

### Quelles colonnes demander à Pascal ? (12c)
- **Explication** : le RGPD (texte de loi) demande des finalités déterminées et seulement les
  données nécessaires à ces finalités (minimisation). Un identifiant d'abonné est une donnée
  personnelle : il permet de retrouver la personne. Le PO ne fait pas le droit ; il sait dire,
  pour chaque colonne, à quoi elle sert, et s'il lui faut le détail ou un agrégat. S'il y a un
  délégué à la protection des données, c'est lui qui conseille sur la règle.
- **Situation** : la table des locations contient, pour chaque location : le vélo, l'identifiant
  de l'abonné, les stations de départ et d'arrivée, les heures. L'accès est demandé à Pascal,
  DSI ; il demande de justifier chaque colonne. On prépare la demande pour les stories de
  Claire (locations par quartier sur le mois, puis comparaison au même mois de l'an dernier).
- **Question** : que demandes-tu à Pascal pour les stories de Claire, et comment le
  justifies-tu ? (Relances : si l'apprenant ne parle que des colonnes, « et quelles
  locations ? » ; s'il donne la liste sans raison, « à quoi sert chacune ? ».)
- **Réponse attendue** : la finalité d'abord : compter les locations par quartier, sur le mois,
  pour Claire. Les stations de départ et d'arrivée (le quartier vient du référentiel, et la
  règle départ ou arrivée n'est pas fixée) et les heures (la période, et la durée si Claire
  écarte les locations très courtes). Pas l'identifiant de l'abonné : il ne sert pas à compter
  les locations par quartier, et c'est une donnée personnelle. Pas le vélo non plus pour cette
  finalité : si une règle à venir en a besoin, on le demande alors, avec sa finalité. Claire
  reçoit des comptes agrégés par quartier ; la plateforme a besoin des lignes de location pour
  les calculer, sans l'abonné : au détail, parce que la règle des locations très courtes n'est
  pas fixée et que le calcul en dépend. Les lignes aussi se bornent : les locations du mois et
  du même mois de l'an dernier (story B), pas tout l'historique. Nuances, non attendues : la vue
  des locations du jour de Bruno (concept 11b) attend le même accès ; c'est une autre finalité,
  justifiée colonne par colonne elle aussi (stations, heures, toujours sans l'abonné). La
  demande de Pascal n'est pas un frein, c'est la
  minimisation appliquée ; une demande justifiée colonne par colonne avance plus vite (renvoi
  11b).
- **Erreurs fréquentes** :
  - « toute la table, on verra » : demander « à quoi sert l'identifiant de l'abonné pour
    compter par quartier ? » ;
  - oublier les heures : sans elles, pas de mois ;
  - demander tout l'historique : la finalité borne aussi les lignes ; demander « de quels mois
    Claire a-t-elle besoin ? » ;
  - voir la question de Pascal comme une mauvaise volonté à contourner : sa question est celle
    que le PO doit savoir poser d'abord ; si l'accès bloque sprint après sprint, l'escalade se
    voit au concept 14 ;
  - réponse juste sans la raison (« départ, arrivée, heures ») : demander « pourquoi pas
    l'abonné ? ».
- **Ce qui marche** : écrire la demande en deux colonnes, « colonne » et « à quoi elle sert pour
  Claire » ; une colonne sans raison ne se demande pas.

### Prenons toute la table (12c, en rechange)
- **Explication** : une donnée pseudonymisée (un identifiant à la place du nom) reste une donnée
  personnelle pour qui peut la rattacher à une personne (RGPD). Une finalité se dit avant
  d'utiliser les données, pas après.
- **Situation** : Léa, data engineer : « Demandons toute la table. L'identifiant de l'abonné,
  ce n'est qu'un numéro, pas un nom ; et on en aura peut-être besoin plus tard. »
- **Question** : qu'est-ce qui ne tient pas dans les deux arguments de Léa ?
- **Réponse attendue** : « ce n'est qu'un numéro » : l'identifiant est une donnée personnelle ;
  l'opérateur connaît le nom et les coordonnées de ses abonnés, il sait à qui correspond un
  identifiant. « Plus tard » : une finalité se dit avant d'utiliser
  les données, pas après ; « peut-être plus tard » n'en est pas une. On demande ce
  qui sert la finalité d'aujourd'hui ; une nouvelle finalité fera une nouvelle demande, avec sa
  justification. Nuance : le PO ne tranche pas un point de droit ; le délégué à la protection
  des données, s'il y en a un, conseille.
- **Erreurs fréquentes** :
  - ne réfuter que l'un des deux arguments : dire ce qui est juste, relancer sur l'autre ;
  - « on l'anonymisera dans l'entrepôt » : la collecte reste trop large ; et un identifiant
    remplacé par un autre reste rattachable tant que quelqu'un garde la correspondance.
- **Ce qui marche** : « l'opérateur peut-il retrouver qui est l'abonné 48213 ? ».

## Pièges
- **Écrire le calcul au lieu de la définition** : une requête dit comment, pas ce qu'on compte ;
  le PO fait écrire ce que l'indicateur compte, sur quoi, quand.
- **Combler une case vide par une règle inventée** (les locations très courtes, une station
  vide, les heures de pointe) : le PO fait fixer la règle par celui qui utilise l'indicateur
  (concept 8a2).
- **Mettre la définition dans les critères d'une story** : elle vaut partout où l'indicateur est
  publié ; deux stories qui le publient (le mois, la comparaison à l'an dernier) doivent
  prendre la même.
- **Une exigence de qualité vague** (« fiable », « propre ») : la traduire en règles mesurables,
  par dimension, au niveau que l'utilisateur demande.
- **Prendre une limite de la source pour un défaut à corriger** : la plateforme ne crée pas les
  signalements jamais saisis ; elle écrit la limite et la montre.
- **Tout ranger dans la DoD** : ce qui ne vaut que pour un indicateur va dans sa définition, ce
  qui ne vaut que pour une story dans ses critères.
- **Demander toute la table « au cas où »** : sans finalité, pas de colonne.
- **« Ce n'est qu'un identifiant, pas un nom »** : une donnée pseudonymisée reste personnelle
  pour qui peut la rattacher à une personne.
- **Faire le juriste** : le PO sait quoi demander et pourquoi ; la règle de droit relève du
  délégué à la protection des données, s'il y en a un.

## Le test rapide
Définition : « deux analystes qui la lisent calculent-ils le même nombre ? ». Qualité :
« cette exigence vaut-elle pour toute story, pour une story, ou pour cet indicateur ? ». Accès :
« à quoi sert chaque colonne demandée, pour quelle finalité ? ».

## Schéma
Trois schémas, un par sous-concept, chacun montré dans la correction, jamais avant la réponse.
1. **12a** : une fiche d'identité d'indicateur, « Locations par quartier », à cinq cases : règle
   de calcul, grain, période, source, fraîcheur. Deux cases en rouge, « locations très courtes :
   à faire fixer par Claire » et « quartier de départ ou d'arrivée : à faire fixer par
   Claire ». La fiche est reliée à deux sorties : le bilan du mois et la comparaison à l'an
   dernier (« une définition, partout où l'indicateur est publié »).
2. **12b** : deux entrées dans la plateforme. Un relevé en double qui entre, marqué « reçu mal :
   se corrige (unicité) » ; un signalement par téléphone qui reste dehors, marqué « jamais reçu :
   limite de la source, s'écrit et se montre ».
3. **12c** : la table des locations passe par un filtre : les colonnes stations et heures, et
   les locations des deux mois utiles, passent ; « identifiant de l'abonné » s'arrête. Légende :
   « une colonne, une raison (finalité, minimisation) ».
