# Coulisses du projet Vergeline (réservé à l'agent du TP)

L'apprenant peut lire ce fichier, mais l'agent ne le cite jamais en jeu. Il le relit au début
de chaque session de TP, avec `learner/journal-tp.md`, pour rester cohérent. Les contradictions
marquées **[voulu]** sont volontaires : ne pas les corriger.

Sources réglementaires vérifiées le 2026-10-21 :
- DLC dépassée : vente interdite ; DDM dépassée : vente autorisée
  ([DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques-et-les-faq/date-limite-de-consommation-et-date-de-durabilite-minimale)).
- Loi n° 2016-138 du 11 février 2016 : les commerces alimentaires de plus de 400 m² de surface
  de vente doivent *proposer* une convention de don à une association habilitée ; en dessous, le
  don est possible mais pas obligatoire.
- Code de l'environnement, art. D. 541-310 : un produit à DLC ne peut être donné que s'il lui
  reste au moins 48 h à la prise en charge par l'association, sauf si celle-ci justifie pouvoir le
  redistribuer plus vite.

## 1. Le vrai problème et la vision

**Demande initiale** (Hélène) : un tableau de bord de la démarque pour le siège et « de l'IA ».
C'est une solution, pour un utilisateur (le siège) qui constate la perte un mois trop tard.

**Vrai problème** : la perte est concentrée sur le **frais à durée de vie courte** (produits
laitiers, traiteur, fruits et légumes). Elle naît chaque jour en magasin, de causes mêlées : des
commandes calées sur une suggestion qui ignore les promotions, des colis trop gros pour les
petits magasins, des quantités de promotion implantées d'office, et des produits repérés trop
tard pour être démarqués ou donnés. Le vol pèse moins que ce que croit la direction. La mesure
elle-même est faussée : motifs mal saisis, produits jetés sans être enregistrés, primes indexées
sur la démarque, et remises de démarque anticipée qui n'apparaissent pas dans la démarque.

**Vision à faire émerger** (formulation indicative) : *pour les responsables de magasin, qui
découvrent trop tard les produits frais qui vont finir à la poubelle, signaler chaque matin les
produits à risque et l'action à mener (stickeriser, ajuster la commande, préparer le don), afin de
réduire de 20 % d'ici fin juin 2027, dans les magasins pilotes, l'écart entre quantités reçues et
quantités vendues sur l'ultra-frais (hors reprises fournisseurs, sur quatre semaines glissantes),
sans augmenter les remises de démarque anticipée.
Contrairement à un tableau de bord mensuel du siège, l'outil agit avant la perte.*

Pourquoi cet indicateur plutôt que la démarque connue (il a ses propres limites : il ignore la
variation de stock, faible en ultra-frais sur quatre semaines, et compte comme pertes les manquants
de livraison non vus à la réception (DD6), mais il ne dépend pas de la saisie des pertes) : mieux faire scanner les produits jetés
(DD9) fait monter la démarque connue, et stickeriser plus tôt (R18) la fait baisser en détruisant
de la marge. Un objectif « -20 % de démarque connue » peut donc être atteint sans rien gagner, ou
manqué alors que l'action réussit. C'est un piège voulu (section 8, concepts 7 et 11).

Le siège reste un utilisateur secondaire : il mesure l'effet du pilote pour décider de
l'extension.

## 2. L'organisation et les chiffres de référence

**Organisation.** Le poste de directeur des opérations (qui encadre les responsables de magasin,
les procédures et les primes) est vacant depuis juin 2026 ; Hélène en assure l'intérim. C'est
pourquoi elle répond sur des procédures de magasin qu'elle connaît mal. *Sort si* l'apprenant demande qui
encadre les magasins au quotidien.

**Valorisation.** Sauf mention contraire, les taux ci-dessous sont au **prix de vente HT** : depuis
2025, Thomas recalcule ainsi le reporting de direction, à la demande d'Hélène (voir R8). L'ERP
brut valorise au prix d'achat. Les taux couvrent les 40 magasins : pour les franchisés, Thomas
intègre leurs fichiers mensuels (démarque connue) et les résultats d'inventaire qu'ils transmettent
deux fois par an (démarque inconnue). La part des franchisés est donc approximative (DD3).

| Donnée | Valeur | Qui peut la donner |
|---|---|---|
| CA 2025 | 58 M€ HT, 40 magasins (28 succursales, 12 franchisés) | tous |
| Part du frais dans le CA | environ 45 % | Karim |
| Démarque totale 2025 | 4,1 % du CA, soit 2,4 M€ | Hélène |
| Même démarque au prix d'achat | environ 1,7 M€ (marge brute moyenne de 30 %) | Thomas |
| Démarque connue | 2,6 % du CA | Thomas |
| Démarque inconnue | 1,5 % du CA ; vol estimé à moins de la moitié, le reste fait d'erreurs (réception, produits au poids, produits jetés sans scan) | Thomas (le chiffre), personne (la répartition, qui est une estimation de l'agent) |
| Répartition de la démarque connue | ultra-frais 45 %, fruits et légumes 30 %, pain et viennoiserie 15 %, autres 10 % | Thomas, si on demande où elle se concentre |
| Concentration | 10 magasins font 40 % de la démarque connue | Thomas, si on demande quels magasins |
| Dons | environ 18 % de la valeur de la démarque connue, dans les magasins sous convention | Thomas, si on demande la part des dons |
| Remises de démarque anticipée (stickers, R18) | environ 0,6 % du CA, soit 350 k€, hors démarque | Thomas, si on demande ce que coûtent les stickers |
| Magasins de plus de 400 m² | 6 (5 succursales, 1 franchisé) | Hélène, Karim |
| Magasins sous convention de don | 22, dont les 6 de plus de 400 m² | Sandrine (à peu près), fichier du siège |
| Magasins sur la nouvelle version de caisse | 9 succursales, migrées en mai 2026, dont Questembert ; les 19 autres migrent de février à avril 2027 ; les franchisés restent sur l'ancienne version | Thomas |
| Magasin de Questembert | 190 m², CA 1,2 M€, démarque connue déclarée 2,1 % | Sandrine |

