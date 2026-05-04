import type { GenerationContext } from "./@types/orchestration";
import {
	type GenerateCustomRequestsExecutionContext,
	getPipelineContext,
} from "./context";

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

	return pipelineContext;
}
