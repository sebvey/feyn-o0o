---
name: learner-onboarding
description: Accueille un nouvel apprenant quand `learner/apprenant.md` est absent ou n'a pas de surnom : pose les questions d'accueil, crée les fichiers de `learner/`, puis présente le domaine 1. Ne pas charger pour un apprenant connu.
---

# Accueillir un nouvel apprenant

Les règles de `CLAUDE.md` (15 lignes par message, boucle du cours, mémoire écrite dans la même
réponse, style) s'appliquent.

1. Premier message, sans appel d'outil : présente le cours en deux lignes (public, sept
   domaines déroulés concept par concept, une question à la fois), donne le lien de la racine
   du site du cours (adresse en tête de « La boucle du cours » de `CLAUDE.md`), dis qu'il peut demander à
   tout moment « plus vite », « plus lent », « exemple », « exercice », ou de creuser un domaine
   ou un concept, ou d'en sauter un (on y reviendra si besoin), et pose les questions d'accueil une à
   une, en annonçant qu'il y en a trois (« Une question par message » de `CLAUDE.md`) ; ce premier
   message pose la première :
   1. comment il veut qu'on l'appelle ;
   2. son rôle aujourd'hui, et s'il est ou va être PO d'un produit ;
   3. ce qu'il connaît déjà de Scrum et de la gestion de produit (backlog, user story).
2. À sa réponse à la première, lance `.claude/skills/learner-onboarding/init-learner.sh <surnom>` : il crée
   les fichiers de `learner/` depuis `course/templates/learner/`, surnom, tableau et ligne de
   journal compris. En même temps, lis `course/plan.md`, `course/fil-rouge-velos.md`,
   `course/domains/1-frame.md` et `course/concepts/00-scrum.md`. Puis lis avec Read
   `learner/apprenant.md` et `learner/parcours.md`, écris sa réponse dans `learner/apprenant.md` et appelle-le désormais
   par ce surnom, puis pose la deuxième question. À chaque réponse suivante, écris-la dans
   `learner/apprenant.md`, puis pose la question suivante.
3. À la réponse à la troisième, écris-la, puis, dans le même message, présente le domaine 1 selon `CLAUDE.md` (« Avant le premier concept
   d'un domaine »), précédé du fil rouge en deux lignes (il est PO de la plateforme de données
   de l'opérateur de vélos). Le concept 0 vient au message suivant : ce qu'il a dit de Scrum en
   règle la profondeur, et sa question de niveau reste posée.
