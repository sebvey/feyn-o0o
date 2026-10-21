---
concept: 8
titre: Découpage en tranches verticales
statut: validé
date: 2026-10-21
---

# Découpage en tranches verticales

## L'essentiel
Le produit est un gâteau en couches (données, traitement, restitution). Une tranche
**horizontale** est une couche entière (« ingérer toutes les données ») : elle ne sert à personne
tant que les autres couches manquent. Une tranche **verticale** est une part du gâteau : elle
traverse toutes les couches, mais en fin. Elle doit aussi servir **seule** à l'utilisateur : être
vertical par les couches ne suffit pas, il faut l'être par la valeur.

## Consensus et choix d'école
- **Consensus** : découper par valeur livrable plutôt que par composant technique (le V d'INVEST,
  l'incrément utilisable du Scrum Guide).
- **Choix d'école** : les catalogues de patrons de découpage (Richard Lawrence, « Humanizing
  Work » ; SPIDR de Mike Cohn) ; la métaphore elle-même (gâteau, « walking skeleton »).

## Sur un exemple
Vélos en libre-service : le régulateur veut savoir quelles stations vont se vider pour y apporter
des vélos. Découpage fautif de l'équipe : 1. ingérer les relevés, 2. entraîner le modèle,
3. afficher la carte. Trois couches, rien d'utile avant la fin.
Découpage de sve : d'abord l'**état actuel** des stations vides ou presque vides (pas de modèle,
utile dès le lendemain), ensuite la **prévision** des stations à risque. La story ne dit pas
« carte » ni « liste » : la forme est une solution, l'équipe la choisit.

Story trop grosse, « prévoir les stations à risque » : découpée par **périmètre** (centre-ville
seulement) et par **simple avant complexe** (tendance de la dernière heure avant un modèle). La
collecte météo seule est une couche ; elle devient verticale raccrochée à un usage (« prévision
ajustée quand il pleut »).

**Patrons de découpage** (choix d'école : SPIDR de Mike Cohn, patrons de Richard Lawrence) :
périmètre de données (un quartier, une source), règle (seuil fixe avant seuil par station),
simple avant complexe (heuristique avant modèle), qualité de service différée (15 minutes avant
temps réel).

## Dans le TP
<Rempli pendant le TP.>

## Pièges
- Confondre tranche et story : une tranche verticale du backlog de sprint est une story, mais le
  principe vaut à tous les niveaux (un epic se découpe en features verticales). Les tâches, dans
  une story, sont horizontales (une par couche) : c'est normal.
- La tranche qui traverse toutes les couches mais n'a pas de valeur seule (ex. « afficher le
  nombre de lignes ingérées »).
- Croire qu'une story qui ne nomme pas l'écran n'a pas de couche restitution : la tranche livre
  quand même quelque chose de visible, seule sa forme est laissée à l'équipe.
- Un mot flou dans la première tranche (« presque vide ») : c'est une règle métier à fixer
  (seuil), voir la fiche 07.

## Le test rapide
« Si on s'arrête après cette tranche, l'utilisateur s'en sert-il demain matin ? »

## Visuel suggéré
Le gâteau en couches vu de face : une tranche horizontale grisée (une couche, barrée « inutile
seule ») et une part verticale colorée qui traverse toutes les couches, légendée « utile seule ».
