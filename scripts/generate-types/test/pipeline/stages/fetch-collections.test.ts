import type { DataSourceClient } from "@scripts/generate-types/src/@types/script";
import type { InitContext } from "@scripts/generate-types/src/pipeline/core/types";
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

	describe("NocoBase - sempre busca da API", () => {
		it("deve buscar TODAS as collections da API para datasource nocobase", async () => {
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

		it("deve buscar da API mesmo com collections configuradas (ignora config)", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			mockFetchCollections.mockResolvedValue([
				{ name: "users" },
				{ name: "posts" },
				{ name: "comments" },
			]);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					// Collections configuradas são IGNORADAS para NocoBase
					collections: ["users"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			// Deve buscar da API, não usar config
			expect(mockFetchCollections).toHaveBeenCalledOnce();
			expect(result.collections).toEqual([
				{ name: "users" },
				{ name: "posts" },
				{ name: "comments" },
			]);
		});

		it("deve buscar da API mesmo com splitCollections configuradas", async () => {
			const { fetchCollections } = await import(
				"@scripts/generate-types/src/pipeline/stages/fetch-collections"
			);

			mockFetchCollections.mockResolvedValue([
				{ name: "users" },
				{ name: "posts" },
				{ name: "comments" },
				{ name: "NegociacoesItens" },
			]);

			const ctx = createMockInitContext({
				dataSource: {
					name: "test-ds",
					type: "nocobase",
					dataSource: "main",
					outputDir: "/tmp/test",
					// splitCollections só define quais IRÃO PARA ARQUIVOS SEPARADOS
					splitCollections: ["users"],
				} as InitContext["dataSource"],
			});

			const result = await fetchCollections(ctx);

			// Deve buscar TODAS da API
			expect(mockFetchCollections).toHaveBeenCalledOnce();
			expect(result.collections).toHaveLength(4);
			expect(result.collections).toContainEqual({ name: "NegociacoesItens" });
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

	describe("não-NocoBase - exige collections explícitas", () => {
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
	});
});
