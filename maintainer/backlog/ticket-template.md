# Modèle de ticket

Un ticket par fichier, nommé `T-000-<slug>.md`. Il est créé dans `maintainer/backlog/00-proposed/`
s'il est à trier, dans `01-todo/` s'il est décidé par le mainteneur. Numérote à la suite
du dernier ticket, tous dossiers confondus ; un numéro ne se réutilise jamais. Une fois appliqué,
le fichier passe dans `02-done/`.

Un ticket trop gros se découpe en sous-tickets, suffixés d'une lettre dans l'ordre de création :
`T-018a-<slug>.md`, `T-018b-<slug>.md`. Chaque sous-ticket porte `Parent` et, s'il en a une,
`Dépend de` avec sa seule dépendance directe. Le parent liste ses sous-tickets et leur état ; il
passe dans `02-done/` quand le dernier est clos.

```markdown
# T-000 : <titre court, verbe à l'infinitif>

- **Créé le** : AAAA-MM-JJ
- **Parent** : T-000 (sous-ticket seulement)
- **Dépend de** : T-000x (si une dépendance directe existe)
- **Constat** : <fait observé ou demande du mainteneur, avec sa source>
- **À faire** : <changement attendu et fichiers touchés>
- **Fini quand** : <condition vérifiable>
```

En passant dans `02-done/`, ajoute en dernière ligne :

```markdown
- **Fait le** : AAAA-MM-JJ, <ce qui a été fait en une ligne>
```
