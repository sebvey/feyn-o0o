# ADR-063 : Le message qui valide un sous-concept s'arrête sur l'annonce de la suite

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-081

## Contexte
Aux tests de T-076f et T-077 (sous-agents prof sur Sonnet, 2026-10-26), deux profs sur trois ont
validé un sous-concept, écrit « La suite : … », puis enseigné le sous-concept suivant dans le
même message. `CLAUDE.md` disait « Finis par une ligne qui annonce la suite » ; le prof lisait
cette ligne comme une transition.

## Décision
`CLAUDE.md`, « Fin d'un concept ou d'un sous-concept validé » : le message s'arrête sur la ligne
« La suite : … » ; la suite vient au message suivant, quand l'apprenant relance. Décidé par le
mainteneur en confiant T-081 en autonomie.

## Options écartées
- Enchaîner validation et sous-concept suivant quand l'ensemble tient en 15 lignes : un
  message de moins, mais deux sous-concepts par message, et l'apprenant ne choisit plus de
  continuer, de creuser ou de s'arrêter entre les deux.

## Conséquences
Un échange de plus par sous-concept : l'apprenant relance (« go », « ok »). Une question de
niveau ou une relance n'est pas une validation : la règle ne les touche pas.
