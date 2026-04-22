---
name: crm-page-crawl
description: 'Crawl CRM/NocoBase admin pages end-to-end and extract a replication-ready package: UI schema, fields, filters, actions, datasource/collection mapping, API contracts, and list/detail behavior. Use this skill whenever the user asks to copy, rebuild, mirror, or reverse-engineer a CRM page, tab, popup, modal, or record flow from URLs/screenshots, even if they do not explicitly ask to "crawl".'
argument-hint: "Module/page to replicate + list URL + detail URL(s) or screenshot"
user-invocable: true
disable-model-invocation: false
---

# CRM Page Crawl For Replication

## Mission

Deliver a replication-ready spec for a CRM/NocoBase screen so another engineer can rebuild it with minimal guesswork.

## Primary Deliverables

Always save outputs under `/crawl/[nome-da-pagina]/` and produce:

1. `/crawl/[nome-da-pagina]/replication-report.md`
2. `/crawl/[nome-da-pagina]/replication-spec.json`
3. `/crawl/[nome-da-pagina]/evidence/screenshots/` (visual proof of crawled screens)

Default depth is `complete` (full extraction + validation).

Use kebab-case for `[nome-da-pagina]` (example: `transferencia-titularidade`).

## When To Use

- User asks to recreate a CRM/NocoBase admin screen from existing UI or URL.
- User provides one or more URLs (tab, popup, record view) and wants all required data.
- User asks to map list + detail/popup flow before implementing frontend.
- User asks for collection/datasource discovery before coding.
- User provides screenshot + context and asks to replicate behavior.

## Do Not Use Alone

If the user only asks for a tiny isolated change (for example, rename one label), do not run full crawl by default. Confirm whether they want full replication scope.

## Input Contract (Collect First)

Capture or confirm these inputs before crawling:

1. Target module/page name.
2. List URL.
3. Detail URL template or sample record URL.
4. Output folder name slug (`[nome-da-pagina]` in kebab-case).
5. Extraction depth (`complete` by default; `fast` only if user asks).
6. Auth method preference:

- try token from .env.local first
- ask user credentials only if token-based access fails

7. Scope boundaries: list only, detail only, or both.
8. Role/profile to validate (if role-based UI matters).
9. Screenshot policy (default: capture key states with sensitive data redacted).

If any mandatory input is missing, ask a concise clarification question first.

## Execution Policy

- Prefer deterministic evidence over assumptions.
- Never expose tokens, cookies, credentials, or personal data in outputs.
- For every inferred mapping, mark confidence as `low|medium|high` with rationale.
- If something cannot be observed, record it explicitly in `gaps` instead of guessing.
- Always capture screenshots as evidence for list/detail states and key actions.
- Redact sensitive information in screenshots before exporting deliverables.

## Procedure

### 0. Prepare output folder

- Create `/crawl/[nome-da-pagina]/` before crawling.
- Ensure this structure exists:
  - `/crawl/[nome-da-pagina]/replication-report.md`
  - `/crawl/[nome-da-pagina]/replication-spec.json`
  - `/crawl/[nome-da-pagina]/evidence/screenshots/`
- Never write crawl artifacts outside this folder.

### 1. Validate scope and access

- Confirm what must be replicated: list only, detail only, or both.
- Confirm whether popups, custom actions, and status transitions are in scope.
- Confirm target role/profile if UI is permission-sensitive.

### 2. Authenticate safely

- Look for token/base URL in `.env.local` and project env files.
- Attempt authenticated access with existing token/session.
- If access fails, ask user for credentials/session guidance.
- Mask secrets in logs and in final report.

### 3. Crawl list page

- Capture title, route, breadcrumbs, and tab metadata.
- Capture columns: label, key, source field, formatter, sortability, visibility rules.
- Capture filters: type, operators, defaults, query param mapping.
- Capture actions: create, edit, view, export, bulk actions, row actions.
- Capture pagination, default sort, empty/loading/error states.

### 4. Crawl detail/popup page

- Capture section/group layout and field ordering.
- Map each field: label, data key, component type, read/write mode, requiredness.
- Detect computed fields, relation displays, and conditional visibility.
- Capture actions and transitions (approve/reject/next step).
- Capture related tabs: comments, attachments, audit/history, linked records.

### 5. Capture screenshot evidence

- Create `/crawl/[nome-da-pagina]/evidence/screenshots/` and save screenshots using deterministic names.
- Mandatory screenshots:
  - `list-default.png`
  - `list-filters-open.png`
  - `list-row-selected.png` (when applicable)
  - `detail-overview.png`
  - `detail-sections.png`
  - `detail-related-tabs.png` (when applicable)
  - `action-before-submit.png` and `action-after-submit.png` for critical transitions
- For long pages, capture full page plus focused crops for important areas.
- For each screenshot, record page state and what evidence it supports.

