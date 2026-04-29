## T9 Verification Learnings

### apply_patch `*** Move to:` Behavior

- `*** Move to:` actually moves/deletes the original file, it doesn't just rename
- For in-place updates, always use `*** Update File:` with context lines
- `*** Add File:` creates new files only

### Vitest Mock Pattern for Logger

```typescript
// Correct pattern for testing modules that use mocked logger
import { logger } from "@scripts/generate-types/src/utils/logger";
import { vi } from "vitest";

vi.mock("@scripts/generate-types/src/utils/logger", () => ({
  logger: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
    setLevel: vi.fn(),
  },
}));

// In test:
expect(logger.warn).toHaveBeenCalledWith(
  expect.stringContaining("expected text"),
);
```

### Biome Non-null Assertion Fix

- Replace `result!.field` with `result?.field` after `expect(result).not.toBeNull()`
- Biome marks `!` as unsafe; optional chaining is preferred
