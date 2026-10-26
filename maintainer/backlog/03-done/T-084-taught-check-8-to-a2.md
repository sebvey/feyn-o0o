# T-084 : Corriger les constats mineurs de `course-taught-check` sur les concepts 8 à A2

- **Créé le** : 2026-10-26
- **Constat** : test de T-083 (`course-taught-check`, `from: 8`, 2026-10-26) : aucun bloquant,
  quinze constats mineurs hors du ticket. Vérifiés dans les fichiers pour les renvois et les
  listes (marqués « vérifié ») ; les autres sont à vérifier au traitement.
  - **0b ne désigne pas son cas** (`00-scrum.md`, « Sous-concepts ») : l'inventaire a pris « La
    vue des stations vides livrée un mercredi » ; « « Le sprint est livré » », seul à dire qu'un
    élément hors DoD n'est ni livré ni présenté en revue et retourne au backlog, peut alors ne
    pas être posé. D'où les renvois « (concept 0b) » de `11-dor-dod.md` (l. 25, 134, 145, 254)
    et de `15-vie-story.md` (« La revue en recette », 15c) : vérifié. Trancher d'abord quel cas
    sert 0b, puis corriger ou garder les renvois.
  - **Renvois faux, vérifiés** : `08` 8a2 et Pièges renvoient au concept 4 pour « le PO fait
    fixer la règle, la story attend », que seul 7a2 enseigne ; `15` 15b (rechange) renvoie à
    10b2 pour la dépendance envers la DSI, que 10b2 ne traite pas (elle porte sur l'équipe
    appli) ; `13`, `14` et `17` rangent en « Pas encore enseignés » le Sprint Planning, la
    revue de sprint et la partie prenante, enseignés en 0a2 et 1b.
  - **À vérifier** : `11` 11b attend « la DSI demande de justifier chaque colonne », fait que la
    situation ne donne pas (il vient en 12c) ; `14` 14a attend que Scarlette sorte de la liste,
    sans que l'explication dise que l'équipe Scrum n'est pas partie prenante ; `16` 16a, 16b1
    et 16c (rechange) : une réponse qui suppose les versions (16b), un renvoi au concept 9 vu
    seulement en rechange, MoSCoW pour une échéance non rappelée ; `A1` A1a et A1c : qui fait
    le réglage de l'outil, le refinement et une définition d'indicateur non glosés.
- **À faire** : trancher le cas de 0b ; corriger chaque constat vérifié, en nuance ou par un
  renvoi juste ; rejeter avec sa raison ce qui ne se vérifie pas.
- **Fini quand** : `course-taught-check` depuis le premier concept touché ne relève plus ces
  constats.
- **Fait le** : 2026-10-26, constats du ticket corrigés (0b enseigne l'élément hors DoD et pose « La vue des stations vides livrée un mercredi », « Le sprint est livré » passe en exercice ; renvois de 8, 15 ; listes de 13, 14, 17 ; 11b, 14a, 16a, 16b1, A1a, A1c ; 16c rechange rejeté : MoSCoW est enseigné en 13c et renvoyé). `course-taught-check` depuis 0, deux passages, 0 bloquant : le premier ne relève aucun constat du ticket et 13 nouveaux mineurs, fusionnés et corrigés ; le second, 12 mineurs (dont deux restes de corrections du ticket), corrigés ; pas de troisième passage, chaque passage trouvant de nouveaux détails.
