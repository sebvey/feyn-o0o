---
concept: 17
titre: Hypothèses et exploration
---

# Hypothèses et exploration

## Objectif
Séparer ce qu'on sait de ce qu'on suppose, et dire si une supposition porte sur la valeur ou
sur la faisabilité ; faire décider une exploration bornée avant qu'elle commence (question,
durée, ce qu'on fera selon la réponse) ; accepter un résultat incertain par un critère sur un
niveau atteint, que l'utilisateur concerné fixe après l'exploration.

## L'essentiel
Une **hypothèse**, c'est ce qu'on tient pour vrai sans l'avoir vérifié. Une story peut en
cacher deux sortes : sur la **valeur** (l'utilisateur s'en servira-t-il, et cela sert-il
l'objectif produit ?) et sur la **faisabilité** (peut-on le construire, avec les données qu'on
a ?). Avant d'investir, on vérifie ce qui pèse, au moindre coût : une **exploration bornée**
répond à une question dans un temps fixé, elle ne livre pas de fonction. Le PO pose la question
et dit ce qu'on décidera selon la réponse ; les Developers mènent l'exploration. Une prévision
n'est jamais sûre : on l'accepte sur un niveau atteint, fixé quand on sait ce qu'on peut
atteindre, par l'utilisateur qui en paie les erreurs.

## Consensus et choix d'école
- **Consensus** (Scrum Guide 2020) : Scrum repose sur l'empirisme, la connaissance vient de
  l'expérience et on décide sur ce qu'on observe ; dans un environnement complexe, ce qui va
  arriver est inconnu. Le Scrum Guide ne parle ni de spike ni de découverte ; il ne nomme les
  hypothèses (assumptions) qu'à la rétrospective, pour celles qui ont égaré l'équipe dans sa
  façon de travailler, pas pour les hypothèses du produit.
