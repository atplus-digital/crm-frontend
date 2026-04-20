import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	DataSourceClient,
	DataSourceGenerationConfig,
	GenerateTypesResult,
} from "./@types/script";
import { NocoBaseDataSourceClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateCollectionsFile } from "./generation/collections-index";
import { generateContent, generateSplitFiles } from "./generation/content";
import {
	adapterEnumsToInferredEnums,
	applyEnumCorrections,
	mergeEnums,
} from "./generation/enum-inference";
import { generateMultiCollectionReport } from "./generation/enum-inference-report";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "./generation/import-injector";
import { generateIndexFileWithReexports } from "./generation/split-index";
import { splitCollectionsByConfig } from "./utils/collection-splitter";
import { runLinterFix } from "./utils/linter-runner";
import { logger } from "./utils/logger";
import { resolveBaseInterfaceNamingConfig, toFileName } from "./utils/naming";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";
import {
	cleanOutputDirectory,
	getUnusedFiles,
	writeGeneratedFile,
	writeMultipleFiles,
} from "./utils/writer";

interface GeneratedFileWrite {
	outputPath: string;
	changed: boolean;
	skipped?: boolean;
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
	client: DataSourceClient,
	dataSource: DataSourceGenerationConfig,
): Promise<Array<{ name: string }>> {
	const configuredCollectionNames = normalizeCollectionNames(
		dataSource.collections,
	);

	if (configuredCollectionNames.length > 0) {
		return configuredCollectionNames.map((name) => ({ name }));
	}

	if (dataSource.type !== "nocobase") {
		throw new Error(
			`DataSource '${dataSource.name}' (type: '${dataSource.type}') exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	}

	return client.fetchCollections();
}

function createDataSourceClient(
	dataSource: DataSourceGenerationConfig,
): DataSourceClient {
	switch (dataSource.type) {
		case "nocobase":
			return new NocoBaseDataSourceClient(
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
		case "rest":
			throw new Error(
				`Datasource REST ainda não implementado. DataSource: '${dataSource.name}'`,
			);
		default:
			throw new Error(
				`Tipo de datasource desconhecido: '${(dataSource as DataSourceGenerationConfig).type}'. Esperado: 'nocobase' | 'rest'`,
			);
	}
}

async function runGenerateTypesForDataSource(
	dataSource: DataSourceGenerationConfig,
): Promise<DataSourceFilesResult> {
	const client = createDataSourceClient(dataSource);
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		dataSource.baseInterfaceNaming ?? config.baseInterfaceNaming,
	);

	logger.info(
		`🔧 Gerando tipos para datasource '${dataSource.dataSource}' em ${dataSource.outputDir}`,
	);
	logger.debug(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await resolveCollectionsForDataSource(client, dataSource);

	logger.debug(
		`📋 Encontradas ${collections.length} collections para ${dataSource.dataSource}`,
	);

	const shouldGenerateEnumReport = dataSource.generateEnumReport ?? false;
	const collectionReports: Array<{
		collectionName: string;
		enumFields: Map<
			string,
			{
				values: string[];
				labels: Record<string, string>;
				cardinality: number;
				totalRecords: number;
				origin: "api" | "adapter" | "inferencia";
			}
		>;
	}> = [];

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			logger.debug(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	// Fase 1: Aplicar todas as transformações de enum (adapter, inferência, corrections)
	// Mapa para rastrear a origem de cada enum para o relatório
	const enumOrigins = new Map<
		string,
		Map<string, { origin: "api" | "adapter" | "inferencia" }>
	>();

	for (const [collectionName, types] of Object.entries(collectionTypes)) {
		const existingEnums = new Map(types.enums);
		const originsForCollection = new Map<
			string,
			{ origin: "api" | "adapter" | "inferencia" }
		>();

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
				logger.debug(
					`[${collectionName}] Adapter '${dataSource.preEnumAdapter.name}' falhou — usando sample-based`,
				);
			}
		}

		const hasAdapterEnum = usedAdapter && Object.keys(adapterEnums).length > 0;

		if (!types.schemaAvailable && !hasAdapterEnum) {
			try {
				const scalarFieldNames = Array.from(types.scalars.keys()).filter(
					(name) => !types.relations.has(name),
				);

				if (scalarFieldNames.length === 0) {
					continue;
				}

				const inferredEnums = await client.inferEnumsFromData(
					collectionName,
					scalarFieldNames,
				);

				// Rastrear origem dos enums inferidos
				for (const fieldName of Object.keys(inferredEnums)) {
					originsForCollection.set(fieldName, { origin: "inferencia" });
				}

				const finalInferredEnums = inferredEnums;
				const mergedEnums = mergeEnums(existingEnums, finalInferredEnums);
				types.enums = mergedEnums;
			} catch {
				// No-op
			}
		} else if (hasAdapterEnum) {
			const adapterInferred = adapterEnumsToInferredEnums(adapterEnums);

			// Rastrear origem dos enums do adapter
			for (const fieldName of Object.keys(adapterInferred)) {
				originsForCollection.set(fieldName, { origin: "adapter" });
			}

			const mergedEnums = mergeEnums(existingEnums, adapterInferred);
			types.enums = mergedEnums;
		}

		if (originsForCollection.size > 0) {
			enumOrigins.set(collectionName, originsForCollection);
		}
	}

	// Fase 2: Aplicar correções de enum (labels customizados)
	applyEnumCorrections(collectionTypes, dataSource.enumCorrection);

	// Fase 3: Coletar TODOS os enums finais para o relatório (se habilitado)
	if (shouldGenerateEnumReport) {
		for (const [collectionName, types] of Object.entries(collectionTypes)) {
			if (types.enums.size === 0) {
				continue;
			}

			const originsForCollection = enumOrigins.get(collectionName);
			const enumFieldsWithMeta = new Map<
				string,
				{
					values: string[];
					labels: Record<string, string>;
					cardinality: number;
					origin: "api" | "adapter" | "inferencia";
				}
			>();

			for (const [fieldName, enumOptions] of types.enums.entries()) {
				const values = enumOptions.map((opt) => String(opt.value));
				const labels = Object.fromEntries(
					enumOptions.map((opt) => [String(opt.value), opt.label]),
				);

				// Tenta obter a origem rastreada, senão usa "api" como fallback
				const trackedOrigin = originsForCollection?.get(fieldName)?.origin;
				const origin = trackedOrigin ?? "api";

				enumFieldsWithMeta.set(fieldName, {
					values,
					labels,
					cardinality: enumOptions.length,
					totalRecords: 0,
					origin,
				});
			}

			if (enumFieldsWithMeta.size > 0) {
				collectionReports.push({
					collectionName,
					enumFields: enumFieldsWithMeta,
				});
			}
		}
	}

	const { mainCollections, splitCollections } = splitCollectionsByConfig(
		collectionTypes,
		dataSource.splitCollections ?? [],
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

		if (shouldGenerateEnumReport && collectionReports.length > 0) {
			const reportContent = generateMultiCollectionReport(collectionReports);
			writeGeneratedFile(
				reportContent,
				path.join(dataSource.outputDir, "_enum-inference.md"),
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
		logger.info(
			`\n⚠️  Encontrados ${unusedFiles.length} arquivo(s) não utilizado(s) em ${dataSource.outputDir}/:`,
		);
		for (const file of unusedFiles) {
			logger.debug(`   - ${path.basename(file)}`);
		}

		const removed = cleanOutputDirectory(unusedFiles);
		logger.info(`🗑️  Removidos ${removed.length} arquivo(s) não utilizado(s).`);
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

	if (shouldGenerateEnumReport && collectionReports.length > 0) {
		const reportContent = generateMultiCollectionReport(collectionReports);
		writeGeneratedFile(
			reportContent,
			path.join(dataSource.outputDir, "_enum-inference.md"),
		);
	}

	const allWriteFiles = [
		{
			outputPath: collectionsResult.outputPath,
			changed: collectionsResult.changed,
			skipped: collectionsResult.skipped,
		},
		{
			outputPath: indexResult.outputPath,
			changed: indexResult.changed,
			skipped: indexResult.skipped,
		},
		...(splitResult?.files ?? []),
	];

	const totalChanged = allWriteFiles.filter((f) => f.changed).length;
	const totalSkipped = allWriteFiles.filter((f) => f.skipped).length;

	logger.info(
		`📄 ${dataSource.dataSource}: ${totalChanged} arquivo(s) atualizado(s)${totalSkipped > 0 ? `, ${totalSkipped} pulado(s) (em edição)` : ""}`,
	);

	if (shouldGenerateEnumReport && collectionReports.length > 0) {
		const reportContent = generateMultiCollectionReport(collectionReports);
		writeGeneratedFile(
			reportContent,
			path.join(dataSource.outputDir, "_enum-inference.md"),
		);
	}

	return {
		writeFiles: allWriteFiles,
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

	const results = await Promise.all(
		dataSourceConfigs.map((dataSource) =>
			runGenerateTypesForDataSource(dataSource),
		),
	);
	const writeFiles = results.flatMap((result) => result.writeFiles);

	const outputDirs = dataSourceConfigs.map((d) => d.outputDir);
	await runLinterFix(outputDirs);

	const totalChanged = writeFiles.filter((f) => f.changed).length;
	const totalSkipped = writeFiles.filter((f) => f.skipped).length;

	logger.info(
		`\n✅ Geração concluída: ${totalChanged} arquivo(s) atualizado(s)${totalSkipped > 0 ? `, ${totalSkipped} pulado(s) (em edição)` : ""}`,
	);

	if (writeFiles.length === 1) {
		return {
			resultType: "single",
			outputPath: writeFiles[0]?.outputPath,
			changed: writeFiles[0]?.changed,
			skipped: writeFiles[0]?.skipped,
		};
	}

	return {
		resultType: "multi",
		files: writeFiles,
		totalFiles: writeFiles.length,
		totalChanged,
		totalSkipped,
	};
}

export async function runGenerateTypes(): Promise<GenerateTypesResult> {
	return runGenerateTypesForDataSources();
}
