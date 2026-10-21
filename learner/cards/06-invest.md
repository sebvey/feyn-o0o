---
concept: 6
titre: INVEST
statut: validé
date: 2026-10-21
---

# INVEST

## L'essentiel
Six critères pour juger si une story est bien formée : **I**ndependent (livrable sans attendre
une autre), **N**egotiable (le besoin, pas la solution), **V**aluable (de la valeur pour un
utilisateur), **E**stimable (l'équipe peut estimer l'effort), **S**mall (quelques jours, un
sprint au plus), **T**estable (on tranche sans débat si c'est fait). INVEST juge la story entière
(phrase + critères d'acceptation + discussion), pas la seule phrase.

## Consensus et choix d'école
- **Consensus** : grille proposée par Bill Wake (milieu XP, 2003), très répandue. Aucun guide
  officiel (ni le Scrum Guide) ne l'impose : c'est une aide à la réflexion.
- **Choix d'école** : le « spike » (story d'exploration limitée dans le temps, issue d'XP) sert
  surtout aux incertitudes techniques ; pour un besoin métier flou, on préfère le refinement.

## Sur un exemple
<À réécrire avec un exemple générique ; ceux du projet réel sont archivés dans
`learner/archive/real-project/fiches-exemples.md`.>

## Pièges
- Cocher E et S « OK » sans pouvoir le vérifier. Si plusieurs lettres dépendent d'un même mot
  flou, c'est ce mot qu'il faut creuser.
- Réflexe du backlog technique : créer une story « définir X » dont une autre dépend. Elle
  n'apporte pas de valeur. Le PO et le métier précisent X en refinement, et on livre d'abord
  une story limitée aux règles connues ; chaque règle découverte devient une nouvelle story.

## Le test rapide
Un testeur qui ne connaît que la story peut-il dire « fait » ou « pas fait » sans te poser de
question ? Et l'équipe peut-elle dire « quelques jours » sans hésiter ? Sinon, un mot est flou.

## Visuel suggéré
Six cases (une par lettre) sur la story des OF : v3 avec E, S, T en rouge reliés au mot « mal
renseigné », puis v4 avec ces cases passées au vert, T en orange.
