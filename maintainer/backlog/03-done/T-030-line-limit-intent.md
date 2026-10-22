# T-030 : Rendre la règle des 15 lignes à son intention

- **Créé le** : 2026-10-22
- **Constat** : test de T-018c (sous-agent prof neuf, concepts 3 et 4) : la règle « un retour à
  la ligne = une ligne » de `CLAUDE.md` (« La boucle du cours ») laisse passer des lignes de deux
  ou trois lignes affichées ; le prof note que ses messages de 3a2 respectent la limite « à la
  lettre, pas dans l'esprit ». Tests de T-018f : 13a2 ne tient en 15 lignes qu'avec des lignes
  de 120 à 170 caractères. Relu avec le mainteneur (2026-10-23) : la limite visait un prof court
  et fluide, pas une mesure ; le comptage précis (T-007) pousse l'agent à respecter la lettre.
  Le découpage en sous-concepts est fait par le cours, plus par le prof.
- **À faire** : dans `CLAUDE.md`, remplacer la règle « Jamais plus de 15 lignes par message »
  par son intention (un message se lit d'un coup d'œil, une quinzaine de lignes au plus), sans
  règle de comptage ; le cours découpe, le prof ne tasse pas un sous-concept trop long, il le
  coupe en deux messages. ADR qui écarte la borne en caractères et revient sur le comptage de
  T-007.
- **Fini quand** : un prof neuf, sur un sous-concept dense (13a2), écrit des messages courts et
  aérés sans compter ses lignes à la lettre, et coupe en deux plutôt que de tasser.
- **Fait le** : 2026-10-23, « Jamais plus de 15 lignes » remplacé par « Reste court » dans `CLAUDE.md` (une quinzaine de lignes au plus, sans règle de comptage ; le cours découpe, le prof coupe au lieu de tasser), apartés alignés ; ADR-028 ; test par sous-agent prof neuf (reprise en 13a2, relance, 13b, arrêt) : messages de 2 à 14 lignes, plus longue ligne 111 caractères (la ligne de choix imposée), aucun message tassé, mémoire conforme ; le prof a hésité sur l'unité de compte, effet assumé de la règle par intention (ADR-028).
