# Journal des versions du cours

Le cours porte un numéro `MAJOR.MINOR.PATCH`. Chaque version publiée a un tag git
`course-vMAJOR.MINOR.PATCH`. Le site public du cours s'aligne sur une version et affiche
laquelle ; son MAJOR est celui du cours.

## Ce que chaque numéro signifie

Les **identifiants du cours** sont : le numéro de chaque concept et annexe (0 à 17, A1, A2), le
numéro de chaque sous-concept (0a1, 9b2, A2c…), le nom des fichiers de `course/concepts/`,
`course/sources/` et `course/domains/`, et les sept domaines de `course/plan.md` (leur numéro
et leurs concepts).
Le suivi de l'apprenant (`learner/parcours.md`) et les adresses du site (`/concepts/09#9a1`)
s'appuient dessus.

- **MAJOR** : un changement qui casse un identifiant. Exemples : renuméroter un concept, en
  insérer un entre deux autres, en retirer un, renommer ou déplacer un sous-concept, changer
  les concepts d'un domaine.
- **MINOR** : un changement de fond qui ne casse aucun identifiant. Exemples : une précision,
  une nouvelle source, un nouvel exemple, un sous-concept ajouté en fin de concept, la
  correction d'une affirmation.
- **PATCH** : une correction de forme qui ne change pas le sens (faute, mise en page, lien).

Un changement se range dans la plus haute catégorie qu'il touche.

Une version publiée prend la plus haute catégorie de ses entrées. Un MAJOR remet MINOR et PATCH
à 0, un MINOR remet PATCH à 0.

## Non publié

Les changements du cours en attente de publication s'inscrivent ici, une ligne par changement :
`- CATÉGORIE, concept ou fichier : ce qui change`. Le mainteneur décide de publier : la section
devient `## X.Y.Z, date`, le tag est posé, et une nouvelle section « Non publié » vide s'ouvre.

## 2.4.0, 2026-10-26

- MINOR, concept 12 : 12a1, la situation donne le propriétaire des relevés (système des bornes, via la DSI) ; la réponse attendue juge la source à moitié juste sans lui, et le corrigé le cite
- PATCH, concept 3 : 3b, l'élément « streaming » ne renvoie plus au concept 1 pour sa création
- PATCH, concept 7 : 7a1 (rechange), « des stories plus petites s'estiment mieux » passe en nuance
- PATCH, concept 10 : 10b2, « escalade » dit en passant, et Scarlette dite aussi Scrum Master de l'équipe appli

## 2.3.1, 2026-10-26

- PATCH, sources des concepts 7 et 8 : la règle non fixée que le PO fait fixer renvoie à 7a2, plus au concept 4
- PATCH, sources du concept 13 : Odile dite directrice des opérations, comme dans la fiche du concept

## 2.3.0, 2026-10-26

