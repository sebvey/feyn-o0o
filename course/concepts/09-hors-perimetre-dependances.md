---
concept: 9
titre: Hors périmètre et dépendances
---

# Hors périmètre et dépendances

> Contenu migré tel quel depuis les fiches de sve (T-017), à réécrire pour le public cible
> selon `course/templates/concept.md` (T-018).

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
  backlog et se priorise comme les autres (concept 11).
- Fusionner deux stories pour « supprimer » une dépendance saine : on perd une livraison.
- Accepter deux stories dont aucune n'a de valeur seule : c'est un découpage horizontal
  (concept 8), on redécoupe.
- Lister des évidences que personne n'attend : le hors périmètre ne sert que pour les demandes
  plausibles.

## Le test rapide
« Quelqu'un du métier pourrait-il croire que c'est inclus ? » Si oui et que ce n'est pas le
cas, ça va dans le hors périmètre.
« Chacune des deux stories a-t-elle une valeur seule ? » Si oui, ordonner ; sinon, redécouper.

## Visuel suggéré
Un cercle « la story » avec ce qu'elle fait dedans ; juste au bord, à l'extérieur, les demandes
plausibles exclues, chacune avec une flèche vers « backlog, à prioriser ».

## Banque d'exemples

### Hors périmètre d'une story de maintenance (9a)
- **Explication** : le hors périmètre dit ce que la story ne fait pas alors qu'on pourrait
  raisonnablement l'attendre ; il aligne les attentes avant le sprint. Pratique courante de
  rédaction, absente du Scrum Guide.
- **Situation** : les abonnés signalent des vélos en panne dans l'appli.
  > En tant que technicien de maintenance, je veux voir les vélos signalés en panne, regroupés
  > par station, afin de préparer ma tournée de réparation.
  > Hors périmètre : bloquer le vélo à la location ; diagnostiquer la panne ; les signalements
  > reçus par téléphone.
- **Question** : à la revue de sprint, Sophie, la responsable maintenance, s'agace : « Un vélo
  signalé reste louable, c'est un bug ! » Que réponds-tu en tant que PO, et que devient sa
  demande ?
- **Réponse attendue** : ce n'est pas un défaut, c'était convenu hors périmètre (le PO montre la
  ligne) ; la demande est légitime, le PO l'ajoute au backlog comme nouvelle story et la
  priorise (elle peut passer devant le reste, mais c'est une décision, pas un dû).
- **Erreur fréquente** : supposer que la demande se traite aussitôt. Lien vers le concept 11.

### Dépendance : fusionner deux stories de la collectivité ? (9b)
- **Explication** : une story dépend d'une autre quand elle ne peut pas être livrée, ou n'a pas
  de sens, avant elle. Le I d'INVEST demande de les réduire ; certaines sont naturelles : on les
  rend visibles et on ordonne le backlog. Consensus : réduire et rendre visible. Choix d'école :
  la façon de les noter (lien « dépend de » dans l'outil, tableau des dépendances de SAFe).
- **Situation** : Claire, chargée de mission mobilité de la collectivité.
  - A : « En tant que chargée de mission mobilité, je veux voir le nombre de locations par
    quartier sur le mois, afin de justifier la subvention au conseil. »
  - B : « … je veux comparer ce mois au même mois de l'an dernier, afin de montrer
    l'évolution. »
  B dépend de A ; A a de la valeur seule, B l'enrichit.
- **Question** : un développeur propose de fusionner A et B en une seule story « pour supprimer
  la dépendance ». Bonne idée ou pas, et pourquoi ?
- **Réponse attendue** : plutôt non. La fusion grossit la story (S) et retarde la valeur de A.
  La dépendance A puis B est saine : on ordonne (A avant B). Une dépendance pose problème quand
  aucune des deux stories n'a de valeur seule (découpage horizontal, concept 8) : là, on
  redécoupe. Fusionner se défend si les deux sont minuscules.
- **Ce qui marche** : demander « et alors, on fait quoi ? » si la réponse s'arrête au « non ».
