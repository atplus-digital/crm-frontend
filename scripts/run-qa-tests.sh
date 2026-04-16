#!/bin/bash
set -e

echo "=========================================="
echo "QA Tests - Contract Details Page"
echo "=========================================="
echo ""

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

EVIDENCE_DIR=".sisyphus/evidence"
REPORT_FILE="$EVIDENCE_DIR/task-13-qa-report.md"

mkdir -p "$EVIDENCE_DIR"

if ! curl -s http://localhost:5173 > /dev/null; then
    echo -e "${YELLOW}⚠ Dev server not running on localhost:5173${NC}"
    echo "Starting dev server..."
    pnpm dev &
    DEV_PID=$!
    
    echo "Waiting for server..."
    for i in {1..30}; do
        if curl -s http://localhost:5173 > /dev/null; then
            echo -e "${GREEN}✓ Server is ready${NC}"
            break
        fi
        sleep 1
    done
else
    echo -e "${GREEN}✓ Dev server is running${NC}"
    DEV_PID=""
fi

echo ""
echo "Running Playwright tests..."
echo "----------------------------------------"

if npx playwright test qa-tests/contract-details.spec.ts --project=chromium --reporter=list; then
    echo -e "${GREEN}✓ All QA tests passed${NC}"
    TEST_STATUS="PASS"
else
    echo -e "${RED}✗ Some QA tests failed${NC}"
    TEST_STATUS="FAIL"
fi

echo ""
echo "Generating QA report..."
echo "----------------------------------------"

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

cat > "$REPORT_FILE" << EOF
# QA Report - Contract Details Page

## Execution Summary
- **Date:** $TIMESTAMP
- **Total Scenarios:** 10
- **Status:** $TEST_STATUS

## Scenarios Executed

### Functional Tests
| # | Scenario | Status | Evidence |
|---|----------|--------|----------|
| 1 | Page loads | - | task-13-page-load.png |
| 2 | Detalhes tab | - | task-13-detalhes-tab.png |
| 3 | Móvel tab | - | task-13-movel-tab.png |
| 4 | Negociações tab | - | task-13-negociacoes-tab.png |
| 5 | Atendimentos tab | - | task-13-atendimentos-tab.png |
| 6 | Registros tab | - | task-13-registros-tab.png |

### Error Handling
| # | Scenario | Status | Evidence |
|---|----------|--------|----------|
| 7 | Error state | - | task-13-error-state.png |

### Empty States
| # | Scenario | Status | Evidence |
|---|----------|--------|----------|
| 8 | Empty state | - | task-13-empty-state.png |

### Responsive
| # | Scenario | Status | Evidence |
|---|----------|--------|----------|
| 9 | Mobile tabs | - | task-13-mobile-tabs.png |
| 10 | Responsive grid | - | task-13-responsive-grid.png |

## Evidence Files
All screenshots saved in: \`$EVIDENCE_DIR/\`

## Test Results
See Playwright output above for detailed test results.

## Conclusion
QA execution completed at $TIMESTAMP.
EOF

echo -e "${GREEN}✓ Report generated: $REPORT_FILE${NC}"

# Cleanup
if [ -n "$DEV_PID" ]; then
    echo ""
    echo "Stopping dev server..."
    kill $DEV_PID 2>/dev/null || true
fi

echo ""
echo "=========================================="
echo "QA Tests Complete"
echo "=========================================="
echo ""
echo "Evidence directory: $EVIDENCE_DIR"
echo "Report file: $REPORT_FILE"
echo ""
