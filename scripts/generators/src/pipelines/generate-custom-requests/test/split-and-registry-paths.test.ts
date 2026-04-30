import {
	existsSync,
	mkdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { GeneratedRegistryEntry } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/generated-registry";
import { writeGeneratedRegistry } from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/write-output/registry-writer";
import { writeSplitFile } from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/write-output/split-writer";
import { afterEach, describe, expect, it } from "vitest";

function makeEntry(
	key: string,
	overrides: Partial<GeneratedRegistryEntry> = {},
): GeneratedRegistryEntry {
	return {
		key,
		name: `Entry ${key}`,
		collection: "t_test",
		dataSourceKey: "main",
		method: "POST",
		url: "/test",
		payloadSchema: "z.any()",
		payloadData: null,
		...overrides,
	};
}

const tempDirs: string[] = [];

function createTempDir(label: string): string {
	const dir = join(
		tmpdir(),
		`crm-atplus-${label}-${Date.now()}-${Math.random()}`,
	);
	mkdirSync(dir, { recursive: true });
	tempDirs.push(dir);
	return dir;
}

afterEach(() => {
	for (const dir of tempDirs.splice(0)) {
		rmSync(dir, { recursive: true, force: true });
	}
});

describe("split and registry paths", () => {
	it("salva split file agrupado por dataSourceKey e collection", () => {
		const outputDir = createTempDir("split-by-datasource");
		const entry = makeEntry("quali-run", {
			collection: "t_qualirun_info_adicionais",
			dataSourceKey: "main",
		});

		writeSplitFile(entry, "quali-run", outputDir);

		const splitPath = join(
			outputDir,
			"nocobase",
			"t_qualirun_info_adicionais",
			"quali-run.ts",
		);
		expect(existsSync(splitPath)).toBe(true);
	});

	it("remove split legado sem dataSourceKey", () => {
		const outputDir = createTempDir("legacy-cleanup");
		const collection = "t_logs";
		const splitFileName = "cadastro-comercial";
		const legacyPath = join(outputDir, collection, `${splitFileName}.ts`);
		mkdirSync(join(outputDir, collection), { recursive: true });
		writeFileSync(legacyPath, "// legacy", "utf-8");

		const entry = makeEntry("cadastro-comercial", {
			collection,
			dataSourceKey: "main",
		});

		writeSplitFile(entry, splitFileName, outputDir);

		expect(existsSync(legacyPath)).toBe(false);
	});

	it("gera import do split agrupado por dataSourceKey no registry", async () => {
		const baseOutputDir = createTempDir("registry-import");
		const outputDir = join(baseOutputDir, "nested", "generated", "out");
		const requests = {
			"cadastro-comercial": "cadastro-comercial",
		};
		const entries = [
			makeEntry("cadastro-comercial", {
				collection: "t_logs",
				dataSourceKey: "main",
			}),
		];

		await writeGeneratedRegistry(entries, outputDir, requests);

		const content = readFileSync(
			join(outputDir, "generated-registry.ts"),
			"utf-8",
		);
		expect(content).toContain('from "./nocobase/t_logs/cadastro-comercial";');
	});
});