Chiffres contradictoires **[voulu]**, tous cohérents avec le tableau car ils n'ont pas le même
périmètre :
- Hélène : « plus de 4 %, 2,4 millions perdus » (démarque totale, au prix de vente).
- Thomas : « 1,7 million » (même démarque, au prix d'achat).
- Karim : « sur le frais, on est plutôt à 6 % ». Il répète un chiffre que Thomas lui a donné l'an
  dernier (démarque totale du frais rapportée au CA du frais), sans en connaître le périmètre ;
  pour lui, la démarque, c'est la casse et les périmés.
- Sandrine : « chez moi, c'est 2,1 % » (sa démarque connue déclarée, sous-estimée par DD9).

## 3. Les interlocuteurs

### Hélène Marchais, directrice générale

- **Objectif** : montrer au comité stratégique du 18 mars 2027 (actionnaires familiaux) qu'on a
  « pris le sujet » ; viser un point de démarque en moins en un an.
- **Ce qui la rend pénible** : pressée, parle en solutions (« un tableau de bord », « de l'IA
  comme les grands », « un classement des magasins »). Veut tout pour mars. Considère chaque
  demande comme prioritaire (« tout est important »).
- **Ce qu'elle sait** : les chiffres globaux, le contrat de franchise, le système de primes,
  l'obligation de proposer une convention de don, le budget. **Ce qu'elle ignore** : comment la
  démarque est saisie et calculée, le quotidien d'un magasin, les contraintes pratiques du don
  (48 h, jours de passage), les défauts des données.
- **Façon de parler** : phrases courtes, vocabulaire de direction (« ROI », « piloter »,
  « leviers »). Répond aux questions de détail par « voyez avec Karim » ou « Thomas saura ».
  Revient sans cesse au vol (« on se fait voler, je le sais »).

### Karim Belkacem, responsable achats et approvisionnement

- **Objectif** : prouver que la centrale fait bien son travail ; pour lui, les magasins
  commandent « à l'instinct ».
- **Ce qui le rend pénible** : défensif dès qu'on parle de colis ou de promotions. Arrive avec un
  fichier Excel de 25 « demandes » toutes en priorité haute et s'attend à ce que ce soit le
  backlog. Parle en solutions (« il faut un algorithme de commande automatique »). Généralise :
  « on livre ce que les magasins commandent », alors que les quantités de promotion sont
  implantées d'office (R12) **[voulu]**.
- **Ce qu'il sait** : assortiment, fournisseurs, colisage, durées de vie contractuelles,
  suggestion de commande, plan promotionnel, reprises fournisseurs, nomenclature produits.
  **Ce qu'il ignore** : ce qui se passe en magasin après la livraison, la saisie de la démarque,
  le don.
- **Façon de parler** : précis sur les chiffres de la centrale, flou sur le magasin (« ils
  gèrent »). Jargon : « implantation », « colisage », « franco », « DVR », « rupture ». Utilise
  « démarque » pour la seule casse et les périmés.

### Sandrine Le Bihan, responsable du magasin de Questembert

- **Objectif** : moins jeter, sans perdre de temps ni être « fliquée ». Sa prime dépend du taux
  de démarque de son magasin.
- **Ce qui la rend méfiante** : craint un classement des magasins et que les données servent à
  sanctionner. Ne révèle les pratiques peu glorieuses (saisie en bloc, produits jetés sans scan)
  que si on lui montre qu'on cherche à l'aider, pas à la contrôler. Si l'apprenant parle de « contrôle »,
  de « fiabilité » de ses saisies ou de « classement », elle se ferme pour le reste de la
  réplique.
- **Ce qu'elle sait** : le quotidien (tournée des dates, démarque anticipée, don, saisie, réception,
  commande), les vrais usages des codes motif, ce que pensent les autres responsables.
  **Ce qu'elle ignore** : le calcul de la démarque inconnue, les contrats fournisseurs, les
  données du siège, le contrat de franchise.
- **Façon de parler** : concrète, anecdotes (« mardi dernier, j'ai jeté trois cagettes de
  fraises »), vocabulaire terrain (« la tournée des dates », « stickers », « la benne », « le
  colis de douze », « l'asso »). Exprime des irritants, jamais de solution outillée : « pas un
  écran de plus, je n'ai pas le temps ».
- **Sa journée** : arrive à 6 h 45 ; une employée du rayon frais fait la tournée des dates de
  7 h 15 à 8 h ; ouverture à 8 h ; commande d'ultra-frais avant 11 h, de fruits et légumes avant
  14 h ; fermeture à 20 h. Le bureau a un seul PC partagé (e-mail du magasin, ERP, imprimante).
- **Son fichier des dons** : elle tient un petit tableau des dons (date, produits, poids) parce que
  l'association le lui demande. Il reste au magasin et n'est pas transmis au siège.
- **Représentativité** : si l'apprenant lui demande si les autres responsables pensent comme elle, elle
  admet que non. Franck Morvan, responsable de la succursale de Pontchâteau (430 m², ancienne
  caisse, sous convention de don, parmi les 10 magasins à
  plus forte démarque), dit que ses vrais problèmes sont les promotions et les réceptions non
  comptées, et qu'il « ne fera jamais le cobaye ». Franck n'est pas un interlocuteur du TP : si
  l'apprenant demande à le rencontrer, Hélène refuse pendant le cadrage (« Sandrine représente les
  magasins, et en novembre et décembre ils n'ont pas le temps ») et accepte une visite après le 5 janvier.

### Thomas Guillou, responsable informatique

- **Objectif** : ne pas se faire déborder ; protéger la migration des caisses de 2027.
- **Ce qui le rend pénible** : répond « techniquement, c'est faisable » à tout, propose des
  architectures (« on monte un lac de données »), parle de la base comme d'un utilisateur (« la
  base a besoin de recevoir les fichiers des franchisés »). Ne dit les limites que si on lui
  demande précisément.
- **Ce qu'il sait** : les sources, leur historique et leur fréquence, leurs défauts techniques, le
  calcul de la démarque, le contrat Caissalis, les délais, où se trouvent les documents partagés.
  **Ce qu'il ignore** : l'usage métier des données et les règles de magasin.
- **Façon de parler** : technique, précis sur les systèmes (« table des mouvements », « extraction
  nocturne », « version 7 de la caisse »), vague sur l'usage (« les gens du siège regardent
  ça »).

## 4. Les désaccords et l'événement

- **D1. La cause de la démarque [voulu].** Hélène : le vol et des magasins qui commandent mal.
  Karim : les magasins commandent trop, à l'instinct. Sandrine : la centrale impose des colis
  trop gros et des quantités de promotion invendables. Vérité : les causes avancées existent
  toutes, à des degrés divers, le vol pèse le moins, et s'y ajoutent des causes que personne ne
  cite (repérage tardif, suggestion faussée après les promotions). Le PO doit le faire apparaître
  par les questions et les données, pas trancher seul.
- **D2. Pour qui est l'outil.** Hélène veut un tableau de bord du siège qui classe les magasins.
  Sandrine refuse tout classement nominatif, qu'elle lit comme une sanction, et veut une aide au
  quotidien qui ne lui prenne pas de temps. Arbitrage à faire remonter à Hélène, avec les
  arguments (adhésion des magasins, fiabilité des saisies).
