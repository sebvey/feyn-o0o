# T-010 : Remplacer le journal et les propositions en attente par le backlog et des ADR

- **Créé le** : 2026-10-21
- **Constat** : session de maintenance du 2026-10-21. Le journal de `maintainer/maintenance.md`
  double `02-done/` (chaque ticket fermé y est écrit deux fois) et oblige à de l'archéologie ; le
  dépôt est maintenant sous git. « Propositions en attente » n'a plus d'usage en maintenance
  (propositions interactives) ; les demandes d'un apprenant iront dans `00-proposed/`.
- **À faire** :
  - créer `maintainer/adr/` ; dans le skill `maintenance`, la règle : un ADR seulement si oui aux
    trois questions (la décision fixe une structure ou une règle durable du cadre ; une autre
    option crédible pourrait être reprise par un mainteneur futur ; la raison n'est pas écrite
    dans le cadre). Modèle d'ADR court ;
  - `CLAUDE.md` (demande de l'apprenant sur la forme du cours) et `update-memory` (incohérence
    de `coulisses.md`) : écrire un ticket dans `00-proposed/` au lieu de `maintenance.md` ;
    `course/mock-project/GENERER.md` l. 157 aussi ;
  - ADR rétroactifs pour les décisions d'aujourd'hui qui passent la règle (backlog, T-003,
    suppression du journal) ;
  - supprimer `maintainer/maintenance.md` une fois son contenu utile repris.
- **Fini quand** : plus aucun fichier du cadre ne renvoie à `maintenance.md`, et le skill dit
  quand écrire un ADR.
- **Fait le** : 2026-10-21, `maintainer/adr/` et son modèle ; règle des trois questions au §5
  du skill `maintenance` ; demandes de l'apprenant (`CLAUDE.md`) et corrections de `coulisses.md`
  (`update-memory`) en tickets dans `00-proposed/` ; `GENERER.md` ne renvoie plus au journal ;
  ADR-001 à 007 ; option écartée de la session 4 reprise en T-011 ; `maintenance.md` supprimé.
  Test par sous-agent OK.
