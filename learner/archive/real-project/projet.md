# Le projet de sve

## En bref

Projet **data** : ingestion de données, transformations, mise à disposition de « produits » de
données (couche gold) pour des cas d'usage métier. PDSF y sera installé ; le backlog technique est
déjà en place, le backlog métier reste à monter.

## Cas d'usage

1. **Analyse de marge de fabrication** entre plusieurs usines. Seul cas d'usage actuel.
   Formulation produit retenue en session : « Les contrôleurs de gestion savent chaque matin
   quelle usine dégrade sa marge, et pourquoi. »
2. **Qualité de saisie des ordres de fabrication (OF)**, repéré en session comme un second produit
   possible, distinct de l'analyse de marge qu'il sert. Aujourd'hui, le planificateur corrige les
   OF mal renseignés **en fin de mois, en bloc**, après un rapport du contrôleur de gestion :
   c'est lourd, il voudrait le faire au fil de l'eau.

## Utilisateurs

- Aujourd'hui : **contrôleurs de gestion** (un seul cas d'usage).
- À terme : toute personne de l'entreprise qui a besoin d'un dashboard ou d'un outil branché sur
  la donnée.
- Hypothèse : **planificateur** (acteur de la story qualité OF).

## Hypothèses à valider avec le PO

- Le planificateur est bien celui qui corrige les OF (et non un chef d'atelier ou autre).
- « Secteur » : quel découpage (atelier, ligne, usine) détermine les OF qu'un planificateur voit ?
  Proposition de sve (2026-10-21) : l'usine. Suppose un planificateur par usine, à confirmer.
- « OF mal renseigné » : quels champs manquants ou incohérents en font un OF à corriger ?
  (Non défini à ce stade : la story n'est pas testable sans cette définition.) Premières règles
  proposées par sve le 2026-10-21 : date de lancement non renseignée ; gamme absente.
- Fraîcheur attendue pour la qualité OF : « chaque jour » suffit-il ? Avant quelle heure ?
  (sve avait d'abord écrit « temps réel », coûteux et contradictoire avec « 7 derniers jours ».)
  Proposition de sve (2026-10-21) : tous les jours sans exception, à 8h00 heure de Paris. À
  valider : week-ends et fériés utiles ? données arrêtées à quelle heure (minuit, 6h) ?

- Coûts de fabrication (matière, main-d'œuvre, énergie) : tous portés par l'ERP, une seule
  source (dit par sve le 2026-10-21).
- Selon sve, la décomposition des coûts seule (sans la valorisation) n'est pas exploitable par le
  contrôleur. À confirmer avec le PO.

## Vocabulaire du domaine

- **OF** : ordre de fabrication.
- **Couche gold** : données finales prêtes à l'usage métier (moyen technique, pas le produit).
