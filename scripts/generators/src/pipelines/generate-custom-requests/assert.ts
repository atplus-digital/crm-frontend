import type { GenerationContext } from "./@types/orchestration";
import {
	type GenerateCustomRequestsExecutionContext,
	getPipelineContext,
} from "./context";

function reportSchemasNotFound(pipelineContext: GenerationContext): void {
	if (
		!pipelineContext.schemasNotFound ||
		pipelineContext.schemasNotFound.length === 0
	) {
		return;
	}

	const logger = pipelineContext.logger;
	logger.warn("");
	logger.warn("=".repeat(60));
	logger.warn("SCHEMAS DE COLLECTIONS NÃO ENCONTRADOS:");
	logger.warn("=".repeat(60));
	for (const notFound of pipelineContext.schemasNotFound) {
		logger.warn(
			`  - Collection: "${notFound.collectionName}" (datasource: ${notFound.dataSourceKey})`,
		);
		logger.warn(
			"    Essas collections não têm schema gerado em src/generated/types/.",
		);
		logger.warn(
			"    Considere adicionar ao datasources.config.ts do generate-types.",
		);
	}
	logger.warn("=".repeat(60));
	logger.warn("");
}

export function assertGenerateCustomRequestsResult(
	context: GenerateCustomRequestsExecutionContext,
): GenerationContext {
	const pipelineContext = getPipelineContext(context);

	if (!pipelineContext.config) {
		throw new Error("Configuração de runtime não foi carregada");
	}

	if (!pipelineContext.mergedEntries) {
		throw new Error("Pipeline não produziu entradas finais");
	}

	reportSchemasNotFound(pipelineContext);

	return pipelineContext;
}