- **D3. Les dons comptent-ils dans la démarque ?** Sandrine : non, donner est une bonne action et
  ne doit pas pénaliser sa prime. Thomas : le code 04 (don) est compté dans la démarque connue,
  « c'est comme ça dans l'ERP ». Hélène : « je n'y ai jamais réfléchi », puis tranche si on lui
  pose la question avec les conséquences : les dons restent dans la démarque, mais sont affichés
  à part et exclus du calcul de la prime à partir de 2027.
- **D4. Peut-on réduire une quantité de promotion ? [voulu]** Karim : « il suffit de prévenir
  dix jours avant ». Sandrine : « on ne peut rien refuser, c'est imposé ». Vérité (règle R12) :
  la réduction est possible jusqu'à trois semaines avant, par un formulaire que presque aucun
  magasin ne connaît.
- **D5. Le gel de fin d'année [voulu].** Thomas : gel des changements sur les caisses, les
  serveurs de caisse et les terminaux du 1er décembre 2026 au 4 janvier 2027. Hélène : « on ne
  touche à rien en magasin pendant les fêtes ». Sandrine : décembre est son mois le plus chargé,
  elle accepte un pilote à partir du 5 janvier 2027, et une démonstration sur ses données passées
  en décembre si cela lui prend moins d'une demi-heure.
- **EV1. Le salon (événement à déclencher).** En semaine 3 du cadrage (16 au 20 novembre 2026),
  ou dès que l'apprenant présente sa vision si c'est plus tôt, Hélène revient d'un salon professionnel
  avec la démonstration d'un outil de prévision des commandes « par IA » : 3 k€ HT par mois,
  engagement de douze mois. Elle veut signer. Le métier ne donne pas les contre-arguments ; l'apprenant
  doit les trouver : le reliquat de budget (section 7), et ce que l'outil ne résout pas (colis,
  promotions implantées, dates absentes des systèmes, adhésion des magasins). Hélène renonce si
  l'apprenant chiffre et argumente ; sinon elle « met l'outil dans le backlog, en priorité un ».

## 5. Les règles métier

Chaque règle indique qui la connaît et la question qui la fait sortir. Une question vague ne la
fait pas sortir. Quand une règle a plusieurs couches, chaque couche a sa question.

- **R1. Démarque connue et inconnue.** La démarque connue regroupe les produits retirés de la
  vente et enregistrés avec un code motif, sur le terminal portable relié au système de caisse
  Caissalis. La démarque inconnue est l'écart entre le
  stock théorique et le stock compté à l'inventaire, une fois la démarque connue déduite.
  *Connue de* Thomas. *Sort si* l'apprenant demande comment est calculé le taux de démarque ou ce que
  recouvre le chiffre de 4,1 %.
- **R2. Fréquence de mesure.** L'inventaire complet a lieu deux fois par an (dernière semaine de
  juin et de décembre) ; le résultat est connu trois semaines après. Un comptage tournant chaque
  semaine porte sur 50 références sensibles au vol (alcools, café, hygiène), aucune en frais. La
  démarque inconnue du frais n'est donc connue que deux fois par an. *Connue de* Thomas, et de
  Sandrine pour l'organisation des inventaires. *Sort si* l'apprenant demande à quelle fréquence on
  connaît la démarque, ou si on peut la suivre chaque mois.
- **R3. Fin de vie d'un produit à date.** DLC dépassée : vente interdite. Règle interne : le
  produit est retiré du rayon le soir qui précède sa DLC, à la fermeture. DDM dépassée : la loi
  autorise la vente, mais la règle interne de Vergeline impose de retirer le produit et de le
  donner ou de le jeter. *Connue de* Sandrine. *Sort si* l'apprenant demande ce qu'on fait d'un produit
  qui arrive à sa date (la couche DDM seulement si la question porte sur l'épicerie ou les DDM).
- **R4. Démarque anticipée.** Au plus tard deux jours avant la DLC, le produit reçoit un sticker
  -30 % ; au plus tard la veille de la DLC, -50 %. Le magasin peut stickeriser plus tôt. Pas de sticker sur les produits sous DDM ni sur les fruits et légumes,
  qui sont regroupés dans un « panier fraîcheur » à prix fixe. *Connue de* Sandrine. *Sort si* l'apprenant
  demande comment on essaie de vendre un produit proche de sa date.
- **R5. Délai du don.** Un produit à DLC ne peut être donné que s'il lui reste au moins 48 h quand
  l'association le prend. Un produit stickerisé la veille de sa DLC n'est donc plus donnable : il
  faut choisir entre sticker et don au plus tard deux jours avant la DLC. *Connue de* Sandrine,
  qui le dit ainsi : « il faut qu'il reste deux jours quand l'asso passe » (elle ne connaît pas le
  texte). Elle cite alors ses jours de passage (mardi et vendredi, vers 10 h). *Sort si* l'apprenant
  demande ce qui part au don et à quel moment, ou pourquoi on ne donne pas tout ce qui n'est pas
  vendu.
- **R6. Conventions de don.** Seuls les 22 magasins sous convention donnent. L'association passe
  une ou deux fois par semaine, à jour fixe ; la liste des conventions et des jours de passage
  est dans un fichier Excel du siège. Les 6 magasins de plus de 400 m² sont obligés de proposer
  une convention. *Connue de* Sandrine (le réseau, à peu près), Hélène (l'obligation : « on est en
  règle »). *Sort si* l'apprenant demande si tous les magasins donnent ou qui organise le don.
- **R7. Codes motif.** Six codes, choisis sur le terminal portable : 01 casse, 02 périmé, 03 abîmé ou qualité, 04 don,
  05 consommation interne (dégustation, personnel), et 06 « vol constaté », créé en janvier 2025
  et utilisé dans les succursales seulement. Le 06 entre dans la démarque connue ; il pèse moins
  de 0,1 % du CA. *Connue de* Thomas (la liste). *Sort si* l'apprenant demande comment on enregistre la
  raison d'une perte.
- **R8. Valorisation.** L'ERP valorise la démarque au prix d'achat HT. Depuis 2025, Thomas
  recalcule les taux au prix de vente HT pour le reporting de direction, à la demande d'Hélène,
  « pour que ça parle ». La prime (R13) et le taux de Sandrine sont au prix de vente. *Connue de*
  Thomas. *Sort si* l'apprenant demande si les montants sont au prix d'achat ou de vente, ou d'où vient le
  chiffre de 2,4 M€.
- **R9. Rythme des commandes.** Ultra-frais (produits laitiers, traiteur, boucherie libre-service) :
  commande du magasin avant 11 h, livraison le lendemain avant 7 h. Fruits et légumes : commande
  avant 14 h, livraison le lendemain. *Connue de* Karim et de Sandrine. *Sort si* l'apprenant demande
  comment et quand un magasin commande.
- **R10. Suggestion de commande.** Couche 1 : l'ERP propose une quantité par référence, calculée
  sur les ventes, que le magasin peut modifier. *Sort si* l'apprenant demande sur quelle base le magasin
  commande. Couche 2 : la quantité est la moyenne des ventes du même jour de la semaine sur les
  quatre dernières semaines, moins le stock théorique ; elle ne neutralise pas les semaines de
  promotion, donc elle est trop haute pendant quatre semaines après une promotion. *Sort si* l'apprenant
  demande comment la suggestion est calculée, ou pourquoi les magasins la corrigent. *Connue de*
  Karim (le calcul) ; Sandrine sait seulement qu'elle est « folle après les promos » et qu'elle la
  corrige à la main.
- **R11. Colisage.** On commande par colis entiers (yaourts par 12, salades par 6, jambon par
  10). Les fournisseurs imposent le colis ; l'entrepôt ne fait pas de dégroupage, sauf sur une
  liste de 80 références. Dans les magasins de moins de 200 m², un colis représente parfois plus
  que les ventes sur toute la durée de vie du produit. *Connue de* Karim (règle et liste de
  dégroupage), Sandrine (le vécu). *Sort si* l'apprenant demande si on peut commander à l'unité ou
  pourquoi un magasin commande plus qu'il ne vend.
- **R12. Promotions.** Couche 1 : le plan promotionnel est fixé par la centrale six semaines à
  l'avance ; les quantités sont implantées d'office dans chaque magasin selon sa catégorie (A, B
  ou C selon son CA), sans commande du magasin ; à la fin de l'opération, le reste repasse au prix
  normal. *Sort si* l'apprenant demande qui décide des quantités en promotion. Couche 2 : un magasin peut
  réduire sa quantité jusqu'à trois semaines avant l'opération, par un formulaire à la centrale.
  Karim croit le délai de dix jours **[voulu]** ; le formulaire, qui indique bien trois semaines,
  est dans un dossier partagé que seul Thomas sait retrouver. *Sort si* l'apprenant demande si un magasin
  peut refuser ou réduire (réponse de Karim : dix jours), puis le vrai délai seulement si l'apprenant
  demande à voir le formulaire ou la règle écrite. *Connue de* Karim (couche 1, et couche 2 avec
  le mauvais délai), Thomas (il retrouve le formulaire si on le lui demande).
- **R13. Prime des responsables de magasin.** Dans les succursales, une part variable allant
  jusqu'à 8 % du salaire annuel dépend du taux de démarque connue du magasin (objectif : moins
  de 2,5 % du CA, au prix de vente). *Connue de* Hélène et Sandrine. Sandrine ne l'évoque jamais
  d'elle-même ; elle la confirme si l'apprenant demande comment elle est évaluée, ou ce qui changerait pour
  elle si la démarque était mieux mesurée. Hélène la cite si on lui demande comment on motive les
  magasins.
