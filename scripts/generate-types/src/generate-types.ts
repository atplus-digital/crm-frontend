import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	DataSourceGenerationConfig,
	GenerateTypesResult,
} from "./@types/script";
import { NocoBaseClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateCollectionsFile } from "./generation/collections-index";
import { generateContent, generateSplitFiles } from "./generation/content";
import {
	adapterEnumsToInferredEnums,
	mergeAdapterWithSample,
	mergeEnums,
} from "./generation/enum-inference";
import { generateMultiCollectionReport } from "./generation/enum-inference-report";
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
const IXC_DATASOURCE_NAME = "d_db_ixcsoft";

interface GeneratedFileWrite {
	outputPath: string;
	changed: boolean;
}

interface DataSourceFilesResult {
	writeFiles: GeneratedFileWrite[];
}

export function normalizeCollectionNames(
	collectionNames: string[] | undefined,
): string[] {
	if (!collectionNames) {
		return [];
	}

	return [...new Set(collectionNames)]
		.map((collectionName) => collectionName.trim())
		.filter((collectionName) => collectionName.length > 0);
}

export function resolveDataSourceConfigs(): DataSourceGenerationConfig[] {
	return (config.datasources ?? []).filter(
		(datasource) => datasource.outputDir.trim().length > 0,
	);
}

export function mergeCollectionTypeMaps(
	collectionMaps: Iterable<CollectionTypesMap>,
): CollectionTypesMap {
	const merged: CollectionTypesMap = {};
	for (const collectionMap of collectionMaps) {
		Object.assign(merged, collectionMap);
	}
	return merged;
}

