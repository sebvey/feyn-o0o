# Modèle de ticket

Un ticket par fichier, créé dans `maintainer/backlog/todo/` et nommé `T-000-<slug>.md`.
Numérote à la suite du dernier ticket, tous dossiers confondus ; un numéro ne se réutilise
jamais. Une fois appliqué, le fichier passe dans `maintainer/backlog/done/`.

```markdown
# T-000 : <titre court, verbe à l'infinitif>

- **Créé le** : AAAA-MM-JJ
- **Constat** : <fait observé ou demande du mainteneur, avec sa source>
- **À faire** : <changement attendu et fichiers touchés>
- **Fini quand** : <condition vérifiable>
```

En passant dans `done/`, ajoute en dernière ligne :

```markdown
- **Fait le** : AAAA-MM-JJ, <ce qui a été fait en une ligne>
```
