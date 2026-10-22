# Support d'amélioration du cours

Provisoire. Le prof y écrit en autonomie, dès qu'un fait se produit (voir « Tenir la mémoire à
jour » de `CLAUDE.md`), ce que les sessions apprennent sur le cours. Le mainteneur le lit quand
il retravaille un concept et en tire des tickets au tri. Pendant le cours, le prof n'y lit que
ce README et le fichier où il écrit.

## Où écrire

- `NN-slug.md` : ce qui est né pendant un concept de `course/plan.md` (même nom que son fichier
  dans `course/concepts/`), y compris un aparté, un exemple improvisé ou un fait de fil rouge
  improvisé à ce moment. Crée le fichier au premier fait.
- `off-course.md` : ce qui est né hors de tout concept (aparté à l'accueil, sujet hors cours).

## Quoi écrire

Tout fait qui pourrait améliorer le cours ou servir à un autre apprenant, notamment tout
apprentissage fait hors du fil rouge et du cours documenté. Une entrée par fait, une ligne ou
deux :

```markdown
- <AAAA-MM-JJ>, <surnom>, <type> : <fait observé>. -> <suggestion>
```

Types : `incompréhension`, `question mal posée`, `exemple improvisé`, `aparté`, `demande de
l'apprenant` (sur la forme du cours), `ce qui marche`, `fil rouge` (fait, acteur ou source
improvisé, absent de `course/fil-rouge-velos.md`).

Le mainteneur retire une entrée quand il l'a traitée (ticket ou réécriture du concept).
