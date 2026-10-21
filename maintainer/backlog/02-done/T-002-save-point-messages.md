# T-002 : Revoir les messages du point de sauvegarde

- **Créé le** : 2026-10-21
- **Constat** : en fin de concept, l'agent affiche « On s'arrête là (je mets la mémoire à
  jour) » puis « (Trace et progression mises à jour.) » (retour d'une session de cours, rapporté
  par le mainteneur). La première formule, au présent, laisse croire que la sauvegarde est en
  cours ; « mémoire » est un mot du cadre, pas de l'apprenant. La seconde ne sert pas à
  l'apprenant et contredit le titre de section « (sans le raconter) ». Sources : `CLAUDE.md`
  l. 67 (texte du choix) et l. 71 (« mentionne ces écritures en une ligne au plus »).
- **À faire** :
  - retirer de `CLAUDE.md` la consigne de mentionner les écritures en cours de route (l. 71) ;
    le message de fin de session d'`update-memory` (« mémoire à jour, prochaine étape ») reste ;
  - reformuler l'option d'arrêt au futur, en disant ce que l'apprenant pourra faire, par
    exemple « On s'arrête là (je sauvegarde ta progression, puis tu pourras fermer) ».
- **Fini quand** : un point de sauvegarde n'affiche que les deux choix, sans ligne sur les
  écritures, et l'option d'arrêt dit ce que l'apprenant pourra faire ensuite.
- **Fait le** : 2026-10-21, option d'arrêt « (je sauvegarde ta progression, puis tu pourras
  fermer) » et règle « N'annonce pas à l'apprenant ce que tu écris dans `learner/` » dans
  `CLAUDE.md` ; `update-memory` §3 : rien sur la sauvegarde quand on continue, « progression
  sauvegardée, tu peux fermer » quand on s'arrête. Test par sous-agent OK.
