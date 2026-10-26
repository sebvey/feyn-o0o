# T-076b : Donner les liens du site en liens Markdown, sans adresse nue

- **Créé le** : 2026-10-26
- **Parent** : T-076
- **Constat** : au test du cours (2026-10-26), le prof colle l'adresse nue du site ; le mainteneur
  veut voir à la place une description courte de la page visée. `CLAUDE.md` donne l'adresse en tête
  de « La boucle du cours » et les pages par leur chemin (`domaines/`, `domaines/N/`,
  `concepts/NN/`), sans dire comment afficher le lien. Seule l'app desktop compte : le rendu en
  CLI ne se vérifie pas.
- **À faire** : dans `CLAUDE.md`, en tête de « La boucle du cours », après l'adresse du site,
  ajouter : « Donne chaque lien du site en lien Markdown dont le texte dit ce qu'on y trouve
  (« [la carte des domaines](<adresse>domaines/) », « [la page du concept 3](<adresse>concepts/03/) »),
  jamais l'adresse nue. »
- **Fini quand** : un sous-agent neuf sur Sonnet donne en liens Markdown à texte descriptif, sans
  adresse nue, le lien de l'accueil (`learner/` vide) et ceux du rappel de reprise
  (`learner/` fictif).
