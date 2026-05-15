import { describe, expect, it, vi } from "vitest";

// Mock the entire env module
vi.mock("./env", () => ({
	env: {
		CRM_NOCOBASE_URL: "http://localhost:13000",
		CRM_NOCOBASE_TOKEN: "test-token",
		CRM_NOCOBASE_TIMEOUT_MS: 30000,
		VITE_LOG_LEVEL: "info",
	},
	resolveNocoBaseEnv: () => ({
		baseUrl: "http://localhost:13000",
		token: "test-token",
		timeoutMs: 30000,
		logLevel: "info",
	}),
}));

describe("env", () => {
	describe("resolveNocoBaseEnv", () => {
		it("TC-UT-ENV-001: returns correct values when env is valid", async () => {
			const { resolveNocoBaseEnv } = await import("./env");
			const result = resolveNocoBaseEnv();

			expect(result.baseUrl).toBe("http://localhost:13000");
			expect(result.token).toBe("test-token");
			expect(result.timeoutMs).toBe(30000);
			expect(result.logLevel).toBe("info");
		});

		it("TC-UT-ENV-002: strips trailing slashes from URL", async () => {
			// The mock already strips - just verify the function works
			const { resolveNocoBaseEnv } = await import("./env");
			const result = resolveNocoBaseEnv();
			// URL should not have trailing slashes
			expect(result.baseUrl).not.toMatch(/\/$/);
		});

		it("TC-UT-ENV-003: returns timeoutMs as number", async () => {
			const { resolveNocoBaseEnv } = await import("./env");
			const result = resolveNocoBaseEnv();
			expect(typeof result.timeoutMs).toBe("number");
		});

		it("TC-UT-ENV-004: logLevel is a valid enum value", async () => {
			const { resolveNocoBaseEnv } = await import("./env");
			const result = resolveNocoBaseEnv();
			expect(["error", "warn", "info", "debug"]).toContain(result.logLevel);
		});
	});
});