- **Consensus** (objectifs d'apprentissage du PO de Scrum Alliance, CSPO) : repérer et valider
  les hypothèses du produit fait partie du travail du PO, et les façons de les valider se
  comparent par leur coût et par la qualité de ce qu'on apprend.
- **Choix d'école** :
  - les **quatre grands risques** de Marty Cagan : valeur (les utilisateurs choisiront-ils de
    s'en servir ?), utilisabilité (sauront-ils s'en servir ?), faisabilité (les ingénieurs
    peuvent-ils le construire avec le temps, les compétences et la technologie dont on
    dispose ?), viabilité (la solution marche-t-elle pour l'entreprise ?). Cagan veut qu'on les
    traite tôt, avant de construire. Il parle de product manager, pas de PO, et répartit les
    risques par rôle (valeur et viabilité au product manager, utilisabilité au designer,
    faisabilité à l'ingénieur principal) ;
  - l'**exploration bornée** (spike), venue d'XP : un travail limité dans le temps qui ne traite
    que la question posée, et qu'on s'attend à jeter ; d'abord pour une question technique ou
    de conception, certains l'emploient aussi pour une question métier (concept 7). Certaines
    équipes la mettent au backlog produit, d'autres la gardent dans un autre élément ;
  - le **prototype** chez Cagan : choisir la façon la plus rapide et la moins chère de tester
    une idée ; il en distingue plusieurs sortes, dont un prototype de faisabilité, écrit par les
    ingénieurs, qu'on peut jeter ; un prototype sur données réelles, utilisé pour de vrai par de
    vrais utilisateurs, pour prouver qu'une idée marche. Une maquette montrée à l'utilisateur ne
    prouve pas qu'il s'en servira : on dit une chose et on en fait une autre ;
  - décider **avant** une expérience comment on la jugera et ce qu'on fera selon le résultat ;
    si toutes les réponses mènent à la même action, ne pas explorer (Teresa Torres). Torres
    fixe aussi avant le test le seuil qui dira s'il a réussi ;
  - la **découverte continue** (Teresa Torres) : l'équipe qui construit le produit parle aux
    utilisateurs chaque semaine, par petites activités de recherche au service d'un résultat
    visé. Nommée ici, pas enseignée ;
  - le **MVP au sens d'Eric Ries** : la version qui permet d'apprendre le plus sur les
    utilisateurs pour le moindre effort (concept 16b) ; une manière d'apprendre parmi d'autres.
- **Pratique établie** (en analyse de données, hors Scrum et gestion de produit : CRISP-DM,
  guides de Google) : la réussite d'une analyse de données se dit par un niveau
  atteint (une précision de prévision, par exemple), mesuré sur des données mises de côté, et
  distinct des critères de réussite du métier (ce que l'organisation attend du projet) ; le
  seuil d'une alerte se choisit en pesant le coût d'une fausse alerte et celui d'un cas manqué,
  avec les utilisateurs. CRISP-DM met en garde contre les objectifs inatteignables et admet que
  les critères changent au fil de l'analyse. Le moment où l'on fixe le niveau n'est pas dans cette
  pratique (voir la lecture du cours ci-dessous).
- **Lecture du cours** (sans source qui le dise en ces termes, à présenter comme telle) :
  - le cours retient deux des quatre risques, valeur et faisabilité, et range la donnée dans la
    faisabilité (existe-t-elle, est-elle assez bonne, assez fraîche ?) ; Cagan ne parle pas de
    données ;
  - une exploration se décide avant sur trois points : la question, la durée, ce qu'on décidera
    selon la réponse (la question et l'action viennent de Torres, la durée du spike) ;
  - le PO pose la question, les Developers explorent ;
  - deux seuils à ne pas mêler : le seuil qui juge l'exploration (« si la tendance repère assez
    de stations, on continue »), fixé avant, comme chez Torres, et que le PO fait dire par
    Bruno et Malik sans le chiffrer (17b1) ; le niveau qu'un critère
    d'acceptation exige de la fonction livrée, fixé après l'exploration qui montre ce qu'on
    peut atteindre. Appui, sans en faire un consensus : les guides de Google choisissent le
    seuil d'un modèle sur ses résultats mesurés, donc après la mesure.

## Sous-concepts
1. **17a savoir ou supposer** : une affirmation qu'on n'a pas vérifiée est une hypothèse ; les
   quatre risques de Cagan nommés, le cours en retient deux (valeur, faisabilité, données
   comprises) ; la question type fait trier des affirmations (« Prévoir les stations à risque :
   on sait ou on suppose ? »). En rechange : « De quoi dépend la story de Malik ? ».
2. **17b explorer à moindre coût**, en deux messages :
   - **17b1** décider l'exploration avant : la question, la durée, ce qu'on décidera selon la
     réponse ; elle livre une réponse, pas une fonction ; elle s'ordonne au backlog ; le PO pose
     la question, Nora explore (« On verra ce que Nora trouve ») ;
   - **17b2** choisir la façon d'explorer selon l'hypothèse : analyse d'historique pour la
     faisabilité, prototype sur données réelles pour la valeur ; la question à Malik ne suffit
     pas (« Malik ira-t-il plus tôt ? »).
3. **17c accepter un résultat incertain** : une prévision se trompe parfois ; le critère porte
   sur un niveau atteint, mesuré sur l'historique, fixé après l'exploration par l'utilisateur
   concerné, qui pèse fausses alertes et stations vides manquées ; le PO le fait fixer
   (« Le critère à 90 % »). En rechange : « Les chiffres de Nora », puis, si l'apprenant parle
   du seuil « presque vide » ou pour « exercice », « Presque vide d'après l'historique ».

Un mot, deux sens : la « prévision des stations à risque » est une fonction du produit pour
Malik ; la prévision au sens du glossaire (ce que les Developers pensent livrer, et quand) est
celle du concept 16c. Le dire si l'apprenant les mêle.

Déjà enseigné, à rappeler sans le réenseigner : responsabilités, événements, artefacts (0) ; le
PO seul ordonne (1b) ; livrable et résultat, l'objectif produit vu comme une hypothèse, la
mesure de résultat aux points non fixés, l'exploration rigoureuse annoncée en 2c (2) ; backlog
émergent (3a2) ; les « pourquoi ? » successifs, dont le lien forcé avec l'objectif produit est
une hypothèse (5b) ; le spike, venu d'XP, aussi pour une question métier (7) ; la règle non
fixée que le PO fait fixer (8a2) ; la prévision des stations à risque découpée, la tendance de
la dernière heure et la pluie laissées à vérifier, le S de SPIDR (9a, 9b) ; dépendances (10) ;
DoR (11b) ; définition d'un indicateur, qualité des données, fraîcheur (12) ; ordonner, le
facteur « apprentissage » de Cohn, le lien non établi d'une demande avec l'objectif produit
(13a, 13a2) ; dire non, escalade (14). Nommés avec renvoi, sans les enseigner : refinement et
Sprint Planning (15), la première version, les deux sens du MVP et la prévision « pour quand ? »
(16b, 16c).

## Banque d'exemples

Faits du fil rouge utilisés : Malik, régulateur, conduit une camionnette et veut savoir quelles
stations vont se vider, pour y aller avant ; Bruno encadre les régulateurs et doit pouvoir les
envoyer plus tôt vers les stations qui se vident ; l'objectif produit (le moins longtemps
possible vides, au centre-ville, aux heures de pointe) et sa mesure de résultat ; les relevés
des stations (vélos à quai et, pour chacun, s'il est louable), rafraîchis toutes les 5 minutes,
historique d'environ un an ; relevés en double (concept 11) ; la météo (pluie, par heure) :
source envisagée, pas encore collectée ; le centre-ville, premier périmètre ; l'équipe vélos
(Léa, Yanis, Nora, analyste). Non fixés, et qu'aucun exemple ne fixe : ce qu'est une station
vide, les heures de pointe, la cible et le calcul de la mesure de résultat, le seuil « presque
vide » (3 vélos cité, pas décidé). Ne sont pas fixés non plus : si la tendance de la dernière
heure suffit, si la pluie compte, si Malik ira plus tôt. Les répliques des Developers, la durée
de l'exploration, les résultats chiffrés de Nora et le prototype de 17b2 sont des situations
d'exercice : ils ne deviennent pas des faits du fil rouge. Le prof ne demande jamais à
l'apprenant de fixer un seuil ou un niveau, ni de dire si une hypothèse est vraie.

### Prévoir les stations à risque : on sait ou on suppose ? (17a)
- **Explication** : une hypothèse, c'est ce qu'on tient pour vrai sans l'avoir vérifié
  (l'objectif produit en est une, concept 2). Marty Cagan (choix d'école) nomme quatre grands
  risques : valeur, utilisabilité, faisabilité, viabilité. Le cours en retient deux : la
  **valeur** (l'utilisateur s'en servira-t-il, cela sert-il l'objectif produit ?) et la
  **faisabilité** (peut-on le construire, avec des données qui existent, assez bonnes et
  fraîches ? ce point sur les données est un choix du cours). Le reste de Cagan (il parle de
  product manager, il veut traiter ces risques avant de construire) va dans la correction, pas
  dans ce message. Si le message dépasse une quinzaine de lignes, le couper : l'explication,
  puis la situation et la question.
- **Situation** : la prochaine tranche pour Malik est la prévision des stations à risque
  (concept 9b). Au refinement, quatre phrases circulent :
  1. « La plateforme garde l'historique des relevés depuis environ un an. »
  2. « La tendance de la dernière heure suffit pour voir quelles stations vont se vider. »
  3. « Quand il pleut, les stations se vident autrement. »
  4. « Si Malik voit les stations à risque, il ira plus tôt, et elles resteront moins
     longtemps vides. »
- **Question** : range ces quatre phrases en « on sait » et « on suppose », en disant pour
  chaque supposition si elle porte sur la valeur ou sur la faisabilité.
- **Réponse attendue** : 1 se sait : c'est un fait des sources de données (on peut encore en
  vérifier la qualité, les relevés en double par exemple). 2 se suppose, faisabilité : personne
  n'a vérifié que la tendance prévoit assez tôt. 3 se suppose, faisabilité côté données, et plus
  que ça : la météo n'est pas collectée, on ne peut même pas le vérifier sur nos données
  aujourd'hui. 4 se suppose, valeur, et contient deux hypothèses : que Malik change sa tournée
  (comportement), et que cela réduit le temps vide (lien avec l'objectif produit, qui est
  lui-même une hypothèse, concept 2). Suite : on ne tranche aucune des trois, on cherche
  comment les vérifier au moindre coût (17b). Nuance : 4 dépend aussi de ce qu'est une station
  vide et des heures de pointe, non fixés (règles à faire fixer, concept 8a2).
- **Erreurs fréquentes** :
  - ranger 2 en « on sait » parce que « c'est ce que fait n'importe quel modèle » : demander
    « qui l'a vérifié, sur quelles données ? » ;
  - trancher 3 (« évidemment, la pluie compte ») : c'est plausible, et c'est encore une
    supposition ; le PO ne la tranche pas, il la fait vérifier ;
  - voir dans 4 une seule hypothèse : demander « et si Malik y va plus tôt, est-on sûr que la
    mesure de résultat baisse ? » ;
  - réponse juste sans la suite (le tri seul) : demander « et alors, on fait quoi des trois
    suppositions ? » ; réponse elliptique (« 1 sait, le reste non ») : faire préciser le risque
    de chacune avant de corriger.
- **Ce qui marche** : pour chaque phrase, « qui l'a vérifié, et comment ? » ; si personne,
  c'est une hypothèse. Puis, pour ranger : « si c'est faux, on ne sait pas le construire
  (faisabilité), ou on le construit pour rien (valeur) ? ».

### De quoi dépend la story de Malik ? (17a, en rechange)
- **Explication** : à poser après une réponse fausse ou pour « exercice », sans rappeler les
  deux risques : la question les fait retrouver.
- **Situation** : la story est écrite : « En tant que régulateur, je veux voir les stations du
  centre-ville qui vont se vider, afin d'y aller avant qu'elles soient vides. » Yanis : « Elle
  est claire, on peut la prendre. »
- **Question** : de quoi cette story suppose-t-elle la vérité pour apporter quelque chose,
  que personne n'a encore vérifié ?
- **Réponse attendue** : la story peut être claire et reposer sur des suppositions. Valeur :
  que Malik ait le temps d'y aller et change sa tournée ; que des stations moins longtemps vides
  en résultent (objectif produit). Faisabilité : qu'on sache prévoir assez tôt avec les données
  qu'on a (les relevés ; la pluie, non collectée). Suite : nommer ces hypothèses avant le
  Sprint Planning (concept 15), et proposer de vérifier celle qui pèse le plus (17b). Clarté
  et prête ne veulent pas dire vérifiée.
- **Erreurs fréquentes** :
  - répondre sur la forme de la story (« il manque des critères ») : juste, mais la question
    porte sur ce qu'elle suppose ;
  - ne voir que la technique : demander « et si la prévision est parfaite, que fait Malik ? ».
- **Ce qui marche** : « si on la livre demain et qu'elle ne sert à rien, quelle phrase était
  fausse ? ».

### On verra ce que Nora trouve (17b1)
- **Explication** : une exploration bornée (spike, venu d'XP) répond à une question dans un
  temps fixé ; elle livre une réponse, pas une fonction, et ce qu'elle produit se jette souvent.
  Elle se décide avant, sur trois points (synthèse du cours) : la question, la durée, ce qu'on
  décidera selon la réponse, y compris ce qui compte comme « oui ». Teresa Torres (choix
  d'école) le dit ainsi : si toutes les réponses mènent à la même décision, inutile d'explorer.
  Le temps fixé borne le coût ; au terme, on décide, parfois d'explorer encore. Mise au backlog
  produit (certaines équipes la gardent plutôt dans un autre élément, choix d'école), elle
  s'ordonne comme le reste (concept 13, le facteur « apprentissage »). Le PO pose la question ;
  les Developers explorent.
- **Situation** : pour la prévision des stations à risque, Yanis propose : « Nora n'a qu'à
  fouiller l'historique des relevés, on verra ce qu'elle trouve. »
- **Question** : que manque-t-il à la proposition de Yanis pour en faire une exploration
  bornée, et que proposes-tu ?
- **Réponse attendue** : il manque les trois points. La question : par exemple « sur
  l'historique d'environ un an, la tendance de la dernière heure repère-t-elle à l'avance les
  stations du centre-ville qui se sont vidées ? ». La durée : fixée avec Nora avant de commencer
  (dans cet exercice, deux jours) ; c'est elle qui dit ce qu'il lui faut, le PO ne l'estime pas.
  Ce qu'on décidera : si oui, on construit la prévision par la tendance (morceau c du concept
  9b) ; si non, on cherche d'autres données ou on revoit la tranche ; dans les deux cas, on ne
  livre pas l'exploration à Malik. Ce qui compte comme « oui » (combien de stations repérées,
  avec combien d'avance) se dit aussi avant : c'est le seuil qui juge l'exploration ; le PO ne
  le chiffre pas, il le fait dire par Bruno et Malik (« combien d'avance vous faut-il, pour
  combien de stations, pour que ça vaille la peine ? »), comme toute règle métier (8a2). Il ne
  se confond pas avec le niveau exigé de la fonction livrée, fixé après (17c). Nuances : « se
  vider » suppose ce qu'est une station vide, non fixé (règle à faire fixer, 8a2) ; Nora peut le
  noter comme limite de sa réponse. La pluie ne s'explore pas sur nos relevés : la météo n'est
  pas collectée ; savoir s'il existe un historique météo est une question à poser, pas une
  hypothèse à trancher.
- **Erreurs fréquentes** :
  - proposer de faire l'exploration soi-même (« je sais faire une requête ») : la tentation d'un
    profil data ; le PO pose la question, Nora explore ;
  - « si oui, on construit » sans dire ce qu'est un « oui » : demander « oui à partir de quoi,
    et qui le sait ? » ; si l'apprenant chiffre lui-même le seuil, lui faire dire qui le fixe ;
  - fixer la durée seul (« deux jours, ça suffit ») : la durée se décide avec qui explore ;
  - attendre de l'exploration une fonction (« et à la fin, Malik a sa prévision ») : elle livre
    une réponse ; la fonction est une autre story ;
  - écrire la question sans la décision : demander « et si la réponse est non, que fais-tu ? » ;
  - réponse elliptique (« il faut la borner ») : faire dire quoi borner, et comment.
- **Ce qui marche** : faire écrire en trois lignes « question / durée / si oui, si non » ; si
  les deux branches donnent la même suite, montrer que l'exploration ne sert à rien.

### Malik ira-t-il plus tôt ? (17b2)
- **Explication** : on choisit la façon d'explorer selon l'hypothèse, en pesant ce qu'elle
  coûte et ce qu'elle apprend (CSPO). Une analyse d'historique répond à une question de
  faisabilité sur des données qu'on a déjà. Pour la valeur, Cagan (choix d'école) distingue la
  maquette, qui ne prouve pas qu'on s'en servira (on dit une chose et on en fait une autre),
  et le prototype sur données réelles, utilisé pour de vrai par de vrais utilisateurs, qui
  montre si l'idée marche. Le MVP au sens de Ries est une autre manière d'apprendre au moindre
  coût (concept 16b).
- **Situation** : Nora a commencé son exploration de l'historique. Léa : « Pour savoir si
  Malik ira plus tôt, Nora n'a qu'à regarder aussi dans l'historique. » Yanis : « Demandons-lui
  simplement s'il s'en servirait. »
- **Question** : l'historique ou la question à Malik répondent-ils à « Malik ira-t-il plus
  tôt ? », et sinon, que proposes-tu ?
- **Réponse attendue** : non, ni l'un ni l'autre ne suffit. L'historique montre les vélos, pas
  ce que Malik ferait avec une prévision qu'il n'a jamais eue. La question à Malik apprend
  quelque chose (ce qu'il en attend, ce qui l'en empêcherait), mais un « oui » ne prouve pas
  qu'il changera sa tournée. Proposition : un prototype sur les vrais relevés, simple et
  jetable (dans cet exercice, une liste des stations à risque calculée par la tendance,
  envoyée à Malik pendant quelques jours), et regarder ce qu'il en fait, avec Bruno qui
  envoie les régulateurs. C'est le PO qui pose la question et organise l'essai avec Bruno et
  Malik ; les Developers construisent le prototype. Nuance : ce prototype suppose que la
  tendance donne quelque chose (17b1) ; on peut attendre la réponse de Nora, ou accepter qu'il
  se trompe et observer quand même le comportement de Malik.
- **Erreurs fréquentes** :
  - « Malik a dit oui, donc c'est vérifié » : demander « et s'il dit oui puis ne s'en sert
    pas ? » ;
  - construire la prévision complète pour voir : la façon la plus chère d'apprendre ;
  - décider soi-même que Malik ira plus tôt (« c'est son métier ») : c'est la valeur supposée,
    à vérifier ;
  - réponse juste sans la suite (« il faut tester avec lui ») : demander « comment, et qui fait
    quoi ? ».
- **Ce qui marche** : « qu'est-ce qui te montrerait, sans le lui demander, que Malik va plus
  tôt aux stations ? ».

### Le critère à 90 % (17c)
- **Explication** : une prévision n'est jamais sûre ; une story qui l'exige ne se finit jamais.
  Le critère d'acceptation porte donc sur un niveau atteint, mesuré sur des données mises de
  côté (une part de l'historique des relevés, par exemple) : une pratique établie en analyse de
  données (CRISP-DM, Google), hors Scrum. Ce niveau se fixe après l'exploration qui montre ce
  qu'on peut atteindre, pas avant (lecture du cours). Il se fait fixer par l'utilisateur
  concerné, qui pèse deux erreurs : une fausse alerte (une camionnette envoyée pour rien) et une
  station vide manquée. Le PO le fait fixer, il ne le tranche pas. À ne pas confondre avec ce
  qui comptait comme « oui » pour l'exploration, dit avant par Bruno et Malik pour savoir si on
  continue (17b1).
- **Situation** : avant toute exploration, Léa propose pour la story de Malik ce critère :
  « Then la prévision annonce au moins 90 % des stations qui vont se vider. » Elle ajoute :
  « 90 %, c'est le standard. »
- **Question** : qu'est-ce qui ne va pas dans ce critère, et que proposes-tu à la place ?
- **Réponse attendue** : trois défauts. Le niveau est fixé avant de savoir ce qu'on peut
  atteindre : 90 % est peut-être inatteignable, ou trop modeste. Personne de concerné ne l'a
  fixé : « le standard » n'est pas une décision, comme le seuil « presque vide » de Léa (concept
  8a2). Il ne compte qu'une erreur : on atteint 90 % en annonçant toutes les stations, au prix
  de camionnettes envoyées pour rien ; il faut aussi les fausses alertes. Proposition : un
  critère de la forme « rejouée sur une part de l'historique mise de côté, la prévision repère à
  l'avance au moins N stations vides sur 10, avec au plus M fausses alertes », N et M fixés par
  Bruno et Malik après l'exploration de Nora, qui montre ce qu'on peut atteindre. Nuances : «
  vont se vider » ne se teste pas tel quel (sur quoi le mesure-t-on ?), d'où la forme rejouée
  sur l'historique ; « station vide » et le temps d'avance utile sont aussi à faire fixer ; le
  PO apporte le compromis, il ne choisit pas N et M.
- **Erreurs fréquentes** :
  - corriger le chiffre (« plutôt 80 % ») : le PO tranche alors un niveau ; demander « qui paie
    une erreur de la prévision ? » ;
  - exiger « la prévision ne se trompe pas » : une prévision se trompe parfois, la story ne se
    finirait jamais ;
  - ne voir que les stations manquées : demander « et si la prévision annonce toutes les
    stations, le critère passe-t-il ? » ;
  - réponse elliptique (« 90 % sorti de nulle part ») : faire dire ce qu'on met à la place, et
    qui le fixe.
- **Ce qui marche** : « une camionnette envoyée pour rien, une station vide manquée : qui sait
  laquelle coûte le plus ? ». Puis le schéma de la balance.

### Les chiffres de Nora (17c, en rechange)
- **Explication** : à poser après « Le critère à 90 % » si l'apprenant a besoin d'un cas
  chiffré, ou pour « exercice ».
- **Situation** : dans cet exercice, Nora revient de son exploration avec deux réglages
  possibles, mesurés sur une part de l'historique : le premier repère 6 stations vides sur 10,
  avec 1 fausse alerte pour 5 alertes ; le second en repère 9 sur 10, avec 1 fausse alerte sur
  2. Léa : « Prenons le second, il en rate moins. »
- **Question** : que fais-tu de ces chiffres avant le Sprint Planning ?
- **Réponse attendue** : le PO ne choisit pas : il porte le compromis à Bruno et Malik, dans
  leurs mots (« avec le second, une tournée sur deux pour rien ; avec le premier, 4 stations
  vides sur 10 que vous ne verrez pas venir »), et leur fait fixer le niveau, qui devient le
  critère d'acceptation. Léa a raison sur un point : le second en rate moins ; mais il envoie
  plus souvent la camionnette pour rien, et c'est à Bruno et Malik de peser. Nuance : un niveau
  entre les deux réglages est peut-être possible, à demander à Nora ; aucun ne fixe ce qu'est
  une station vide, toujours à faire fixer.
- **Erreurs fréquentes** :
  - choisir à la place de Bruno (« le premier, les camionnettes coûtent cher ») : demander
    « qui le sait ? » ;
  - lire « 9 sur 10 » comme « juste 9 fois sur 10 » : ce n'est qu'un des deux chiffres.
- **Ce qui marche** : faire traduire chaque réglage en une journée de Malik.

### Presque vide d'après l'historique (17c, en rechange)
- **Explication** : le seuil « presque vide » suit la même logique : l'exploration l'éclaire,
  l'utilisateur concerné le fixe. Le cours n'en donne pas la valeur.
- **Situation** : dans cet exercice, Nora a vu dans l'historique qu'une station du centre-ville
  qui descend à 3 vélos se vide souvent dans l'heure. Léa : « Voilà, c'est prouvé : presque
  vide, c'est 3 vélos. »
- **Question** : que réponds-tu à Léa, et que fais-tu des chiffres de Nora ?
- **Réponse attendue** : l'exploration ne fixe pas le seuil, elle l'éclaire : elle montre ce qui
  se passe à 3 vélos, et peut montrer ce qui se passe à 2 ou à 4. Le seuil reste une règle
  métier que Bruno fixe, en pesant ce qu'il en fera (envoyer plus tôt, au risque de déplacements
  inutiles) ; le PO lui porte les chiffres et fait fixer la règle (concept 8a2). Et « souvent »
  dans l'heure se fait préciser : combien de fois sur combien ?
- **Erreurs fréquentes** :
  - « 3 vélos, c'est prouvé » : une donnée dit ce qui se passe, pas ce qu'on décide d'en faire ;
    demander « l'exploration de Nora fixe-t-elle le seuil, ou l'éclaire-t-elle ? », puis « qui
    envoie la camionnette, et qui en paie le coût ? » ;
  - garder les chiffres pour soi et proposer un autre seuil (« plutôt 4 vélos ») : le PO
    tranche alors la règle ; demander « qui la fixe ? ».
- **Ce qui marche** : « l'historique te dit ce qui arrive ; qui te dit ce qu'on en fait ? ».

## Pièges
- **Prendre une phrase répétée pour un fait** (« la pluie compte, évidemment ») : demander qui
  l'a vérifié.
- **Ne voir que la faisabilité** : un profil data vérifie volontiers que le modèle marche, plus
  rarement que l'utilisateur s'en servira.
- **Trancher une hypothèse soi-même** : le PO la fait vérifier ; il ne dit pas si elle est
  vraie.
- **Mener l'exploration à la place des Developers**, ou en fixer seul la durée : le PO pose la
  question, Nora explore et dit le temps qu'il lui faut.
- **Une exploration sans question ni décision** (« on verra ce qu'elle trouve ») : elle n'a pas
  de fin, et rien ne change à son terme.
- **Attendre une fonction d'une exploration** : elle livre une réponse ; la fonction est une
  autre story.
- **Croire qu'un « oui » de l'utilisateur vérifie la valeur** : on observe ce qu'il fait.
- **Fixer le niveau d'une prévision avant l'exploration**, ou le fixer soi-même : il se fixe
  après, par l'utilisateur concerné.
- **Exiger qu'une prévision ne se trompe pas**, ou ne compter qu'une sorte d'erreur : il faut
  les fausses alertes et les cas manqués.
- **Croire que l'exploration fixe une règle** (le seuil « presque vide ») : elle l'éclaire.
- **Mêler les deux seuils** : ce qui compte comme « oui » pour l'exploration, dit avant par
  Bruno et Malik (17b1) ; le niveau exigé de la fonction, fixé après (17c). Le PO ne chiffre ni
  l'un ni l'autre.

## Le test rapide
« Pour cette story, quelle phrase tiens-tu pour vraie sans l'avoir vérifiée, et que décideras-tu
si elle est fausse ? » Si l'apprenant n'en trouve aucune, ou ne sait pas ce qu'il ferait, il n'a
pas séparé ce qu'il sait de ce qu'il suppose.

## Schéma
Trois panneaux.
1. **Savoir ou supposer (17a)** : deux colonnes, « on sait » et « on suppose » ; la colonne de
   droite coupée en deux bacs, « valeur » (Malik s'en servira-t-il ? cela sert-il l'objectif
   produit ?) et « faisabilité » (peut-on le construire ? avec quelles données ?). Les quatre
   phrases de 17a posées en cartes. Légende : « qui l'a vérifié ? ».
2. **L'exploration bornée (17b)** : une boîte dont la largeur est la durée, fixée avant ; une
   question entre à gauche, une réponse sort à droite, puis une bifurcation « si oui » / « si
   non » vers deux décisions. Au-dessus, « le PO pose la question » ; dans la boîte, « Nora
   explore ». Légende : « une réponse, pas une fonction ».
3. **Accepter l'incertain (17c)** : une balance ; sur un plateau, « camionnette envoyée pour
   rien », sur l'autre, « station vide manquée » ; sous la balance, Bruno et Malik qui fixent le
   niveau ; à gauche, une flèche du temps avec « exploration » puis « niveau fixé », dans cet
   ordre. Légende : « l'exploration montre ce qu'on peut atteindre, l'utilisateur fixe ce qu'il
   exige ».
