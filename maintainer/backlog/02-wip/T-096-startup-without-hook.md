# T-096 : Charger le contexte de démarrage sans hook ni script côté apprenant

- **Créé le** : 2026-10-26
- **Constat** : T-094 donne la carte du cours par le hook `SessionStart` (`learner-status.sh`),
  et l'accueil crée `learner/` par `init-learner.sh` : deux scripts shell, testés sur macOS et
  Linux, pas sous Windows. Demande du mainteneur (2026-10-26) : un mécanisme indépendant du
  système. Vérifié le même jour (Claude Code 2.1.302) : un import `@chemin` dans `CLAUDE.md`
  injecte le fichier au démarrage, un import de fichier absent est ignoré sans erreur. Décisions
  du mainteneur : un appel d'outil au premier message d'accueil est tolérable ; `main` porte un
  `learner/` neuf, la progression du mainteneur vit sur une branche personnelle
  (`learner/<surnom>`) ; un skill réservé à l'utilisateur remet `learner/` à zéro en recopiant
  les modèles, sans script.
- **À faire** :
  1. `maintainer/scripts/build-map.sh` génère `course/map.md` (public cible et carte du cours)
     depuis `course/plan.md` et `course/domains/` ; `course/map.md` est commité ; une GitHub
     Action vérifie sur chaque PR que la carte est à jour et que `learner/` est neuf.
  2. `CLAUDE.md` importe `@course/map.md`, `@learner/apprenant.md`, `@learner/observations.md` ;
     un nouvel apprenant se reconnaît au surnom `<surnom>` ; le prof charge le skill d'accueil.
  3. Modèles de `course/templates/learner/` prêts pour un nouvel apprenant (prochaine étape au
     concept 0, tableau des statuts qui ne liste que les concepts au statut changé) ; `learner/`
     sur `main` en est la copie.
  4. Skill `learner-onboarding` : remplit les fichiers existants au lieu de lancer
     `init-learner.sh`. Nouveau skill `reset-learner` (`disable-model-invocation`).
  5. Supprimer `.claude/hooks/learner-status.sh`, `.claude/settings.json`, `init-learner.sh`.
  6. Skill `maintenance` : progression sur `learner/<surnom>`, rien de `learner/` commité sur
     `main` hors copie des modèles ; carte régénérée par les tickets qui touchent le plan ;
     tests sans sortie de hook.
  7. ADR : remplace ADR-022 et ADR-071, complète ADR-034.
- **Fini quand** : aucun hook ni script ne tourne au démarrage ou à l'accueil ; la CI échoue sur
  une carte périmée ; un sous-agent Sonnet, sur une copie du dépôt, mène l'accueil d'un nouvel
  apprenant (fichiers remplis sans script) puis une reprise d'apprenant connu qui va au
  domaine 3 sans lire `course/plan.md`.
