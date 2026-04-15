import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { GenerateTypesResult } from "../@types/script";
import { logInfo, logVerbose } from "../utils/logger";
import {
	resolveBaseInterfaceNamingConfig,
	toCollectionBaseTypeName,
	toCollectionTypeName,
	toFileName,
} from "../utils/naming";
import { previewGeneratedFile, writeGeneratedFile } from "../utils/writer";
import { NocoBaseClient } from "./client";
import { buildCollectionTypes } from "./collection-types";
import { generateCollectionTypes, generateFileHeader } from "./content";

export async function runGenerateIxc(): Promise<GenerateTypesResult> {
	const ixcOutputDir = config.ixcOutputDir ?? "src/@types/generated/ixc";
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		config.baseInterfaceNaming,
	);

	logInfo(`🔧 Gerando tipos IXC no diretório: ${ixcOutputDir}`);

	const client = new NocoBaseClient(
		{
			baseUrl: config.baseUrl,
			token: config.token,
			timeoutMs: config.requestTimeoutMs,
		},
		{
			requestHeaders: {
				"X-Data-Source": "d_db_ixcsoft",
			},
			enableSampleFieldFallback: true,
		},
	);

	logVerbose(`📡 Conectando a: ${client.baseUrl} (IXC datasource)`);

	const configuredCollectionNames = [...new Set(config.ixcCollections ?? [])]
		.map((collectionName) => collectionName.trim())
		.filter((collectionName) => collectionName.length > 0);

	if (configuredCollectionNames.length === 0) {
		throw new Error(
			"Nenhuma collection IXC configurada em config.ixcCollections. Defina ao menos uma collection para gerar os tipos.",
		);
	}

	const collections = configuredCollectionNames.map((name) => ({ name }));

	logVerbose(
		`📋 Collections IXC selecionadas: ${collections.map((collection) => collection.name).join(", ")}`,
	);

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			logVerbose(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	const filesContent = new Map<string, string>();

	for (const [collectionName, types] of Object.entries(collectionTypes).sort(
		([a], [b]) => a.localeCompare(b),
	)) {
		const content = [
			generateFileHeader().trimEnd(),
			"",
			generateCollectionTypes(collectionName, types, baseInterfaceNaming),
			"",
		].join("\n");

		filesContent.set(`${toFileName(collectionName)}.ts`, content);
	}

	const exports = Object.keys(collectionTypes)
		.sort((a, b) => a.localeCompare(b))
		.map((collectionName) => {
			const typeName = toCollectionTypeName(collectionName);
			const baseTypeName = toCollectionBaseTypeName(
				collectionName,
				baseInterfaceNaming,
			);

			return `export type { ${baseTypeName}, ${typeName}Relations, ${typeName}RelationKey } from "./${toFileName(collectionName)}";`;
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

		for (const [fileName, content] of filesContent) {
			const preview = previewGeneratedFile(
				content,
				path.join(ixcOutputDir, fileName),
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

	for (const [fileName, content] of filesContent) {
		const result = writeGeneratedFile(
			content,
			path.join(ixcOutputDir, fileName),
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