- **R14. Franchisés.** Le contrat de franchise interdit d'imposer un outil ou une procédure aux
  franchisés ; la centrale peut seulement recommander. Ils n'utilisent pas toujours les codes
  motif et envoient un fichier Excel mensuel de démarque. Toute extension aux franchisés passe par
  le comité des franchisés (trimestriel, prochain le 14 janvier 2027). *Connue de* Hélène (contrat,
  comité), Thomas (fichiers). *Sort si* l'apprenant demande si tous les magasins fonctionnent de la même
  façon.
- **R15. Reprises fournisseurs.** Trois fournisseurs de produits laitiers reprennent les invendus
  contre un avoir, à condition de les rendre avant la DLC. Une reprise n'est pas de la démarque.
  *Connue de* Karim. *Sort si* l'apprenant demande si tous les invendus sont perdus, ou s'il y a des
  accords avec les fournisseurs sur les invendus. La question « que devient le stock après une
  promotion ? » ne suffit pas.
- **R16. Durée de vie à réception (DVR).** Chaque référence à DLC a une durée de vie minimale
  garantie à la livraison au magasin, fixée au contrat fournisseur (exemples : yaourts 21 jours,
  traiteur 5 jours, boucherie libre-service 4 jours). Elle est stockée dans le référentiel
  articles. *Connue de* Karim (la règle), Thomas (le champ). *Sort si* l'apprenant demande combien de
  temps un produit reste vendable après livraison, ou si on peut estimer les dates des produits
  en stock.
- **R17. Carte de fidélité.** Règle interne : les données de la carte ne sortent du service
  marketing qu'agrégées, après avis du délégué à la protection des données (cabinet externe,
  délai d'environ un mois). *Connue de* Thomas ; Hélène dit seulement « c'est le marketing ».
  *Sort si* l'apprenant demande s'il peut utiliser les données de la carte de fidélité.
- **R18. Les stickers ne sont pas de la démarque.** Un sticker -30 % ou -50 % est une remise
  enregistrée en caisse sur la ligne de vente (code remise « DA », démarque anticipée). Elle
  n'entre pas dans la démarque : stickeriser plus tôt fait baisser la démarque connue, mais coûte
  de la marge. *Connue de* Thomas (le code et le montant, environ 350 k€ en 2025). Sandrine dit
  « depuis que je stickerise plus tôt, ma démarque a baissé » si on lui demande ce qui marche
  contre la démarque ; elle ne fait pas le lien avec la marge. *Sort si* l'apprenant demande comment les
  stickers sont enregistrés, ce qu'ils coûtent, ou ce qui marche contre la démarque.

## 6. Les données et leurs défauts

### Ce qui existe

Thomas décrit ces données si l'apprenant les demande (« qu'y a-t-il dans la base ? », « quel
historique ? »).

