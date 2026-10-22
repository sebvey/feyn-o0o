# T-034 : Monter un POC du parcours en plugin Claude pour Cowork

- **Créé le** : 2026-10-22
- **Constat** : demande du mainteneur (session de maintenance du 2026-10-22). Le parcours se
  joue aujourd'hui dans une session Claude Code ouverte sur un clone du repo : `CLAUDE.md` porte
  le rôle du prof, les skills portent les procédures, le hook `SessionStart`
  (`.claude/hooks/learner-status.sh`) injecte l'état de l'apprenant, et `learner/` dans le repo
  sert de mémoire. Ce montage convient pour développer le cadre, mais il exige de l'apprenant
  Claude Code et git, et il ne sert qu'un apprenant par clone. Cible : rester dans les
  applications Claude, sans application sur mesure qui appellerait Claude comme LLM.
- **Contexte du POC** :
  - Plan Claude Team d'Ippon, Cowork disponible.
  - Apprenants : un ou deux, pas forcément développeurs ; deux ou trois en parallèle doivent
    être possibles.
  - Le développement du cours reste dans ce repo versionné. Une nouvelle version se publie à
    partir du repo ; le versionnement git côté apprenant n'est pas nécessaire.
  - La boucle d'amélioration (`maintainer/improvements/`) n'est pas un besoin du POC.
- **Montage retenu** : le cadre devient un plugin Claude ; chaque apprenant le joue dans un
  projet Cowork sur son poste.
  - **Pourquoi un plugin** : un plugin installé est rattaché au compte Claude de la personne,
    donc disponible dans le chat, Cowork et Claude Code. Il peut contenir des skills, des
    commandes, des connecteurs MCP, des agents et des hooks. Skills et commandes marchent
    partout ; agents et hooks ne marchent que dans Cowork et Claude Code. Limites : 200 Mo
    décompressés et 5 000 fichiers par plugin ; les fichiers embarqués restent lisibles par
    Claude pendant la session, y compris au-delà de 1 Mo (seul l'aperçu de l'application est
    limité). Le cours entier tient dans le plugin.
  - **Pourquoi Cowork** : un projet Cowork réunit des dossiers locaux que Claude lit et écrit,
    des instructions appliquées à chaque session, des liens et une mémoire propre au projet. Il
    reste sur le poste de son utilisateur et ne se partage pas. Chaque apprenant a donc son
    projet et son dossier : l'isolation entre apprenants parallèles est native, et la mémoire en
    fichiers fonctionne comme aujourd'hui.
  - **Correspondances** :

    | Aujourd'hui | Dans le POC |
    |---|---|
    | `CLAUDE.md` (rôle du prof, boucle, mémoire) | skill d'entrée du plugin (nom en anglais, ex. `po-course`) ; les instructions du projet Cowork disent de le lancer au début de chaque session |
    | `.claude/skills/learner-onboarding/` | skill du plugin ; il crée les fichiers de l'apprenant dans le dossier du projet Cowork depuis les modèles embarqués |
    | `course/` (plan, concepts, sources, glossaire, fil rouge, modèles) | fichiers embarqués dans le plugin, lus par le skill d'entrée |
    | `learner/` dans le repo | `learner/` dans le dossier du projet Cowork de chaque apprenant |
    | hook `SessionStart` `learner-status.sh` | soit le même hook embarqué dans le plugin, soit une première étape du skill d'entrée qui lit `learner/` |
    | `maintainer/`, `archive/`, skill `maintenance` | restent dans le repo, hors du plugin |

  - **Publication depuis le repo** : le repo déclare le plugin (`.claude-plugin/plugin.json`
    dans le dossier du plugin) et, pour servir de marketplace, un `.claude-plugin/marketplace.json`
    à sa racine. Trois voies de diffusion :
    1. chaque apprenant ajoute le repo GitHub comme marketplace (Customize > Plugins > Add >
       Add marketplace) et active « Sync automatically » : chaque push publie une nouvelle
       version. Repo privé : l'apprenant connecte son compte GitHub et donne accès à la GitHub
       App Claude ;
    2. partage du plugin avec des personnes nommées de l'organisation, sans validation admin :
       le plus simple pour deux personnes ;
    3. plus tard, publication dans la bibliothèque de l'organisation (Owner qui synchronise le
       repo, ou soumission avec revue admin), avec installation par défaut ou obligatoire.
  - **Options écartées pour le POC** :
    - projet claude.ai (chat) avec un Doc Claude par apprenant comme mémoire : rien à installer,
      mais pas de hook, et l'écriture de la mémoire dépend de la seule discipline de l'agent ;
      l'agent doit aussi retrouver le Doc de l'apprenant d'une session à l'autre ;
    - artifact claude.ai avec base de données (progression, travaux, retours) : règle bien le
      multi-apprenant, mais revient à une application sur mesure et se prête mal au dialogue
      pédagogique ;
    - Claude Code tel qu'aujourd'hui : exige terminal et git.
