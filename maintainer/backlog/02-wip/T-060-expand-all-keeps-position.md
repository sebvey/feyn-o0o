# T-060 : Garder le domaine en place quand on déplie ou replie tout

- **Créé le** : 2026-10-25
- **Constat** : retour du mainteneur du 2026-10-25 sur T-059 : après avoir choisi un domaine dans le sommaire, « Tout déplier » (ou « Tout replier ») déplie bien, mais la page se retrouve sur un autre domaine. Les concepts au-dessus de l'écran changent de hauteur et décalent le contenu.
- **À faire** (dépôt `../parcours-po-website`, `src/pages/domaines.astro`) : au clic, noter la position à l'écran du domaine en cours de lecture, déplier ou replier, puis faire défiler de l'écart pour que ce domaine reste au même endroit ; site 0.3.2 (PATCH), CHANGELOG ; vérification au bureau et à 375 px ; PR, merge, redéploiement.
- **Fini quand** : sur l'aperçu, après un clic sur un domaine du sommaire, « Tout déplier » puis « Tout replier » laissent ce domaine en haut de l'écran.
