# T-081 : Empêcher le prof d'enchaîner une validation et le sous-concept suivant dans un message

- **Créé le** : 2026-10-26
- **Constat** : tests de T-076f et T-077 (sous-agents prof sur Sonnet, 2026-10-26) : deux profs
  sur trois ont validé un sous-concept puis enseigné le suivant dans le même message (« La
  suite : … » au milieu, puis explication, exemple et question), en messages de 9 lignes. Au
  test de T-077, l'apprenante répondait d'elle-même : ce n'est pas un artefact du script.
  `CLAUDE.md` dit « Finis par une ligne qui annonce la suite » et « Un seul concept par
  message », mais le prof lit « La suite » comme une transition. Effet : deux sous-concepts par
  message, sans que l'apprenant ait choisi de continuer.
- **À faire** : décider si le message de validation s'arrête sur la ligne « La suite : … »
  (l'apprenant relance), ou s'il peut enchaîner quand l'ensemble tient en 15 lignes ; écrire la
  règle retenue dans `CLAUDE.md`, « Fin d'un concept ou d'un sous-concept validé » (comportement :
  décision du mainteneur).
- **Fini quand** : trois sous-agents prof neufs sur Sonnet appliquent tous la règle retenue.
- **Fait le** : 2026-10-26, règle retenue par l'agent (le mainteneur a confié le ticket en autonomie) : le message de validation s'arrête sur « La suite : … » (`CLAUDE.md`, « Fin d'un concept ou d'un sous-concept validé ») ; ADR-063 ; test : trois profs Sonnet neufs (concepts 4, 6 et 7, depuis « on reprend », apprenant simulé qui répond juste et ne relance que par « ok ») ; aux six validations, chacun s'arrête sur « La suite : … » et n'enseigne le sous-concept suivant qu'après la relance.
