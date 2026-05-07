import type { AtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import type { Logger } from "@scripts/generators/src/lib/logging";
import { defaultLogger as logger } from "@scripts/generators/src/lib/logging";
import type { GenerationContext } from "./@types/orchestration";
import type { ScriptConfig } from "./@types/script-config";
import { config } from "./config";

function getOutputDirs(runtimeConfig: ScriptConfig): string[] {
	return [runtimeConfig.outputDir];
}

export interface GenerateCustomRequestsExecutionContext {
	logger: Logger;
	overrideConfig?: Partial<ScriptConfig>;
	runtimeConfig: ScriptConfig;
	outputDirs: string[];
	atomicSessions: AtomicWriteSession[];
	pipelineContext?: GenerationContext;
}

export function createGenerateCustomRequestsExecutionContext(
	overrideConfig?: Partial<ScriptConfig>,
	injectedLogger: Logger = logger,
): GenerateCustomRequestsExecutionContext {
	const runtimeConfig: ScriptConfig = overrideConfig
		? { ...config, ...overrideConfig }
		: config;

	return {
		logger: injectedLogger,
		overrideConfig,
		runtimeConfig,
		outputDirs: getOutputDirs(runtimeConfig),
		atomicSessions: [],
	};
}

export function getPipelineContext(
	context: GenerateCustomRequestsExecutionContext,
): GenerationContext {
	if (!context.pipelineContext) {
		throw new Error("Pipeline de geração não foi executado");
	}

	return context.pipelineContext;
}
