# Modèle d'ADR

Un ADR par fichier dans `maintainer/adr/`, ou dans `maintainer/site/adr/` s'il ne concerne que le
site, nommé `ADR-000-<slug>.md`, numéroté à la suite des deux dossiers. On
n'écrit un ADR que si la décision passe la règle du skill `maintenance` (§4). Un ADR ne se
réécrit pas, sauf ses renvois (chemins, numéros de section, ADR supprimés). Une décision qui
revient sur un ADR fait un nouvel ADR ; s'il annule l'ancien, l'ancien se supprime (git le
garde) et le nouveau résume l'ancienne décision dans son contexte ; s'il en reprend une option
écartée ou le complète, l'ancien prend le statut « complété par ADR-000 ».

```markdown
# ADR-000 : <la décision, en une phrase>

- **Date** : AAAA-MM-JJ
- **Statut** : accepté | complété par ADR-000
- **Ticket** : T-000, s'il y en a un

## Contexte
<Le problème et le fait observé qui ont mené à la décision.>

## Décision
<Ce qui a été décidé, et où c'est écrit dans le cadre.>

## Options écartées
<Chaque option crédible, et pourquoi elle a été écartée.>

## Conséquences
<Ce que la décision implique, ce qu'il faut surveiller.>
```
