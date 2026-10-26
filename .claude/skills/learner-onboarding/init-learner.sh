#!/bin/sh
# Crée les fichiers absents de learner/ depuis course/templates/learner/ ; n'écrase rien.
# Usage : init-learner.sh [surnom] [rôle] [connaissances]
root=$(cd "$(dirname "$0")/../../.." && pwd)
tpl="$root/course/templates/learner"
dir="$root/learner"
NICK=${1:-<surnom>} ROLE=$2 KNOWN=$3
export NICK ROLE KNOWN
mkdir -p "$dir"
for f in apprenant.md observations.md parcours.md; do
  [ -e "$dir/$f" ] && continue
  if [ "$f" = parcours.md ]; then
    awk -v day="$(date +%F)" '
      FNR == NR { if ($0 ~ /^\| [0-9]+ \|/) { split($0, c, / *\| */); rows = rows "| " c[2] " | " c[3] " | à faire |\n" } next }
      /^\| <une ligne par concept/ { printf "%s", rows; next }
      /^<Le prochain concept/ && ENVIRON["ROLE"] != "" {
        print "Concept 0, premier message : annonce du parti pris des sprints, puis 0a1 (l'équipe en bref)."; next }
      /^- <AAAA-MM-JJ>/ { print "- " day ", session 1 : accueil."; next }
      { print }' "$root/course/plan.md" "$tpl/$f"
  else
    awk '
      BEGIN { r = ENVIRON["ROLE"]; k = ENVIRON["KNOWN"]; sub(/\.$/, "", r); sub(/\.$/, "", k) }
      /^- Rôle : </ && ENVIRON["ROLE"] != "" { print "- Rôle : " r "."; next }
      /^- Avant le parcours : </ && ENVIRON["KNOWN"] != "" { print "- Avant le parcours : " k "."; next }
      { print }' "$tpl/$f"
  fi | awk '{ gsub(/<surnom>/, ENVIRON["NICK"]) } 1' > "$dir/$f"
  echo "créé : learner/$f"
done
exit 0
