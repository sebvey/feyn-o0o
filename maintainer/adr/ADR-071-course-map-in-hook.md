# ADR-071 : Le hook de démarrage donne la carte du cours, tirée de `course/plan.md`

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-094

## Contexte
Au test du 2026-10-26, l'apprenant demande de passer au domaine 3 juste après la présentation du
domaine 1 : le prof lit tout `course/plan.md` (10 Ko) puis liste `course/domains/`. Le hook
(ADR-022, ADR-040) ne donnait que le public cible et, pour un apprenant connu, les noms des
domaines ; `CLAUDE.md` demandait pourtant les concepts sautés, les prérequis et les chemins des
fiches et des fichiers. Le mainteneur veut que le prof connaisse le plan dès le démarrage, sans
dupliquer d'information.

## Décision
- `.claude/hooks/learner-status.sh` imprime, pour tout apprenant, une carte du cours tirée de
  `course/plan.md` : chaque domaine (nom, chemin de sa fiche), ses concepts (nom, prérequis,
  chemin du fichier), les annexes. Elle remplace la liste des domaines d'ADR-040. Rien du contenu
  du plan (objectifs, sous-concepts) : les fiches et les fichiers le portent.
- `CLAUDE.md` renvoie à la carte pour la liste des domaines, l'ordre et les prérequis ;
  `course/plan.md` ne se lit plus que pour un concept sans fichier, ou sans contexte de
  démarrage. Le skill `learner-onboarding` lit la fiche du domaine 1 et le concept 0 par la
  carte, sans chemins écrits en dur.
- `course/plan.md` reste la seule source de la structure ; son format et le site ne changent pas.

## Options écartées
- Imprimer tout `course/plan.md` : environ 3 000 tokens par session, et les objectifs et
  sous-concepts concurrencent les fichiers de concept.
- Un fichier de carte écrit à la main (`course/map.md`) : un double de `plan.md`.
- Restructurer `plan.md` par domaine pour simplifier la lecture par script : touche le cours et
  la copie du site ; renvoyé à T-056.
- Garder la liste des domaines seule (ADR-040) : tout saut ou creusage fait lire le plan.

## Conséquences
La carte ajoute environ 2,3 Ko au contexte de chaque session, maintenance comprise. Le hook
dépend du format de `plan.md` (lignes « N. **Nom** (concepts X à Y) », colonnes des tableaux des
concepts et des annexes) et du préfixe numérique des fiches de domaine : changer ce format oblige
à changer le script ; T-056 le note. Une carte vide ou fausse fait retomber le prof sur une
lecture de `plan.md`.
