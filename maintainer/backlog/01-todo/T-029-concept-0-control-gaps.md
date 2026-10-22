# T-029 : Combler trois trous de la question de contrôle du concept 0

- **Créé le** : 2026-10-22
- **Constat** : test de T-027 (sous-agent prof neuf, Max répond « Le PO je crois, et un sprint
  c'est deux semaines de boulot », puis s'arrête ; reprise en session 2) :
  - `00-scrum.md` ne dit pas que la validation des sous-concepts enseignés après une réponse
    partielle valide le concept 0 (le prof l'a déduit) ;
  - reprise après une question de contrôle close sans correction : « la session suivante
    commence par ce qu'il avait juste » (`00-scrum.md`) ne dit pas si c'est avant ou après le
    rappel en deux lignes (le prof a choisi après) ;
  - le message qui suit cumule la correction, l'explication de 0b, l'exemple et la question :
    dense, il ne tient en 15 lignes que par le comptage en lignes logiques.

  Tri du 2026-10-23 : le passage rapide est gardé. La question ne vérifie ni le Scrum Master ni
  les événements, mais sa réponse attendue exige la DoD, et les concepts suivants rappellent en
  une ligne ce qu'ils reprennent de 0a ; l'élargir alourdirait la question pour ceux qu'elle
  doit faire passer.
- **À faire** : dans `course/concepts/00-scrum.md`, « La question de contrôle » :
  - dire que le concept 0 est validé quand les sous-concepts enseignés après une réponse
    partielle le sont ;
  - reprise : le rappel en deux lignes d'abord (étape 3 du démarrage de `CLAUDE.md`) ; au
    message suivant, ce que l'apprenant avait juste, puis le sous-concept à enseigner ;
  - après une réponse partielle, la correction tient en une ligne (« Juste : … ; il manque … »),
    puis vient le sous-concept, le tout en 15 lignes (borne de ligne de T-030).
- **Fini quand** : un prof neuf, sur le scénario de T-027 (réponse partielle, arrêt, reprise),
  valide le concept 0 au bon moment, rappelle avant de reprendre et tient le message de reprise
  en 15 lignes.
