# T-018c : Lot 2, réécrire les concepts 3, 4 et 5

- **Créé le** : 2026-10-22
- **Parent** : T-018
- **Dépend de** : T-018b
- **Constat** : découpage de T-018a. Fiches 3 (backlog), 4 (hiérarchie), 5 (user story)
  migrées sans exemple ; la fiche 4 garde un exemple hors fil rouge (marge, OF).
- **À faire** :
  - Lancer `course-lot` sur T-018c, sur demande du mainteneur (T-018 §5).
  - Méthode de T-018 §3 pour les concepts 3, 4 et 5, d'après leurs lignes de `course/plan.md`
    et leurs situations dans `course/fil-rouge-velos.md`.
  - Entrées propres au lot : `maintainer/improvements/04-hierarchie.md` et `off-course.md`
    (compter les « je veux ») ; `framing.md` §2.4 (Connextra : « au début des années 2000 ») ;
    observations `[c4]` et `[c5]`, et le profil de départ.
  - Tout le lot : les concepts 0 à 2 enseignent déjà le backlog comme artefact et son
    engagement, l'objectif produit (0, 2), le PO qui ordonne seul et le backlog seule source de
    travail, dette technique comprise (1) : ne pas les réenseigner, y renvoyer.
  - Sources : partir de `maintainer/work/T-018/framing.md` §8 et des fichiers de
    `course/sources/` des concepts 0 à 2 ; ne chercher que ce qui manque (origine XP de la
    story, Connextra, 3C, niveaux par défaut de Jira et d'Azure DevOps). Un outil dont les noms
    de niveaux ne se vérifient pas à date n'est pas cité.
  - Concept 3 : en 3a, « ordonnée » s'argumente par rapport à l'objectif produit (concept 2) ;
    comment ordonner reste au concept 13, pas enseigné ici. Garder les quatre erreurs de la
    fiche actuelle (cahier des charges, tickets techniques, rempli au début, dépilé). « Le haut
    précis, le bas vague » se décrit sans le terme « refinement » (concept 15).
  - Concept 4 : en 4b, le test est « compter les “je veux” » (le test « je sais ce que voit
    l'utilisateur » n'a pas marché, observation `[c4]`) ; piège du niveau de trop (« la plupart
    des features ne contiennent qu'une story »), avec renvoi à l'annexe A1 sans l'écrire (lot 6) ;
    remplacer l'exemple de la marge par « Suivre l'état du réseau » (Bruno) ; garder le piège
    « juger ce qu'il reste à livrer », dans le fil rouge ; « thème » n'est pas un niveau
    enseigné, seulement une variante d'outil ; la banque contient l'erreur « epic classé en
    story ».
  - Concept 5 : Connextra « au début des années 2000 » ; étiquetage : le Scrum Guide ne parle
    pas de story, le format « en tant que » est un choix d'école devenu courant, les 3C une
    pratique établie attribuée à Jeffries ; les pièges « acteur technique » et « chiffre dans la
    phrase » restent courts et renvoient aux concepts 6 et 8 ; l'échelle « corriger au fil de
    l'eau plutôt qu'à la clôture » (projet archivé) est remplacée par la situation 5 du fil
    rouge (Sophie, vélos en panne par semaine, nombre de techniciens en tournée) ; piège tiré du
    profil de départ : la story vue comme « le parcours de l'utilisateur ».
  - À la clôture : retirer `maintainer/improvements/04-hierarchie.md` et l'entrée « feature ou
    story » de `maintainer/improvements/off-course.md`.
- **Fini quand** : comme T-018b, pour les concepts 3, 4 et 5 (sans le workflow).
