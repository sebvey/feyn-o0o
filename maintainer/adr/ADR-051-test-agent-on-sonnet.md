# ADR-051 : Le sous-agent de test tourne sur Sonnet

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-074

## Contexte
Le §5 du skill `maintenance` (« Tester ») ne fixait pas de modèle : le sous-agent de test
prenait celui de la session, Opus. Le mainteneur (2026-10-26, après le test de T-073) : pour
tester des instructions, un modèle moins capable vaut mieux, car un modèle fort compense une
consigne floue et cache le défaut. Le test de T-073 rejoué sur Haiku a appliqué la règle sur
l'essentiel, mais a lu moins de fichiers (sans l'ADR de la règle) et a tranché une ambiguïté
sans la signaler.

## Décision
Le sous-agent de test du §5 tourne sur Sonnet. Écrit au §5 du skill `maintenance`.

## Options écartées
- Le modèle de la session (Opus), règle implicite d'avant : il comble les trous des
  instructions au lieu de les révéler.
- Haiku : trop faible ; il lit le cadre en partie et tranche au lieu de signaler.

## Conséquences
Un défaut que Sonnet ne voit pas peut rester ; le test ne remplace pas la relecture de la PR.
