# ADR-018 : Le cours assume une équipe Scrum en sprints, et l'annexe A2 dit ce qui change sans sprint

- **Date** : 2026-10-22
- **Statut** : complété par ADR-031
- **Ticket** : T-021

## Contexte
Le cours suppose une équipe en sprints (concept 0, DoR au Sprint Planning, objectif et revue de
sprint, équipe vélos en sprints de deux semaines) sans le dire, sauf en passant (fiche 03). Une
équipe en flux continu (Kanban) n'a pas de sprint. Relevé de T-021 : seuls le concept 0 et les
sous-concepts 11b, 15b et 15c en dépendent ; les autres valent sans sprint. Le *Kanban Guide*
n'a ni rôles, ni événements, ni cadence ; le *Kanban Guide for Scrum Teams* garde le sprint.
Aucune enquête trouvée ne montre que les équipes data travaillent surtout en flux.

## Décision
`course/plan.md`, section « Parti pris » : le cours suppose une équipe Scrum en sprints ; le
concept 0 l'annonce, même quand la question de contrôle fait passer le concept, et invite
l'apprenant à dire si son équipe travaille sans sprint ; l'annexe A2 « Travailler sans sprint »
donne l'équivalent en flux de 11b, 15b et 15c, proposée à ces sous-concepts. A2 est écrite par
le lot 6 (T-018g). La « Pratique répandue » de la fiche 00, sans source, est retirée.

## Options écartées
- Assumer Scrum sans annexe : le prof improviserait l'équivalent en flux à chaque apprenant.
- Un cours neutre, Scrum et Kanban à parts égales : le public cible est une équipe Scrum ou
  proche, le fil rouge est en sprints, et le prof tiendrait deux versions des sous-concepts
  concernés.
- Faire passer l'équipe vélos en flux : on perd le Sprint Planning, l'objectif et la revue de
  sprint, au programme des certifications PO.
- Un paragraphe « sans sprint » dans les fiches 11 et 15 : l'équivalent serait éparpillé, et
  alourdirait des fiches lues par tous les apprenants.

## Conséquences
Le prof qui annonce A2 à un apprenant en flux le note dans « Points annoncés pour plus tard » de
`learner/parcours.md`, selon la règle existante de `CLAUDE.md`. A2 distingue le
flux sans sprint de Kanban utilisé avec Scrum (le sprint reste). Le cours n'affirme pas que les
équipes data travaillent surtout en flux.
