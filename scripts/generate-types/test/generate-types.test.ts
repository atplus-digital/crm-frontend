import type { CollectionTypesMap } from "@scripts/generate-types/src/@types/generation";
import type { RuntimeConfig } from "@scripts/generate-types/src/@types/script";
import { createMockCollectionTypesMap } from "@scripts/generate-types/test/setup";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockConfigFactory = vi.hoisted(() => {
	return vi.fn().mockReturnValue({
		outputDir: "/tmp/test-generated",
		splitCollections: [],
		verbose: false,
		defaultEnvPath: ".env.local",
		requestTimeoutMs: 15_000,
		requestConcurrency: 5,
		baseInterfaceNaming: { prefix: "", suffix: "Base" },
		datasources: [
			{
				name: "test",
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
				verbose: false,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				baseInterfaceNaming: { prefix: "", suffix: "Base" },
				datasources: [
					{
						name: "valid-ds",
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

		it("should filter out datasources with empty outputDir", () => {
			const result = generateTypesModule.resolveDataSourceConfigs();
			expect(result).toHaveLength(2);
			expect(result[0].name).toBe("valid-ds");
			expect(result[1].name).toBe("another-valid");
		});

		it("should filter out datasources with whitespace-only outputDir", () => {
			const result = generateTypesModule.resolveDataSourceConfigs();
			const emptyDs = result.find((ds) => ds.name === "empty-ds");
			expect(emptyDs).toBeUndefined();
		});

		it("should return empty array when all datasources have empty outputDir", () => {
			mockConfigFactory.mockReturnValue({
				outputDir: "/tmp/test-generated",
				splitCollections: [],
				verbose: false,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				baseInterfaceNaming: { prefix: "", suffix: "Base" },
				datasources: [
					{
						name: "empty-1",
						dataSource: "main",
						outputDir: "",
						splitCollections: [],
					},
					{
						name: "empty-2",
						dataSource: "secondary",
						outputDir: "   ",
						splitCollections: [],
					},
				],
				baseUrl: "https://example.com/api",
				token: "test-token",
				timeoutMs: 30_000,
			} as RuntimeConfig);

			const result = generateTypesModule.resolveDataSourceConfigs();
			expect(result).toEqual([]);
		});

		it("should return empty array when datasources is undefined", () => {
			mockConfigFactory.mockReturnValue({
				outputDir: "/tmp/test-generated",
				splitCollections: [],
				verbose: false,
				defaultEnvPath: ".env.local",
				requestTimeoutMs: 15_000,
				requestConcurrency: 5,
				baseInterfaceNaming: { prefix: "", suffix: "Base" },
				datasources: undefined,
				baseUrl: "https://example.com/api",
				token: "test-token",
				timeoutMs: 30_000,
			} as RuntimeConfig);

			const result = generateTypesModule.resolveDataSourceConfigs();
			expect(result).toEqual([]);
		});

		it("should preserve all properties of valid datasources", () => {
			const result = generateTypesModule.resolveDataSourceConfigs();
			expect(result[0]).toEqual({
				name: "valid-ds",
				dataSource: "main",
				outputDir: "/tmp/output1",
				splitCollections: [],
			});
		});
	});

	describe("mergeCollectionTypeMaps", () => {
		it("should merge multiple collection maps into one", () => {
			const map1 = createMockCollectionTypesMap({
				users: { scalars: { id: "string", name: "string" } },
			});
			const map2 = createMockCollectionTypesMap({
				posts: { scalars: { id: "string", title: "string" } },
			});

			const result = generateTypesModule.mergeCollectionTypeMaps([map1, map2]);

			expect(result).toHaveProperty("users");
			expect(result).toHaveProperty("posts");
			expect(result.users?.scalars.get("name")).toBe("string");
			expect(result.posts?.scalars.get("title")).toBe("string");
		});

		it("should handle empty iterable", () => {
			const result = generateTypesModule.mergeCollectionTypeMaps([]);
			expect(result).toEqual({});
		});

		it("should merge maps with relations", () => {
			const map1: CollectionTypesMap = {
				users: {
					scalars: new Map([["id", "string"]]),
					relations: new Map([
						[
							"posts",
							{
								type: "hasMany",
								targetCollection: "posts",
							},
						],
					]),
				},
			};
			const map2: CollectionTypesMap = {
				posts: {
					scalars: new Map([["id", "string"]]),
					relations: new Map([
						[
							"author",
							{
								type: "belongsTo",
								targetCollection: "users",
							},
						],
					]),
				},
			};

			const result = generateTypesModule.mergeCollectionTypeMaps([map1, map2]);

			expect(result.users?.relations?.get("posts")).toEqual({
				type: "hasMany",
				targetCollection: "posts",
			});
			expect(result.posts?.relations?.get("author")).toEqual({
				type: "belongsTo",
				targetCollection: "users",
			});
		});

		it("should handle single map in iterable", () => {
			const map = createMockCollectionTypesMap({
				single: { scalars: { id: "string" } },
			});

			const result = generateTypesModule.mergeCollectionTypeMaps([map]);

			expect(result).toHaveProperty("single");
			expect(result.single?.scalars.get("id")).toBe("string");
		});

		it("should handle Set as iterable", () => {
			const map1 = createMockCollectionTypesMap({
				first: { scalars: { id: "string" } },
			});
			const map2 = createMockCollectionTypesMap({
				second: { scalars: { name: "string" } },
			});
			const mapSet = new Set([map1, map2]);

			const result = generateTypesModule.mergeCollectionTypeMaps(mapSet);

			expect(result).toHaveProperty("first");
			expect(result).toHaveProperty("second");
		});

		it("should handle Maps as iterable", () => {
			const map1 = createMockCollectionTypesMap({
				first: { scalars: { id: "string" } },
			});
			const map2 = createMockCollectionTypesMap({
				second: { scalars: { name: "string" } },
			});
			const maps = new Map([
				["a", map1],
				["b", map2],
			]);

			const result = generateTypesModule.mergeCollectionTypeMaps(maps.values());

			expect(result).toHaveProperty("first");
			expect(result).toHaveProperty("second");
		});
	});
});

describe("runGenerateTypesForDataSources", () => {
	it("deve lançar erro quando nenhum datasource está configurado", async () => {
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: [],
			verbose: false,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
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

describe("resolveDataSourceConfigs - edge cases", () => {
	it("deve retornar array vazio quando datasources é undefined", () => {
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: [],
			verbose: false,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
			baseInterfaceNaming: { prefix: "", suffix: "Base" },
			datasources: undefined,
			baseUrl: "https://example.com/api",
			token: "test-token",
			timeoutMs: 30_000,
		} as RuntimeConfig);

		const result = generateTypesModule.resolveDataSourceConfigs();
		expect(result).toEqual([]);
	});

	it("deve filtrar datasource com outputDir vazio", () => {
		mockConfigFactory.mockReturnValue({
			outputDir: "/tmp/test-generated",
			splitCollections: [],
			verbose: false,
			defaultEnvPath: ".env.local",
			requestTimeoutMs: 15_000,
			requestConcurrency: 5,
			datasources: [
				{
					name: "valid",
					dataSource: "main",
					outputDir: "/tmp/valid",
					splitCollections: [],
				},
				{
					name: "empty",
					dataSource: "main",
					outputDir: "",
					splitCollections: [],
				},
			],
			baseInterfaceNaming: { prefix: "", suffix: "Base" },
			baseUrl: "https://example.com/api",
			token: "test-token",
			timeoutMs: 30_000,
		} as RuntimeConfig);

		const result = generateTypesModule.resolveDataSourceConfigs();
		expect(result).toHaveLength(1);
		expect(result[0].name).toBe("valid");
	});
});

describe("mergeCollectionTypeMaps - edge cases", () => {
	it("deve sobrescrever coleções com mesmo nome", () => {
		const map1 = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});
		const map2 = createMockCollectionTypesMap({
			users: { scalars: { id: "number", name: "string" } },
		});

		const result = generateTypesModule.mergeCollectionTypeMaps([map1, map2]);

		expect(result.users?.scalars.get("id")).toBe("number");
		expect(result.users?.scalars.get("name")).toBe("string");
	});

	it("deve mesclar relações de coleções diferentes", () => {
		const map1: CollectionTypesMap = {
			users: {
				scalars: new Map([["id", "string"]]),
				relations: new Map([
					["posts", { type: "hasMany", targetCollection: "posts" }],
				]),
			},
		};
		const map2: CollectionTypesMap = {
			posts: {
				scalars: new Map([["id", "string"]]),
				relations: new Map([
					["user", { type: "belongsTo", targetCollection: "users" }],
				]),
			},
		};

		const result = generateTypesModule.mergeCollectionTypeMaps([map1, map2]);

		expect(result.users?.relations?.get("posts")).toEqual({
			type: "hasMany",
			targetCollection: "posts",
		});
		expect(result.posts?.relations?.get("user")).toEqual({
			type: "belongsTo",
			targetCollection: "users",
		});
	});
});
