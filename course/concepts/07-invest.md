---
concept: 7
titre: INVEST
---

# INVEST

> Contenu migré tel quel depuis les fiches de sve (T-017), à réécrire pour le public cible
> selon `course/templates/concept.md` (T-018).

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
Vélos en libre-service, le N (Negotiable) :
> Fautif : « En tant qu'abonné, je veux recevoir un SMS à 8 h avec le nombre de vélos de ma
> station… » (la solution est figée dans la story).
> Négociable : « En tant qu'abonné, je veux savoir avant de partir s'il reste un vélo à ma
> station, afin de ne pas me déplacer pour rien. »

Le métier ajoute : un tiers des abonnés n'a qu'un téléphone basique. Réponse de sve : le SMS
reste négociable. Juste : ce qui devient non négociable, c'est la contrainte (téléphone
basique, sans l'appli), et elle s'écrit dans un critère d'acceptation (concept 8), pas en
nommant un canal. Négociable ne veut pas dire « tout est ouvert ».

## Pièges
- Cocher E et S « OK » sans pouvoir le vérifier. Si plusieurs lettres dépendent d'un même mot
  flou, c'est ce mot qu'il faut creuser.
- Réflexe du backlog technique : créer une story « définir X » dont une autre dépend. Elle
  n'apporte pas de valeur. Le PO et le métier précisent X en refinement, et on livre d'abord
  une story limitée aux règles connues ; chaque règle découverte devient une nouvelle story.

- Écrire la solution dans la story (« recevoir un SMS ») : l'équipe ne peut plus proposer
  mieux. Écrire le besoin ; les contraintes réelles vont dans les critères.

## Le test rapide
Un testeur qui ne connaît que la story peut-il dire « fait » ou « pas fait » sans te poser de
question ? Et l'équipe peut-elle dire « quelques jours » sans hésiter ? Sinon, un mot est flou.

## Visuel suggéré
Six cases (une par lettre) sur la story des OF : v3 avec E, S, T en rouge reliés au mot « mal
renseigné », puis v4 avec ces cases passées au vert, T en orange.

## Banque d'exemples

### Le N d'INVEST : le SMS de l'abonné, solution ou contrainte ?
- **Explication** : N (Negotiable) : la story fixe le besoin (qui, quoi, pourquoi) ; le
  « comment » se négocie entre PO, métier et équipe jusqu'au sprint. Consensus : N vient de
  Bill Wake (2003) ; « la story est une promesse de conversation » (3C de Ron Jeffries : carte,
  conversation, confirmation).
- **Situation** : côté abonné.
  - Fautif : « En tant qu'abonné, je veux recevoir un SMS à 8 h avec le nombre de vélos de ma
    station… »
  - Négociable : « En tant qu'abonné, je veux savoir avant de partir s'il reste un vélo à ma
    station, afin de ne pas me déplacer pour rien. » (SMS, notification, widget : l'équipe
    propose.)
- **Question** : le métier ajoute qu'un tiers des abonnés n'a pas l'appli, seulement un
  téléphone basique. Qu'est-ce qui devient non négociable, et où l'écris-tu ?
- **Réponse attendue** : le SMS reste une solution, donc négociable ; ce qui ne se négocie pas,
  c'est la contrainte « sans l'appli, depuis un téléphone basique ». Elle va dans un critère
  d'acceptation formulé sans nommer de canal (« Given Julie n'a qu'un téléphone basique… »).
  Négociable ne veut pas dire « tout est ouvert ».
- **Suite possible** : faire écrire ce critère en Given/When/Then (voir concept 8).
