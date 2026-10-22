# Travaux de sve

Chaque production garde ses versions successives et la critique reçue : l'évolution montre ce
qui est acquis.

## Critère d'acceptation : abonné sans appli (vélos, session 6, retour sur INVEST N)

Story (donnée par le prof) : « En tant qu'abonné, je veux savoir avant de partir s'il reste un
vélo à ma station, afin de ne pas me déplacer pour rien. »

**v1 (sve)** : « Given that Julie does not have a smartphone when she leaves her home then she
can know the number of bikes in the station ».
Critique : aucun canal nommé, contrainte dans le Given (bien). Le When manque (et « quand elle
quitte son domicile » arrive trop tard) ; « can know » se teste mal ; « pas de smartphone » trop
large (préciser téléphone basique).

**v2 (corrigé du prof)** : Given Julie n'a qu'un téléphone basique, sans l'appli, When elle
demande la disponibilité de sa station avant de partir, Then elle obtient le nombre de vélos
disponibles, à jour de moins de 15 minutes.