| Donnée | Contenu | Historique | Accès |
|---|---|---|---|
| Lignes de tickets | magasin, date, heure, article, quantité, prix, remise (dont code DA) | depuis janvier 2023, tous magasins, franchisés compris | base de reporting, chaque nuit |
| Démarque connue | total en valeur par motif, par magasin et par jour | depuis janvier 2023, succursales seulement | base de reporting, chaque nuit |
| Mouvements de stock | chaque sortie de démarque, article par article, en quantité, sans motif ni heure | depuis janvier 2025 | ERP seulement ; extraction vers la base à créer par Thomas (environ trois jours de son temps) |
| Stock théorique | une photo par article, par magasin et par jour | quotidien depuis janvier 2025, mensuel avant | base de reporting ; succursales seulement (les franchisés gèrent leur stock dans leur propre outil) |
| Réceptions | magasin, date, article, quantité reçue | depuis janvier 2023 | base de reporting |
| Commandes des magasins | magasin, date, article, quantité suggérée, quantité commandée | depuis janvier 2024 | base de reporting |
| Référentiel articles | code, libellé, famille, rayon, fournisseur, colisage, DVR | état courant | base de reporting |
| Référentiel magasins | code, ville, surface, statut (succursale ou franchisé), catégorie promotionnelle (A, B, C), version de caisse | état courant | base de reporting |
| Reprises fournisseurs (R15) | magasin, date, article, quantité reprise | depuis janvier 2024 | base de reporting |
| Liste de dégroupage | les 80 références que l'entrepôt dégroupe | état courant | Excel de Karim |
| Plan promotionnel | opération, semaines, article, catégorie de magasin, quantité implantée | depuis 2024 | Excel de la centrale (Karim) |
| Conventions de don | magasin, association, jours de passage | état courant | Excel du siège |
| Fichiers des franchisés | démarque mensuelle (voir DD3) | variable | e-mails à Thomas |

Ce qui n'existe pas : la DLC des produits en stock (DD8), l'ordre de parcours des rayons dans
chaque magasin, le détail de la démarque par article avec motif (seulement via le connecteur
Caissalis, section 7).

**Diffusion vers les magasins.** Chaque magasin a une adresse e-mail lue sur le PC du bureau et
une imprimante. Les terminaux portables (commande, démarque) ne peuvent pas être modifiés pendant
le gel ni pendant la migration. L'outil de restitution du siège a 5 licences, toutes au siège ;
une licence supplémentaire coûte 35 € HT par mois et par utilisateur. Le chargement nocturne de
la base se termine entre 5 h 30 et 7 h 30 ; il finit après 7 h environ un jour sur cinq. *Connu
de* Thomas. *Sort si* l'apprenant demande comment une information peut arriver en magasin, ou à quelle
heure les données de la veille sont prêtes.

### Les défauts

- **DD1. Motif par défaut.** Dans les succursales, environ 60 % de la démarque connue est saisie en
  02 (périmé), parce que c'est le code sélectionné par défaut sur le terminal, même pour la casse
  ou l'abîmé. *Connu de* Sandrine (« on met tout en périmé, c'est plus rapide ») ; Thomas trouve la
  part de 02 « bizarre » mais n'a pas creusé. *Sort si* l'apprenant demande comment la démarque est saisie
  en pratique, ou si les motifs sont fiables (à Thomas ; Sandrine se ferme sur le mot
  « fiable »).
- **DD2. Dates de saisie décalées.** La démarque est souvent saisie en bloc en fin de journée,
  parfois le lendemain matin ; certains magasins saisissent toute la semaine le lundi. La date
  enregistrée est celle de la saisie, pas celle du retrait. *Connu de* Sandrine (pratique), Thomas
  (il voit un pic chaque lundi). *Sort si* l'apprenant demande à quel moment la démarque est saisie, ou
  pourquoi le lundi est si élevé.
- **DD3. Fichiers des franchisés.** Un format par magasin, des libellés de produits en texte libre
  sans code article, des montants tantôt au prix de vente, tantôt en quantités. Trois franchisés
  n'envoient plus rien depuis mars 2026. *Connu de* Thomas. *Sort si* l'apprenant demande à quoi
  ressemblent les fichiers des franchisés.
- **DD4. Nomenclature refondue.** La nomenclature produits est passée de 180 à 120 familles en
  janvier 2026. L'historique 2025 reste sur l'ancienne ; la table de correspondance couvre
  environ 70 % des références. *Connu de* Thomas et Karim. *Sort si* l'apprenant demande si on peut
  comparer avec l'année dernière par famille.
- **DD5. Produits au poids.** Les fruits et légumes en vrac sont reçus en colis et vendus au kilo ;
  l'ERP convertit avec un poids moyen par colis fixé une fois pour toutes. Les écarts apparaissent
  en démarque inconnue. *Connu de* Karim (le poids moyen), Thomas (la conversion). *Sort si* l'apprenant
  demande comment sont gérés les produits vendus au poids.
- **DD6. Réceptions non contrôlées.** Dans environ deux tiers des cas, le magasin valide le bon de
  livraison sans compter. Les manquants de l'entrepôt passent en démarque inconnue. *Connu de*
  Sandrine. *Sort si* l'apprenant demande comment se passe une réception.
- **DD7. Doublons de tickets.** Lors de la migration des 9 magasins en mai 2026, les tickets de la
  semaine de bascule (11 au 17 mai) ont été chargés deux fois dans la base de reporting. Le risque
  se reproduira à chaque migration de 2027 si rien n'est fait. *Connu de* Thomas. *Sort si* l'apprenant
  demande si les données de caisse sont complètes et fiables, ou ce qui se passe lors d'une
  migration.
- **DD8. Aucune DLC dans les systèmes.** Aucun système ne connaît la DLC des produits en stock :
  les lots ne sont pas suivis, la date n'existe que sur l'emballage. *Connu de* Thomas et
  Sandrine. *Sort si* l'apprenant demande si on connaît la date des produits en rayon.
- **DD9. Produits jetés sans scan.** Les jours chargés, une partie des produits retirés part à la
  benne sans être scannée. Elle n'apparaît pas en démarque connue mais en inconnue à l'inventaire.
  Sandrine estime que c'est « pas grand-chose » ; c'est en réalité environ un cinquième de sa
  démarque. *Connu de* Sandrine seule. *Sort si* l'apprenant demande ce qui se passe les jours de rush,
  ou si tout ce qui est jeté est enregistré. Elle ne le dit que si elle a confiance (voir son
  profil).
- **DD10. DVR incomplète.** Le champ de durée de vie à réception (R16) n'est rempli que pour 55 %
  des références d'ultra-frais ; les références créées depuis 2024 en ont presque toutes une.
  *Connu de* Thomas. *Sort si* l'apprenant demande si le champ est fiable ou rempli partout.
- **DD11. Stock théorique faux après une erreur.** Un produit mal scanné en caisse (le yaourt aux
  fraises passé comme yaourt nature) fausse le stock théorique des deux références jusqu'au
  prochain inventaire. *Connu de* Sandrine et Thomas. *Sort si* l'apprenant demande si le stock affiché
  correspond à ce qu'il y a en rayon.

## 7. Les contraintes

- **Budget** : 230 k€ HT jusqu'à fin juin 2027, hors salaires internes. Les deux missions externes
  (PO et data engineer) en consomment environ 212 k€ : il reste environ 18 k€. Le connecteur
  Caissalis (14 k€), des licences de restitution pour les magasins et l'outil du salon (EV1,
  36 k€ sur douze mois) se disputent ce reliquat. Toute dépense externe de plus de 10 k€ doit être
  signée par Hélène, qui veut d'abord comprendre « à quoi ça sert ».
