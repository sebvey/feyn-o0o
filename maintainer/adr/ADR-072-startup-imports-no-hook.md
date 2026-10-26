# ADR-072 : Le contexte de démarrage vient d'imports de `CLAUDE.md`, sans hook ni script côté apprenant

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-096

## Contexte
Depuis ADR-022, un hook `SessionStart` (`.claude/hooks/learner-status.sh`) donnait au prof
l'état de `learner/` ; ADR-034 lui a fait injecter le skill d'accueil pour un nouvel apprenant,
et `init-learner.sh` créait `learner/` depuis les modèles ; ADR-071 (T-094) lui a fait imprimer
la carte du cours tirée de `course/plan.md`. Ces scripts shell, testés sur macOS et Linux, ne
sont pas garantis sous Windows. Le mainteneur veut un mécanisme indépendant du système. Vérifié
le 2026-10-26 (Claude Code 2.1.302) : un import `@chemin` dans `CLAUDE.md` injecte le fichier
au démarrage, et un import de fichier absent est ignoré sans erreur.

## Décision
- `course/map.md` (public cible et carte du cours : domaines, concepts, prérequis, chemins) est
  généré par `maintainer/scripts/build-map.sh` depuis `course/plan.md` et `course/domains/`, et
  commité. `course/plan.md` reste la seule source. Le skill `maintenance` (§3, étape 4) le fait
  régénérer par tout ticket qui touche le plan ou les fiches de domaine ; la GitHub Action
  `course-checks` échoue si la carte est périmée.
- `CLAUDE.md` importe `@course/map.md`, `@learner/apprenant.md` et `@learner/observations.md`.
  Un nouvel apprenant se reconnaît à `learner/apprenant.md` absent ou au surnom `<surnom>` ; le
  prof charge alors le skill `learner-onboarding` (un appel d'outil au premier message, accepté
  par le mainteneur).
- `main` porte un `learner/` neuf, copie de `course/templates/learner/` (la CI le vérifie).
  L'accueil remplit ces fichiers par Read et Write. Le tableau de `learner/parcours.md` ne liste
  que les concepts au statut changé : il ne recopie plus le plan.
- La progression du mainteneur vit sur sa branche `learner/<surnom>`, jamais sur `main`
  (`maintenance`, « Partir d'un `main` propre »).
- Le skill `reset-learner`, réservé à l'utilisateur (`disable-model-invocation`), remet
  `learner/` à zéro en recopiant les modèles, après confirmation.
- Supprimés : `.claude/hooks/learner-status.sh`, `.claude/settings.json`, `init-learner.sh`.

Remplace ADR-022 et ADR-071, supprimés. Complète ADR-034 (le premier message d'accueil
n'est plus sans appel d'outil ; le tableau titré ne vient plus du script).

## Options écartées
- Garder le hook et le script (ADR-022, ADR-034, ADR-071) : dépendent de `sh`, `sed` et `awk`.
- Importer `course/plan.md` en entier : environ 3 000 tokens, objectifs et sous-concepts en
  concurrence avec les fichiers de concept.
- Un `course/map.md` écrit à la main : un double du plan, sans contrôle.
- Régénérer la carte par un hook git `pre-commit` : non versionné, dépend du poste.
- Commiter la progression du mainteneur sur `main` (règle précédente de `maintenance`) : un
  clone hériterait de son parcours.
- Laisser `learner/` hors de git et sans modèles pré-copiés : la progression ne serait plus
  versionnée.
- Importer aussi le skill d'accueil pour éviter l'appel d'outil : il entrerait dans le contexte
  de toute session, apprenant connu compris.

## Conséquences
Plus rien ne s'exécute au démarrage ni à l'accueil. Les copies importées sont figées au
démarrage : la règle de `CLAUDE.md` qui fait relire un fichier de `learner/` avant d'y écrire
couvre ce cas. La carte (environ 2,5 Ko) et les fichiers de `learner/` entrent aussi dans le
contexte des sessions de maintenance. Le script de la carte suppose le format de `plan.md`
décrit dans T-056 et le préfixe numérique des fiches de domaine. Un sous-agent de test ne reçoit
pas les imports de la copie : `maintenance` (§5) lui fait lire les fichiers importés. La branche
`learner/<surnom>` se met à jour depuis `main` à la demande du mainteneur.
