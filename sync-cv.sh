#!/usr/bin/env bash
# Sync CV PDF from Dropbox to the website repo and push to GitHub.
# Run from anywhere: ./sync-cv.sh
set -euo pipefail

SRC="$HOME/Library/CloudStorage/Dropbox/CV/Qianhui_Xu_CV.pdf"
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
DEST="$REPO_DIR/assets/Qianhui_Xu_CV.pdf"

if [[ ! -f "$SRC" ]]; then
  echo "ERROR: source CV not found at $SRC" >&2
  exit 1
fi

cp "$SRC" "$DEST"
cd "$REPO_DIR"

if git diff --quiet -- assets/Qianhui_Xu_CV.pdf; then
  echo "CV unchanged. Nothing to push."
  exit 0
fi

git add assets/Qianhui_Xu_CV.pdf
git commit -m "Update CV ($(date +%Y-%m-%d))"
git push origin main
echo "CV synced and pushed."
