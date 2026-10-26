# T-100 : Retirer du cours les consignes de schéma, puis simplifier la règle du prof

- **Créé le** : 2026-10-26
- **Constat** : test de T-098 (2026-10-26). Depuis T-098, le prof ne fait un schéma que sur
  demande de l'apprenant, mais une douzaine de fichiers de concept lui disent encore d'en
  montrer un (concept 9 : « d'abord l'origine des mots, puis le schéma » ; concept 12 :
  « Trois schémas, un par sous-concept »). Le sous-agent de test a dû trancher la
  contradiction en faveur de `CLAUDE.md`. T-098 l'a levée par une précision dans `CLAUDE.md`
  (« même si le fichier du concept en prévoit un »).
- **À faire** :
  - `course/concepts/` : dans les explications, banques d'exemples et « Ce qui marche »
    (concepts 0, 4, 6, 7, 8, 9, 11, 12, 13, 14, 17, à revérifier par `grep -i schéma`),
    retirer ou réécrire les consignes qui font montrer un schéma par le prof. Les sections
    « Schéma » restent : elles servent au site et à la demande de l'apprenant. Les consignes
    de moment (« dans la correction, pas avant ») peuvent passer dans la section « Schéma ».
    Ne pas toucher les cas où le schéma est un objet du fil rouge (concept 0, le schéma de
    l'équipe d'Odile ; concept 11, le schéma des tables). `course/CHANGELOG.md` à jour.
  - `course/templates/concept.md` : retirer « schéma » de « Ce qui marche » s'il y pousse.
  - `CLAUDE.md`, « La boucle du cours » : retirer « , même si le fichier du concept en prévoit
    un » (comportement : texte exact à valider par le mainteneur).
- **Fini quand** : `grep -i schéma course/concepts/` ne montre plus de consigne au prof de
  montrer un schéma hors des sections « Schéma » ; la règle de `CLAUDE.md` est revenue à sa
  forme courte ; `course-taught-check` lancé depuis le premier concept touché, sans constat
  causé par le ticket.
