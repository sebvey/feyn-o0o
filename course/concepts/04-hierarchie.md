---
concept: 4
titre: Hiérarchie du backlog
---

# Hiérarchie du backlog

> Contenu migré tel quel depuis les fiches de sve (T-017), à réécrire pour le public cible
> selon `course/templates/concept.md` (T-018).

## L'essentiel
Du plus large au plus fin : **thème** (grand domaine) > **epic** (gros besoin, trop gros pour
être livré d'un coup) > **feature** (capacité utilisable) > **user story** (besoin précis,
livrable en quelques jours) > **tâche** (travail technique pour réaliser la story).

## Consensus et choix d'école
- **Consensus** : le Scrum Guide ne définit **aucun** de ces niveaux, il parle d'« éléments du
  backlog ». La user story vient de l'eXtreme Programming (XP).
- **Quasi universel** : story et tâche.
- **Varie selon l'outil et l'équipe** : Jira (Epic > Story > Sous-tâche), Azure DevOps (Epic >
  Feature > Story > Task), SAFe ajoute d'autres niveaux. La frontière feature / story est floue,
  même entre praticiens. Chaque équipe choisit ses niveaux et s'y tient.

## Sur un exemple
<À réécrire avec un exemple générique.>

## Pièges
- Prendre un nouveau public (« les achats ») pour une story : il cache des dizaines de stories
  encore inconnues.
- Classer une tâche technique comme story : elle est invisible pour l'utilisateur.
- Juger le niveau dans l'absolu : on juge **ce qu'il reste à livrer**. Si la décomposition de
  la marge existe déjà, « expliquer la baisse » redevient une story.

## Le test rapide
Je sais ce que voit l'utilisateur **et** c'est livrable en quelques jours : story. Je sais ce
qu'il obtient mais c'est trop gros : feature. Je ne sais pas encore ce qu'il obtient : epic.

Variante plus simple pour feature / story (celle qui marche avec sve) : écris le « je veux ».
Un seul : story. Plusieurs, chacun utile séparément : feature, et chaque « je veux » devient
une story candidate.

## Visuel suggéré
Un arbre à cinq niveaux sur l'exemple de la marge, chaque niveau d'une couleur, avec à droite
la question du test rapide qui fait passer d'un niveau à l'autre.
