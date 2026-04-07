import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("env", () => {
	beforeEach(() => {
		vi.resetModules();
		vi.stubEnv("CRM_NOCOBASE_URL", "https://example.com/api");
	});

	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it("deve respeitar valores configurados em import.meta.env", async () => {
		vi.stubEnv("SERVER_URL", "https://server.example.com");
		vi.stubEnv("VITE_LOCAL_STORAGE_BASE_KEY", "custom-app");

		const { env } = await import("./env");

		expect(env.CRM_NOCOBASE_URL).toBe("https://example.com/api");
		expect(env.SERVER_URL).toBe("https://server.example.com");
		expect(env.VITE_LOCAL_STORAGE_BASE_KEY).toBe("custom-app");
	});

	it("deve aplicar o valor padrão para VITE_LOCAL_STORAGE_BASE_KEY", async () => {
		const { env } = await import("./env");

		expect(env.VITE_LOCAL_STORAGE_BASE_KEY).toBe("crm-atplus");
	});
});
