import type { AtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import {
	createPipelineExecutionContext,
	getPipelineContextOrThrow,
	type PipelineExecutionContext,
} from "@scripts/generators/src/lib/runtime-context";
import type { ScriptConfig } from "../@types/script-config";
import { config } from "../config";
import type { GenerationContext } from "../pipeline/orchestration/types";

function getOutputDirs(runtimeConfig: ScriptConfig): string[] {
	return [runtimeConfig.outputDir];
}

export interface GenerateCustomRequestsExecutionContext {
	logger: PipelineExecutionContext<ScriptConfig, GenerationContext>["logger"];
	overrideConfig?: PipelineExecutionContext<
		ScriptConfig,
		GenerationContext
	>["overrideConfig"];
	runtimeConfig: ScriptConfig;
	outputDirs: string[];
	atomicSessions: AtomicWriteSession[];
	pipelineContext?: GenerationContext;
}

export function createGenerateCustomRequestsExecutionContext(
	overrideConfig: Partial<ScriptConfig> | undefined,
	injectedLogger: Logger,
): GenerateCustomRequestsExecutionContext {
	const baseContext = createPipelineExecutionContext<
		ScriptConfig,
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
	context: GenerateCustomRequestsExecutionContext,
): GenerationContext {
	return getPipelineContextOrThrow(
		context,
		"Pipeline de geração não foi executado",
	);
}

import type { Logger } from "@scripts/generators/src/lib/logging";
