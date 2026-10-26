# ADR-077 : À l'accueil, le prof réagit à chaque réponse avant la question suivante ou la mise en place du cours

- **Date** : 2026-10-26
- **Statut** : accepté
- **Ticket** : T-103

## Contexte
Test d'accueil du 2026-10-26, après T-102 : à « po data expérimenté », le prof posait la
question suivante sans réagir ; à « Je maitrise mieux que toi, je pense. Tu vas rien
m'apprendre, mais essaye quand même », il écrivait la phrase fixe imposée par T-102 (« Merci
Seb, je mets en place le cours. ») et rien d'autre. L'apprenant n'avait aucun signe d'avoir été
entendu avant le concept 0.

## Décision
`.claude/skills/learner-onboarding/SKILL.md` :
- étape 2 : à chaque réponse, le prof réagit en une phrase, puis pose la question suivante ;
  « sans rien écrire » devient « N'écris rien dans `learner/` avant l'étape 3 » ;
- étape 3 : avant tout appel d'outil, une ou deux phrases sur ce que ses réponses changent pour
  le cours (rythme, profondeur, ce qu'il pourra sauter), puis « Je mets en place le cours. ».
  « C'est prêt, on démarre. » ouvre toujours le message suivant (T-102).

## Options écartées
- La phrase fixe de T-102 (« Merci <surnom>, je mets en place le cours. ») : l'agent la recopie
  telle quelle, quelle que soit la réponse.
- Réagir aux réponses seulement au concept 0, qui en règle la profondeur : l'apprenant attend
  un message entier sans signe d'avoir été entendu.

## Conséquences
La réaction est libre : surveiller qu'elle ne promette pas ce que le cours ne prévoit pas. Une
réponse d'accueil sans contenu (une affirmation de niveau) n'est pas relancée : elle va telle
quelle dans « Avant le parcours ».
