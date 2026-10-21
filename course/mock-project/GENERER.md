# Générer le projet factice du TP

Brief pour une session dédiée. L'apprenant la lance avec : « lis `course/mock-project/GENERER.md` et
exécute-le ». Elle tourne en parallèle d'une session de cours : ne touche à rien hors de
`course/mock-project/`.

## 1. Le contexte

- Le dossier `parcours-po/` est un parcours où un agent professeur forme l'apprenant (profil dans
  `learner/apprenant.md`) au métier de Product Owner. Lis `CLAUDE.md` (surtout « Le
  TP »), `learner/apprenant.md` et le tableau des concepts de `learner/parcours.md`. Ne les modifie pas.
- Après le cours, l'apprenant fera un **TP en jeu de rôle** : il mène un projet data de bout en bout,
  jusqu'à un backlog prêt pour le premier sprint. L'agent du TP joue le métier (deux à quatre
  interlocuteurs) et le professeur.
- Ta mission : écrire le projet factice dont l'agent du TP aura besoin pour jouer le métier de
  façon crédible et cohérente, sur plusieurs sessions.

## 2. Le domaine

Une **chaîne régionale fictive d'environ 40 supérettes de produits frais**, avec un problème de
**démarque** : produits jetés, périmés, abîmés ou volés. La direction lance un projet data pour
la réduire.

- Invente un nom d'enseigne, une région et des personnes fictives. Aucune marque, entreprise ou
  personne réelle.
- Le cadre est la France, avec des montants en euros.
- Les sources de données sont réalistes : caisses, stocks, commandes fournisseurs, réceptions,
  fichiers Excel tenus par les magasins, éventuellement la carte de fidélité.
