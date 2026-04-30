import type { AtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import type { Logger } from "@scripts/generators/src/lib/logger";
import type { GenerateTypesResult, RuntimeConfig } from "./@types/script";
import { config } from "./config";
import type { GenerationContext } from "./pipeline/orchestration/types";

function getOutputDirs(runtimeConfig: RuntimeConfig): string[] {
	return [
		runtimeConfig.outputDir,
		...(runtimeConfig.datasources ?? [])
			.map((d) => d.outputDir)
			.filter((dir): dir is string => Boolean(dir?.trim())),
	];
}

export interface GenerateTypesExecutionContext {
	logger: Logger;
	overrideConfig?: Partial<RuntimeConfig>;
	runtimeConfig: RuntimeConfig;
	outputDirs: string[];
	atomicSessions: AtomicWriteSession[];
	pipelineContext?: GenerationContext;
	finalResult?: GenerateTypesResult;
}

export function createGenerateTypesExecutionContext(
	overrideConfig: Partial<RuntimeConfig> | undefined,
	injectedLogger: Logger,
): GenerateTypesExecutionContext {
	const runtimeConfig: RuntimeConfig = overrideConfig
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
	context: GenerateTypesExecutionContext,
): GenerationContext {
	if (!context.pipelineContext) {
		throw new Error("Pipeline de geração não foi inicializado");
	}
	return context.pipelineContext;
}
