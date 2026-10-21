# T-004 : Rendre exact le libellé « On continue » du point de sauvegarde

- **Créé le** : 2026-10-21
- **Constat** : test par sous-agent de T-002. `CLAUDE.md` l. 67 impose « On continue (concept
  suivant) ». Quand la suite est un mini-récap ou un sous-concept (ex. 9b), la parenthèse est
  fausse ; l'agent l'adapte de lui-même (« mini-récap des concepts 6 à 9, puis concept 10 »)
  sans que le cadre le permette.
- **À faire** : dans `CLAUDE.md` l. 67, remplacer « (concept suivant) » par une parenthèse qui
  nomme la suite réelle, par exemple « On continue (<ce qui vient ensuite>) », et dire que seule
  l'option d'arrêt est un texte figé.
- **Fini quand** : le libellé « On continue » nomme toujours ce qui vient ensuite, sans
  contredire un texte imposé.
- **Fait le** : 2026-10-21, `CLAUDE.md` (point de sauvegarde) : « On continue (<la suite :
  sous-concept, mini-récap ou concept suivant, nommé>) » ; l'option d'arrêt est donnée « mot pour
  mot ». Pas de test par sous-agent : les deux tests précédents adaptaient déjà la parenthèse
  ainsi.
