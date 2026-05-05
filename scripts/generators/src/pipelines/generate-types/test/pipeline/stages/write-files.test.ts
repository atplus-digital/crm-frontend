import { createLogger } from "@scripts/generators/src/lib/logger";
import { describe, expect, it, vi } from "vitest";

const { writeGeneratedFileMock } = vi.hoisted(() => ({
	writeGeneratedFileMock: vi.fn(
		(
			content: string,
			outputPath: string,
		): {
			resultType: "single";
			outputPath: string;
			changed: boolean;
			skipped?: boolean;
		} => ({
			resultType: "single",
			outputPath,
			changed: !content.includes("unchanged"),
		}),
	),
}));

vi.mock(
	"@scripts/generators/src/pipelines/generate-types/pipeline/post-pipeline/writer",
	() => ({
		writeGeneratedFile: writeGeneratedFileMock,
	}),
);

import { writeFiles } from "@scripts/generators/src/pipelines/generate-types/pipeline/stages/write-files";

describe("writeFiles stage", () => {
	it("adds generation-report.md when datasource generateEnumReport is enabled", async () => {
		writeGeneratedFileMock.mockClear();

		const result = await writeFiles({
			logger: createLogger(),
			config: { outputDir: "/tmp/out" },
			dataSource: {
				name: "nocobase",
				type: "nocobase",
				dataSource: "main",
				outputDir: "/tmp/out/nocobase",
				generateEnumReport: true,
				splitCollections: ["users"],
			},
			fileContents: new Map([["index.ts", "export {};\n"]]),
			collectionTypes: {
				users: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
					enums: new Map(),
					schemaAvailable: true,
				},
				departments: {
					scalars: new Map([["id", "number"]]),
					relations: new Map([
						[
							"f_empresa",
							{
								type: "belongsTo",
								targetCollection: "",
								originalTarget: "t_empresas",
							},
						],
					]),
					enums: new Map(),
					schemaAvailable: true,
				},
			},
		} as never);

		expect(writeGeneratedFileMock).toHaveBeenCalledTimes(2);

		const reportCall = writeGeneratedFileMock.mock.calls.find(
			([, outputPath]) => String(outputPath).endsWith("generation-report.md"),
		);
		expect(reportCall).toBeDefined();

		const reportContent = String(reportCall?.[0] ?? "");
		expect(reportContent).toContain("# Relatorio de Geracao de Tipos");
		expect(reportContent).toContain("## Status: Relacoes");
		expect(reportContent).toContain("`f_empresa`");
		expect(reportContent).toContain("`t_empresas`");
		expect(reportContent).toContain("## Status: Collections Split");
		expect(reportContent).toContain('["departments"]');

		expect(result.writeResults?.length).toBe(2);
	});
});
