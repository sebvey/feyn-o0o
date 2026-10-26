# ADR-057 : Le prof donne les liens du site en liens Markdown à texte descriptif

- **Date** : 2026-10-26
- **Statut** : complété par ADR-068
- **Ticket** : T-076b

## Contexte
Au test du cours, le prof collait l'adresse nue du site. Le mainteneur veut voir à la place une
description courte de la page visée. ADR-053 fixe quelles pages le prof donne, pas comment il
les affiche.

## Décision
En tête de « La boucle du cours » de `CLAUDE.md`, après l'adresse du site : chaque lien du site
est un lien Markdown dont le texte dit ce qu'on y trouve, jamais l'adresse nue. Les règles qui
nomment les pages par leur chemin (`domaines/`, `domaines/N/`, `concepts/NN/`) restent telles
quelles.

## Options écartées
- L'adresse nue (pratique d'avant) : plus longue et moins parlante dans un message de 15 lignes.
- Tenir compte du rendu en CLI, où la syntaxe Markdown peut rester brute : le mainteneur ne vise
  que l'app desktop.

## Conséquences
Si le cours se suit un jour hors de l'app desktop, le rendu des liens est à revérifier.
