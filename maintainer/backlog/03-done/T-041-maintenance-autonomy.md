# T-041 : Donner l'autonomie à l'agent de maintenance, la PR comme seul point de contrôle

- **Créé le** : 2026-10-23
- **Constat** : demande du mainteneur (2026-10-23). Il va suivre le cours : il n'est pas expert
  du contenu, il valide les recommandations de l'agent et donne son avis sur le comportement du
  prof. Aujourd'hui le skill `maintenance` le fait valider chaque proposition (§3.3), chaque
  arbitrage de fil rouge, de plan ou de glossaire (T-018 §3, `course-lot`), les consignes de
  chaque lot et le tri de chaque ticket. Les tickets créés par les tests sont souvent faux ou
  sans enjeu (T-024 et T-037 : constat démenti par le cadre ; T-038 : doublon de T-033). Il
  veut lancer l'agent et lire la PR. Lire les PR de contenu lui dévoilerait les réponses des
  concepts qu'il n'a pas vus.
- **À faire** :
  - skill `maintenance` : l'agent décide, applique et expose ses choix dans la PR, sans
    attendre de validation en cours de route ; critères d'arbitrage écrits ; tri critique et
    autonome des tickets candidats avant `00-proposed/` (vérification contre les fichiers,
    enjeu réel, doublon), constats rejetés listés dans la PR ; format fixe de la PR (comportement
    du prof d'abord, arbitrages, tickets, tests, non vérifié), sans corrigés pour un lot de
    contenu ; seul arrêt : un blocage que l'agent ne lève pas ;
  - `course-lot` : les constats ouverts vont au coordinateur ;
  - T-018 (§3, §5, « Fini quand ») et T-018g : retirer les validations du mainteneur en cours de
    lot ;
  - ADR.
- **Fini quand** : un agent de maintenance neuf, à qui l'on demande de traiter un ticket, va
  jusqu'à la PR sans demander de validation, arbitre selon les critères, trie les tickets
  candidats et écrit une PR au format.
- **Fait le** : 2026-10-23, skill `maintenance` : l'agent décide, applique et expose dans la PR (§3, étape 3 : critères d'arbitrage du contenu, consignes d'un lot puis `course-lot`, seul arrêt sur blocage) ; tri critique et autonome des constats avant `00-proposed/` (§2) ; format fixe de PR, sans corrigés pour un lot de contenu (§3, étape 6) ; tests sur une copie du dépôt (§5) ; `course-lot`, T-018 et T-018g alignés ; ADR-029, ADR-020 et ADR-025 complétés ; test par sous-agent de maintenance neuf (« traite T-031 » simulé, tri de trois constats) : va jusqu'à la PR sans demander de validation, trie juste (un faux constat rejeté, un sans effet rejeté, un doublon fusionné dans T-033), PR au format ; corrigés après le test : vérification d'un constat selon qui l'a relevé, commit d'une fusion sur la branche, test sur une copie.
