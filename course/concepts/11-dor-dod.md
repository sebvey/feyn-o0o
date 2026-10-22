---
concept: 11
titre: Definition of Ready / Definition of Done
---

# Definition of Ready / Definition of Done

> Contenu migré tel quel depuis les fiches de sve (T-017), à réécrire pour le public cible
> selon `course/templates/concept.md` (T-018).

## L'essentiel
La **Definition of Done (DoD)** liste les exigences de qualité que toute story remplit pour être
« terminée ». Elle vaut pour tout l'incrément : écrite une fois, jamais répétée dans chaque
story. Les critères d'acceptation disent ce que fait une story donnée ; la DoD, comment toutes
sont faites.
La **Definition of Ready (DoR)** liste les conditions qu'une story remplit avant d'entrer dans
un sprint : la DoD dit quand une story est terminée, la DoR quand elle peut commencer. Le Scrum
Guide n'impose pas de DoR (choix d'école) ; trop stricte, elle devient un mini cahier des
charges. En data, l'accès aux données y figure souvent.

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

## Banque d'exemples

### DoD ou critère d'acceptation ? (11a)
- **Explication** : la DoD liste les exigences de qualité que toute story remplit pour être
  « terminée » ; une seule DoD, pour toute story, jamais répétée dans chaque story. Consensus :
  la DoD est dans le Scrum Guide (engagement de l'incrément) ; une story qui ne la remplit pas ne
  va pas en revue et retourne au backlog. Choix d'école : son contenu (en data, souvent tests de
  qualité des données, documentation des indicateurs, temps de réponse).
- **Situation** : Bruno, le responsable d'exploitation, suit plusieurs vues (stations vides,
  vélos en panne, locations du jour).
- **Question** : DoD ou critère d'acceptation de la story ?
  1. Chaque vue affiche l'heure de la dernière mise à jour des données.
  2. La vue des stations presque vides liste les stations sous le seuil fixé par le métier.
  3. Les relevés en double sont détectés par un test automatique avant publication.
- **Réponse attendue** : 1 DoD (commune à toutes les vues), 2 critère (propre à cette story),
  3 DoD (qualité des données, vaut pour toute story qui publie des relevés). Test : « vaut pour
  toutes les stories ? ».
- **Ce qui marche** : dire d'emblée « une seule DoD, pour toute story » plutôt que « vaut pour
  l'incrément » (formulation imprécise, relevée par un apprenant).

### La DoD évolue (aparté, 11a)
- **Explication** : la DoD évolue dans le temps (souvent en rétrospective), pas selon le
  contenu. Exemple : en rétro, l'équipe vélos ajoute « chaque indicateur est documenté » après
  une confusion sur ce qu'est une « location ».

### Story pas prête : accès aux données non obtenu (11b)
- **Explication** : la DoR liste les conditions qu'une story doit remplir avant d'entrer dans un
  sprint. La DoD dit quand une story est terminée, la DoR dit quand elle peut commencer.
  Consensus : le Scrum Guide demande des items assez clairs pour être choisis au planning du
  sprint (c'est le rôle du refinement), mais il n'impose aucune DoR. Choix d'école : écrire une
  DoR ; risque : une DoR trop stricte devient une barrière (mini cahier des charges à valider
  avant chaque sprint). Sur un projet data, l'accès aux données y figure souvent.
- **Situation** : la DoR de l'équipe vélos exige des critères d'acceptation écrits, des règles
  métier fixées, des dépendances identifiées et un accès aux données obtenu. La story de Bruno,
  « voir les locations du jour par station », remplit tout sauf un point : l'accès à la table
  des locations, demandé à la DSI, n'est pas encore donné. Un développeur propose : « Prenons-la
  quand même, on aura sûrement l'accès mercredi. »
- **Question** : la story est-elle prête ? Que proposes-tu au planning du sprint ?
- **Réponse attendue** : non, elle ne remplit pas la DoR. Proposer une story prête à la place,
  et faire avancer l'accès (relance de la DSI) pour le sprint suivant. La DoR n'est pas un mur :
  l'équipe peut la prendre en connaissance du risque si l'accès est quasi certain, mais c'est un
  choix explicite, pas un « sûrement ».
