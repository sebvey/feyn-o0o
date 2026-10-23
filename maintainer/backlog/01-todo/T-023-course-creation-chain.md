# T-023 : Cadrer la chaîne de création d'un cours (process, modèle de brief, skill `course-framing`)

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur après T-018a : tirer de la méthode appliquée au cours de
  PO de quoi créer un autre cours plus tard. Les bases, à affiner ensuite. La méthode existe
  aujourd'hui en morceaux : cadrage fait à la main dans T-018a (brief d'agent en annexe, sortie
  `maintainer/work/T-018/framing.md`), production par lots dans T-018 §3 et §5, tests de bout
  en bout dans T-018 §4, amélioration continue par `CLAUDE.md` et le
  skill `maintenance`.
- **À faire** :

  ### 1. Décrire la chaîne

  Un fichier de process (emplacement à proposer, ex. `maintainer/course-creation.md`) : chaque
  étape, son outil, son entrée, sa sortie sur disque et sa condition de sortie. Une étape ne
  part que de la sortie de la précédente.

  | Étape | Outil | Entrée | Sortie |
  |---|---|---|---|
  | 1. Brouillon avec le créateur du cours | skill `course-draft`, interactif (plus tard) | idée du créateur | `course/brief.md` |
  | 2. Cadrage | skill `course-framing`, interactif, lance un agent | brief | `course/plan.md`, `course/glossary.md`, fil rouge, sous-tickets de lots, ADR |
  | 3. Production par lots | workflow `course-lot` (T-018b) | sous-ticket de lot | fiches de concept et fichiers de sources validés |
  | 4. Cohérence et tests de bout en bout | workflow (T-018h) | cours complet | rapport, corrections |
  | 5. Enseignement et amélioration | `CLAUDE.md`, skill `maintenance` | sessions de cours (`learner/`, conversations) | tickets |

  ### 2. Modèle du brief (sortie de l'étape 1)

  `course/templates/brief.md` (ou à côté du skill) : sujet en une phrase ; public cible (profil,
  acquis) ; objectifs de fin, observables ; partis pris assumés et hors champ ; domaine du fil
  rouge et sa raison ; références de départ ; contraintes de forme (prof agent, 15 lignes, durée
  visée) ; premier jet de concepts. Chaque champ rempli ou marqué « à instruire ». Le skill
  `course-draft` qui le produit n'est pas dans ce ticket.

  ### 3. Skill `course-framing` (étape 2)

  Écrit avec le skill `skill-crafting`. Déroulé, tiré de T-018a :
  1. Lire le brief ; lister les **contraintes héritées** (apprenant en cours, contenu existant,
     numérotation) et demander au créateur lesquelles sont fermes, avant tout plan.
  2. Lancer un agent de cadrage (base : le brief en annexe, généralisé ; modèle le plus
     capable ; références vérifiées en ligne ; un seul fichier de sortie ; rendu court).
     Sections de sortie : public cible et objectifs ; **partis pris** ; contraintes héritées ;
     analyse des manques face aux références ; plan (objectif, prérequis, sous-concepts tenables
     en un message) ; glossaire ; plan du fil rouge et faits nouveaux ; lots ; questions au
     créateur ; sources.
  3. Relire le brouillon de façon critique avant de le présenter (faits vérifiés, contrainte
     qui déforme le plan, taille du cours).
  4. Faire trancher par le créateur : au plus 4 questions structurantes à la fois, chacune avec
     une recommandation et l'option écartée.
  5. Appliquer : plan, glossaire, fil rouge, modèles de concept et de sources, sous-tickets de
     lots (3 concepts par lot, dans l'ordre du cours), ADR.
  6. Tester par un agent prof neuf (premier concept, réponse partielle, « quelle est ta
     source ? », arrêt) et corriger avant de clore.

  ### 4. Apprentissages de T-018a à intégrer (avec le fait)

  - Une contrainte héritée non questionnée a déformé le brouillon (numérotation gardée pour un
    seul apprenant, levée d'un mot par le mainteneur) -> étape 1 du skill.
  - Le parti pris des sprints est apparu tard (T-021) -> section « partis pris » du brief et du
    cadrage.
  - L'exigence de sources tracées est arrivée en cours (T-022) ; le glossaire s'est révélé
    nécessaire aux rédacteurs en parallèle -> sorties standard dès le départ.
  - Le test par agent neuf a trouvé ce que la relecture avait raté (question de contrôle du
    concept 0 écrite nulle part, ambiguïté sur « citer ») -> chaque étape finit par un test.
  - Lots de 3 concepts pour rester sous 50 agents par workflow.

  ### 5. Limite connue

  Les skills et workflows supposent un cours dans `course/` de ce dépôt, et `CLAUDE.md` est
  propre au cours de PO (« professeur de gestion de produit »). Séparer le cadre générique du
  contenu (dépôt modèle ou plugin, un dépôt par cours) attend un vrai second cours.

- **Fini quand** : le fichier de process, le modèle de brief et le skill `course-framing`
  existent ; un sous-agent neuf, sur un brief fictif court (autre sujet), suit le skill jusqu'au
  brouillon de cadrage et aux questions au créateur, sans écrire dans `course/`.

## Annexe : brief de l'agent de cadrage de T-018a

Abrégé : exemples propres au cours de PO retirés, liste de références remplacée par
« [liste propre au sujet] ».

```text
Tu travailles dans le dépôt `/Users/sve/code/workspaces/perso/pdx/parcours-po` : un cours de gestion de produit (Product Owner) donné par un agent prof, concept par concept, à un apprenant. Tu rédiges le brouillon du cadrage du curriculum (ticket T-018a), que le mainteneur discutera ensuite. Tu proposes ; tu ne décides pas à sa place.

## À lire d'abord, sur disque (pas de résumé de seconde main)
- `maintainer/backlog/03-done/T-018a-curriculum-framing.md` : ton ticket (son « À faire » est ta commande).
- `maintainer/backlog/01-todo/T-018-course-content-rewrite.md` : le chantier parent (objectif, méthode des lots, §6 apprenant en cours).
- `CLAUDE.md` : comment le prof enseigne (15 lignes par message, un sous-concept par message avec une question qui teste, consensus vs choix d'école, fil rouge). Section « Style » : règles d'écriture que tu suis.
- `course/plan.md`, `course/fil-rouge-velos.md`, `course/templates/concept.md`, tous les fichiers de `course/concepts/`.
- `maintainer/improvements/` (tous les fichiers) ; `maintainer/work/T-018/learner-observations.md` (observations anonymisées d'un premier apprenant), à lire comme des erreurs typiques possibles du public cible (n'écris jamais de fait sur l'apprenant réel, anonymise).
- `maintainer/adr/` : ADR-009, ADR-010, ADR-012, ADR-015 au minimum (ne défais pas une décision sans le dire).
- Ne lis pas `archive/`.

## Ce que tu produis
Un seul fichier : `maintainer/work/T-018/framing.md` (crée le dossier). Tu n'écris nulle part ailleurs : ni `course/`, ni `learner/`, ni le backlog. En français, selon la section « Style » de `CLAUDE.md` (pas de tirets longs ni de flèches dans la prose ; « -> » permis).

Sections, dans cet ordre :
1. **Public cible et objectifs du cours** : le public en une phrase ; 4 à 7 objectifs d'apprentissage de fin de cours (« à la fin, l'apprenant sait… »), observables.
2. **Analyse des manques** : confronte le plan actuel au public cible « développeur ou profil data qui devient PO sur des projets data, bonnes bases » et aux références. Instruis au moins les pistes du ticket (Product Goal et vision, parties prenantes, mesure de la valeur et indicateurs, découverte avant livraison, spécificités data : définition des indicateurs, qualité et accès aux données, incertitude et exploration). Pour chaque piste : ce que disent les références (consensus ou choix d'école, attribué), verdict proposé (nouveau concept, sous-concept d'un concept existant, annexe, ou écarté) et sa raison rapportée au public cible. Relève aussi ce que le plan actuel contient de trop ou de mal placé. Le cours vise de bonnes bases, pas l'exhaustivité : chaque ajout se justifie, chaque écart a sa raison.
3. **Plan proposé** : tableau des concepts dans l'ordre (numéro, titre, objectif « à la fin, l'apprenant sait… », prérequis, sous-concepts Na/Nb… chacun tenable en un message de 15 lignes avec une question). Dis quels concepts sont nouveaux, fusionnés, déplacés. Contrainte du §6 de T-018 : l'apprenant en cours est au concept 10 (10b en attente), 1 à 9 validés ; si tu renumérotes, donne la table de correspondance ancien -> nouveau et l'effet sur sa reprise ; préfère un plan qui ne casse pas sa reprise, et signale un concept nouveau inséré avant le 10 (il lui sera proposé en rattrapage). Indique une estimation grossière de la taille du cours (nombre de sous-concepts).
4. **Glossaire** : les termes du cours, un seul terme par notion (français, avec le terme anglais quand il est d'usage), une définition d'une ligne, le concept qui l'introduit. Recommande ou non d'en faire un fichier `course/glossary.md`, avec la raison.
5. **Plan du fil rouge** : pour chaque concept, la situation, les acteurs et les faits du fil rouge vélos qu'il mobilise (en réutilisant ceux de `course/fil-rouge-velos.md` ; change de situation d'un concept à l'autre, pas de domaine). Liste à part les **faits nouveaux à fixer** (acteurs, sources, faits métier) avec leur raison. Aucun fait nouveau ne doit contredire le fichier actuel.
6. **Lots** : le découpage de la réécriture en lots de 2 à 4 concepts, dans l'ordre de la valeur, chacun avec son contenu et sa dépendance directe, puis le sous-ticket final (cohérence d'ensemble et tests de bout en bout). Tiens compte de la limite d'environ 50 agents par workflow de lot (T-018 §5).
7. **Questions pour le mainteneur** : les choix qui lui reviennent, chacun avec ta recommandation et l'option écartée. Pas plus de 8, les plus structurantes d'abord.
8. **Sources** : chaque source citée, avec URL, type (primaire, secondaire, marketing) et ce que tu y as vérifié. Signale ce que tu n'as pas pu vérifier.

## Exigences sur les références
Vérifie en ligne (WebSearch, WebFetch, ou les outils tavily si chargés via ToolSearch) plutôt que de mémoire, et cite une source primaire quand elle existe. Références à confronter au minimum : [liste propre au sujet]. Traite le marketing comme une allégation. Distingue consensus et choix d'école, et attribue chaque choix d'école. Si une référence est payante ou inaccessible, dis ce que tu as pu en vérifier (table des matières, résumé de l'éditeur) et ce qui reste non vérifié.

## Rendu
Quand le fichier est écrit, réponds en 20 lignes au plus : les changements structurants que tu proposes au plan, les faits du fil rouge à fixer, les lots, et les points dont tu n'es pas sûr.
```

À généraliser dans le skill : chemins et ticket en paramètres, contrainte « apprenant en cours »
remplacée par l'étape des contraintes héritées, sections « partis pris » et « contraintes
héritées » ajoutées, liste de références tirée du brief.
