# ADR-048 : Chaque domaine a sa fiche de présentation, et le rattachement des concepts reste dans le plan seul

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-071a

## Contexte
Discussion du 2026-10-25 avec le mainteneur (T-071) : le site fait commencer par le concept 0 et
passe de concept en concept sans présenter les domaines. À la source, le cours ne donnait d'un
domaine qu'un nom, ses concepts et une phrase « à la fin, l'apprenant sait » (ADR-039) : le site,
projection du cours, n'avait aucun fond pour présenter un domaine.

## Décision
- Une fiche par domaine dans `course/domains/N-slug.md`, selon `course/templates/domain.md` : le
  problème du PO, le fil des concepts, d'où l'on vient et où l'on va, un cas du fil rouge. Elle
  n'avance rien qui ne soit dans une fiche de concept : pas de fichier de sources. Le cas
  n'emploie ni la situation ni le verdict d'une Question de banque (règle d'ADR-037).
- Le titre, les concepts et le « on sait faire » d'un domaine restent dans `course/plan.md` seul ;
  le nom des fiches de domaine compte parmi les identifiants du cours (`course/CHANGELOG.md`).

## Options écartées
- Le domaine en en-tête de chaque fiche de concept : une copie de plus du rattachement, que le
  prof n'utilise pas (il lit le plan), et qui dériverait quand un concept change de domaine. Un
  contrôle de cohérence au build l'aurait tenue ; le mainteneur n'y tient pas.
- Ranger les fiches de concept dans un dossier par domaine : casse les chemins dont dépendent
  `course/sources/`, le renvoi du prof, `learner/parcours.md` et le build du site ; changer un
  concept de domaine deviendrait un déplacement de fichiers ; les annexes n'auraient pas de place.
- Enrichir la seule page Domaines du site sans fiche dans le cours : le site ne fixe pas le fond.

## Conséquences
Changer les concepts d'un domaine oblige à réécrire sa fiche et celles de ses voisins
(transitions). Le prof ne lit pas encore les fiches de domaine : T-071c en décide.
