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

## Pistes pas encore utilisées

Autres utilisateurs possibles : responsable d'exploitation, abonné (application), collectivité
qui finance le service.
