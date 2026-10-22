# Fil rouge du cours : l'opérateur de vélos en libre-service

Sert d'exemple au cours, concept après concept, en changeant de situation (utilisateur, besoin,
décision) plutôt que de domaine. Le professeur fixe les faits métier :
l'apprenant ne tranche jamais un besoin métier. Chaque nouveau fait fixé s'ajoute ici, pour
rester cohérent d'une session à l'autre.

Distinct du projet factice du TP (supérettes) : jamais de mélange.

## Faits fixés

- Un opérateur exploite des stations de vélos en libre-service dans une ville. On dispose de
  relevés du nombre de vélos par station.
- **Régulateur** : conduit une camionnette et redistribue les vélos ; il veut savoir quelles
  stations vont se vider pour y aller avant (concept 8).
- « Station presque vide » : règle métier à fixer par un seuil (3 vélos cité comme exemple, pas
  décidé).
- Le centre-ville sert de premier périmètre ; la météo (pluie) est une source envisagée.
- Rafraîchissement toutes les 15 minutes cité comme option avant le temps réel.
- **Équipe maintenance** (concept 9) : les abonnés signalent les vélos en panne dans l'appli ;
  certains signalements arrivent aussi par téléphone. Le technicien de maintenance prépare sa
  tournée de réparation à partir des vélos signalés, regroupés par station.
- Aujourd'hui, un vélo signalé en panne reste louable : son blocage à la location a été mis hors
  périmètre de la première story ; la responsable maintenance le réclame.
- **Abonné sans appli** (retour sur INVEST, session 6) : un tiers des abonnés n'a pas l'appli,
  seulement un téléphone basique. L'abonné veut savoir avant de partir s'il reste un vélo à sa
  station. Exemple : Julie.
- Règles fixées : un vélo disponible est un vélo à quai et louable ; la station d'un abonné est
  celle qu'il a choisie comme favorite. Fraîcheur visée : moins de 15 minutes.
- **Collectivité** (concept 9b) : elle finance le service. Sa chargée de mission mobilité doit
  justifier la subvention au conseil ; elle veut le nombre de locations par quartier sur le mois,
  puis la comparaison au même mois de l'an dernier.

- **Responsable d'exploitation** (concept 10) : suit plusieurs vues (stations vides, vélos en
  panne, locations du jour). Chaque vue affiche l'heure de la dernière mise à jour (DoD). La
  table des locations dépend d'un accès à demander à la DSI.

## Pistes pas encore utilisées

Autres utilisateurs possibles : <aucun noté>.
