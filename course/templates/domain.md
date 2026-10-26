# Modèle de fiche de domaine

Une fiche par domaine dans `course/domains/`, nommée `N-slug.md` (slug en anglais), pour les
sept domaines de `course/plan.md`. Elle présente le domaine avant ses concepts : pourquoi il
existe et comment ses concepts s'enchaînent. Écrite pour le public cible du cours
(`course/plan.md`). Rien de propre à un apprenant.

Le titre du domaine, ses concepts et ce que l'apprenant sait à la fin restent dans
`course/plan.md`, « Domaines du cours » : la fiche ne les recopie pas. Elle n'enseigne aucun
concept et n'avance aucune affirmation qui ne soit déjà dans une fiche de concept du domaine :
elle n'a donc pas de fichier de sources. Un choix d'école qu'elle nomme garde son attribution
et sa pastille, comme dans la fiche de concept. Elle prend ses acteurs et ses faits dans
`course/fil-rouge-velos.md`, sans le contredire, et n'emploie ni la situation d'une Question
de la banque d'exemples, ni le verdict qu'elle appelle. Les termes sont ceux de
`course/glossary.md`.

Une quarantaine de lignes au plus : elle se lit en deux minutes.

```markdown
---
domaine: <numéro, 1 à 7>
titre: <titre du domaine, tel que dans course/plan.md>
duree: <minutes de conversation avec l'agent, estimation basse, sans les apartés ; le site l'affiche>
---

# <Titre>

## Le problème
<3 à 5 lignes. La difficulté que rencontre le Product Owner d'un produit data tant qu'il n'a
pas les concepts du domaine : ce qu'il fait de travers, ce que cela coûte.>

## Le fil des concepts
<Un paragraphe court par concept du domaine, dans l'ordre : ce que le concept apporte et
pourquoi il vient à cette place (ce qu'il suppose du précédent, ce qu'il prépare). Chaque
paragraphe s'ouvre sur « **N. Titre du concept.** ». Un domaine d'un seul concept suit ses
sous-concepts : un paragraphe pour le concept, puis un par sous-concept, ouvert sur
« **12a. Titre du sous-concept.** ».>

## D'où l'on vient, où l'on va
<2 à 4 lignes. Ce que le domaine précédent donne à celui-ci, puis ce que celui-ci donne au
suivant. Le domaine 1 part de rien, le domaine 7 ferme le cours.>

## Un cas qui traverse le domaine
<5 à 8 lignes. Une situation du fil rouge vélos où chaque concept du domaine sert, dans
l'ordre, sans en donner la réponse détaillée : elle montre à quoi sert le domaine.>
```
