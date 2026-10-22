# T-018d : Lot 3, réécrire les concepts 6, 7 et 8

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018c
- **Constat** : découpage de T-018a. Fiche 6 (rôles et personas) sans exemple ; fiches 7
  (INVEST) et 8 (critères et règles métier) avec des exemples vélos écrits pour un apprenant.
- **À faire** :
  - Lancer `course-lot` sur T-018d, sur demande du mainteneur (T-018 §5).
  - Méthode de T-018 §3 pour les concepts 6, 7 et 8, d'après leurs lignes de `course/plan.md`
    et leurs situations dans `course/fil-rouge-velos.md`.
  - Entrées propres au lot : `maintainer/improvements/07-invest.md` ; `framing.md` §2.4 (S
    d'INVEST : chez Wake, « a few person-weeks » ; « quelques jours » est une pratique
    courante) ; observations `[c7]`, `[c8]` et `[c15]` ; la section « Production » de
    `maintainer/work/T-018/learner-observations.md` (critère Given/When/Then de Julie, exemple
    éprouvé).
  - Tout le lot : ne pas réenseigner, y renvoyer : les consommateurs de données sont des
    utilisateurs (1) ; les trois parties de la story, les 3C, la solution hors du « je veux »,
    le chiffre précis hors de la phrase (5) ; une story tient dans un sprint, un besoin plus gros
    est un epic qui se découpe (4) ; une règle non fixée (seuil « presque vide »), le PO ne
    l'invente pas, la story attend qu'elle le soit (4). Pas encore enseignés : refinement (15),
    DoR (11), découpage (9), traitement des dépendances (10) ; les nommer avec renvoi, sans les
    enseigner.
  - Sources : partir de `maintainer/work/T-018/framing.md` §8 et des fichiers de
    `course/sources/` des concepts 0 à 5 (Wake 2003, Cohn, Jeffries y sont déjà) ; ne chercher
    que ce qui manque : rôles utilisateurs (Cohn), personas (Cooper), BDD (Dan North), Gherkin,
    Specification by Example (Adzic), origine XP du spike, ce que le Scrum Guide dit de la
    taille d'un élément prêt pour le Sprint Planning.
  - Concept 6 : l'exemple et le schéma des OF (projet archivé) sont remplacés par la situation 6
    du fil rouge (tournée de réparation : Hugo ou Sophie ? Julie comme persona des abonnés sans
    l'appli). Le piège « deviner l'acteur, le faire valider par le PO » devient : le PO ne
    devine pas l'acteur, il le vérifie auprès des utilisateurs. Reprendre les deux pièges que le
    concept 5 renvoie ici : acteur technique (celui qui construit au lieu de celui qui agit et y
    gagne) et valeur d'un autre rôle dans le « afin de ». Les concepts 7 et 8 gardent la story
    de Julie « En tant qu'abonné… » : le concept 6 n'enseigne rien qui la rende fautive. Persona :
    choix d'école, 6b court.
  - Concept 7 :
    - S : Wake écrit « at most a few person-weeks » ; « quelques jours » est une pratique
      courante ; dire lequel est lequel, et rester cohérent avec le concept 4 (une story tient
      dans un sprint).
    - 7a : le mot flou dont dépendent plusieurs lettres (observation `[c7]` : E et S cochés sans
      pouvoir le vérifier) ; le visuel des OF est remplacé. Le mot flou de l'exemple est un point
      que le fil rouge laisse non fixé (seuil « presque vide », heures de pointe, station vide
      en vélos à quai ou disponibles) ; la réponse attendue le fait fixer par l'utilisateur
      concerné, jamais par l'apprenant ni par les Developers. « Vélo en panne » (15a) et
      « location » (12a) restent à leurs concepts.
    - 7a : si les six lettres et le mot flou ne tiennent pas en un message de 15 lignes, découper
      (7a1, 7a2) et le noter comme besoin de plan.
    - 7b : garder l'exemple éprouvé du SMS de Julie et la question « qu'est-ce qui devient non
      négociable, et où l'écris-tu ? » (`maintainer/improvements/07-invest.md`) ; faire le lien
      explicite : une contrainte va dans un critère d'acceptation, dont l'écriture vient au
      concept 8.
    - I : la story de Julie dépend de l'équipe appli pour le canal (fait fixé) ; illustration
      possible, le traitement des dépendances reste au concept 10.
    - Retirer le piège de la story « définir X » : il appartient à 15a (observation `[c15]`).
      Le spike : une ligne, choix d'école, renvoi au concept 17. Pour un besoin flou, écrire
      « préciser le mot avec l'utilisateur avant le sprint (concept 15) », sans le terme
      « refinement ».
    - « INVEST juge la story entière (phrase, critères, conversation) » : sourcer ou retirer.
  - Concept 8 :
    - 8b : la production de `learner-observations.md` (v1 de l'apprenant, v2 corrigée) devient
      un exemple de la banque, en français : critère à corriger (When absent, Then « elle peut
      savoir », « pas de smartphone » au lieu de « téléphone basique »).
    - Fraîcheur : le Then vérifie l'âge des données (moins de 15 minutes, fixé au fil rouge),
      pas la fréquence de rafraîchissement de la plateforme (toutes les 5 minutes, ce qui permet
      de tenir la fraîcheur) ; piège : écrire « rafraîchi toutes les 5 minutes » dans le
      critère. Le fil rouge range la fraîcheur visée parmi les règles fixées : le critère en cite
      la valeur, comme exemple de la règle.
    - Le piège « décider seul d'une règle qui a un coût (week-ends et fériés), c'est au PO de
      trancher » (projet archivé) est remplacé par un point non fixé du fil rouge, cohérent avec
      le concept 4 : le PO ne fixe pas la règle à la place de l'utilisateur concerné, il la fait
      fixer avant que la story parte.
    - Au moins un exemple porte sur une vue de la plateforme (Bruno), avec les règles fixées
      (vélo disponible), pas seulement sur Julie.
    - Given/When/Then : choix d'école, issu du BDD (Dan North), outillé par Gherkin ;
      Specification by Example (Adzic) ; attributions à vérifier.
  - À la clôture : retirer `maintainer/improvements/07-invest.md`.
- **Fini quand** : comme T-018b, pour les concepts 6, 7 et 8 (sans le workflow).
- **Fait le** : 2026-10-22, `course-lot` lancé sur ce lot (20 agents, environ 2,1 M tokens, 13 minutes) ; concepts 6, 7 et 8 réécrits avec leurs sources ; arbitrages du mainteneur appliqués (plan : 7a1-7a2, 8a1-8a2, 8b1-8b2 ; fil rouge : Julie persona construit à partir d'abonnés interrogés, état louable de chaque vélo dans les relevés des stations, vélo retiré du service après constat non louable, ligne périmée sur le rafraîchissement retirée ; glossaire : persona) ; heures de pointe, seuil « presque vide » et station vide laissés non fixés (concept 12) ; test par deux sous-agents prof neufs (début du concept 6 avec relance, réponse fausse en 6b et départ pressé ; reprise sur une question en attente en 8b1, relances, validation du concept 8, arrêt) : lectures, rappel, 15 lignes, fil rouge et mémoire conformes ; défauts corrigés dans le lot (schéma 6a qui donnait la réponse, relance manquante en 6a, exemple de réexplication en 6b, piège attribué à tort au concept 5, formulation de Cohn, « vélos disponibles » en 8b1, Then de A et B alignés, termes de 8b2) ; T-031 proposé (placer le mini-récap).
