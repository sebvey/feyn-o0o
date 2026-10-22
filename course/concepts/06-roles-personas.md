---
concept: 6
titre: Rôles et personas
---

# Rôles et personas

## Objectif
Choisir l'acteur d'une story : le rôle qui fait l'action du « je veux » et y gagne lui-même ce
que dit le « afin de », pas celui qui construit ni celui qui en parle ; le vérifier auprès des
utilisateurs ; savoir ce qu'un persona apporte, et qu'il reste un choix d'école.

## L'essentiel
Un **rôle** est une catégorie d'utilisateurs aux besoins communs (technicien de maintenance,
abonné). L'acteur d'une story, désigné par son rôle, **agit et y gagne** : il fait ce que dit le
« je veux » et reconnaît son propre gain dans le « afin de ». Un mauvais acteur donne une
mauvaise raison, donc un mauvais ordre. Le PO ne devine pas l'acteur : il le vérifie auprès des
utilisateurs. Un **persona** est un portrait fictif d'un rôle (prénom, objectifs, comportements),
construit à partir d'utilisateurs réels : il aide à se représenter le rôle, sans le remplacer.

## Consensus et choix d'école
- **Consensus** (Scrum Guide 2020) : le Scrum Guide ne parle ni de rôle, ni de persona, ni
  d'acteur ; il dit seulement qu'un produit a des utilisateurs ou des clients bien définis. Rien
  de ce concept n'est donc du consensus Scrum.
