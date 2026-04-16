import type { ScriptConfig } from "@scripts/generate-types/src/@types/script";
import { parseConfig } from "@scripts/generate-types/src/utils/config";
import { describe, expect, it, vi } from "vitest";

vi.mock("dotenv", () => ({
	config: vi.fn(),
}));

vi.mock("@scripts/generate-types/src/utils/load-config", () => ({
	resolveEnvConfig: vi.fn((scriptConfig: ScriptConfig) => ({
		baseUrl: "https://example.com/api",
		token: "test-token",
		timeoutMs: scriptConfig.requestTimeoutMs ?? 15_000,
	})),
}));

process.env.CRM_NOCOBASE_URL = "https://example.com/api";
process.env.CRM_NOCOBASE_TOKEN = "test-token";
process.env.CRM_NOCOBASE_TIMEOUT_MS = "30000";

describe("parseConfig", () => {
	describe("valid minimal config", () => {
		it("returns RuntimeConfig with defaults merged", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			const result = parseConfig(scriptConfig);

			expect(result.outputDir).toBe("./generated");
			expect(result.splitCollections).toEqual([]);
			expect(result.verbose).toBe(false);
			expect(result.defaultEnvPath).toBe(".env.local");
			expect(result.requestTimeoutMs).toBe(15_000);
			expect(result.requestConcurrency).toBe(5);
			expect(result.lockWorkspaceFolder).toBe(true);
			expect(result.baseInterfaceNaming).toEqual({
				prefix: "",
				suffix: "",
			});
			expect(result.baseUrl).toBe("https://example.com/api");
			expect(result.token).toBe("test-token");
			expect(result.timeoutMs).toBe(15_000);
		});
	});

	describe("validation errors", () => {
		it("throws error when requestTimeoutMs is <= 0", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				requestTimeoutMs: 0,
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/requestTimeoutMs/);
		});

		it("throws error when requestTimeoutMs is negative", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				requestTimeoutMs: -1,
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/requestTimeoutMs/);
		});

		it("throws error when requestConcurrency is < 1", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				requestConcurrency: 0,
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/requestConcurrency/);
		});

		it("throws error when outputDir is empty string", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				outputDir: "",
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/outputDir/);
		});

		it("throws error when outputDir is whitespace only", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				outputDir: "   ",
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/outputDir/);
		});

		it("throws error when datasources is empty array", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/datasources/);
		});

		it("throws error when datasources is empty array", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/datasources/);
		});
	});

	describe("datasource validation", () => {
		it("throws error when datasource.name is empty", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [
					{
						name: "",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/name/);
		});

		it("throws error when datasource.datasource is empty", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [
					{
						name: "nocobase",
						dataSource: "" as "main",
						outputDir: "./generated",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/dataSource/);
		});

		it("throws error when datasource.outputDir is empty", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "",
						splitCollections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/outputDir/);
		});

		it("throws error when non-main datasource has no collections", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
					{
						name: "external",
						dataSource: "external_datasource",
						outputDir: "./generated-external",
						splitCollections: [],
						collections: [],
					},
				],
			};

			expect(() => parseConfig(scriptConfig)).toThrow(/collections/);
		});
	});

	describe("valid config with all fields", () => {
		it("returns merged config with all provided values", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				outputDir: "./custom-output",
				splitCollections: ["users", "posts"],
				verbose: true,
				defaultEnvPath: ".env.custom",
				requestTimeoutMs: 30_000,
				requestConcurrency: 10,
				lockWorkspaceFolder: false,
				baseInterfaceNaming: {
					prefix: "I",
					suffix: "Base",
				},
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./custom-output",
						splitCollections: ["users", "posts"],
					} as const,
				],
			};

			const result = parseConfig(scriptConfig);

			expect(result.outputDir).toBe("./custom-output");
			expect(result.splitCollections).toEqual(["users", "posts"]);
			expect(result.verbose).toBe(true);
			expect(result.defaultEnvPath).toBe(".env.custom");
			expect(result.requestTimeoutMs).toBe(30_000);
			expect(result.requestConcurrency).toBe(10);
			expect(result.lockWorkspaceFolder).toBe(false);
			expect(result.baseInterfaceNaming).toEqual({
				prefix: "I",
				suffix: "Base",
			});
		});

		it("handles external datasource with explicit collections", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				datasources: [
					{
						name: "nocobase",
						dataSource: "main",
						outputDir: "./generated",
						splitCollections: [],
					},
					{
						name: "ixc",
						dataSource: "d_db_ixcsoft",
						outputDir: "./generated-ixc",
						splitCollections: [],
						collections: ["cliente_contrato"],
					},
				],
			};

			const result = parseConfig(scriptConfig);

			expect(result.datasources).toHaveLength(2);
			expect(result.datasources?.[1].name).toBe("ixc");
			expect(result.datasources?.[1].dataSource).toBe("d_db_ixcsoft");
			expect(result.datasources?.[1].collections).toEqual(["cliente_contrato"]);
		});
	});

	describe("error message format", () => {
		it("includes all validation errors in the thrown message", () => {
			const scriptConfig: Partial<ScriptConfig> = {
				requestTimeoutMs: 0,
				requestConcurrency: 0,
				outputDir: "",
				datasources: [
					{
						name: "",
						dataSource: "" as "main" | "",
						outputDir: "",
						splitCollections: [],
					},
				] as ScriptConfig["datasources"],
			};

			expect(() => parseConfig(scriptConfig)).toThrow("Configuração inválida");
			expect(() => parseConfig(scriptConfig)).toThrow(/requestTimeoutMs/);
			expect(() => parseConfig(scriptConfig)).toThrow(/requestConcurrency/);
			expect(() => parseConfig(scriptConfig)).toThrow(/outputDir/);
			expect(() => parseConfig(scriptConfig)).toThrow(/name/);
		});
	});
});
