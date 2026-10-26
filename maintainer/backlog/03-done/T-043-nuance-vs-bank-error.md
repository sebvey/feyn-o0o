# T-043 : Distinguer la nuance d'une erreur prévue par la banque, et compter les relances par question

- **Créé le** : 2026-10-23
- **Constat** : tests de bout en bout de T-018h (sessions simulées, prof neuf).
  - Scénario de reprise sur question en attente (8a2) : l'apprenant répond « c'est Dana qui l'a
    décidé » ; le prof répond « Oui, c'est ça », apporte lui-même « Dana non plus n'a rien
    décidé » et valide 8a2. La banque range « répondre « Dana » sans voir que personne n'a
    décidé » dans « Erreurs fréquentes ». Le prof a lu ce manque comme une nuance, au sens de
    « Une nuance de la réponse attendue que l'apprenant n'a pas donnée ne rend pas la réponse
    partielle » (`CLAUDE.md`, « La boucle du cours »). Le fichier du concept a été précisé dans
    T-018h (la réponse attendue dit que « Dana » seul est l'erreur fréquente) : au test de
    contrôle, le prof relance au lieu de valider. La règle reste muette sur la frontière entre
    nuance et erreur, pour les banques qui ne le disent pas ; le même test relève une réponse
    juste qui ajoute une erreur de la banque, traitée comme fausse par le prof, sans règle.
  - Même session, 8b1 : une relance sur un second défaut de la réponse est notée « rang 2 »
    alors que la relance 1, sur un autre défaut, avait réussi. « Deux relances sans succès »
    et « son rang (1 ou 2) » ne disent pas si une relance réussie compte.
  - Test de contrôle du concept 7 : l'apprenant juge E et S « sur l'impression », ce que le
    fichier range en piège, alors que la question porte sur I ; le prof corrige puis valide 7a1.
    La règle traite la nuance absente, pas la nuance donnée de travers. Fusionné ici : même
    paragraphe, même frontière entre nuance et erreur.
- **À faire** : dans `CLAUDE.md`, « La boucle du cours » :
  - après « Une nuance de la réponse attendue que l'apprenant n'a pas donnée ne rend pas la
    réponse partielle : apporte-la dans ta correction. », ajouter : « Une réponse qui
    correspond à une erreur fréquente de la banque n'est jamais une nuance : traite-la comme
    une réponse fausse ou partielle. » ;
  - remplacer « Deux relances sans succès : réexplique de même. » par « Deux relances sans
    succès sur la même question : réexplique de même ; une relance qui réussit remet le
    compte à zéro. »
  Erreur évitée : valider un sous-concept sur une erreur que la banque prévoit ; réexpliquer
  après une seule relance manquée.
- **Décision** (2026-10-26) : texte resserré à l'analyse, appliqué à la place de celui ci-dessus : « Une erreur fréquente de la banque, commise sur le point que la question teste, n'est pas une nuance : traite la réponse comme fausse ou partielle. Une erreur sur un autre point se corrige sans empêcher de valider. » et « Deux relances de suite sans succès sur la même question : réexplique de même ; une relance qui réussit remet le compte à zéro. » Test sur 8b1 au lieu de 8a2, dont la banque dit désormais elle-même que « Dana » seul est l'erreur fréquente.
- **Fini quand** : un prof neuf, sur le scénario de reprise en 8a2 avec la réponse « c'est
  Dana », relance au lieu de valider, et note le rang 1 pour la première relance d'un second
  défaut après une relance réussie.
- **Fait le** : 2026-10-26, deux phrases dans « Attends la réponse » de `CLAUDE.md`, ADR-054 ; test sur Sonnet (reprise sur 8b1) : le canal dans le Then, erreur de la banque sur le point testé, est relancé (rang 1) au lieu d'être validé ; après la relance réussie, la relance sur le Given repart au rang 1, et son échec mène au rang 2, pas à la réexplication.
