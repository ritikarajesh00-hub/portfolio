#!/usr/bin/env bash
#
# Build the static export and publish it to the gh-pages branch.
#
# One-time setup on GitHub:
#   Settings -> Pages -> Source: "Deploy from a branch" -> gh-pages -> / (root)
#
# Usage:
#   npm run deploy            build and push
#   DRY_RUN=1 npm run deploy  build and stage everything, but do not push
#
set -euo pipefail

BRANCH="gh-pages"
WORKTREE=".deploy-worktree"
BASE_PATH="/portfolio"

cd "$(git rev-parse --show-toplevel)"

if [ -n "$(git status --porcelain)" ]; then
  echo "warning: you have uncommitted changes; deploying the build from your working tree." >&2
fi

echo "==> Building static export (basePath=$BASE_PATH)"
NEXT_PUBLIC_BASE_PATH="$BASE_PATH" npm run build

# A worktree lets us commit to gh-pages without ever checking it out over main.
echo "==> Preparing $BRANCH worktree"
git worktree remove --force "$WORKTREE" 2>/dev/null || true
rm -rf "$WORKTREE"

if git ls-remote --exit-code --heads origin "$BRANCH" >/dev/null 2>&1; then
  git fetch --quiet origin "$BRANCH"
  git worktree add --quiet "$WORKTREE" -B "$BRANCH" "origin/$BRANCH"
else
  echo "    $BRANCH does not exist yet — creating it as an orphan branch"
  git worktree add --quiet --detach "$WORKTREE"
  git -C "$WORKTREE" checkout --quiet --orphan "$BRANCH"
  git -C "$WORKTREE" rm -r --cached . --quiet >/dev/null 2>&1 || true
fi

# Replace the branch contents wholesale, so deleted files really disappear.
echo "==> Copying out/ into $BRANCH"
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R out/. "$WORKTREE"/

git -C "$WORKTREE" add -A

if git -C "$WORKTREE" diff --cached --quiet; then
  echo "==> No changes to deploy."
else
  git -C "$WORKTREE" commit --quiet -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  if [ "${DRY_RUN:-}" = "1" ]; then
    echo "==> DRY_RUN=1 — committed to $BRANCH locally, not pushing."
    git -C "$WORKTREE" show --stat --oneline HEAD | head -5
  else
    echo "==> Pushing $BRANCH"
    git -C "$WORKTREE" push --quiet -u origin "$BRANCH"
    echo "==> Live shortly at https://ritikarajesh00-hub.github.io$BASE_PATH/"
  fi
fi

git worktree remove --force "$WORKTREE"
