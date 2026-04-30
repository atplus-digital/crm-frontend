import type { GenerateTypesResult } from "./@types/script";
import { restoreAllSessions } from "./backup";
import type { GenerateTypesExecutionContext } from "./context";

export function assertGenerateTypesResult(
	context: GenerateTypesExecutionContext,
): GenerateTypesResult {
	const pipelineContext = context.pipelineContext;

	if (!pipelineContext) {
		restoreAllSessions(context);
		throw new Error("Pipeline de geração não foi executado");
	}

	if (
		!pipelineContext.dataSourceConfigs ||
		pipelineContext.dataSourceConfigs.length === 0
	) {
		restoreAllSessions(context);
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	const successfulCount = pipelineContext.datasourceResults?.filter(
		(r) => r.status === "fulfilled",
	).length;

	if (!successfulCount || successfulCount === 0) {
		restoreAllSessions(context);
		const failedNames =
			pipelineContext.datasourceResults
				?.filter((r) => r.status === "rejected")
				.map((r) => r.name)
				.join(", ") ?? "unknown";
		throw new Error(`Todos os datasources falharam: ${failedNames}`);
	}

	if (!pipelineContext.finalResult) {
		restoreAllSessions(context);
		throw new Error("Pipeline não produziu resultado final");
	}

	context.finalResult = pipelineContext.finalResult;
	return pipelineContext.finalResult;
}
