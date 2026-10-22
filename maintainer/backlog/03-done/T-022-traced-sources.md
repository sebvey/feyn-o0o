# T-022 : Tracer les sources du cours dans le cours, sans que le prof les cite

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur (session de maintenance de T-018a) : les sources doivent
  être documentées et tracées dans le cours ; le prof ne les cite pas, pour ne pas alourdir le
  cours, mais sait répondre à « quelle est ta source ? ». Or T-018 §3 rangeait les sources des
  lots dans `maintainer/work/T-018/sources/`, supprimé à la clôture de T-018, et le modèle de
  concept mettait une section « Sources » dans le fichier que le prof lit à chaque concept.
- **À faire** (proposition validée par le mainteneur) :
  - `course/sources/NN-slug.md` : un fichier de sources par fichier de concept, même nom ;
    nouveau modèle `course/templates/sources.md` (affirmation, source, ce qui a été vérifié ;
    références avec type et date de consultation ; non vérifié).
  - `course/templates/concept.md` : section « Sources » retirée ; le fichier ne cite aucune
    référence, un choix d'école nomme son auteur.
  - `CLAUDE.md`, « La boucle du cours » : ne pas citer de référence ; sur demande, répondre
    d'après `course/sources/`, ou dire que la source manque et le noter dans
    `maintainer/improvements/`. Description de `course/` complétée.
  - T-018 : l'étape 1 des lots écrit dans `course/sources/` ; le rédacteur ne cite rien dans le
    fichier du concept ; la revue d'exactitude vérifie que chaque affirmation a sa ligne ; test
    de bout en bout « quelle est ta source ? » ; « Fini quand » exige le fichier de sources.
- **Fini quand** : un sous-agent neuf, à qui l'apprenant demande la source d'une affirmation,
  lit `course/sources/` et, faute de fichier, dit que la source n'est pas documentée dans le
  cours, et le note dans `maintainer/improvements/`.
- **Fait le** : 2026-10-22, `course/templates/sources.md` créé, section « Sources » retirée du
  modèle de concept, règle dans `CLAUDE.md`, méthode de T-018 mise à jour, ADR-016. Test (celui
  de T-018a) : sur « quelle est ta source ? », l'agent cherche `course/sources/00-scrum.md`, dit
  que la source n'est pas tracée, distingue ce qui vient du Scrum Guide de ce qui est non
  vérifié, et le note dans `maintainer/improvements/`. Précisé après le test : nommer le texte
  d'un consensus (le Scrum Guide) reste permis.
