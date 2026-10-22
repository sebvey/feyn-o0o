# Projet factice : la démarque chez Vergeline

Ce que tu sais le premier jour de ta mission de Product Owner. Tout le reste, tu le découvres en
posant des questions aux interlocuteurs. L'enseigne, les personnes et les prestataires sont
fictifs.

## L'entreprise

**Vergeline** est une chaîne régionale de **40 supérettes de produits frais**, implantée en
Bretagne sud et en Loire-Atlantique, entre Lorient et Nantes. Le siège et l'entrepôt sont près de
Redon. L'entreprise est familiale, créée en 1987.

- 28 magasins sont des succursales (gérées par Vergeline), 12 sont tenus par des franchisés.
- Surface de vente : de 150 à 450 m² selon le magasin.
- Chiffre d'affaires 2025 : environ 58 M€ HT, soit en moyenne 1,45 M€ par magasin.
- Environ 370 tickets de caisse par jour et par magasin, panier moyen d'environ 12 € TTC.
- Assortiment : de 3 500 à 5 000 références par magasin, dont une large part de produits frais
  (fruits et légumes, produits laitiers, traiteur, boucherie en libre-service, pain et
  viennoiseries cuits sur place).
- Les magasins s'approvisionnent auprès de l'entrepôt, qui livre chaque matin.

## La demande de la direction

La directrice générale a présenté le projet au comité de direction de septembre 2026 :

> « Notre démarque est trop élevée : plus de 4 % du chiffre d'affaires part à la poubelle ou
> disparaît. C'est plus de deux millions d'euros par an. Je veux qu'on s'appuie sur nos données
> pour la réduire, avec un vrai tableau de bord et, pourquoi pas, de l'intelligence artificielle.
> Je dois montrer des premiers résultats au comité stratégique de mars. »

La **démarque** désigne la perte de marchandises : produits jetés, périmés, abîmés, volés ou
manquants.

## Les interlocuteurs

| Personne | Rôle | Ce qu'on attend d'elle dans le projet |
|---|---|---|
| **Hélène Marchais** | Directrice générale | Sponsor du projet. Fixe l'objectif, valide le budget, arbitre en dernier ressort. Disponible une heure par semaine. |
| **Karim Belkacem** | Responsable achats et approvisionnement | Connaît l'assortiment, les fournisseurs, l'entrepôt et le processus de commande. Interlocuteur pour tout ce qui vient de la centrale. |
| **Sandrine Le Bihan** | Responsable du magasin de Questembert | Représente les responsables de magasin au comité de pilotage du projet. Connaît le quotidien d'un magasin. |
| **Thomas Guillou** | Responsable informatique | Seul informaticien interne, appuyé par un prestataire d'infogérance. Connaît les systèmes, les données et les contrats avec les éditeurs. |

## Les sources de données connues

| Source | Contenu | Où |
|---|---|---|
| Caisses | Tickets de vente, ligne par ligne. Le système de caisse sert aussi à enregistrer les produits retirés de la vente. Logiciel de l'éditeur Caissalis. | Base de reporting, alimentée chaque nuit |
| Gestion commerciale (ERP) | Référentiel des articles, stocks théoriques par magasin, commandes des magasins, réceptions. | Base de reporting, chaque nuit |
| Commandes fournisseurs | Commandes de l'entrepôt aux fournisseurs, livraisons reçues. | ERP |
| Inventaires | Comptages physiques des stocks en magasin. | ERP |
| Plan promotionnel | Calendrier et quantités des opérations promotionnelles. | Fichier Excel de la centrale |
| Fichiers des franchisés | Fichiers Excel de suivi mensuel des pertes, tenus par les magasins franchisés. | Transmis au siège |
| Carte de fidélité | Environ 85 000 porteurs actifs, achats rattachés aux tickets. | Outil du service marketing |

## Le cadre de la mission

- **Toi** : Product Owner, en mission externe à partir du lundi 2 novembre 2026.
- **L'équipe** : un data engineer (prestataire externe) et un data analyst (salarié de
  Vergeline), à temps plein dès le premier sprint. Thomas Guillou est disponible quelques heures
  par semaine.
- **Le budget** : 230 k€ HT jusqu'à fin juin 2027, pour ta mission, celle du data engineer et les
  éventuels frais externes (les salaires internes n'y sont pas comptés).
- **Le calendrier** : quatre semaines de cadrage, puis des sprints de deux semaines. Le premier
  sprint démarre le **lundi 30 novembre 2026**. Le comité stratégique se tient le **jeudi
  18 mars 2027**.
- **Ton premier livrable** : un backlog prêt pour le premier sprint.
