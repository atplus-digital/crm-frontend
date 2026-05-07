import type { AtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import {
	createPipelineExecutionContext,
	getPipelineContextOrThrow,
	type PipelineExecutionContext,
} from "@scripts/generators/src/lib/runtime-context";
import type { GenerateTypesResult, RuntimeConfig } from "../@types/script";
import { config } from "../config";
import type { GenerationContext } from "../pipeline/orchestration/types";

function getOutputDirs(runtimeConfig: RuntimeConfig): string[] {
	return [runtimeConfig.outputDir];
}

export interface GenerateTypesExecutionContext {
	logger: PipelineExecutionContext<RuntimeConfig, GenerationContext>["logger"];
	overrideConfig?: PipelineExecutionContext<
		RuntimeConfig,
		GenerationContext
	>["overrideConfig"];
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
	const baseContext = createPipelineExecutionContext<
		RuntimeConfig,
		GenerationContext
	>({
		overrideConfig,
		logger: injectedLogger,
		defaultConfig: config,
		getOutputDirs,
	});
	return {
		...baseContext,
	};
}

export function getPipelineContext(
	context: GenerateTypesExecutionContext,
): GenerationContext {
	return getPipelineContextOrThrow(
		context,
		"Pipeline de geração não foi inicializado",
	);
}

import type { Logger } from "@scripts/generators/src/lib/logging";
