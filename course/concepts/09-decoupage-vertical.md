---
concept: 9
titre: Découpage en tranches verticales
---

# Découpage en tranches verticales

> Contenu migré tel quel depuis les fiches de sve (T-017), à réécrire pour le public cible
> selon `course/templates/concept.md` (T-018).

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
simple avant complexe (heuristique avant modèle), qualité de service différée (5 minutes avant
temps réel).

## Pièges
- Confondre tranche et story : une tranche verticale du backlog de sprint est une story, mais le
  principe vaut à tous les niveaux (un epic se découpe en features verticales). Les tâches, dans
  une story, sont horizontales (une par couche) : c'est normal.
- La tranche qui traverse toutes les couches mais n'a pas de valeur seule (ex. « afficher le
  nombre de lignes ingérées »).
- Croire qu'une story qui ne nomme pas l'écran n'a pas de couche restitution : la tranche livre
  quand même quelque chose de visible, seule sa forme est laissée à l'équipe.
- Un mot flou dans la première tranche (« presque vide ») : c'est une règle métier à fixer
  (seuil), voir le concept 8.

## Le test rapide
« Si on s'arrête après cette tranche, l'utilisateur s'en sert-il demain matin ? »

## Visuel suggéré
Le gâteau en couches vu de face : une tranche horizontale grisée (une couche, barrée « inutile
seule ») et une part verticale colorée qui traverse toutes les couches, légendée « utile seule ».

## Banque d'exemples

### Schéma : le gâteau en couches (9a)
- **Situation** : schéma inline, quatre couches empilées (ingestion, transformation, données
  prêtes, restitution). Une couche entière = tranche horizontale (« rien d'utilisable seul ») ;
  des parts verticales = tranches verticales (« un peu de chaque couche, utilisable seule »).
- **Ce qui marche** : partir de l'origine des mots (pourquoi « horizontal », pourquoi
  « vertical ») avant le schéma. Légender les parts « tranche 1, 2, 3 », pas « story », et dire
  à part qu'au niveau du sprint une tranche est une story.

### Redécouper « quelles stations vont se vider ? » (9a)
- **Situation** : Malik, le régulateur, veut savoir quelles stations vont se vider pour y
  apporter des vélos. L'équipe propose : 1. ingérer les relevés dans l'entrepôt, 2. entraîner le
  modèle de prévision, 3. afficher la carte des stations à risque.
- **Question** : redécoupe en 2 ou 3 tranches verticales. Laquelle livres-tu en premier pour
  que le régulateur s'en serve dès le lendemain ?
- **Réponse attendue** : d'abord l'état actuel des stations vides ou presque vides (sans
  modèle, ingestion faite fine), ensuite la prévision. La tranche livre une restitution, seule
  sa forme (carte, liste) est laissée à l'équipe. « Presque vide » est une règle métier à fixer
  (seuil).

### Tranche = story ? Et les tâches ? (aparté, 9a)
- **Explication** : « tranche » est une façon de découper, pas un niveau. Epic -> features et
  feature -> stories : verticales ; story -> tâches : horizontales, et c'est normal.
- **Question** : l'équipe découpe la story « voir les stations sous le seuil » en « ingérer
  l'état courant », « calculer qui est sous le seuil », « afficher le résultat ». Faute de
  découpage ?
- **Réponse attendue** : non, ce sont des tâches, découpage technique normal ; elles vivent
  dans le Sprint Backlog (propriété des Developers). Le PO valide la story sur ses critères, pas
  les tâches.

### Patrons de découpage (9b)
- **Explication** : patrons : périmètre de données, règle, simple avant complexe, qualité de
  service différée (SPIDR, Richard Lawrence : choix d'école).
- **Situation** : story trop grosse « prévoir les stations à risque », découpage de l'équipe :
  a) prévision centre-ville seulement, b) collecte des données météo, c) prévision à 1 h par la
  tendance de la dernière heure.
- **Question** : laquelle n'est pas verticale ? (Puis, dans un second message : quel patron
  pour les deux autres ?)
- **Réponse attendue** : b) est une couche (une source seule) ; version verticale :
  « prévision ajustée quand il pleut ». a) périmètre, c) simple avant complexe.
- **Ce qui marche** : une question par message. Faire préciser une réponse elliptique avant de
  la corriger.
