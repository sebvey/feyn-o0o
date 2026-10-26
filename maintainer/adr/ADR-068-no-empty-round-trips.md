# ADR-068 : Le cours enchaîne ce qui vient au lieu d'attendre une relance sans contenu

- **Date** : 2026-10-26
- **Statut** : complété par ADR-070
- **Ticket** : T-090

## Contexte
Après T-089 (ADR-067), le mainteneur veut d'autres gains de fluidité, quitte à sacrifier quelque
chose. Le cours faisait taper à l'apprenant des messages sans contenu : « ok » après chaque
sous-concept validé, puisque le message s'arrêtait sur « La suite : … » (ADR-063, supprimé ici :
il avait écarté l'enchaînement pour laisser l'apprenant choisir entre continuer, creuser ou
s'arrêter) ; « on continue » au menu de reprise, affiché même quand l'apprenant venait de dire
« on continue » (ADR-005, ADR-040) ; deux réponses à la question de niveau du concept 0, qui ne
valide rien (ADR-061) ; une réponse au « veux-tu revenir sur un point ? » du mini-récap. Le
démarrage lisait aussi cinq fichiers avant le premier concept (ADR-034).

## Décision
Dans `CLAUDE.md` :
- « Fin d'un concept ou d'un sous-concept validé » : après la correction, la ligne « La suite :
  … », puis la suite au même message (mini-récap, présentation de domaine, puis au plus un
  sous-concept, qui finit par sa question) tant que le tout tient en une quinzaine de lignes ;
  sinon le message s'arrête sur la ligne de la suite. ADR-063 est supprimé.
- Démarrage, étape 3 : sur « on continue » ou « la suite », le rappel enchaîne sur ce qui vient ;
  le menu des domaines ne s'affiche que sur une autre ouverture (« on reprend », un salut).
- La présentation d'un domaine n'est plus un message à lui : elle peut suivre une correction ou
  le rappel, sans concept enseigné dans le même message. Le nom du domaine, en tête, porte le
  lien vers sa page ; la ligne de lien à part disparaît.
- Le mini-récap ne pose plus de question.
- Le hook donne le public cible, `learner/apprenant.md` et `learner/observations.md` ;
  `course/plan.md` ne se lit qu'au besoin (concept sans fichier, prérequis sauté).

Dans `course/concepts/00-scrum.md` et `course/plan.md` : la question de niveau est retirée ;
l'annonce du parti pris ouvre 0a1, qui rappelle ce que l'apprenant a dit de Scrum à l'accueil.

Complète ADR-005, ADR-040 (menu de reprise), ADR-061 (question de niveau), ADR-034 (lectures),
ADR-052 (message à part), ADR-053 et ADR-057 (lien de la page du domaine).

## Options écartées
- Message de validation qui s'arrête sur « La suite : … » (ADR-063) : un « ok » par
  sous-concept.
- Menu de reprise affiché quelle que soit l'ouverture (ADR-005, ADR-040) : un aller-retour de
  plus à chaque session.
- Garder la question de niveau (ADR-061, où le mainteneur la gardait pour situer le niveau) : la
  troisième question d'accueil situe déjà l'apprenant.
- Faire lire `learner/apprenant.md` et `learner/observations.md` au démarrage (ADR-034) : deux
  lectures que le hook évite ; `observations.md` se lit encore avant d'y écrire.

## Conséquences
L'apprenant ne choisit plus entre continuer, creuser ou s'arrêter après chaque sous-concept : il
le dit en répondant. Les messages s'approchent plus souvent des quinze lignes. Le contexte de
démarrage grossit avec `observations.md`. Les erreurs fréquentes de la question de niveau ne se
notent plus en vigilance avant 0a : elles ressortent au sous-concept qui les traite.
