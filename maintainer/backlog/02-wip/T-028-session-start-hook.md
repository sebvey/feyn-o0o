# T-028 : Donner l'état de l'apprenant au démarrage par un hook, et faire parler le prof en premier

- **Créé le** : 2026-10-22
- **Constat** :
  - Première session de sve après T-011 (2026-10-22, capture du mainteneur) : le prof teste
    `learner/` avec `ls learner/ && cat learner/apprenant.md`, qui échoue (code 2, dossier
    absent) et s'affiche « Failed » en rouge, bien que la suite (skill `learner-onboarding`) soit
    correcte.
  - Demande du mainteneur : qu'à l'ouverture le prof écrive son premier message sans que
    l'apprenant ait à taper quoi que ce soit.
  - Doc Claude Code (hooks, lue le 2026-10-22 via un sous-agent, à revérifier) : la sortie d'un
    hook `SessionStart` (stdout ou `additionalContext`) entre dans le contexte ; matchers
    `startup`, `resume`, `clear`, `compact`, `fork`. Le champ `initialUserMessage` devient le
    premier tour « in non-interactive mode with the -p flag » ; son effet en session interactive
    (CLI ou Code tab de l'app) n'est pas documenté. Le contexte de `SessionStart` n'est pas
    documenté comme transmis aux sous-agents (`SubagentStart` existe pour cela).
- **À faire** :
  - `.claude/hooks/learner-status.sh`, déclaré dans `.claude/settings.json` (`SessionStart`) :
    lit `learner/apprenant.md` et écrit « Apprenant connu : <surnom>. » ou « Nouvel apprenant :
    learner/apprenant.md absent ou sans surnom. » ; finit toujours en code 0.
  - `CLAUDE.md`, démarrage : le prof part de ce message ; sans lui, il vérifie sans commande
    shell qui peut échouer (Read ou Glob).
  - Premier message sans saisie : tester `initialUserMessage` dans un projet jetable, en CLI
    interactive et dans le Code tab. S'il déclenche un tour, l'utiliser (« Démarre la session de
    cours. ») ; sinon, le dire au mainteneur et retenir l'option la plus proche (ex. lancer
    `claude "on commence"`), ou y renoncer.
  - Vérifier l'effet du hook en session de maintenance (une ligne de contexte sans effet) et
    adapter le brief de test du skill `maintenance` §5 si le sous-agent ne reçoit pas le message.
- **Fini quand** : une session neuve, `learner/` absent puis présent, affiche le bon état sans
  appel d'outil en échec ; le premier message sans saisie fonctionne, ou sa limite est
  documentée dans le ticket clos.
