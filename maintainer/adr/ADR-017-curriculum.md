# ADR-017 : Le cours suit un ordre logique pour un nouvel apprenant, en 18 concepts

- **Date** : 2026-10-22
- **Statut** : accepté
- **Ticket** : T-018a

## Contexte
Le plan était né du parcours d'un seul apprenant (sve) et n'avait jamais été confronté au
public cible ni aux références (Scrum Guide 2020, objectifs PSPO et CSPO) : 7 concepts sur 13
portaient sur les stories ; l'objectif produit, la valeur, les parties prenantes, la découverte
et les spécificités data manquaient. Analyse : `maintainer/work/T-018/framing.md` (jusqu'à la
clôture de T-018, puis l'historique git).

## Décision
`course/plan.md` : public « développeur ou profil data qui devient PO d'un produit data », sept
objectifs de fin de cours, 18 concepts (0 à 17) avec objectif, prérequis et sous-concepts.
Ajouts : objectif produit et résultat (2), données du produit (12, RGPD borné à finalité et
minimisation), parties prenantes (14), hypothèses et exploration (17). Scrum en bref devient le
concept 0, avec une question de contrôle pour le passer. L'ancien concept 13 (outil) devient
l'annexe A1. Glossaire : `course/glossary.md`, hors lecture de démarrage. Lots de réécriture
dans l'ordre du cours (T-018b à T-018h). sve repart de zéro.

## Options écartées
- Garder les numéros 1 à 12 pour ne pas casser la reprise de sve : un nouvel apprenant aurait
  vu la valeur et les parties prenantes après 13 concepts ; sve accepte de repartir de zéro.
- Lots dans l'ordre du parcours de sve (11 à 13 d'abord) : sans objet après son nouveau départ.
- Écartés du contenu : stratégie et économie produit, passage à l'échelle, Evidence-Based
  Management et OKR, découverte continue (nommée comme choix d'école au concept 17), UX, contrats
  de données et data mesh.
- Deux concepts data (indicateurs ; qualité et accès) : plus long sans gain clair.
- Garder Scrum en annexe avec une règle dans `CLAUDE.md` : une règle de plus pour le même effet.
- Glossaire dans `course/plan.md` : alourdit le fichier lu à chaque démarrage.

## Conséquences
Les fiches existantes sont renumérotées en attendant leur lot. T-021 peut changer le concept 0
(parti pris des sprints). Un lot qui change ces choix fait un nouvel ADR.
