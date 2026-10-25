# ADR-043 : La page Domaines a un bouton « Tout déplier » pour toute la page

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-059

## Contexte
ADR-042 avait écarté un bouton « Tout déplier ». Après la mise en ligne, le mainteneur l'a
demandé : voir toute la table des matières d'un coup, ou chercher un mot avec Ctrl+F (le
navigateur ne cherche pas dans un concept replié).

## Décision
Un seul bouton, dans le sommaire collant de la page Domaines : « Tout déplier », puis « Tout
replier » ; son libellé suit l'état des concepts ; caché sans JavaScript. Écrit dans
`src/pages/domaines.astro` du site.

## Options écartées
- Un bouton par domaine : les domaines ont de 1 à 6 concepts, huit boutons de plus encombrent la
  page pour un gain faible.
- Pas de bouton (ADR-042) : remplacé.

## Conséquences
Aucune sur le cours.
