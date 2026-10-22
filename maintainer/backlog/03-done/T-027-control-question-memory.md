# T-027 : Préciser ce que le prof note après la question de contrôle du concept 0

- **Créé le** : 2026-10-22
- **Constat** : test de T-011 (sous-agent prof neuf, nouvel apprenant « Max » qui répond « Le PO
  je crois, et un sprint c'est deux semaines de boulot », puis s'arrête). Le prof a bien
  enchaîné, mais a signalé quatre zones floues :
  - réponse partielle à la question de contrôle suivie d'un arrêt : la banque de
    `course/concepts/00-scrum.md` dit « dire ce qui est juste, puis enseigner le sous-concept qui
    manque », l'arrêt impose deux lignes ; rien ne dit si la question reste en attente ;
  - « le PO, une seule personne » : noyau de la réponse ou nuance ? (« Le PO je crois » compté
    juste) ;
  - incrément absent de la réponse noté en vigilance active, alors que « Prochaine étape » le
    dit déjà : vigilance ou simple sous-concept pas encore vu ?
  - l'annonce du parti pris invite l'apprenant à dire s'il travaille sans sprint, mais aucun
    endroit de `learner/` ne prévoit de noter sa réponse, utile en 11b, 15b et 15c (annexe A2).
- **À faire** (affiné avec le mainteneur le 2026-10-22) :
  - `course/concepts/00-scrum.md`, question de contrôle : une fois répondue, même partiellement,
    elle est close ; si l'apprenant s'arrête avant la correction, « Prochaine étape » note ce
    qu'il avait juste, ce qui manque et le sous-concept à enseigner.
  - Même fichier, noyau : « le PO décide de l'ordre du backlog » (une hésitation compte comme
    juste) ; « une seule personne, pas un comité » passe en nuance.
  - `CLAUDE.md`, sous le tableau de la mémoire : une notion pas encore enseignée que l'apprenant
    ignore n'est pas une vigilance.
  - `00-scrum.md`, annonce du parti pris : « équipe sans sprint » se note dans « Points annoncés
    pour plus tard » (annexe A2 en 11b, 15b, 15c), règle d'ADR-018 rappelée là où elle sert ;
    option écartée : une ligne « Équipe » dans le modèle de `apprenant.md` (même information à
    deux endroits).
- **Fini quand** : un sous-agent prof neuf rejoue le scénario de Max (réponse partielle puis
  arrêt) et sa reprise, plus une variante où Max dit travailler en Kanban : la question de
  contrôle n'est pas reposée ; « le PO je crois » est compté juste ; aucune vigilance pour
  l'incrément ; la variante Kanban produit un point annoncé A2.
- **Fait le** : 2026-10-22, quatre précisions (question de contrôle close une fois répondue, noyau « le PO décide de l'ordre », notion pas encore vue qui n'est pas une vigilance, équipe sans sprint en point annoncé), ADR-022 ; test par sous-agent (accueil de Max, réponse partielle avec Kanban puis arrêt, reprise) : question de contrôle non reposée, « le PO je crois » compté juste, aucune vigilance pour l'incrément, point annoncé A2 écrit, 15 lignes tenues ; défauts hors ticket dans T-029 (0a sauté, validation du concept 0, reprise d'une correction reportée).
