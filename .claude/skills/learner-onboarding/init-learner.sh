#!/bin/sh
# Crée les fichiers absents de learner/ depuis course/templates/learner/ ; n'écrase rien.
# Usage : init-learner.sh [surnom]
root=$(cd "$(dirname "$0")/../../.." && pwd)
tpl="$root/course/templates/learner"
dir="$root/learner"
nick=${1:-<surnom>}
mkdir -p "$dir"
for f in apprenant.md observations.md parcours.md; do
  [ -e "$dir/$f" ] && continue
  if [ "$f" = parcours.md ]; then
    awk -v day="$(date +%F)" '
      FNR == NR { if ($0 ~ /^\| [0-9]+ \|/) { split($0, c, / *\| */); rows = rows "| " c[2] " | " c[3] " | à faire |\n" } next }
      /^\| <une ligne par concept/ { printf "%s", rows; next }
      /^- <AAAA-MM-JJ>/ { print "- " day ", session 1 : accueil."; next }
      { print }' "$root/course/plan.md" "$tpl/$f"
  else
    cat "$tpl/$f"
  fi | sed "s/<surnom>/$nick/g" > "$dir/$f"
  echo "créé : learner/$f"
done
exit 0
