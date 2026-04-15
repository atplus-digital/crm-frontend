import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { GenerateTypesResult } from "../@types/script";
import { logInfo, logVerbose } from "../utils/logger";
import { toFileName } from "../utils/naming";
import { previewGeneratedFile, writeGeneratedFile } from "../utils/writer";
import { IxcClient } from "./ixc-client";
import { buildIxcCollectionTypes } from "./ixc-collection-types";

export async function runGenerateIxc(): Promise<GenerateTypesResult> {
	const ixcOutputDir = config.ixcOutputDir ?? "src/@types/generated/ixc";

	const resolvedOutputDir = path.resolve(ixcOutputDir);
	if (!fs.existsSync(resolvedOutputDir)) {
		fs.mkdirSync(resolvedOutputDir, { recursive: true });
		logVerbose(`📁 Diretório criado: ${resolvedOutputDir}`);
	}

	logInfo(`🔧 Gerando tipos IXC no diretório: ${ixcOutputDir}`);

	const client = new IxcClient({
		baseUrl: config.baseUrl,
		token: config.token,
		timeoutMs: config.requestTimeoutMs,
	});

	const collectionNames = config.ixcCollections ?? [];
	logVerbose(`📋 Collections IXC: ${collectionNames.join(", ")}`);

	const types = await buildIxcCollectionTypes(client, collectionNames);

	const exports = Object.keys(types).map((name) => {
		const pascal = name
			.split("_")
			.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
			.join("");
		return `export type { ${pascal}, ${pascal}Relations, ${pascal}RelationKey } from "./${toFileName(name)}";`;
	});

	const indexContent = [
		"/**",
		" * Arquivo gerado automaticamente — NÃO EDITAR MANUALMENTE",
		" */",
		"",
		...exports,
		"",
	].join("\n");

	const results: Array<{
		outputPath: string;
		changed: boolean;
		diff?: string;
	}> = [];

	if (config.dryRun) {
		const indexResult = previewGeneratedFile(
			indexContent,
			path.join(ixcOutputDir, "index.ts"),
		);
		results.push({
			outputPath: indexResult.outputPath,
			changed: indexResult.changed,
			diff: indexResult.diff,
		});

		for (const [name] of Object.entries(types)) {
			const preview = previewGeneratedFile(
				"// placeholder",
				path.join(ixcOutputDir, `${toFileName(name)}.ts`),
			);
			results.push({
				outputPath: preview.outputPath,
				changed: preview.changed,
				diff: preview.diff,
			});
		}

		return {
			mode: "dry-run",
			files: results as Array<{
				outputPath: string;
				changed: boolean;
				diff: string;
			}>,
			totalFiles: results.length,
			totalChanged: results.filter((r) => r.changed).length,
		};
	}

	const indexResult = writeGeneratedFile(
		indexContent,
		path.join(ixcOutputDir, "index.ts"),
	);
	results.push({
		outputPath: indexResult.outputPath,
		changed: indexResult.changed,
	});

	for (const [name, t] of Object.entries(types)) {
		const content = [
			"/**",
			" * Arquivo gerado automaticamente — NÃO EDITAR MANUALMENTE",
			` * Collection: ${name}`,
			" */",
			"",
			t.base,
			"",
			t.relations,
			"",
			t.relationKey,
			"",
		].join("\n");

		const result = writeGeneratedFile(
			content,
			path.join(ixcOutputDir, `${toFileName(name)}.ts`),
		);
		results.push({ outputPath: result.outputPath, changed: result.changed });
	}

	return {
		mode: "write",
		files: results as Array<{ outputPath: string; changed: boolean }>,
		totalFiles: results.length,
		totalChanged: results.filter((r) => r.changed).length,
	};
}