- **À faire** :
  1. **Vérifier sur un plugin minimal** (un skill, un hook `SessionStart`, un modèle de
     fichier), installé dans un projet Cowork sur un dossier vide :
     - Cowork lit-il un `CLAUDE.md` posé dans le dossier du projet ? Si oui, l'onboarding peut
       l'y copier et le portage du rôle du prof devient presque nul ;
     - le hook `SessionStart` d'un plugin se déclenche-t-il dans Cowork, et sa sortie
       arrive-t-elle dans le contexte de l'agent ? Quel répertoire voit-il (équivalent de
       `$CLAUDE_PROJECT_DIR`) ?
     - comment un skill désigne-t-il ses fichiers embarqués (chemins relatifs au skill ou au
       plugin) et le dossier du projet ?
     - la mémoire propre au projet Cowork, alimentée automatiquement, entre-t-elle en conflit
       avec `learner/` ? Il faudra sans doute écrire dans le skill d'entrée que `learner/` est
       la seule source de vérité.
  2. **Choisir l'organisation du repo** : le dossier du plugin doit contenir `course/` sans
     lien symbolique (les liens ne sont pas publiés). Options : déplacer `course/` et les skills
     de cours dans le dossier du plugin, ou générer le dossier du plugin par un script de
     construction. Le mode Claude Code actuel (développement, tests du skill `maintenance`)
     doit continuer de fonctionner.
  3. **Porter le cadre** : transformer `CLAUDE.md` en skill d'entrée (ou en fichier copié par
     l'onboarding, selon l'étape 1), adapter `learner-onboarding` et le hook, réécrire les
     chemins (`course/…` -> fichiers du plugin, `learner/…` -> dossier du projet). Retirer du
     rôle du prof ce qui vise `maintainer/` (écriture dans `maintainer/improvements/`), ou le
     remplacer par une consigne neutre, puisque la boucle d'amélioration sort du POC.
  4. **Publier** par la voie 1 ou 2 et rédiger une notice d'installation pour l'apprenant :
     installer le plugin, créer le projet Cowork (« Start from scratch » ou dossier vide),
     coller les instructions du projet, lancer la première session.
  5. **Tester** avec deux apprenants en parallèle, puis appliquer la règle ADR (le changement
     de support du cours en relève probablement).
- **Fini quand** : deux apprenants sur des postes distincts, sans Claude Code ni git, installent
  le plugin, créent chacun leur projet Cowork, passent l'onboarding et le concept 0, s'arrêtent,
  puis reprennent dans une nouvelle session au bon endroit (rappel de la « Prochaine étape »,
  sans reposer les questions d'accueil) ; un push sur le repo leur arrive comme nouvelle version
  du plugin sans réinstallation ; le mode Claude Code du repo fonctionne toujours pour le
  mainteneur.
- **Sources** (doc Anthropic, consultée le 2026-10-22) :
  [Plugins](https://claude.com/docs/plugins/overview),
  [Install plugins (Cowork)](https://claude.com/docs/cowork/guide/plugins),
  [Organize work with projects (Cowork)](https://claude.com/docs/cowork/guide/projects).
