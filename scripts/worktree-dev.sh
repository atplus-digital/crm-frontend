#!/bin/bash
set -e

WORKTREES_BASE="$HOME/.local/share/opencode/worktree"
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEFAULT_PORT=5173

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

find_worktree() {
  local BRANCH_NAME="$1"

  for hash_dir in "$WORKTREES_BASE"/*/; do
    if [ -d "$hash_dir" ]; then
      local WT_PATH="${hash_dir}${BRANCH_NAME}"
      if [ -d "$WT_PATH" ]; then
        echo "$WT_PATH"
        return 0
      fi
    fi
  done

  return 1
}

setup_worktree() {
  local WORKTREE_PATH="$1"

  # Cria symlink do node_modules se nao existir
  if [ ! -e "$WORKTREE_PATH/node_modules" ]; then
    log_info "Criando symlink do node_modules..."
    ln -sf "$PROJECT_ROOT/node_modules" "$WORKTREE_PATH/node_modules"
  fi

  # Copia .env se existir no projeto principal e nao na worktree
  if [ -f "$PROJECT_ROOT/.env" ] && [ ! -f "$WORKTREE_PATH/.env" ]; then
    log_info "Copiando .env..."
    cp "$PROJECT_ROOT/.env" "$WORKTREE_PATH/.env"
  fi

  # Copia .env.local se existir no projeto principal
  if [ -f "$PROJECT_ROOT/.env.local" ] && [ ! -f "$WORKTREE_PATH/.env.local" ]; then
    log_info "Copiando .env.local..."
    cp "$PROJECT_ROOT/.env.local" "$WORKTREE_PATH/.env.local"
  fi
}

start_server() {
  local BRANCH_NAME="$1"
  local PORT="${2:-$DEFAULT_PORT}"

  if [ -z "$BRANCH_NAME" ]; then
    log_error "Uso: $0 start <worktree-name> [port]"
    exit 1
  fi

  local WORKTREE_PATH=$(find_worktree "$BRANCH_NAME")

  if [ -z "$WORKTREE_PATH" ]; then
    log_error "Worktree '$BRANCH_NAME' nao encontrada"
    exit 1
  fi

  # Setup da worktree (symlinks + env)
  setup_worktree "$WORKTREE_PATH"

  local PID_FILE="$WORKTREE_PATH/.dev-server.pid"

  if [ -f "$PID_FILE" ]; then
    local PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
      log_warn "Servidor ja esta rodando (PID: $PID) na porta $PORT"
      log_info "Acesse: http://localhost:$PORT"
      exit 0
    else
      rm -f "$PID_FILE"
    fi
  fi

  log_info "Iniciando dev server para '$BRANCH_NAME' na porta $PORT..."
  cd "$WORKTREE_PATH"

  pnpm dev --port "$PORT" > "$WORKTREE_PATH/.dev-server.log" 2>&1 &
  local PID=$!
  echo "$PID" > "$PID_FILE"

  sleep 2

  if ps -p "$PID" > /dev/null 2>&1; then
    log_success "Servidor iniciado (PID: $PID)"
    log_info "Logs: $WORKTREE_PATH/.dev-server.log"
    log_info "Acesse: http://localhost:$PORT"
  else
    log_error "Falha ao iniciar servidor. Verifique os logs:"
    cat "$WORKTREE_PATH/.dev-server.log"
    rm -f "$PID_FILE"
    exit 1
  fi
}

stop_server() {
  local BRANCH_NAME="$1"

  if [ -z "$BRANCH_NAME" ]; then
    log_error "Uso: $0 stop <worktree-name>"
    exit 1
  fi

  local WORKTREE_PATH=$(find_worktree "$BRANCH_NAME")

  if [ -z "$WORKTREE_PATH" ]; then
    log_error "Worktree '$BRANCH_NAME' nao encontrada"
    exit 1
  fi

  local PID_FILE="$WORKTREE_PATH/.dev-server.pid"

  if [ ! -f "$PID_FILE" ]; then
    log_warn "Nenhum servidor rodando para '$BRANCH_NAME'"
    exit 0
  fi

  local PID=$(cat "$PID_FILE")

  if ps -p "$PID" > /dev/null 2>&1; then
    log_info "Parando servidor (PID: $PID)..."
    kill "$PID" 2>/dev/null || true
    sleep 1
    if ps -p "$PID" > /dev/null 2>&1; then
      kill -9 "$PID" 2>/dev/null || true
    fi
    log_success "Servidor parado"
  else
    log_warn "Servidor nao estava rodando"
  fi

  rm -f "$PID_FILE"
}

list_all() {
  log_info "Worktrees e servidores:"
  echo ""

  echo "Git worktrees:"
  git worktree list | while read -r path branch rest; do
    echo "  - $branch -> $path"
  done

  echo ""
  echo "Servidores dev:"

  local FOUND=0

  for hash_dir in "$WORKTREES_BASE"/*/; do
    if [ -d "$hash_dir" ]; then
      for wt_dir in "$hash_dir"*/; do
        if [ -d "$wt_dir" ]; then
          local WT_NAME=$(basename "$wt_dir")
          local PID_FILE="$wt_dir/.dev-server.pid"

          if [ -f "$PID_FILE" ]; then
            local PID=$(cat "$PID_FILE")
            if ps -p "$PID" > /dev/null 2>&1; then
              local PORT=$(grep -oP 'Local:\s*\K[0-9]+' "$wt_dir/.dev-server.log" 2>/dev/null | head -1 || echo "?")
              echo "  - $WT_NAME -> http://localhost:$PORT (PID: $PID)"
              FOUND=1
            else
              echo "  - $WT_NAME -> (servidor morto, PID: $PID)"
              FOUND=1
            fi
          fi
        fi
      done
    fi
  done

  if [ "$FOUND" -eq 0 ]; then
    echo "  (nenhum servidor rodando)"
  fi
}

