# T-036 : Dire ce que le prof donne quand l'apprenant demande une source

- **Créé le** : 2026-10-23
- **Constat** : test de T-018f (concept 12, « d'où vient » sur la donnée personnelle) : le prof
  répond d'après `course/sources/` mais ne nomme pas l'article du RGPD, à cause de « Ne cite pas
  de référence (ouvrage, article, lien) » dans `CLAUDE.md`. Relu avec le mainteneur
  (2026-10-23) : l'ambiguïté est générale. La règle interdit de citer puis demande, sur
  demande, de répondre d'après les sources, sans dire ce que le prof peut alors en donner
  (auteur, titre, date, article de loi, lien).
- **À faire** : dans `CLAUDE.md`, préciser que le prof ne cite pas de lui-même et que, sur
  demande, il donne la source telle que le fichier de sources la décrit, rien de plus ; le
  RGPD se nomme comme le Scrum Guide. ADR qui complète ADR-016.
- **Fini quand** : un prof neuf à qui l'on demande « d'où vient » une affirmation du RGPD et
  une affirmation d'un choix d'école donne les détails du fichier de sources, sans en ajouter,
  et ne cite rien de lui-même le reste du temps.
