---
concept: A2
---

# Sources : Travailler sans sprint

Pas de fichier de concept antérieur : ce fichier couvre ce que l'annexe devra affirmer, d'après
les consignes de T-018g et les références de T-021 (2026-10-22), revérifiées le 2026-10-23. Le
*Kanban Guide* [S1] est le texte du flux sans sprint ; le *Kanban Guide for Scrum Teams* [S2]
est un autre cas (Kanban dans Scrum, le sprint reste) ; la méthode Kanban de Kanban University
[S4], [S5] est une autre école. Aucun texte ne fait consensus pour « travailler sans sprint » :
chaque affirmation se rattache à son guide ou à son école. Le Scrum Guide 2020 [S3] est déjà
vérifié dans `course/sources/00-scrum.md` (S1) ; seules les phrases utiles ici sont recitées.
Les exemples « si l'équipe vélos travaillait sans sprint » sont des situations d'exercice : ils
n'ont pas de source et ne changent pas le fil rouge (équipe en sprints de deux semaines).

Écarts avec les références de T-021, à suivre par le rédacteur :
- Les cadences et le point d'engagement de la méthode Kanban ne sont plus vus « seulement dans
  des sources secondaires » : Kanban University les décrit elle-même [S4], [S5] (primaire, mais
  organisme qui vend ses formations).
- La prévision par le débit n'est pas dans le *Kanban Guide* : il impose de suivre le débit et
  fait du temps de cycle la base de l'« attente de niveau de service » (SLE) [S1] ; c'est le
  *Kanban Guide for Scrum Teams* qui relie le débit aux dates de livraison probables [S2].
- Le *Kanban Guide* 2025 parle de contrôler le travail en cours (« control »), pas de le
  limiter ; « limite de travail en cours » est le mot du *Kanban Guide for Scrum Teams* [S2].
- Les quatre mesures s'appellent « Flow Metrics » depuis 2025 (avant : « Kanban Measures ») [S1].

Pour le coordinateur (glossaire) : le glossaire n'a ni travail en cours, ni débit, ni temps de
cycle, ni Definition of Workflow, ni point d'engagement ; sa ligne DoR (« avant d'entrer dans un
sprint ») suppose un sprint.

## Affirmations

