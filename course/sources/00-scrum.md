---
concept: 0
---

# Sources : Scrum en bref et l'incrément

Le Scrum Guide 2020 [S1] fait foi pour le concept : ce qui en vient relève du consensus. Les
choix du cours sont signalés dans la colonne « Ce qui a été vérifié » et dans la section
« Consensus et choix d'école » du concept.
Le fichier du concept ne contient aucun choix d'école attribué à un auteur ; le parti pris des
sprints est un « parti pris du cours » (`course/plan.md`, ADR-018), ni consensus ni choix d'école, sans source externe.

## Affirmations
| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| Scrum est décrit par le Scrum Guide, de Schwaber et Sutherland, version de novembre 2020 (L'essentiel) | [S1] | « direct port of the November 2020 version » ; « © 2020 Ken Schwaber and Jeff Sutherland » ; « The Scrum Guide contains the definition of Scrum » |
| Scrum est un cadre de travail (L'essentiel) | [S1] | « Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems » |
| Les trois responsabilités : Developers, Product Owner, Scrum Master (L'essentiel, 0a) | [S1] | « Scrum defines three specific accountabilities within the Scrum Team: the Developers, the Product Owner, and the Scrum Master » ; « one Scrum Master, one Product Owner, and Developers » |
| L'équipe Scrum, sans sous-équipe ni hiérarchie, autogérée, en général dix personnes au plus (0a) | [S1] | « no sub-teams or hierarchies » ; « self-managing, meaning they internally decide who does what, when, and how » ; « typically 10 or fewer people » |
| Les Developers réalisent l'incrément (0a) | [S1] | « Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint » ; ils créent le backlog de sprint et respectent la DoD |
| Le PO répond de la valeur du produit et de la gestion du backlog, dont l'ordre (0a, question de contrôle) | [S1] | « accountable for maximizing the value of the product » ; gestion du backlog : « Developing and explicitly communicating the Product Goal; Creating and clearly communicating Product Backlog items; Ordering Product Backlog items » |
| Le PO est une seule personne ; il peut déléguer le travail, pas la responsabilité ; qui veut changer l'ordre doit le convaincre (0a1, question de contrôle) | [S1] | « one person, not a committee » ; « may delegate the responsibility to others. Regardless, the Product Owner remains accountable » ; « Those wanting to change the Product Backlog can do so by trying to convince the Product Owner ». « Le PO seul ordonne » est juste au sens où il en répond seul ; il peut confier le travail d'ordonner |
| Le PO crée les éléments du backlog (question de contrôle, réponse partielle « le PO écrit les tickets ») | [S1] | Le PO répond de « Creating and clearly communicating Product Backlog items », et peut déléguer. « Ticket » n'est pas un terme du Scrum Guide |
| Le Scrum Master répond de l'efficacité de l'équipe (0a) | [S1] | « accountable for the Scrum Team's effectiveness » ; il aide à lever les obstacles (« Causing the removal of impediments ») |
| Le sprint : durée fixe d'un mois au plus ; le suivant commence dès la fin du précédent (L'essentiel, 0a, 0b, question de contrôle) | [S1] | « fixed length events of one month or less » ; « A new Sprint starts immediately after the conclusion of the previous Sprint » |
| Le sprint contient quatre événements : Sprint Planning, Daily Scrum, revue de sprint, rétrospective (L'essentiel, 0a) | [S1] | « Scrum combines four formal events for inspection and adaptation within a containing event, the Sprint » ; « Sprint Planning, Daily Scrums, Sprint Review, and Sprint Retrospective, happen within Sprints ». Le sprint est lui-même un événement : « 4 événements » sans le dire est inexact |
| Sprint Planning : fixe l'objectif de sprint, choisit les éléments et fait le plan ; 8 h au plus pour un sprint d'un mois (0a) | [S1] | « Sprint Planning initiates the Sprint » ; trois sujets « Why », « What », « How » ; « timeboxed to a maximum of eight hours for a one-month Sprint » |
| Sprint Planning : le PO propose comment le sprint peut augmenter la valeur, toute l'équipe fixe l'objectif de sprint, les Developers choisissent les éléments en discutant avec le PO (0a, exemple « Le sprint raconté par Diego ») | [S1] | « The Product Owner proposes how the product could increase its value and utility in the current Sprint. The whole Scrum Team then collaborates to define a Sprint Goal » ; « Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint » |
| Les Developers adaptent leur plan chaque jour et respectent la DoD (0a1, exemple « Qui tranche ») | [S1] | Responsabilités des Developers : « Adapting their plan each day toward the Sprint Goal » ; « Instilling quality by adhering to a Definition of Done » |
| Le Daily Scrum n'est pas un compte rendu au Scrum Master (0a, exemple « Le sprint raconté par Diego », Pièges) | [S1] | « a 15-minute event for the Developers ». « Pas un compte rendu au Scrum Master » découle de cette phrase |
| Revue de sprint : l'équipe présente son travail aux parties prenantes clés (0a, 0b) | [S1] | « The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed » |
| Daily Scrum : 15 minutes, pour les Developers, inspecte l'avancement vers l'objectif de sprint ; les Developers en choisissent la structure, les trois questions ne sont plus dans le Guide (0a2) | [S1], [S2] | « a 15-minute event for the Developers » ; « inspect progress toward the Sprint Goal and adapt the Sprint Backlog » ; « The Developers can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal » ; les trois questions ont été retirées en 2020 [S2] |
| Revue de sprint : séance de travail où l'équipe montre son travail, puis inspecte avec les parties prenantes ce que le sprint a produit (« outcome of the Sprint ») et adapte le backlog ; elle ne se réduit pas à une présentation ; 4 h au plus (0a2, 0b, Pièges). « Ce que le sprint a produit » traduit « outcome » sans employer « résultat », réservé au sens du concept 2 (glossaire) | [S1] | « inspect the outcome of the Sprint and determine future adaptations » ; « The Product Backlog may also be adjusted » ; « working session […] avoid limiting it to a presentation » ; « maximum of four hours for a one-month Sprint » |
| Rétrospective : inspecte la façon de travailler, DoD comprise ; clôt le sprint ; 3 h au plus (0a) | [S1] | « inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done » ; « concludes the Sprint » ; « maximum of three hours » |
| Pendant le sprint, on ne compromet pas l'objectif de sprint (0b, Erreurs fréquentes) | [S1] | « No changes are made that would endanger the Sprint Goal » |
| Les trois artefacts : backlog produit, backlog de sprint, incrément (L'essentiel, 0a) | [S1] | Sections « Product Backlog », « Sprint Backlog », « Increment » sous « Scrum Artifacts » |
| Chaque artefact a son engagement : objectif produit, objectif de sprint, DoD (0a) | [S1], [S2] | « For the Product Backlog it is the Product Goal. For the Sprint Backlog it is the Sprint Goal. For the Increment it is the Definition of Done. » Les engagements et l'objectif produit sont apparus en 2020 [S2] |
| Les artefacts représentent le travail ou la valeur ; chacun a un engagement qui donne un repère pour juger l'avancement (0a, exemple « Trois artefacts ») | [S1] | « Scrum's artifacts represent work or value » ; « Each artifact contains a commitment to ensure it provides information that enhances transparency and focus against which progress can be measured » |
| Objectif produit : état futur visé du produit, cible à long terme (0a) | [S1] | « The Product Goal describes a future state of the product which can serve as a target for the Scrum Team to plan against » ; « the long-term objective for the Scrum Team » |
| Objectif de sprint : objectif unique du sprint (0a) | [S1] | « The Sprint Goal is the single objective for the Sprint » |
| DoD : description de l'état que doit atteindre l'incrément ; elle vaut pour tout ce qui entre dans l'incrément, donc pas pour une échéance propre à un sprint (0a, réponse attendue de « Trois artefacts ») | [S1] | « The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product » ; « Work cannot be considered part of an Increment unless it meets the Definition of Done ». Qu'une échéance n'y ait pas sa place est un choix du cours (Consensus et choix d'école, « Choix du cours »). Qu'elle relève de l'objectif de sprint (le « why ») si elle dit ce que le sprint vise, ou du plan des Developers (le « how ») si elle organise le travail, est dit seulement dans la Réponse attendue de la banque, comme lecture du cours des rôles de ces deux éléments du backlog de sprint |
| Backlog produit : liste ordonnée et émergente, source unique du travail (0a) | [S1] | « an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team » |
| Backlog de sprint : objectif de sprint, éléments choisis, plan ; le plan est celui des Developers (0a1, 0a3) | [S1] | « composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how) » ; « a plan by and for the Developers » |
| L'incrément : utilisable, qui remplit la DoD (L'essentiel, 0b) | [S1] | « An Increment is a concrete stepping stone toward the Product Goal » ; « the Increment must be usable » ; « Work cannot be considered part of an Increment unless it meets the Definition of Done » ; « The moment a Product Backlog item meets the Definition of Done, an Increment is born ». « Le produit dans un nouvel état utilisable » est une reformulation fidèle, pas une citation |
| L'incrément est cumulatif (Consensus, 0b, visuel) | [S1] | « Each Increment is additive to all prior Increments and thoroughly verified » |
| Plusieurs incréments par sprint, livrables avant la fin du sprint ; la revue n'est pas une porte de mise en production (Consensus, 0b, situation du fil rouge) | [S1] | « Multiple Increments may be created within a Sprint » ; « an Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value » |
| Un élément qui ne remplit pas la DoD n'est ni livré ni présenté en revue ; il retourne au backlog (0b) | [S1] | « it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog » |
| Piège : on ne « livre pas un sprint », on livre des incréments (Pièges) | [S1] | Le sprint est un événement de durée fixe ; ce qui se livre est l'incrément (« an Increment may be delivered »). La fréquence de cette confusion vient des sessions du cours, sans source externe (voir « Non vérifié ») |
| Piège : un pipeline fini mais inconsommable n'est pas un incrément (Pièges) | [S1] | Découle de « the Increment must be usable » et de la DoD. Exemple propre au cours |
| Test rapide : « Si on décidait de le livrer maintenant, un utilisateur pourrait-il s'en servir, et la DoD est-elle remplie ? » (Le test rapide) | [S1] | Le Scrum Guide exige un incrément utilisable et conforme à la DoD ; il n'exige pas qu'il soit livré (« may be delivered »). Le test mêle « utilisable » et « mis en service » |
| Un sprint de deux semaines est conforme (situation du fil rouge) | [S1] | Un mois au plus ; « Shorter Sprints can be employed to generate more learning cycles » |
| Le Scrum Guide ne parle ni de vision produit, ni de user story, ni de Definition of Ready (limites du consensus, si l'échange y mène) | [S1] | Texte du Guide 2020 cherché : « vision » et « user story » : 0 occurrence ; « Definition of Ready » absente |

## Références
| Réf. | Source (auteur, titre, date) | Lien | Type | Consultée le |
|---|---|---|---|---|
| S1 | Schwaber, Sutherland, *The Scrum Guide*, novembre 2020 (version HTML, portage du PDF ; PDF anglais de 14 pages) | https://scrumguides.org/scrum-guide.html ; https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf | primaire | 2026-10-22 |
| S2 | Scrumguides.org, « Scrum Guide Revision History », section « Changes between 2017 and 2020 Scrum Guides » | https://scrumguides.org/revisions.html | primaire | 2026-10-22 |
| S3 | Schwaber, Sutherland, *Le Guide Scrum*, traduction française, novembre 2020 | https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-French.pdf | primaire | 2026-10-22 |

## Non vérifié
- Les termes français de la traduction officielle [S3] (par exemple « Objectif de Produit »,
  « Incrément », « Responsabilités ») : le texte du PDF n'a pas pu être extrait. Les termes du
  cours suivent `course/glossary.md`, sans vérification contre cette traduction.
- La fréquence de la confusion « on livre un sprint » : observée dans les sessions du cours
  (amélioration de session (`off-course.md`, historique git), entrée du 2026-10-21), sans étude ni source
  externe. À présenter comme une erreur fréquente en formation, pas comme un fait mesuré.
