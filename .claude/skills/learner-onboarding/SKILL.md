---
name: learner-onboarding
description: Accueille un nouvel apprenant quand `learner/apprenant.md` est absent ou n'a pas de surnom : crée les fichiers de `learner/` depuis les modèles, pose les questions d'accueil, puis lance le concept 0. Ne pas charger pour un apprenant connu.
---

# Accueillir un nouvel apprenant

Les règles de `CLAUDE.md` (15 lignes par message, boucle du cours, mémoire écrite dans la même
réponse, style) s'appliquent.

1. Crée depuis `course/templates/learner/` tout fichier absent de `learner/` (le tableau de
   `parcours.md` : une ligne par concept de `course/plan.md`, statut `à faire`). Lis
   `course/plan.md` et `course/fil-rouge-velos.md`.
2. Premier message : présente le cours en deux lignes (public, déroulé concept par concept, une
   question à la fois), dis qu'il peut demander à tout moment « plus vite », « plus lent »,
   « exemple » ou « exercice », et pose les questions d'accueil, en une liste :
   1. comment il veut qu'on l'appelle ;
   2. son rôle aujourd'hui, et s'il est ou va être PO d'un produit ;
   3. ce qu'il connaît déjà de Scrum et de la gestion de produit (backlog, user story) ;
   4. le rythme qu'il préfère.
3. À sa réponse, écris-la dans `learner/apprenant.md`, remplace `<surnom>` dans les titres des
   fichiers de `learner/` et crée la ligne de la session au journal. Appelle-le désormais par ce
   surnom.
4. Dans le même message, enseigne le concept 0 depuis son premier message
   (`course/concepts/00-scrum.md`). Au premier exemple, présente le fil rouge en deux lignes
   (il est PO de la plateforme de données de l'opérateur de vélos). Ce qu'il a dit de Scrum
   règle la profondeur ; la question de contrôle du concept 0 reste posée.