stop_all() {
  log_info "Parando todos os servidores..."

  local COUNT=0

  for hash_dir in "$WORKTREES_BASE"/*/; do
    if [ -d "$hash_dir" ]; then
      for wt_dir in "$hash_dir"*/; do
        if [ -d "$wt_dir" ]; then
          local WT_NAME=$(basename "$wt_dir")
          local PID_FILE="$wt_dir/.dev-server.pid"

          if [ -f "$PID_FILE" ]; then
            local PID=$(cat "$PID_FILE")
            if ps -p "$PID" > /dev/null 2>&1; then
              kill "$PID" 2>/dev/null || true
              COUNT=$((COUNT + 1))
            fi
            rm -f "$PID_FILE"
          fi
        fi
      done
    fi
  done

  log_success "$COUNT servidor(es) parado(s)"
}

case "$1" in
  start)
    start_server "$2" "$3"
    ;;
  stop)
    stop_server "$2"
    ;;
  stop-all)
    stop_all
    ;;
  list)
    list_all
    ;;
  setup)
    if [ -z "$2" ]; then
      log_error "Uso: $0 setup <worktree-name>"
      exit 1
    fi
    WORKTREE_PATH=$(find_worktree "$2")
    if [ -z "$WORKTREE_PATH" ]; then
      log_error "Worktree '$2' nao encontrada"
      exit 1
    fi
    setup_worktree "$WORKTREE_PATH"
    log_success "Worktree configurada!"
    ;;
  *)
    echo "Gerenciador de servidores dev para worktrees"
    echo ""
    echo "Uso:"
    echo "  $0 start <worktree> [port]    - Inicia dev server na worktree"
    echo "  $0 stop <worktree>            - Para dev server da worktree"
    echo "  $0 stop-all                   - Para todos os servidores"
    echo "  $0 list                       - Lista worktrees e servidores"
    echo "  $0 setup <worktree>           - Cria symlinks (node_modules, .env)"
    echo ""
    echo "Exemplos:"
    echo "  $0 start gentle-engine 5173"
    echo "  $0 setup gentle-engine"
    echo "  $0 list"
    echo "  $0 stop gentle-engine"
    ;;
esac
