# Site support du cours : structure du contenu (brouillon)

Statut : proposition, après un premier tour d'interview. Rien n'est figé.

## Décisions du mainteneur (interview, tour 1 et 2)

- **Vitrine publique.** Local d'abord, mise en ligne rapidement (piste : GitHub Pages).
- **Support indirect.** Le site est « le contenu du cours, sur le web » : un lieu pour réviser et
  comprendre visuellement. **Ni question, ni réponse, ni exercice** : cela reste côté agent.
- **Pas d'exemples du fil rouge** : les concepts seuls. (Les schémas peuvent s'appuyer sur un
  cas, à décider.)
- **Contenu propre au site.** Génération initiale manuelle depuis `course/`, puis le site évolue
  en parallèle, en complément du cours. Pas de lien automatique.
- **Dépôt séparé et public** (ce dépôt contient `learner/` et `maintainer/`).
- **Style éditorial sobre.**
- **Fonctions** : recherche plein texte ; sources et vérifications visibles. Pas d'infobulles
  de glossaire ni de progression pour l'instant.
- **Rôle du prof** : renvois seulement (un lien à la fin d'un concept).
- **Schémas** : SVG statiques soignés, un par concept.
- **Fil rouge** : visible, avec une page dédiée (opérateur, équipe, acteurs, sources) ; les
  schémas s'y appuient.
- **Rédaction** : l'agent rédige chaque page, le mainteneur relit la PR.
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
- Un fichier de sources par concept ; un plan ; un glossaire (110 termes, + termes à éviter) ;
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
| Accueil | Promesse du cours, public cible, deux portes : commencer par le concept 0, voir les domaines |
| **Domaines** | La carte du cours : les sept domaines de `course/plan.md` dans l'ordre, ce qu'on sait faire à la fin de chacun, ses concepts dépliables (sous-concepts et promesses, lus au build dans les pages) ; puis les annexes ; sommaire collant |
| **Concept** (×18 + 2 annexes) | Page de lecture, voir ci-dessous |
| Glossaire | Recherche, filtre par concept (groupé par domaine), « termes à éviter » ; sommaire collant des lettres |
| Fil rouge | L'opérateur, la collectivité, le produit et l'équipe, les acteurs, les sources de données ; même sommaire collant que Domaines |
| Consensus ou école | Index transversal des positions par nature ; consensus et choix du cours en groupes dépliables, choix d'école à plat par auteur ; sommaire collant |
| Sources | Les sources piliers (citées par au moins 3 concepts), la légende des types de source, puis concept par concept (groupés par domaine, dépliables) les références et le « Non vérifié », avec un filtre ; sommaire collant |
| À propos | Le cours donné par un agent IA, la fabrication du site, les versions, la licence |
| Recherche | Plein texte, accessible de partout |

La page **Fil rouge** (décidée) présente l'opérateur, l'équipe, les acteurs et les sources de
données ; les schémas y renvoient. Elle ne porte pas les « faits fixés » (règles à trancher
par exercice).

Lecteur double : chaque page doit se suffire (le curieux), et la ligne « L'essentiel » plus le
schéma doivent permettre une relecture en deux minutes (l'apprenant).

### Domaines

Les domaines viennent du cours (`course/plan.md`, « Domaines du cours », ADR-039) : le site ne
les fixe pas. Chaque concept appartient à un seul domaine ; les annexes restent hors domaines.
Sur la page Domaines, chaque concept se déplie sur la liste de ses sous-concepts, lue au build
dans les pages de concept ; un sommaire collant suit le domaine en cours de lecture (T-058).

## La page Concept

En-tête : numéro, domaine du concept, titre, objectif en une phrase, prérequis (liens).
Précédent / suivant : deux cartes en bas de page et, au bureau, deux flèches dans la barre
d'onglets collante (T-062). Corps sur **trois onglets**, pour que la lecture reste légère :

| Onglet | Contenu |
|---|---|
| **Comprendre** | L'essentiel · le schéma · les sous-concepts en sections · « le réflexe » (test rapide) · les erreurs classiques |
| **Consensus ou école** | Trois colonnes : consensus (par texte) · choix d'école (par auteur) · choix du cours |
| **Sources** | Affirmations vérifiées, références, « Non vérifié » |

Pastilles : *consensus*, *choix d'école*, *choix du cours*, utilisées partout (index compris).

## Adresses stables

`/concepts/09` · `/concepts/09#9a1` · `/glossaire#valeur`. C'est ce que le prof donnera en
renvoi. Les renvois internes (« concept 8a2 ») deviennent des liens.

## Principes

- Une page, une question. Pas plus de deux écrans sans repli.
- Même forme pour chaque concept : on apprend la page une fois.
- Rien de propre à un apprenant, aucune réponse d'exercice (le dépôt du site est public).
- Contenu à rédiger pour un lecteur autonome, pas pour une conversation.

## Points ouverts

Ces points sont tranchés (tour 4) :
- **Nom** : descriptif (par exemple « Parcours PO »), à choisir ; le domaine reste à voir à la mise en ligne.
- **Lectures** : plus de parcours de lecture ; la page Domaines liste les sous-concepts de chaque concept (T-058).
- **Cours guidé** : mentionné dans À propos, de façon factuelle, sans appel à l'action.
- **Dépôt public** : sur le compte du mainteneur, au nom du site.

Reste à définir : la liste des situations, et le nom exact.
