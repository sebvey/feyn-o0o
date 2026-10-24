# T-053 : Trancher les désaccords entre fiches et les sources perdues, puis réaligner le site

- **Créé le** : 2026-10-24
- **Parent** : T-050
- **Constat** : T-050c (réalignement du site sur le cours 1.0.0) a relevé des écarts qui sont des défauts du cours, listés dans `../parcours-po-website/CHANGELOG.md`, section « Écarts connus, à traiter par le cours » :
  - désaccords entre fiche de concept et fiche de sources : « retirer n'est pas définitif » (concept 3 : Cohn et Rubin dans la fiche de concept, choix du cours dans la fiche de sources) ; « un doublon » ou « relevé en double » (12) ; rattachement à S2 des cinq catégories (14) ; « au moins hebdomadaires » (17) ;
  - sources que les fiches ont perdues et que le site porte encore : références S3 et S4 du concept 1, entrées « non vérifié » des concepts 4 et 7, affirmation CRISP-DM (17), types de liens Jira Data Center et affirmation « ticket » (A1), citation « If you only quantify one thing » (13).
- **À faire** :
  1. cours, en autonomie (contenu) : pour chaque désaccord, lire la fiche de concept, la fiche de sources et les sources citées, trancher, corriger ce qui a tort (les deux fiches si besoin) ; pour chaque source perdue, retrouver si la fiche l'a retirée exprès (T-050a, T-051 : le site la retire aussi) ou par oubli (elle revient dans la fiche de sources, avec sa section) ; ne pas trancher un fait métier réel ;
  2. inscrire chaque changement sous « Non publié » de `course/CHANGELOG.md` (PATCH ou MINOR) ; ne pas publier de version ;
  3. relecture indépendante (sous-agent neuf), PR, merge ;
  4. site (`../parcours-po-website`), après le merge : lancer `check-alignment`, réaligner les pages qu'il signale, mettre à jour leurs empreintes, retirer de « Écarts connus » du `CHANGELOG.md` du site ce qui est résolu, `npm run build` et `astro check`, fusion dans le `main` local du site (aucun push, aucun remote).
  Hors de ce ticket : les encadrés « fil rouge », les exemples du site sans équivalent dans les fiches, les libellés du schéma 4 et l'encadré 5b2 (T-054, décisions du mainteneur en attente).
- **Fini quand** : chaque désaccord est résolu et la fiche de concept et la fiche de sources disent la même chose ; chaque source perdue est reprise ou retirée du site avec sa raison dans la PR ; `check-alignment` ne signale plus aucune page après le réalignement ; le build du site passe.