### Général : deux cas sans sprint à distinguer, ce qui ne change pas

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| Le *Kanban Guide* est de John Coleman et Daniel Vacanti (créateurs), version v2025.5 du 1er mai 2025 ; versions antérieures v2020.7 et v2020.12 (L'essentiel, Consensus et choix d'école) | [S1] | Page : « Updated: May 1, 2025 », « Contributors: John Coleman Creator, Daniel Vacanti Creator », puis sept contributeurs ; sélecteur de versions « v2025.5 (Latest), v2020.12, v2020.7 ». « Vacanti, Coleman et al. » de T-021 est juste |
| Définition : Kanban est une stratégie pour optimiser le flux de valeur dans un processus, par trois pratiques : définir et visualiser le workflow, gérer activement les éléments, améliorer le workflow (L'essentiel) | [S1] | « Kanban is a strategy for optimizing the flow of value through a process. It comprises the following three practices working in tandem: Defining and visualizing a workflow; Actively managing items in a workflow; Improving a workflow » |
| Le *Kanban Guide* n'a ni rôles, ni événements, ni sprint, ni backlog, ni PO (L'essentiel, Consensus et choix d'école) | [S1] | Texte téléchargé et cherché : « role », « event », « sprint », « Scrum », « backlog », « product owner », « Definition of Ready », « done » : 0 occurrence. Il nomme seulement les « Kanban system members » |
| Le *Kanban Guide* n'impose pas de cadence (L'essentiel) | [S1] | « cadence » : une occurrence, pour dire qu'il n'en faut pas : « There is no requirement, however, to wait for a formal meeting at a regular cadence to make these changes » (changements du workflow). La revue des éléments en cours « can occur continuously, at regular intervals, or through a combination of both » |
| Le *Kanban Guide for Scrum Teams* (Scrum.org, janvier 2021 ; Vacanti, Yeret, avec Porter) : Kanban complète Scrum, le Scrum Guide s'applique en entier, le sprint reste (L'essentiel, Consensus et choix d'école) | [S2] | « Developed and sustained by Scrum.org, Daniel Vacanti, and Yuval Yeret », « January 2021 » ; historique : « developed collaboratively by Scrum.org, its Professional Scrum Trainer Community, Steve Porter, Yuval Yeret, and Daniel Vacanti ». « This guide assumes the reader is operating a process using the Scrum framework. Therefore, The Scrum Guide applies in its entirety. » « The Kanban complementary practices don't invalidate the need for Scrum's Sprint. » « Kanban in a Scrum context does not require any additional events » |
| Distinguer le flux sans sprint (*Kanban Guide*) de Kanban dans Scrum (*Kanban Guide for Scrum Teams*) (L'essentiel, Pièges) | [S1], [S2] | Le premier ne mentionne pas Scrum (0 occurrence) ; le second suppose Scrum et garde le sprint. Appeler le premier cas « flux sans sprint » ou « flux continu » est le vocabulaire du cours : « continuous flow » n'apparaît pas dans [S1] |
| La méthode Kanban (David J. Anderson, Kanban University) est une autre école que le *Kanban Guide* (Coleman, Vacanti) ; aucune ne fait consensus (Consensus et choix d'école, Pièges) | [S7], [S4], [S5], [S1] | Wikipédia distingue « The Kanban Method » (Anderson, livre de 2010) et *The Kanban Guide* publié en 2020 par Coleman et Vacanti. Les textes primaires n'ont pas le même vocabulaire : point d'engagement, cadences et réapprovisionnement chez Kanban University [S4], [S5] ; absents de [S1] (« commitment point », « replenish » : 0 occurrence ; « commit » : une fois, dans « focus, commitment, and collaboration ») |
| Ce qui ne change pas sans sprint : le backlog ordonné par le PO, la DoD, l'incrément, l'objectif produit (chaque sous-concept, une ligne) | ADR-018 ; `course/plan.md` (Parti pris) ; [S1], [S2], [S3] | Parti pris du cours, pas un consensus. Le *Kanban Guide* n'en parle pas (backlog, PO, done : 0 occurrence ; « increment » : une occurrence, dans « small or incremental », sans rapport) : le cours garde ces éléments du Scrum Guide [S3] dans une équipe en flux. Le *Kanban Guide for Scrum Teams* les garde puisque le Scrum Guide s'y applique en entier [S2]. Même constat dans `course/sources/03-backlog-produit.md` (« Non vérifié » : backlog sans sprints) |
| Le cours n'affirme pas que les équipes data travaillent surtout en flux (consigne ; aucune phrase du fichier ne doit le dire) | [S8] ; ADR-018 | Saltz, Shamshurin, Crowston (HICSS 2017) : expérience contrôlée « using students as subjects » (résumé seul lu). Aucune enquête trouvée par T-021 ni ici sur la part des équipes data en flux |

### A2a : sans Sprint Planning, tirer l'élément ; la DoR au début du flux

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| Sans sprint, pas de Sprint Planning : le *Kanban Guide* n'a pas d'événement (A2a) | [S1] | Voir « Général » : « event », « sprint » : 0 occurrence |
| L'équipe tire un élément quand elle a de la place : système tiré (A2a) | [S1], [S2] | [S1] : « Kanban system members should start work on an item (pull or select) only when there is a clear signal that there is capacity to do so. When WIP drops below the control set in the DoW, that can be a signal to select new work. » [S2] : « the team starts work (i.e. pulls) on an item only when it is clear that it has the capacity to do so » ; différent d'un système poussé, qui commence un élément « whenever it is requested » |
| Le travail en cours se contrôle explicitement ; « limite de travail en cours » (A2a) | [S1], [S2] | [S1] : « Kanban system members must explicitly control the number of work items in a workflow from started to finished » ; adaptations 2025 : « Less explicit (and hence more flexible) how WIP is controlled ». [S2] : « Scrum Teams using Kanban must explicitly limit the number of these work items in progress ». Le mot « limite » vient de [S2] ; dire « limite » pour [S1] est un raccourci acceptable si le fichier ne le cite pas |
| Travail en cours : éléments commencés et pas finis (A2a, A2c) | [S1], [S2] | [S1] : « WIP: The number of work items started but not finished » ; « Any work items between a started point and a finished point are considered work in progress » |
| La Definition of Workflow (DoW) fixe au minimum : ce qu'est un élément, quand il commence et finit, les états, le contrôle du travail en cours, des règles explicites de passage, une attente de niveau de service (A2a) | [S1] | « At a minimum, Kanban system members must create their DoW using all of the following elements » : unités de valeur (« work items »), « A definition for when work items are started and finished within the workflow » (« may have more than one started or finished point »), « One or more defined states », contrôle du WIP, « Explicit policies about how work items can flow through each state », SLE. « DoW is a fundamental concept of Kanban » |
| La DoR devient la condition pour franchir le début du flux (A2a) | [S1], [S2], [S5] ; `course/sources/11-dor-dod.md` | Lecture du cours, pas un texte. [S1] n'a pas de DoR (« ready » : 0 occurrence) ; ce qui s'en approche est la règle explicite de passage au point de début défini dans la DoW. [S2] : les règles de passage « may include items from a Scrum Team's Definition of Done and pull policies between stages ». Kanban University : le réapprovisionnement choisit parmi les éléments qui remplissent des critères « ready for delivery » [S5]. Que la DoR soit un choix d'école et que le Scrum Guide dise « ready for selection » : déjà vérifié en 11 |
| Un élément commencé sans pouvoir avancer (accès non obtenu) compte dans le travail en cours et occupe une place sous la limite (A2a, « La place libérée par Nora ») | [S1] | Déduction du cours à partir de la définition : « WIP: The number of work items started but not finished » et « Any work items between a started point and a finished point are considered work in progress ». Le guide ne parle pas d'élément bloqué dans les phrases relevées |
| Les Developers tirent l'élément ; le PO a ordonné le backlog (A2a) | [S1] ; `course/sources/00-scrum.md`, `course/sources/13-ordonner-backlog.md` | Lecture du cours : [S1] ne nomme que les « Kanban system members », qui tirent ; le cours y met les Developers, le PO gardant l'ordre du backlog (Scrum Guide, concepts 0, 1b et 13) |
| Le point d'engagement : le moment où l'on décide de commencer à livrer un élément ; avant, le travail sert à décider si on le livre (A2a, choix d'école de Kanban University) | [S5] | Glossaire : « Commitment Point: The point at which the decision is made to start activities to deliver a work item. Before this point, work done supports the decision whether to deliver the work item (see Upstream). » Absent de [S1] |

### A2b : sans objectif de sprint, ce qui donne la direction

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| Sans sprint, pas d'objectif de sprint ; la direction vient de l'objectif produit et de l'ordre du backlog (A2b) | [S1], [S3] ; ADR-018 | [S1] n'a ni objectif de sprint ni objectif produit (« goal » : une occurrence, « in pursuit of these goals », c'est-à-dire efficacité, efficience, prévisibilité). Que l'objectif produit et l'ordre du backlog donnent la direction en flux est la lecture du cours (parti pris), appuyée sur le Scrum Guide pour l'objectif produit et l'ordre (concepts 2 et 13, déjà vérifiés) |
| La place libérée va à l'élément prêt le plus haut du backlog ; le PO tient le haut du backlog à jour à mesure que les places se libèrent ; suivre la dernière relance laisse la pression ordonner (A2b, « Chacun tire ce qu'il veut ») | `course/sources/01-produit-et-po.md`, `course/sources/13-ordonner-backlog.md` ; [S1] | Lecture du cours, appuyée sur le PO qui ordonne et que l'on convainc (concepts 1b, 13) et sur le système tiré [S1]. Aucun guide Kanban ne le dit en ces termes |
| Le réapprovisionnement : revoir les éléments demandés qui remplissent les critères « prêt » et choisir ceux qui entrent selon la capacité (A2b, choix d'école de Kanban University) | [S5], [S4] | Glossaire : « Replenishment: The act of reviewing the requested work items that fulfill the "ready for delivery" criteria and selecting the ones to be pulled into the system based on available capacity. » Anderson : la réunion « Replenishment/Commitment » est l'une des sept cadences de la méthode |
| Les sept cadences de la méthode Kanban (Anderson) : ne pas ajouter sept réunions, adapter ou combiner les réunions existantes (A2b, A2c, si le fichier le dit) | [S4] | « When implementing the 7 cadences we don't expect people to add seven new meetings […] at smaller scale we expect the meetings to be combined » ; exemple d'un client : réapprovisionnement hebdomadaire, revue de la livraison du service toutes les deux semaines (un exemple, pas une règle) |
| Anderson sépare l'engagement à traiter une demande de l'engagement sur une date de livraison, et l'oppose à Scrum (A2b, aparté possible) | [S4] | « By decoupling commitment to service a request from commitment to a specific delivery date […] » ; séparer réapprovisionnement et planification de la livraison « really helps to underscore differences with methods such as Scrum where the two are combined and coupled together ». Opinion d'Anderson, pas un consensus |
| Le PO participe au réapprovisionnement (A2b, si le fichier le dit) | [S6] | Seulement dans des sources d'éditeurs d'outils : Nave (« should involve portfolio/product owners »), Kanban Zone (« the team, product owners and product development management »). Voir « Non vérifié » |

### A2c : sans revue de sprint, inspecter ce qui est livré ; A2d : prévoir en flux

| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| Sans sprint, pas de revue de sprint ; le *Kanban Guide* ne prévoit aucune réunion avec les parties prenantes (A2c) | [S1] | « event » : 0 occurrence. Il définit la partie prenante (« Stakeholder: An entity, individual, or group responsible for, interested in, or affected by […] ») mais ne dit pas quand on inspecte le produit avec elle. La seule revue citée est celle des éléments en cours par les membres du système (« review the active items regularly ») |
| Inspecter ce qui est livré avec les parties prenantes, à une cadence que l'équipe choisit (A2c, lecture du cours) | [S1], [S4], [S5], [S3] | Lecture du cours (aucun auteur ne la porte), appuyé sur l'absence de cadence imposée [S1] et sur les cadences de revue de Kanban University [S4], [S5]. Le Scrum Guide dit déjà que livrer ne dépend pas de la revue : « an Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value » |
| La revue de la livraison du service (Service Delivery Review), une cadence de la méthode Kanban (A2c, choix d'école) | [S5], [S4], [S6] | Glossaire : une « Review » est « a type of cadence designed to reflect on the performance or risk of one or more services with a goal to improve service delivery », « largely performed based on data and observations » ; exemples : « Service Delivery Review, Risk Review, Operations Review ». L'entrée « Cadences » dit « for the purpose of reviewing, coordinating, or improving the work being delivered ». Le fichier dit « performance du service », le mot du glossaire, sans préciser ce qu'elle mesure (délais ou autre : voir « Non vérifié »). Qu'elle ne soit pas l'inspection de l'incrément, ni une revue de sprint sans sprint, est la lecture du cours. Sa fréquence (toutes les deux semaines) et sa présence client ne se lisent que dans des sources d'éditeurs [S6] et un exemple d'Anderson [S4] |
| En flux, un élément fini peut être livré sans attendre de revue ; la fin d'un élément est définie par l'équipe (L'essentiel, A2c1) | [S3], [S1] | Lecture du cours. [S3] : « an Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value ». [S1] : « A definition for when work items are started and finished within the workflow » (« may have more than one started or finished point ») : le point de fin n'est pas forcément la livraison. Aucun texte ne dit que chaque élément fini est livré aussitôt |
| Les quatre mesures obligatoires du *Kanban Guide* : travail en cours, débit, âge d'un élément, temps de cycle (A2d) | [S1] | « The four mandatory flow metrics to track in Kanban are: WIP […] Throughput: The number of work items finished per unit of time […] Work Item Age: The elapsed time between when a work item started and the current date. Cycle Time: The elapsed time between when a work item started and when a work item finished. » Renommées en 2025 : « Kanban Measures renamed to Flow Metrics » ; autres noms permis |
| Prévoir en flux : une prévision probabiliste fondée sur l'historique du temps de cycle (A2d, renvoi 16c) | [S1] | L'attente de niveau de service (SLE) « is a forecast of how long it should take a work item to flow from started to finished » ; deux parties : une durée et une probabilité (« e.g., "85% of work items will be finished in eight days or less" ») ; « should be based on historical cycle time » ; sans historique, « a best guess will do ». Un workflow prévisible permet de « forecast value delivery within an acceptable degree of uncertainty ». Rejoint la prévision en fourchette du concept 16c. Les « 85 % en huit jours » sont l'exemple du guide : un exemple vélos chiffré se pose en situation d'exercice |
| La prévision vient des Developers et de leurs mesures, pas d'une date que le PO invente ; le temps de cycle se compte depuis le début d'un élément, pas depuis la demande ; l'attente de niveau de service n'est pas une promesse (A2d2, « Bruno demande pour quand ») | [S1] ; `course/sources/16-story-map.md` (concept 16c) | Définition du temps de cycle et de la SLE (durée et probabilité) [S1] : vérifiées ci-dessus. Que la prévision vienne des Developers est le renvoi au concept 16c (lecture du cours : [S1] parle des « Kanban system members »). Les « 9 sur 10 en 12 jours » sont une situation d'exercice |
| Le débit aide le PO à parler des dates de livraison probables (A2d, si le fichier le dit) | [S2] | « Reviewing Throughput can provide additional information when the Product Owner discusses likely delivery dates » (revue de sprint) ; « Reviewing historical throughput can help a Scrum Team understand their capacity for the next Sprint ». C'est le *Kanban Guide for Scrum Teams*, dans des sprints : ne pas l'attribuer au *Kanban Guide* |
| Le Scrum Guide cite « cumulative flows » parmi les pratiques de prévision, sans en imposer (A2d, renvoi 16c) | [S3] | « Various practices exist to forecast progress, like burn-downs, burn-ups, or cumulative flows. While proven useful, these do not replace the importance of empiricism. » Déjà relevé dans `course/sources/00-scrum.md` |

## Références
| Réf. | Source (auteur, titre, date) | Lien | Type | Consultée le |
|---|---|---|---|---|
| S1 | Coleman, Vacanti (créateurs), avec Johnson, Singh, Wester et al., *The Kanban Guide*, v2025.5, 1er mai 2025 (© Orderly Disruption Limited, Daniel S. Vacanti, Inc.) | https://kanbanguides.org/english/ | primaire | 2026-10-23 (texte téléchargé et cherché ; déjà S6 de `course/sources/03-backlog-produit.md`) |
| S2 | Scrum.org, Vacanti, Yeret (avec Porter), *The Kanban Guide for Scrum Teams*, janvier 2021, version en ligne | https://www.scrum.org/resources/online-kanban-guide-scrum-teams | primaire (Scrum.org vend aussi la formation et la certification associées) | 2026-10-23 (texte intégral lu ; seul un extrait l'avait été pour le concept 3) |
| S3 | Schwaber, Sutherland, *The Scrum Guide*, novembre 2020 | https://scrumguides.org/scrum-guide.html | primaire | 2026-10-23 (déjà S1 de `course/sources/00-scrum.md` ; phrases recherchées dans le texte téléchargé) |
| S4 | Anderson, « Kanban Cadences », Kanban University (sans date) | https://kanban.university/kanban-cadences | primaire pour ce que dit la méthode ; marketing pour ce qu'elle recommande (organisme qui vend ses formations) | 2026-10-23 |
| S5 | Kanban University, « The Kanban Method Glossary » (sans date), entrées « Commitment Point », « Replenishment », « Review », « Cadences » | https://kanban.university/glossary | primaire pour les définitions de la méthode ; marketing pour ce qu'elle recommande | 2026-10-23 |
| S6 | Éditeurs d'outils : Nave, « The Rhythm of Success: Kanban Meetings » ; Kanban Zone, « Improve information flow with Kanban cadences » (2019) | https://getnave.com/blog/kanban-meetings ; https://kanbanzone.com/2019/improve-your-information-flow-with-kanban-cadences | marketing (extraits de recherche seulement) | 2026-10-23 |
| S7 | Wikipédia, « Kanban (development) » | https://en.wikipedia.org/wiki/Kanban_(development) | secondaire (extrait de recherche seulement) | 2026-10-23 |
| S8 | Saltz, Shamshurin, Crowston, « Comparing Data Science Project Management Methodologies via a Controlled Experiment », HICSS-50, janvier 2017 | https://scholarspace.manoa.hawaii.edu/items/de744e20-d1a2-4a3f-b213-227065eb83c6 | primaire (résumé seul lu) | 2026-10-23 |

## Non vérifié
- **Fréquences des cadences** (réapprovisionnement hebdomadaire, revue de la livraison du
  service toutes les deux semaines) : seulement un exemple d'Anderson [S4] et des sources
  d'éditeurs [S6]. Le fichier ne donne pas de fréquence comme règle.
- **Qui participe au réapprovisionnement** (le PO, le client) et **à la revue de la livraison
  du service** : sources d'éditeurs seulement [S6] ; le glossaire de Kanban University [S5] ne
  le dit pas dans les entrées lues. Le livre d'Anderson (2010) n'a pas été lu.
- **Liste des pratiques de la méthode Kanban** (visualiser, limiter le travail en cours, gérer
  le flux, rendre les règles explicites, boucles de rétroaction, améliorer ensemble) : vue
  seulement sur Wikipédia [S7] ; à ne pas énumérer, ou en « Non vérifié ».
- **Première version du *Kanban Guide for Scrum Teams*** : seule la version de janvier 2021 a
  été lue [S2] ; une version antérieure (2019) n'a pas été vérifiée.
- **Mot « limite » dans les versions 2020 du *Kanban Guide*** : non lues ; seule la note des
  adaptations 2025 (« Less explicit […] how WIP is controlled ») laisse penser qu'elles étaient
  plus explicites.
- **Ce que mesure la revue de la livraison du service** (délais, attentes du client) : ni le
  glossaire [S5] ni la page des cadences [S4] ne le disent ; le fichier dit seulement
  « performance du service ».
- **Prévision du nombre d'éléments livrés à une date par le débit** (simulation de Monte Carlo
  ou autre) : absente de [S1] et [S2] ; à ne pas affirmer.
- **Part des équipes data qui travaillent en flux** : aucune enquête trouvée par T-021 ni ici
  (ce qui ne prouve pas qu'il n'en existe pas) ; [S8] est une
  expérience sur des étudiants (résumé seul lu). Le fichier ne l'affirme pas.
- **Dates des pages de Kanban University** [S4], [S5] : non datées ; l'ajout de la « Risk
  Review » en 2014 est dit par Anderson [S4], sans autre source.
