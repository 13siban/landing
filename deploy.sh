#!/usr/bin/env bash
# 빌드 → 서버 /var/www/landing 동기화. nginx는 손댈 필요 없음(정적 파일이라 재시작/리로드 불필요).
set -euo pipefail

SERVER=youngdeploy@34.64.36.137
KEY=~/.ssh/gcp-portfolio
DEST=/var/www/landing/

cd "$(dirname "$0")"

npm run build
rsync -az --delete -e "ssh -i $KEY -o StrictHostKeyChecking=no" out/ "$SERVER:$DEST"

echo "배포 완료 → https://mymyy.com/landing/"
