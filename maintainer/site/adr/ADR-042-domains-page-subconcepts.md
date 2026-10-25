# ADR-042 : La page Domaines déplie chaque concept sur ses sous-concepts, sans lecture rapide

- **Date** : 2026-10-25
- **Statut** : complété par ADR-043
- **Ticket** : T-058

## Contexte
ADR-041 avait donné à chaque domaine une lecture rapide (sections choisies, avec une phrase
« pourquoi » propre au site). Sur l'aperçu 0.2.2, le mainteneur a relevé qu'elles semblaient
lister tous les sous-concepts : elles en citaient 44 sur 50. C'était une table des matières en
double, à maintenir à la main.

## Décision
Sur la page Domaines, chaque concept se déplie sur la liste de tous ses sous-concepts (numéro,
titre, promesse), lue au build dans les composants `<Sous>` des pages de concept. Les lectures
rapides et `src/data/lectures.ts` disparaissent. Un sommaire collant suit le domaine en cours de
lecture. Écrit dans `maintainer/site/structure.md` et le README du site.

## Options écartées
- Garder les lectures rapides : elles doublaient la table des matières, avec des phrases à
  maintenir hors du cours.
- Un bouton « Tout déplier » par domaine : non retenu par le mainteneur.

## Conséquences
Une page de concept qui ajoute ou renomme un sous-concept met la page Domaines à jour sans autre
fichier à toucher. Le site n'a plus de chemin de lecture propre ; un besoin de ce type passerait
par le cours.
