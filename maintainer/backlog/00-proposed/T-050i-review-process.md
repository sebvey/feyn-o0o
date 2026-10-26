# T-050i : Définir le processus de relecture du cours

- **Créé le** : 2026-10-24
- **Dépend de** : T-050h
- **Constat** : la relecture de contrôle du cours (T-050h) doit être orchestrée : trop de fiches et de contrôles pour une seule conversation, et on veut la rejouer à chaque MINOR du cours sur les seules fiches modifiées. L'orchestration sert aussi à tenir le contexte léger. Les relectures déjà faites (T-050a : cinq audits par groupes de fiches ; T-051 : quatre groupes puis quatre relecteurs neufs) ont fonctionné par groupes de fiches avec des agents neufs.
- **À faire** : définir le processus, sans le lancer :
  1. choisir la forme : script de workflow (outil `Workflow`, qui demande l'accord explicite du mainteneur à chaque lancement), skill de maintenance, ou les deux ; documenter le choix et l'option écartée ;
  2. écrire l'orchestrateur : entrée (périmètre : toutes les fiches ou une liste, version du cours), étapes (contrôles mécaniques par script, puis contrôles de fond, de cohérence et de forme par des agents, un groupe de fiches par agent, vérification de chaque constat par un second agent neuf avant de le retenir, consolidation, dédoublonnage), sortie (rapport unique dans `maintainer/review/runs/`, constats classés par gravité avec fiche, section, identifiant du contrôle de `course-quality-controls.md` et extrait) ;
  3. coût et reprise : estimation du nombre d'agents et de tokens affichée avant le lancement ; reprise possible d'une exécution interrompue ;
  4. traitement des constats : chaque constat retenu passe le tri de `maintenance` (§2), un ticket par groupe de constats, pas un par constat ;
  5. diagramme Mermaid du processus dans `maintainer/review/README.md`, avec le mode d'emploi (lancement complet, lancement ciblé après une MINOR).
- **Fini quand** : le processus est écrit et documenté ; un essai à blanc sur deux fiches (une exécution réelle limitée à ce périmètre, sans le lancement complet) produit un rapport avec constats vérifiés et une estimation de coût ; le mainteneur valide le processus avant tout lancement complet. Le lancement complet est un ticket à part, créé après T-050b (cours étiqueté `1.0.0`) et sur décision explicite du mainteneur.
