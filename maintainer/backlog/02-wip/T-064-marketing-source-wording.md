# T-064 : Définir le type de source « marketing » de façon moins inquiétante

- **Créé le** : 2026-10-25
- **Constat** : question du mainteneur du 2026-10-25 sur la page Sources : « marketing, on a des sources marketing ? ». 29 références sur 193 portent l'étiquette, surtout des organismes qui définissent une méthode et vendent la formation (Scrum.org, SAFe, Kanban University), et 8 éditeurs d'outils. La définition « éditeur ou organisme qui vend un outil ou une formation : une allégation » inquiète sans dire ce que vaut la source.
- **À faire** : nouvelle définition, sans renommer le type : « la source vend aussi ce dont elle parle (outil, formation, certification) ; fiable pour décrire son offre, ce qu'elle recommande est à prendre avec recul » ; dans `course/templates/sources.md` (seule définition du cours ; `.claude/workflows/course-lot.js` ne cite que les noms des types) et dans la légende de la page Sources du site ; CHANGELOG du cours (PATCH, non publié) et du site (0.6.1) ; PR, merge, redéploiement.
- **Fini quand** : le modèle du cours et la légende en ligne portent la nouvelle définition.
