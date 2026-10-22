# Observations d'un premier apprenant, anonymisées

Copiées le 2026-10-22 de `learner/` (observations, profil, une production) avant sa remise à
zéro (T-011). À lire comme des erreurs typiques possibles du public cible, jamais comme des
faits sur un apprenant. Étiquettes `[cN]` : numérotation de `course/plan.md` (T-018a) ; les
faits datent de l'ancien contenu du cours.

## Profil de départ

- Développeur data, à l'aise en technique, débutant en gestion de produit, PO d'aucun projet.
- N'avait jamais écrit ni lu de user story ; la voyait comme « la description du parcours de
  l'utilisateur lorsqu'il consommera le produit ».
- Du mal à se projeter en vision purement métier : un support tiré de son projet réel
  l'obligeait à inventer le métier en plus d'apprendre le concept (d'où le fil rouge).

## Erreurs typiques

- [c4] a classé un epic en story ; réussi ensuite 2/2.
- [c5] « afin de » faible ou circulaire -> les « pourquoi ? » successifs ont marché.
- [c7] coche E et S d'INVEST « OK » sans pouvoir le vérifier -> faire creuser le mot flou dont
  dépendent plusieurs lettres.
- [c8] le lien « contrainte -> critère d'acceptation » n'est pas un réflexe (ne savait pas où
  écrire la contrainte du téléphone basique) -> demander où l'écrire.
- [c8] premier Given/When/Then autonome sans When et avec un Then vague (« she can know »)
  -> faire dire ce que le testeur vérifie.
- [c13] suppose qu'une demande sortie du hors périmètre se traite aussitôt (« c'est le bon
  moment ») : la priorisation par le PO n'est pas un réflexe -> faire trancher entre deux
  demandes.
- [c15] réflexe du backlog technique : une story « définir X » dont une autre dépend (a vu seul
  qu'elle n'apporte pas de valeur) -> au refinement, montrer qu'on précise X avec le métier et
  qu'on livre d'abord les règles connues.
- [général] réponses justes mais sans la suite (dépendances : « ordonner le backlog » absent ;
  DoD : 3/3 sans justifier) -> demander « et alors, on fait quoi ? » ou « pourquoi ? ».
- [général] réponses parfois elliptiques, lues une fois à tort comme une erreur -> faire
  préciser avant de corriger.

## Ce qui a marché

- [général] pense à voix haute en cas de blocage (« je suis dans le dur ») -> partir de ce
  raisonnement et montrer qu'il contient la réponse.
- [général] veut l'origine d'un terme avant de l'appliquer ; un schéma qui contredit le nom du
  concept bloque -> donner l'origine des mots, légender les schémas avec soin.
- [général] vérifie les termes du prof (a relevé « DoD au niveau de l'incrément ») -> soigner
  les formulations.
- [général] les exemples méta (cadrer un sujet annexe comme un produit) parlent.
- [c0] sprint et livraison distingués grâce à l'incrément.
- [c4] le test « je sais ce que voit l'utilisateur » ne parle pas -> compter les « je veux »
  d'un besoin (deux « je veux » : signal de feature).

## Réussi du premier coup

- [c1] séparer PO et équipe (3/3 sur « qui tranche »).
- [c5] écrire le besoin, pas la solution (a refusé de nommer carte ou liste).
- [c7] N : le SMS reste une solution négociable face à une contrainte d'usage.
- [c8] Given/When/Then, une seule variable par exemple ; règle métier ou critère : 3/3.
- [c9] découpage vertical et patrons de découpage.
- [c10] hors périmètre et dépendances.
- [c11] DoD ou critère : 3/3.

## Production : critère d'acceptation, abonné sans appli (retour sur INVEST N)

Story (donnée par le prof) : « En tant qu'abonné, je veux savoir avant de partir s'il reste un
vélo à ma station, afin de ne pas me déplacer pour rien. »

**v1 (apprenant)** : « Given that Julie does not have a smartphone when she leaves her home
then she can know the number of bikes in the station ».
Critique : aucun canal nommé, contrainte dans le Given (bien). Le When manque (et « quand elle
quitte son domicile » arrive trop tard) ; « can know » se teste mal ; « pas de smartphone » trop
large (préciser téléphone basique).

**v2 (corrigé du prof)** : Given Julie n'a qu'un téléphone basique, sans l'appli, When elle
demande la disponibilité de sa station avant de partir, Then elle obtient le nombre de vélos
disponibles, à jour de moins de 15 minutes.
