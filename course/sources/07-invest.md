---
concept: 7
---

# Sources : INVEST

INVEST est une grille de Bill Wake (2003, milieu XP) [S1], très reprise (Cohn la recommande dans
*User Stories Applied*, 2004, selon [S3]) ; le Scrum Guide n'en parle pas [S2]. Ce n'est donc pas
un consensus au sens du cours (le texte d'un guide) : c'est une pratique établie, attribuée à son
auteur. Les faits du fil rouge (Julie, un tiers des abonnés sans l'appli, téléphone basique,
dépendance de l'équipe appli pour le canal, points non fixés comme le seuil « presque vide »)
sont inventés : ils n'ont pas de source. Les sections entre parenthèses sont celles du modèle de
fichier de concept ; le rédacteur ajoute une ligne pour toute affirmation qui n'est pas ici.

## Affirmations

### Origine et statut de la grille

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| INVEST : six critères d'une bonne story, proposés par Bill Wake en 2003, dans le milieu XP (L'essentiel, Consensus et choix d'école) | [S1] | Article du 17 août 2003 sur xp123.com (« Exploring Extreme Programming ») : « XP teams have to manage stories and tasks » ; « I developed the INVEST acronym, and wrote this article in April and August, 2003 ». Wake remercie Mike Cohn pour ses retours. Relu en entier le 2026-10-22 |
| Les six lettres : Independent, Negotiable, Valuable, Estimable, Small, Testable (L'essentiel, 7a) | [S1], [S3] | [S1] : « I – Independent N – Negotiable V – Valuable E – Estimable S – Small T – Testable ». [S3] concorde |
| Le Scrum Guide ne parle pas d'INVEST (Consensus et choix d'école) | [S2] | Texte HTML téléchargé et cherché le 2026-10-22 : « INVEST » n'apparaît que dans « Investments » (biographie des auteurs) ; « story » : 0 occurrence (déjà vérifié pour le concept 5) |
| Grille très répandue, reprise par Cohn (Consensus et choix d'école) | [S3] ; appui [S1], [S6] | [S3] (Agile Alliance) : « a widely accepted set of criteria, or checklist, to assess the quality of a user story » (allégation, sans donnée d'usage) ; INVEST recommandé au chapitre 2 de *User Stories Applied* (Cohn, 2004), rapporté par [S3], livre non lu. [S6] (Microsoft, 2013) cite Wake et INVEST. [S1], postscript de 2011 : « popular enough » |
| C'est une aide à la réflexion (« peut te rappeler »), pas une règle imposée (Consensus et choix d'école) | [S1], [S3] | [S1] : « The INVEST and SMART acronyms can remind teams » ; conclusion : « the INVEST acronym can help remind you of characteristics of good stories ». [S3] : « checklist » ; si une story échoue à un critère, l'équipe peut la reformuler |
| E et S se jugent avec les Developers : ce sont eux qui estiment la taille (Consensus et choix d'école, 7a1, Pièges) | [S2] ; [S1] ; `course/sources/01-produit-et-po.md` | Scrum Guide : « The Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs. » (déjà vérifié au concept 1). Wake, E : « it's a function of the team » |
| Wake inscrit INVEST dans les 3C de Jeffries : la carte n'est pas toute la story (L'essentiel, renvoi au concept 5) | [S1] ; `course/sources/05-user-story.md` | [S1] : « It would be easy to mistake the story card for the "whole story," but Ron Jeffries points out that stories in XP have three components: Cards […], Conversation […], and Confirmation (tests that verify them) ». Les 3C sont enseignés au concept 5 |
| « INVEST juge la story entière (phrase, critères, conversation) » (fiche actuelle, L'essentiel) | [S1] en partie | Wake ne l'écrit pas en ces termes. Appuis : l'ouverture sur les 3C (ligne précédente) ; N : « Over time, the card may acquire notes, test ideas, and so on » ; T : « by requiring customer tests before implementing a story ». Formulation acceptable si elle est donnée comme lecture du cours appuyée sur Wake ; sinon la retirer (voir `maintainer/work/T-018/7-errors.md`) |
| La carte est une promesse de conversation (si le fichier le dit) | [S1] | Wake l'attribue à Alistair Cockburn, pas à Jeffries : « Alistair Cockburn described the cards as tokens promising a future conversation ». Source secondaire pour Cockburn (texte de Cockburn non lu) |
| Statut des deux lignes précédentes dans le fichier du concept (rédaction du 2026-10-22) | | « INVEST juge la story entière » est retiré ; le fichier garde seulement « Wake ouvre sur les 3C : la carte n'est pas toute la story ». La promesse de conversation n'est pas reprise |

### 7a : les six lettres et le mot flou

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| I (Independent) : la story ne chevauche pas les autres et peut se planifier et se réaliser dans n'importe quel ordre ; on n'y arrive pas toujours (L'essentiel, 7a) | [S1] | « we'd like them to not overlap in concept, and we'd like to be able to schedule and implement them in any order. We can't always achieve this ». La fiche actuelle dit « livrable sans attendre une autre » : reformulation acceptable |
| I, illustration : la story de Julie dépend de l'équipe appli pour le canal ; le traitement des dépendances vient au concept 10 (7a, banque) | fil rouge | Fait fixé du fil rouge (« la livrer à Julie par un canal […] dépend de l'équipe appli »), sans source. Le renvoi au concept 10 est le plan du cours |
| V (Valuable) : la story a de la valeur pour le client (L'essentiel, 7a) | [S1] | « it needs to be valuable to the customer » ; les soucis des Developers se reformulent pour que le client en voie l'importance. Wake dit « customer » (rôle XP) ; « pour un utilisateur » est la lecture du cours, cohérente avec le concept 1 (les consommateurs de données sont des utilisateurs). [S3] glose V par « Valuable (or vertical) » : le découpage vertical vient au concept 9 |
| E (Estimable) : l'équipe peut estimer assez pour que la story soit ordonnée et planifiée ; pas besoin d'une estimation exacte (L'essentiel, 7a) | [S1] | « We don't need an exact estimate, but just enough to help the customer rank and schedule the story's implementation » |
| E dépend de la compréhension, de la taille et de l'équipe : on estime mal une story qu'on ne comprend pas (7a, mot flou) | [S1] | « Being estimable is partly a function of being negotiated, as it's hard to estimate a story we don't understand. It is also a function of size […] Finally, it's a function of the team » |
| S (Small) : chez Wake, une story représente « au plus quelques semaines-personnes » de travail (L'essentiel, 7a) | [S1] | « Stories typically represent at most a few person-weeks worth of work. » Au-delà, « it seems to be too hard to know what's in the story's scope ». Déjà relevé au cadrage (`framing.md` §2.4) |
| S : « quelques jours » est une pratique d'équipes, pas la définition de Wake (L'essentiel, 7a) | [S1] ; appui secondaire [S7] | Wake lui-même : « (Some teams restrict them to a few person-days of work.) ». Des pages secondaires (recherche web du 2026-10-22) disent « a few days » sans source ; « pratique courante » (fréquence) n'est pas mesurée : écrire « certaines équipes visent quelques jours-personnes » (Wake dit « person-days ») plutôt que « la plupart » |
| S : une story tient dans un sprint (cohérence avec le concept 4) (L'essentiel, 7a) | [S2], [S3] ; `course/sources/04-hierarchie.md` | Scrum Guide : « Product Backlog items that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event ». [S3] glose S par « so as to fit within an iteration ». Wake ne parle pas de sprint ; « quelques semaines-personnes » tient dans un sprint de deux semaines d'une équipe de trois (Léa, Yanis, Nora), calcul du cours |
| S : au-delà, l'équipe ne sait plus ce que la story contient ; « plus d'un mois » cache souvent « je ne comprends pas tout » (7a, mot flou) | [S1] | « Saying, "it would take me more than a month" often implicitly adds, "as I don't understand what-all it would entail." Smaller stories tend to get more accurate estimates » |
| S, exercice « Huit jours, trop gros ? » : INVEST ne dit pas « quelques jours » ; savoir si la story tient dans le sprint revient aux Developers, dont Yanis ; des stories plus petites s'estiment souvent mieux (7a1, banque) | [S1], [S2] ; fil rouge | Équipe de trois (Léa, Yanis, Nora, Developers), sprints de deux semaines : fil rouge. L'estimation de huit jours et la phrase de Yanis sont des propositions d'exercice, pas des faits du fil rouge. « at most a few person-weeks » et « Smaller stories tend to get more accurate estimates » : [S1] ; taille estimée par les Developers : [S2] (ligne E et S ci-dessus) |
| T (Testable) : écrire la story promet qu'on saurait écrire un test ; si le client ne sait pas comment la tester, la story n'est peut-être pas assez claire (L'essentiel, 7a, Le test rapide) | [S1] | « "I understand what I want well enough that I could write a test for it." » ; « If a customer doesn't know how to test something, this may indicate that the story isn't clear enough, or that it doesn't reflect something valuable to them, or that the customer just needs help in testing » |
| T : les exigences non fonctionnelles (performance, ergonomie) se testent aussi (si le fichier en parle, ex. fraîcheur de moins de 15 minutes) | [S1] | « A team can treat non-functional requirements (such as performance and usability) as things that need to be tested » |
| Plusieurs lettres (E, S, T) dépendent d'un même mot flou : c'est ce mot qu'il faut faire préciser (7a, Pièges, Le test rapide) | [S1] en partie ; observation `[c7]` | Wake lie E à la compréhension, S au périmètre connu, T à la clarté (lignes ci-dessus). Le « mot flou dont dépendent plusieurs lettres » est la formulation du cours, tirée d'une session (`maintainer/work/T-018/learner-observations.md`, `[c7]` : E et S cochés sans pouvoir le vérifier) ; base faible (un apprenant) |
| Le mot flou se fait préciser par l'utilisateur concerné, avant le sprint (concept 15) ; le PO ne l'invente pas, les Developers non plus (7a, banque) | [S2] ; `course/sources/04-hierarchie.md` (concept 4) | Scrum Guide : le refinement précise les éléments (« breaking down and further defining Product Backlog items into smaller more precise items ») ; « ready for selection » (ligne S). Que l'utilisateur concerné fixe la règle, et pas le PO seul : parti pris du cours, déjà posé au concept 4. Le terme « refinement » est enseigné au concept 15 |
| Exercice « Heures de pointe » : story de Bruno (point du matin, stations du centre-ville restées vides aux heures de pointe, afin d'envoyer les régulateurs plus tôt) ; le mot « heures de pointe » rend E, S et T douteux ; « vide » (vélos à quai ou disponibles) n'est pas fixé non plus (7a2, Schéma) | fil rouge ; [S1] | Faits du fil rouge : la journée de Bruno (point du matin), la vue des stations vides doit servir à envoyer les régulateurs plus tôt ; ni la définition des heures de pointe ni celle d'une station vide (vélos à quai ou vélos disponibles) ne sont fixées. Une première rédaction (« sans vélo disponible ») tranchait ce second point : retirée en revue. La phrase de la story est une proposition d'exercice. Le lien du mot avec E, S, T suit les lignes E, S, T de [S1] ; l'application est celle du cours |
| « Heures de pointe » sert aussi à la mesure de l'objectif produit : la définition précisée avec Bruno doit valoir pour cette mesure, que portent les parties prenantes de l'objectif (Agnès) ; pas deux définitions (7a2, nuance) | fil rouge ; `course/concepts/02-objectif-produit-resultat.md` | La mesure de résultat de l'objectif produit cite les heures de pointe (fil rouge) ; Agnès en est la sponsor. Concept 2 : la définition des heures de pointe ne s'invente pas à la place des parties prenantes. « Une seule définition » : conseil du cours (un seul terme par notion), sans source externe. Qui tranche entre Bruno et Agnès : non fixé (`maintainer/work/T-018/7-needs.md`) |
| Spike (exploration bornée) : vient d'XP ; sert d'abord aux problèmes techniques ou de conception, et à fiabiliser une estimation ; certains l'emploient aussi pour une question métier (Consensus et choix d'école, une ligne, renvoi au concept 17) | [S4], [S1] | [S4] (Don Wells, extremeprogramming.org, 1999) : « Create spike solutions to figure out answers to tough technical or design problems » ; « The goal is reducing the risk of a technical problem or increase the reliability of a user story's estimate ». [S1] range le spike sous E : « split a story into a (time-boxed) "spike" that will give the team enough information to make a decent estimate » |
| Spike : son usage varie selon les écoles (choix d'école) (Consensus et choix d'école) | [S6] | Microsoft (guide VS 2010, archivé) emploie « spike » aussi pour une question métier (« understand what 'book award travel' means »), pour la dette de bugs et pour des améliorations de processus. Réserver le spike aux questions techniques est donc un choix, pas un consensus |

### 7b : N, besoin ou solution, une contrainte va dans un critère

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| N (Negotiable) : la story n'est pas un contrat de fonctions ; elle porte l'essentiel, pas les détails, qui se construisent ensemble (L'essentiel, 7b) | [S1], [S3] | [S1] : « It is not an explicit contract for features; rather, details will be co-created by the customer and programmer during development. A good story captures the essence, not the details. » [S3] : « not a specific contract for features » |
| N : la story fixe le besoin ; le « comment » (la solution) se discute avec l'équipe (7b) | [S1] en partie ; `course/sources/05-user-story.md` | Lecture du cours de « essence, not the details » ; Wake ne parle pas de « besoin » ni de « solution ». « Pas de solution dans le “je veux” » est enseigné au concept 5 (appui Cohn). Wake place la co-construction « during development », pas « jusqu'au sprint » (fiche actuelle) |
| Négociable ne veut pas dire « tout est ouvert » : une contrainte réelle ne se négocie pas (7b, banque) | aucune | Formulation du cours, tirée d'une session (amélioration de session (`07-invest.md`, historique git), observation `[c7]` « N : le SMS reste une solution négociable face à une contrainte d'usage », réussi du premier coup). Sans source externe |
| Une contrainte s'écrit dans un critère d'acceptation, formulé sans nommer de canal ; l'écriture des critères vient au concept 8 (7b, banque, Pièges) | [S1] en partie ; observation `[c8]` | Wake, T : les exigences non fonctionnelles se traitent comme des tests ; 3C : la confirmation, ce sont les tests (renvoi au concept 5). Que la contrainte « téléphone basique, sans l'appli » aille dans un critère : choix du cours ; le lien n'est pas un réflexe (`[c8]`, amélioration de session (`07-invest.md`, historique git)). Le corrigé v2 de la production (« Given Julie n'a qu'un téléphone basique… ») est un exemple éprouvé, à reprendre au concept 8 |
| Given/When/Then (si le fichier du concept le montre) : modèle de critère venu du BDD (Dan North, avec Chris Matts), enseigné au concept 8 (banque, suite possible) | [S5] | Dan North, « Introducing BDD », 20 septembre 2006 : « We started describing the acceptance criteria in terms of scenarios, which took the following form: Given some initial context (the givens), When an event occurs, Then ensure some outcomes. » Chris Matts y est nommé comme coauteur de la démarche. Gherkin et Specification by Example (Adzic) : à vérifier pour le concept 8 |
| Écrire la solution dans la story (« recevoir un SMS ») empêche l'équipe de proposer mieux (Pièges) | [S1] en partie ; `course/sources/05-user-story.md` | Découle de « details will be co-created by the customer and programmer » ; formulation du cours. Concept 5 : la raison laisse l'équipe choisir comment faire (Cohn) |
| Un critère qui nomme une solution (« Julie reçoit un SMS ») la fige comme la phrase l'aurait fait ; le critère garde la contrainte sans nommer de canal, sa rédaction complète vient au concept 8 (7b, « Le canal dans le critère », Pièges) | [S1] en partie | Prolonge N (« details will be co-created by the customer and programmer during development ») aux critères : lecture du cours, sans source qui l'écrive. La forme complète du critère (fraîcheur, Given/When/Then) est enseignée au concept 8 |
| Le canal (SMS, serveur vocal, appli) relève de l'équipe appli ; un serveur vocal respecterait aussi la contrainte (7b, banque) | fil rouge | « la livrer à Julie par un canal (SMS, serveur vocal, appli) dépend de l'équipe appli » ; l'équipe appli a sa PO (Inès). Sans source |

### Banque d'exemples et test rapide

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| Story de Julie « savoir avant de partir s'il reste un vélo à ma station » ; un tiers des abonnés avec un téléphone basique, sans l'appli ; brouillon « recevoir un SMS à 8 h » (banque 7b) | fil rouge ; proposition d'exercice | Julie, son besoin et le tiers des abonnés : faits inventés du fil rouge (acteurs, situation 7 de `course/fil-rouge-velos.md`), sans source. L'heure de 8 h, le brouillon et le critère proposé par Léa sont des propositions d'exercice, pas des faits du fil rouge (le fil rouge ne dit pas où en est le choix du canal) |
| Règles fixées : vélo disponible (à quai et louable), station favorite, fraîcheur de moins de 15 minutes ; points non fixés : seuil « presque vide », heures de pointe, station vide en vélos à quai ou disponibles (banque 7a, mot flou) | fil rouge | `course/fil-rouge-velos.md`, « Faits fixés » et « Le produit et l'équipe » ; sans source |
| Test rapide : un testeur qui ne connaît que la story peut-il dire « fait » ou « pas fait » sans poser de question ? (Le test rapide) | [S1] en partie | Formulation du cours, appuyée sur T (« I could write a test for it » ; client qui ne sait pas tester -> story pas assez claire). La seconde moitié de la fiche actuelle (« l'équipe peut-elle dire “quelques jours” sans hésiter ? ») reprend l'erreur sur S : à reformuler (« tient-elle dans un sprint ? ») |

## Références

| Réf. | Source (auteur, titre, date) | Lien | Type | Consultée le |
|---|---|---|---|---|
| S1 | Wake, « INVEST in Good Stories, and SMART Tasks », xp123.com, 17 août 2003 (postscript du 16 février 2011) | https://xp123.com/invest-in-good-stories-and-smart-tasks/ | primaire | 2026-10-22 (relu en entier ; déjà cité au cadrage T-018a §8 et au concept 4) |
| S2 | Schwaber, Sutherland, *The Scrum Guide*, novembre 2020 | https://scrumguides.org/scrum-guide.html | primaire | 2026-10-22 |
| S3 | Agile Alliance, Agile Glossary, « INVEST » (sans date affichée, © 2026) | https://www.agilealliance.org/glossary/invest/ | secondaire (association ; vend adhésions et conférences) | 2026-10-22 |
| S4 | Wells, « Create a Spike Solution », extremeprogramming.org, © 1999 | http://www.extremeprogramming.org/rules/spike.html | primaire (site de règles XP de Don Wells) | 2026-10-22 |
| S5 | North, « Introducing BDD », 20 septembre 2006 | https://dannorth.net/blog/introducing-bdd/ | primaire | 2026-10-22 |
| S6 | Microsoft, « Creating a Great Product Backlog », Visual Studio 2010 (archivé, ms.date 4 février 2013) | https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/ee518933(v=vs.100) | primaire (documentation de l'éditeur, guide de processus) | 2026-10-22 |
| S7 | Recherche web « user story size a few days » (pages de blogs et de formation, sans auteur de référence) | (résultats de recherche) | secondaire, en partie marketing | 2026-10-22 |

## Non vérifié

- **« Quelques jours » comme pratique « courante »** : Wake [S1] dit « some teams », sans
  fréquence ; les pages trouvées [S7] le répètent sans donnée. Écrire « certaines équipes visent
  quelques jours (Wake le signale) », pas « la plupart ».
- **Cohn, *User Stories Applied* (2004), chapitre 2 sur INVEST** : rapporté par [S3], livre non
  lu ; ne rien y appuyer d'autre que « Cohn reprend la grille ».
- **« Grille très répandue »** : allégation de [S3] (« widely accepted »), sans enquête d'usage.
  Base faible, mais concordante avec [S6] et le postscript de [S1].
- **Origine XP du spike au-delà de Wells** : [S4] (1999) est le site de règles XP de Don Wells,
  pas une source datée de l'invention ; le livre de Beck (*Extreme Programming Explained*) n'a pas été consulté.
  Écrire « venu d'XP » sans auteur ni date d'invention.
- **Cockburn, carte comme promesse de conversation** : attribution rapportée par Wake [S1] ; le
  texte de Cockburn n'a pas été lu (date de 1998 donnée par Wikipédia, voir
  `course/sources/05-user-story.md`). Si le fichier du concept en parle : « Cockburn, rapporté par
  Wake », sans date.
- **« INVEST juge la story entière (phrase, critères, conversation) »** : pas écrit par Wake ;
  seulement déduit de son ouverture sur les 3C et de N et T. Lecture du cours, à présenter comme
  telle, ou à retirer.
- **Gherkin et Specification by Example (Adzic)** : non vérifiés ici ; relèvent du concept 8.
- **Mot flou dont dépendent plusieurs lettres** et **« négociable ne veut pas dire tout est
  ouvert »** : règles pratiques du cours, observées sur un seul apprenant (base faible).
