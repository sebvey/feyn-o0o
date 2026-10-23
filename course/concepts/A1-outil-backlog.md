---
concept: A1
titre: Structurer le backlog dans un outil
---

# Structurer le backlog dans un outil

## Objectif
Dire ce qu'un PO règle dans l'outil du backlog, et pourquoi : les niveaux (et le niveau de
trop), le lien qui note une dépendance, y compris envers une autre équipe, et les états d'un
élément, où « fait » veut dire DoD remplie.

## L'essentiel
Le Scrum Guide ne parle ni d'outil de suivi, ni de niveau, ni de lien, ni d'état : il demande un
backlog transparent, visible et compris. L'outil propose des **réglages par défaut** (niveaux,
types de liens, états) que l'équipe change ; aucun n'est une règle de Scrum. Le PO dit ce qu'il
veut voir dans l'outil et pourquoi ; l'administrateur de l'outil fait le réglage, qui peut
toucher d'autres équipes. Le cours ne décrit pas où cliquer : les écrans changent d'un outil et
d'une version à l'autre.

## Consensus et choix d'école
- **Consensus** (Scrum Guide 2020) : ni outil de suivi, ni état, ni lien entre éléments, ni
  niveau ; d'autres pratiques peuvent s'employer dans le cadre. Le PO veille à ce que le
  backlog soit transparent, visible et compris. Un élément qui ne remplit pas la DoD ne fait
  pas partie de l'incrément. La rétrospective inspecte aussi les outils de l'équipe.
- **Ce que font les outils** (documentation des éditeurs, vérifiée pour Jira, Azure DevOps et
  Linear) :
  - niveaux par défaut : Jira, Epic > Story > Subtask (niveaux au-dessus seulement dans les
    offres Premium et Enterprise) ; Azure DevOps, processus Agile, Epic > Feature > User Story >
    Task. Dans Azure DevOps, on ne retire pas un niveau hérité : on le renomme, on désactive son
    type, et chaque équipe choisit les niveaux qu'elle affiche ;
  - liens de dépendance : aucun ne s'appelle « dépend de ». Jira, « blocks / is blocked by » ;
    Azure DevOps, « Predecessor / Successor » ; Linear, « blocked / blocking ». Le lien peut
    relier des éléments de deux équipes, même dans deux espaces (Jira) ou deux projets (Azure
    DevOps) différents ;
  - états (Jira dit « statuts ») : un jeu par défaut, que l'équipe change (en ajouter, en
    retirer ou en renommer, selon l'outil). Exemples : Azure DevOps, pour une user story en
    processus Agile, New, Active, Resolved, Closed ; Linear, Backlog, Todo, In Progress, Done,
    Canceled.
- **Conseil d'éditeur** (allégation, pas un consensus) : Atlassian conseille de garder peu
  d'états et de transitions.
- **Choix d'école** : une DoR stricte devient une barrière avant chaque sprint (Mike Cohn,
  concept 11b). Le cours en tire qu'un état « prêt » de l'outil reste un repère, pas une
  barrière.
- **Choix du cours** (sans source externe, à présenter comme tel) : peu de niveaux, et le niveau
  de trop (concept 4) ; « fait » dans l'outil veut dire DoD remplie ; le lien ne remplace pas
  la conversation avec l'autre PO (le Manifeste agile met les individus et leurs interactions
  avant les processus et les outils, sans parler d'un lien d'outil) ; le PO propose,
  l'administrateur règle.

## Sous-concepts
Annexe hors de l'ordre des concepts : chaque sous-concept se donne seul, quand l'apprenant en a
besoin, dans la boucle du cours (explication, exemple, question). Pas de rechange obligatoire.
1. **A1a les niveaux dans l'outil** (après 4a3, ou quand l'apprenant demande comment régler ses
   niveaux) : les niveaux par défaut de Jira et d'Azure DevOps ; l'équipe en choisit peu ; le
   niveau de trop se règle dans l'outil, sans le retirer forcément (« Coincés avec le niveau
   Feature ? »).
2. **A1b les liens de dépendance** (après 10b2) : le lien note une dépendance entre deux
   éléments, aussi entre les backlogs de deux équipes ; il ne remplace pas la conversation
   avec l'autre PO (« Léa a tracé le canal de Julie »).
