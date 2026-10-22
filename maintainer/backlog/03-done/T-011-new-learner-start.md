# T-011 : Démarrer un nouvel apprenant depuis un `learner/` vide, et remettre sve à zéro

- **Créé le** : 2026-10-21 (élargi le 2026-10-22)
- **Constat** :
  - Option écartée « pour l'instant » en session 4 du cours, reprise du journal de
    `maintainer/maintenance.md` à sa suppression (T-010) : démarrer avec un nouvel apprenant
    suppose de vider `learner/` à la main.
  - Demande du mainteneur (2026-10-22, après T-018b) : sve veut repartir de zéro une fois le lot
    1 livré, avec un `learner/` vide que l'agent remplit lui-même. Aujourd'hui, `CLAUDE.md` lit
    `learner/parcours.md` sans prévoir son absence, et dit « ne repose pas les questions
    d'accueil » sans les définir.
  - Le journal de `learner/parcours.md` contient des lignes « pas de cours » écrites par des
    sessions de maintenance (T-017, T-018a) : l'exception de T-018 §6 (« met à jour
    `learner/parcours.md` ») n'exclut pas le journal, et rien ne le réserve aux sessions de cours.
  - `.sve/` (dossier personnel du mainteneur, hors suivi) apparaît dans `git status`.
- **Dépend de** : T-018b (PR #2), qui touche T-018 §6 et `course/`.
- **À faire** :
  - Modèles des quatre fichiers de `learner/` (`apprenant.md`, `observations.md`,
    `parcours.md`, `travaux.md`), vides avec leurs titres de section, dans `course/templates/`.
  - `CLAUDE.md`, démarrage : si `learner/` est vide ou incomplet, le prof crée les fichiers
    manquants depuis les modèles (le tableau de `parcours.md` d'après `course/plan.md`), pose
    les questions d'accueil (à définir : trigramme, rôle, ce qu'il connaît de Scrum et de la
    gestion de produit, préférences de rythme), les écrit, puis propose le concept 0. Dans les
    15 lignes par message.
  - Journal réservé aux sessions de cours : skill `maintenance` (une session de maintenance
    n'écrit jamais dans le journal) et T-018 §6 (l'exception se limite aux statuts, à
    « Prochaine étape » et aux étiquettes des observations).
  - `.gitignore` : `.sve/`.
  - Remise à zéro, en dernier : copier `learner/observations.md`, anonymisé (erreurs typiques
    du public cible, sans trigramme), dans `maintainer/work/T-018/`, et faire pointer vers cette
    copie les entrées de T-018 §1 et de T-023 qui citent `learner/observations.md` ; puis
    vider `learner/`.
- **Fini quand** : un sous-agent prof neuf, face à un `learner/` vide, crée les fichiers, pose
  l'accueil en 15 lignes au plus, l'écrit, puis enseigne le concept 0 ; une session de
  maintenance n'a plus de chemin pour écrire au journal ; `learner/` est vide sur `main` après
  le merge.
- **Fait le** : 2026-10-22, modèles dans `course/templates/learner/`, skill `learner-onboarding`
  appelé par `CLAUDE.md` quand `learner/apprenant.md` manque ou n'a pas de surnom (surnom au
  lieu du trigramme, aussi dans `maintainer/improvements/README.md`), journal réservé aux cours
  (skill `maintenance`, T-018 §6), `.sve/` ignoré, observations, profil de départ et critère de
  Julie copiés anonymisés dans `maintainer/work/T-018/learner-observations.md` (renvois depuis
  T-018 §1, T-018d, T-023), `learner/` vidé. Test par sous-agent prof neuf (nouvel apprenant,
  réponse partielle à la question de contrôle, arrêt) : fichiers créés, accueil en 8 lignes,
  surnom écrit et utilisé, concept 0 enseigné, mémoire et arrêt corrects ; deux ambiguïtés du
  skill corrigées (moment de la ligne de journal, place du fil rouge), quatre hors ticket
  versées dans T-027. ADR-021.
