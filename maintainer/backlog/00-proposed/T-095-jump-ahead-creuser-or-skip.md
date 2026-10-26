# T-095 : Trancher « aller directement à un domaine » : creuser ou sauter

- **Créé le** : 2026-10-26
- **Constat** : test de T-094 (2026-10-26, sous-agent Sonnet). L'apprenant, au concept 0, demande
  « mon besoin urgent c'est le découpage et le cadrage des stories, on peut y aller
  directement ? ». Le prof y lit un creusage du domaine 3 et ne marque rien `sauté` ; au test du
  mainteneur le même jour, une demande semblable a été lue comme un saut (concepts 0 à 8
  `sauté`). `CLAUDE.md` (« Creuser ou sauter ») permet les deux lectures. Ensuite, la règle sur
  les prérequis ne vise qu'un prérequis `sauté` : en creusage, un concept dont le prérequis est
  seulement `à faire` (9 après 8) s'enseigne sans le dire ; le prof l'a dit par prudence.
- **À faire** : dans `CLAUDE.md`, « Creuser ou sauter un domaine ou un concept » : dire quelle
  lecture prendre quand l'apprenant demande d'aller à un domaine ou un concept plus loin sans
  dire « sauter » (ou de lui poser la question), et étendre l'avertissement de prérequis à un
  prérequis pas encore validé, quel que soit son statut.
- **Fini quand** : un sous-agent neuf sur Sonnet, sur la même demande, suit la lecture fixée et
  signale le prérequis pas encore vu avant le concept 9.
