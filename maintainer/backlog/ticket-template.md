# Modèle de ticket

Un ticket par fichier, nommé `T-000-<slug>.md`. Il est créé dans `maintainer/backlog/00-proposed/`
s'il est à trier, dans `01-todo/` s'il est décidé par le mainteneur. Numérote à la suite
du dernier ticket, tous dossiers confondus ; un numéro ne se réutilise jamais. Une fois appliqué,
le fichier passe dans `02-done/`.

```markdown
# T-000 : <titre court, verbe à l'infinitif>

- **Créé le** : AAAA-MM-JJ
- **Constat** : <fait observé ou demande du mainteneur, avec sa source>
- **À faire** : <changement attendu et fichiers touchés>
- **Fini quand** : <condition vérifiable>
```

En passant dans `02-done/`, ajoute en dernière ligne :

```markdown
- **Fait le** : AAAA-MM-JJ, <ce qui a été fait en une ligne>
```
