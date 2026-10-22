#!/bin/sh
# SessionStart : donne au prof l'état de learner/ (CLAUDE.md, « Au démarrage d'une session »).
nick=$(sed -n 's/^Surnom : \*\*\(.*\)\*\*.*/\1/p' "$CLAUDE_PROJECT_DIR/learner/apprenant.md" 2>/dev/null)
if [ -n "$nick" ] && [ "$nick" != "<surnom>" ]; then
  echo "État de learner/ : apprenant connu, $nick."
else
  echo "État de learner/ : nouvel apprenant (learner/apprenant.md absent ou sans surnom)."
fi
exit 0
