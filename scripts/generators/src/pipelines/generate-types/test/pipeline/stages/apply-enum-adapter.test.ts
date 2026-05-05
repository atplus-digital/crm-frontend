import { createLogger } from "@scripts/generators/src/lib/logger";
import type { DataSourceClient } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import type { BuildTypesContext } from "@scripts/generators/src/pipelines/generate-types/pipeline/datasource-pipeline/types";
import { applyEnumAdapter } from "@scripts/generators/src/pipelines/generate-types/pipeline/stages/apply-enum-adapter";
import { describe, expect, it, vi } from "vitest";

function createMockContext(
	overrides: Partial<BuildTypesContext> = {},
): BuildTypesContext {
	return {
		logger: createLogger(),
		config: {} as BuildTypesContext["config"],
		dataSource: {
			name: "ixc",
			type: "nocobase",
			dataSource: "d_db_ixcsoft",
			outputDir: "/tmp/test",
			preEnumAdapter: {
				name: "adapter-test",
				fetchEnums: vi.fn(),
			},
			...overrides.dataSource,
		} as BuildTypesContext["dataSource"],
		client: {
			baseUrl: "http://localhost",
			fetchCollections: vi.fn(),
			fetchCollectionFields: vi.fn(),
			inferEnumsFromData: vi.fn(),
			fetchCollectionSample: vi.fn(),
		} as unknown as DataSourceClient,
		collections: [{ name: "linha_mvno" }],
		collectionTypes: {
			linha_mvno: {
				scalars: new Map([
					["api", "string"],
					["portabilidade", "string"],
				]),
				relations: new Map(),
				enums: new Map(),
				schemaAvailable: true,
			},
		},
		...overrides,
	};
}

describe("applyEnumAdapter stage", () => {
	it("ignora enums do adapter para campos que nao existem nos escalares", async () => {
		const fetchEnums = vi.fn().mockResolvedValue({
			api: {
				values: ["A", "I"],
				labels: { A: "Na API e no IXC", I: "Apenas no IXC" },
			},
			status_linha: {
				values: ["A", "I"],
				labels: { A: "Ativo", I: "Inativo" },
			},
		});

		const ctx = createMockContext({
			dataSource: {
				name: "ixc",
				type: "nocobase",
				dataSource: "d_db_ixcsoft",
				outputDir: "/tmp/test",
				preEnumAdapter: {
					name: "adapter-test",
					fetchEnums,
				},
			},
		});

		const result = await applyEnumAdapter(ctx);
		const linhaMvnoTypes = result.collectionTypes?.linha_mvno;
		const origins = result.enumOrigins?.get("linha_mvno");

		expect(linhaMvnoTypes?.enums.has("api")).toBe(true);
		expect(linhaMvnoTypes?.enums.has("status_linha")).toBe(false);
		expect(origins?.has("api")).toBe(true);
		expect(origins?.has("status_linha")).toBe(false);
	});
});
