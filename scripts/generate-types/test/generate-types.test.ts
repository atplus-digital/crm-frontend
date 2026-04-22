import type { RuntimeConfig } from "@scripts/generate-types/src/@types/script";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockConfigFactory = vi.hoisted(() => {
	return vi.fn().mockReturnValue({
		outputDir: "/tmp/test-generated",
		splitCollections: [],
		logLevel: "info" as const,
		defaultEnvPath: ".env.local",
		requestTimeoutMs: 15_000,
		requestConcurrency: 5,
		maxConcurrency: 5,
		baseInterfaceNaming: { prefix: "", suffix: "Base" },
		datasources: [
			{
				name: "test",
				type: "nocobase",
				dataSource: "main",
				outputDir: "/tmp/test-generated",
				splitCollections: [],
			},
		],
		baseUrl: "https://example.com/api",
		token: "test-token",
		timeoutMs: 30_000,
	} as RuntimeConfig);
});

vi.mock("@scripts/generate-types/config", () => ({
	get config() {
		return mockConfigFactory();
	},
}));

const generateTypesModule = await import(
	"@scripts/generate-types/src/generate-types"
);

describe("generate-types", () => {
	describe("normalizeCollectionNames", () => {
		it("should return empty array for undefined input", () => {
			const result = generateTypesModule.normalizeCollectionNames(undefined);
			expect(result).toEqual([]);
		});

		it("should return empty array for empty array input", () => {
			const result = generateTypesModule.normalizeCollectionNames([]);
			expect(result).toEqual([]);
		});

		it("should trim collection names", () => {
			const result = generateTypesModule.normalizeCollectionNames([
				"  users  ",
				"  posts  ",
			]);
			expect(result).toEqual(["users", "posts"]);
		});

		it("should filter out empty strings after trimming", () => {
			const result = generateTypesModule.normalizeCollectionNames([
				"users",
				"   ",
				"posts",
				"",
			]);
			expect(result).toEqual(["users", "posts"]);
		});

		it("should deduplicate collection names", () => {
			const result = generateTypesModule.normalizeCollectionNames([
				"users",
				"users",
				"posts",
				"users",
				"posts",
			]);
			expect(result).toEqual(["users", "posts"]);
		});

		it("should handle exact duplicates with trimming", () => {
			const result = generateTypesModule.normalizeCollectionNames([
				"users",
				"users",
				"  users  ",
				"  users  ",
				"posts",
				"posts",
			]);
			expect(result).toEqual(["users", "users", "posts"]);
		});
	});

	describe("resolveDataSourceConfigs", () => {
		beforeEach(() => {
			mockConfigFactory.mockReturnValue({
				outputDir: "/tmp/test-generated",
				splitCollections: [],
				logLevel: "info" as const,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				maxConcurrency: 5,
				baseInterfaceNaming: { prefix: "", suffix: "Base" },
				datasources: [
					{
						name: "valid-ds",
						type: "nocobase",
						dataSource: "main",
						outputDir: "/tmp/output1",
						splitCollections: [],
					},
					{
						name: "empty-ds",
						dataSource: "secondary",
						outputDir: "   ",
						splitCollections: [],
					},
					{
						name: "another-valid",
						dataSource: "third",
						outputDir: "/tmp/output2",
						splitCollections: [],
					},
				],
				baseUrl: "https://example.com/api",
				token: "test-token",
				timeoutMs: 30_000,
			} as RuntimeConfig);
		});

		afterEach(() => {
			vi.restoreAllMocks();
		});
	});
});

describe("runGenerateTypesForDataSources", () => {
	it("deve lançar erro quando nenhum datasource está configurado", async () => {
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: [],
			logLevel: "info" as const,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
			maxConcurrency: 5,
			baseInterfaceNaming: { prefix: "", suffix: "Base" },
			datasources: [],
			baseUrl: "https://example.com/api",
			token: "test-token",
			timeoutMs: 30_000,
		} as RuntimeConfig);

		await expect(
			generateTypesModule.runGenerateTypesForDataSources(),
		).rejects.toThrow("Nenhum datasource configurado para geração de tipos");
	});
});

describe("normalizeCollectionNames - edge cases", () => {
	it("deve fazer deduplication antes do trim", () => {
		const result = generateTypesModule.normalizeCollectionNames([
			"users",
			"users",
			"posts",
		]);
		expect(result).toEqual(["users", "posts"]);
	});

	it("deve preservar ordem original das coleções", () => {
		const result = generateTypesModule.normalizeCollectionNames([
			"zebra",
			"apple",
			"banana",
		]);
		expect(result).toEqual(["zebra", "apple", "banana"]);
	});

	it("deve retornar array vazio para array com apenas strings vazias", () => {
		const result = generateTypesModule.normalizeCollectionNames([
			"",
			"   ",
			"",
		]);
		expect(result).toEqual([]);
	});

	it("deve trimar todos os nomes após deduplication", () => {
		const result = generateTypesModule.normalizeCollectionNames([
			"  users  ",
			"  posts  ",
		]);
		expect(result).toEqual(["users", "posts"]);
	});
});
