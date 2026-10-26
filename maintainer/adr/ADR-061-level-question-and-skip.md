# ADR-061 : La question du concept 0 situe le niveau sans rien faire sauter, et seul l'apprenant demande à sauter un concept ou un domaine

- **Date** : 2026-10-26
- **Statut** : complété par ADR-065
- **Ticket** : T-076f

## Contexte
Depuis ADR-017, une question de contrôle permettait de passer le concept 0 : un noyau juste le
validait, une réponse partielle ne faisait enseigner que le sous-concept manquant (ADR-023,
T-029). Au test du cours du 2026-10-26, le prof a annoncé « Si ta réponse est solide, on passe
directement au concept 1 » ; une réponse juste sur l'ordre du backlog a fait sauter tout 0a, et
l'apprenant a reçu l'exercice de 0a2 sans connaître le rôle du Scrum Master. Le mainteneur : le
prof ne propose pas de sauter une partie du cours ; c'est l'apprenant qui peut le demander, et
on y revient si besoin.

## Décision
- `course/concepts/00-scrum.md` et `course/plan.md` : la question de contrôle devient une
  question de niveau. Posée d'un bloc, sans relance, corrigée en une ligne, elle ne valide ni ne
  fait sauter aucun sous-concept ; tout le concept s'enseigne ensuite, plus court là où la
  réponse était juste. Une erreur fréquente commise dans la réponse se note en vigilance.
- `CLAUDE.md`, « Creuser ou sauter un domaine ou un concept » : l'apprenant peut demander à
  sauter un domaine ou un concept pas encore validé ; statut `sauté` ; un prérequis sauté se
  dit en une ligne ; une réponse qui bute sur une notion sautée fait proposer de l'enseigner.
  Le skill `learner-onboarding` l'annonce à l'accueil.

## Options écartées
- Garder la question de contrôle qui fait passer le concept (ADR-017, ADR-023) : un apprenant
  passe 0a sans avoir vu le Scrum Master ni les événements, que les banques suivantes
  supposent connus.
- Retirer la question : le mainteneur la garde pour situer le niveau.
- Ne laisser sauter aucun concept, et seulement revenir sur un point au besoin (lecture B) : le
  mainteneur veut que l'apprenant puisse sauter, avec une trace dans `learner/parcours.md`.

## Conséquences
La question de niveau n'est pas un test : la règle des questions en plusieurs temps (ADR-058)
ne s'y applique pas. Le concept 0 prend plus de messages pour un apprenant qui connaît Scrum.
ADR-017, ADR-018 et ADR-023 sont complétés : le passage du concept 0 par la question n'existe
plus.
