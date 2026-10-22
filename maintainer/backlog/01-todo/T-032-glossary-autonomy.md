# T-032 : Enrichir le glossaire en autonomie

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur, à la clôture de T-018d (2026-10-22). Le test du lot a
  relevé que « Acteur », terme central du concept 6, manquait au glossaire ; le coordinateur
  ne l'a pas ajouté sans validation, car le skill `maintenance` (« Périmètre », Cadre) fait
  valider tout changement de `course/`, et ADR-020 fait arbitrer les besoins de glossaire par le
  mainteneur. Le mainteneur juge que le glossaire ne demande pas sa validation.
- **À faire** :
  - Skill `maintenance`, « Périmètre », après la ligne « Cadre » :
    « - **Exception, `course/glossary.md`** : tu ajoutes un terme que le cours emploie, ou tu
    précises sa définition sans en changer le sens, en autonomie ; tu le signales dans la PR.
    Retirer un terme ou en changer le sens se propose. »
  - Aligner T-018 §3 et §5 (le coordinateur arbitre le glossaire) et les sous-tickets de lot
    restants s'ils disent le contraire.
  - Nouvel ADR : remplace ADR-020 sur l'arbitrage du glossaire ; option écartée : tout faire
    valider par le mainteneur.
- **Fini quand** : la règle est dans le skill, un ADR la trace, et un sous-agent neuf qui lit
  le skill dit qu'il ajoute seul un terme manquant au glossaire et le signale dans la PR, mais
  propose un changement de sens ou un fait du fil rouge.
