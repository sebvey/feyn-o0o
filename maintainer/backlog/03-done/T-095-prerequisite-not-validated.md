# T-095 : Signaler un prérequis pas encore validé, pas seulement sauté

- **Créé le** : 2026-10-26
- **Constat** : test de T-094 (2026-10-26, sous-agent Sonnet). L'apprenant, au concept 0, demande
  « mon besoin urgent c'est le découpage et le cadrage des stories, on peut y aller
  directement ? ». Le prof y lit un creusage du domaine 3 : aucun concept n'est `sauté`. Or
  `CLAUDE.md` (« Creuser ou sauter un domaine ou un concept ») ne fait signaler qu'un prérequis
  `sauté`, et proposer d'enseigner qu'une notion d'un concept `sauté` : en creusage, le concept 9
  s'enseignerait sans dire que le concept 8 n'a pas été vu. Le prof l'a dit par prudence, sans que
  la règle l'y oblige. Tri du 2026-10-26 : l'autre moitié du constat (lire la demande comme un
  creusage ou comme un saut) est rejetée, les deux lectures mènent au domaine 3 et restent
  valables.
- **À faire** : dans `CLAUDE.md`, « Creuser ou sauter un domaine ou un concept », sortir les deux
  dernières phrases du paragraphe sur le saut, pour qu'elles valent aussi pour un creusage, et
  remplacer « sauté » par « pas encore validé ». Texte proposé, en paragraphe à part après celui
  du saut :
  > Avant un concept dont un prérequis (carte du cours) n'est pas encore validé, dis-le en une
  > ligne. Quand une réponse bute sur une notion d'un concept pas encore validé, dis-le, et
  > propose de l'enseigner avant de reprendre le fil, sans l'imposer.
- **Fini quand** : un sous-agent neuf sur Sonnet, apprenant au concept 0 qui demande de creuser
  le domaine 3 (sans parler de sauter), signale avant le concept 9 que le concept 8 n'a pas été
  vu.
- **Fait le** : 2026-10-26, `CLAUDE.md` : avertissement de prérequis et proposition d'enseigner étendus à un concept pas encore validé, en paragraphe à part (saut et creusage) ; ADR-073 ; pas de test, à la demande du mainteneur (changement mineur).
