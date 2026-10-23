---
concept: 9
titre: Découpage en tranches verticales
---

# Découpage en tranches verticales

## Objectif
Découper un besoin data en tranches verticales, qui traversent les couches du produit et
servent seules à l'utilisateur ; reconnaître une tranche horizontale (une couche seule) ;
découper une story trop grosse avec un patron, attribué à son catalogue.

## L'essentiel
Un produit data s'empile en couches (ingestion, transformation, données prêtes, restitution).
Une tranche **horizontale** est une couche entière : elle ne sert pas seule à l'utilisateur
tant que les autres manquent. Une tranche **verticale** traverse toutes les couches, de haut en
bas, en tranche fine, comme une part de gâteau, et elle **sert seule** : si on s'arrête après
elle, l'utilisateur s'en sert. Le vertical s'arrête à la story : ses tâches, elles, sont
horizontales.

## Consensus et choix d'école
- **Consensus** (Scrum Guide 2020) : le Scrum Guide ne parle ni de tranche, ni de couche, ni
  de story. Il dit que l'incrément doit être utilisable et que les éléments du backlog se
  découpent en éléments plus petits et plus précis, sans dire comment.
- **Consensus** (pratique établie, hors du Scrum Guide) : découper par valeur plutôt que par couche technique.
  Les auteurs de stories concordent : Bill Wake (on trouve chez lui, en 2003, la métaphore du
  gâteau en couches, sous le V d'INVEST, concept 7), Richard Lawrence (et le guide qu'il publie
  avec Peter Green).
- **Choix d'école** :
  - les catalogues de patrons de découpage, chacun avec son auteur : SPIDR, de Mike Cohn
    (cinq techniques) ; les neuf patrons de Richard Lawrence (2009, publiés aujourd'hui avec
    Peter Green) ; « Twenty Ways to Split Stories », de Bill Wake (2005). Ils se recoupent en
    partie : on attribue chaque patron à son catalogue, on ne les fond pas en un seul.
- **Notion voisine, distincte** : le walking skeleton d'Alistair Cockburn (années 1990), une
  toute petite implémentation de bout en bout qui relie les principaux composants de
  l'architecture. Il sert l'équipe ; il peut ne rien apporter seul à l'utilisateur. Ce n'est
  pas une tranche verticale au sens du cours.
- **Choix du cours** (sans source externe, à présenter comme tels) : les quatre couches d'un
  produit data (un exemple, pas un découpage normé) ; « sert seule à l'utilisateur » comme
  exigence de chaque tranche (proche de Wake et de Lawrence, qui demandent que chaque tranche ait
  de la valeur pour l'utilisateur) ; le test « si on s'arrête après cette tranche,
  l'utilisateur s'en sert-il demain matin ? » ; que chaque story soit une tranche verticale (pas
  un texte du Guide) : un travail technique qui porte sa propre raison (concept 3b) et une
  exploration bornée (concept 17b1) entrent aussi au backlog sans en être une.

## Sous-concepts
1. **9a tranche verticale**, en deux messages, chacun avec sa question :
   - **9a1** La tranche qui sert seule (« Redécouper “quelles stations vont se vider ?” ») :
     d'abord l'origine des mots, puis le schéma. Les couches s'empilent : on les dessine à
     l'horizontale. Une tranche horizontale est une couche entière ; une tranche verticale
     coupe toutes les couches de haut en bas. Parts légendées « tranche 1, 2, 3 », jamais
     « story ». Dire en une ligne qu'au niveau du sprint une tranche est une story, et que le
     vertical s'arrête là : ce que deviennent ses tâches, 9a2 le fait trouver (ne pas le dire
     ici). En rechange, ou si l'apprenant croit
     qu'il suffit de traverser les couches : « Le compteur de relevés ingérés ».
   - **9a2** Où s'arrête le vertical (« Les tâches de Léa ») : « tranche » est une façon de
     découper, pas un niveau. Un epic se découpe en stories verticales ; au niveau du sprint,
     une tranche est une story. La question fait trouver que ses tâches sont horizontales, et
     que c'est normal : elles sont le plan des Developers (renvoi au concept 4, sans le
     réenseigner). Après une réponse fausse : « Les tâches de la story de Julie ».
