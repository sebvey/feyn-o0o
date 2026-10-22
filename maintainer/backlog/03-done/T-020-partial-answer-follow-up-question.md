# T-020 : Traiter la réponse partielle et la question de relance

- **Créé le** : 2026-10-22
- **Constat** : test par sous-agent de T-019. L'apprenant répond à moitié à la question de 10b
  (« pas prête », sans proposition au planning) et pose une question annexe. Le prof répond à la
  question annexe, puis pose une question de relance sur la moitié manquante. Trois règles de
  `CLAUDE.md` ne prévoient pas ce cas :
  - « Passe au concept suivant seulement si la réponse montre la compréhension ; sinon
    réexplique sous un autre angle » : rien entre réussi et raté ;
  - tableau de la mémoire : « Tu corriges une réponse -> Plus de question en attente », alors
    que la relance posée dans le même message est une question en attente ;
  - démarrage, étape 3 (ADR-008) : « reprend le sous-concept en cours depuis le début
    (explication, exemple, question), à partir de l'énoncé que « Prochaine étape » désigne » :
    le prof repose la question de la banque, dont la moitié est acquise. L'agent a dû ajouter une
    consigne ad hoc dans « Prochaine étape ».

- **À faire** : proposition validée par le mainteneur (deux relances, rappel de l'acquis à la
  reprise).

  1. `CLAUDE.md`, « La boucle du cours », puce « Attends la réponse » :

     > - **Attends la réponse.** Passe au concept suivant seulement si la réponse montre la
     >   compréhension. Réponse partielle : dis ce qui est juste, puis relance sur ce qui manque
     >   par une question ciblée, sans réexpliquer tout le sous-concept. Réponse fausse, ou deux
     >   relances sans succès : réexplique sous un autre angle, plus court, avec un autre exemple.

     Erreur évitée : le prof réexplique tout un sous-concept à moitié compris, ou valide une
     réponse incomplète.

  2. `CLAUDE.md`, tableau de la mémoire : la ligne « Tu corriges une réponse » devient

     > | Tu corriges une réponse sans relancer | Plus de question en attente, suite prévue | « Prochaine étape » |

     et la ligne « Tu poses une question ou un exercice » couvre la relance, avec un ajout :

     > … la question mot pour mot ; pour une relance, ce que l'apprenant a déjà juste, en une
     > ligne ; …

     Erreur évitée : « Prochaine étape » dit « plus de question en attente » alors qu'une relance
     attend sa réponse.

  3. `CLAUDE.md`, démarrage, étape 3, fin de la phrase :

     > … et le message suivant reprend le sous-concept en cours depuis le début (explication,
     > exemple), puis pose la question en attente : celle de la banque, ou la relance, précédée de
     > ce que l'apprenant avait déjà juste.

     Erreur évitée : la reprise repose la question de la banque, dont une partie est acquise.

  Pas de doublon : aucune autre règle ne traite la réponse partielle. Changement explicite d'une
  règle existante : l'étape 3 (ADR-008) ; ADR-008 passe en « complété par » le nouvel ADR, si la
  règle ADR le demande.

  **Points à trancher** :
  - le seuil « deux relances sans succès » avant de réexpliquer : à garder, à changer, ou à
    laisser au jugement du prof ;
  - à la reprise, rappeler ce qui était juste avant la relance (proposé) ou poser la relance
    seule.

- **Fini quand** : un sous-agent neuf, sur une copie du dossier, reçoit une réponse partielle à
  la question de 10b : il dit ce qui est juste, relance sur la moitié manquante, et « Prochaine
  étape » porte la relance mot pour mot avec l'acquis partiel. Après une coupure, un second agent
  neuf reprend 10b (explication, exemple) puis pose la relance, pas la question de la banque.
- **Fait le** : 2026-10-22, les trois textes appliqués dans `CLAUDE.md` (boucle, tableau de la
  mémoire, démarrage étape 3). Test par deux sous-agents sur une copie : réponse partielle à 10b
  corrigée sur ce qui est juste puis relancée, « Prochaine étape » portant la relance mot pour
  mot avec l'acquis ; après coupure, reprise de l'explication et de l'exemple, rappel de
  l'acquis, relance posée (pas la question de la banque), 10b validé. Précisions ajoutées
  après les tests : rang de la relance noté et conservé à la reprise ; relance en message court ;
  une nuance manquante ne rend pas la réponse partielle, le prof l'apporte. Hors ticket, sans
  ticket : pas de ligne de journal si la session coupe après l'accueil (rien n'est perdu).
