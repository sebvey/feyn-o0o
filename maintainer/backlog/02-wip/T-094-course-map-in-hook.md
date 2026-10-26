# T-094 : Donner au prof la carte du cours au démarrage

- **Créé le** : 2026-10-26
- **Constat** : au test du cours (2026-10-26), l'apprenant demande, juste après la présentation
  du domaine 1, de passer au domaine 3. Le prof lit tout `course/plan.md` (10 Ko) puis liste
  `course/domains/` pour trouver la fiche. Le hook de démarrage ne donne que le public cible, et
  pour un apprenant connu les noms des domaines ; or `CLAUDE.md` demande de marquer `sauté`
  chaque concept sauté, de vérifier les prérequis (colonne de `plan.md`) et de lire la fiche du
  domaine et le fichier du concept, dont les noms ne se devinent pas. Demande du mainteneur : que
  le prof connaisse le plan dès le démarrage, sans dupliquer d'information, chaque responsabilité
  au bon endroit, en tenant compte du site qui dépend du cours.
- **À faire** :
  1. `.claude/hooks/learner-status.sh` : imprimer, pour tout apprenant (nouveau ou connu), une
     « carte du cours » tirée de `course/plan.md` : chaque domaine (numéro, nom, chemin de sa
     fiche), ses concepts (numéro, nom, prérequis, chemin du fichier), puis les annexes. Elle
     remplace la liste des domaines actuelle. Rien d'autre du plan (objectifs, sous-concepts) :
     les fichiers le portent.
  2. `CLAUDE.md` : la liste des domaines et les prérequis viennent de la carte ; `plan.md` ne se
     lit plus qu'au besoin, pour un concept sans fichier.
  3. Skill `learner-onboarding` : les lectures de l'étape 3 renvoient à la carte plutôt qu'à des
     chemins écrits en dur.
  4. T-056 : noter que `plan.md` est lu par script (hook, `init-learner.sh`) et que son format
     devient un contrat si le site en est généré.
  `course/plan.md` et le site ne changent pas.
- **Fini quand** : la sortie du hook contient la carte pour un nouvel apprenant et pour un
  apprenant connu ; un sous-agent neuf sur Sonnet, apprenant connu, qui demande de passer à un
  autre domaine, marque les concepts sautés, signale le prérequis sauté et présente le domaine
  sans lire `course/plan.md` ni lister `course/domains/`.
