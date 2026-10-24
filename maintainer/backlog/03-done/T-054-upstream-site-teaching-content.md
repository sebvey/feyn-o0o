# T-054 : Remonter dans le cours le contenu d'enseignement propre au site

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Dépend de** : T-053
- **Constat** : décision du mainteneur du 2026-10-24 : le site emploie le fil rouge (encadrés « Sur le fil rouge » compris), donc ce que le site porte et que le cours n'a pas remonte dans le cours. T-050c a listé ces écarts dans le `CHANGELOG.md` du site (`../parcours-po-website`), section « Écarts connus, à traiter par le cours » :
  - encadrés « fil rouge » propres au site : Scarlette (0a1), Étienne (1a, 4b1), Odile et Sid (1b), Maud (2a), Pia (3a2), Régis (5a1, 6a), Abba (5a2, 9a1, 17a2), météo (14a), SMS (17a2) ;
  - exemples ou phrases d'enseignement sans équivalent dans la fiche : 0a3, 1a, 1b, 5a2, 7a2, 7b, 8a2, 8b1, 11a2, 12a1, 14b ;
  - concept 4 : quatre stories et deux tâches du schéma, libellés proposés par un agent (la fiche ne fixe que l'epic, les features et la story sous l'epic) ;
  - concept 5 : l'encadré 5b2 (Étienne) ne raconte plus le même cas que le schéma.
- **À faire** :
  1. cours, en autonomie (contenu) : pour chaque élément, reprendre dans la fiche, à la section qui lui convient (hors banque d'exemples), ou refuser (il sort du site) s'il contredit le cours ou n'apporte rien ; respecter l'ADR-037 (aucun cas d'exercice) et la règle d'arbitrage de `maintenance` §3 pour le fil rouge (fixer le plus petit fait dont un concept a besoin, sans contredire `fil-rouge-velos.md`, ne jamais trancher un fait métier réel) ; compléter `fil-rouge-velos.md` seulement si un fait manque, chaque ajout dans la PR avec l'option écartée ; fixer les libellés du schéma du concept 4 dans la fiche ;
  2. inscrire chaque changement sous « Non publié » de `course/CHANGELOG.md` (MINOR) ; ne pas publier de version ;
  3. relecture indépendante, PR, merge ;
  4. site, après le merge : `check-alignment`, réaligner les pages signalées, rendre l'encadré 5b2 cohérent avec le schéma, retirer de « Écarts connus » ce qui est résolu, build et `astro check`, fusion dans le `main` local du site (aucun push).
- **Fini quand** : tout élément de la liste est dans la fiche du cours ou sorti du site ; le `CHANGELOG.md` du site n'a plus d'écart de contenu d'enseignement (hors sources, T-053) ; `check-alignment` ne signale plus aucune page ; le build du site passe.
- **Fait le** : 2026-10-24, contenu propre au site repris dans les fiches de 17 concepts (ou refusé quand il reprenait la situation ou le verdict d'un exercice), libellés du schéma du concept 4 fixés, aucun fait ajouté au fil rouge, relecture indépendante passée ; site réaligné (20 pages, check-alignment sans écart, build passé, fusionné dans le main local du site)
