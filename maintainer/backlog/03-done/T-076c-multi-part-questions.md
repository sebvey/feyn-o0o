# T-076c : Poser en plusieurs temps une question qui teste plusieurs points

- **Créé le** : 2026-10-26
- **Parent** : T-076
- **Constat** : au test du cours (2026-10-26), le prof pose d'un bloc la question de contrôle du
  concept 0 : « Qui décide de l'ordre du backlog, et quelle différence fais-tu entre un sprint et
  un incrément ? », reprise mot pour mot de la banque (`course/concepts/00-scrum.md`). Le
  mainteneur veut garder les deux questions, mais annoncées (« je te pose deux questions, voici la
  première : »), la première traitée avant de poser la seconde. `CLAUDE.md` demande « une
  question » et ne dit rien d'une question de la banque qui en porte plusieurs (d'autres
  existent : concepts 01, 07, 11). L'apprenant répond aux deux d'un bloc, en oublie souvent une, et
  la correction mêle réponse partielle et relance.
- **À faire** : dans `CLAUDE.md` :
  1. « La boucle du cours », puce « Un seul concept par message », après « Introduis-la par
     « Question pour toi ». », ajouter : « Une question de la banque qui teste plusieurs points
     distincts se pose en plusieurs temps : annonce-le (« Je te pose deux questions, voici la
     première : »), corrige chaque réponse selon cette boucle, puis pose la suivante. Une question
     suivie de « pourquoi ? » reste une seule question. La réponse attendue et les erreurs
     fréquentes se répartissent entre les parties ; la question n'est close que quand chaque
     partie a été répondue. »
  2. « Tenir la mémoire à jour », ligne « Tu poses une question ou un exercice », colonne
     « Quoi », ajouter : « ; pour une question en plusieurs temps, la partie posée et ce que
     l'apprenant a juste aux précédentes ».

  Option écartée : réécrire les questions de la banque en questions simples (touche tout
  `course/`, et les lots suivants en réintroduiraient). ADR à écrire (deux oui).
- **Fini quand** : un sous-agent neuf sur Sonnet, au concept 0 (`learner/` fictif, accueil fait),
  annonce deux questions, pose la première seule, la corrige, puis pose la seconde ; et une
  reprise après coupure entre les deux parties pose la seconde sans reposer la première.
- **Fait le** : 2026-10-26, `CLAUDE.md` : question en plusieurs temps (boucle du cours, tableau de mémoire), ADR-058 ; tests Sonnet (question de contrôle du concept 0, reprise entre les deux parties) conformes.