- MINOR, concept 7 : I d'INVEST couvre aussi le travail d'une autre équipe dont la story a besoin (choix du cours, chez Wake I ne vise que les autres stories), dans L'essentiel, 7a1 et « Consensus et choix d'école »
- PATCH, concept 2 : 2b, l'argument de l'ordre du backlog devient une nuance avec renvoi au concept 3
- PATCH, concept 5 : 5a, l'exemple de Régis va en 5a1, celui d'Abba en 5a2
- PATCH, concept 9 : 9a2, le Sprint Planning renvoie au concept 0 (détail en 15b)
- PATCH, concepts 13 et 14 : « pas de vote (1b) » devient « une seule personne, pas un comité (0a1, 1b) »
- PATCH, concepts 2, 4 et 5 : formulations qui supposaient une notion pas encore reçue (« hypothèse », « état » d'un élément) dites sans elle
- PATCH, annexe A1 : A1a renvoie à 4a1 pour les stories qui entrent dans les sprints ; l'explication de A1c dit qui propose, choisit et règle les états

## 2.2.1, 2026-10-26

- PATCH, concepts 0, 4, 6, 7, 8, 9, 11, 13, 14, 17 et A2 : les consignes qui faisaient montrer un schéma par le prof, hors des sections « Schéma », sont retirées ou dites en mots (une image décrite) ; le moment du schéma de 13b passe dans sa section « Schéma » ; modèle de concept : « Ce qui marche » ne cite plus le schéma

## 2.2.0, 2026-10-26

- MINOR, concept 0 : la question de contrôle devient une question de niveau, qui ne fait plus sauter de sous-concept ; plan aligné
- MINOR, concept 0 : 0a1 en quatre messages (l'équipe en bref, le PO, les Developers, le Scrum Master), chacun avec son exemple et sa question ; sources ajoutées
- MINOR, concept 0 : 0a2 en cinq messages (le sprint en bref, Sprint Planning, Daily Scrum, revue de sprint, rétrospective) ; le récit de Diego devient un cas de creusage ; sources ajoutées
- MINOR, templates/learner : statut `sauté` d'un concept
- MINOR, concept 1 : la question de « Qui choisit le travail du sprint ? » (1b) porte sur la quantité, pour ne pas refaire le Sprint Planning de 0a2
- MINOR, concepts 0 à 17, annexes A1 et A2 : chaque cas ne demande plus que ce que l'apprenant a reçu à ce point du cours (50 corrections : explications et situations complétées, réponses attendues allégées en nuances, renvois corrigés)
- MINOR, concept 0 : la question de niveau se pose en deux temps, chaque partie corrigée en une ligne
- PATCH, concept 0 : « élément du backlog », « objectif produit », « objectif de sprint » et « événements » définis au passage à leur première mention en 0a1, la DoD dans la correction de la question de niveau (glossaire : élément du backlog en 0, 3) ; « Une semaine pour souffler » (0a2) : la rétrospective comme lieu du rythme de travail devient une nuance de la correction ; « Le sprint est livré » (0b) formule le test rapide au lieu de le nommer ; le récit de Diego (0a2, creusage) dit que Scarlette est aussi la Scrum Master de l'équipe appli
- MINOR, modèle de concept : une question qui teste plusieurs points s'écrit « en deux parties », réponse attendue et erreurs fréquentes réparties
- MINOR, concepts 0, 3, 4, 7, 10, 12, 13, 14, 15, 16 et 17 : 18 questions de la banque qui testaient plusieurs points passent au format en parties ; deux se réduisent à une question (0b « La vue des stations vides livrée un mercredi », 14c « Pia refuse le canal d'Abba »), la partie retirée devenant une nuance de la correction
- PATCH, concept 3 : « Maud passe par Diego » (3a2) demande la liste des vélos signalés pour la DSI, qui bloque elle-même la location, comme le dit le fil rouge
- MINOR, templates/learner : le tableau de `parcours.md` ne liste que les concepts au statut changé (absent : à faire) ; « Prochaine étape » d'un nouvel apprenant écrite dans le modèle
- PATCH, map.md : carte du cours (public cible, domaines, concepts, prérequis, chemins) générée depuis `plan.md` et `domains/`, sans contenu nouveau
- MINOR, concept 0 : 0b enseigne qu'un élément hors DoD n'est ni livré ni présenté à la revue et retourne au backlog ; « Le sprint est livré » devient un cas d'exercice ou de creusage
- MINOR, concepts 11, 14 et A1 : 11b, le blocage par la DSI (justifier chaque colonne) passe en nuance de la correction ; 14a, l'explication dit que l'équipe Scrum n'est pas partie prenante ; A1a, l'explication dit qui propose, choisit et règle ; A1c, la définition d'un indicateur et la vie d'une story glosées
- PATCH, concepts 8, 13, 14, 15, 16 et 17 : renvois corrigés (règle non fixée en 7a2, dépendance envers la DSI en 10b et 13, walking skeleton au cas de rechange de 9a1), Sprint Planning, revue de sprint et partie prenante rangés en déjà enseignés (0a2, 1b), versions retirées de la réponse de 16a
- MINOR, concepts 1, 2, 3, 4, 6, 9, 11, 12, 14, 16, 17 et A1 : seconde passe de `course-taught-check` (13 constats mineurs) : rôles et faits donnés dans les situations (3a1, 6b, 17a), termes glosés ou évités avant leur concept (fraîcheur, mesure de résultat, « je veux », tranche de version), renvois corrigés (forme comme solution en 7b, Sprint Planning en 0a2), limite de la source « écrite et montrée » dans l'explication de 12b, points d'entrée de A1a et A1c bornés
- MINOR, concepts 0, 2, 3, 4, 9, 10, 12, 15 et 17 : troisième lot de constats mineurs (12) : renvois vers l'avant en « détaillé en », termes glosés au passage (indicateur, fraîcheur, exploration bornée), relance de 4b rechange sans la règle non fixée, parties prenantes, refinement et concepts 15 et 16 rangés en déjà enseignés (10, 17), renvois corrigés (8a1, 0b)
- PATCH, concept 3 : l'Explication de « Tout détailler d'avance ? » (3a2) garde « prêt à être choisi » dans le Scrum Guide 2020 ; seule la phrase sur le bas vague a disparu
- PATCH, concept 6 : « Le trait qu'Anna veut ajouter » (6b) porte sa consigne de rechange dans un champ Usage, hors de l'Explication
- PATCH, concepts 8 et 9 : la DoR, nommée avant le concept 11 (8a, 8a2, 9a2), est définie en passant ; en 8a1, la règle de la station favorite se justifie sans un fait de l'appli que l'apprenant n'a pas reçu
- MINOR, concept 0 : la question de niveau est retirée ; l'annonce du parti pris ouvre 0a1 (l'équipe en bref), et ce que l'apprenant a dit de Scrum à l'accueil y est rappelé ; « ticket » passe dans les erreurs fréquentes de « Diego écrit des éléments du backlog » ; « Qui est le chef de l'équipe vélos ? » définit en passant le backlog et l'incrément, et sa correction ne parle plus de l'ordre, enseigné au message suivant ; plan et sources alignés

## 2.1.0, 2026-10-25

- MINOR, domaines : une fiche de présentation par domaine dans `course/domains/` (le problème du PO, le fil des concepts, d'où l'on vient et où l'on va, un cas du fil rouge), selon le nouveau modèle `templates/domain.md` ; renvoi depuis le plan
- PATCH, templates/sources : le type « marketing » est défini par ce qu'il vaut (la source vend aussi ce dont elle parle ; fiable pour décrire son offre, ce qu'elle recommande est à prendre avec recul), sans changer de nom ni de règle
- PATCH, fil rouge : la section « L'entreprise » devient « L'opérateur » et « La collectivité », sans fait nouveau (la collectivité était déjà extérieure à l'opérateur) ; renvoi de sources/14-parties-prenantes mis à jour

## 2.0.0, 2026-10-25

- MAJOR, plan : les sept objectifs du cours, qui se recouvraient et laissaient le concept 3 sans objectif, sont remplacés par sept domaines contigus qui partitionnent les concepts (0 à 2, 3 à 8, 9 à 11, 12, 13 et 14, 15 et 16, 17)
- MINOR, concepts 0 à 2 : reprise de ce que les pages du site portaient seules (équipe vélos en 0a1, sprints plus courts en 0a2, durées de vie des engagements en 0a3, valeur et exemple d'Étienne en 1a, fournisseur de données en 1b, exemple de Maud en 2a, objectif sans cible chiffrée en 2b) ; fiches de sources alignées
- MINOR, concepts 4 à 7 : exemples du fil rouge repris des pages du site (journée d'Étienne, Régis, Abba, Étienne et la vue des stations vides, régulateur sur un petit écran), libellés du schéma du concept 4 fixés (cas inventé), mots flous et gloses du V d'INVEST ajoutés ; fiches de sources alignées
- MINOR, concepts 8, 10, 11, 12 : reprises du site (cas inventés dans 8a2 et les Pièges de 10, 11, 12 ; conditions typiques d'une DoR selon Cohn avec sa source ; précisions sur le Scrum Guide, la finalité des données et les limites de la source)
- MINOR, concepts 13 à 17, A1, A2 : reprises du site (objectif produit et DoR en 13a ; météo comme fournisseur externe et dire non en 14 ; mots non fixés en 15a1 ; journée type et limite de la carte en 16a ; ranger une supposition en 17a, exemple du SMS en cas inventé ; rappel du cas d'Abba en A1b ; exemple du Kanban Guide en A2d)
- MINOR, concept 3 : « retirer n'est pas définitif » attribué au cours (et non à Cohn et Rubin, qui attestent seulement le retrait) ; fiches de concept et de sources alignées
- PATCH, concepts 12 et 13 : « relevé en double » à la place de « doublon » (fiches de concept 12 et 13, fiche de sources 12)
- PATCH, sources/04-hierarchie : l'entrée « Non vérifié » sur « quelques jours » est rétablie (la ligne « Une story tient dans un sprint » y renvoyait)
- PATCH, sources/14-parties-prenantes : les cinq catégories de parties prenantes, choix du cours sans source (S2 ne fonde que la définition de Freeman)
- PATCH, sources/17-hypotheses-exploration : découverte continue de Torres, « chaque semaine » comme la fiche de concept, et non « au moins hebdomadaires » (S9 dit « weekly »)
- PATCH, sources/13-ordonner-backlog : référence S15 (Bellinson) retirée, plus citée par aucune ligne

## 1.0.0, 2026-10-24

Première version étiquetée : 18 concepts (0 à 17) et 2 annexes (A1, A2), leurs fiches de
sources, le fil rouge, le glossaire et le plan. Elle inclut la règle selon laquelle le texte qui
explique n'utilise pas le cas de l'exercice qui suit (ADR-037) et la resynchronisation des
fiches de sources avec les fiches de concept (T-051).
