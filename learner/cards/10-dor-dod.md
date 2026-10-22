---
concept: 10
titre: Definition of Ready / Definition of Done
statut: en cours
date: 2026-10-22
---

# Definition of Ready / Definition of Done

## L'essentiel
La **Definition of Done (DoD)** liste les exigences de qualité que toute story remplit pour être
« terminée ». Elle vaut pour tout l'incrément : écrite une fois, jamais répétée dans chaque
story. Les critères d'acceptation disent ce que fait une story donnée ; la DoD, comment toutes
sont faites.
<Definition of Ready : à compléter au sous-concept 10b.>

## Consensus et choix d'école
- **Consensus** : la DoD est dans le Scrum Guide (engagement de l'incrément). Une story qui ne
  la remplit pas ne va pas en revue et retourne au backlog. Une seule DoD, appliquée à chaque
  item et donc à chaque incrément ; elle évolue (souvent en rétrospective), elle ne change pas
  d'un incrément à l'autre selon le contenu.
- **Choix d'école** : le contenu de la DoD, propre à chaque équipe. En data, souvent : tests de
  qualité des données, documentation des indicateurs, temps de réponse.

## Sur un exemple
Vélos, le responsable d'exploitation suit plusieurs vues (stations vides, vélos en panne,
locations du jour). Classement de sve, 3/3 :
- « Chaque vue affiche l'heure de la dernière mise à jour des données » : **DoD** (toutes les
  vues).
- « La vue des stations presque vides liste les stations sous le seuil fixé par le métier » :
  **critère d'acceptation** (propre à cette story).
- « Les relevés en double sont détectés par un test automatique avant publication » : **DoD**
  (qualité des données, vaut pour toute story qui publie des relevés).

## Pièges
- Recopier la même exigence dans les critères de chaque story : elle va dans la DoD.
- Mettre dans la DoD une règle propre à une seule story : c'est un critère d'acceptation.

## Le test rapide
« Cette exigence vaut-elle pour toutes les stories ? » Oui : DoD. Non : critère d'acceptation.

## Visuel suggéré
Plusieurs cartes de story, chacune avec ses propres critères, posées sur un même socle « DoD »
commun à toutes.
