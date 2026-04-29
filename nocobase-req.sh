#!/usr/bin/env bash
set -euo pipefail

# Carrega variáveis do projeto (.env.local tem prioridade sobre .env).
if [[ -f ".env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source ".env"
  set +a
fi

if [[ -f ".env.local" ]]; then
  set -a
  # shellcheck disable=SC1091
  source ".env.local"
  set +a
fi

NOCOBASE_API_URL="${NOCOBASE_API_URL:-${CRM_NOCOBASE_URL:-}}"
NOCOBASE_TOKEN="${NOCOBASE_TOKEN:-${CRM_NOCOBASE_TOKEN:-}}"
CUSTOM_REQUEST_KEY="${CUSTOM_REQUEST_KEY:-qbk10nf76um}"

if [[ -z "${NOCOBASE_API_URL}" ]]; then
  echo "Erro: defina CRM_NOCOBASE_URL (ou NOCOBASE_API_URL)." >&2
  exit 1
fi

if [[ -z "${NOCOBASE_TOKEN}" ]]; then
  echo "Erro: defina CRM_NOCOBASE_TOKEN (ou NOCOBASE_TOKEN)." >&2
  exit 1
fi

NOCOBASE_API_URL="${NOCOBASE_API_URL%/}"

curl -sS -X POST \
  "${NOCOBASE_API_URL}/customRequests:send/${CUSTOM_REQUEST_KEY}" \
  -H "Authorization: Bearer ${NOCOBASE_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "currentRecord": {
      "data": {
        "id": 135,
        "f_log_level": "error"
      }
    }
  }' | jq
