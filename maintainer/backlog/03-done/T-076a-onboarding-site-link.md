# T-076a : Donner le lien du site au premier message d'accueil

- **Créé le** : 2026-10-26
- **Parent** : T-076
- **Constat** : au démarrage avec un `learner/` vide, le prof présente bien le cours mais ne donne
  pas le lien du site (test du mainteneur, 2026-10-26). L'étape 1 de
  `.claude/skills/learner-onboarding/SKILL.md` n'en parle pas ; `CLAUDE.md` ne donne le lien qu'au
  rappel de reprise (`domaines/`), à la présentation d'un domaine (`domaines/N/`) et à la
  validation d'un concept (`concepts/NN/`). ADR-053 ne vise pas l'accueil d'un nouvel apprenant.
  Un apprenant neuf ignore donc l'existence du site jusqu'à la fin du domaine 1.
- **À faire** : dans l'étape 1 de `.claude/skills/learner-onboarding/SKILL.md`, après la
  présentation du cours en deux lignes, ajouter : « donne le lien de la racine du site du cours
  (adresse en tête de "La boucle du cours" de `CLAUDE.md`) ». L'adresse n'est pas recopiée dans le
  skill (une règle à un seul endroit). Décision du mainteneur : la racine du site, pas
  `domaines/`.
- **Fini quand** : un sous-agent neuf sur Sonnet, lancé avec un `learner/` vide, donne le lien
  racine du site dans son premier message, qui reste dans les 15 lignes et pose toujours les trois
  questions d'accueil.
- **Fait le** : 2026-10-26, lien racine du site ajouté à l'étape 1 de `learner-onboarding` ; test Sonnet sur un `learner/` vide : lien donné, 11 lignes, trois questions d'accueil posées.
