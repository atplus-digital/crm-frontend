import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	DatasourceGenerationConfig,
	GenerateTypesResult,
} from "./@types/script";
import { NocoBaseClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateCollectionsFile } from "./generation/collections-index";
import { generateContent, generateSplitFiles } from "./generation/content";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "./generation/import-injector";
import { generateIndexFileWithReexports } from "./generation/split-index";
import { runBiomeFix } from "./utils/biome-runner";
import { splitCollectionsByConfig } from "./utils/collection-splitter";
import { logInfo, logVerbose } from "./utils/logger";
import { resolveBaseInterfaceNamingConfig, toFileName } from "./utils/naming";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";
import {
	cleanOutputDirectory,
	getUnusedFiles,
	writeGeneratedFile,
	writeMultipleFiles,
} from "./utils/writer";

const MAIN_DATASOURCE_NAME = "main";

interface GeneratedFileWrite {
	outputPath: string;
	changed: boolean;
}

interface DatasourceFilesResult {
	writeFiles: GeneratedFileWrite[];
}

function normalizeCollectionNames(
	collectionNames: string[] | undefined,
): string[] {
	if (!collectionNames) {
		return [];
	}

	return [...new Set(collectionNames)]
		.map((collectionName) => collectionName.trim())
		.filter((collectionName) => collectionName.length > 0);
}

function resolveDatasourceConfigs(): DatasourceGenerationConfig[] {
	return (config.datasources ?? []).filter(
		(datasource) => datasource.outputDir.trim().length > 0,
	);
}

function mergeCollectionTypeMaps(
	collectionMaps: Iterable<CollectionTypesMap>,
): CollectionTypesMap {
	const merged: CollectionTypesMap = {};
	for (const collectionMap of collectionMaps) {
		Object.assign(merged, collectionMap);
	}
	return merged;
}

async function resolveCollectionsForDatasource(
	client: NocoBaseClient,
	datasource: DatasourceGenerationConfig,
): Promise<Array<{ name: string }>> {
	const configuredCollectionNames = normalizeCollectionNames(
		datasource.collections,
	);

	if (configuredCollectionNames.length > 0) {
		return configuredCollectionNames.map((name) => ({ name }));
	}

	if (datasource.datasource !== MAIN_DATASOURCE_NAME) {
		throw new Error(
			`Datasource '${datasource.name}' (${datasource.datasource}) exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	}

	return client.fetchCollections();
}

async function runGenerateTypesForDatasource(
	datasource: DatasourceGenerationConfig,
): Promise<DatasourceFilesResult> {
	const client = new NocoBaseClient(
		{
			baseUrl: config.baseUrl,
			token: config.token,
			timeoutMs: config.requestTimeoutMs,
		},
		{
			requestHeaders: {
				"X-Data-Source": datasource.datasource,
			},
			enableSampleFieldFallback: datasource.enableSampleFieldFallback,
		},
	);
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		datasource.baseInterfaceNaming ?? config.baseInterfaceNaming,
	);

	logInfo(
		`🔧 Gerando tipos para datasource '${datasource.datasource}' em ${datasource.outputDir}`,
	);
	logVerbose(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await resolveCollectionsForDatasource(client, datasource);

	logVerbose(
		`📋 Encontradas ${collections.length} collections para ${datasource.datasource}`,
	);

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			logVerbose(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	const { mainCollections, splitCollections } = splitCollectionsByConfig(
		collectionTypes,
		datasource.splitCollections,
	);
	const splitCollectionNamesSet = new Set(splitCollections.keys());
	const baseTypeIndex = createBaseTypeIndex(
		collectionTypes,
		baseInterfaceNaming,
	);

	const hasMainCollections = Object.keys(mainCollections).length > 0;
	const mainContent = withMainFileImports(
		generateContent(mainCollections, baseInterfaceNaming),
		mainCollections,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);
	const mainOutputPath = hasMainCollections
		? path.join(datasource.outputDir, "index.ts")
		: path.join(datasource.outputDir, "_main.ts");

	if (splitCollections.size === 0) {
		const mainWrite = writeGeneratedFile(mainContent, mainOutputPath);
		return {
			writeFiles: [
				{ outputPath: mainWrite.outputPath, changed: mainWrite.changed },
			],
		};
	}

	const splitFilesContent = withSplitFileImports(
		generateSplitFiles(splitCollections, baseInterfaceNaming),
		splitCollections,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	const generatedFilePaths = [
		path.resolve(process.cwd(), datasource.outputDir, "index.ts"),
		path.resolve(process.cwd(), datasource.outputDir, "collections.ts"),
		...[...splitFilesContent.keys()].map((collectionName) =>
			path.resolve(
				process.cwd(),
				datasource.outputDir,
				`${toFileName(collectionName)}.ts`,
			),
		),
	];

	const unusedFiles = getUnusedFiles(generatedFilePaths, datasource.outputDir);

	if (unusedFiles.length > 0) {
		logInfo(
			`\n⚠️  Encontrados ${unusedFiles.length} arquivo(s) não utilizado(s) em ${datasource.outputDir}/:`,
		);
		if (config.verbose) {
			for (const file of unusedFiles) {
				logVerbose(`   - ${path.basename(file)}`);
			}
		}

		const removed = cleanOutputDirectory(unusedFiles);
		logInfo(`🗑️  Removidos ${removed.length} arquivo(s) não utilizado(s).`);
	}

	const collectionsContent = generateCollectionsFile(
		mergeCollectionTypeMaps(splitCollections.values()),
		baseInterfaceNaming,
		[...splitCollections.keys()],
	);

	const indexContent = generateIndexFileWithReexports(
		[...splitCollections.keys()],
		baseInterfaceNaming,
	);

	const collectionsResult = writeGeneratedFile(
		collectionsContent,
		path.join(datasource.outputDir, "collections.ts"),
	);
	// hasMainCollections → inline types go to index.ts (same as main flow)
	// !hasMainCollections → re-exports go to index.ts, no _main.ts generated
	const primaryIndexContent = hasMainCollections ? mainContent : indexContent;
	const indexResult = writeGeneratedFile(
		primaryIndexContent,
		path.join(datasource.outputDir, "index.ts"),
	);
	const splitResult = writeMultipleFiles(
		splitFilesContent,
		datasource.outputDir,
	);

	return {
		writeFiles: [
			{
				outputPath: collectionsResult.outputPath,
				changed: collectionsResult.changed,
			},
			{ outputPath: indexResult.outputPath, changed: indexResult.changed },
			...(splitResult?.files ?? []),
		],
	};
}

export async function runGenerateTypesForDatasources(): Promise<GenerateTypesResult> {
	const datasourceConfigs = resolveDatasourceConfigs();

	if (datasourceConfigs.length === 0) {
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	applyWorkspaceLockIfNeeded();

	const writeFiles: GeneratedFileWrite[] = [];

	for (const datasource of datasourceConfigs) {
		const result = await runGenerateTypesForDatasource(datasource);
		writeFiles.push(...result.writeFiles);
	}

	const outputDirs = datasourceConfigs.map((d) => d.outputDir);
	await runBiomeFix(outputDirs);

	if (writeFiles.length === 1) {
		return {
			resultType: "single",
			outputPath: writeFiles[0]?.outputPath,
			changed: writeFiles[0]?.changed,
		};
	}

	return {
		resultType: "multi",
		files: writeFiles,
		totalFiles: writeFiles.length,
		totalChanged: writeFiles.filter((file) => file.changed).length,
	};
}

export async function runGenerateTypes(): Promise<GenerateTypesResult> {
	return runGenerateTypesForDatasources();
}
