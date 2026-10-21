---
concept: 9
titre: Hors périmètre et dépendances
statut: en cours
date: 2026-10-21
---

# Hors périmètre et dépendances

## L'essentiel
Le **hors périmètre** d'une story liste ce qu'elle ne fait pas alors que quelqu'un pourrait
raisonnablement s'y attendre. Il aligne les attentes avant le sprint : à la revue, personne ne
découvre un « manque » qui avait été convenu. Chaque ligne est une demande plausible, reportée
ou confiée à un autre canal : elle reste à traiter.
<Dépendances : à compléter au sous-concept 9b.>

## Consensus et choix d'école
- **Consensus** : clarifier ce qui est dans la story et ce qui n'y est pas avant de s'engager
  (le refinement du Scrum Guide sert à ça, sans imposer de forme).
- **Choix d'école** : une rubrique « Hors périmètre » écrite dans la story. Le Scrum Guide n'en
  parle pas ; c'est une pratique de rédaction répandue, chaque équipe choisit sa forme.

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

## Dans le TP
<Rempli pendant le TP.>

## Pièges
- Ne rien écrire hors périmètre : le métier comble les silences avec ses attentes, et la revue
  tourne au « c'est un bug ».
- Traiter une demande sortie du hors périmètre comme due au prochain sprint : elle entre au
  backlog et se priorise comme les autres (fiche 11).
- Lister des évidences que personne n'attend : le hors périmètre ne sert que pour les demandes
  plausibles.

## Le test rapide
« Quelqu'un du métier pourrait-il croire que c'est inclus ? » Si oui et que ce n'est pas le
cas, ça va dans le hors périmètre.

## Visuel suggéré
Un cercle « la story » avec ce qu'elle fait dedans ; juste au bord, à l'extérieur, les demandes
plausibles exclues, chacune avec une flèche vers « backlog, à prioriser ».