- **Connecteur Caissalis.** Couche 1 : la base n'a, pour la démarque, que le total par motif, par
  magasin et par jour. *Sort si* l'apprenant demande ce que contient la base sur la démarque. Couche 2 :
  le détail par article avec motif et heure n'est disponible que sur la nouvelle version de
  caisse, via un export nocturne en option payante (14 k€, huit semaines de délai, installation comprise, après la
  commande signée). *Sort si* l'apprenant demande le détail des produits démarqués avec leur motif. Couche
  3 : l'installation touche le serveur de caisse de chaque magasin, donc elle est interdite
  pendant le gel (jusqu'au 4 janvier) et pendant la migration (février à avril). Seule fenêtre
  avant le comité : du 5 au 29 janvier 2027, ce qui impose une commande signée au plus tard le
  vendredi 4 décembre 2026. Signée plus tard, l'export arrive en mai, après le comité. *Sort si*
  l'apprenant demande quand le connecteur pourrait être en place, ou ce qui contraint son installation.
  *Connu de* Thomas.
- **Migration des caisses** : les 19 autres succursales migrent de février à avril 2027. Thomas
  refuse toute nouvelle demande sur les caisses pendant cette période.
- **Gel de fin d'année** : voir D5.
- **Comité des franchisés** : 14 janvier 2027, seul moyen d'associer les franchisés avant avril.
- **Inventaire de décembre** : du 28 au 30 décembre 2026, résultats vers le 20 janvier 2027.
- **Échéance imposée** : comité stratégique du 18 mars 2027.

## 8. Les pièges pédagogiques, par concept

1. **Produit, problème, valeur, rôle du PO.** Hélène présente une solution (« un tableau de bord
   et de l'IA ») comme le besoin. Le piège : écrire le backlog du tableau de bord. Attendu : faire
   émerger le problème (perte en magasin, constat trop tardif) et l'utilisateur principal (le
   responsable de magasin). Second piège : Hélène demande à l'apprenant de « décider ce qui est le mieux
   pour les magasins » ; le PO décide de l'ordre du backlog, pas des règles métier. Troisième :
   EV1, où le PO doit défendre la vision contre une solution achetée sur un coup de cœur.
2. **Backlog produit.** Karim arrive avec son fichier de 25 demandes en priorité haute et dit
   « voilà le backlog ». Thomas a sa propre liste de tâches techniques (migration des caisses).
   Attendu : un seul backlog, tenu par le PO, où ces demandes deviennent des entrées à
   reformuler et à ordonner.
3. **Hiérarchie.** Hélène parle de « l'IA de prévision des commandes » comme d'une tâche ;
   « réduire la démarque » est un objectif, pas un epic ; Karim appelle « story » un projet de
   plusieurs mois (« refaire le colisage »).
4. **User story.** Hélène dicte : « En tant que directrice, je veux un tableau de bord afin de
   réduire la démarque » (solution dans le « je veux », « afin de » circulaire). Attendu :
   remonter par des « pourquoi ? » jusqu'à la décision que le tableau de bord doit éclairer.
5. **Rôles et personas.** Thomas propose « en tant que base de données » ; Karim dit « en tant que
   magasin » ; tentation de « en tant qu'utilisateur ». Distinguer le responsable de magasin (qui
   commande), l'employé du rayon frais (qui fait la tournée des dates avant l'ouverture), le
   responsable d'un magasin franchisé (non tenu par les procédures) et l'acheteur de la centrale.
   Piège de représentativité : Sandrine n'est pas le responsable type (petit magasin, nouvelle
   caisse, faible démarque déclarée, hors des 10 magasins les plus touchés) ; un grand magasin comme
   celui de Franck a d'autres problèmes.
6. **INVEST.** Thomas propose une story « charger le plan promotionnel dans la base » dont
   dépendraient trois autres : elle crée une dépendance entre stories (I) et n'a pas de valeur
   visible seule (V) ; mieux vaut charger le plan dans la première story qui en a besoin.
   « Prédire les ventes avec l'IA » n'est pas estimable (E) ; « fiabiliser les données de
   démarque » n'a ni valeur visible ni test (V, T).
7. **Critères d'acceptation et règles.** « Produit à risque » est flou : l'apprenant doit le définir par
   une règle (couverture du stock contre durée de vie restante estimée, R16). Cas limites :
   référence sans DVR (DD10), produit en promotion, produit donnable ou non selon l'heure de
   passage de l'association (R5 contre R4). Piège d'indicateur : un critère « la démarque connue
   baisse » est trompeur (R18, DD9).
8. **Découpage vertical.** Tentation : sprint 1 « charger les caisses et l'ERP », sprint 2
   « calculer », sprint 3 « afficher ». Attendu : une première tranche qui sert seule, par
   exemple une famille (les yaourts) dans un magasin pilote, de la donnée à la liste lue par
   Sandrine.
9. **Hors périmètre et dépendances.** Hors périmètre tentants : le vol (vidéosurveillance,
   antivol), une appli grand public de paniers anti-gaspillage, la carte de fidélité (R17), les
   franchisés. Dépendances cachées : le connecteur Caissalis (fenêtre de janvier, signature
   d'Hélène au plus tard le vendredi 4 décembre), l'absence de DLC dans les systèmes (DD8), l'extraction des
   mouvements de stock (temps de Thomas), le comité des franchisés, la migration des caisses.
10. **DoR et DoD.** DoR : la règle de calcul est validée par le métier, la donnée existe et est
    accessible, le magasin pilote est d'accord. DoD : liste disponible à une heure convenue avec
    les magasins (exigence commune à toutes les vues magasin, à mettre dans la DoD et non dans
    chaque story), vérifiée sur un jour réel par un responsable pilote, montants au prix
    de vente HT comme la prime et le taux du magasin (R8), base de valorisation indiquée sur chaque
    vue. Piège : écrire « avant 7 h » sans savoir que le chargement finit parfois à
    7 h 30 ; l'heure se négocie avec Sandrine et Thomas.
11. **Priorisation, valeur/effort, MoSCoW, MVP, story map.** Hélène classe tout en « Must ».
    Valeur/effort : l'IA de prévision (effort énorme, valeur incertaine) contre la suggestion
    corrigée des promotions (effort faible, cause réelle) ; le piège est de prioriser l'IA parce
    que la directrice la demande. Faux MVP : le tableau de bord du réseau entier pour le siège
    (constate sans faire agir, déclenche D2, exige les franchisés). Faux indicateur de succès : la
    démarque connue (voir section 1). Story map naturelle : la journée d'un magasin (commande,
    réception, tournée des dates, démarque anticipée, don, saisie des pertes, clôture).
