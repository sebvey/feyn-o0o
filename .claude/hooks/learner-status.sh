#!/bin/sh
# SessionStart : donne au prof le public cible, la carte du cours et l'état de learner/
# (CLAUDE.md, « Au démarrage d'une session »).
root=$CLAUDE_PROJECT_DIR
nick=$(sed -n 's/^Surnom : \*\*\(.*\)\*\*.*/\1/p' "$root/learner/apprenant.md" 2>/dev/null)
echo "Public cible du cours (course/plan.md) :"
awk '/^## /{ f = ($0 == "## Public cible") ; next } f && NF' "$root/course/plan.md"
# Carte du cours : la structure de course/plan.md (domaines, concepts, prérequis, fichiers),
# sans son contenu ; les fiches de domaine se trouvent par leur numéro.
echo "Carte du cours (course/plan.md ; prérequis entre parenthèses) :"
for f in "$root"/course/domains/[0-9]*.md; do echo "${f#"$root"/}"; done |
  awk -F'|' '
    FNR == NR { n = $0; sub(/^.*\//, "", n); sub(/-.*/, "", n); fiche[n] = $0; next }
    /^## / { s = $0; next }
    s == "## Domaines du cours" && /^[0-9]+\. \*\*/ {
      d = $0; sub(/\..*/, "", d)
      nom[d] = $0; sub(/^[0-9]+\. \*\*/, "", nom[d]); sub(/\*\*.*/, "", nom[d])
      r = $0; sub(/^[^(]*\(concepts? /, "", r); sub(/\).*/, "", r)
      k = split(r, b, / (à|et) /)
      for (c = b[1]; c <= b[k]; c++) dom[c] = d
    }
    s == "## Concepts" && /^\| [0-9]+ \|/ {
      for (i = 2; i <= 7; i++) gsub(/^ +| +$|`/, "", $i)
      d = dom[$2]
      if (d != last) { print "Domaine " d " : " nom[d] " : " fiche[d]; last = d }
      print "  " $2 ". " $3 " (" $5 ") : course/concepts/" $7
    }
    s == "## Annexes" && /^\| A[0-9]+ \|/ {
      for (i = 2; i <= 4; i++) gsub(/^ +| +$|`/, "", $i)
      t = $3; sub(/ [(:].*/, "", t)
      print "Annexe " $2 " : " t " : course/concepts/" $4
    }
  ' - "$root/course/plan.md"
if [ -n "$nick" ] && [ "$nick" != "<surnom>" ]; then
  echo "État de learner/ : apprenant connu, $nick."
  for f in observations.md parcours.md; do
    [ -e "$root/learner/$f" ] || echo "Fichier absent : learner/$f."
  done
  for f in apprenant.md observations.md; do
    [ -e "$root/learner/$f" ] || continue
    echo "Contenu de learner/$f :"
    cat "$root/learner/$f"
  done
else
  echo "État de learner/ : nouvel apprenant (learner/apprenant.md absent ou sans surnom)."
  echo "En session de cours, suis le skill learner-onboarding ci-dessous, sans le recharger :"
  awk 'n >= 2; /^---$/ { n++ }' "$root/.claude/skills/learner-onboarding/SKILL.md"
fi
exit 0