- **Recommandation de Mike Cohn** (d'après le « usage-centered design » de Constantine et
  Lockwood ; répandue, mais ni Scrum Guide ni consensus démontré : le prof l'attribue à Cohn,
  sans l'appeler consensus) : écrire les stories pour plusieurs rôles précis, car supposer un seul type
  d'utilisateur fait manquer des stories. Cohn admet que « utilisateur » suffit quand tous ont
  besoin du même comportement pour la même raison ; il conseille un rôle plus précis quand il
  change la conversation (règles, données, moment, droits ou résultat différents).
- **Heuristique du cours** : « l'acteur agit et y gagne ». Quand deux formulations se valent,
  Cohn prend pour acteur celui qui lance l'action, et sa story nomme celui qui en profite ; il écrit pourtant parfois une story pour un rôle
  qui y gagne sans agir. À présenter comme une règle pratique, pas comme une règle sans
  exception.
- **Choix d'école** : les personas, d'Alan Cooper, venus du design d'interaction. Pas
  obligatoires ; discutés entre praticiens (on leur reproche des preuves surtout anecdotiques et
  un risque de stéréotype).
- **Choix du cours** (sans source externe, à présenter comme tels) : le PO vérifie l'acteur
  auprès des utilisateurs ; la story garde le rôle (« en tant qu'abonné ») même quand l'équipe a
  un persona, qui sert à la conversation et aux exemples.

## Sous-concepts
1. **6a l'acteur de la story** : un rôle, pas un prénom ni « utilisateur » par défaut. Test :
   celui qui fait l'action du « je veux » est-il celui qui gagne le « afin de » ? Deux pièges :
   l'acteur technique (celui qui construit, annoncé au concept 5) et la valeur d'un autre rôle
   dans le « afin de ». Le PO vérifie l'acteur auprès des utilisateurs.
   Un message, avec « Hugo ou Sophie ? ». Rechange : « Yanis, acteur de sa story ? » (acteur
   technique), ou « Une vue, deux acteurs » si l'apprenant a déjà le test et qu'il faut le pousser
   sur la vérification.
2. **6b le persona (choix d'école)** : court. Un portrait fictif d'un rôle, construit à partir
   d'utilisateurs réels ; Julie, persona des abonnés sans l'appli. Il ne remplace ni le rôle
   dans la story, ni les entretiens. Un message, avec « Julie, on lui fait dire ce qu'on veut ? »
   (« Le trait que Nora veut ajouter » après une réponse fausse ; « En tant que Julie ? » en
   rechange).

## Banque d'exemples

Les brouillons de stories à corriger sont inventés pour l'exercice : ils ne deviennent pas des
faits du fil rouge. Le concept ne réenseigne pas ce qui est acquis : consommateurs de données
utilisateurs (concept 1) ; trois parties, 3C, solution hors du « je veux », chiffre précis hors
de la phrase (concept 5) ; un « je veux » par story (concept 4). Il y renvoie.

### Hugo ou Sophie ? (6a)
- **Explication** : l'acteur d'une story est désigné par son rôle (sa catégorie d'utilisateurs),
  pas par un prénom. Heuristique du cours : il agit et y gagne. Il fait l'action du « je veux »,
  et le « afin de » dit son gain à lui. Le Scrum Guide n'en dit rien ; écrire pour des rôles
  précis est une recommandation de Mike Cohn.
- **Situation** : Hugo, technicien de maintenance, répare les vélos sur le terrain et prépare sa
  tournée de réparation à partir des vélos signalés en panne. Sophie, responsable maintenance,
  encadre les techniciens. Sophie a ajouté ce brouillon au backlog : « En tant que responsable
  maintenance, je veux voir les vélos signalés en panne, afin que mes techniciens préparent leur
  tournée. »
- **Question** : qui est l'acteur ? Réécris le début de la story.
- **Réponse attendue** : le technicien de maintenance. C'est lui qui regarde les vélos signalés
  et prépare sa tournée ; le « afin de » du brouillon dit d'ailleurs le gain des techniciens, pas
  celui de Sophie. Par exemple : « En tant que technicien de maintenance, je veux voir les vélos
  signalés en panne, afin de préparer ma tournée de réparation. » Nuances : Sophie a son propre
  besoin, avec sa propre raison (fixer le nombre de techniciens en tournée, concept 5) : c'est
  une autre story, dont elle est l'acteur. Le rôle, pas « Hugo » : la story vaut pour tous les
  techniciens. Et le PO ne choisit pas l'acteur sur le papier : il vérifie auprès de Hugo que
  c'est bien lui qui prépare sa tournée à partir des signalements. Si l'apprenant change
  l'acteur sans toucher au « afin de », relance : « et le « afin de », que devient-il ? ». S'il
  garde Sophie et veut changer le « afin de », relance : « qui regardera la liste pour préparer
  sa tournée, et qui y gagne ? » ; un « afin de » propre à Sophie ferait une autre story.
- **Erreurs fréquentes** :
  - garder Sophie « parce que c'est elle qui a demandé » : celui qui demande n'est pas toujours
    celui qui agit ; demander « qui fera l'action, et qui y gagne ? » ;
  - écrire « En tant que Hugo » : la story sert un rôle ; Hugo est un technicien parmi d'autres,
    celui à qui le PO pose ses questions ;
  - écrire « En tant qu'utilisateur » : techniciens et responsable n'ont ni la même action ni la
    même raison, le rôle change la conversation.
- **Ce qui marche** : tracer deux flèches, l'une du « je veux » vers celui qui agit, l'autre du
  « afin de » vers celui qui y gagne : si elles n'arrivent pas sur le même rôle, l'acteur est à
  revoir. Si l'apprenant le demande, le prof joue Hugo, d'après le fil rouge : « Je prépare ma
  tournée à partir des vélos signalés ; sur place, je confirme ou j'infirme la panne. »

### Yanis, acteur de sa story ? (6a)
- **Explication** : le concept 5 l'a annoncé : l'acteur est celui qui agit et y gagne, pas
  celui qui construit. Les Developers construisent le produit ; un consommateur de données, lui,
  est un utilisateur (parti pris du cours, concept 1).
- **Situation** : Yanis, data engineer, propose : « En tant que data engineer, je veux une
  table des vélos signalés en panne, mise à jour toutes les 5 minutes, afin d'alimenter la vue de
  maintenance. »
- **Question** : Yanis défend son brouillon : « Je suis bien un utilisateur de la plateforme,
  non ? » Que réponds-tu à Yanis ?
- **Réponse attendue** : ici, Yanis construit, il ne se sert pas du résultat : la table est une
  part de son travail, le « afin de » est une étape technique, et aucun gain de l'utilisateur
  n'apparaît. L'acteur est le technicien de maintenance, qui prépare sa tournée. Nuance : un
  data engineer peut être un utilisateur quand il consomme les données pour son propre besoin
  (concept 1) ; ce n'est pas le cas ici. La table et les 5 minutes relèvent du concept 5
  (solution hors du « je veux », chiffre hors de la phrase) : les signaler, sans s'y attarder.
  Si l'apprenant ne nomme pas l'acteur, relance : « alors, qui est l'acteur de ce besoin ? ».
- **Erreurs fréquentes** :
  - corriger la table et les 5 minutes en gardant « en tant que data engineer » : rappeler que
    la question porte d'abord sur l'acteur ;
  - conclure qu'un data engineer n'est jamais un acteur : un consommateur de données, quel que
    soit son métier, peut être l'acteur, comme l'équipe appli au concept 1 ; ce qui compte,
    c'est qu'il se serve du résultat pour son propre besoin.
- **Ce qui marche** : « si cette story n'est jamais livrée, qui s'en plaint ? » Pas Yanis, mais
  Hugo, qui prépare sa tournée sans la liste.

### Une vue, deux acteurs (6a)
- **Explication** : le PO ne devine pas l'acteur : il le vérifie auprès des utilisateurs. Un
  rôle plus précis vaut la peine quand il change la conversation (Cohn) : une autre raison,
  d'autres données, un autre moment.
- **Situation** : Bruno, responsable d'exploitation, veut suivre l'état du réseau dans plusieurs
  vues, dont les vélos en panne. Hugo prépare sa tournée de réparation à partir des vélos
  signalés en panne. Yanis demande : « Pour la vue des vélos en panne, on met Bruno ou Hugo comme
  acteur ? »
- **Question** : que fais-tu avant d'écrire la story ?
- **Réponse attendue** : ce n'est pas un choix à faire au hasard : les deux rôles n'ont pas la
  même raison (suivre l'état du réseau, préparer une tournée). Il y a sans doute deux besoins,
  donc deux stories, chacune avec son acteur et son « afin de » (un « je veux » par story,
  concept 4). Avant d'écrire, le PO demande à Bruno et à Hugo ce qu'ils feront de l'information
  (quelles données, à quel moment). Une seule story ne conviendrait que s'ils avaient la même
  action pour la même raison (Cohn) : leurs raisons connues le rendent peu probable. Ordonner
  les deux stories viendra au concept 13. Si l'apprenant s'arrête à « je leur demande »,
  relance : « et que réponds-tu à Yanis ? ».
- **Erreurs fréquentes** :
  - choisir l'un des deux « parce qu'il est le plus important » : c'est ordonner, pas choisir
    l'acteur ;
  - écrire « en tant qu'utilisateur » pour couvrir les deux : on perd les deux raisons ;
  - décider seul de ce que chacun en fera : le PO le demande, il ne l'invente pas.
- **Ce qui marche** : écrire les deux « afin de » côte à côte ; s'ils diffèrent, demander « une
  story ou deux ? ».

### Julie, on lui fait dire ce qu'on veut ? (6b)
- **Explication** : un persona est un portrait fictif et réaliste d'un rôle : un prénom, des
  objectifs, des comportements. Choix d'école d'Alan Cooper, venu du design d'interaction, absent du
  Scrum Guide, discuté entre praticiens. Il se construit à partir d'utilisateurs réels
  interrogés ; il aide l'équipe à se représenter le rôle quand elle en parle.
- **Situation** : un tiers des abonnés n'a pas l'appli, seulement un téléphone basique. L'équipe
  parle d'eux à travers Julie, persona des abonnés sans l'appli : elle veut savoir avant de
  partir s'il reste un vélo à sa station. Nora dit : « Julie n'existe pas, donc on peut lui
  prêter les besoins qui nous arrangent. »
- **Question** : que réponds-tu à Nora ?
- **Réponse attendue** : Julie est fictive par son prénom, pas par ses traits : un persona se
  construit à partir d'utilisateurs réels, donc chacun de ses traits doit venir d'abonnés sans
  l'appli (le téléphone basique, par exemple, est celui d'un tiers des abonnés). Lui prêter un
  besoin que personne n'a exprimé, c'est inventer un utilisateur. Un nouveau besoin pour Julie se
  vérifie auprès d'abonnés sans l'appli. Nuance : le persona reste un choix d'école ; une équipe
  peut s'en passer et parler du rôle.
- **Erreurs fréquentes** :
  - « oui, c'est un outil de l'équipe » : le persona aide à penser l'utilisateur, il ne le
    remplace pas ;
  - confondre persona et utilisateur réel : Hugo est un technicien qu'on interroge ; Julie
    doit résumer des abonnés réels.
- **Ce qui marche** : « d'où vient chaque trait de Julie ? » : s'il ne vient d'aucun abonné
  réel, il n'a rien à faire dans le portrait.

### Le trait que Nora veut ajouter (6b)
- **Explication** : rechange après une réponse fausse à « Julie, on lui fait dire ce qu'on
  veut ? ». Le prénom de Julie est inventé, ses traits viennent d'abonnés réels : chaque trait
  doit pouvoir répondre à « d'où vient-il ? ».
- **Situation** : Nora veut ajouter au portrait de Julie : « elle se contente d'une
  disponibilité vieille d'une heure ». Cela arrangerait l'équipe ; aucun abonné ne l'a dit.
- **Question** : que demandes-tu à Nora, et que fais-tu avant d'accepter ce trait ?
- **Réponse attendue** : demander d'où vient ce trait ; le vérifier auprès d'abonnés sans
  l'appli ; sans appui, il n'entre pas dans le portrait. Construire pour ce trait servirait une
  abonnée qui n'existe pas. Nuance : il heurte en plus la fraîcheur visée (moins de 15 minutes).
- **Erreurs fréquentes** :
  - accepter « puisque Julie est fictive » : c'est l'erreur de départ, revenir à « d'où vient
    ce trait ? » ;
  - trancher soi-même que les abonnés s'en contentent : le PO le vérifie, il ne le décide pas.
- **Ce qui marche** : opposer le téléphone basique (un tiers des abonnés, trait appuyé) au
  trait de Nora (appuyé sur rien).

### En tant que Julie ? (6b)
- **Explication** : le persona sert à la conversation et aux exemples ; la phrase de la story
  garde le rôle (choix du cours).
- **Situation** : story au backlog : « En tant qu'abonné, je veux savoir avant de partir s'il
  reste un vélo à ma station, afin de ne pas me déplacer pour rien. » Yanis propose de la
  réécrire : « En tant que Julie, je veux… ».
- **Question** : faut-il remplacer « abonné » par « Julie » ? Tranche et justifie.
- **Réponse attendue** : non, dans ce cours. Le besoin et la raison valent pour tous les abonnés,
  avec ou sans l'appli : « abonné » ne fait rien manquer. Julie sert ailleurs : dans la
  conversation, et dans les exemples qui disent quand la story est faite (« Julie n'a qu'un
  téléphone basique… », concept 8). Ce que son téléphone change pour la story se travaille au
  concept 7. Nuance : certaines équipes écrivent leurs stories au nom d'un persona ; c'est
  possible, à condition que le persona vienne d'utilisateurs réels.
- **Erreurs fréquentes** :
  - « oui, c'est plus concret » : plus concret, mais la story sert un rôle, pas un portrait ;
  - réécrire en « En tant qu'abonné sans téléphone » ou y nommer un canal : c'est le sujet du
    concept 7 ; ne pas le trancher ici.
- **Ce qui marche** : « le besoin de Julie est-il différent de celui des autres abonnés, ou
  seulement la façon de le servir ? »

## Pièges
- **Acteur technique** (« en tant que data engineer, je veux une table… ») : l'acteur est celui
  qui agit et y gagne, pas celui qui construit. Un consommateur de données reste un utilisateur
  (parti pris du cours, concept 1).
- **La valeur d'un autre rôle dans le « afin de »** (« en tant que responsable maintenance, …
  afin que mes techniciens préparent leur tournée ») : le « afin de » dit le gain de l'acteur ;
  sinon, changer d'acteur ou chercher sa propre raison (concept 5).
- **Deviner l'acteur** : le PO ne choisit pas l'acteur sur le papier ; il le vérifie auprès des
  utilisateurs (qui fait l'action, qui y gagne).
- **Celui qui demande pris pour l'acteur** : la demande vient souvent d'un responsable, le
  besoin est parfois celui de son équipe.
- **« En tant qu'utilisateur » par défaut** : il fait manquer des stories quand les rôles ont
  des raisons différentes. Il suffit quand tous ont le même besoin pour la même raison.
- **Un prénom à la place du rôle** (« en tant que Hugo ») : la story sert un rôle ; la personne
  nommée est celle qu'on interroge.
- **Un persona inventé** : un portrait tiré de l'imagination de l'équipe, sans abonnés
  interrogés, fait parler un utilisateur qui n'existe pas.
- **Croire le persona obligatoire** : choix d'école ; le Scrum Guide n'en parle pas.

## Le test rapide
Qui fait l'action du « je veux », et qui gagne ce que dit le « afin de » ? Si ce n'est pas le
même rôle, ou si c'est celui qui construit, l'acteur est probablement à revoir (heuristique,
pas règle absolue) ; dans tous les cas, le PO le vérifie auprès de l'utilisateur.

## Schéma
Deux schémas, chacun au message de son sous-concept.

**6a, deux flèches vers l'acteur**, montré à la correction, pas avec la question : il donne la
réponse. La phrase de la story en trois blocs (« En tant que », « je
veux », « afin de »), la case « En tant que » vide. En dessous, Hugo (technicien de maintenance)
et Sophie (responsable maintenance). Deux flèches partent de la phrase : du « je veux » (« voir
les vélos signalés en panne ») vers celui qui agit, du « afin de » (« préparer ma tournée ») vers
celui qui y gagne ; les deux arrivent sur Hugo, et son rôle monte dans la case vide. Légende :
« les deux flèches sur le même rôle : c'est l'acteur ».

**6b, le portrait tiré des abonnés.** Une carte portrait « Julie, persona des abonnés sans
l'appli », posée sur un groupe de silhouettes d'abonnés (un tiers marqués d'un téléphone
basique). Une flèche de la carte vers une bulle de conversation ; la case « En tant que » d'une
story, à côté, garde « abonné ». Légende : « construit à partir d'abonnés réels (choix d'école,
Cooper) ».
