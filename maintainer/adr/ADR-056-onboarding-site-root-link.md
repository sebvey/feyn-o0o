# ADR-056 : Le premier message d'accueil donne le lien de la racine du site

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-076a

## Contexte
Au test du cours avec un `learner/` vide, le prof présentait le cours sans donner le lien du
site. ADR-053 ne prévoit le lien qu'au rappel de reprise (`domaines/`), à la présentation d'un
domaine (`domaines/N/`) et à la validation d'un concept (`concepts/NN/`) : un apprenant neuf
ignorait le site jusqu'à la fin du domaine 1.

## Décision
L'étape 1 de `.claude/skills/learner-onboarding/SKILL.md` fait donner le lien de la racine du
site, sans recopier l'adresse, qui reste écrite une fois en tête de « La boucle du cours » de
`CLAUDE.md`.

## Options écartées
- Le lien de la carte des domaines (`domaines/`), comme au rappel de reprise : à l'accueil,
  l'apprenant n'a encore rien lu, et le message suivant présente déjà le domaine 1 avec le lien
  de sa page.
- Recopier l'adresse dans le skill : elle vivrait à deux endroits.

## Conséquences
Le premier message d'accueil porte une ligne de plus : il doit tenir dans les 15 lignes.
