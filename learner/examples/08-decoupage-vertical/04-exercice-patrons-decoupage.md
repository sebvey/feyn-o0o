---
concept: 8
type: exercice
date: 2026-10-21
session: 3
domaine: velos
---

# Patrons de découpage (sous-concept 8b)

## Énoncé
Patrons présentés : périmètre de données, règle, simple avant complexe, qualité de service
différée (SPIDR et Lawrence cités comme choix d'école). Story trop grosse « prévoir les stations à
risque », découpage de l'équipe : a) prévision centre-ville seulement, b) collecte des données
météo, c) prévision à 1 h par la tendance de la dernière heure. Laquelle n'est pas verticale ?
Quel patron pour les deux autres ?

## Réponse de sve
« Collecte des données météo. C'est une source en plus (et qui augmenterait la taille de la
story si on voulait en faire quelque chose). » Puis, relancé : a) périmètre, c) simple avant
complexe (écrit « b » par coquille). A précisé : « j'avais bien vu que c'était uniquement une
source ; je voulais dire que l'US en cours serait alourdie pour prendre en compte la météo. »

## Verdict
Réussi. Version verticale de la météo donnée : « prévision ajustée quand il pleut ».

## Pour améliorer le cours
Erreur du prof : réponse elliptique lue comme une erreur de raisonnement, corrigée à tort. Faire
préciser avant de corriger. Question double (laquelle + quels patrons) : sve n'a répondu qu'à la
première moitié ; une question par message.
