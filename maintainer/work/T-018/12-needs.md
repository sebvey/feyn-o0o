# Concept 12 : besoins de plan, de fil rouge et de glossaire

Relevé du rédacteur, 2026-10-22. Le fichier du concept reste cohérent avec l'existant en
attendant l'arbitrage.

## Plan

1. **12a se découpe en deux messages** : l'exposé des cinq cases de la définition, l'exemple
   et sa question ne tiennent pas en 15 lignes avec le second exercice. Proposition pour la
   colonne « Sous-concepts » de `course/plan.md` : « 12a définir un indicateur (règle de
   calcul, grain, période, source, fraîcheur), en deux messages : 12a1 le contenu d'une
   définition, 12a2 ce qui manque et qui le fixe ; 12b … ; 12c … ».

## Fil rouge

Aucun fait nouveau fixé. Situations d'exercice, laissées comme telles dans le fichier :
- la plateforme publie le nombre de vélos signalés par semaine, que Sophie regarde pour fixer
  le nombre de techniciens (prolonge la story de Sophie du concept 5) ;
- Claire reçoit des comptes agrégés par quartier ; la plateforme a besoin des lignes de
  location, sans l'abonné ;
- l'opérateur, qui gère les abonnements de ses 40 000 abonnés, sait à qui correspond un
  identifiant d'abonné (banque 12c, « Prenons toute la table ») : posé comme hypothèse de
  raisonnement ; la source Abonnés du fil rouge ne liste que l'abonnement et la station
  favorite. Si le mainteneur veut ce fait au fil rouge, l'ajouter à la source Abonnés (relevé
  de revue F2) ;
- qui reçoit les signalements par téléphone n'est pas dit (banque 12b) : le fichier ne le fixe
  pas (relevé de revue P2) ;
- la fraîcheur des locations par quartier n'est pas fixée : « à demander à Claire ». Si le
  mainteneur veut la fixer, l'ajouter aux faits fixés ; sinon, rien à faire.

## Glossaire

Termes employés par le concept 12 et absents du glossaire :
- **Grain** (grain) : ce que représente une valeur de l'indicateur, ou une ligne d'une table
  (par station, par quartier) ; terme de la modélisation dimensionnelle (Kimball). Concept 12.
- **Finalité** (purpose) : ce pour quoi des données sont demandées et traitées, dite avant de
  les utiliser (RGPD, art. 5, 1, b). Concept 12.
- **Minimisation** (data minimisation) : ne demander que les données nécessaires à la finalité
  (RGPD, art. 5, 1, c). Concept 12.
- **Dimension de qualité** (data quality dimension) : aspect mesurable de la qualité des
  données (complétude, unicité, fraîcheur…) ; la liste est un choix d'école (six chez DAMA UK).
  Concept 12. Optionnel : la ligne « Qualité des données » en donne déjà la liste.
- **Pseudonymisation** (pseudonymisation) : optionnel ; le fichier dit « un identifiant à la
  place du nom » et peut s'en passer.
