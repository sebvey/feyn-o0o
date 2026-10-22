# T-016 : Cadrer le fil rouge (entreprise, produit, équipe, acteurs, sources)

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur, sur un extrait de la session 7 (10b) : l'énoncé s'appuie
  sur « l'équipe vélos » et « la DSI », jamais présentées. `course/fil-rouge-velos.md` n'était
  qu'une liste de faits ajoutés concept après concept : pas de produit, pas de PO ni d'équipe,
  acteurs qui se recouvrent (régulateur et responsable d'exploitation, technicien et
  responsable maintenance), un seul prénom (Julie).
- **À faire** : restructurer `course/fil-rouge-velos.md` (entreprise, produit et équipe,
  tableau des acteurs, tableau des sources, faits fixés), sans contredire les traces et fiches
  des concepts 6 à 10. Choix du mainteneur : l'apprenant est le PO de la plateforme de données ;
  les besoins des abonnés passent par l'équipe appli, qui consomme les données de la
  plateforme ; un aparté présente le cadre à l'apprenant. Règle dans `CLAUDE.md` : partir des
  acteurs et sources du fichier avant d'en créer. `update-memory` : où écrire un nouvel acteur
  ou une nouvelle source.
- **Fini quand** : le fichier décrit le produit, l'équipe, les acteurs et les sources ; chaque
  acteur déjà vu en cours y figure, sans doublon de rôle.
- **Fait le** : 2026-10-22, fichier restructuré, règle ajoutée à `CLAUDE.md` (fil rouge),
  ligne du tableau d'`update-memory` précisée, aparté prévu dans « Prochaine étape » de
  `learner/parcours.md` (exception à la règle d'écriture dans `learner/`, validée en revue par
  le mainteneur). Pas de test par sous-agent : le mainteneur relit le diff et teste en session.