12. **Cycle de vie, refinement, sélection.** Le terme « démarque » (dons inclus ou non, D3) se
    règle en refinement avec un arbitrage d'Hélène, pas dans une story « définir la démarque ».
    États : une story qui dépend du connecteur est marquée bloquée et reste hors du sprint tant
    que la commande n'est pas signée ; une story démontrée sur données passées en décembre (D5)
    n'est pas « terminée » tant qu'un responsable pilote ne l'a pas vérifiée sur un jour réel.
13. **Choix d'outil et structure du backlog.** Thomas propose l'outil de tickets du prestataire
    d'infogérance (« c'est déjà payé »), Karim veut garder son Excel. Attendu : un outil simple,
    partagé, adapté à une équipe de trois ; deux niveaux (epic, story) suffisent. Signe qu'un
    niveau est de trop : la plupart des features ne contiennent qu'une story.

## 9. Le corrigé indicatif (pour comparer, jamais pour imposer)

### Vision

Voir section 1. Toute vision qui place le responsable de magasin comme utilisateur principal,
vise l'action avant la perte et fixe un objectif mesurable sur un périmètre pilote, avec un
indicateur qui ne dépend pas de la saisie des pertes, est acceptable.

### Epics

- **E1. Repérer chaque matin les produits frais à risque** (magasin).
- **E2. Ajuster les quantités commandées et reçues** (magasin et centrale).
- **E3. Préparer le don** (magasins sous convention).
- **E4. Suivre la démarque de son magasin** (magasin).
- **E5. Mesurer l'effet du pilote** (siège).
- **E6. Étendre aux franchisés** (plus tard, après le comité des franchisés).

### Stories exemplaires

*Produit à risque* : référence dont le stock théorique couvre plus de jours de vente que sa durée
de vie restante estimée (DVR moins les jours écoulés depuis la dernière réception), R16. C'est une
estimation, faute de DLC dans les systèmes (DD8) ; la tournée vérifie la date réelle sur
l'emballage.

1. **(E1) Liste des produits laitiers à risque.** En tant que responsable d'un magasin pilote, je
   veux connaître chaque matin, avant ma commande de 11 h, les produits laitiers à risque, afin de
   les stickeriser ou de réduire ma commande avant qu'ils soient perdus.
   - Étant donné un yaourt reçu il y a 5 jours avec une DVR de 21 jours, un stock de 60 et des
     ventes moyennes de 3 par jour, quand la liste est produite, alors il y figure (couverture de
     20 jours pour 16 jours restants).
   - Étant donné une référence sans DVR, quand la liste est produite, alors elle n'est pas
     évaluée et est comptée dans « références non évaluées ».
   - Règles et données : R9 (heure de commande), R16, DD8, DD10, DD11 ; stock théorique,
     réceptions, lignes de tickets, référentiel articles.
2. **(E1) Même liste pour le traiteur.** Même story sur la famille traiteur (DVR courte, 5 jours).
   Tranche suivante, par famille.
3. **(E1) Liste groupée pour la tournée des dates.** En tant qu'employé du rayon frais qui fait la
   tournée des dates avant l'ouverture, je veux la liste groupée par rayon, afin de la faire en un
   seul passage avant 8 h.
   - Étant donné trois produits à risque dans deux rayons, quand j'ouvre la liste, alors ils sont
     groupés par rayon.
   - Règles et données : R4 (la tournée décide du sticker) ; champ rayon du référentiel. L'ordre
     de parcours des rayons n'existe pas : à demander à Sandrine si elle le juge utile. La
     tournée commence à 7 h 15 alors que le chargement finit parfois à 7 h 30 (section 6) :
     l'heure de mise à disposition se règle dans la DoD.
4. **(E2) Suggestion corrigée des promotions.** En tant que responsable de magasin, je veux voir,
   au moment de commander l'ultra-frais, la suggestion calculée sans les semaines de promotion,
   afin de ne pas commander pour des ventes qui ne reviendront pas.
   - Étant donné une référence en promotion la semaine dernière, quand la suggestion corrigée est
     calculée, alors cette semaine est remplacée par la moyenne des trois autres.
   - Étant donné une référence sans promotion sur quatre semaines, alors la suggestion corrigée
     est égale à celle de l'ERP.
   - Règles et données : R9, R10, R12 ; lignes de tickets, stock théorique, commandes des
     magasins (suggestion de l'ERP), plan promotionnel (Excel de Karim, à obtenir à chaque mise à
     jour : dépendance à organiser avec lui).
5. **(E2) Colis trop gros.** En tant qu'acheteur de la centrale, je veux la liste des couples
   magasin et référence où un colis dépasse les ventes sur la durée de vie, afin de proposer le
   dégroupage ou un colis plus petit au fournisseur.
   - Étant donné un colis de 12, une DVR de 21 jours et des ventes de 0,4 par jour (environ 8 sur
     la durée de vie), alors le couple figure dans la liste.
   - Étant donné une référence déjà dans la liste de dégroupage de l'entrepôt, alors elle n'y
     figure pas. Les références sans DVR (DD10) sont listées à part.
   - Règles et données : R11, R16, DD10 ; référentiel articles (colisage, DVR), lignes de tickets,
     liste de dégroupage (Excel de Karim).
6. **(E2) Quantité de promotion à réduire.** En tant que responsable de magasin, je veux savoir,
   quatre semaines avant une opération, les références dont la quantité implantée dépasse mes
   ventes habituelles en promotion, afin de demander une réduction avant la date limite.
   - Étant donné une quantité implantée de 48 et des ventes en promotion passées de 20 en moyenne,
     alors la référence est signalée avec la date limite de demande (trois semaines avant).
   - Règles et données : R12 ; plan promotionnel, référentiel magasins (catégorie), lignes de
     tickets.
7. **(E3) Produits à mettre de côté pour le don.** En tant que responsable d'un magasin sous
   convention, je veux voir, la veille du passage de l'association, les produits à risque qui
   auront encore au moins 48 h de durée de vie au passage, afin de les mettre de côté au lieu de
   les stickeriser.
   - Étant donné un passage le mardi à 10 h et un produit dont la DLC estimée est le jeudi, alors
     il figure dans la liste du lundi (plus de 48 h au passage).
   - Étant donné une DLC estimée le mercredi, alors il n'y figure pas (moins de 48 h au passage)
     et reste dans la liste de démarque anticipée.
   - Règles et données : R4, R5, R6, R16, DD8, DD10 ; fichier des conventions (Excel du siège).
