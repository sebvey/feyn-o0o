# T-006 : Écrire la mémoire au moment des faits et décider du sort du skill `update-memory`

- **Créé le** : 2026-10-21 (réécrit le 2026-10-22, après T-017)
- **Constat** : depuis T-017 (ADR-010), il n'y a plus de fiche ni de trace à écrire. Le prof
  n'écrit au fil de l'eau que « Prochaine étape » ; tout le reste (statut, journal, observations,
  travaux, faits du fil rouge, support d'amélioration) attend le skill `update-memory`, lancé au
  point de sauvegarde. Trois défauts restent :
  - **Moment ambigu** : `CLAUDE.md` dit « propose deux choix […] Dans les deux cas, lance le
    skill `update-memory` avant la suite ». Le test par sous-agent de T-017 n'a pas su s'il
    fallait le lancer en proposant les choix ou après la réponse de l'apprenant ; le skill
    (« L'apprenant a choisi de continuer : attaque la suite ») suggère après.
  - **Perte sur coupure** : si la session coupe entre la correction et le choix de l'apprenant,
    ou s'il ferme sans dire qu'il s'arrête, statut, observations, faits du fil rouge et entrées
    d'amélioration sont perdus. Aucun rattrapage au démarrage.
  - **Raison d'être du skill** : il se réduit à un tableau « quoi -> où », un contrôle de reprise
    et trois cas de réponse. Le moment des écritures est dans `CLAUDE.md`, leur contenu dans le
    skill : la règle vit à deux endroits.

- **À faire** : option A retenue par le mainteneur.

  **Option A : écrire au moment des faits, sans skill** (proposition)
  - Chaque écriture se fait dans la même réponse que l'événement qui la déclenche :
    - question posée : « Prochaine étape » (inchangé) ;
    - correction d'une réponse : « Prochaine étape », et, si le sous-concept ou le concept est
      validé, son statut et la ligne de la session au journal (créée ou complétée) ;
    - observation sur l'apprenant (levier, vigilance, acquis), production de l'apprenant, fait
      du fil rouge fixé, fait pour le support d'amélioration : écrits dès qu'ils se produisent ;
    - arrêt annoncé par l'apprenant : vérifier « Prochaine étape » et le journal, puis deux
      lignes (progression sauvegardée, prochaine étape).
  - Le point de sauvegarde se réduit à la proposition des deux choix : plus rien à écrire à ce
    moment, plus d'ambiguïté. Libellé « On s'arrête là (je sauvegarde ta progression, puis tu
    pourras fermer) » à revoir, puisque tout est déjà écrit.
  - Le skill `update-memory` est supprimé. Son tableau « quoi -> où » rejoint `CLAUDE.md`,
    section « Tenir la mémoire à jour », avec les formats (observations, support
    d'amélioration) et le critère « sans elle, l'agent suivant ferait-il autre chose ? ».
  - Pour : une coupure ne perd que l'échange en cours ; une seule source pour le moment et le
    contenu des écritures ; plus de déclenchement de skill à réussir.
  - Contre : `CLAUDE.md` s'allonge d'une quinzaine de lignes, lues à chaque session ; des
    écritures plus fréquentes, parfois avant que le sujet soit clos (un statut ou une
    observation se corrige alors au point suivant) ; le contrôle de reprise du skill disparaît,
    sauf à le garder dans la règle d'arrêt.

  **Option B : garder le skill, le lancer avant les choix**
  - Le skill tourne à la fin d'un sous-concept validé, dans la même réponse que la correction,
    puis le prof propose les deux choix. Il tourne aussi à l'arrêt annoncé.
  - Pour : `CLAUDE.md` reste court ; le contrôle de reprise reste.
  - Contre : la règle reste à deux endroits ; une coupure en milieu de sous-concept perd encore
    les observations et les faits du fil rouge en attente ; le déclenchement du skill reste à
    réussir.

  **Option C : garder le skill, ne le lancer qu'en fin de session**
  - Tout s'écrit au moment des faits (comme A), sauf la ligne de journal et le contrôle de
    reprise, faits par un skill de fin de session.
  - Contre : un skill pour deux écritures ; une session fermée sans prévenir n'a pas de journal.

  **Fichiers touchés** (selon l'option) : `CLAUDE.md` (« Tenir la mémoire à jour », point de
  sauvegarde, renvois à `update-memory`), `.claude/skills/update-memory/` (supprimé ou réécrit),
  `.claude/skills/maintenance/SKILL.md` (périmètre, §5 Tester), `maintainer/improvements/README.md`
  (moment d'écriture). ADR à écrire : il complète ADR-010 et reprend l'option écartée par
  ADR-002 (écrire plus tôt).

- **Fini quand** : un sous-agent neuf, en lecture seule, sur « on reprend », « on continue »,
  une réponse juste qui valide 10b, puis une coupure sans choix, décrit des écritures qui
  laissent `learner/` à jour (statut, journal, « Prochaine étape », observations) ; un second
  agent neuf qui reprend sur cet état annonce la bonne suite. Variante : « On s'arrête là »
  après la validation, sans écriture en double au journal.
- **Fait le** : 2026-10-22, option A : « Tenir la mémoire à jour » de `CLAUDE.md` devient un
  tableau « quand, quoi, où » écrit dans la même réponse que le fait, plus une règle d'arrêt
  (journal, contrôle de reprise, deux lignes) ; skill `update-memory` supprimé ; libellé « On
  s'arrête là (ta progression est enregistrée, tu peux fermer) » ; renvois mis à jour dans
  `maintenance` et `maintainer/improvements/README.md`. Test par deux sous-agents sur une copie :
  coupure après la validation de 10b, `learner/` à jour (statut, journal, « Prochaine étape »,
  acquis, entrée d'amélioration) ; reprise par un agent neuf qui annonce le concept 11, sans
  doublon au journal. Imprécisions relevées et corrigées : moment de création de la ligne de
  journal, statut par concept, retrait des consignes déjà suivies, partage observations /
  amélioration, numéro de session, fichier du prochain concept au démarrage.
