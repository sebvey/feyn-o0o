# T-065 : Réviser À propos, Consensus ou école et Glossaire, et ajouter un bouton clair / sombre

- **Créé le** : 2026-10-25
- **Constat** : demandes du mainteneur du 2026-10-25. (1) À propos reprend ce qui est ailleurs (pour qui, pastilles, cas fictif) ; formulations validées en discussion pour le chapeau, « Un cours donné par un agent », « Comment ce site est fait », « Versions » (plus digeste ; la page actuelle dit à tort que site et cours partagent le premier chiffre pendant l'aperçu) et la licence. (2) Réviser les pages Consensus ou école et Glossaire avec les principes des pages précédentes (pas de redondance, sommaire collant, dépliables, chapeau utile, fond aligné sur le cours) ; la légende des pastilles reste à l'accueil et sur Consensus (choix du mainteneur). (3) Un thème clair et un bouton clair / sombre.
- **À faire** (dépôt `../parcours-po-website`) :
  1. À propos : textes validés (« agent IA », pas « agent d'IA »), sections pour qui, pastilles et cas fictif retirées, ancre `#cours-accompagne` conservée ;
  2. Consensus ou école : sommaire collant (les trois natures, avec leur nombre de positions), groupes dépliables avec leur nombre, bouton « Tout déplier » ; le bouton devient une option du composant `Sommaire`, reprise par Domaines et Sources ;
  3. Glossaire : sommaire collant des lettres et des termes à éviter, chapeau resserré, définitions alignées sur `course/glossary.md` si elles divergent ;
  4. thème : bouton clair / sombre dans l'en-tête, choix mémorisé (sinon préférence du système), appliqué avant l'affichage ; thème clair vérifié page par page et retouché si besoin ;
  5. site 0.7.0, CHANGELOG, README, `maintainer/site/structure.md` ; build, vérification au bureau et à 375 px, en clair et en sombre ; PR, merge, redéploiement.
- **Fini quand** : l'aperçu en ligne montre les trois pages révisées et le bouton clair / sombre, qui fonctionne et se mémorise.