### 6. Extract network and data contracts

- Inspect requests triggered by list load, filter change, row open, and action submit.
- For each request, capture:
  - endpoint and method
  - auth requirements
  - query/body schema
  - response shape and pagination format
  - observed error codes/messages
- Map each payload field to list/detail/action UI elements.

### 7. Build datasource and collection inventory

- For every UI field, map origin:
  - primary collection/table
  - related collections
  - lookup/reference datasets
- Identify joins/relations and cardinality assumptions.
- Mark unknown fields as `needs_confirmation` with evidence note.

### 8. Produce replication package

- Write `/crawl/[nome-da-pagina]/replication-report.md` with:
  - page inventory
  - UI schema
  - field dictionary
  - datasource/collection map
  - API contract map
  - behavior rules and edge cases
  - screenshot evidence map
  - implementation checklist
- Export `/crawl/[nome-da-pagina]/replication-spec.json` with machine-readable sections:
  - `scope`
  - `pages.list`
  - `pages.detail`
  - `evidence.screenshots`
  - `fields`
  - `datasources`
  - `collections`
  - `endpoints`
  - `businessRules`
  - `checklist`
  - `gaps`
  - `coverage`

### 9. Verify completeness

- Ensure every visible UI element maps to a data source.
- Ensure every action has request/response contract coverage.
- Ensure every critical list/detail/action state has screenshot evidence.
- Ensure list/detail coverage matrix has no blank mandatory entries.
- If evidence is missing, record exact gaps and next data to collect.

## Coverage Matrix (Mandatory)

Before finalizing, check all items:

1. All visible list columns mapped to source field and collection.
2. All list filters mapped to request parameters/operators.
3. All detail fields mapped to payload keys and editability rules.
4. All action buttons mapped to endpoint + method + expected result.
5. All transitions/status changes mapped to business rules.
6. All critical states linked to screenshot evidence.
7. All unknowns captured in `gaps` with owner/next-step suggestion.

## Decision Points

- If auth token works: continue with automated crawl.
- If auth token fails: ask for credentials/session instructions.
- If detail URL depends on record id: open list first and derive a valid sample record.
- If endpoint names are obfuscated: infer by payload keys and relation usage, and mark confidence level.
- If page contains role-based conditional UI: capture behavior per visible role and mark unverified roles.

## Quality Criteria

A run is complete only when all checks pass:

- List schema complete (columns, filters, actions, pagination).
- Detail schema complete (sections, fields, actions, relations).
- Datasource/collection map complete for all surfaced fields.
- API contracts captured for read and write paths.
- Screenshot evidence complete for list, detail, and critical actions.
- Open questions explicitly listed with missing evidence.

## Report Template (replication-report.md)

Use this structure:

1. Scope and access notes
2. List page breakdown
3. Detail/popup breakdown
4. Field dictionary (UI -> data key -> source collection)
5. Datasource/collection inventory
6. API endpoint map
7. Screenshot evidence map
8. Business rules and transitions
9. Coverage matrix and confidence notes
10. Replication checklist
11. Gaps and validation needs

## JSON Template (replication-spec.json)

Use this skeleton:

```json
{
  "scope": {
    "module": "",
    "listUrl": "",
    "detailUrls": [],
    "authMode": "env-token|credentials",
    "depth": "complete|fast"
  },
  "pages": {
    "list": {
      "title": "",
      "route": "",
      "columns": [],
      "filters": [],
      "actions": [],
      "pagination": {},
      "defaultSort": {}
    },
    "detail": {
      "title": "",
      "sections": [],
      "fields": [],
      "actions": [],
      "relatedTabs": []
    }
  },
  "evidence": {
    "screenshots": [
      {
        "file": "/crawl/[nome-da-pagina]/evidence/screenshots/list-default.png",
        "page": "list|detail|popup",
        "state": "",
        "supports": ["column-mapping", "filter-behavior"],
        "redacted": true,
        "notes": ""
      }
    ]
  },
  "fields": [],
  "datasources": [],
  "collections": [],
  "endpoints": [],
  "businessRules": [],
  "checklist": [],
  "coverage": {
    "columnsMapped": 0,
    "filtersMapped": 0,
    "fieldsMapped": 0,
    "actionsMapped": 0,
    "unmappedItems": []
  },
  "gaps": []
}
```

## Example Prompts

- "Crawl this CRM list and detail page and generate a replication package with screenshots for transferencia de titularidade."
- "Map all collections and datasource dependencies for this NocoBase tab and popup with confidence levels and visual evidence."
- "Extract list/detail UI schema, API contracts, and screen captures so I can rebuild this module in React with parity checklist."
- "Tenho a URL da aba e do popup no NocoBase. Quero um spec completo com prints para replicar essa tela no CRM novo."
