import { config } from "@scripts/generate-types/config";
import type {
	DataSourceFilesResult,
	DataSourceGenerationConfig,
	GenerateTypesResult,
} from "./@types/script";
import { createInitialContext } from "./pipeline/core/context-builder";
import { defaultPipeline } from "./pipeline/core/default-pipeline";
import { runPostPipeline } from "./pipeline/post-pipeline";
import { resolveDataSourceConfigs } from "./utils/config";
import { createDataSourceClient } from "./utils/create-dataSource-client";
import { logger } from "./utils/logger";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export { normalizeCollectionNames } from "./utils/naming";

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
