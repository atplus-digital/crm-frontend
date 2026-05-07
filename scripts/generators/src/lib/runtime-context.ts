import type { AtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import type { Logger } from "@scripts/generators/src/lib/logging";

export interface PipelineExecutionContext<
	TRuntimeConfig,
	TPipelineContext = unknown,
> {
	logger: Logger;
	overrideConfig?: Partial<TRuntimeConfig>;
	runtimeConfig: TRuntimeConfig;
	outputDirs: string[];
	atomicSessions: AtomicWriteSession[];
	pipelineContext?: TPipelineContext;
}

interface CreatePipelineExecutionContextOptions<
	TRuntimeConfig,
	_TPipelineContext = unknown,
> {
	overrideConfig: Partial<TRuntimeConfig> | undefined;
	logger: Logger;
	defaultConfig: TRuntimeConfig;
	getOutputDirs: (runtimeConfig: TRuntimeConfig) => string[];
}

export function createPipelineExecutionContext<
	TRuntimeConfig,
	TPipelineContext = unknown,
>(
	options: CreatePipelineExecutionContextOptions<
		TRuntimeConfig,
		TPipelineContext
	>,
): PipelineExecutionContext<TRuntimeConfig, TPipelineContext> {
	const runtimeConfig: TRuntimeConfig = options.overrideConfig
		? { ...options.defaultConfig, ...options.overrideConfig }
		: options.defaultConfig;

	return {
		logger: options.logger,
		overrideConfig: options.overrideConfig,
		runtimeConfig,
		outputDirs: options.getOutputDirs(runtimeConfig),
		atomicSessions: [],
	};
}

export function getPipelineContextOrThrow<TPipelineContext>(
	context: { pipelineContext?: TPipelineContext },
	errorMessage: string,
): TPipelineContext {
	if (!context.pipelineContext) {
		throw new Error(errorMessage);
	}

	return context.pipelineContext;
}
