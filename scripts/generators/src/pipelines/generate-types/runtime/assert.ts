import { assertWithRestore } from "@scripts/generators/src/lib/pipeline-assert";
import type { GenerateTypesResult } from "../@types/script";
import { restoreAllSessions } from "./backup";
import type { GenerateTypesExecutionContext } from "./context";

export function assertGenerateTypesResult(
	context: GenerateTypesExecutionContext,
): GenerateTypesResult {
	const pipelineContext = context.pipelineContext;
	const restore = () => restoreAllSessions(context);

	assertWithRestore(
		pipelineContext,
		restore,
		"Pipeline de geração não foi executado",
	);

	assertWithRestore(
		!pipelineContext.dataSourceConfigs ||
			pipelineContext.dataSourceConfigs.length > 0,
		restore,
		"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
	);

	const successfulCount = pipelineContext.datasourceResults?.filter(
		(r) => r.status === "fulfilled",
	).length;

	if (!successfulCount || successfulCount === 0) {
		restore();
		const failedNames =
			pipelineContext.datasourceResults
				?.filter((r) => r.status === "rejected")
				.map((r) => r.name)
				.join(", ") ?? "unknown";
		throw new Error(`Todos os datasources falharam: ${failedNames}`);
	}

	assertWithRestore(
		pipelineContext.finalResult,
		restore,
		"Pipeline não produziu resultado final",
	);

	context.finalResult = pipelineContext.finalResult;
	return pipelineContext.finalResult;
}
