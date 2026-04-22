import type { DataSourceClient } from "@scripts/generate-types/src/@types/script";
import type { InitContext } from "@scripts/generate-types/src/pipeline/types";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockFetchCollections = vi.fn();

const mockClient = {
	fetchCollections: mockFetchCollections,
	fetchSchemas: vi.fn(),
	fetchRelations: vi.fn(),
} as unknown as DataSourceClient;

const createMockInitContext = (
	overrides: Partial<InitContext> = {},
): InitContext => ({
	config: {} as InitContext["config"],
	dataSource: {
		name: "test-ds",
		type: "nocobase",
		dataSource: "main",
		outputDir: "/tmp/test",
		...overrides.dataSource,
	} as InitContext["dataSource"],
	client: mockClient,
	...overrides,
});

describe("fetchCollections", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("com collections explícitas configuradas", () => {
		it("deve usar collections explicitamente configuradas", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: ["users", "posts", "comments"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(mockFetchCollections).not.toHaveBeenCalled();
			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
				{ name: "comments" },
			]);
		});

		it("deve deduplicar collections com nomes duplicados", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: ["users", "users", "posts", "users", "posts"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
			]);
		});

		it("deve trimar espaços em branco dos nomes das collections", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: ["  users  ", "  posts  ", "comments"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
				{ name: "comments" },
			]);
		});

		it("deve filtrar strings vazias após trim", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: ["users", "", "  ", "posts", ""],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
			]);
		});

		it("deve retornar array vazio para array de collections vazio", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			mockFetchCollections.mockResolvedValue([{ name: "users" }]);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: [],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(mockFetchCollections).toHaveBeenCalledOnce();
			expect(result.collections).toEqual([{ name: "users" }]);
		});
	});

	describe("sem collections configuradas (busca da API)", () => {
		it("deve buscar collections da API para datasource nocobase", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			mockFetchCollections.mockResolvedValue([
				{ name: "users" },
				{ name: "posts" },
			]);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(mockFetchCollections).toHaveBeenCalledOnce();
			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
			]);
		});

		it("deve lançar erro para datasource não-nocobase sem collections", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "custom-ds",
					type: "custom",
					dataSource: "custom",
					outputDir: "/tmp/test",
				} as unknown as InitContext["dataSource"],
			});

			await expect(fetchCollections(ctx)).rejects.toThrow(
				"DataSource 'custom-ds' (type: 'custom') exige collections explícitas em scripts/generate-types/datasources.config.ts",
			);
		});

		it("deve propagar erro da API", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			mockFetchCollections.mockRejectedValue(new Error("API Error"));

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
				} as InitContext["dataSource"],
			});

			await expect(fetchCollections(ctx)).rejects.toThrow("API Error");
		});
	});

	describe("normalização de collections", () => {
		it("deve preservar ordem original após deduplicação", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: ["zebra", "apple", "banana", "apple", "zebra"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(result.collections).toEqual([
				{ name: "zebra" },
				{ name: "apple" },
				{ name: "banana" },
			]);
		});

		it("deve manter duplicatas após trim se forem diferentes", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					collections: ["users", "users", "posts", "posts"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
			]);
		});
	});
});
