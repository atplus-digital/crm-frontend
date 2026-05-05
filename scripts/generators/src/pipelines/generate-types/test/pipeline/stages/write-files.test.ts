import { createLogger } from "@scripts/generators/src/lib/logging";
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
	it("writes only provided generated files", async () => {
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

		expect(writeGeneratedFileMock).toHaveBeenCalledTimes(1);
		expect(result.writeResults?.length).toBe(1);
	});
});
