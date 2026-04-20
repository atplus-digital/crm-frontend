import type { NocoBaseCollection } from "@scripts/generate-types/src/@types/nocobase";
import type { DataSourceClient } from "@scripts/generate-types/src/@types/script";
import type { BuildCollectionTypesOptions } from "@scripts/generate-types/src/generation/collection-types";
import { createMockField } from "@scripts/generate-types/test/setup";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockMapWithConcurrency = vi.fn();
vi.mock("@scripts/generate-types/src/utils/concurrency", () => ({
	mapWithConcurrency: (...args: unknown[]) => mockMapWithConcurrency(...args),
}));

// Create a testable version of the module by re-exporting internal functions
// We'll use dynamic import after mocking to get access to the functions
async function importModule() {
	const module = await import(
		"@scripts/generate-types/src/generation/collection-types"
	);
	return module;
}

describe("collection-types", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		mockMapWithConcurrency.mockImplementation(
			async <T, R>(
				items: readonly T[],
				_concurrency: number,
				mapper: (item: T, index: number) => Promise<R>,
			): Promise<R[]> => {
				// Sequential implementation for predictable tests
				const results: R[] = [];
				for (let i = 0; i < items.length; i++) {
					results.push(await mapper(items[i], i));
				}
				return results;
			},
		);
	});

	describe("sortByName", () => {
		it("handles empty array", async () => {
			const { buildCollectionTypes } = await importModule();
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await buildCollectionTypes(mockClient, []);

			// No errors thrown, just returns empty object
			expect(mockMapWithConcurrency).toHaveBeenCalledWith(
				expect.any(Array),
				expect.any(Number),
				expect.any(Function),
			);
		});

		it("handles single item", async () => {
			const { buildCollectionTypes } = await importModule();
			const collection: NocoBaseCollection = { name: "users" };
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await buildCollectionTypes(mockClient, [collection]);

			// Verify it processes without errors
			expect(mockClient.fetchCollectionFields).toHaveBeenCalledWith("users");
		});

		it("sorts collections alphabetically by name", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "zebra" },
				{ name: "apple" },
				{ name: "banana" },
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await buildCollectionTypes(mockClient, collections);

			// The first argument to mapWithConcurrency should be sorted
			const sortedCollections = mockMapWithConcurrency.mock.calls[0]?.[0] as
				| NocoBaseCollection[]
				| undefined;
			expect(sortedCollections).toBeDefined();
			expect(sortedCollections?.map((c) => c.name)).toEqual([
				"apple",
				"banana",
				"zebra",
			]);
		});

		it("handles reverse sorted array", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "zebra" },
				{ name: "tiger" },
				{ name: "ant" },
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await buildCollectionTypes(mockClient, collections);

			const sortedCollections = mockMapWithConcurrency.mock.calls[0]?.[0] as
				| NocoBaseCollection[]
				| undefined;
			expect(sortedCollections?.map((c) => c.name)).toEqual([
				"ant",
				"tiger",
				"zebra",
			]);
		});
	});

	describe("buildGeneratedTypes", () => {
		it("handles fields with no relations", async () => {
			const { buildCollectionTypes } = await importModule();
			const collection: NocoBaseCollection = { name: "users" };
			const fields = [
				createMockField({ name: "name", type: "string", interface: "input" }),
				createMockField({ name: "age", type: "integer", interface: "number" }),
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue(fields),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, [collection]);

			expect(result.users).toBeDefined();
			expect(result.users.scalars.has("name")).toBe(true);
			expect(result.users.scalars.has("age")).toBe(true);
			expect(result.users.relations.size).toBe(0);
		});

		it("handles fields with relations", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "users" },
				{ name: "t_negociacoes" },
			];
			const userFields = [
				createMockField({ name: "name", type: "string" }),
				createMockField({
					name: "negociacoes",
					type: "hasMany",
					interface: "o2m",
					target: "t_negociacoes",
				}),
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockImplementation((name: string) => {
					if (name === "users") return Promise.resolve(userFields);
					return Promise.resolve([]);
				}),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, collections);

			expect(result.users.relations.has("negociacoes")).toBe(true);
			const relationInfo = result.users.relations.get("negociacoes");
			expect(relationInfo?.targetCollection).toBe("t_negociacoes");
		});

		it("handles fields with unknown target collection", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [{ name: "users" }];
			const userFields = [
				createMockField({ name: "name", type: "string" }),
				createMockField({
					name: "unknownRelation",
					type: "belongsTo",
					interface: "m2o",
					target: "nonexistent_collection",
				}),
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue(userFields),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, collections);

			// Unknown target should be empty string
			const relationInfo = result.users.relations.get("unknownRelation");
			expect(relationInfo?.targetCollection).toBe("");
		});
	});

	describe("toCollectionTypesMap", () => {
		it("converts valid entries to map", async () => {
			const { buildCollectionTypes } = await importModule();
			const collection: NocoBaseCollection = { name: "users" };
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, [collection]);

			expect(result.users).toBeDefined();
			expect(result.users.scalars).toBeInstanceOf(Map);
			expect(result.users.relations).toBeInstanceOf(Map);
		});

		it("throws on name conflict after normalization", async () => {
			const { buildCollectionTypes } = await importModule();
			// Collections that would normalize to the same name
			const collections: NocoBaseCollection[] = [
				{ name: "users" },
				{ name: "users" }, // Duplicate name
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await expect(
				buildCollectionTypes(mockClient, collections),
			).rejects.toThrow("Conflito de nomes");
		});
	});

	describe("buildCollectionTypes", () => {
		it("calls onCollectionStart callback for each collection", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "users" },
				{ name: "t_negociacoes" },
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;
			const onCollectionStart = vi.fn();

			await buildCollectionTypes(mockClient, collections, {
				onCollectionStart,
			});

			expect(onCollectionStart).toHaveBeenCalledTimes(2);
			expect(onCollectionStart).toHaveBeenNthCalledWith(1, {
				collectionName: "t_negociacoes",
				index: 1,
				total: 2,
			});
			expect(onCollectionStart).toHaveBeenNthCalledWith(2, {
				collectionName: "users",
				index: 2,
				total: 2,
			});
		});

		it("uses default concurrency from config", async () => {
			const { buildCollectionTypes } = await importModule();
			const collection: NocoBaseCollection = { name: "users" };
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await buildCollectionTypes(mockClient, [collection]);

			// Concurrency should be from config (5 based on setup.ts mock)
			expect(mockMapWithConcurrency).toHaveBeenCalledWith(
				expect.any(Array),
				5, // From mockRuntimeConfig.requestConcurrency
				expect.any(Function),
			);
		});

		it("uses custom concurrency when provided", async () => {
			const { buildCollectionTypes } = await importModule();
			const collection: NocoBaseCollection = { name: "users" };
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			await buildCollectionTypes(mockClient, [collection], {
				concurrency: 10,
			});

			expect(mockMapWithConcurrency).toHaveBeenCalledWith(
				expect.any(Array),
				10,
				expect.any(Function),
			);
		});

		it("processes all collections concurrently", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "users" },
				{ name: "t_negociacoes" },
				{ name: "t_empresas" },
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue([]),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, collections);

			expect(Object.keys(result)).toHaveLength(3);
			expect(result.users).toBeDefined();
			expect(result.t_negociacoes).toBeDefined();
			expect(result.t_empresas).toBeDefined();
		});

		it("preserves original collection names in result", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [{ name: "t_some_collection" }];
			const mockClient = {
				fetchCollectionFields: vi
					.fn()
					.mockResolvedValue([
						createMockField({ name: "id", type: "integer" }),
					]),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, collections);

			// Result should have the original name, not normalized
			expect(result.t_some_collection).toBeDefined();
			expect(result.SomeCollection).toBeUndefined();
		});

		it("passes correct context to callback including index and total", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "alpha" },
				{ name: "beta" },
				{ name: "gamma" },
			];
			const mockClient = {
				fetchCollectionFields: vi
					.fn()
					.mockResolvedValue([createMockField({ name: "id" })]),
			} as unknown as DataSourceClient;
			const contexts: BuildCollectionTypesOptions["onCollectionStart"] extends
				| undefined
				| ((ctx: infer P) => void)
				? P[]
				: never[] = [];

			await buildCollectionTypes(mockClient, collections, {
				onCollectionStart: (ctx) => {
					contexts.push(ctx);
				},
			});

			expect(contexts).toHaveLength(3);
			expect(contexts[0]).toEqual({
				collectionName: "alpha",
				index: 1,
				total: 3,
			});
			expect(contexts[1]).toEqual({
				collectionName: "beta",
				index: 2,
				total: 3,
			});
			expect(contexts[2]).toEqual({
				collectionName: "gamma",
				index: 3,
				total: 3,
			});
		});

		it("handles client.fetchCollectionFields returning various field types", async () => {
			const { buildCollectionTypes } = await importModule();
			const collection: NocoBaseCollection = { name: "users" };
			const fields = [
				createMockField({ name: "id", type: "integer", interface: "id" }),
				createMockField({
					name: "email",
					type: "string",
					interface: "email",
				}),
				createMockField({
					name: "createdAt",
					type: "date",
					interface: "datetime",
				}),
				createMockField({
					name: "isActive",
					type: "boolean",
					interface: "checkbox",
				}),
			];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockResolvedValue(fields),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, [collection]);

			expect(result.users.scalars.get("id")).toBe("number");
			expect(result.users.scalars.get("email")).toBe("string");
			expect(result.users.scalars.get("createdAt")).toBe("string");
			expect(result.users.scalars.get("isActive")).toBe("boolean");
		});

		it("correctly identifies known collections for relation targets", async () => {
			const { buildCollectionTypes } = await importModule();
			const collections: NocoBaseCollection[] = [
				{ name: "users" },
				{ name: "t_negociacoes" },
			];
			const userFields = [
				createMockField({ name: "id", type: "integer" }),
				createMockField({
					name: "negociacoes",
					type: "hasMany",
					interface: "o2m",
					target: "t_negociacoes",
				}),
			];
			const negFields = [createMockField({ name: "id", type: "integer" })];
			const mockClient = {
				fetchCollectionFields: vi.fn().mockImplementation((name: string) => {
					if (name === "users") return Promise.resolve(userFields);
					if (name === "t_negociacoes") return Promise.resolve(negFields);
					return Promise.resolve([]);
				}),
			} as unknown as DataSourceClient;

			const result = await buildCollectionTypes(mockClient, collections);

			// Relation to known collection should have target
			expect(result.users.relations.get("negociacoes")?.targetCollection).toBe(
				"t_negociacoes",
			);
		});
	});
});
