import { createLogger } from "@scripts/generators/src/lib/logger";
import type { DataSourceClient } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import type { FetchCollectionsContext } from "@scripts/generators/src/pipelines/generate-types/pipeline/datasource-pipeline/types";
import { buildTypes } from "@scripts/generators/src/pipelines/generate-types/pipeline/stages/build-types";
import { describe, expect, it, vi } from "vitest";

function createMockContext(
	overrides: Partial<FetchCollectionsContext> = {},
): FetchCollectionsContext {
	return {
		logger: createLogger(),
		config: { requestConcurrency: 1 } as FetchCollectionsContext["config"],
		dataSource: {
			name: "nocobase",
			type: "nocobase",
			dataSource: "main",
			outputDir: "/tmp/test",
			inferRelationsByName: false,
			...overrides.dataSource,
		} as FetchCollectionsContext["dataSource"],
		client: {
			baseUrl: "http://localhost",
			fetchCollections: vi.fn(),
			fetchCollectionFields: vi.fn(),
			inferEnumsFromData: vi.fn(),
			fetchCollectionSample: vi.fn(),
		} as unknown as DataSourceClient,
		collections: [{ name: "users" }],
		...overrides,
	};
}

describe("buildTypes stage", () => {
	it("respects datasource excludeFields and skips excluded names", async () => {
		const fetchCollectionFields = vi.fn().mockResolvedValue({
			fields: [
				{ name: "username", type: "string", interface: "input" },
				{ name: "createdById", type: "context", interface: "context" },
				{
					name: "createdBy",
					type: "belongsTo",
					interface: "belongsTo",
					target: "users",
				},
			],
			schemaAvailable: true,
		});

		const ctx = createMockContext({
			dataSource: {
				excludeFields: ["createdBy", "createdById"],
			} as FetchCollectionsContext["dataSource"],
			client: {
				baseUrl: "http://localhost",
				fetchCollections: vi.fn(),
				fetchCollectionFields,
				inferEnumsFromData: vi.fn(),
				fetchCollectionSample: vi.fn(),
			} as unknown as DataSourceClient,
		});

		const result = await buildTypes(ctx);
		const usersTypes = result.collectionTypes?.users;

		expect(usersTypes).toBeDefined();
		expect(usersTypes?.scalars.has("username")).toBe(true);
		expect(usersTypes?.scalars.has("createdById")).toBe(false);
		expect(usersTypes?.relations.has("createdBy")).toBe(false);
	});
});
