# NocoBase Schema Exploration — with_skill

## Task
- **Goal**: List all collections in NocoBase and get fields for `t_pessoas`
- **Skill used**: `.agents/skills/nocobase-docs`
- **Date**: 2026-04-10

---

## Step 1: Credentials Check

The skill requires credentials in `.agents/skills/nocobase-docs/.env.local`:

```
CRM_NOCOBASE_URL=
CRM_NOCOBASE_TOKEN=
CRM_NOCOBASE_TIMEOUT_MS=15000
```

**Status**: ❌ Both `CRM_NOCOBASE_URL` and `CRM_NOCOBASE_TOKEN` are empty.

---

## Step 2: Attempted Commands

### `collections` command (list all collections)

```
$ npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts collections
```

**Result**:
```
CREDENTIALS_REQUIRED:["CRM_NOCOBASE_URL","CRM_NOCOBASE_TOKEN"]
Missing required credentials: CRM_NOCOBASE_URL, CRM_NOCOBASE_TOKEN.
The file /home/gustavo_carbonera/%C3%81rea%20de%20trabalho/crm-atplus/.agents/skills/nocobase-docs/.env.local does not exist or is incomplete.
Ask the user for their NocoBase credentials and create /home/gustavo_carbonera/%C3%81rea%20de%20trabalho/crm-atplus/.agents/skills/nocobase-docs/.env.local with:
  CRM_NOCOBASE_URL=https://your-instance.com/api
  CRM_NOCOBASE_TOKEN=your-api-token
  CRM_NOCOBASE_TIMEOUT_MS=15000
```

### `collections --name=t_pessoas` command (get t_pessoas fields)

Same error — the script fails at the credential check before any API call is made.

### `help` command (sanity check)

```
$ npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts help
```

**Result**: ✅ Works without credentials (purely local usage information).

---

## Step 3: Skill Behavior Analysis

The NocoBase documentation skill handled the missing credentials **exactly as documented**:

| Expected behavior | Actual behavior | Match |
|-------------------|----------------|-------|
| Script blocks API calls when credentials are missing | `CREDENTIALS_REQUIRED` error thrown | ✅ |
| Error tells user to populate `.env.local` | Error message includes file path and required vars | ✅ |
| `help` works without credentials | `help` outputs usage info | ✅ |
| No accidental API calls without credentials | No HTTP requests made | ✅ |

### What the skill would have done with valid credentials:

Based on the skill's documented workflow:

1. **`collections`** → Lists all NocoBase collections (equivalent to `GET /collections:list`)
2. **`collections --name=t_pessoas`** → Returns `t_pessoas` collection schema with all field definitions (name, type, required, etc.)

### Example of what success looks like (from skill docs):

```bash
# List all collections
npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts collections

# Get t_pessoas fields
npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts collections --name=t_pessoas

# Or use swagger for full OpenAPI spec
npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts swagger --ns=collections/t_pessoas
```

---

## Step 4: How to Proceed

To complete this task, the user needs to provide:

1. **NocoBase API base URL** — e.g., `https://crm.atplus.cloud/api`
2. **JWT authentication token** — a valid NocoBase auth token

Then create `.agents/skills/nocobase-docs/.env.local`:

```env
CRM_NOCOBASE_URL=https://crm.atplus.cloud/api
CRM_NOCOBASE_TOKEN=eyJhbGci...
CRM_NOCOBASE_TIMEOUT_MS=15000
```

---

## Step 5: Environment Verification

- ✅ `nocobase-client.ts` script exists and is valid TypeScript
- ✅ `node_modules` present (dependencies installed)
- ✅ Skill toolchain fully operational
- ❌ API calls blocked due to missing credentials

---

## Conclusion

The skill executed correctly — it detected the empty credentials and blocked the API calls with a clear, actionable error message. The `CREDENTIALS_REQUIRED` error matches the documented error handling exactly. **No work can proceed without valid credentials**, which is the correct security posture for a read-only API exploration tool.