2. **9b patrons de découpage**, en deux messages, une question par message :
   - **9b1** Couche ou tranche (« Prévoir les stations à risque : laquelle est une couche ? ») :
     une story trop grosse se découpe (concept 4) ; chaque morceau passe le même test qu'en 9a.
   - **9b2** Les patrons et leur catalogue (« Prévoir les stations à risque : quel patron ? ») :
     SPIDR (Cohn) et les patrons de Lawrence, choix d'école ; le S de SPIDR (spike) en une
     ligne, renvoi au concept 17. Le morceau a sert d'exemple résolu ; la question porte sur c
     seul.

## Banque d'exemples

Faits du fil rouge utilisés : Malik, régulateur, veut savoir quelles stations vont se vider,
pour y aller avant ; les relevés des stations (nombre de vélos à quai et, pour chacun, s'il est
louable), rafraîchis toutes les 5 minutes, historique d'environ un an ; le centre-ville, premier
périmètre ; la météo (pluie, par heure) : source envisagée, pas encore collectée ; la vue des
stations vides de Bruno (concepts 0 et 2) ; la plateforme collecte déjà les relevés dans
l'entrepôt (l'ingestion des relevés existe) ; l'équipe vélos (Léa, Yanis, Nora). Ne sont pas
fixés : ce qu'est une station vide (vélos à quai ou disponibles), le seuil « presque vide » (3
vélos cité, pas décidé), les heures de pointe. Aucun exemple ne les fixe ; une réponse qui
s'appuie sur l'un d'eux le nomme comme règle à faire fixer (concept 8a2). Si la tendance de la
dernière heure suffit et si la pluie compte : non tranché, c'est le concept 17. Les découpages
proposés par l'équipe, les tâches de Léa et le compteur de Yanis sont des propositions
d'exercice : ils ne deviennent pas des faits du fil rouge.

### Redécouper « quelles stations vont se vider ? » (9a1)
- **Explication** : origine des mots, avant le schéma. Les couches d'un produit data
  s'empilent : on les dessine à l'horizontale (ingestion en bas, restitution en haut). Une
  tranche horizontale est une couche entière ; elle ne sert pas seule. Une tranche verticale
  coupe toutes les couches de haut en bas, comme une part de gâteau (métaphore qu'on trouve chez
  Wake) : un peu de chaque couche, et l'utilisateur s'en sert. Schéma : parts « tranche 1, 2,
  3 ». Au niveau du sprint, une tranche est une story, et le vertical s'arrête là (la suite en
  9a2, sans dire ici ce que deviennent les tâches).
- **Situation** : Malik, régulateur, veut savoir quelles stations vont se vider, pour y
  apporter des vélos avant. L'équipe propose : 1. préparer l'historique des relevés (déjà
  collectés) pour l'entraînement ; 2. entraîner un modèle de prévision ; 3. afficher la carte
  des stations à risque.
- **Question** : quelle première tranche verticale proposes-tu, pour que Malik s'en serve dès le
  lendemain ?
- **Réponse attendue** : le découpage de l'équipe est horizontal : trois couches, rien pour
  Malik avant la fin. Première tranche : l'état actuel des stations vides, sans modèle (un peu
  de chaque couche : lecture des relevés déjà collectés, calcul simple, restitution) ; Malik
  voit où aller maintenant. Ensuite, la prévision des stations à risque, qui se découpe à son
  tour (9b). Nuances : la tranche 1 ne répond qu'en partie au besoin (Malik arrive après que
  la station s'est vidée) ; elle sert seule quand même. Ce qu'est une station vide (vélos à
  quai ou disponibles) n'est pas fixé : c'est une règle à faire fixer, la story attend sur ce
  point (concept 8a2). La forme (carte, liste) reste aux Developers : la story dit ce que Malik obtient (concept 5). Si l'apprenant
  rappelle que la vue des stations vides de Bruno existe déjà : c'est juste ; la première
  tranche pour Malik est alors l'accès à cet état, et la tranche suivante est la prévision.
