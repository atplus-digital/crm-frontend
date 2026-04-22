import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	DataSourceClient,
	DataSourceFilesResult,
	DataSourceGenerationConfig,
	GenerateTypesResult,
} from "./@types/script";
import { NocoBaseDataSourceClient } from "./generation/client";
import { createInitialContext } from "./pipeline/context-builder";
import { defaultPipeline } from "./pipeline/default-pipeline";
import { runPostPipeline } from "./pipeline/post-pipeline";
import { logger } from "./utils/logger";
import { normalizeCollectionNames } from "./utils/naming";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export { normalizeCollectionNames } from "./utils/naming";

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
	const ctx = createInitialContext(config, dataSource, client);
	const result = await defaultPipeline(ctx);
	return { writeFiles: result.writeResults ?? [] };
}

export async function runGenerateTypesForDataSources(): Promise<GenerateTypesResult> {
	const dataSourceConfigs = resolveDataSourceConfigs();

	if (dataSourceConfigs.length === 0) {
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	applyWorkspaceLockIfNeeded();

	const settledResults = await Promise.allSettled(
		dataSourceConfigs.map((dataSource) =>
			runGenerateTypesForDataSource(dataSource),
		),
	);

	const successfulResults: DataSourceFilesResult[] = [];
	const failedDataSources: string[] = [];

	for (let i = 0; i < settledResults.length; i++) {
		const result = settledResults[i];
		const dataSourceName = dataSourceConfigs[i]?.name ?? `datasource-${i}`;

		if (result.status === "fulfilled") {
			successfulResults.push(result.value);
			logger.info(`✅ Datasource '${dataSourceName}' processado com sucesso`);
		} else {
			failedDataSources.push(dataSourceName);
			logger.error(
				`❌ Falha no datasource '${dataSourceName}': ${result.reason}`,
			);
		}
	}

	if (successfulResults.length === 0) {
		throw new Error(
			`Todos os datasources falharam: ${failedDataSources.join(", ")}`,
		);
	}

	const writeFiles = successfulResults.flatMap((result) => result.writeFiles);

	const outputDirs = dataSourceConfigs
		.filter((_, i) => settledResults[i]?.status === "fulfilled")
		.map((d) => d.outputDir);
	await runPostPipeline(outputDirs, writeFiles);

	const totalChanged = writeFiles.filter((f) => f.changed).length;
	const totalSkipped = writeFiles.filter((f) => f.skipped).length;

	logger.info(
		`\n✅ Geração concluída: ${totalChanged} arquivo(s) atualizado(s)${totalSkipped > 0 ? `, ${totalSkipped} pulado(s) (em edição)` : ""}`,
	);

	if (failedDataSources.length > 0) {
		logger.warn(
			`⚠️  ${failedDataSources.length} datasource(s) falharam: ${failedDataSources.join(", ")}`,
		);
	}

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
