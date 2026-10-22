# Fil rouge du cours : l'opérateur de vélos en libre-service

Sert d'exemple au cours, concept après concept, en changeant de situation (utilisateur, besoin,
décision) plutôt que de domaine. Le mainteneur tient ce fichier. Le prof ne le modifie pas : un
fait improvisé va dans `maintainer/improvements/`. L'apprenant ne tranche jamais un fait
métier.

## L'entreprise

- Un opérateur exploite le service de vélos en libre-service d'une métropole : environ 300
  stations, 3 000 vélos et 40 000 abonnés.
- La métropole (la collectivité) finance le service par une subvention et attend des
  indicateurs pour la justifier devant son conseil. Le conseil examine la subvention une fois
  par an ; la collectivité y présente un bilan.
- La DSI de l'opérateur gère les systèmes (bornes, location, appli) et donne les accès à leurs
  données.
- Le comité de direction de l'opérateur réunit notamment la directrice des opérations (Agnès) et
  le DSI (Pascal) : leurs désaccords s'y tranchent.

## Le produit et l'équipe

- **Le produit** : la plateforme de données de l'opérateur. Elle collecte les données des
  systèmes dans un entrepôt et en tire des vues, des alertes et des indicateurs pour les métiers
  de l'opérateur et pour la collectivité. Elle existe depuis environ un an.
- **L'objectif produit** : « Que les stations du centre-ville restent le moins longtemps
  possible vides aux heures de pointe, grâce à des données à jour pour l'exploitation. » Sa
  mesure de résultat : le temps cumulé pendant lequel une station du centre-ville est vide aux
  heures de pointe, calculé depuis les relevés des stations. La cible chiffrée, la définition
  des « heures de pointe », celle d'une station vide (vélos à quai ou vélos disponibles) et le
  calcul (par station ou cumulé sur le centre-ville) ne sont pas fixés.
- **Le PO, c'est l'apprenant** : chaque question le place dans ce rôle (« que proposes-tu au
  planning ? »).
- **L'équipe vélos** (l'équipe de la plateforme) : deux data engineers (Léa, Yanis) et une
  analyste (Nora), en sprints de deux semaines. Son Scrum Master, Thomas, l'est aussi de
  l'équipe appli.
- **Ce que la plateforme ne fait pas** :
  - l'appli des abonnés et ses canaux (notifications, SMS) relèvent de l'**équipe appli**, qui a
    sa propre PO (Inès) et consomme des données de la plateforme ;
  - les accès aux données des systèmes relèvent de la DSI.

  Ces deux frontières sont des dépendances naturelles (concepts 10, 11 et 14).

## Les acteurs

| Acteur | Rôle | Besoin principal | Concept |
|---|---|---|---|
| Agnès, directrice des opérations | Encadre l'exploitation (Bruno) et la maintenance (Sophie) ; sponsor de la plateforme, dont elle porte le budget | Que la plateforme améliore le service (objectif produit) | 2, 14 |
| Thomas, Scrum Master | Scrum Master de l'équipe vélos et de l'équipe appli | Lever les obstacles des deux équipes | 0, 14 |
| Malik, régulateur | Conduit une camionnette, redistribue les vélos entre stations | Savoir quelles stations vont se vider, pour y aller avant | 9, 17 |
| Bruno, responsable d'exploitation | Encadre les régulateurs, pilote la flotte au quotidien | Suivre l'état du réseau dans plusieurs vues (stations vides, vélos en panne, locations du jour) | 4, 11, 16 |
| Hugo, technicien de maintenance | Répare les vélos sur le terrain ; confirme ou infirme sur place une panne signalée | Préparer sa tournée de réparation à partir des vélos signalés | 6, 10, 15 |
| Sophie, responsable maintenance | Encadre les techniciens | Qu'un vélo signalé en panne ne soit plus louable | 5, 10, 13 |
| Julie, abonnée | Persona des abonnés sans l'appli, avec un téléphone basique (un tiers des abonnés), construit à partir d'abonnés interrogés | Savoir avant de partir s'il reste un vélo à sa station | 6, 7, 8 |
| Claire, chargée de mission mobilité | Côté collectivité, suit le service qu'elle finance | Justifier la subvention au conseil (locations par quartier) | 10, 12, 13 |
| Inès, PO de l'équipe appli | Porte l'appli des abonnés | Recevoir de la plateforme les données qu'affiche l'appli | 13, 14 |
| Pascal, DSI | Gère les systèmes et leurs accès | Donner les accès aux données dans les règles | 11, 12, 14 |

## Les sources de données

| Source | Contenu | Propriétaire | Fraîcheur, défauts connus |
|---|---|---|---|
| Relevés des stations | Nombre de vélos à quai par station et, pour chacun, s'il est louable | Système des bornes, via la DSI | En continu ; la plateforme se rafraîchit toutes les 5 minutes et garde l'historique depuis son lancement (environ un an). Relevés en double (concept 11) |
| Table des locations | Chaque location : vélo, abonné (identifiant), stations de départ et d'arrivée, heures | Système de location, via la DSI | Accès demandé, pas encore obtenu (concept 11b) ; la DSI demande de justifier chaque colonne demandée |
| Signalements de pannes | Vélo signalé, par l'abonné dans l'appli | Équipe appli | Les signalements par téléphone ne sont pas saisis dans l'appli |
| Abonnés | Abonnement, station favorite | Équipe appli | |
| Référentiel des quartiers | Quartier de chaque station | La collectivité | |
| Météo | Pluie, par heure | Service externe | Source envisagée, pas encore collectée |

