# ADR-049 : Une page par domaine prend place dans l'ordre de lecture, et l'accueil fait commencer par le domaine 1

- **Date** : 2026-10-25
- **Statut** : accepté
- **Ticket** : T-071b

## Contexte
Discussion du 2026-10-25 (T-071) : « Commencer : concept 0 » attaquait par un concept, et
précédent / suivant allaient de concept en concept, sans présenter un domaine ni marquer le
passage au suivant. ADR-041 avait réduit l'accueil à deux portes, dont « commencer par le
concept 0 », et donné à une seule page Domaines la carte et le détail des concepts. Le cours a
désormais une fiche par domaine (ADR-048).

## Décision
- Une page par domaine, `/domaines/N/`, projection de `course/domains/N-slug.md` : en-tête
  (numéro, titre, « à la fin, vous savez »), présentation, puis concepts dépliables sur leurs
  sous-concepts ; empreinte de la fiche contrôlée par `check-alignment`.
- L'ordre de lecture (`src/lib/lecture.ts`) insère chaque page de domaine avant ses concepts ;
  les cartes et flèches précédent / suivant le suivent. Le concept 17 n'a pas de suivant ; les
  annexes restent hors de l'ordre.
- `/domaines/` devient la carte : par domaine, « on sait faire », concepts et lien vers sa page ;
  seules les annexes y gardent leurs dépliables. Les ancres `#domaine-N` y restent valides.
- L'accueil fait commencer par le domaine 1.
Écrit dans `maintainer/site/structure.md`, le README et `docs/data-map.md` du site.

## Options écartées
- Enrichir la seule page Domaines d'une présentation par domaine : précédent / suivant
  n'auraient toujours pas marqué le passage d'un domaine à l'autre.
- Sauter la page des domaines 4 et 7, qui n'ont qu'un concept : la suite deviendrait irrégulière.
- Faire mener les ancres `#domaine-N` de `/domaines/` vers `/domaines/N/` (prévu au ticket) : le
  sommaire collant de la carte s'appuie sur ces ancres, et une ancienne adresse y trouve la
  carte du domaine, à un clic de sa page.
- Garder la liste des sous-concepts sur la carte en plus des pages de domaine : une information
  sur deux pages.

## Conséquences
Un nouveau domaine dans le cours demande une fiche, puis une page projetée et estampillée.
Une page de domaine de plus ou de moins change les voisins de deux pages de concept.
