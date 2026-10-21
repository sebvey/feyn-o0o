# T-003 : Tracer la réponse de l'apprenant avant le choix du point de sauvegarde

- **Créé le** : 2026-10-21
- **Constat** : test par sous-agent de T-002. Au fil de l'eau, `CLAUDE.md` (l. 60) ne fait
  écrire que la question posée ; la réponse de l'apprenant n'est écrite que par `update-memory`,
  lancé après son choix « On continue » ou « On s'arrête là ». Si la session coupe entre la
  réponse validée et ce choix, la trace reste « Sans réponse », « Prochaine étape » montre
  encore la question en attente, et l'agent suivant la repose.
- **À faire** : dans « Tenir la mémoire à jour » de `CLAUDE.md`, ajouter l'écriture au fil de
  l'eau de la réponse de l'apprenant et du verdict dans la trace, et la mise à jour de
  « Prochaine étape », dans la même réponse que la correction. Vérifier que `update-memory` ne
  fait pas doublon (il complète les traces « restées sans réponse »).
- **Fini quand** : après une réponse validée, avant tout choix, la trace porte la réponse et le
  verdict, et `learner/parcours.md` n'affiche plus la question comme en attente.
- **Fait le** : 2026-10-21, règle ajoutée dans « Tenir la mémoire à jour » de `CLAUDE.md` :
  à la réponse de l'apprenant, réponse et verdict dans la trace, et « Prochaine étape » mise à
  jour, dans la même réponse que la correction. Test par sous-agent OK (coupure simulée après
  une bonne réponse : question non reposée). Reste hors ticket : `update-memory` tourne après le
  choix, une coupure perd statut, fiche, journal et faits du fil rouge.
