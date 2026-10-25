# Site support du cours : structure du contenu

Le plan du site et ses principes. Les décisions qui passent la règle ADR sont dans `adr/` ; la
façon de traiter un ticket du site, dans `procedure.md`.

## Décisions du mainteneur (interview, tour 1 et 2)

- **Vitrine publique.** Local d'abord, mise en ligne rapidement (piste : GitHub Pages).
- **Support indirect.** Le site est « le contenu du cours, sur le web » : un lieu pour réviser et
  comprendre visuellement. **Ni question, ni réponse, ni exercice** : cela reste côté agent.
- **Projection du cours** (T-050) : même fond que `course/`, mêmes exemples du fil rouge,
  banque d'exemples exclue ; la forme est au site. Règles dans le README du site, « Le site et
  le cours ».
- **Dépôt séparé et public** (ce dépôt contient `learner/` et `maintainer/`).
- **Style éditorial sobre.**
- **Fonctions** : recherche plein texte ; sources et vérifications visibles. Pas d'infobulles
  de glossaire ni de progression pour l'instant.
- **Rôle du prof** : renvois seulement (un lien à la fin d'un concept).
- **Schémas** : SVG statiques soignés, un par concept.
- **Fil rouge** : visible, avec une page dédiée (opérateur, équipe, acteurs, sources) ; les
  schémas s'y appuient.
- **Rédaction** : l'agent rédige chaque page, le mainteneur relit la PR (textes propres au site :
  `procedure.md`).
- **Lecteur** : les deux à la fois, le curieux qui découvre (le site doit se suffire) et
  l'apprenant qui révise (relecture rapide).

- **Compléments au cours** : la page Domaines, où chaque concept se déplie sur ses sous-concepts.
  Pas de fiches imprimables, de modèles ni de billets pour l'instant.
- **Langue** : français, structure préparée pour une traduction anglaise plus tard.
- **Techno** : Astro, recherche Pagefind, GitHub Pages.
- **Licence** : CC BY (réutilisation libre, avec attribution).

## Ce que le cours fournit

- 20 fichiers de concept (18 concepts + 2 annexes), sur les mêmes 8 sections : Objectif,
  L'essentiel, Consensus et choix d'école, Sous-concepts, Banque d'exemples, Pièges, Le test
  rapide, Schéma.
- Un fichier de sources par concept ; un plan ; un glossaire (90 termes, + 6 termes à éviter) ;
  un fil rouge.

## Ce qui va sur le site, section par section

| Section du concept | Sur le site ? | Forme |
|---|---|---|
| Objectif | oui | Phrase d'en-tête de la page |
| L'essentiel | oui | Introduction, 3 à 5 lignes |
| Sous-concepts | oui, **récrits** | Les « Explication » de la banque (écrites pour le prof) forment la matière ; une section par sous-concept, avec un titre et une phrase de promesse |
| Banque d'exemples | **non** (questions, réponses attendues, erreurs, « ce qui marche ») | Reste côté agent. Seules les « Explication » servent |
| Pièges | oui | « Les erreurs classiques » : liste courte, reformulée pour un lecteur |
| Le test rapide | oui | Encadré « Le réflexe » en fin de page |
| Schéma | oui, **à dessiner** | Visuel central de chaque page (20 à concevoir) |
| Consensus et choix d'école | oui | Voir ci-dessous : les trois pastilles |
| Sources | oui | Onglet |

Point d'attention : sans la banque, la matière pédagogique d'un concept est l'« Explication » de
ses exemples et ses schémas. Il y a une vraie rédaction à faire, pas un simple transfert.

## Plan du site

