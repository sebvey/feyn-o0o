# T-083 : Définir la DoR là où elle est nommée avant le concept 11, et donner le fait de l'appli de Pia en 8a1

- **Créé le** : 2026-10-26
- **Constat** : test de T-082 (`course-taught-check`, concepts 4 à 9, 2026-10-26), trois
  constats mineurs hors des défauts plantés, vérifiés dans le cours :
  - `course/concepts/08-criteres-regles.md`, ligne de 8a dans « Sous-concepts » et réponse
    attendue de « Le seuil des stations presque vides » (8a2) : « la DoR de l'équipe vélos
    demande des règles métier fixées (concept 11) », sans dire ce qu'est la DoR ;
  - `course/concepts/09-decoupage-vertical.md`, « Les tâches de Dana » (9a2) : « sinon la story
    n'était pas prête (concept 8a2 ; Definition of Ready, concept 11) », même défaut ;
  - `course/concepts/08-criteres-regles.md`, « Trier les phrases de la story d'Abba » (8a1) : la
    réponse attendue dit que la règle 2 sert « aux données que l'appli de Pia » affiche, un lien
    à la station favorite que ni la situation ni les unités précédentes ne donnent.
- **À faire** : définir la DoR en passant à sa première mention en 8a (conditions écrites par
  l'équipe pour qu'un élément soit prêt à être choisi, concept 11), et s'y appuyer en 9a2 ;
  en 8a1, donner le fait comme information de la correction, ou prendre un autre exemple.
- **Fini quand** : `course-taught-check` sur les concepts 8 et 9 ne relève plus ces trois
  constats.
- **Fait le** : 2026-10-26, DoR définie en passant en 8a et 8a2 (sa Definition of Ready : les conditions qu'elle écrit pour qu'un élément soit prêt à être choisi), 9a2 s'appuie sur « prêt à être choisi » (3a2) ; en 8a1, la règle 2 se justifie par « vaut pour tout abonné, quelle que soit la story ». Test : `course-taught-check` depuis le concept 8 (12 concepts et annexes, 5 agents, environ 750 000 jetons) : aucun bloquant, les trois constats du ticket ne reviennent pas ; quinze constats mineurs hors ticket proposés en T-084.
