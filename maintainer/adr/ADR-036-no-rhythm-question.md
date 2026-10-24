# ADR-036 : L'accueil ne demande plus le rythme

- **Date** : 2026-10-24
- **Statut** : accepté
- **Ticket** : T-046

## Contexte
ADR-021 fixait quatre questions d'accueil, dont le rythme préféré. Sa réponse allait dans
« Préférences » de `learner/apprenant.md`, mais aucune règle ne s'en servait : le rythme
s'adapte en cours de route, par « plus vite » et « plus lent ».

## Décision
`.claude/skills/learner-onboarding/SKILL.md` pose trois questions (surnom, rôle, acquis en
Scrum et gestion de produit). Le modèle `course/templates/learner/apprenant.md` n'a plus de
ligne « Rythme » ; « Préférences » reçoit celles qui apparaissent en cours (`CLAUDE.md`).

Complète ADR-021.

## Options écartées
- Garder la question et lui donner un effet (par exemple, en « rapide », sauter l'exemple quand
  la question de contrôle passe) : une règle de plus pour ce que « plus vite » couvre déjà.

## Conséquences
L'accueil est plus court d'une question.
