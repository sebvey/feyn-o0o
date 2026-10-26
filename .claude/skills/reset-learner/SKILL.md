---
name: reset-learner
description: Remet `learner/` à l'état d'un nouvel apprenant en recopiant les modèles de `course/templates/learner/`. Réservé à l'utilisateur, qui l'invoque par son nom.
disable-model-invocation: true
---

# Remettre l'apprenant à zéro

1. Dis en une ligne ce qui va être effacé (le profil, les observations et le parcours de
   l'apprenant, avec son surnom) et demande confirmation. Sans oui explicite, arrête-toi.
2. Pour `apprenant.md`, `observations.md` et `parcours.md` : lis le modèle dans
   `course/templates/learner/` et le fichier de `learner/` (s'il existe), puis écris dans
   `learner/` le contenu du modèle à l'identique, sans rien remplacer.
3. Réponds en une ligne : `learner/` est remis à zéro ; une nouvelle conversation ouvre l'accueil.
