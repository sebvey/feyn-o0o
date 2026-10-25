# ADR-045 : Le site se vérifie par `npm run verify`, le navigateur ne sert plus qu'aux interactions

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-050j

## Contexte
La vérification d'un ticket du site était manuelle (`procedure.md`, « Tester ») : build, puis
chaque page touchée dans le navigateur intégré, au bureau et à 375 px, en clair et en sombre. Elle
dépendait de l'attention de l'agent et des pièges du navigateur intégré ; une page non touchée
n'était jamais revue. Sa première passe sur tout le site a trouvé une adresse longue qui
débordait à 375 px dans l'onglet Sources du concept 6, que les tests manuels n'avaient pas vue.

## Décision
`npm run verify` (dépôt du site, `scripts/verify.mjs`, décrit dans « Vérifier » de son README)
passe avant toute PR du site : build avec le préfixe d'adresse en ligne, liens et ancres, captures
de toutes les pages en quatre formats, échec sur un défilement horizontal ou une erreur
JavaScript, style du texte rendu, alignement en avertissement. Le navigateur intégré ne sert plus
qu'aux interactions touchées par le ticket. Écrit dans `maintainer/site/procedure.md`
(« Tester ») et dans le `CLAUDE.md` du site.

## Options écartées
- La vérification manuelle de chaque page touchée, au navigateur (l'ancienne règle) : lente,
  limitée aux pages touchées, et sujette aux pièges du navigateur intégré.

## Conséquences
`verify` demande Playwright et son Chromium (`npx playwright install chromium`). Il ne voit ni
les interactions, ni Safari, ni Firefox, ni les lecteurs d'écran : ces points restent « non
vérifiés » dans les PR.