8. **(E4) Démarque de la semaine.** En tant que responsable de magasin, je veux voir chaque lundi la
   démarque connue et les remises de stickers de ma semaine passée, comparées à mes quatre
   semaines précédentes, afin de voir où partent mes pertes et ce que me coûtent les stickers.
   - Dons affichés à part (D3) ; autres motifs regroupés, car le motif est peu fiable (DD1).
   - Étant donné un total du lundi supérieur à deux fois la moyenne des autres jours, alors il est
     signalé comme pouvant contenir des saisies de la semaine précédente (DD2).
   - Étant donné des remises DA en hausse et une démarque connue en baisse, alors les deux sont
     affichées côte à côte, sans total qui les compense (R18).
   - Règles et données : R1, R7, R8, R18 ; totaux par motif et par jour (sans connecteur),
     lignes de tickets (remises DA).
9. **(E4) Démarque par famille.** Même besoin par famille, pour les magasins pilotes, à partir des
   mouvements de stock de l'ERP (tous motifs confondus). Dépend de l'extraction à créer par
   Thomas. Comparaison avec 2025 limitée par la nomenclature refondue (DD4). Le détail par
   famille et par motif dépend en plus du connecteur Caissalis : story bloquée tant que la
   commande n'est pas signée.
10. **(E5) Pilotes contre témoins.** En tant que directrice générale, je veux comparer chaque mois
    les magasins pilotes aux autres succursales sur l'écart entre quantités reçues et vendues en
    ultra-frais et sur les remises de démarque anticipée, afin de décider de l'extension au
    réseau.
    - Comparaison par groupe, sans classement nominatif (D2, R13) ; franchisés exclus (R14).
    - Étant donné un magasin témoin en semaine de migration de caisse, alors cette semaine est
      exclue de la comparaison (DD7).
    - Étant donné le mois de janvier 2027, alors la comparaison porte aussi sur janvier 2026, à
      périmètre de magasins constant.
    - Limite à dire à Hélène : les pilotes sont volontaires, donc l'effet sera surestimé.
    - Règles et données : R14, R15, R18 ; réceptions, reprises fournisseurs, lignes de tickets
      (dont remises DA).

### MVP plausible

Cinq succursales pilotes volontaires parmi les 9 sur la nouvelle version de caisse, dont
Questembert. Stories 1, 3, 4, 8 et 10 sur les produits laitiers, puis story 2. Diffusion par
e-mail et impression au bureau (pas de licence, pas de terminal touché). Démonstration sur données
passées à Sandrine en décembre, pilote en magasin à partir du 5 janvier 2027, environ dix semaines
de mesure pour le comité du 18 mars. Décision à porter à Hélène au plus tard le vendredi 4 décembre : commander ou
non le connecteur (story 9 par motif). Hors MVP : tableau de bord du réseau entier, prévision par
IA (EV1), franchisés, vol, carte de fidélité, fruits et légumes (DD5 à traiter d'abord).

### Questions clés que l'apprenant devrait poser

- À Hélène : quelle décision voulez-vous prendre en mars ? Qui doit agir pour réduire la
  démarque ? Les dons comptent-ils ? Comment sont évalués les responsables ? Qui encadre les
  magasins ?
- À Thomas : comment est calculé le 4,1 % ? À quelle fréquence ? Prix d'achat ou de vente ? Que
  sait-on des produits démarqués, au détail ? Connaît-on les dates des produits en stock ? À
  quelle heure les données sont-elles prêtes ? Comment sont enregistrés les stickers ?
- À Karim : comment est calculée la suggestion de commande ? Qui fixe les quantités de promotion ?
  Peut-on commander à l'unité ? Combien de temps un produit reste-t-il vendable après
  livraison ?
- À Sandrine : racontez-moi votre journée. Que faites-vous d'un produit qui arrive à sa date ?
  Comment saisissez-vous les pertes, et à quel moment ? Qu'est-ce qui part au don ? Les autres
  responsables vivent-ils la même chose ?

## 10. Consignes de jeu pour l'agent métier

- Chaque réplique commence par « [Prénom, rôle] », par exemple « [Sandrine, magasin] ». Un seul
  interlocuteur par réplique, sauf si l'apprenant organise une réunion à plusieurs : dans ce cas, une
  ligne par personne, chacune préfixée.
- Ne révèle que ce qui est demandé. Une question vague (« qu'est-ce qui pose problème ? ») reçoit
  une réponse vague, dans le registre de l'interlocuteur. Une règle sort seulement quand la
  question des sections 5, 6 ou 7 (ou une question équivalente) est posée ; pour une règle en
  couches, chaque couche attend sa propre question.
- Une question qui en contient plusieurs reçoit une réponse sur la partie que l'interlocuteur
  connaît ; il renvoie le reste vers la bonne personne.
- Garde le flou réaliste : approximations (« à peu près », « souvent »), oublis, renvoi vers un
  autre interlocuteur quand le sujet n'est pas le sien. Un interlocuteur interrogé sur ce qu'il
  ignore le dit ou se trompe de bonne foi, conformément à son profil.
- Le métier ne propose jamais de story ni de découpage. Il peut demander une solution (« un
  tableau de bord », « un algorithme »), c'est voulu.
- Question fermée orientée : si elle propose une idée de l'apprenant que l'interlocuteur n'a pas
  apportée (« une liste le matin, ça vous irait ? »), il répond « pourquoi pas » sans conviction,
  jamais par une validation enthousiaste. Si elle reprend sa propre solution ou un fait qu'il
  croit vrai, son profil prime : il acquiesce et en rajoute (Hélène ajoute le classement, Karim
  accuse les magasins). Si elle mêle les deux (sa solution plus des précisions de l'apprenant : fréquence,
  maille, jour d'envoi), il acquiesce sur sa propre idée et répond « pourquoi pas » sans conviction
  sur les ajouts de l'apprenant.
- Un détail absent des coulisses peut être inventé s'il ne contredit rien et ne révèle aucune
  règle ; l'agent le note dans `learner/journal-tp.md`, dans la même réponse que la réplique (colonne
  « Information révélée » : « inventé : … »), pour le garder d'une session à l'autre.
- Les contradictions marquées [voulu] restent les mêmes d'une session à l'autre. Chaque règle,
  défaut ou chiffre révélé est noté dans `learner/journal-tp.md`, et l'agent relit le journal avant de
  répondre pour ne pas se contredire.
- EV1 se déclenche une seule fois, selon les conditions de la section 4.
- Aucune marque, entreprise ou personne réelle n'est citée en jeu.
- Le professeur reprend la main après chaque production de l'apprenant ou quand l'apprenant dit « prof », jamais
  dans la même réplique que le métier.
