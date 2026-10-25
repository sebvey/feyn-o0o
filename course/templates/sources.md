# Modèle de fichier de sources

Un fichier par fichier de concept, dans `course/sources/`, sous le même nom (`NN-slug.md`).
Il trace la source de chaque affirmation vérifiable du fichier du concept (définition,
consensus, choix d'école et son auteur, date, chiffre, citation), y compris dans la banque
d'exemples. Le prof ne le lit que si l'apprenant demande d'où vient une affirmation.

Types de source : **primaire** (texte de l'auteur ou de l'organisme), **secondaire** (reprise
par un tiers sérieux), **marketing** (la source vend aussi ce dont elle parle : outil, formation,
certification ; fiable pour décrire son offre, ce qu'elle recommande est à prendre avec recul).
Les faits du fil rouge vélos sont inventés : ils n'ont pas de source.

```markdown
---
concept: <numéro, ou A<n> pour une annexe>
---

# Sources : <titre du concept>

## Affirmations
| Affirmation (section du fichier du concept) | Source | Ce qui a été vérifié |
|---|---|---|
| <l'affirmation, en quelques mots> (<section>) | [S1] | <ce que la source dit, citation courte si utile> |

## Références
| Réf. | Source (auteur, titre, date) | Lien | Type | Consultée le |
|---|---|---|---|---|
| S1 | <…> | <URL> | primaire | AAAA-MM-JJ |

## Non vérifié
<Chaque affirmation du fichier du concept qu'aucune source consultée ne confirme, et pourquoi
(source payante, discordance entre sources). Vide si tout est vérifié.>
```
