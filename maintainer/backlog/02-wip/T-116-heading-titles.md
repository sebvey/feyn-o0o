# T-116 : Titrer domaine et concept en titres Markdown

- **Créé le** : 2026-10-26
- **Constat** : le mainteneur veut retrouver le début d'un concept ou d'un domaine en remontant la
  conversation. Le lien du titre de concept est trop discret. Essai de rendu en session de
  maintenance : domaine en `#`, concept en `##`, validé par le mainteneur.
- **À faire** : dans `CLAUDE.md`, « La boucle du cours », liste des liens du site : le titre de
  présentation d'un domaine s'écrit en titre de niveau 1 (`# [Domaine 3 : …](…)`), le titre du
  premier message d'un concept en titre de niveau 2 (`## [Concept N : …](…)`). Le lien « la
  page du concept N » à la validation, les sous-concepts et le reste du message ne changent pas.
- **Fini quand** : un test montre le titre de concept en `##` et la présentation de domaine en
  `#`, sans autre titre dans le message.
