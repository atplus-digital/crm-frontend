import type { DataSourceFilesResult } from "../../../@types/script";
import { createInitialContext } from "../../../pipeline/core/context-builder";
import { defaultPipeline } from "../../../pipeline/core/default-pipeline";
import { createDataSourceClient } from "../../../utils/create-dataSource-client";
import { logger } from "../../../utils/logger";
import type {
	DatasourceRunResult,
	GenerationContext,
	GenerationStage,
} from "../types";

async function runSingleDatasource(
	config: GenerationContext["config"],
	dataSource: GenerationContext["dataSourceConfigs"][number],
): Promise<DataSourceFilesResult> {
	logger.info(`▶  Processando datasource: ${dataSource.name}`, {
		datasource: dataSource.name,
		stage: "run-datasources",
	});

	const client = createDataSourceClient(dataSource);
	const ctx = createInitialContext(config, dataSource, client);
	const result = await defaultPipeline(ctx);

	logger.info(`✅ Datasource '${dataSource.name}' processado com sucesso`, {
		datasource: dataSource.name,
	});

	return { writeFiles: result.writeResults ?? [] };
}

export function runDatasourcesStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		const settledResults = await Promise.allSettled(
			ctx.dataSourceConfigs.map((ds) => runSingleDatasource(ctx.config, ds)),
		);

		const datasourceResults: DatasourceRunResult[] = settledResults.map(
			(settled, i) => {
				const name = ctx.dataSourceConfigs[i]?.name ?? `datasource-${i}`;

				if (settled.status === "fulfilled") {
					return { name, status: "fulfilled", result: settled.value };
				}

				return { name, status: "rejected", error: settled.reason };
			},
		);

		return { ...ctx, datasourceResults };
	};
}
