# Fil rouge du cours : l'opérateur de vélos en libre-service

Sert d'exemple au cours, concept après concept, en changeant de situation (utilisateur, besoin,
décision) plutôt que de domaine. Le mainteneur tient ce fichier. Le prof ne le modifie pas : un
fait improvisé va dans `maintainer/improvements/`. L'apprenant ne tranche jamais un fait
métier.

## L'entreprise

- Un opérateur exploite le service de vélos en libre-service d'une métropole : environ 300
  stations, 3 000 vélos et 40 000 abonnés.
- La métropole (la collectivité) finance le service par une subvention et attend des
  indicateurs pour la justifier devant son conseil.
- La DSI de l'opérateur gère les systèmes (bornes, location, appli) et donne les accès à leurs
  données.

## Le produit et l'équipe

- **Le produit** : la plateforme de données de l'opérateur. Elle collecte les données des
  systèmes dans un entrepôt et en tire des vues, des alertes et des indicateurs pour les métiers
  de l'opérateur et pour la collectivité.
- **Le PO, c'est l'apprenant** : chaque question le place dans ce rôle (« que proposes-tu au
  planning ? »).
- **L'équipe vélos** (l'équipe de la plateforme) : deux data engineers (Léa, Yanis) et une
  analyste (Nora), en sprints de deux semaines.
- **Ce que la plateforme ne fait pas** :
  - l'appli des abonnés et ses canaux (notifications, SMS) relèvent de l'**équipe appli**, qui a
    sa propre PO (Inès) et consomme des données de la plateforme ;
  - les accès aux données des systèmes relèvent de la DSI.

  Ces deux frontières sont des dépendances naturelles (concepts 9 et 10).

## Les acteurs

| Acteur | Rôle | Besoin principal | Concept |
|---|---|---|---|
| Malik, régulateur | Conduit une camionnette, redistribue les vélos entre stations | Savoir quelles stations vont se vider, pour y aller avant | 8 |
| Bruno, responsable d'exploitation | Encadre les régulateurs, pilote la flotte au quotidien | Suivre l'état du réseau dans plusieurs vues (stations vides, vélos en panne, locations du jour) | 10 |
| Hugo, technicien de maintenance | Répare les vélos sur le terrain | Préparer sa tournée de réparation à partir des vélos signalés | 9 |
| Sophie, responsable maintenance | Encadre les techniciens | Qu'un vélo signalé en panne ne soit plus louable | 9 |
| Julie, abonnée | Abonnée sans l'appli, avec un téléphone basique (comme un tiers des abonnés) | Savoir avant de partir s'il reste un vélo à sa station | 6, 7 |
| Claire, chargée de mission mobilité | Côté collectivité, suit le service qu'elle finance | Justifier la subvention au conseil (locations par quartier) | 9 |
| Inès, PO de l'équipe appli | Porte l'appli des abonnés | Recevoir de la plateforme les données qu'affiche l'appli | |
| Pascal, DSI | Gère les systèmes et leurs accès | Donner les accès aux données dans les règles | 10 |

## Les sources de données

| Source | Contenu | Propriétaire | Fraîcheur, défauts connus |
|---|---|---|---|
| Relevés des stations | Nombre de vélos à quai par station | Système des bornes, via la DSI | En continu ; la plateforme se rafraîchit toutes les 15 minutes. Relevés en double (concept 10) |
| Table des locations | Chaque location : vélo, stations de départ et d'arrivée, heures | Système de location, via la DSI | Accès demandé, pas encore obtenu (concept 10b) |
| Signalements de pannes | Vélo signalé, par l'abonné dans l'appli | Équipe appli | Les signalements par téléphone ne sont pas saisis dans l'appli |
| Abonnés | Abonnement, station favorite | Équipe appli | |
| Météo | Pluie, par heure | Service externe | Source envisagée, pas encore collectée |

## Faits fixés

- « Station presque vide » : règle métier à fixer par un seuil (3 vélos cité comme exemple, pas
  décidé).
- Le centre-ville sert de premier périmètre ; la météo (pluie) ajuste la prévision des
  stations à risque.
- Rafraîchissement toutes les 15 minutes cité comme option avant le temps réel.
- Un vélo signalé en panne reste louable : son blocage à la location a été mis hors périmètre
  de la story de tournée d'Hugo ; Sophie le réclame (concept 9).
- Règles fixées : un vélo disponible est un vélo à quai et louable ; la station d'un abonné est
  celle qu'il a choisie comme favorite. Fraîcheur visée : moins de 15 minutes.
- La disponibilité par station vient de la plateforme ; la livrer à Julie par un canal (SMS,
  serveur vocal, appli) dépend de l'équipe appli.
- La collectivité veut le nombre de locations par quartier sur le mois, puis la comparaison au
  même mois de l'an dernier (concept 9b).
- Chaque vue de Bruno affiche l'heure de la dernière mise à jour (DoD, concept 10). DoR de
  l'équipe vélos : critères d'acceptation écrits, règles métier fixées, dépendances
  identifiées, accès aux données obtenu (concept 10b).

## Pistes pas encore utilisées

- Priorisation (concept 11) : le blocage des vélos en panne (Sophie) face aux autres demandes
  (Bruno, Claire, Inès).
