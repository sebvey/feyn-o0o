#!/bin/sh
# Génère course/map.md (public cible et carte du cours) depuis course/plan.md et
# course/domains/ ; CLAUDE.md l'importe. Les fiches de domaine se trouvent par leur numéro.
root=$(cd "$(dirname "$0")/../.." && pwd)
plan="$root/course/plan.md"
{
  echo "<!-- Généré par maintainer/scripts/build-map.sh depuis course/plan.md et course/domains/ : ne pas modifier à la main. -->"
  echo "# Carte du cours"
  echo
  echo "## Public cible"
  echo
  awk '/^## /{ f = ($0 == "## Public cible") ; next } f && NF' "$plan"
  echo
  echo "## Domaines, concepts et annexes"
  echo
  echo "Prérequis de chaque concept entre parenthèses."
  echo
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
        if (d != last) { print "- Domaine " d " : " nom[d] " : `" fiche[d] "`"; last = d }
        print "  - Concept " $2 " : " $3 " (" $5 ") : `course/concepts/" $7 "`"
      }
      s == "## Annexes" && /^\| A[0-9]+ \|/ {
        for (i = 2; i <= 4; i++) gsub(/^ +| +$|`/, "", $i)
        t = $3; sub(/ [(:].*/, "", t)
        print "- Annexe " $2 " : " t " : `course/concepts/" $4 "`"
      }
    ' - "$plan"
} > "$root/course/map.md"
