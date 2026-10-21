---
concept: 6
type: question
date: 2026-10-21
session: 6
domaine: velos
---

# Retour sur le N d'INVEST : le SMS de l'abonné, solution ou contrainte ?

## Énoncé
Retour demandé par sve après le mini-récap 6 à 9a. N (Negotiable) : la story fixe le besoin (qui,
quoi, pourquoi) ; le « comment » et les détails se négocient entre PO, métier et équipe jusqu'au
sprint. Consensus : N vient de Bill Wake (2003) ; « la story est une promesse de conversation »
(3C de Ron Jeffries : carte, conversation, confirmation).

Exemple, côté abonné :
- Fautif : « En tant qu'abonné, je veux recevoir un SMS à 8 h avec le nombre de vélos de ma
  station… »
- Négociable : « En tant qu'abonné, je veux savoir avant de partir s'il reste un vélo à ma
  station, afin de ne pas me déplacer pour rien. » (SMS, notification, widget : l'équipe propose.)

Question : le métier ajoute un fait : un tiers des abonnés n'a pas l'appli, seulement un
téléphone basique qui reçoit des SMS. Le SMS devient-il quelque chose à négocier, ou pas ? Et où
l'écris-tu ?

Réponse attendue : ce n'est plus une préférence de solution mais une contrainte des
utilisateurs : non négociable. Elle va dans un critère d'acceptation (ou une règle) : « Given un
abonné sans l'appli, When…, Then il reçoit l'information par SMS ». La phrase de la story reste
centrée sur le besoin ; l'heure, le format, le canal pour les abonnés avec appli restent
négociables. Négociable ne veut pas dire « tout est ouvert ».

## Réponse de l'apprenant
« Ça reste négociable, avant de partir ça peut être la consultation sur une page web. Je sais pas
où renseigner le fait... »

## Verdict
Partiel, et meilleur que la réponse attendue sur le fond. Juste : le SMS reste une solution,
donc négociable (la réponse attendue avait tort de figer le SMS). Ce qui ne se négocie pas,
c'est la contrainte « sans l'appli, depuis un téléphone basique » (une page web n'y passe pas
forcément, un SMS ou un serveur vocal oui). Le « où » manquait : dans un critère d'acceptation,
formulé sur la contrainte, pas sur la solution. Relance : écrire ce critère en Given/When/Then
sans nommer de canal (question de suivi, voir « Prochaine étape » de `learner/parcours.md`).

Réponse à la question de suivi (critère sans canal) : « Given that Julie does not have a
smartphone when she leaves her home then she can know the number of bikes in the station ».
Verdict : réussi. Juste : aucun canal nommé, une personne concrète, la contrainte en Given.
Retouches : le When manquait (« quand elle quitte son domicile » arrive trop tard : l'info sert
avant de partir ; le When est l'action qui déclenche, ici demander la disponibilité) ;
« peut savoir » est peu testable, mieux : « elle obtient le nombre de vélos disponibles à sa
station, à jour de moins de 15 minutes » ; préciser « téléphone basique » plutôt que « pas de
smartphone » (sans téléphone du tout, aucun canal ne marche). Retour sur N validé.

## Pour améliorer le cours
La question était mal calibrée : elle suggérait que le fait rendait le SMS obligatoire. Mieux :
« qu'est-ce qui devient non négociable ? » Le lien N / critères d'acceptation (concept 7) n'est
pas un réflexe.
