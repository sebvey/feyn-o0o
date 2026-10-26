#!/bin/sh
# SessionStart : donne au prof l'état de learner/ (CLAUDE.md, « Au démarrage d'une session »).
nick=$(sed -n 's/^Surnom : \*\*\(.*\)\*\*.*/\1/p' "$CLAUDE_PROJECT_DIR/learner/apprenant.md" 2>/dev/null)
if [ -n "$nick" ] && [ "$nick" != "<surnom>" ]; then
  echo "État de learner/ : apprenant connu, $nick."
  for f in observations.md parcours.md; do
    [ -e "$CLAUDE_PROJECT_DIR/learner/$f" ] || echo "Fichier absent : learner/$f."
  done
  echo "Domaines du cours (course/plan.md) :"
  awk '/^## /{ f = ($0 == "## Domaines du cours") } f' "$CLAUDE_PROJECT_DIR/course/plan.md" |
    sed -n 's/^\([0-9]*\)\. \*\*\(.*\)\*\* (\([^)]*\)).*/\1. \2 (\3)/p'
else
  echo "État de learner/ : nouvel apprenant (learner/apprenant.md absent ou sans surnom)."
  echo "En session de cours, suis le skill learner-onboarding ci-dessous, sans le recharger :"
  awk 'n >= 2; /^---$/ { n++ }' "$CLAUDE_PROJECT_DIR/.claude/skills/learner-onboarding/SKILL.md"
fi
exit 0
