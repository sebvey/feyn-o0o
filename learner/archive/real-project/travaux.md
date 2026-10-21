# Travaux de sve

Chaque production garde ses versions successives et la critique reçue : l'évolution montre ce
qui est acquis.

## Exercice : réécrire une story technique (concept 4)

Story fautive donnée : « En tant que data engineer, je veux une table gold des marges
partitionnée par usine afin d'avoir de bonnes perfs. »

Diagnostic de sve (juste sur les trois points) : data engineer n'est pas un utilisateur ;
partitionner est une implémentation ; « bonnes perfs » n'est pas une valeur utilisateur.

Réécriture de sve :
> En tant que contrôleur de gestion, je veux une mise à jour du graphique en moins de 2 secondes
> lorsque je change le filtre, afin de supprimer la crispation de temps d'attente lors de
> l'utilisation du dashboard des marges.

Critique : bon acteur et besoin observable. « Afin de » orienté confort, mieux : « afin de
comparer plusieurs usines en direct pendant la revue mensuelle ». « Moins de 2 secondes » est un
critère d'acceptation. Si toutes les vues sont concernées, c'est une exigence transverse (DoD).

## Story « OF mal renseignés » (concepts 4 et 5)

Hypothèse à valider par le PO : l'acteur est le planificateur.

**v1**
> En tant que planificateur, le dashboard « qualité OF » me fournit sous forme de liste les OF
> mal renseignés sur les 7 derniers jours afin d'identifier en temps réel les problèmes de
> données.

Critique : pas de « je veux », solution imposée (dashboard, liste) ; « afin de » circulaire ;
contradiction « temps réel » / « 7 derniers jours ».

**v2**
> En tant que planificateur, je veux consulter quotidiennement les OF mal renseignés sur mon
> secteur afin de corriger les problèmes rapidement et assurer des chiffres de marge fiables.

Critique : validée. « Rapidement » est flou (critère à préciser) ; « sur mon secteur » est une
règle métier cachée. La valeur (marges fiables) profite au contrôleur, pas au planificateur.

**v3** (après le concept 5, intérêt personnel trouvé par sve)
> En tant que planificateur, je veux consulter chaque jour les OF mal renseignés de mon secteur,
> afin de les corriger au fil de l'eau plutôt qu'en bloc à la clôture.

Statut : bonne base. À reprendre au concept 6 (INVEST) puis au concept 7 (critères et règles).

**Évaluation INVEST de la v3 par sve (concept 6)** : I, N, V, E, S « OK », T « non défini, ce
sont les critères d'acceptation ». Critique : T juste ; E et S ne peuvent pas être jugés tant que
« OF mal renseigné » n'est pas défini (une règle ou vingt, sur un ou deux systèmes, change tout).

**v4** (concept 6, INVEST)
> En tant que planificateur, je veux consulter chaque jour les OF mal renseignés de mon secteur,
> afin de les corriger au fil de l'eau plutôt qu'en bloc à la clôture.
>
> OF mal renseigné = OF sans date de lancement ; OF sans gamme.
> De mon secteur = rattaché à mon usine.

Critique : E et S passent (deux règles simples, périmètre clair). T presque : « chaque jour » reste
flou (données à jour de la veille ? visibles avant quelle heure ?) ; on ne sait pas ce que le
planificateur voit par OF (numéro, champ manquant) ni si un OF corrigé disparaît de la liste.
Les deux définitions sont déjà des règles métier : à mettre en forme au concept 7.

**Critères d'acceptation de la v4 (concept 7)**
- Donné en exemple : « Étant donné un OF de l'usine de Lyon sans gamme, créé hier / Quand le
  planificateur de Lyon consulte la liste à 8h00 / Alors l'OF apparaît, avec l'indication
  « gamme absente » ».
- Écrit par sve : « Étant donné un OF de l'usine de Paris sans gamme, créé hier / Quand le
  planificateur de Lyon consulte la liste à 8h00 / Alors l'OF n'apparaît pas ».
  Critique : juste ; bon réflexe de garder l'OF mal renseigné pour ne tester que la règle usine.

## Feature « Expliquer pourquoi la marge d'une usine a baissé » (concepts 3 et 8)

Deux « je veux » sortis par sve : décomposition de la marge sur P ; comparaison P-1 / P.

**Story « décomposer la marge sur P », brouillon v0** (reconstitué par l'agent à partir des mots de
sve, pas encore écrit par lui ; « afin de » proposé par l'agent) :
> En tant que contrôleur de gestion, je veux voir la marge d'une usine décomposée sur une période
> P (coûts et leurs composantes, valorisation des articles), afin de repérer quel poste la dégrade.

**Découpage vertical proposé par sve (concept 8)** : une story « coûts », une story « valorisation
des articles ». Critique : vertical si chacune va de l'ERP au dashboard ; découpage par
composante, valable. Points à vérifier : la story « coûts » seule est-elle utilisable (le
contrôleur voit quel poste de coût monte, mais pas encore la marge) ? Elle reste peut-être trop
grosse (matière, main-d'œuvre, énergie : trois sources) -> redécoupage par poste possible.
Réponse de sve : S ok (une seule source, l'ERP) ; la story « coûts » seule ne sert pas au
contrôleur. Conclusion : tranche verticale par les couches, mais pas par la valeur ; découpage à
revoir pour que la première story donne déjà une marge.
