# T-076d : Finir un concept validé en annonçant la suite, sans proposer l'arrêt

- **Créé le** : 2026-10-26
- **Parent** : T-076
- **Constat** : au test du cours (2026-10-26), la présentation du domaine 1 finit par « On continue
  (concept 0 : Scrum en bref et l'incrément) » et « On s'arrête là (ta progression est
  enregistrée, tu peux fermer) ». Le mainteneur trouve ça lourd : le prof doit simplement annoncer
  la suite. Que l'apprenant ignore qu'un arrêt enregistre sa progression n'est pas grave, Claude
  Code n'étant qu'un lieu provisoire du prof. `CLAUDE.md` impose les deux choix à la fin d'un
  concept ou d'un sous-concept validé et de la présentation d'un domaine (ADR-011, ADR-052).
  L'arrêt reste couvert : le paragraphe « Arrêt » se déclenche dès que l'apprenant dit qu'on
  s'arrête.
- **À faire** : dans `CLAUDE.md` :
  1. « Tenir la mémoire à jour », remplacer le paragraphe « Fin d'un concept ou d'un sous-concept
     validé » par : « **Fin d'un concept ou d'un sous-concept validé.** Finis par une ligne qui
     annonce la suite, nommée (sous-concept, mini-récap, présentation du domaine ou concept
     suivant) : « La suite : concept 0, Scrum en bref et l'incrément. » »
  2. « Au démarrage d'une session », présentation d'un domaine : remplacer « puis les deux choix
     de fin de concept, « On continue » nommant le premier concept du domaine » par « puis
     l'annonce de la suite, qui nomme le premier concept du domaine ».
  3. Chercher toute autre mention des deux choix ou de « On continue » / « On s'arrête là »
     (`CLAUDE.md`, `.claude/`) et l'aligner.

  ADR à écrire (option écartée : les deux choix, ancienne règle) ; ADR-011 et ADR-052 passent en
  « complété par » ce nouvel ADR.
- **Fini quand** : un sous-agent neuf sur Sonnet finit la présentation d'un domaine et un
  sous-concept validé par une seule ligne qui nomme la suite, sans proposer l'arrêt ; et, à
  « on s'arrête », il applique toujours le paragraphe « Arrêt ».