| Page | Rôle |
|---|---|
| Accueil | Promesse du cours, public cible, portes : commencer par le domaine 1, voir les domaines, le fil rouge, le glossaire |
| **Domaines** | La carte du cours : les sept domaines de `course/plan.md` dans l'ordre, chacun en carte (ce qu'on sait faire à la fin) qui mène à sa page, puis ses concepts en tuiles dépliables (sous-concepts et promesses, lus au build dans les pages) ; puis les annexes ; sommaire collant |
| **Domaine** (×7, `/domaines/N/`) | « Le problème » et « D'où l'on vient, où l'on va » de `course/domains/N-slug.md`, puis ses concepts en tuiles dépliables, chacun avec une accroche d'une ligne (récrite depuis « Le fil des concepts ») ; précédent et suivant dans l'ordre de lecture. Le cas du fil rouge de la fiche n'est pas repris |
| **Concept** (×18 + 2 annexes) | Page de lecture, voir ci-dessous |
| Glossaire | Recherche, filtre par concept (groupé par domaine), « termes à éviter » ; sommaire collant des lettres |
| Fil rouge | L'opérateur, la collectivité, le produit et l'équipe, les acteurs, les sources de données ; même sommaire collant que Domaines |
| Consensus ou école | Index transversal des positions par nature ; consensus et choix du cours en groupes dépliables, choix d'école à plat par auteur ; sommaire collant |
| Sources | Les sources piliers (citées par au moins 3 concepts), la légende des types de source, puis concept par concept (groupés par domaine, dépliables) les références et le « Non vérifié », avec un filtre ; sommaire collant |
| À propos | Le cours donné par un agent IA, la fabrication du site, les versions, la licence ; lien du pied de page |
| Recherche | Plein texte, accessible de partout (bouton à loupe de l'en-tête) |
| Composants (`/dev/composants/`) | Pour les développeurs : chaque composant rendu avec son code d'usage ; hors menu, hors index |

La page **Fil rouge** (décidée) présente l'opérateur, l'équipe, les acteurs et les sources de
données ; les schémas y renvoient. Elle ne porte pas les « faits fixés » (règles à trancher
par exercice).

Lecteur double : chaque page doit se suffire (le curieux), et la ligne « L'essentiel » plus le
schéma doivent permettre une relecture en deux minutes (l'apprenant).

### Domaines

Les domaines viennent du cours (`course/plan.md`, « Domaines du cours », ADR-039) et leur
présentation de `course/domains/` (ADR-048) : le site ne les fixe pas. Chaque concept appartient
à un seul domaine ; les annexes restent hors domaines.

L'ordre de lecture passe par les domaines : domaine 1, concepts 0 à 2, domaine 2, concepts 3 à
8…, jusqu'au concept 17 ; les annexes restent hors de cet ordre. Les cartes précédent / suivant
des pages de domaine et de concept le suivent (ADR-049). La page Domaines est la carte ; elle et
la page d'un domaine déplient les concepts sur leurs sous-concepts, lus au build dans les pages
de concept.

## La page Concept

En-tête : numéro, domaine du concept, titre, objectif en une phrase, prérequis (liens).
Précédent / suivant, dans l'ordre de lecture (une page de domaine avant le premier concept du
domaine) : deux cartes en bas de page et, au bureau, deux flèches dans la barre d'onglets
collante (T-062, T-071b). Corps sur **trois onglets**, pour que la lecture reste légère :

| Onglet | Contenu |
|---|---|
| **Comprendre** | L'essentiel · le schéma · les sous-concepts en sections · « le réflexe » (test rapide) · les erreurs classiques |
| **Consensus ou école** | Trois colonnes : consensus (par texte) · choix d'école (par auteur) · choix du cours |
| **Sources** | Affirmations vérifiées, références, « Non vérifié » |

Pastilles : *consensus*, *choix d'école*, *choix du cours*, utilisées partout (index compris).

## Adresses stables

`/concepts/09` · `/concepts/09#9a1` · `/domaines/3/` · `/glossaire#valeur`. C'est ce que le prof donnera en
renvoi. Les renvois internes (« concept 8a2 ») deviennent des liens.

## Principes

- Une page, une question. Pas plus de deux écrans sans repli.
- Même forme pour chaque concept : on apprend la page une fois.
- Rien de propre à un apprenant, aucune réponse d'exercice (le dépôt du site est public).
- Contenu à rédiger pour un lecteur autonome, pas pour une conversation.
- Pas de redondance : une information vit sur une seule page, les autres y renvoient.
- Une page longue a le sommaire collant commun (`Sommaire`) ; ses blocs longs sont dépliables,
  avec l'option « Tout déplier » qui garde la section lue en place.
- Un groupe d'un seul élément ne fait pas de boîte : liste à plat.
- **Lien souligné** : réservé au lien qui se lit dans le flux sans couper la lecture : un renvoi
  dans une phrase (« le concept 1 fait décrire le besoin »), une référence citée, et les liens
  discrets de la marge (pied de page, surtitre « tous les domaines », ligne des prérequis). Ce
  qu'on propose d'ouvrir (une suite de lecture, une liste de concepts, une action) prend un
  composant : carte, tuile, pastille ou bouton. Jamais une liste ni une série de liens soulignés.
- Chaque page marche au bureau et à 375 px, en clair et en sombre.
- Le cours est « donné par un agent IA » (jamais « agent d'IA »).

## Points ouverts

Ces points sont tranchés (tour 4) :
- **Nom** : descriptif (par exemple « Parcours PO »), à choisir ; le domaine reste à voir à la mise en ligne.
- **Lectures** : plus de parcours de lecture ; la page Domaines liste les sous-concepts de chaque concept (T-058).
- **Cours guidé** : mentionné dans À propos, de façon factuelle, sans appel à l'action.
- **Dépôt public** : sur le compte du mainteneur, au nom du site.

Reste à définir : le nom exact.
