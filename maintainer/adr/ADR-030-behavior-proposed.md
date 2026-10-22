# ADR-030 : Un changement du comportement du prof se propose avant d'être appliqué

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-042

## Contexte
ADR-029 a rendu l'agent de maintenance autonome sur tout le cadre, comportement du prof compris,
la PR servant de seul point de contrôle. Le mainteneur, qui suit le cours, n'est pas expert du
contenu mais juge le comportement du prof : sur ce point, son avis a changé la solution avant
qu'elle soit appliquée (T-035, T-030, T-040).

## Décision
Skill `maintenance` : `course/` (contenu) reste en autonomie. Pour `CLAUDE.md` et tout
`.claude/` (comportement des agents, prof et maintenance), l'agent présente le ticket, son enjeu
et sa recommandation avec le texte exact, attend la décision du mainteneur, puis applique et va
jusqu'à la PR ; une solution fixée par le mainteneur dispense de l'arrêt si son texte l'est. Le tri des
constats reste autonome, fait par l'agent seul contre les règles, sans sous-agent. Complète
ADR-029, dont il reprend l'option écartée « autonomie limitée au contenu ».

## Options écartées
- Tout en autonomie, le comportement jugé à la lecture de la PR (ADR-029) : l'avis du mainteneur
  arrive après coup, quand la solution est écrite.
- Faire vérifier chaque constat par un sous-agent neuf (T-041) : lourd pour un tri qui se fait
  en comparant aux règles.

## Conséquences
Un ticket de comportement s'arrête une fois, à la recommandation ; un ticket de contenu va
jusqu'à la PR sans arrêt. Un ticket qui touche les deux s'arrête pour sa partie comportement.