async function resolveCollectionsForDataSource(
	client: NocoBaseClient,
	dataSource: DataSourceGenerationConfig,
): Promise<Array<{ name: string }>> {
	const configuredCollectionNames = normalizeCollectionNames(
		dataSource.collections,
	);

	if (configuredCollectionNames.length > 0) {
		return configuredCollectionNames.map((name) => ({ name }));
	}

	if (dataSource.dataSource !== MAIN_DATASOURCE_NAME) {
		throw new Error(
			`DataSource '${dataSource.name}' (${dataSource.dataSource}) exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	}

	return client.fetchCollections();
}

async function runGenerateTypesForDataSource(
	dataSource: DataSourceGenerationConfig,
): Promise<DataSourceFilesResult> {
	const client = new NocoBaseClient(
		{
			baseUrl: config.baseUrl,
			token: config.token,
			timeoutMs: config.requestTimeoutMs,
		},
		{
			requestHeaders: {
				"X-Data-Source": dataSource.dataSource,
			},
		},
	);
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		dataSource.baseInterfaceNaming ?? config.baseInterfaceNaming,
	);

	logInfo(
		`🔧 Gerando tipos para datasource '${dataSource.dataSource}' em ${dataSource.outputDir}`,
	);
	logVerbose(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await resolveCollectionsForDataSource(client, dataSource);

	logVerbose(
		`📋 Encontradas ${collections.length} collections para ${dataSource.dataSource}`,
	);

	const isIXC = dataSource.dataSource === IXC_DATASOURCE_NAME;
	const collectionReports: Array<{
		collectionName: string;
		enumFields: Map<
			string,
			{
				values: string[];
				labels: Record<string, string>;
				cardinality: number;
				totalRecords: number;
			}
		>;
	}> = [];

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			logVerbose(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	// Inferência de enums por amostragem de dados (fallback quando uiSchema não tem enum definido)
	for (const [collectionName, types] of Object.entries(collectionTypes)) {
		const scalarFieldNames = Array.from(types.scalars.keys()).filter(
			(name) => !types.relations.has(name),
		);

		if (scalarFieldNames.length > 0) {
			let adapterEnums: Record<
				string,
				{ values: string[]; labels?: Record<string, string> }
			> = {};
			let usedAdapter = false;

			if (dataSource.preEnumAdapter) {
				try {
					adapterEnums =
						await dataSource.preEnumAdapter.fetchEnums(collectionName);
					usedAdapter = true;
				} catch {
					logVerbose(
						`[${collectionName}] Adapter '${dataSource.preEnumAdapter.name}' falhou — usando sample-based`,
					);
				}
			}

			try {
				const inferredEnums = await client.inferEnumsFromData(
					collectionName,
					scalarFieldNames,
				);

				const existingEnums = new Map(types.enums);

				let finalInferredEnums = inferredEnums;
				if (usedAdapter && Object.keys(adapterEnums).length > 0) {
					const adapterInferred = adapterEnumsToInferredEnums(adapterEnums);
					finalInferredEnums = mergeAdapterWithSample(
						adapterInferred,
						inferredEnums,
					);
				}

				const mergedEnums = mergeEnums(existingEnums, finalInferredEnums);

				types.enums = mergedEnums;

				const inferredCount = Object.keys(finalInferredEnums).length;
				if (inferredCount > 0) {
					const enumFieldsWithMeta = new Map<
						string,
						{
							values: string[];
							labels: Record<string, string>;
							cardinality: number;
							totalRecords: number;
						}
					>();
					for (const [fieldName, enumInfo] of Object.entries(
						finalInferredEnums,
					)) {
						enumFieldsWithMeta.set(fieldName, {
							values: enumInfo.values,
							labels: enumInfo.labels,
							cardinality: enumInfo.cardinality,
							totalRecords: enumInfo.totalRecords,
						});
					}
					collectionReports.push({
						collectionName,
						enumFields: enumFieldsWithMeta,
					});
				}
			} catch {
				// No-op
			}
		}
	}

	const { mainCollections, splitCollections } = splitCollectionsByConfig(
		collectionTypes,
		dataSource.splitCollections,
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
		? path.join(dataSource.outputDir, "index.ts")
		: path.join(dataSource.outputDir, "_main.ts");

	if (splitCollections.size === 0) {
		const mainWrite = writeGeneratedFile(mainContent, mainOutputPath);

		if (isIXC && collectionReports.length > 0) {
			const reportContent = generateMultiCollectionReport(collectionReports);
			writeGeneratedFile(
				reportContent,
				path.join(dataSource.outputDir, "_ixc-enum-inference.md"),
			);
		}

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
		path.resolve(process.cwd(), dataSource.outputDir, "index.ts"),
		path.resolve(process.cwd(), dataSource.outputDir, "collections.ts"),
		...[...splitFilesContent.keys()].map((collectionName) =>
			path.resolve(
				process.cwd(),
				dataSource.outputDir,
				`${toFileName(collectionName)}.ts`,
			),
		),
	];

	const unusedFiles = getUnusedFiles(generatedFilePaths, dataSource.outputDir);

	if (unusedFiles.length > 0) {
		logInfo(
			`\n⚠️  Encontrados ${unusedFiles.length} arquivo(s) não utilizado(s) em ${dataSource.outputDir}/:`,
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
		path.join(dataSource.outputDir, "collections.ts"),
	);
	const primaryIndexContent = hasMainCollections ? mainContent : indexContent;
	const indexResult = writeGeneratedFile(
		primaryIndexContent,
		path.join(dataSource.outputDir, "index.ts"),
	);
	const splitResult = writeMultipleFiles(
		splitFilesContent,
		dataSource.outputDir,
	);

	if (isIXC && collectionReports.length > 0) {
		const reportContent = generateMultiCollectionReport(collectionReports);
		writeGeneratedFile(
			reportContent,
			path.join(dataSource.outputDir, "_ixc-enum-inference.md"),
		);
	}

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

export async function runGenerateTypesForDataSources(): Promise<GenerateTypesResult> {
	const dataSourceConfigs = resolveDataSourceConfigs();

	if (dataSourceConfigs.length === 0) {
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	applyWorkspaceLockIfNeeded();

	const writeFiles: GeneratedFileWrite[] = [];

	for (const dataSource of dataSourceConfigs) {
		const result = await runGenerateTypesForDataSource(dataSource);
		writeFiles.push(...result.writeFiles);
	}

	const outputDirs = dataSourceConfigs.map((d) => d.outputDir);
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
	return runGenerateTypesForDataSources();
}