3. **A1c les états** (après 11, ou quand l'équipe règle son tableau) : choix d'équipe,
   modifiables ; « fait » veut dire DoD remplie ; un état « prêt » reste un repère, pas une
   barrière (« Le tableau proposé par Yanis »).

Déjà enseigné, à rappeler sans le réenseigner : le PO ordonne seul, qui veut changer l'ordre le
convainc (1b) ; les niveaux, qu'aucun guide n'impose, et le niveau de trop (4a2, 4a3) ; la
dépendance envers l'équipe appli et l'accord avec Inès (10b2) ; DoD et DoR (11a, 11b) ;
l'escalade (14c). Nommés avec renvoi, sans les enseigner : la vie d'une story (refinement,
Sprint Planning, revue : concept 15) ; le travail sans sprint (annexe A2).

## Banque d'exemples

Le fil rouge ne dit pas quel outil emploie l'équipe vélos : chaque exemple pose l'outil en
situation d'exercice (« dans cet exercice, … »), sans le fixer. Faits du fil rouge utilisés :
les vues de Bruno ; la story de Julie, dont la disponibilité par station vient de la plateforme
et le canal relève de l'équipe appli, dont Inès est la PO ; un tiers des abonnés n'a qu'un
téléphone basique ; la DoD de l'équipe vélos (heure de la dernière mise à jour sur chaque vue,
définition écrite de chaque indicateur publié) ; sa DoR (critères d'acceptation écrits, règles
métier fixées, dépendances identifiées, accès aux données obtenu). Les répliques de Léa et de
Yanis, la répartition des features et le tableau proposé sont des propositions d'exercice.

