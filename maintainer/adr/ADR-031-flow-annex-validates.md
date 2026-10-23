# ADR-031 : Pour l'apprenant sans sprint, la question de l'annexe A2 valide le sous-concept du cours

- **Date** : 2026-10-23
- **Statut** : accepté
- **Ticket** : T-018g

## Contexte
ADR-018 propose l'annexe A2 aux sous-concepts 11b, 15b et 15c, sans dire comment elle s'enchaîne
avec eux. Une fois A2 écrite (T-018g), deux faits : 16c (« pour quand ? ») suppose aussi des
sprints (une prévision en sprints) ; au test d'A2, un prof neuf face à une apprenante en flux n'a
pas su si la question en sprint devait être réussie avant l'annexe, ni ce qui validait 15b et
15c, et a tranché seul.

## Décision
`course/plan.md` (« Parti pris ») et `course/concepts/A2-sans-sprint.md` (« Sous-concepts ») :
A2 se propose en 11b, 15b, 15c et 16c (A2a, A2b, A2c, A2d), à la place de la banque du
sous-concept du cours : une ou deux lignes sur ce que fait Scrum, puis l'exemple et la question
de l'annexe, une seule question par message ; le cas en sprint vient au message suivant si
l'apprenant le demande. Une réponse juste à la question de l'annexe valide le sous-concept. Le
concept 0 annonce les quatre sous-concepts. Complète ADR-018.

## Options écartées
- Réussir d'abord la question en sprint, puis donner l'annexe : l'apprenant en flux répond sur
  une pratique qu'il n'a pas.
- Laisser l'apprenant choisir entre les deux questions dans un même message (écrit, puis
  retiré après un test) : deux situations et deux questions ne tiennent pas dans un message.
- Garder A2 à trois sous-concepts et placer la prévision en flux après 15c : elle renvoie à 16c,
  pas encore vu.

## Conséquences
Un apprenant en flux valide 11b, 15b, 15c et 16c sans avoir répondu sur la pratique Scrum (plan,
« Parti pris »). À surveiller à T-018h : que l'enchaînement tienne dans un
message de 15 lignes.