- Les chiffres (chiffre d'affaires, taux de démarque, volumes) doivent être plausibles et
  cohérents entre eux. Ils n'ont pas besoin d'être exacts.
- Une contrainte réglementaire peut servir si elle crée une vraie difficulté métier, par exemple
  les dates limites (DLC, DDM) ou le RGPD pour la carte de fidélité. Vérifie-la avant de
  l'écrire, ou présente-la comme une règle interne de l'enseigne.

## 3. Les fichiers à produire

### `course/mock-project/README.md` : ce que l'apprenant peut lire

C'est ce qu'un PO saurait le premier jour de sa mission, une à deux pages :
- l'entreprise et son problème, vus par la direction (une demande assez vague) ;
- les interlocuteurs : nom, rôle, ce qu'on attend d'eux. Rien sur leurs motivations cachées ;
- les sources de données connues, sans leurs défauts ;
- le cadre de la mission : budget, calendrier et équipe, en grandes lignes.

Aucune règle métier précise, aucune solution, aucun backlog.

### `course/mock-project/coulisses.md` : réservé à l'agent du TP

La vérité métier, que l'apprenant découvre seulement en posant les bonnes questions.

1. **Le vrai problème et la vision produit** que l'apprenant doit faire émerger. Ils diffèrent de la
   demande initiale de la direction.
2. **Les interlocuteurs**, entre deux et quatre. Pour chacun :
   - son objectif, ce qui le rend pénible ou méfiant ;
   - ce qu'il sait et ce qu'il ignore ;
   - sa façon de parler : vocabulaire, niveau de flou, tendance à demander des solutions
     (« je veux un dashboard »).
3. **Au moins deux désaccords** entre interlocuteurs, que le PO devra arbitrer ou faire
   arbitrer.
4. **Au moins dix règles métier**, numérotées. Pour chacune, indique quel interlocuteur la connaît
   et dans quelle condition il la révèle : la question qui la fait sortir.
5. **Au moins cinq défauts de données** : champs vides, codes incohérents entre magasins,
   ressaisies Excel, décalages de dates, doublons. Indique qui les connaît.
6. **Des contraintes** : budget, calendrier, dépendances externes (un fournisseur, l'éditeur de
   caisse, la DSI), une échéance imposée.
7. **Les pièges pédagogiques**, rangés par concept du parcours. Il en faut au moins une situation
   par concept, du concept 1 au concept 12, plus le concept 13 (choix d'outil). Exemples : une
   demande de solution déguisée en besoin, un acteur technique, une story trop grosse, un terme
   flou, une tentation de découpage par couche, une dépendance cachée, un hors-périmètre
   tentant, un faux MVP.
8. **Un corrigé indicatif**, réservé au professeur pour comparer et jamais pour imposer :
   - la vision ;
   - les epics ;
   - une dizaine de stories exemplaires avec leurs critères ;
   - un MVP plausible ;
   - les questions clés que l'apprenant devrait poser.
9. **Les consignes de jeu pour l'agent métier** :
   - chaque réplique est préfixée « [Prénom, rôle] » ;
   - il ne révèle que ce qui est demandé, avec un flou réaliste ;
   - il ne propose jamais de story ;
   - les contradictions entre interlocuteurs sont voulues et doivent rester cohérentes au fil des
     sessions.

Marque chaque contradiction voulue, par exemple « [voulu] », pour qu'une relecture ne la
corrige pas.

### `learner/journal-tp.md` : vide au départ

Un modèle de tableau : date, interlocuteur, question de l'apprenant, réponse donnée, information révélée
(numéro de règle ou de défaut). L'agent du TP le remplit pour rester cohérent d'une session à
l'autre.

## 4. Les critères d'acceptation

Chaque critère se vérifie sans débat :

1. Les trois fichiers existent, en français, sans tiret long ni flèche dans la prose (style de
   `CLAUDE.md`).
2. Le `README.md` ne contient aucune règle métier, aucun défaut de données, aucun désaccord et
   aucun élément du corrigé.
3. Les quantités minimales de `coulisses.md` sont atteintes : 2 à 4 interlocuteurs, au moins
   2 désaccords, au moins 10 règles, au moins 5 défauts de données.
4. Chaque règle et chaque défaut indique qui le connaît et ce qui le fait révéler.
5. Les concepts 1 à 13 ont chacun au moins une situation de piège.
6. Il n'y a aucune contradiction non marquée « [voulu] » : chiffres, noms, dates, règles.
7. Aucun nom d'entreprise, de marque ou de personne réelle n'apparaît.
8. Le corrigé est compatible avec les coulisses : chaque story s'appuie sur des règles et des
   données qui existent.

## 5. La batterie de tests

Fais chaque test par un sous-agent neuf, qui ne connaît que les fichiers qu'on lui donne.

1. **Fuite** : un sous-agent lit seulement `README.md` et liste tout ce qu'il peut en déduire
   des règles, des défauts et des désaccords. Compare avec les coulisses. Tout ce qui est
   déductible et n'aurait pas dû l'être est une fuite.
2. **Cohérence** : un sous-agent lit les trois fichiers et relève les incohérences non marquées
   « [voulu] ». Il les liste.
3. **Couverture** : un sous-agent vérifie les critères 3, 4, 5 et 8. Il répond par OK ou KO
   pour chaque critère, avec le détail des KO.
4. **Simulation** : un sous-agent joue le métier avec les règles de `CLAUDE.md` (section « Le
   TP ») et les coulisses. Un autre joue un apprenant débutant qui pose au moins huit questions, dont :
   - une question vague (« qu'est-ce qui pose problème ? ») ;
   - une demande de solution (« vous voulez un dashboard ? ») ;
   - une question fermée orientée ;
   - une question à un interlocuteur sur un sujet qu'il ne connaît pas ;
   - deux questions qui doivent faire sortir une règle précise.

   Un troisième sous-agent juge la transcription, avec un OK ou KO pour chacun de ces critères :
   - le métier n'a pas révélé plus que demandé ;
   - il n'a pas proposé de story ;
   - il est resté cohérent avec les coulisses ;
   - chaque interlocuteur a parlé selon son profil ;
   - les règles visées sont sorties aux bonnes questions.
5. **Réalisme** : un sous-agent jouant un PO senior juge si le projet est trop propre pour
   apprendre : besoins trop clairs, interlocuteurs trop coopératifs, données trop saines. Il
   propose au plus cinq durcissements.

## 6. La revue et la boucle

- Corrige tout ce qui est KO, applique les durcissements pertinents, puis relance les tests
  concernés. Fais au plus deux boucles.
- S'il reste un KO après deux boucles, ne force rien : signale-le dans le rapport.

## 7. Le rapport final

Il fait quinze lignes au plus et contient :
- les fichiers créés et leur taille ;
- le résultat de chaque test (OK ou KO, nombre de corrections, nombre de boucles) ;
- les points restés KO ;
- ce que l'agent du TP doit savoir pour démarrer.

L'apprenant lit ce rapport : n'y recopie pas le contenu des coulisses (règles, désaccords, défauts,
corrigé). C'est la seule précaution, elle ne s'applique pas à ton travail.

Termine par une ligne pour le mainteneur : date, fichiers, résultat des tests.
