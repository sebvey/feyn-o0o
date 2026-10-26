# T-115 : Annoncer la sauvegarde avant le premier appel d'outil à l'arrêt

- **Créé le** : 2026-10-26
- **Constat** : le mainteneur a demandé une pause à l'agent en fin de session de cours. Il a
  sauvegardé correctement, mais a lancé ses appels d'outil sans aucun message avant : l'apprenant
  voit un silence. L'onboarding, lui, écrit une phrase avant tout appel d'outil
  (`learner-onboarding`, étape 3 : « Je mets en place le cours. »). La règle générale de
  `CLAUDE.md` (« Quand une réponse doit lire ou créer des fichiers… », section « La boucle du
  cours ») ne vise que la boucle ; la section « Arrêt » ne la reprend pas, et « N'annonce pas à
  l'apprenant ce que tu écris » peut se lire comme l'interdire.
- **À faire** : dans `CLAUDE.md`, section « Arrêt », avant l'étape 1, ajouter : « Avant le
  premier appel d'outil, écris une phrase courte pour l'apprenant (« Je sauvegarde ta
  progression, un instant. »). » Dans la dernière phrase avant « Une demande de l'apprenant sur
  la forme du cours » (« N'annonce pas à l'apprenant ce que tu écris, sauf dans le message
  d'arrêt. »), ajouter « ; cette phrase d'ouverture de l'arrêt n'en dit pas le contenu ». Les
  autres points de sauvegarde (concept validé, sauté, creusé) ne changent pas : la correction
  qui les clôt est déjà écrite avant les appels. Comportement du prof : à présenter au
  mainteneur avant application (skill `maintenance`, §3 étape 3).
- **Fini quand** : un test « on s'arrête » montre une phrase avant le premier appel d'outil,
  puis le message d'arrêt en deux lignes, sans annonce du contenu écrit.
