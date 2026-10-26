# ADR-058 : Une question de la banque qui teste plusieurs points se pose en plusieurs temps

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-076c

## Contexte
Au test du cours, le prof a posé d'un bloc la question de contrôle du concept 0, double dans la
banque (« Qui décide de l'ordre du backlog, et quelle différence fais-tu entre un sprint et un
incrément ? »). `CLAUDE.md` demandait « une question » sans prévoir ce cas, que d'autres banques
portent aussi. Le mainteneur veut garder les deux questions, annoncées et traitées l'une après
l'autre.

## Décision
`CLAUDE.md`, « La boucle du cours », puce « Un seul concept par message » : une question qui
teste plusieurs points distincts s'annonce (« Je te pose deux questions, voici la première : »),
puis chaque partie se pose et se corrige à son tour ; un « pourquoi ? » ne fait pas une partie ;
la question n'est close que quand chaque partie a été répondue. « Tenir la mémoire à jour » note
la partie posée et ce qui est juste aux précédentes.

## Options écartées
- Poser les parties d'un bloc (pratique d'avant) : l'apprenant en oublie une, et la correction
  mêle réponse partielle et relance.
- Réécrire les questions de la banque en questions simples : touche tout `course/`, et les lots
  suivants en réintroduiraient.

## Conséquences
Les relances se comptent par partie. Une question double prend un message de plus.
