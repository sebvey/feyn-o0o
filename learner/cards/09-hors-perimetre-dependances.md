---
concept: 9
titre: Hors périmètre et dépendances
statut: validé
date: 2026-10-21
---

# Hors périmètre et dépendances

## L'essentiel
Le **hors périmètre** d'une story liste ce qu'elle ne fait pas alors que quelqu'un pourrait
raisonnablement s'y attendre. Il aligne les attentes avant le sprint : à la revue, personne ne
découvre un « manque » qui avait été convenu. Chaque ligne est une demande plausible, reportée
ou confiée à un autre canal : elle reste à traiter.
Une **dépendance** : une story ne peut pas être livrée, ou n'a pas de sens, avant une autre. On
les réduit (I d'INVEST) ; celles qui restent, on les rend visibles et on ordonne le backlog.
Fusionner deux stories pour supprimer une dépendance est rarement la bonne réponse : on garde la
plus petite story qui a une valeur seule.

## Consensus et choix d'école
- **Consensus** : clarifier ce qui est dans la story et ce qui n'y est pas avant de s'engager
  (le refinement du Scrum Guide sert à ça, sans imposer de forme).
- **Consensus** : réduire les dépendances et rendre visibles celles qui restent.
- **Choix d'école** : une rubrique « Hors périmètre » écrite dans la story. Le Scrum Guide n'en
  parle pas ; c'est une pratique de rédaction répandue, chaque équipe choisit sa forme.
- **Choix d'école** : la façon de noter les dépendances (lien « dépend de » dans l'outil,
  tableau des dépendances de SAFe).

## Sur un exemple
Vélos en libre-service : les abonnés signalent les vélos en panne dans l'appli.
> En tant que technicien de maintenance, je veux voir les vélos signalés en panne, regroupés par
> station, afin de préparer ma tournée de réparation.
> **Hors périmètre** : bloquer le vélo à la location, diagnostiquer la panne, traiter les
> signalements reçus par téléphone.

À la revue, la responsable maintenance : « Un vélo signalé reste louable, c'est un bug ! »
Réponse de sve : c'était hors périmètre de cette story ; on prend un moment ensemble pour écrire
la nouvelle. Complément : le PO montre la ligne écrite (ça désamorce le « bug »), puis met la
story au backlog et la **priorise** face au reste. Ici elle passera sans doute devant (un vélo
en panne louable pose un problème de sécurité), mais c'est une décision du PO.

Dépendances, la collectivité qui finance le service :
> A : En tant que chargée de mission mobilité, je veux voir le nombre de locations par quartier
> sur le mois, afin de justifier la subvention au conseil.
> B : … je veux comparer ce mois au même mois de l'an dernier, afin de montrer l'évolution.

B dépend de A. Fusionner ? Non (réponse de sve) : A a de la valeur seule, la fusion grossit la
story et retarde cette valeur. On ordonne : A avant B.

## Pièges
- Ne rien écrire hors périmètre : le métier comble les silences avec ses attentes, et la revue
  tourne au « c'est un bug ».
- Traiter une demande sortie du hors périmètre comme due au prochain sprint : elle entre au
  backlog et se priorise comme les autres (fiche 11).
- Fusionner deux stories pour « supprimer » une dépendance saine : on perd une livraison.
- Accepter deux stories dont aucune n'a de valeur seule : c'est un découpage horizontal
  (fiche 08), on redécoupe.
- Lister des évidences que personne n'attend : le hors périmètre ne sert que pour les demandes
  plausibles.

## Le test rapide
« Quelqu'un du métier pourrait-il croire que c'est inclus ? » Si oui et que ce n'est pas le
cas, ça va dans le hors périmètre.
« Chacune des deux stories a-t-elle une valeur seule ? » Si oui, ordonner ; sinon, redécouper.

## Visuel suggéré
Un cercle « la story » avec ce qu'elle fait dedans ; juste au bord, à l'extérieur, les demandes
plausibles exclues, chacune avec une flèche vers « backlog, à prioriser ».
