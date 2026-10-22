# T-018a : Cadrer le curriculum et le fil rouge, et découper la réécriture en lots

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Constat** : le plan du cours (`course/plan.md`) est né du profil de sve et n'a jamais été
  confronté au public cible ni à des références ; le fil rouge n'est pas planifié concept par
  concept. Des rédacteurs en parallèle (lots de T-018) inventeraient des faits contradictoires
  sans ce cadrage. Entrées : voir T-018, §1.
- **À faire** (un agent, puis discussion avec le mainteneur) :
  - Formuler le public cible en une phrase et ce qu'il saura faire à la fin (objectifs
    d'apprentissage du cours).
  - Pour chaque concept : objectif d'apprentissage (« à la fin, l'apprenant sait… »),
    prérequis, sous-concepts (chacun tenable en un message de 15 lignes avec sa question).
  - Analyse des manques face au public cible « PO sur des projets data », à confronter aux
    références (Scrum Guide 2020, référentiels de certification PO, ouvrages de référence sur
    les stories, le story mapping, la priorisation, la gestion de produit data). Pistes à
    instruire, pas décidées : vision et objectif produit (Product Goal du Scrum Guide), parties
    prenantes, mesure de la valeur et indicateurs, découverte avant livraison, spécificités data
    (définition des indicateurs, qualité et accès aux données, incertitude et exploration). Le
    cours vise de **bonnes bases** : chaque ajout se justifie par le public cible, chaque
    concept non retenu est noté avec sa raison.
  - Glossaire du cours (un seul terme par notion) : décider s'il devient un fichier
    `course/glossary.md`.
  - Plan du fil rouge : quels acteurs et situations pour quel concept, quels faits nouveaux
    fixer (nouveaux acteurs, sources), à partir des entrées `fil rouge` de
    `maintainer/improvements/`. Le test de T-019 a relevé que l'équipe vélos n'a ni Scrum
    Master ni sponsor ou direction au-dessus de la DSI, alors que la levée des obstacles et
    l'escalade d'une dépendance sont des questions naturelles en 9b et 10b ; un prof a improvisé
    un directeur des opérations, sponsor de la plateforme.
  - Découper la réécriture en lots, dans l'ordre de la valeur (premier lot proposé : les
    concepts que sve aborde ensuite), et créer leurs sous-tickets (T-018b et suivants), puis le
    sous-ticket final (cohérence d'ensemble et tests de bout en bout, T-018 §4), chacun avec sa
    dépendance directe ; mettre à jour le tableau du §2 de T-018.
  - Si le plan renumérote ou redécoupe les concepts : appliquer T-018 §6 (apprenant en cours).
  - Sortie : `course/plan.md` réécrit, `course/fil-rouge-velos.md` complété.
- **Fini quand** : le mainteneur a validé `course/plan.md` et `course/fil-rouge-velos.md` ; les
  sous-tickets des lots et le sous-ticket final existent, chacun avec `Parent` et `Dépend de` ;
  le tableau de T-018 est à jour.
- **Fait le** : 2026-10-22, brouillon de cadrage par un agent (`maintainer/work/T-018/framing.md`),
  discuté avec le mainteneur : plan réordonné en 18 concepts (`course/plan.md`, objectifs et
  sous-concepts), fiches et améliorations renumérotées, glossaire (`course/glossary.md`), fil
  rouge complété (F1 à F11, situations par concept), sve remis à zéro, sous-tickets T-018b à
  T-018h, ADR-017 ; T-021 (sprints) et T-022 (sources) créés en chemin. Test par sous-agent
  neuf (on reprend, on continue, réponse partielle, « quelle est ta source ? », arrêt) : bons
  chemins, concept 0 annoncé, cadre du fil rouge présenté, réponses de 2 à 8 lignes, source
  manquante signalée et notée, reprise propre. Corrigé après le test : nommer le Scrum Guide
  reste permis, renvoi périmé à l'annexe A1, question de contrôle du concept 0 confiée à T-018b.
