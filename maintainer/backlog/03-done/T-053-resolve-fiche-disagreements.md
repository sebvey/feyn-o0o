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

## Prompt de lancement

À coller dans une session neuve ouverte sur le dépôt du cours. Il autorise l'agent à merger lui-même sa PR ; retirer la phrase « Le mainteneur t'autorise… » pour relire avant le merge.

```text
Tu es l'agent de maintenance du dépôt du cours « Parcours PO ». Charge d'abord `.claude/skills/maintenance/SKILL.md` et suis-le (de CLAUDE.md, ne suis que « Style »). Traite le ticket T-053 de bout en bout, en pure autonomie : `maintainer/backlog/01-todo/T-053-resolve-fiche-disagreements.md`. Lis aussi son parent T-050 (`maintainer/backlog/02-wip/T-050-site-follow-ups.md`), les ADR-037 et ADR-038, et `course/CHANGELOG.md`.

Contexte. Le site public du cours est dans `/Users/sve/code/workspaces/perso/pdx/parcours-po-website` (Astro, dépôt local, aucun remote, rien de publié ; `mise exec -- ` pour git et npm). C'est une projection du cours : le fond vient du cours, la forme est libre. T-050c vient de l'aligner sur le cours 1.0.0 et d'ajouter un script `check-alignment` ; il a listé, dans le `CHANGELOG.md` du site, section « Écarts connus, à traiter par le cours », des défauts du cours : désaccords entre fiches de concept et fiches de sources, et sources que les fiches ont perdues. Le ticket T-053 les reprend.

Étapes.
1. Démarrage (§3 du skill) : `git switch main`, `git pull --ff-only`, passe T-053 de `01-todo/` à `02-wip/` (état « en cours » dans le parent T-050), commite ces seuls fichiers sur `main` (ne touche pas à `learner/`), pousse, puis crée la branche `ticket/T-053-resolve-fiche-disagreements`.
2. Cours : pour chaque désaccord et chaque source perdue du ticket, lis la fiche de concept, la fiche de sources et les sources citées, tranche et corrige. Une source perdue : retrouve si une fiche l'a retirée exprès (T-050a, T-051) ou par oubli. Tu décides seul du contenu ; ne tranche jamais un fait métier réel ; chaque arbitrage va dans la PR avec l'option écartée. Inscris chaque changement sous « Non publié » de `course/CHANGELOG.md` (PATCH ou MINOR, selon ses définitions) ; ne publie aucune version et ne pose aucun tag.
3. Relecture indépendante par un sous-agent neuf (fiche de concept et fiche de sources de chaque point corrigé, cohérents entre eux), puis traite ses retours.
4. Clos le ticket sur la branche (`03-done/`, ligne « Fait le », parent mis à jour), ouvre la PR vers `main` selon le §3 (étape 6), titrée « T-053 : … ». Le mainteneur t'autorise à la merger toi-même (squash) une fois la relecture indépendante passée ; vérifie le merge avec `gh pr view`, mets `main` à jour, supprime la branche locale.
5. Site, après le merge : dans `/Users/sve/code/workspaces/perso/pdx/parcours-po-website`, sur une branche `ticket/T-053-realign`, lance `check-alignment`, réaligne les pages qu'il signale sur les fiches corrigées (un sous-agent par groupe de pages si elles sont nombreuses ; le fond suit le cours), mets à jour leurs empreintes, retire de « Écarts connus » du `CHANGELOG.md` du site ce qui est résolu et note le réalignement au journal du site (version PATCH ou MINOR du site selon ses règles), puis `npm run build` et `astro check`, et fusionne la branche dans le `main` local du site. Ce dépôt n'a pas de remote : ni `gh`, ni push.

Limites. Tu ne modifies pas `learner/`, ni `.sve/`. Hors de ce ticket : les encadrés « fil rouge » du site, les exemples du site sans équivalent dans les fiches, le schéma du concept 4 et l'encadré 5b2 (T-054, décisions du mainteneur en attente) : ne les touche pas. Si un point demande un fait métier, ou si le cours et le site se contredisent sans que tu puisses trancher, note-le dans la PR et passe au suivant.

Fini quand : le « Fini quand » du ticket est vérifié (chaque désaccord résolu, fiches de concept et de sources identiques sur le point, `check-alignment` sans page signalée, build du site passé). Rends un rapport court : arbitrages, sources reprises ou retirées, ce qui n'est pas vérifié, lien de la PR.
```
- **Fait le** : 2026-10-24, quatre désaccords tranchés (concept 3 attribué au cours, concept 12 et 13 « relevé en double », concept 14 cinq catégories sans source, concept 17 « chaque semaine »), une entrée rétablie (sources 04), une référence orpheline retirée (S15), CHANGELOG du cours à jour ; relecture indépendante passée ; site réaligné (20 pages, check-alignment sans écart, build passé, fusionné dans le main local du site)
