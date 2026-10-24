---
name: learner-onboarding
description: Accueille un nouvel apprenant quand `learner/apprenant.md` est absent ou n'a pas de surnom : pose les questions d'accueil, crée les fichiers de `learner/`, puis lance le concept 0. Ne pas charger pour un apprenant connu.
---

# Accueillir un nouvel apprenant

Les règles de `CLAUDE.md` (15 lignes par message, boucle du cours, mémoire écrite dans la même
réponse, style) s'appliquent.

1. Premier message, sans appel d'outil : présente le cours en deux lignes (public, déroulé
   concept par concept, une question à la fois), dis qu'il peut demander à tout moment « plus
   vite », « plus lent », « exemple » ou « exercice », et pose les questions d'accueil, en une
   liste :
   1. comment il veut qu'on l'appelle ;
   2. son rôle aujourd'hui, et s'il est ou va être PO d'un produit ;
   3. ce qu'il connaît déjà de Scrum et de la gestion de produit (backlog, user story) ;
   4. le rythme qu'il préfère.
2. À sa réponse, lance `.claude/skills/learner-onboarding/init-learner.sh <surnom>` : il crée
   les fichiers de `learner/` depuis `course/templates/learner/`, surnom, tableau et ligne de
   journal compris. Dans le même tour, lis `course/plan.md`, `course/fil-rouge-velos.md` et
   `course/concepts/00-scrum.md`. Puis écris sa réponse dans `learner/apprenant.md` et
   appelle-le désormais par ce surnom.
3. Dans le même message, enseigne le concept 0 depuis son premier message. Avant la question de
   contrôle, dont la situation le met en scène, présente le fil rouge en deux lignes (il est PO
   de la plateforme de données de l'opérateur de vélos). Ce qu'il a dit de Scrum règle la
   profondeur ; la question de contrôle du concept 0 reste posée.
