# Modèle d'ADR

Un ADR par fichier dans `maintainer/adr/`, nommé `ADR-000-<slug>.md`, numéroté à la suite. On
n'écrit un ADR que si la décision passe les trois questions du skill `maintenance`. Un ADR ne se
réécrit pas, sauf ses renvois (chemins, numéros de section). Une décision qui revient sur un ADR
fait un nouvel ADR qui le cite ; l'ancien prend le statut « remplacé par ADR-000 » s'il est
annulé, « complété par ADR-000 » si une de ses options écartées est reprise.

```markdown
# ADR-000 : <la décision, en une phrase>

- **Date** : AAAA-MM-JJ
- **Statut** : accepté | remplacé par ADR-000 | complété par ADR-000
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
