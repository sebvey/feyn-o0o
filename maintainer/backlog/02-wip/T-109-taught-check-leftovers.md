# T-109 : Traiter les deux constats restés après la boucle de T-106

- **Créé le** : 2026-10-26
- **Constat** : boucle de `course-taught-check` de T-106 (ADR-078), deuxième et dernier tour,
  depuis le concept 2 (2026-10-26) : deux constats nouveaux, vérifiés dans les fichiers, que la
  borne de deux tours laisse au tri :
  - concept 3, « Au fond depuis des mois » (3b, rechange) : « créé quand Dana l'a proposé
    (concept 1) », alors qu'en 1b l'élément ne se crée que si le besoin existe ; le renvoi fait
    croire que le concept 1 l'a créé ;
  - concept 12, « Compléter la définition des vélos disponibles » (12a1) : l'explication demande
    la source « avec son propriétaire », mais la réponse attendue juge la source juste sans
    propriétaire, et le propriétaire des relevés (la DSI) n'est donné qu'en 14a.
- **À faire** : concept 3, retirer « (concept 1) » de la phrase sur la création, ou rattacher le
  renvoi à la seule proposition ; concept 12, donner le propriétaire dans la situation (« les
  relevés des stations, tenus par la DSI ») et dans le corrigé, ou juger la source à moitié
  juste. `course/CHANGELOG.md`.
- **Fini quand** : `course-taught-check` sur les concepts 3 et 12 ne relève plus ces constats.
