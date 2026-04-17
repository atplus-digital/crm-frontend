import { describe, expect, it } from "vitest";

describe("index.ts - entry point", () => {
	it("deve exportar config do config.ts", async () => {
		const indexModule = await import("@scripts/generate-types/index");
		expect(indexModule.config).toBeDefined();
	});
});
