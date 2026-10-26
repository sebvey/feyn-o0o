# T-098 : Ne faire un schéma que sur demande de l'apprenant

- **Créé le** : 2026-10-26
- **Constat** : demande du mainteneur. `CLAUDE.md`, « La boucle du cours », pousse le prof à
  dessiner de lui-même (« Si un schéma rend un concept plus clair qu'un texte […], fais-le au
  moment où il sert, avec l'outil de schéma inline ») ; il charge alors l'outil de schéma.
  Deux défauts : un schéma fait à la volée est long à générer, et son contenu n'est pas
  maîtrisé par le cours (rien ne le relit, il peut contredire le fichier du concept). La règle
  vient de l'`init`, sans ticket ni ADR.
- **À faire** : dans `CLAUDE.md`, « La boucle du cours », remplacer la puce du schéma par :

  > - Ne fais un schéma que si l'apprenant en demande un ; ne le propose pas. Pars alors de la
  >   section « Schéma » du fichier du concept, et suis la métaphore du concept (ex. découpage
  >   vertical : couches empilées, couteau vertical).

  Sans autre changement : aucun skill ni hook ne charge l'outil de schéma, seule cette puce y
  pousse. Pas de refus de l'outil dans `.claude/settings.json` : il bloquerait aussi la demande
  explicite.
- **Fini quand** : un sous-agent de test (§5), sur un concept qui se prête au schéma (concept
  9, découpage vertical), enseigne un sous-concept sans dessiner, sans proposer de schéma ni
  charger l'outil ; puis, à « fais-moi un schéma », en fait un tiré de la section « Schéma » du
  fichier du concept. ADR écrit (la règle remplacée est l'option écartée).