- **Erreurs fréquentes** :
  - redécouper en couches plus fines (« d'abord tout l'historique préparé, puis… ») :
    demander « si on s'arrête après la tranche 1, qu'a Malik ? » ;
  - garder la prévision dans la tranche 1, sans modèle (« la carte des stations qui vont se
    vider, avec juste les données brutes ») : confondre tranche fine et prévision au rabais ;
    dire ce qui est juste (une tranche fine, sans modèle), puis demander « avec seulement les
    relevés bruts, que verrait Malik demain matin ? » ;
  - écrire « afficher la carte » dans la tranche : la forme est une solution (concept 5) ;
  - fixer soi-même « vide = 0 vélo à quai », ou ajouter les stations presque vides avec un seuil
    de 3 vélos : règles non fixées, renvoi au concept 8a2 sans le réexpliquer ;
  - objecter que les relevés sont déjà collectés : c'est juste, et c'est pourquoi la couche 1
    de l'équipe prépare l'historique pour le modèle au lieu de l'ingérer ; le découpage reste
    horizontal ;
  - réponse juste sans la suite (« l'état actuel ») : demander « pourquoi celle-là d'abord ? »
    puis « et après ? ». Réponse elliptique : la faire préciser avant de corriger.
- **Ce qui marche** : le test rapide à voix haute, tranche par tranche (« si on s'arrête là,
  Malik s'en sert-il demain matin ? »), et le schéma du gâteau légendé « tranche 1, 2, 3 ».

### Le compteur de relevés ingérés (9a1, rechange)
- **Explication** : à poser après 9a1, sans rappeler la règle ; la question la fait trouver.
- **Situation** : pour la prévision des stations à risque, Yanis, data engineer, propose une
  première tranche : « afficher le nombre de relevés ingérés par heure », un suivi de
  l'ingestion qui existe déjà. Elle touche toutes les couches : les relevés de l'entrepôt, un
  calcul, un affichage.
- **Question** : Malik s'en sert-il, et pour décider quoi ?
- **Réponse attendue** : Malik ne s'en sert pas : il n'en tire rien pour choisir où aller.
  Ce n'est donc pas une tranche verticale au sens du cours : elle traverse les couches, mais ne
  sert pas seule. Elle sert l'équipe (vérifier que le chemin marche de bout en bout).
  Nuance : c'est proche de ce qu'Alistair Cockburn appelle un walking skeleton, une toute
  petite implémentation de bout en bout qui relie les composants de l'architecture ; utile à
  l'équipe, mais distinct d'une tranche verticale. Si l'équipe en a besoin, c'est du travail
  des Developers dans une story, pas une story de Malik.
- **Erreurs fréquentes** :
  - « c'est une tranche verticale, elle passe par toutes les couches » : redemander « Malik
    s'en sert-il ? » ;
  - rejeter tout travail de bout en bout : il a sa place, comme tâche d'une story qui sert.
- **Ce qui marche** : demander « qui s'en sert, et pour décider quoi ? ».

### Les tâches de Léa (9a2)
- **Explication** : « tranche » est une façon de découper, pas un niveau. Un epic se découpe
  en stories verticales ; au niveau du sprint, une tranche est une story. Ne pas dire ici ce
  que deviennent les tâches : la question le fait trouver.
- **Situation** : la première tranche de Malik (l'état actuel des stations vides) devient une
  story. Au Sprint Planning (concept 15), Léa, data engineer, la découpe en trois tâches :
  « lire l'état courant dans l'entrepôt », « calculer les stations vides », « restituer le
  résultat à Malik ». Nora dit : « On refait un découpage horizontal. »
- **Question** : Nora a-t-elle raison ? Pourquoi ?
- **Réponse attendue** : non. Ce sont des tâches, pas des stories : le vertical s'arrête à la
  story ; ses tâches, souvent une par couche, sont un découpage technique normal, le plan des
  Developers, dans le backlog de sprint (concept 4). La story, elle, reste verticale : elle
  sert seule à Malik. Le PO juge la story sur ses critères d'acceptation, pas sur ses tâches.
  Nuance : « calculer les stations vides » suppose que la règle « station vide » est fixée ;
  sinon la story n'était pas prête (concept 8a2 ; Definition of Ready, concept 11).
- **Erreurs fréquentes** :
  - donner raison à Nora, parce que « chaque découpage doit être vertical » : demander « à quel
    niveau Malik se sert-il de quelque chose : la story ou la tâche ? » ;
  - vouloir que le PO écrive ou valide les tâches : elles appartiennent au plan des Developers
    (concept 4) ;
  - réponse juste sans le pourquoi (« non, c'est normal ») : demander « pourquoi ? ».
- **Ce qui marche** : dans la correction, pas avant la question (il donnerait la réponse) :
  sur le schéma, zoomer sur la tranche 1 et la couper en lamelles horizontales en pointillé,
  légendées « tâches ».

### Les tâches de la story de Julie (9a2, rechange)
- **Explication** : pour réexpliquer après une réponse fausse à « Les tâches de Léa » : le test
  « l'utilisateur s'en sert-il si on s'arrête là ? » s'applique à ce qu'on lui livre, la story ;
  les tâches ne sont jamais livrées seules.
- **Situation** : la story de Julie (concept 8) : connaître le nombre de vélos disponibles à sa
  station favorite. Yanis la découpe en trois tâches : « lire les relevés de la station »,
  « compter les vélos à quai et louables », « transmettre le chiffre à l'équipe appli ».
- **Question** : faut-il que chacune de ces trois tâches serve seule à Julie ? Pourquoi ?
- **Réponse attendue** : non. Julie se sert de la story livrée, pas d'une tâche : les tâches
  sont le plan des Developers pour finir la story (concept 4), souvent une par couche. Seule la
  story doit servir seule.
- **Erreurs fréquentes** : « oui, sinon c'est horizontal » : demander « Julie verra-t-elle un
  jour la tâche « lire les relevés » toute seule ? ».
- **Ce qui marche** : opposer ce que Julie reçoit (le nombre de vélos disponibles) et ce que
  l'équipe fait pour le produire (les trois tâches).

### Prévoir les stations à risque : laquelle est une couche ? (9b1)
- **Explication** : une story trop grosse pour un sprint se découpe (concept 4). Chaque
  morceau passe le même test qu'en 9a : sert-il seul à l'utilisateur ?
- **Situation** : tranche suivante pour Malik, « prévoir les stations à risque ». Les Developers
  (Léa, Yanis, Nora) l'estiment trop grosse pour un sprint et proposent trois morceaux :
  a) la prévision pour le centre-ville seulement ;
  b) la collecte des données météo ;
  c) une prévision par la tendance de la dernière heure, avant tout modèle.
- **Question** : lequel de ces morceaux n'est pas une tranche verticale ?
- **Réponse attendue** : b. Collecter la météo est une couche : une source de plus, rien pour
  Malik. La météo est une source envisagée, pas encore collectée. Version verticale : « une
  prévision ajustée quand il pleut » (collecte, calcul, restitution : Malik voit une prévision
  qui tient compte de la pluie). a et c sont verticales : chacune traverse les couches et livre
  à Malik une prévision qu'il peut consulter ; son utilité reste une hypothèse à vérifier.
  Nuance : savoir si la tendance de la dernière heure suffit, et si la pluie
  change vraiment les départs, n'est pas tranché ici ; on le vérifie avant de s'engager
  (exploration bornée, concept 17).
- **Erreurs fréquentes** :
  - désigner a, « parce que ce n'est qu'une partie des stations » : un périmètre réduit reste
    vertical s'il sert seul ; relancer : « si on livre seulement a, que voit Malik ? » ;
  - désigner c, « parce qu'il n'y a pas de modèle » : le modèle est un moyen, pas la valeur ;
    relancer : « si on livre seulement c, que voit Malik ? » ;
  - trancher que la pluie compte ou non : c'est une hypothèse, concept 17 ;
  - réponse elliptique (« b ») : faire dire pourquoi avant de corriger, puis demander « et
    alors, que fais-tu de b ? ».
- **Ce qui marche** : demander, morceau par morceau, « si on livre seulement celui-là, que voit
  Malik ? ».

### Prévoir les stations à risque : quel patron ? (9b2)
- **Explication** : des catalogues de patrons aident à trouver un découpage. Choix d'école,
  chacun à son auteur, posés côte à côte :
  - **SPIDR** (Mike Cohn), cinq lettres : Spike (exploration bornée, concept 17), Paths,
    Interfaces, Data (une partie des données d'abord), Rules (assouplir d'abord une règle) ;
  - **Richard Lawrence** (neuf patrons, 2009), dont Variations in Data (une variante des
    données d'abord) et Simple/Complex (« quelle est la version la plus simple ? », les
    variantes en stories à part).
  Exemple résolu : le morceau a (le centre-ville d'abord) restreint les données : le D de
  SPIDR, ou Variations in Data chez Lawrence, même idée sous deux noms.
- **Réserve, sur demande** : les autres lettres de SPIDR (Paths : un chemin de l'utilisateur à
  la fois ; Interfaces : une interface à la fois, ou minimale d'abord) ; chez Lawrence, Defer
  Performance (« que ça marche » avant « que ce soit rapide »), Business Rule Variations (une
  story par variante de règle), Workflow Steps. Les deux catalogues se recoupent (données,
  règles) sans se confondre.
- **Situation** : le morceau c de « prévoir les stations à risque » (9b1) : une prévision par
  la tendance de la dernière heure, avant tout modèle.
- **Question** : quel patron le morceau c applique-t-il, et dans quel catalogue ?
- **Réponse attendue** : c prend la version la plus simple d'abord : Simple/Complex, de
  Lawrence ; SPIDR n'a pas de patron sous ce nom. Nuances : répondre « le R de SPIDR » est
  défendable si on voit la tendance comme une règle de calcul assouplie pour commencer ;
  Simple/Complex le dit plus directement. Le nom compte moins que la question qu'il fait
  poser ; le guide de Lawrence et Peter Green conseille aussi de choisir le découpage qui
  permet de reporter, voire d'abandonner, un morceau de faible valeur (ordonner : concept 13).
- **Erreurs fréquentes** :
  - ranger c sous le S de SPIDR : un spike livre une réponse, pas une fonction ; c livre une
    prévision à Malik ;
  - attribuer Simple/Complex à SPIDR, ou fondre les deux catalogues en un seul : redonner
    chaque patron à son auteur ;
  - chercher un patron pour b : b n'est pas une tranche (9b1) ;
  - réponse elliptique (« Simple/Complex ») : faire dire le catalogue et pourquoi avant de
    corriger.
- **Ce qui marche** : une question par message (pas « laquelle, puis quel patron » d'un coup,
  ni « quel patron pour a et pour c ») ; donner a comme exemple résolu, puis faire relier c.
  Pour tenir en 15 lignes, ne pas réciter les catalogues : la réserve sert sur demande.

## Pièges
- **Découper par couche** (préparer les données, entraîner le modèle, afficher) : rien pour
  l'utilisateur avant la fin. Réflexe probable d'un profil technique.
- **Croire que traverser les couches suffit** (le compteur de relevés ingérés) : la tranche
  doit servir seule. Le walking skeleton (Cockburn) sert l'équipe, pas l'utilisateur.
- **Appliquer le vertical aux tâches** : il s'arrête à la story ; les tâches sont horizontales
  et appartiennent aux Developers (concept 4).
- **Légender une part « story »** : une tranche est une façon de découper ; elle n'est une
  story qu'au niveau du sprint.
- **Nommer la forme dans la tranche** (« carte », « liste ») : la story dit ce que
  l'utilisateur obtient ; la forme reste aux Developers (concept 5). Une story qui ne nomme pas
  l'écran livre quand même quelque chose de visible.
- **Fixer une règle en découpant** (« vide », « presque vide », « heures de pointe ») : règle
  non fixée, le PO la fait fixer (concept 8a2).
- **Collecter une source « pour plus tard »** (la météo) : une couche ; la raccrocher à un
  usage.
- **Trancher une hypothèse dans le découpage** (la tendance suffit, la pluie compte) : on la
  vérifie avant (concept 17).
- **Mélanger les catalogues** : attribuer un patron de Lawrence à SPIDR, ou l'inverse.

## Le test rapide
« Si on s'arrête après cette tranche, l'utilisateur s'en sert-il demain matin ? »

## Schéma
**9a, le gâteau en couches.** Quatre couches empilées, de bas en haut : ingestion (relevés
des stations), transformation, données prêtes, restitution (ce que voit Malik). Une couche
entière grisée, légendée « tranche horizontale : ne sert pas seule ». Trois parts verticales
colorées qui traversent toutes les couches, légendées « tranche 1 », « tranche 2 »,
« tranche 3 », avec la légende « tranche verticale : un peu de chaque couche, sert seule ».
Pour 9a2, dans la correction (pas avant la question) : un zoom sur la tranche 1, coupée en
lamelles horizontales en pointillé, « tâches », avec la mention « au niveau du sprint, la
tranche est une story ».
**9b, la part trop grosse.** La part « prévoir les stations à risque » recoupée : deux parts
plus fines (a centre-ville, c tendance de la dernière heure) et, à côté, une lamelle
horizontale « b collecte météo : une couche ». Sous chaque part fine, le patron et son
catalogue (« D, SPIDR / Variations in Data, Lawrence » ; « Simple/Complex, Lawrence ; R de
SPIDR défendable »).
