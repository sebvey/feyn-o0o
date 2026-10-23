# ADR-024 : L'origine d'un terme non sourcée se donne de mémoire, signalée non vérifiée, et ne se vérifie que si un outil de recherche est disponible

- **Date** : 2026-10-22
- **Statut** : complété par ADR-032
- **Ticket** : T-026

## Contexte
Test de T-018b : le prof a voulu donner l'origine de « Scrum » et de « sprint », levier qui
marche avec certains apprenants, et y a renoncé, faute de source dans `course/sources/`. La règle
de `CLAUDE.md` (« si elle n'y est pas, dis-le ») ne laissait que cette réponse.

## Décision
`CLAUDE.md`, puce sur les sources : l'origine d'un terme absente de `course/sources/` se donne de
mémoire, en disant qu'elle n'est pas vérifiée ; si un outil de recherche est disponible dans la
session (un outil à charger avant usage compte), le prof propose de vérifier, sinon il ne propose
rien ; si l'apprenant accepte, il cherche, donne le résultat en le disant vérifié et ajoute la
source à la note de `maintainer/improvements/`, écrite dans tous les cas.

## Options écartées
- Dire seulement que la source manque (règle précédente, qui vaut toujours pour les autres
  affirmations) : le prof perd un levier pour une information sans enjeu pour le fond du cours.
- Une rubrique « Origine des termes », sourcée, dans chaque fichier de concept : T-025, refusé
  (2026-10-23) ; la règle couvre l'attente.

## Conséquences
Une réponse de mémoire peut être fausse : elle est signalée comme telle, et le prof s'en tient au
plus sûr (« des études japonaises des années 1980 » plutôt que des noms et des dates). Les notes
de `maintainer/improvements/` diront si la rubrique se repropose.
