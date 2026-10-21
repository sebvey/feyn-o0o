# Exemples « Sur ton projet » des fiches (projet réel, archivés le 2026-10-21)

Archivés quand sve a abandonné son projet réel comme support (il n'en est pas le PO). Ne servent
plus d'exemples dans le cours ; gardés pour mémoire.


## fiches/01-produit-et-po.md

- Moyen : « une table gold `marge_usine` alimentée chaque nuit depuis l'ERP et le MES ».
- Produit : « les contrôleurs de gestion savent chaque matin quelle usine dégrade sa marge, et
  pourquoi ».
- Qui tranche ? Livrer Lyon avant les autres usines : **PO** (c'est ordonner). Gold rafraîchie
  toutes les heures : **PO pour le besoin**, équipe pour le coût. Partitionner la table des OF :
  **équipe**.


## fiches/02-backlog-produit.md

- En haut, détaillé : « Afficher la marge par usine pour mars ».
- En bas, une ligne à creuser plus tard : « Ouvrir la donnée aux achats ».


## fiches/03-hierarchie.md

- Thème : pilotage de la performance industrielle.
- Epic : analyse de marge de fabrication ; ouvrir la donnée de production aux achats ;
  améliorer la qualité des données de production.
- Feature : comparer la marge entre usines.
- Story : voir la marge du mois par usine ; être alerté quand la marge d'une usine baisse de plus
  de 5 % sur un mois.
- Tâche : créer l'index sur la colonne `date_OF`.
- Feature trouvée par sve (retour du 2026-10-21) : « Expliquer pourquoi la marge d'une usine a
  baissé » -> deux « je veux » : décomposer la marge sur P ; comparer P-1 et P (la comparaison
  des composantes dépend de la décomposition).
- Choix de sve : trois niveaux (un epic par cas d'usage, puis feature, puis story), à revoir avec
  du recul.


## fiches/04-user-story.md

> En tant que contrôleur de gestion, je veux être alerté quand la marge d'une usine baisse de
> plus de 5 % sur un mois, afin de lancer l'analyse avant la clôture.

Si le but est d'agir avant la clôture, une alerte hebdomadaire suffit peut-être : inutile de
faire du temps réel. C'est le « afin de » qui le dit.


## fiches/05-roles-personas.md

- Persona possible : « Claire, contrôleuse à Lyon, clôture le 5 du mois, passe deux jours à
  réconcilier des Excel ».
- Story des OF mal renseignés : le planificateur corrige, mais les marges fiables profitent au
  contrôleur. Son intérêt personnel : aujourd'hui il corrige **en bloc en fin de mois**, après le
  rapport du contrôleur, et c'est lourd.

> En tant que planificateur, je veux consulter chaque jour les OF mal renseignés de mon secteur,
> afin de les corriger au fil de l'eau plutôt qu'en bloc à la clôture.


## fiches/06-invest.md

- v3 : « je veux consulter chaque jour les OF mal renseignés de mon secteur » : E, S et T
  tombent ensemble, car « OF mal renseigné » n'est pas défini.
- v4 : OF mal renseigné = sans date de lancement, ou sans gamme ; secteur = mon usine. E et S
  passent ; T presque (« chaque jour » reste à préciser).
- Dépendance : comparer les composantes de la marge entre P-1 et P suppose la décomposition.


## fiches/07-criteres-regles.md

- Règles métier : un OF sans date de lancement ou sans gamme est mal renseigné ; un
  planificateur ne voit que les OF de son usine.
- Critères (v4) :
  > Étant donné un OF de l'usine de Paris sans gamme, créé hier
  > Quand le planificateur de Lyon consulte la liste à 8h00
  > Alors l'OF n'apparaît pas
- « La liste est disponible au plus tard à 8h00 » : critère (contrainte de cette story). Si
  toutes les vues ont la même exigence, elle passe dans la Definition of Done (concept 10).


## fiches/A1-scrum.md

« Marge par usine pour Lyon », utilisable par un contrôleur : incrément, même au milieu du
sprint. Ingestion ERP finie et moitié des transformations, sans rien d'exposé : **aucun
incrément**. Il fallait découper par usage, pas par couche technique.
