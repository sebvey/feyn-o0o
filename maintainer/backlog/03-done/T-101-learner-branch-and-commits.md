# T-101 : Donner à l'apprenant sa branche, commitée aux points de sauvegarde

- **Créé le** : 2026-10-26
- **Constat** : analyse du mainteneur (2026-10-26). Un apprenant qui clone le dépôt fait tout le
  cours sur `main`, sa progression en modifications non commitées de `learner/` : pas
  d'historique, perdue par un `git restore`, et un `git pull` refusé dès qu'un ticket recopie
  les modèles dans `learner/`. La branche `learner/<surnom>` n'existe que pour le mainteneur
  (`maintenance`, « Partir d'un `main` propre »). `reset-learner` efface la progression sans
  trace. Décidé par le mainteneur : une branche à l'apprenant, commitée à chaque point de
  sauvegarde, jamais poussée. Cadre : une v0 pour des tests par d'autres consultants, pas
  d'industrialisation ; la mise à jour du cours depuis la branche de l'apprenant est hors
  ticket, ignorée pour l'heure.
- **À faire** (comportement : texte exact à valider par le mainteneur) :
  1. `learner-onboarding`, étape 3 : après l'écriture de `learner/`, sur `main`, crée la
     branche `learner/<surnom>` (suffixe `-2`, `-3` si elle existe) et commite `learner/`
     (« <surnom> : accueil ») ; sur une autre branche (test, ticket), commite sur place.
  2. `CLAUDE.md`, « Tenir la mémoire à jour » : à chaque point de sauvegarde, après les
     écritures, commite `learner/` (« <surnom> : <concepts du point> »). Jamais de push.
  3. `CLAUDE.md`, « Au démarrage » : nouvel apprenant détecté alors qu'une branche
     `learner/*` existe (retour sur `main`, reset) : proposer de reprendre cette branche ou de
     repartir à neuf, avant l'accueil.
  4. `reset-learner` : au lieu de réécrire les fichiers, revenir sur `main` (où `learner/` est
     neuf) ; l'ancienne branche reste. Hors d'une branche `learner/*` : comportement actuel.
  5. Échec de git (git absent, identité non configurée) : le prof le dit une fois à
     l'apprenant, puis continue sans commit (fichiers écrits, non versionnés).
  6. Vérifier `maintenance` (« Partir d'un `main` propre », « Préparer un test du cours ») et
     ADR-072 contre ces changements.
- **Fini quand** : un sous-agent de test, dans une copie git du dépôt sur `main` neuf, fait
  l'accueil puis un concept validé et l'arrêt : la branche `learner/<surnom>` existe avec un
  commit par point de sauvegarde, rien n'est poussé ; un `reset-learner` le ramène sur `main`
  et une nouvelle conversation propose la reprise ou l'accueil. ADR écrit (complète ADR-072, où
  « plus rien ne s'exécute à l'accueil » et la branche `learner/<surnom>` est au seul
  mainteneur).
- **Fait le** : 2026-10-26, branche `learner/<surnom>` créée à l'accueil, commit à chaque point
  de sauvegarde sans push, reprise ou départ à neuf proposé sur `main`, `reset-learner` par
  retour sur `main`, permissions git dans `.claude/settings.json` ; test Sonnet réussi (accueil,
  arrêt, reset, reprise, échec de commit) ; ADR-076.
