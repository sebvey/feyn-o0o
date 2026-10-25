# ADR-044 : Ce qui est propre au site vit dans maintainer/site/, en attendant le dépôt du site

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-066

## Contexte
Après T-057 à T-065, ce qui ne concernait que le site était éparpillé : ADR-041 à 043 parmi les
ADR du cours, aucune procédure écrite pour tester et déployer un ticket du site, et un
`maintainer/site/structure.md` en partie périmé. Le mainteneur veut, à terme, ramener tout cela
dans le dépôt du site, et dès maintenant une séparation nette.

## Décision
Tout ce qui est propre au site vit dans `maintainer/site/` : plan et principes
(`structure.md`), traitement d'un ticket du site (`procedure.md`), ADR du site seul (`adr/`,
numérotés à la suite de `maintainer/adr/`). Le skill `maintenance` y renvoie (« Périmètre »,
§3 étape 2, §4) ; la remontée au cours quand une remarque sur le site porte sur le fond est dans
`procedure.md`. T-050d déplacera ce dossier dans le dépôt du site.

## Options écartées
- Écrire tout de suite la documentation dans le dépôt du site : le mainteneur l'a renvoyée à
  plus tard (T-050d, après T-056).
- Laisser la procédure du site dans le skill `maintenance` : elle serait à extraire au moment
  du déménagement.

## Conséquences
Un ADR qui touche le cours et le site (comme ADR-038) reste dans `maintainer/adr/`. Au
déménagement, les ADR du site partent avec le dossier.
