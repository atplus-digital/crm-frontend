import { resolveEnvConfig } from "@scripts/generate-types/src/utils/load-config";
import { describe, expect, it, vi } from "vitest";
import type { ScriptConfig } from "../../src/@types/script";

vi.mock("dotenv", () => ({
	config: vi.fn(),
}));

describe("resolveEnvConfig", () => {
	describe("valid environment variables", () => {
		it("returns EnvConfig with normalized baseUrl", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api/";
			process.env.CRM_NOCOBASE_TOKEN = "test-token";
			process.env.CRM_NOCOBASE_TIMEOUT_MS = "30000";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			const result = resolveEnvConfig(scriptConfig);

			expect(result.baseUrl).toBe("https://example.com/api");
			expect(result.token).toBe("test-token");
			expect(result.timeoutMs).toBe(30000);
		});

		it("preserves URL without trailing slash", () => {
			process.env.CRM_NOCOBASE_URL = "https://api.example.com";
			process.env.CRM_NOCOBASE_TOKEN = "token123";
			process.env.CRM_NOCOBASE_TIMEOUT_MS = "15000";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			const result = resolveEnvConfig(scriptConfig);

			expect(result.baseUrl).toBe("https://api.example.com");
		});
	});

	describe("environment variable validation", () => {
		it("throws error when CRM_NOCOBASE_URL is missing", () => {
			delete process.env.CRM_NOCOBASE_URL;
			process.env.CRM_NOCOBASE_TOKEN = "token";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			expect(() => resolveEnvConfig(scriptConfig)).toThrow(/CRM_NOCOBASE_URL/);
		});

		it("throws error when CRM_NOCOBASE_URL is invalid", () => {
			process.env.CRM_NOCOBASE_URL = "not-a-valid-url";
			process.env.CRM_NOCOBASE_TOKEN = "token";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			expect(() => resolveEnvConfig(scriptConfig)).toThrow(/CRM_NOCOBASE_URL/);
		});

		it("throws error when CRM_NOCOBASE_TOKEN is missing", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api";
			delete process.env.CRM_NOCOBASE_TOKEN;

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			expect(() => resolveEnvConfig(scriptConfig)).toThrow(
				/CRM_NOCOBASE_TOKEN/,
			);
		});

		it("throws error when CRM_NOCOBASE_TOKEN is empty", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api";
			process.env.CRM_NOCOBASE_TOKEN = "   ";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			expect(() => resolveEnvConfig(scriptConfig)).toThrow(
				/CRM_NOCOBASE_TOKEN/,
			);
		});

		it("coerces CRM_NOCOBASE_TIMEOUT_MS from string to number", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api";
			process.env.CRM_NOCOBASE_TOKEN = "token";
			process.env.CRM_NOCOBASE_TIMEOUT_MS = "45000";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			const result = resolveEnvConfig(scriptConfig);

			expect(result.timeoutMs).toBe(45000);
		});

		it("uses default timeout when CRM_NOCOBASE_TIMEOUT_MS is not set", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api";
			process.env.CRM_NOCOBASE_TOKEN = "token";
			delete process.env.CRM_NOCOBASE_TIMEOUT_MS;

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 20_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			const result = resolveEnvConfig(scriptConfig);

			expect(result.timeoutMs).toBe(20_000);
		});

		it("throws error when timeout is zero", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api";
			process.env.CRM_NOCOBASE_TOKEN = "token";
			process.env.CRM_NOCOBASE_TIMEOUT_MS = "0";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			expect(() => resolveEnvConfig(scriptConfig)).toThrow(
				/CRM_NOCOBASE_TIMEOUT_MS/,
			);
		});

		it("throws error when timeout is negative", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api";
			process.env.CRM_NOCOBASE_TOKEN = "token";
			process.env.CRM_NOCOBASE_TIMEOUT_MS = "-1";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			expect(() => resolveEnvConfig(scriptConfig)).toThrow(
				/CRM_NOCOBASE_TIMEOUT_MS/,
			);
		});
	});

	describe("multiple trailing slashes", () => {
		it("removes multiple trailing slashes from baseUrl", () => {
			process.env.CRM_NOCOBASE_URL = "https://example.com/api///";
			process.env.CRM_NOCOBASE_TOKEN = "token";
			process.env.CRM_NOCOBASE_TIMEOUT_MS = "30000";

			const scriptConfig: ScriptConfig = {
				outputDir: "./generated",
				splitCollections: [],
				datasources: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				lockWorkspaceFolder: true,
				baseInterfaceNaming: { prefix: "", suffix: "" },
			};

			const result = resolveEnvConfig(scriptConfig);

			expect(result.baseUrl).toBe("https://example.com/api");
		});
	});
});
