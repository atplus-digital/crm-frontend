import type { Logger } from "@scripts/generators/src/lib/logging";
import { defaultLogger as logger } from "@scripts/generators/src/lib/logging";
import type { GenerationContext } from "./@types/orchestration";
import type { ScriptConfig } from "./@types/script-config";

export interface GenerateCustomRequestsExecutionContext {
	logger: Logger;
	overrideConfig?: Partial<ScriptConfig>;
	pipelineContext?: GenerationContext;
}

export function createGenerateCustomRequestsExecutionContext(
	overrideConfig?: Partial<ScriptConfig>,
	injectedLogger: Logger = logger,
): GenerateCustomRequestsExecutionContext {
	return { logger: injectedLogger, overrideConfig };
}

export function getPipelineContext(
	context: GenerateCustomRequestsExecutionContext,
): GenerationContext {
	if (!context.pipelineContext) {
		throw new Error("Pipeline de geração não foi executado");
	}

	return context.pipelineContext;
}
