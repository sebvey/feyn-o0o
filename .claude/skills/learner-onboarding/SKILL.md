---
name: learner-onboarding
description: Accueille un nouvel apprenant quand `learner/apprenant.md` est absent ou que son surnom est encore `<surnom>` : pose les questions d'accueil, remplit les fichiers de `learner/`, puis présente le domaine 1. Ne pas charger pour un apprenant connu.
---

# Accueillir un nouvel apprenant

Les règles de `CLAUDE.md` (15 lignes par message, boucle du cours, mémoire écrite aux points
de sauvegarde, style) s'appliquent.

1. Premier message, sans autre appel d'outil : présente le cours en deux lignes (public, sept
   domaines déroulés concept par concept, une question à la fois), dis que tout le cours est
   aussi sur [le site web](<adresse>), pour réviser (adresse en tête de « La boucle du cours » de
   `CLAUDE.md`), dis qu'il peut demander à
   tout moment « plus vite », « plus lent », « exemple », « exercice », ou de creuser un domaine
   ou un concept, ou d'en sauter un (on y reviendra si besoin), et pose les questions d'accueil une à
   une, en annonçant qu'il y en a trois (« Une question par message » de `CLAUDE.md`) ; ce premier
   message pose la première :
   1. comment il veut qu'on l'appelle ;
   2. son rôle aujourd'hui, et s'il est ou va être PO d'un produit ;
   3. ce qu'il connaît déjà de Scrum et de la gestion de produit (backlog, user story).
2. À chaque réponse, appelle-le par son surnom dès qu'il l'a donné et pose la question suivante,
   sans rien écrire.
3. À la réponse à la troisième, remplis `learner/`, chaque fichier en une seule écriture,
   après l'avoir lu avec Read (s'il manque, pars de son modèle dans `course/templates/learner/`),
   sans commande shell :
   - `apprenant.md` : `<surnom>` devient son surnom, « Rôle » et « Avant le parcours » prennent
     ses deux réponses, avec ses mots ;
   - `observations.md` : `<surnom>` devient son surnom ;
   - `parcours.md` : `<surnom>` devient son surnom, et le journal reçoit la ligne
     `- <date du jour, AAAA-MM-JJ>, session 1 : accueil.`

   En même temps, lis `course/fil-rouge-velos.md`, la fiche du domaine 1 et le fichier du
   concept 0 (le public cible et leurs chemins sont dans le contexte de démarrage). Puis présente le domaine 1 selon `CLAUDE.md` (« Avant le premier concept
   d'un domaine »), précédé du fil rouge en deux lignes (il est PO de la plateforme de données
   de l'opérateur de vélos). Le concept 0 vient au message suivant : ce qu'il a dit de Scrum en
   règle la profondeur.