### Coincés avec le niveau Feature ? (A1a)
- **Explication** : les niveaux viennent de l'outil, pas de Scrum (concept 4a2). Jira a par
  défaut Epic > Story > Subtask ; Azure DevOps, en processus Agile, Epic > Feature > User Story
  > Task. Un niveau de trop (4a3) ne se retire pas toujours : dans Azure DevOps, un niveau
  hérité ne se supprime pas, mais chaque équipe choisit les niveaux qu'elle affiche, et le type
  peut être désactivé (réglage du processus, qui touche tous les projets qui l'emploient). Dans
  Jira, un niveau entre Epic et Story (Feature, par exemple) a été ajouté ou renommé chez
  l'équipe ; la hiérarchie se règle pour tous les espaces gérés par l'entreprise du site, et la
  changer casse les liens parent et enfant existants. Si l'apprenant est dans Jira, poser la
  situation dans Jira avec ces deux faits.
- **Situation** : dans cet exercice, l'équipe vélos travaille dans Azure DevOps, en processus
  Agile. Après quelques sprints, quatre des cinq features des vues de Bruno ne contiennent
  qu'une story. Yanis : « Azure ne permet pas de supprimer le niveau Feature : on doit
  continuer à créer une feature au-dessus de chaque story. »
- **Question** : que proposes-tu à l'équipe ?
- **Réponse attendue** : Yanis a raison sur l'outil (un niveau hérité ne se supprime pas), pas
  sur la conclusion. Le signal du niveau de trop est là (4a3) : après avoir vérifié que ces
  features ne sont pas des stories mal classées, le PO propose que l'équipe n'affiche plus le
  niveau Feature et cesse d'en créer. Désactiver le type est un réglage du processus : il
  touche les autres projets qui l'emploient, il se voit avec l'administrateur. Le PO dit ce
  qu'il veut et pourquoi (deux éléments à écrire et à tenir pour un seul « je veux »), pas où
  cliquer ; l'équipe décide de ses niveaux. Nuance : on y revient si des besoins à plusieurs
  « je veux » reviennent.
- **Erreurs fréquentes** :
  - donner raison à Yanis (« c'est l'outil qui l'impose ») : demander « l'outil interdit-il de
    ne pas l'employer, ou le propose-t-il par défaut ? » ;
  - retirer le niveau User Story et garder les features : ce sont les stories qui entrent dans
    les sprints (4a3) ;
  - décider seul du réglage (« je le supprime moi-même »), ou le décrire clic par clic : donner
    le fait de l'outil (le réglage touche d'autres projets ou espaces), puis demander « qui
    décide de ne plus employer le niveau, et qui fait le réglage ? » ; le PO propose, l'équipe
    choisit, l'administrateur règle ;
  - réenseigner 4a3 : une ligne sur la vérification suffit.
- **Ce qui marche** : les trois sources de règles du concept 4a2 (le Scrum Guide : aucun
  niveau ; l'outil : des niveaux par défaut ; l'équipe : son choix), puis « ce que l'outil ne
  retire pas, l'équipe peut-elle cesser de l'employer ? ».

### Léa a tracé le canal de Julie (A1b)
- **Explication** : une dépendance (concept 10b) se note par un lien entre deux éléments. Aucun
  des outils vérifiés n'a de lien « dépend de » : Jira dit « blocks / is blocked by », Azure
  DevOps « Predecessor / Successor », Linear « blocked / blocking ». Le lien peut relier des
  éléments de deux équipes, même dans deux espaces (Jira) ou deux projets (Azure DevOps)
  différents. Il rend la dépendance visible des deux équipes ; il ne remplace pas la
  conversation avec l'autre PO (position du cours).
- **Situation** : dans cet exercice, les deux équipes travaillent dans le même Jira, chacune
  dans son espace. Pour la story de Julie (concept 10b2), Léa crée elle-même, dans l'espace de
  l'équipe appli, un élément « canal pour les abonnés sans l'appli », le relie à la story de
  Julie par « is blocked by », et conclut : « C'est tracé, Inès le verra. »
- **Question** : que fais-tu de ce que Léa a tracé ?
- **Réponse attendue** : le lien se garde : il rend la dépendance visible des deux équipes, et
  dans le bon sens (la story de Julie est bloquée par le canal). Mais l'élément créé dans le
  backlog de l'équipe appli n'est pas à Léa : c'est Inès qui inscrit le canal et lui donne sa
  place (10b2), on lui soumet l'élément, on ne le lui impose pas. Et un lien n'est pas un
  accord : le PO va voir Inès, lui présente le besoin (un tiers des abonnés n'a qu'un téléphone
  basique, sans l'appli) et s'accorde avec elle sur l'ordre ; le lien relie ensuite la story de
  Julie à l'élément qu'Inès garde. Si l'accord ne se fait pas : escalade (14c), sans
  l'enseigner ici.
- **Erreurs fréquentes** :
  - « c'est tracé, rien à faire » : demander « Inès sait-elle pourquoi ce besoin compte, et qui
    décide de sa place ? » ; si la réponse s'arrête là, « et alors, qui va voir qui ? » ;
  - supprimer le lien « puisqu'on va parler » : il sert, après l'accord, à suivre la
    dépendance ;
  - chercher un type de lien « dépend de », ou en faire créer un : « blocks / is blocked by »
    dit la même chose ;
  - exiger une date à Inès, ou escalader d'emblée : on la convainc d'abord (10b2, 14c).
- **Ce qui marche** : suivre le lien des deux côtés : « dans le backlog d'Inès, qui a écrit cet
  élément, et qui l'a placé ? ».

### Le tableau proposé par Yanis (A1c)
- **Explication** : les états d'un élément (Jira dit « statuts ») disent où il en est : à
  faire, en cours, fait, par exemple. Le Scrum Guide n'en parle pas ; chaque outil en propose
  par défaut, et l'équipe les change. Atlassian conseille d'en garder peu (conseil d'éditeur).
  Deux règles du cours : « fait » veut dire DoD remplie (11a) ; un état « prêt » reste un
  repère, pas une barrière (11b).
- **Situation** : dans cet exercice, Yanis propose à l'équipe vélos quatre états : À faire,
  Prêt, En cours, Fait. « Une story passe en Prêt quand toutes ses questions sont réglées, et
  en Fait quand son code est fusionné. »
- **Question** : que proposes-tu de changer dans la proposition de Yanis, et pourquoi ?
- **Réponse attendue** : les quatre états peuvent rester, c'est le choix de l'équipe et ils sont
  peu nombreux. « Fait » se change : une story est faite quand elle remplit la DoD (l'heure de
  la dernière mise à jour affichée, la définition de l'indicateur écrite), pas quand son code
  est fusionné ; sinon le tableau dit « fait » de ce qui n'entre pas dans l'incrément, et
  l'outil ne connaît pas la DoD (un tableau Scrum de Jira tient pour terminé ce qui est dans
  sa colonne la plus à droite). « Prêt » se change aussi : « toutes les questions réglées » en
  fait une barrière, la conversation continue pendant le sprint (11b). Il suit la DoR de
  l'équipe (critères écrits, règles fixées, dépendances identifiées, accès obtenu), comme
  repère. Le PO propose ; l'équipe décide (en rétrospective, par exemple) ; l'administrateur
  règle.
- **Erreurs fréquentes** :
  - garder « Fait » au code fusionné, « la DoD se vérifie à part » : demander « à la revue, que
    dit le tableau d'une story fusionnée sans définition de l'indicateur ? » ;
  - ajouter un état par étape (en recette, validé par Bruno…) : chaque état se tient à jour, et
    les états ne racontent pas la vie d'une story (refinement, planning, revue : concept 15) ;
  - supprimer « Prêt » parce que la DoR n'est pas dans le Scrum Guide : c'est un choix d'école,
    utile s'il reste un repère ;
  - ne corriger qu'un des deux états : demander « et l'autre ? ».
- **Ce qui marche** : lire chaque état comme une promesse à quelqu'un : « quand Bruno voit
  "Fait", que peut-il en attendre ? ».

## Pièges
- **Copier les niveaux par défaut sans les choisir** (le niveau Feature du processus Agile
  d'Azure DevOps) : l'équipe choisit les siens, peu suffisent (concept 4).
- **Se croire coincé par un niveau que l'outil ne retire pas** : l'équipe peut ne pas
  l'afficher et cesser de l'employer. Ne pas affirmer que Jira interdit de retirer l'epic.
- **Chercher un lien « dépend de »** : il s'appelle « blocks / is blocked by » (Jira),
  « Predecessor / Successor » (Azure DevOps) ou « blocked / blocking » (Linear).
- **Prendre le lien pour l'accord**, ou créer soi-même l'élément dans le backlog d'une autre
  équipe : chaque PO inscrit et ordonne dans le sien ; on le convainc (10b2).
- **Un « fait » qui ne veut pas dire DoD remplie** : l'outil juge terminé d'après sa propre
  règle (sa colonne la plus à droite, sa catégorie d'état), pas d'après la DoD.
- **Confondre la « Definition of Done » d'une colonne d'Azure DevOps avec la DoD de Scrum** :
  même nom, autre objet (les critères pour passer une étape du tableau).
- **Un état « prêt » en barrière** : la DoR tourne au mini cahier des charges (11b).
- **Multiplier les états** : chacun se tient à jour ; les états ne sont pas la vie d'une story
  (concept 15).
- **Décrire les clics, ou régler seul** : le PO dit quoi et pourquoi ; l'équipe choisit ;
  l'administrateur règle, et certains réglages touchent d'autres équipes (la hiérarchie de
  Jira, le processus d'Azure DevOps).

## Le test rapide
Pour chaque réglage : « à quoi sert-il, à l'équipe ou à l'utilisateur ? » Un niveau contient-il
d'habitude plus d'un élément ? L'autre PO connaît-il la dépendance que le lien note ? « Fait »
veut-il dire DoD remplie ?

## Schéma
Un écran d'outil stylisé, en trois bandes. **Niveaux** : l'arbre Epic > Feature > User Story >
Task, la ligne Feature grisée, légendée « pas affiché pour l'équipe : le niveau de trop ».
**Liens** : deux colonnes (espace de l'équipe vélos, espace de l'équipe appli) ; la story de
Julie reliée au canal par une flèche « is blocked by » ; au-dessus, une bulle entre le PO et
Inès, « on s'accorde d'abord ». **États** : quatre colonnes de tableau, À faire, Prêt, En
cours, Fait ; « Prêt » en pointillé, légendé « repère : la DoR » ; « Fait » encadré, légendé
« DoD remplie ». En bandeau : « Scrum Guide : ni niveau, ni lien, ni état ; l'outil propose,
l'équipe choisit ».