## Faits fixés

- « Station presque vide » : règle métier à fixer par un seuil (3 vélos cité comme exemple, pas
  décidé).
- Le centre-ville sert de premier périmètre ; la météo (pluie) ajuste la prévision des
  stations à risque.
- Un vélo signalé en panne reste louable : son blocage à la location a été mis hors périmètre
  de la story de tournée d'Hugo ; Sophie le réclame (concept 10).
- Un vélo n'est plus louable quand un technicien l'a retiré du service après constat.
- Règles fixées : un vélo disponible est un vélo à quai et louable ; la station d'un abonné est
  celle qu'il a choisie comme favorite. Fraîcheur visée : moins de 15 minutes.
- La disponibilité par station vient de la plateforme ; la livrer à Julie par un canal (SMS,
  serveur vocal, appli) dépend de l'équipe appli.
- La collectivité veut le nombre de locations par quartier sur le mois, puis la comparaison au
  même mois de l'an dernier (concept 10b).
- Chaque vue de Bruno affiche l'heure de la dernière mise à jour (DoD, concept 11). DoR de
  l'équipe vélos : critères d'acceptation écrits, règles métier fixées, dépendances
  identifiées, accès aux données obtenu (concept 11b).
- La vue des stations vides doit servir à Bruno à envoyer les régulateurs plus tôt vers les
  stations qui se vident.
- La journée de Bruno : point du matin sur l'état du réseau, envoi des régulateurs, suivi des
  incidents, bilan du soir.
- Sophie fixe chaque semaine le nombre de techniciens en tournée.
- Une location rendue à la même station au bout de quelques minutes est souvent un vélo
  défectueux rendu aussitôt ; les compter ou non comme locations n'est pas fixé.

## Situations par concept

Indicatif, pour varier les situations d'un concept à l'autre ; la banque d'exemples du fichier
du concept prime.

| # | Situation |
|---|---|
| 0 | Un sprint de deux semaines de l'équipe vélos ; la vue des stations vides est livrée le mercredi de la deuxième semaine (incrément avant la fin du sprint) |
| 1 | Présenter la plateforme à un nouvel arrivant : par son effet ou par sa technique ? Léa propose de passer au streaming : quoi ou comment ? |
| 2 | La vue des stations vides est livrée : les stations restent-elles moins longtemps vides ? Formuler l'objectif produit avec Agnès ; choisir sa mesure |
| 3 | Les demandes arrivent en vrac (Bruno, Sophie, Claire, Inès) : qu'est-ce qu'un backlog, et ce qu'il n'est pas |
| 4 | « Suivre l'état du réseau » (Bruno) : epic, vues (stations vides, vélos en panne, locations du jour), stories |
| 5 | Sophie veut le nombre de vélos en panne par semaine : les « pourquoi ? » successifs passent par le nombre de vélos à réparer et mènent au nombre de techniciens en tournée |
| 6 | La tournée de réparation : acteur Hugo ou Sophie ? Julie comme persona |
| 7 | Le SMS de Julie : solution ou contrainte ? |
| 8 | Disponibilité de la station favorite de Julie : critères et règles métier |
| 9 | Quelles stations vont se vider ? (Malik) |
| 10 | La tournée d'Hugo et le blocage réclamé par Sophie ; les stories de Claire (locations par quartier, comparaison à l'an dernier) |
| 11 | Les vues de Bruno ; l'accès à la table des locations, pas encore obtenu |
| 12 | Définir « locations par quartier » pour Claire (locations très courtes, référentiel des quartiers) ; relevés en double, signalements par téléphone absents ; quelles colonnes de la table des locations demander à Pascal |
| 13 | Ordonner quatre demandes : blocage des vélos en panne (Sophie, sécurité), locations du jour (Bruno, accès en attente), comparaison à l'an dernier (Claire, bilan annuel au conseil), disponibilité pour l'appli (Inès) ; MoSCoW pour le bilan au conseil |
| 14 | Carte des parties prenantes ; Inès et Claire veulent le même sprint ; l'accès aux locations bloque depuis trois sprints : escalade (Thomas, Agnès, Pascal) |
| 15 | « Vélo en panne » : signalé ou constaté par Hugo ? Objectif de sprint autour des vélos en panne ; revue avec Bruno et Sophie, le backlog change |
| 16 | La journée de Bruno en story map ; première version : le point du matin ; Bruno demande « pour quand ? » |
| 17 | La prévision des stations à risque : la tendance de la dernière heure suffit-elle ? La pluie compte-t-elle ? Nora explore l'historique des relevés pendant un temps borné |
