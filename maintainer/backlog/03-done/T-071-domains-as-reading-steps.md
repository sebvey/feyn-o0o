# T-071 : Donner aux domaines une présentation et une place dans la lecture

- **Créé le** : 2026-10-25
- **Constat** : discussion du 2026-10-25 avec le mainteneur. Sur l'accueil du site, « Commencer : concept 0 » attaque par un concept, pas par un domaine, alors qu'une présentation du domaine aiderait à démarrer ; sur une page de concept, précédent et suivant vont de concept en concept, sans transition d'un domaine à l'autre. À la source, le cours ne donne d'un domaine qu'un nom, ses concepts et une phrase « à la fin, l'apprenant sait » (`course/plan.md`, ADR-039) : rien ne dit le problème du PO qu'il règle, comment ses concepts s'enchaînent, ni ce qu'il apporte au suivant. Le prof ne fait que nommer le domaine au premier concept.
- **À faire** : en sous-tickets. Décisions de la discussion : une fiche par domaine dans `course/domains/` (le rattachement concept -> domaine reste dans `course/plan.md` seul : ni en-tête de domaine dans les fiches de concept, ni dossier par domaine) ; sur le site, une page par domaine insérée dans la suite linéaire (domaine 1, concepts 0 à 2, domaine 2…), `/domaines/` allégé en carte ; pas de message de transition à part chez le prof.
- **Sous-tickets** :
  - T-071a : écrire une fiche de présentation par domaine dans le cours (clos) ;
  - T-071b : insérer une page par domaine dans la lecture du site (clos) ;
  - T-071c : faire présenter le domaine par le prof à son premier concept (clos).
- **Fini quand** : les sous-tickets sont clos.
- **Fait le** : 2026-10-26, T-071a, T-071b et T-071c clos.
