# ADR-022 : La question de contrôle du concept 0 est close dès qu'elle est répondue, et une notion pas encore vue n'est pas une vigilance

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-027

## Contexte
Test de T-011 : un nouvel apprenant (« Max ») répond partiellement à la question de contrôle du
concept 0 (« Le PO je crois, et un sprint c'est deux semaines de boulot »), puis s'arrête. Le prof
ne savait pas si la question restait en attente, si « le PO » sans « une seule personne »
comptait juste, ni s'il fallait noter en vigilance l'incrément qu'il n'avait pas abordé.

## Décision
- `course/concepts/00-scrum.md` : une fois répondue, même partiellement, la question de contrôle
  est close ; si l'apprenant s'arrête avant la correction, « Prochaine étape » note ce qu'il
  avait juste, ce qui manque et le sous-concept à enseigner. Le noyau de la réponse est « le PO
  décide de l'ordre du backlog » (une hésitation compte comme juste) ; « une seule personne, pas
  un comité » est une nuance.
- `CLAUDE.md`, sous le tableau de la mémoire : une notion pas encore enseignée que l'apprenant
  ignore n'est pas une vigilance.
- `00-scrum.md`, annonce du parti pris : « équipe sans sprint » se note dans « Points annoncés
  pour plus tard », règle d'ADR-018 rappelée là où elle sert.

## Options écartées
- Laisser la question de contrôle en attente et la reposer à la reprise : elle teste ce que
  l'apprenant sait déjà ; la reposer après une réponse ne dit rien de plus.
- Garder « une seule personne » dans le noyau : une réponse juste sur le fond deviendrait
  partielle pour une nuance, contre la règle de `CLAUDE.md` sur les nuances.
- Une ligne « Équipe » dans le modèle de `learner/apprenant.md` : la même information vivrait à
  deux endroits.

## Conséquences
Le test de T-027 a montré qu'une réponse juste sur l'ordre du backlog fait sauter 0a : un
apprenant peut valider le concept 0 sans avoir vu le Scrum Master ni les artefacts (T-029).
